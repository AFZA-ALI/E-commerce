function Footer() {
  return (
    <div className="bg-black text-white p-5 flex flex-col sm:flex-col md:flex-row justify-evenly items-start sm:items-start md:items-center sm:gap-8 md:gap-0 mt-8 sm:h-auto md:h-[300px]">
      
      {/* Exclusive Section */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <ul className="mt-2">
          <li className="font-semibold">Subscribe</li>
          <li className="mt-3">Get 10% off your first order</li>
        </ul>

        {/* Email Subscription Form */}
        <div className="mt-4">
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full sm:w-auto sm:flex-1 rounded-l-lg text-black focus:outline-none mb-2 sm:mb-0"
            />
            <button
              type="button"
              className="bg-cyan-500 p-2 rounded-r-lg hover:bg-cyan-400 w-full sm:w-auto"
            >
              ➤
            </button>
          </form>
        </div>
      </div>

      {/* Support & Help Section */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Support & Help</h1>
        <ul className="mt-2">
          <li className="mt-1">Support Centre</li>
          <li>BP Registration</li>
          <li>App</li>
          <li>Ordering</li>
          <li>Payments</li>
          <li>Delivery</li>
          <li>Parcel Tracking</li>
          <li>Claims & Returns</li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Account</h1>
        <ul className="mt-2">
          <li className="mt-2">My Account</li>
          <li className="mt-2">Login/Register</li>
          <li className="mt-2">Cart</li>
          <li className="mt-2">Wishlist</li>
          <li className="mt-2">Shop</li>
        </ul>
      </div>

      {/* Quick Link Section */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <ul className="mt-2">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
