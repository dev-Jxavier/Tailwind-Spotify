import Image from "next/image";

const Daily = () => {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          width={120}
          height={120}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong className="fron-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-600">Ozzy Osbourne</span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          width={120}
          height={120}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong className="fron-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-600">Ozzy Osbourne</span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          width={120}
          height={120}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong className="fron-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-600">Ozzy Osbourne</span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          width={120}
          height={120}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong className="fron-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-600">Ozzy Osbourne</span>
      </a>
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          width={120}
          height={120}
          src="/assets/album.jpg"
          alt="album Black Sabbath"
        />
        <strong className="fron-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-600">Ozzy Osbourne</span>
      </a>
    </div>
  );
};

export default Daily;
