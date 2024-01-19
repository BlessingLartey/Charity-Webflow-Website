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
        <div className="bg-white h-32">
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
                  <a className="hover:text-gray-500 text-sm" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-sm" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-sm" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-sm" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 text-sm" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button className="bg-[#FF6D6D] font-work_sans text-base text-white px-5 py-2 rounded-full hover:bg-[#fa5a5a]">
                Donate
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
