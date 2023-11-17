import {useState} from 'react'

const FaqAnswer = ({question}: {question: string}) => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(prev => !prev)} className="text-xs md:text-sm py-2 border-b border-secondary-100">
      <div className="flex-center justify-between gap-4 cursor-pointer">
        <div>{question}</div>
        <div className="text-secondary-100 text-xl">+</div>
      </div>
      {open && (
        <div className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore rem quibusdam praesentium
          exercitationem voluptatibus laborum enim expedita aspernatur, fuga reiciendis, qui velit nemo commodi
          repudiandae, quos quaerat assumenda odio.
        </div>
      )}
    </div>
  )
}

export default FaqAnswer
