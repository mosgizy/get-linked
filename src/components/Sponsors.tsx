const Sponsors = () => {
  return (
    <section className="py-20 border-b border-line">
      <div className="section">
        <div className="max-w-[40ch] mx-auto text-center">
          <h2 className="font-bold text-xl md:text-lg-base">Partners and Sponsors</h2>
          <p className="text-xs md:text-sm mt-2">
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
          </p>
        </div>
        <div className="border border-secondary-100 rounded-md px-12 md:px-20 py-10 md:py-16 mt-10">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 [&>div]:px-8 [&>div]:py-2 [&>div]:flex-center [&>div]:justify-center [&>div:img]:w-[7.5rem] [&>div:img]:h-[7.5rem]">
            <div className="border-b-2 border-secondary-100 flex-center justify-center">
              <img src="/images/liberty.png" alt="" />
            </div>
            <div className="border-b-2 border-secondary-100 !px-0">
              <div className="border-s-2 border-e-2 px-4 border-secondary-100 h-full flex-center justify-center">
                <img src="/images/liberty-white.png" alt="" />
              </div>
            </div>
            <div className="border-b-2 border-secondary-100 flex-center justify-center">
              <img src="/images/winwise.png" alt="" />
            </div>
            <div className="flex-center justify-center">
              <img src="/images/wisper.png" alt="" />
            </div>
            <div className="border-s-2 border-e-2 border-secondary-100 flex-center justify-center md:text-5xl">
              Pay<span className="text-secondary-300">box</span>
            </div>
            <div className="flex-center justify-center md:text-5xl">
              Vuzual <span className="text-[#FF0000]">Plus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
