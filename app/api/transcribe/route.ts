import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import fs from 'fs';
import formidable from 'formidable';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
    api: {
      bodyParser: false,
    },
};

//https://github.com/openai/openai-node/discussions/217 for v3 to v4 migration
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to parse form data' });
            return;
        }
        try {
            const audioFile = files.audioData as formidable.File;
            const response = await openai.audio.transcriptions.create({
            model: 'whisper-1',
            file: fs.createReadStream(audioFile.path),
            });
            res.status(200).json({ text: response.data.text });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to transcribe audio' });
        }
      });
    }
  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
