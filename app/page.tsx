import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import AudioSyncButton from "@/components/AudioSyncButton/AudioSyncButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello world
      <Link href="/audioUpload" />
      <AudioPlayer />
      <AudioSyncButton />
    </div>
  );
}
