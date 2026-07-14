import { getNowPlaying } from "../../api/movieApi";

export default function Home() {
  const NowPlayingData = getNowPlaying();
  console.log(NowPlayingData);
  return <div className="w-[300px] h-[300px] bg-gray-300">home</div>;
}
