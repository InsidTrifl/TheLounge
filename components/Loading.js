import Image from "next/image";

function Loading() {
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full animate-spin"
          src="https://i.postimg.cc/7Lp7ZHX7/dog.png"
          height={200}
          width={200}
          alt="logo"
        />
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://i.postimg.cc/28kfK4mb/borderlands.jpg"
          layout="fill"
          objectFit="cover"
          alt="bgImage"
        />
      </div>
    </div>
  );
}

export default Loading;
