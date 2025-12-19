import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-w-screen min-h-screen">
      {/* Background Image */}
      <img
        src="https://thumbs.dreamstime.com/b/fruit-picking-process-tractor-trailer-full-apples-garden-under-blue-sky-d-illustration-246329990.jpg"
        className="absolute top-0 left-0 w-full h-full opacity-70 object-cover -z-10"
      />

      {/* Original Content */}
      <div>
        {/* HEADER WITH WOOD BACKGROUND */}
        <div className="relative w-full h-[150px]">
          <img
            src="https://media.istockphoto.com/id/624697496/photo/distressed-wooden-boards.jpg?s=612x612&w=0&k=20&c=Y4j6HgrHByyJeTl235u1m89gRhDCpat8I2z57YkHgSM="
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />

          {/* Text in front of wood image */}
          <div className="flex pb-40 gap-50 justify-center pt-10 relative z-10">
            <Link className="text-[40px] font-bold text-white" href={"/veg"}>
              <div className="flex justify-center items-center hover:scale-110 transition duration-280 ease-in-out">
                product
              </div>
            </Link>

            <Link
              className="text-[40px] font-bold text-white"
              href={"/contact"}
            >
              <div className="flex justify-center items-center hover:scale-110 transition duration-280 ease-in-out">
                contact
              </div>
            </Link>

            <Link className="text-[40px] font-bold text-white" href={"/about"}>
              <div className="flex justify-center items-center hover:scale-110 transition duration-280 ease-in-out">
                about
              </div>
            </Link>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-4  pl-20 gap-6 pt-50 pb-50">
          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-red-700 text-white"
            href={"/apples"}
          >
            Apples
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-orange-600 text-white"
            href={"/orange"}
          >
            Oranges
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-red-600 text-white"
            href={"/pear"}
          >
            Strawberries
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-amber-400 text-white"
            href={"/mango"}
          >
            Mango
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-amber-500 text-white"
            href={"/pineapple"}
          >
            Pineapple
          </Link>

          <div className="bg-lime-600 w-[200px] hover:scale-110 transition duration-280 ease-in-out rounded-xl">
            <Link
              className="flex gap-xl justify-center w-[200px] pr-20 pt-5 h-[10px] items-center rounded-t-xl text-[17px] font-bold bg-amber-500 text-white"
              href={"/lemon"}
            >
              Lemon and <br /> Lime
            </Link>
          </div>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-pink-900 text-white"
            href={"/grape"}
          >
            Grape
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-orange-400 text-white"
            href={"/manderin"}
          >
            Mandarin
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-red-600 text-white"
            href={"/strawberry"}
          >
            Strawberries
          </Link>

          <Link
            className="flex gap-xl justify-center hover:scale-110 transition duration-280 ease-in-out w-[200px] h-[50px] items-center rounded-xl text-[20px] font-bold bg-yellow-400 text-white"
            href={"/banana"}
          >
            Banana
          </Link>
        </div>
      </div>
    </div>
  );
}
