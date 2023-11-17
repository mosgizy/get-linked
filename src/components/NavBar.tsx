import {useEffect, useState} from 'react'
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = async (id: string) => {
    const section = document.getElementById(id)

    if (location.pathname !== '/') {
      navigate('/')
    }

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const navList = (
    <ul className=" mt-12 md:mt-0 flex flex-col md:flex-row md:items-center gap-6 md:gap-9 text-lg font-medium [&>li]:cursor-pointer">
      <li onClick={() => scrollToSection('timeline')}>Timeline</li>
      <li onClick={() => scrollToSection('overview')}>Overview</li>
      <li onClick={() => scrollToSection('faq')}>FAQs</li>
      <li>
        <NavLink
          to="/contact"
          className={({isActive, isPending}) => (isPending ? 'pending' : isActive ? 'text-secondary-100' : '')}
        >
          Contact
        </NavLink>
      </li>
      <NavLink
        to="/register"
        className={({isActive}) =>
          `px-8 py-2 rounded-[0.25rem] md:ml-8 ${isActive ? 'border border-[#9A39FF]' : 'bg-bgGradient'}`
        }
      >
        Register
      </NavLink>
    </ul>
  )

  useEffect(() => {
    console.log('hello')
    // scrollToSection()
  }, [location])

  return (
    <div className="border-b border-line">
      <div className="section flex flex-center justify-between py-5 bg-transparent">
        <Link to="/" className="md:text-4xl font-bold font-clash">
          get<span className="text-secondary-100">linked</span>
        </Link>
        <img
          src="/icons/hamburger.svg"
          alt=""
          className="md:hidden cursor-pointer"
          onClick={() => setNav(prev => !prev)}
        />
        <div className="hidden md:block">{navList}</div>
        <nav
          className={`bg-primary-100 md:hidden absolute left-0 z-50 w-full top-0 py-11 px-10 md:py-0 md:px-0 md:-translate-y-0 md:bg-transparent transition-all h-screen ${
            nav ? ' translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex justify-end md:hidden">
            <div
              className="border border-secondary-200 p-2 cursor-pointer rounded-full"
              onClick={() => setNav(prev => !prev)}
            >
              <img src="/icons/close.svg" alt="" className="cursor-pointer" />
            </div>
          </div>
          <div className="md:hidden">{navList}</div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
