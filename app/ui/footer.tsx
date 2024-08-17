import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="inset-x-0 bottom-0 flex flex-col md:flex-row md:justify-between p-4 bg-white shadow-lg"
          id="upper-footer"
        >
          <div className="footer-container flex flex-wrap justify-between w-full bg-black text-white py-10 px-5">
            <div className="footer-section about-us mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">About Us</h4>
              <p className="m-0">
                Our mission is href provide the best products at the best
                prices.
              </p>
              <a href="#" className="text-white hover:underline">
                Learn more
              </a>
            </div>
            <div className="footer-section customer-service mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Customer Service</h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a href="/contact" className="text-white hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/faq" className="text-white hover:underline">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/returns" className="text-white hover:underline">
                    Returns & Refunds
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/shipping" className="text-white hover:underline">
                    Shipping Information
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/track-order" className="text-white hover:underline">
                    Order Tracking
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section information mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Information</h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a href="/privacy" className="text-white hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/terms" className="text-white hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section account mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Account</h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a href="/signin" className="text-white hover:underline">
                    Sign In
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/signup" className="text-white hover:underline">
                    Sign Up
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/account" className="text-white hover:underline">
                    My Account
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/orders" className="text-white hover:underline">
                    Order History
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/wishlist" className="text-white hover:underline">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section social-media mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Follow Us</h4>
              <ul className="list-none p-0 flex">
                <li className="mr-4">
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section newsletter mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 p-2 rounded-l-md border-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="footer-section mobile-app mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Download Our App</h4>
              <a href="#" className="block mb-2">
                <img
                  src="https://via.placeholder.com/120x40"
                  alt="App Store"
                  className="h-auto"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://via.placeholder.com/120x40"
                  alt="Google Play"
                  className="h-auto"
                />
              </a>
            </div>
            <div className="footer-section legal w-full text-center border-t border-gray-600 pt-5">
              <p>&copy; 2024 Animal. All rights reserved.</p>
            </div>
            <div className="footer-image w-full flex justify-center mt-8">
              <Image
                src="/KromaApps.png"
                alt="KromaApps logo"
                width={200}
                height={120}
                className="h-9"
              />
              {/* <img src={KromaApps} alt="Kroma-Apps" className="h-9" /> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
