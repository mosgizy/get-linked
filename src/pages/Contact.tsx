import {ChangeEvent, FormEvent, useState} from 'react'

interface FormData {
  name: string
  email: string
  phoneNumber: string
  message: string
}

const baseUrl = 'https://backend.getlinked.ai'

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const value = {
      email: formData.email,
      message: formData.message,
      first_name: formData.name,
      phone_number: formData.phoneNumber
    }

    try {
      const res = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(value)
      })

      const data = await res.json()

      console.log(data)

      if (res.ok) {
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          message: ''
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const socialLinks = (
    <div className="flex-center md:items-start  gap-1 mt-12 md:mt-4 flex-col">
      <div className="text-secondary-100 text-xs">Share on</div>
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
    </div>
  )

  return (
    <section className="p-10 md:px-20 md:mt-12 bg-flare bg-no-repeat bg-contain md:flex md:justify-between md:gap-10">
      <div className="md:hidden">
        <img src="/icons/back.svg" alt="" />
      </div>
      <section className="hidden md:block flex-[30%]">
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary-100 text-lg-base font-clash">Get in touch</h1>
          <p className="max-w-[15ch]">Contact Information</p>
          <p className="max-w-[15ch]">27,Alara Street Yaba 100012 Lagos State</p>
          <p>Call Us : 07067981819</p>
          <p className="max-w-[30ch]">we are open from Monday-Friday 08:00am - 05:00pm</p>
          <div>{socialLinks}</div>
        </div>
      </section>
      <section className="mt-10 md:mt-0 text-xl font-semibold md:p-12 md:rounded-xl md:bg-white/5 md:shadow-input md:flex-[70%]">
        <div className="max-w-[20ch] md:max-w-[25ch]">
          <h2 className="text-secondary-100font-clash">Questions or need assistance? Let us know about it</h2>
          <p className="text-xs mt-6">Email us below to any question related to our event</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-8">
          <label htmlFor="name" className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleInputChange}
              className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
            />
            <span className="text-base peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
              Team’s Name
            </span>
          </label>
          <label htmlFor="phone-number" className="relative">
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              required
              onChange={handleInputChange}
              className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
            />
            <span className="text-base peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
              Phone Number
            </span>
          </label>
          <label htmlFor="email" className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleInputChange}
              className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
            />
            <span className="text-base peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
              Email
            </span>
          </label>
          <label htmlFor="message" className="relative">
            <textarea
              id="message"
              name="message"
              required
              onChange={handleInputChange}
              className="peer py-6 w-full h-44 border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
            />
            <span className="text-base peer-focus-within:hidden peer-valid:hidden absolute top-7 left-4">Message</span>
          </label>

          <div className="flex justify-center">
            <button type="submit" className="bg-bgGradient px-8 py-2 rounded-[0.25rem] md:ml-8">
              Submit
            </button>
          </div>
        </form>
      </section>
      <div className="md:hidden">{socialLinks}</div>
    </section>
  )
}

export default Contact
