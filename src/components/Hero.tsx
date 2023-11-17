const Hero = () => {
  return (
    <header className=" py-8 bg-flare bg-no-repeat md:border-b md:border-line md:pb-0">
      <h1 className="text-center text-base md:text-4xl md:text-right md:pr-20 font-bold">
        Igniting a Revolution in{' '}
        <span className='relative before:content-[url("/icons/underline.svg")] md:before:content-[url("/icons/underline-big.svg")] before:absolute before:top-1/2'>
          HR Innovation
        </span>
      </h1>
      <div className="flex-column md:grid md:grid-cols-2 gap-8 md:gap-0 mt-1 md:mt-10">
        <div className="flex-column items-center md:items-start text-center md:text-left gap-5 mt-12 max-w-[35ch] md:max-w-none md:pl-16 mx-auto">
          <h1 className=" text-lg-base md:text-[5rem] font-bold font-clash">
            <div>
              getlinked Te
              <span className='relative before:content-[url("/icons/bulb.png")] md:before:content-[url("/icons/bulb-big.png")] before:absolute before:bottom-[40%] before:-right-2 md:before:-right-4'>
                c
              </span>
              h
            </div>
            <div className="flex-center">
              Hackathon <span className="text-secondary-100">1.0</span>
              <picture>
                <source media="(min-width:768px)" srcSet="/icons/chain-big.png" />
                <img src="/icons/chain.png" alt="" />
              </picture>
              <picture>
                <source media="(min-width:768px)" srcSet="/icons/blast-big.png" />
                <img src="/icons/blast.png" alt="" />
              </picture>
            </div>
          </h1>
          <p className="md:text-xl">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <button className="bg-bgGradient px-8 py-2 rounded-[0.25rem]">Register</button>
          <div className="flex-center gap-6 text-5xl md:mt-10 font-unica">
            <div>
              00<span className=" text-sm">H</span>
            </div>
            <div>
              00<span className=" text-sm">M</span>
            </div>
            <div>
              00<span className=" text-sm">S</span>
            </div>
          </div>
        </div>
        <div className="md:flex-[1_0_30%]">
          <img src="/images/Hackathon guy@3x.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Hero
