import Image from "next/image";
import recorder from "@/public/assets/recorder.png";

export default function Recorder() {
    return (
        // **incomplete (need to add microphone for more functionality -> upload file already works)**
        <div className="flex items-center justify-center">
        <Image src={recorder} width={350} height={350} alt="Microphone"/>
        </div>
    );
}