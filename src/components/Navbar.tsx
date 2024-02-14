import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a href="/" className="text-3xl font-bold font-heading">
            Assignment
          </a>
          {/* <!-- Nav Links --> */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-200">
                Catagory
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-200">
                Collections
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
