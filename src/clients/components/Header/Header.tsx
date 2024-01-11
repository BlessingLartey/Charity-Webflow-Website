import { useState } from 'react';
import logo from '../../assets/svg/logo.svg'
import TopNav from "./TopNav";
import "../Style.css";

function Header() {
  const [menuOpen] = useState(false);



  return (
    <>
      <div className="header">
        <div>
          <TopNav />
        </div>
        <div className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img
                className="flex items-center w-32 cursor-pointer ml-[20%]"
                src={logo}
                alt="..."
              />
            </div>
            <div
              className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${menuOpen ? '0' : '-100%'
                } md:w-auto w-full flex items-center px-5`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Solution
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Developers
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                Sign in
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
