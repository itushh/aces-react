import newImg from '/images/Team2024.jpg'

/**
 * A Next.js page component that renders the "Who are we" section.
 *
 * It displays a brief description of the club and its purpose, along with a
 * photo of the team.
 *
 * @returns {JSX.Element} A JSX element that renders the section.
 */
function WhoAreWeSection() {
  return (
    <section>
      <div className='bleed-container px-4 md:pr-0 md:pl-6 mx-auto flex flex-col md:flex-row py-20'>
        <div className='md:w-1/2 flex flex-col justify-center pr-4 pb-6 lg:pr-40'>
          <h2 className='main-head'>Who are we</h2>
          <p className='text-lg'>
            The Association of Computer Engineering Students is a vibrant
            departmental club of Department of Computer Engineering at Dr. D. Y.
            Patil Institute of Technology, Pimpri. Comprising passionate
            students, faculty mentors, and industry enthusiasts, ACES serves as
            a dynamic hub for fostering collaboration & innovation within the
            realm of computer engineering.
          </p>
        </div>
        <div className='md:w-1/2 rounded-xl md:rounded-r-none md:rounded-l-xl overflow-hidden'>
          <img
            className='w-full'
            src={newImg}
            width={640}
            height={340}
            style={{
              color: 'transparent',
              //width: '700px',
              borderRadius: '25px',
              //height: '550px',
            }}
            alt='Team Photo'
            placeholder='blur'
          />
        </div>
      </div>
    </section>
  )
}

export default WhoAreWeSection