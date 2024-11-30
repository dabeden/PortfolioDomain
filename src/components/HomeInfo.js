import { Link } from "react-router-dom";



const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center info-box-gs-blue py-4 px-8 text-black-500 mx-5'>
        Hello I'm
        <span className='font-semibold mx-2 text-black-500'>Devon</span>
        
        <br />
        A Software Engineer and Game Developer from Florida
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Strong Programming Foundational Skills
        </p>

        <Link to='/aboutme' className='neo-brutalism-white neo-btn'>
          Learn more
          {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          I'm currently looking to improve my skills by working with more experienced Developers. <br /> <span className='font-semibold mx-2 text-black-500'> Think I might make a good fit on your team? </span>
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Do you need a Game Dev, Database Engineer, Data Analyst, Software Engineer, Front-End Dev, Back-End Dev?
        <br/> feel free to reach out on my contact page!
      </p>

      <Link to='/contactme' className='neo-brutalism-white neo-btn'>
        Let's talk
        {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;