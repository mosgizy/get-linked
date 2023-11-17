const Reward = () => {
  return (
    <section className="pb-12 pt-20">
      <div className="flex items-end gap-4 justify-between section">
        <div className="md:flex justify-center hidden">
          <img src="/images/prize.png" alt="" />
        </div>
        <div>
          <div className="md:flex md:justify-center">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl md:text-lg-base">
                <div>Prizes and </div> <span className="text-secondary-100">Rewards</span>
              </h2>
              <p className="text-xs md:text-sm mt-2 md:mt-3 md:max-w-[45ch]">
                Highlight of the prizes or rewards for winners and for participants.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16 md:hidden">
            <img src="/images/prize.png" alt="" />
          </div>
          <div className=" mt-32 md:mt-48 md:flex-1 flex justify-center gap-3 relative text-xs">
            <div className="relative pt-16 md:pt-24 pb-6 px-3 md:px-4 border border-secondary-100 rounded-lg bg-[rgba(212, 52, 254, 0.12)]">
              <img
                src="/images/silver.png"
                alt=""
                className="absolute -top-[25%] md:-top-[40%] left-1/2 -translate-x-1/2"
              />
              <div className="text-xs font-semibold text-center">
                <div className="md:text-4xl">2nd</div>
                <div className="md:text-2xl">Runner</div>
                <div className="text-sm md:text-lg-base md:mt-2 font-bold text-secondary-100">N300,000</div>
              </div>
            </div>
            <div className="relative pt-16 md:pt-24 pb-6 px-3 md:px-4 border border-secondary-100 rounded-lg bg-[rgba(212, 52, 254, 0.12)]">
              <div className="absolute -top-[55%] left-1/2 -translate-x-1/2 w-[7.5rem] h-[7.5rem] md:h-[14rem] md:w-[14rem]">
                <img
                  src="/images/gold.png"
                  alt=""
                  // className="absolute -top-[55%] left-1/2 -translate-x-1/2 w-[7.5rem] h-[7.5rem] md:h-[14rem] md:w-[14rem]"
                />
              </div>
              <div className="text-xs font-semibold text-center">
                <div className="md:text-4xl">1st</div>
                <div className="md:text-2xl">Runner</div>
                <div className="text-sm md:text-lg-base md:mt-2 font-bold text-secondary-200">N300,000</div>
              </div>
            </div>
            <div className="relative pt-16 md:pt-24 pb-6 px-3 md:px-4 border border-secondary-100 rounded-lg bg-[rgba(212, 52, 254, 0.12)]">
              <img
                src="/images/bronze.png"
                alt=""
                className="absolute -top-[25%] md:-top-[40%] left-1/2 -translate-x-1/2"
              />
              <div className="text-xs font-semibold text-center">
                <div className="md:text-4xl">3rd</div>
                <div className="md:text-2xl">Runner</div>
                <div className="text-sm md:text-lg-base md:mt-2 font-bold text-secondary-100">N300,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reward
