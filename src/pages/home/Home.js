
import Card from "../../components/Card";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import FrontPhoto from '../../Images/landingpage_photo.png'
const Home=()=>{

const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


  
      
    return(
      <div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col justify-center gap-4 w-[45%] '>
                <div className='text-white text-lg md:text-4xl'>Good books don't give up all their secrets at once.</div>
                <div className='text-white text-md md:text-xl'>A small river named Duden flows by their place and supplies it with the necessary regelia.</div>
                <button className='text-white text-md md:text-[110%] w-[60%] md:w-[30%] bg-red-600 cursor-pointer p-2 rounded-lg'>Order Now!</button>
            </div>
            <div className='h-[40%] w-[38%]'><img src={FrontPhoto}/></div>
        </div>
        <div className= "w-full">
             
            <div className="md:flex border-2">
                <div className="border-2 md:w-[60%] w-[100%] h-56 flex flex-col justify-center gap-4">
                    <div className="w-[60%] text-4xl  font-bold flex flex-col justify-center  mx-auto h-[50%]">
                        900+ Books in one Place
                    </div>
                    <div className="w-[90%]  mx-auto font-bold text-xl " >
                        A small river named Duden flows by their place and supplies it with necessary regalia.
                    </div>
                </div>
                <div className="border-2 md:w-[40%] w-[100%] h-56">
                    
                </div>
            </div>

            <div className=" w-full p-4">
                <div className=" font-bold text-2xl">
                    New Books
                </div>
                <div className="mx-auto w-[90%]  my-4  " >
                    
                <Carousel responsive={responsive}  showDots={true} 
                centerMode={true}
                
                > 
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Carousel>
                </div>
            </div>

            <div className="w-full p-4">
                <div className=" font-bold text-2xl">
                    Best Selling
                </div>
                <div className="mx-auto w-[90%]  my-4  ">
                <Carousel responsive={responsive} showDots={true} centerMode={true}> 
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Carousel>
                </div>
                
            

            </div>
            
        </div>
</div>


        
    )
   
}

export default Home

