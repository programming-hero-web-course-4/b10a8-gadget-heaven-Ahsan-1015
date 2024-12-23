const BannerImage = () => {
  return (
    <>
      <div className=" md:w-11/12 mx-auto">
        {/* banner image  */}
        <div className="bg-banner bg-[#FFFFFF26] backdrop-blur-2xl border-white/45 rounded-xl ring-2 ring-white p-3 border-8 min-h-[400px] max-w-5xl mx-auto  bg-center bg-cover bg-no-repeat sm:-mt-32"></div>
      </div>

      <div>
        <h2 className="text-center my-16 font-bold text-4xl ">
          Explore Cutting-Edge Gadgets
        </h2>
      </div>
    </>
  );
};

export default BannerImage;
