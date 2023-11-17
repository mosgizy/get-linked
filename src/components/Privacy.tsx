const Privacy = () => {
  return (
    <section className="section py-20">
      <div className="flex-column gap-14 md:flex-row">
        <div className="flex-1 text-xs md:text-sm">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-xl md:text-lg-base">
              <div>Privacy Policy and </div> <span className="text-secondary-100">Terms</span>
            </h2>
            <p className="mt-2 text-white/75">Last updated on September 12, 2023</p>
          </div>
          <p className="mt-8 text-center md:text-left">
            Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our
            participant
          </p>
          <div className="mt-7 border border-secondary-100 rounded-md px-5 py-12">
            <p className="text-center md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal
              information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you
              participate in our tech hackathon event. By participating in our event, you consent to the practices
              described in this policy.
            </p>
            <div className="mt-6 text-7xl font-bold">
              <h3 className="text-secondary-100">Licensing Policy</h3>
              <p>Here are terms of our Standard License:</p>
              <ul className="mt-4 flex-column gap-4 font-normal pl-5 list-image-[url('/icons/check.svg')]">
                <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                <li>
                  You are licensed to use the item available at any free source sites, for your project developement
                </li>
              </ul>
              <div className="flex justify-center mt-8">
                <button className="bg-bgGradient px-8 py-2 rounded-[0.25rem] md:ml-8">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <img src="/images/security.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Privacy
