import {Link} from 'react-router-dom'

const SuccessModal = ({toggleModal}: {toggleModal: () => void}) => {
  return (
    <div onClick={toggleModal} className="fixed inset-0 bg-modal flex-center justify-center px-6">
      <div
        onClick={e => e.stopPropagation()}
        className="border border-secondary-100 flex-column gap-4 text-center p-6 md:px-9 md:pb-12"
      >
        <img src="/images/congratulation.png" alt="success" />
        <div>
          <h1 className="font-semibold md:text-lg-base w-[27ch] mb-5">
            Congratulations you have successfully Registered!
          </h1>
          <p className="text-xs md:text-sm font-medium md:w-[30ch] md:mx-auto">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <Link to="/" className="block bg-bgGradient px-14 py-2 mt-5 rounded-[0.25rem] w-full">
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
