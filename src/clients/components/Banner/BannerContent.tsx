import banner from "../../assets/images/banner.png";
function BannerContent() {
  return (
    <>
      <div className="bannerOuter bg-slate-600 m-0 w-[100%]">
        {/* <div className=""> */}
        <img className="cursor-pointer" src={banner} alt="phone" />
        <div className="absolute top-60 left-60 my-9 px-9 py-3 bg-gray-500/50 w-90">
          <p>Need Help...</p>
          <h1 className="text-white font-ellen text-4x font-serif">
            Being Life Saver For Someone
          </h1>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default BannerContent;
