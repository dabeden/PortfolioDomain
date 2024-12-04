import { Link } from "react-router-dom";



const HomeInfo = ({ currentStage, onScrollToAbout }) => {
  if (currentStage === 1)
    return (
      <div className='info-box'>
        <p className=' font-medium  text-center silkscreen-regular reduce-spacing'>
          Hello, I'm <span className='font-semibold mx-2 text-yellow-100'>Devon</span>
          <br/>A Software Engineer and Game Developer based in Florida
        </p>

        <button 
          onClick={onScrollToAbout}
          className="increase-spacing neo-brutalism-white neo-btn silkscreen-regular"
        >
          Dive Down
          {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
        </button>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium  text-center silkscreen-regular reduce-spacing'>
          Strong Programming Foundational Skills
        </p>

        <Link to='/aboutme' className='increase-spacing-lite neo-brutalism-white neo-btn silkscreen-regular'>
          Learn more
          {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium  text-center silkscreen-regular reduce-spacing'>
          I'm currently looking to improve my skills by working with more experienced Developers. <br /> <span className='font-semibold mx-2 text-white'> Think I might make a good fit on your team? </span>
        </p>

        <Link to='/projects' className='increase-spacing neo-brutalism-white neo-btn silkscreen-regular'>
          Visit my portfolio
          {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium  text-center silkscreen-regular reduce-spacing'>
        Do you need a Game Dev, Database Engineer, Data Analyst, Software Engineer, Front-End Dev, Back-End Dev?
        <br/> feel free to reach out on my contact page!
      </p>

      <Link to='/contactme' className='increase-spacing neo-brutalism-white neo-btn silkscreen-regular'>
        Let's talk
        {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;