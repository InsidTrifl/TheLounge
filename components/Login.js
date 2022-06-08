import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full "
          src="https://i.postimg.cc/7Lp7ZHX7/dog.png"
          height={200}
          width={200}
          alt="logo"
        />

        <button
          onClick={authenticate}
          className="bg-[#FD6815] rounded-lg p-5 font-bold animate-pulse "
        >
          Welcome to the Borderlands
        </button>
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

export default Login;
