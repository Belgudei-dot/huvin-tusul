import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        className="w-full h-[100vh] object-cover opacity-80"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld1SSNUfPJFTN3cSOG_g4yQtFYOqgobGTWA&s"
      />

      {/* Wood Header Background + Text on Top */}
      <div className="absolute top-0 left-0 w-full h-[150px]">
        {/* Wood Background */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/053/267/308/small/wooden-planks-with-straw-on-top-and-bottom-rustic-background-natural-texture-farm-theme-suitable-for-agricultural-or-countryside-concepts-photo.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Header Texts */}
        <div className="flex justify-center gap-10 pt-10 relative z-10">
          <Link
            className="text-[40px] hover:scale-110 transition duration-280 ease-in-out font-bold text-white drop-shadow-lg"
            href={"/veg"}
          >
            product
          </Link>

          <Link
            className="text-[40px] hover:scale-110 transition duration-280 ease-in-out font-bold text-white drop-shadow-lg"
            href={"/contact"}
          >
            contact
          </Link>

          <Link
            className="text-[40px] hover:scale-110 transition duration-280 ease-in-out font-bold text-white drop-shadow-lg"
            href={"/about"}
          >
            about
          </Link>

          <Link
            className="text-[40px] hover:scale-110 transition duration-280 ease-in-out font-bold text-white drop-shadow-lg"
            href={"/"}
          >
            Home
          </Link>
        </div>
      </div>

      {/* Content Over Image */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[300px]">
        {/* Buttons */}
        <div className="grid grid-cols-5 gap-5 mt-10">
          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/cream"}
          >
            Tomatoes
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/pumpkin"}
          >
            Pumpkin
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/celery"}
          >
            Celery
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-600 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/ice"}
          >
            Cucumber
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/corn"}
          >
            Corn
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/sugar"}
          >
            Cabbage
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/potato"}
          >
            Potato
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-600 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/carrot"}
          >
            Carrot
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/onion"}
          >
            Onion
          </Link>

          <Link
            className="w-[200px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-500 flex justify-center items-center text-white font-bold rounded-xl"
            href={"/bellpepper"}
          >
            Bell Pepper
          </Link>

          <div className="col-span-5 flex justify-center mt-5">
            <Link
              className="w-[500px] h-[50px] hover:scale-110 transition duration-280 ease-in-out bg-lime-600 flex justify-center items-center text-white font-bold rounded-xl"
              href={"/vegan"}
            >
              A-Z
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
