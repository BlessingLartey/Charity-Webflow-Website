import phone from '../../assets/svg/phone.svg'
import mail from '../../assets/svg/mail.svg'
import instagram from '../../assets/svg/instagram.svg'
import facebook from '../../assets/svg/facebook.svg'
import twitter from '../../assets/svg/twitter.svg'
import printrest from '../../assets/svg/printrest.svg'

function TopNav() {

  return (
    <>
      <div className="bg-[#77d7d3]">
        <nav className="flex items-center h-12 mr-[16%] ml-[18%]">
          <div className="mr-2">
            <img
              className="w-3 cursor-pointer"
              src={phone}
              alt="phone"
            />
          </div>
          <div>
            <span className="w-3 cursor-pointer font-work_sans font-thin text-green-950">
              +01 569 896 654
            </span>
          </div>

          <div className="flex items-center mx-[5%]">
            <div className="mr-2">
              <img
                className="w-3 cursor-pointer"
                src={mail}
                alt="mail"
              />
            </div>
            <div>
              <span className="w-3 cursor-pointer font-work_sans font-thin text-green-950">
                redeemerdela149@gmail.com
              </span>
            </div>
          </div>


          <div className="flex justify-evenly items-center bg-[#4BC9C4] w-[17%] h-12 ml-auto">
            <div className="mr-2">
              <img
                className="w-3 cursor-pointer"
                src={instagram}
                alt="Instagram"
              />
            </div>
            <div className="mr-2">
              <img
                className="w-3 cursor-pointer"
                src={facebook}
                alt="Facebook"
              />
            </div>
            <div className="mr-2">
              <img
                className="w-3 cursor-pointer"
                src={twitter}
                alt="Twitter"
              />
            </div>
            <div className="mr-2">
              <img
                className="w-3 cursor-pointer"
                src={printrest}
                alt="Printrest"
              />
            </div>
          </div>


        </nav>
      </div>
    </>
  );
}

export default TopNav;
