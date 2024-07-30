import Recorder from "../components/Recorder";
import UploadFile from "../components/UploadFile";


export default function note() {
    return (
      <div>
        <h1 className="text-5xl font-bold text-gray-dark text-center mt-16 font-serif">Record and Transcribe Lessons</h1>
        <Recorder />
        <UploadFile />
      </div>
    );
}