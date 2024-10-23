import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function Hero() {
  return (
    <div className="w-full md:h-[290px] flex justify-center mt-8">
      <div className="bg-indigo-200 h-full w-full lg:w-[80%] flex flex-col md:flex-row justify-between items-center p-4 md:p-0">
        {/* left side */}
        <div className="flex flex-col items-start ml-5 sm:ml-10 md:ml-20 mt-5 md:mt-0">
          <FontAwesomeIcon
            icon={faSpa}
            className="text-black hover:text-gray-500 text-5xl sm:text-6xl w-[50px] mb-4"
          />
          <h1 className="text-2xl sm:text-3xl font-sans font-bold">Up to 10% Off</h1>
          <button className="font-bold underline underline-offset-8 mt-4">
            Shop Now
          </button>
        </div>
        {/* right side */}
        <div className="mt-6 md:mt-0 mr-5">
          <Image
            src="/image/herro.jpg"
            width={200}
            height={200}
            className="object-cover rounded-lg"
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
