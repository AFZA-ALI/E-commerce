import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-[80px] bg-cyan-800 flex justify-center items-center border-b-2">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] h-full flex flex-col md:flex-row justify-between items-center p-4 md:p-0">
        {/* Left Side - Logo */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Nourish Your Skin, Reveal Your Beauty
          </h1>
        </div>
        {/* Right Side - Navigation */}
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 md:gap-x-5">
            <li>
              <Link className="text-white hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
