import TimelineInfo from './TimelineInfo'

const TimeLine = () => {
  return (
    <section id="timeline" className="pb-12 pt-20 section">
      <div className="text-center">
        <h2 className="font-bold text-xl md:text-lg-base">Timeline</h2>
        <h3 className="text-sm mt-2">Here is the breakdown of the time we anticipate using for the upcoming event.</h3>
      </div>
      <div className="mt-10 md:mt-16 flex-column gap-4 ">
        <TimelineInfo
          date="November 18, 2023"
          index={1}
          text="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
          title="Hackathon Announcement"
          direction
        />
        <TimelineInfo
          date="November 18, 2023"
          index={2}
          text="Interested teams can now show their interest 
in the getlinked tech hackathon 1.0 2023 by 
proceeding to register"
          title="Teams Registration begins"
        />
        <TimelineInfo
          date="November 18, 2023"
          index={3}
          text="Interested Participants are no longer Allowed
to register"
          title="Teams Registration ends"
          direction
        />
        <TimelineInfo
          date="November 18, 2023"
          index={4}
          text="All teams whom idea has been accepted into 
getlinked tech hackathon 1.0 2023 are formally 
announced"
          title="Announcement of the accepted teams
and ideas"
        />
        <TimelineInfo
          date="November 18, 2023"
          index={5}
          text="Accepted teams can now proceed to build 
their ground breaking skill driven solutions"
          title="Getlinked Hackathon 1.0 Offically Begins"
          direction
        />
        <TimelineInfo
          date="November 18, 2023"
          index={6}
          text="Teams get the opportunity to pitch their 
projects to judges. The winner of the 
hackathon will also be announced on this day"
          title="Demo Day"
        />
      </div>
    </section>
  )
}

export default TimeLine
