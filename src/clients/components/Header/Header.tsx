import logo from '../../assets/svg/logo.svg'
import TopNav from "./TopNav";
import "../Style.css";

function Header() {

  return (
    <>
      <div className="header">
        <div>
          <TopNav />
        </div>
        <div className="bg-white">
          <nav className="flex justify-between items-center h-16 mr-[16%] ml-[18%]">
            <div>
              <img
                className="flex items-center w-32 cursor-pointer"
                src={logo}
                alt="..."
              />
            </div>
            <div
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button className="bg-[#FF6D6D] text-white px-5 py-2 rounded-full hover:bg-[#fa5a5a]">
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
