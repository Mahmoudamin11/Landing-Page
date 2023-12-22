import {useState} from 'react';
import NavBar from './NavBar';
// import galaxy from '../assets/galaxy.jpeg';
import stars from '../assets/long_img.jpg';
import rocket from '../assets/rocket.jpg'
import moon from '../assets/moon.jpg'

const FirstPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setWidth(window.innerWidth);
  });
  // const [topImg, setTopImg] = useState(1);
  
  // // const toggle = () => { 
  // //     if (topImg >= 4) { 
  // //         setTopImg(1);
  // //     }
  // //     else { 
  // //       setTopImg(topImg + 1);
        
  // //     }
  // // }
  
    return (
      <div  className='w-full relative'>
          <NavBar />  
          <div className={width < 750 ? 'sm:flex  sm:justify-center mt-20 sm:mt-28 sm:mb-72' : 'grid grid-cols-2 place-items-center h-screen '}>
            <h1 className='font-bold text-center sm:mt-[25%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl  md:mr-0 md:mt-0 md:mb-0   my-11 group leading-[55px]'>We Make Awesome <span className='text-gray-400'>Arts</span></h1>
            {width < 750 && <div className="mx-auto relative flex flex-col sm:flex-row sm:items-center sm:justify-center sm:text-center  mt-20 sm:mt-12  h-2/3  w-11/12 rounded-lg " >
              <img  className='rounded-lg absolute -top-10 sm:right-5  animate-firstMobImg transition-all duration-300 hover:shadow-img ' src={stars} alt="" />
              <img  className='rounded-lg absolute -top-10 sm:right-5  animate-secondMobImg transition-all duration-300 hover:shadow-img ' src={moon} alt="" />
            </div>}
            {width >= 750 && <div  className="relative cursor-pointer -mt-[110%] min-[1050px]:-mt-[100%] xl:-mt-[85%]   w-[65%] lg:w-[55%] xl:w-[47.5%]  rounded-lg mx-auto " >
              <img  className='rounded-lg absolute animate-firstImg  transition-all duration-300  hover:shadow-img ' src={stars} alt="" />
              <img  className='rounded-lg absolute transform animate-secondImg  transition-all duration-300  hover:shadow-img ' src={moon} alt="" />
              <img  className='rounded-lg absolute transform animate-thirdImg  transition-all duration-300  hover:shadow-img ' src={rocket} alt="" />
            </div>}
          </div>
      </div>
  )
}

// transform translate-x-0
// transform translate-x-[25%] -translate-y-[80%]
// transform -translate-x-[25%] -translate-y-[170%]
export default FirstPage;



// const changeImg = (num:number) => { 
//   if (num == 1) { 
//     setImg(stars);
//   } else if (num ==2) { 
//     setImg(rocket);
//   }else { 
//     setImg(moon);
//   }
// }
// const increment = () => { 
//   if (imgNo != 4 ) { 
//     setImgNo(imgNo + 1);
//   } else { 
//     setImgNo(1);
//   }
//   changeImg(imgNo);
// }
// setInterval( increment, 5000);



// <img  className={topImg == 1 ? 'rounded-lg absolu opacity-1 transition-all duration-300  hover:shadow-img ''rounded-lg absolute transform translate-y-16 opacity-[90%] left-[-17%]  z-10   transition-all duration-300  hover:shadow-img ' : 'rounded-lg absolute  transform translate-y-11  right-[-17%]  z-20 opacity-1 transition-all duration-300  hover:shadow-img '} src={stars} alt="" />
{/* <img  className={topImg == 1 ? 'rounded-lg absolransform translate-y-10  right-[-17%]  z-20 opacity-1 transition-all duration-300  hover:shadow-img ' : topImg ==2 ? 'rounded-lg absolute z-30 opacity-1 transition-all duration-300  hover:shadow-img ' : 'rounded-lg absolute transform translate-y-16 opacity-[90%] left-[-17%]  z-10 transition-all duration-300  hover:shadow-img '} src={rocket} alt="" /> */}
{/* <img  className={topImg == 1 ? 'rounded-lg absolute transfornslate-y-16 opacity-[90%] left-[-17%]  z-10 transition-all duration-300  hover:shadow-img ' : topImg == 2 ? 'rounded-lg absolute transform translate-y-10  right-[-17%]  z-20 opacity-1 transition-all duration-300  hover:shadow-img ' : 'rounded-lg absolute z-30 opacity-1 transition-all duration-300  hover:shadow-img '} src={moon} alt="" /> */}
