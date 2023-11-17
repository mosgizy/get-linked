import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import SuccessModal from '../components/SuccessModal'

interface FormData {
  name: string
  email: string
  phoneNumber: string
  topic: string
  category: string
  groupSize: number
  terms: boolean
}

interface categoryI {
  id: number
  name: string
}

const baseUrl = 'https://backend.getlinked.ai'

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    topic: '',
    category: '',
    groupSize: 0,
    terms: false
  })
  const [successModal, setSuccessModal] = useState(false)
  const [categories, setCategories] = useState<categoryI[]>([])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    name === 'terms'
      ? setFormData({...formData, [name]: value === 'on' ? true : false})
      : setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const value = {
      project_topic: formData.topic,
      email: formData.email,
      category: formData.category,
      phone_number: formData.phoneNumber,
      group_size: formData.groupSize,
      team_name: formData.name,
      privacy_poclicy_accepted: formData.terms
    }

    try {
      const res = await fetch(`${baseUrl}/hackathon/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(value)
      })

      const data = await res.json()

      console.log(data)

      if (res.ok) {
        setSuccessModal(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleToggleModal = () => {
    setSuccessModal(prev => !prev)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/hackathon/categories-list`)
        const data = await res.json()
        setCategories(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <section className="py-8 md:py-16 px-12 bg-flare bg-no-repeat bg-left-top bg-origin-border bg-[length:40rem_35rem]">
      <h2 className="text-secondary-100 font-bold font-clash md:hidden">Registration</h2>
      <div className="md:flex md:bg-flare md:bg-no-repeat md:bg-[length:40rem_35rem] md:bg-[bottom_right_-10rem] ">
        <div>
          <img src="/images/register-hilustration.png" alt="" />
        </div>
        <div className="mt-5 md:mt-0 md:p-12 md:rounded-xl md:bg-white/5 md:shadow-input md:flex-1">
          <div className="flex-column items-center md:items-start md:mb-5">
            <h2 className="text-secondary-100 font-bold font-clash text-lg-base mb-6 hidden md:block">Registration</h2>
            <div className="flex gap-1 text-xs text-center relative">
              <span>Be part of this movement!</span>
              <span className="flex items-center px-4 border-b border-dotted border-secondary-100 -mt-2 h-fit">
                <img src="/icons/female.png" alt="" className=" w-5 h-5" />
                <img src="/icons/male.png" alt="" className=" w-5 h-5" />
              </span>
            </div>
            <h1 className=" text-xl">CREATE YOUR ACCOUNT</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-column gap-5">
              <label htmlFor="name">
                <div className="text-7xl mb-1">Team’s Name</div>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleInputChange}
                    className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
                  />
                  <span className="text-sm text-white/25 peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
                    Enter the name of your group
                  </span>
                </div>
              </label>
              <label htmlFor="phone">
                <div className="text-7xl mb-1">Phone</div>
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phoneNumber"
                    required
                    onChange={handleInputChange}
                    className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
                  />
                  <span className="text-sm text-white/25 peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
                    Enter your phone number
                  </span>
                </div>
              </label>
              <label htmlFor="email">
                <div className="text-7xl mb-1">Email</div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
                  />
                  <span className="text-sm text-white/25 peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
                    Enter your email address
                  </span>
                </div>
              </label>
              <label htmlFor="topic">
                <div className="text-7xl mb-1">Project Topic</div>
                <div className="relative">
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    required
                    onChange={handleInputChange}
                    className="peer py-1 w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
                  />
                  <span className="text-sm text-white/25 peer-focus-within:hidden peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-4">
                    What is your group project topic
                  </span>
                </div>
              </label>
              <div className="flex gap-4">
                <label htmlFor="category" className="md:w-full">
                  <div className="text-7xl mb-1">Category</div>
                  <select
                    name="category"
                    id="category"
                    required
                    onChange={handleInputChange}
                    className="peer py-[0.4rem] w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
                  >
                    <option>Select your category</option>
                    {categories.map(category => (
                      <option value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </label>
                <label htmlFor="group-size" className="md:w-full">
                  <div className="text-7xl mb-1">Group Size</div>
                  <select
                    name="groupSize"
                    id="group-size"
                    required
                    onChange={handleInputChange}
                    className="peer py-[0.4rem] w-full border border-white group-focus-within: rounded shadow-input bg-white/5 text-white outline-none px-4"
                  >
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="text-[#FF26B9] text-[0.5625rem] mt-3 mb-2">
              Please review your registration details before submitting
            </div>
            <label htmlFor="terms" className="flex items-start gap-3">
              <div className=" max-h-max">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  id="terms"
                  onChange={handleInputChange}
                  className="border border-white rounded-sm bg-transparent"
                />
              </div>
              <span className="text-[0.625rem]">I agreed with the event terms and conditions and privacy policy</span>
            </label>
            <div className="flex justify-center mt-3">
              <button className="bg-bgGradient px-14 py-3 rounded-[0.25rem] md:w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {successModal && <SuccessModal toggleModal={handleToggleModal} />}
    </section>
  )
}

export default Register
