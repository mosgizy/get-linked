import FaqAnswer from './FaqAnswer'

const Intro = () => {
  return (
    <section id="overview">
      <div className=" pt-12 info-wrapper border-b border-white/[.18]">
        <div className="info-container">
          <div className="flex-center justify-center">
            <img src="/images/idea.png" alt="" />
          </div>
          <div>
            <div className="">
              <h2 className="font-bold text-xl md:text-lg-base md:leading-[2.5rem]">
                <div>Introduction to getlinked</div> <span className="text-secondary-100">tech Hackathon 1.0</span>
              </h2>
              {/* <img src="/icons/star.png" alt="" className=" w-2" /> */}
            </div>
            <div className="mt-3 text-7xl md:text-sm">
              <p className="leading-6 md:leading-7">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the
                future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance
                to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology,
                and creating solutions that can change the world, that's what we're all about!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrapper bg-flare bg-no-repeat bg-[2rem_5rem_0rem_0rem] bg-contain border-b border-white/[.18]">
        <div className="info-container md:flex-row-reverse">
          <div className="flex-center justify-center">
            <img src="/images/rules.png" alt="" className="object-cover" />
          </div>
          <div>
            <div className="">
              <h2 className="font-bold text-xl md:text-lg-base md:leading-[2.5rem]">
                <div>Rules and </div> <span className="text-secondary-100">Guidelines</span>
              </h2>
              {/* <img src="/icons/star.png" alt="" className=" w-2" /> */}
            </div>
            <div className="mt-3 text-7xl md:text-sm">
              <p className="leading-6 md:leading-7">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the
                future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance
                to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology,
                and creating solutions that can change the world, that's what we're all about!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrapper border-b border-white/[.18]">
        <div className="info-container md:pt-8">
          <div className="flex-center justify-center md:items-end">
            <img src="/images/attributes.png" alt="" />
          </div>
          <div>
            <div className="">
              <h2 className="font-bold text-xl md:text-lg-base md:leading-[2.5rem]">
                <div>Judging Criteria </div> <span className="text-secondary-100">Key attributes</span>
              </h2>
            </div>
            <div className="mt-3 md:mt-6 text-7xl ">
              <ul className="flex-column gap-4 md:gap-6 leading-6 md:leading-7 [&>li>span]:text-secondary-100 [&>li>span]:font-bold text-xs">
                <li>
                  <span className="md:text-base">Innovation and Creativity:</span> Evaluate the uniqueness and
                  creativity of the solution. Consider whether it addresses a real-world problem in a novel way or
                  introduces innovative features.
                </li>
                <li>
                  <span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions
                  effectively and without major issues? Judges would consider the completeness and robustness of the
                  solution.
                </li>
                <li>
                  <span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world.
                  Does it address a significant problem, and is it relevant to the target audience? Judges would assess
                  the potential social, economic, or environmental benefits.
                </li>
                <li>
                  <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would
                  consider the complexity of the code, the use of advanced technologies or algorithms, and the
                  scalability of the solution.
                </li>
                <li>
                  <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and
                  guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other
                  competition-specific requirements.
                </li>
              </ul>
              <button className="bg-bgGradient px-8 py-2 rounded-[0.25rem] mt-6">Read Nore</button>
            </div>
          </div>
        </div>
      </div>
      <div id="faq" className="info-wrapper border-b border-white/[.18] py-20">
        <div className="info-container md:flex-row-reverse">
          <div className="flex-center justify-center">
            <img src="/images/question.png" alt="" />
          </div>
          <div>
            <div className="">
              <h2 className="font-bold text-xl">
                <div>Frequently Ask </div> <span className="text-secondary-100">Question</span>
              </h2>
              <p className="text-xs font-bold mt-2 mb-8">
                We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
              </p>
              {/* <img src="/icons/star.png" alt="" className=" w-2" /> */}
            </div>
            <div className="mt-3 text-xs text-left">
              <div className="flex-column md:gap-2">
                <FaqAnswer question="Can I work on a project I started before the hackathon?" />
                <FaqAnswer question="What happens if I need help during the hackathon?" />
                <FaqAnswer question="What happens if I don't have an idea for a project?" />
                <FaqAnswer question="Can I join a team or do I have to come with one?" />
                <FaqAnswer question="What happens after the hackathon ends" />
                <FaqAnswer question="What happens after the hackathon ends" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
