interface infoI {
  title: string
  text: string
  date: string
  index: number
  direction?: boolean
}

const TimelineInfo = ({title, text, date, index, direction}: infoI) => {
  return (
    <div className={`flex gap-2 md:gap-12 md:min-h-[6rem] ${direction && 'md:flex-row-reverse'}`}>
      <div className={`hidden md:flex ${!direction && 'justify-end'} items-end flex-1`}>{date}</div>
      <div className="flex-column items-center gap-2">
        <span className="bg-secondary-100 w-1 h-full rounded-sm"></span>
        <span className="text-xs font-bold flex-grow-0 w-5 h-5 rounded-full bg-secondary-100 flex-center justify-center text-white">
          {index}
        </span>
      </div>
      <div className={`md:flex md:text-left items-end md:flex-1 ${direction && 'md:justify-end md:text-right'}`}>
        <div className="text-xs text-secondary-100 flex-column gap-2">
          <h4>{title}</h4>
          <p className="min-h-[3.5rem] md:min-h-full md:max-w-[60ch] md:ml-auto text-white">{text}</p>
          <div className="md:hidden">{date}</div>
        </div>
      </div>
    </div>
  )
}

export default TimelineInfo
