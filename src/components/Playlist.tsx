import { Play } from "lucide-react";
import Image from "next/image";

const Playlist = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <a
        href="#"
        className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
      >
        <Image
          width={104}
          height={104}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong>Black Sabbath</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a
        href="#"
        className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
      >
        <Image
          width={104}
          height={104}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong>Black Sabbath</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a
        href="#"
        className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
      >
        <Image
          width={104}
          height={104}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong>Black Sabbath</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a
        href="#"
        className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
      >
        <Image
          width={104}
          height={104}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong>Black Sabbath</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a
        href="#"
        className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
      >
        <Image
          width={104}
          height={104}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong>Black Sabbath</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
      <a
        href="#"
        className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
      >
        <Image
          width={104}
          height={104}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong>Black Sabbath</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
    </div>
  );
};

export default Playlist;
