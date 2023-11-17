const Footer = () => {
  return (
    <footer className="bg-[#100B20] pt-14 pb-10 px-8">
      <div className="section flex-column md:flex-row md:justify-between gap-8">
        <div>
          <div>
            <h2 className="md:text-4xl text-xl font-bold">
              get<span className="text-secondary-100 font-semibold">linked</span>
            </h2>
            <p className="text-xs md:text-sm mt-2 md:max-w-[55ch]">
              Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with
              the aim of showcasing young and talented individuals in the field of technology
            </p>
          </div>
          <div className="text-xs mt-8">
            Terms of Use <span className="mx-3 border-r-2 border-secondary-100"></span> Privacy Policy
          </div>
        </div>
        <div className="">
          <h3 className="text-sm text-secondary-100 font-semibold">Useful Links</h3>
          <ul className="flex-column gap-3 mt-3 text-xs">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li className="flex-center gap-3">
              <div className="text-secondary-100">Follow us</div>
              <ul className="flex-center gap-3">
                <li>
                  <img src="/icons/instagram.svg" alt="" />
                </li>
                <li>
                  <img src="/icons/x.svg" alt="" />
                </li>
                <li>
                  <img src="/icons/facebook.svg" alt="" />
                </li>
                <li>
                  <img src="/icons/linkedin.svg" alt="" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm text-secondary-100 font-semibold">Contact Us</h3>
          <div className="mt-2 text-xs flex-column gap-3 [&>div]:flex [&>div]:gap-4">
            <div>
              <img src="/icons/call.svg" alt="" />
              <div>+234 679 81819</div>
            </div>
            <div>
              <div>
                <img src="/icons/location.svg" alt="" />
              </div>
              <div className="max-w-[15ch]">27,Alara Street Yaba 100012 Lagos State</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-14">All rights reserved. © getlinked Ltd.</div>
    </footer>
  )
}

export default Footer
