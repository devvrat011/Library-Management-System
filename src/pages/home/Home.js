import { useState } from "react";
import Card from "../../components/Card";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import FrontPhoto from '../../Images/landingpage_photo.png';
import CategoryCard from "../../components/categoryCard";
import img from "../../Images/img.webp";
import img1 from "../../Images/imgCam.png";
import img2 from "../../Images/child.png";
import img3 from "../../Images/leader.png";
import img4 from "../../Images/imgbusiness.png";
import img5 from "../../Images/libImg.png";
import { useInView } from 'react-intersection-observer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CreateIcon from '@mui/icons-material/Create';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Home = () => {
  
  const {ref: myfade, inView: myCategoryIsVisible } = useInView();
  const {ref: myfade1, inView: myCategory1IsVisible } = useInView();
  const {ref: verFade, inView: myImgIsVisible } = useInView();
  const {ref: myfade2, inView: myFadeVisible } = useInView()
  const [data, setData] = useState([
    {
      name: "Art & Photography",
      img: img1
    },
    {
      name: "Children Book",
      img: img2
    },
    {
      name: "Leadership",
      img: img3
    },
    {
      name: "Business",
      img: img4
    },
  ]);

  console.log(data);
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

  console.log(img1);
  const responsive1 = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='hidden md:flex md:justify-evenly h-screen bg-[#010316]'>
        <div className='flex flex-col animate-translate_fade  p-2 w-[45%] '>
        <div className='text-[#e6f0c8] my-2 text-md md:text-lg'>Library Management System</div>
          <div className='text-white font-semibold my-2 w-[70%] text-lg md:text-6xl '>Good books don't give up all their secrets at once.</div>
          <div className='text-white my-4 text-md md:text-xl'>A small river named Duden flows by their place and supplies it with the necessary regelia.</div>
          <div className="w-full flex gap-4">
            <button className='text-white my-4 text-md md:text-lg lg:text-xl bg-red-600 cursor-pointer p-2 rounded-lg w-[60%] md:w-[30%]'>
              Order Now!
            </button>
            <div className="flex shadow-xl rounded-xl my-4 gap-4 w-full ">
              <input className="p-2 text-lg w-[80%] rounded-xl h-full" type="text"/>
              <div className="bg-red-600 py-1 text-center rounded-xl shadow-xl w-12 h-10 text-white">
                <SearchIcon style={{fontSize:"35"}}/>
              </div>
            </div>
            </div>
          
        </div>
        <div className='h-[40%] w-[38%]  animate-issue'><img src={FrontPhoto} /></div>
      </div>
      <div className='md:hidden flex items-center justify-center h-screen bg-[#010316]'>
        <div className="w-[95%] mx-auto h-full">
          <div className='w-[80%] h-[40%] mx-auto animate-issue'>
            <img src={FrontPhoto} className='w-full  h-full' alt="FrontPhoto" />
          </div>
          <div className='flex flex-col animate-translate_fade justify-center gap-4 w-[75%] mx-auto '>
            <div className='text-white text-center text-lg md:text-4xl font-bold '>
              Good books don't give up all their secrets at once.
            </div>
            <div className='text-white text-center text-md md:text-xl'>
              A small river named Duden flows by their place and supplies it with the necessary regelia.
            </div>
            <div className="w-full flex gap-4">
            <button className='text-white my-4 text-sm md:text-lg lg:text-xl bg-red-600 cursor-pointer p-2 rounded-lg w-[60%] md:w-[30%]'>
              Order Now!
            </button>
            <div className="flex shadow-xl rounded-xl my-4 gap-1 w-[90%] ">
              <input className="p-2 text-lg w-[90%] rounded-xl h-full" type="text"/>
              <div className="bg-red-600 py-1 text-center rounded-xl shadow-xl w-12 h-10 text-white">
                <SearchIcon style={{fontSize:"35"}}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shadow-xl ">
        <div className="w-full py-2  text-4xl font-bold text-center">
          Books Category
        </div>
        <div className="shadow-xl mt-2 h-64 bg-[#010316] w-full">
          <div ref={myfade} className={`w-[90%] mx-auto h-full flex flex-col ${myCategoryIsVisible?"animate-translate_fade":""}  justify-center `}>


            <Carousel responsive={responsive1} showDots={true}

            >
              {data.map((item) => {
                return (
                  <CategoryCard name={item.name} image={item.img} />
                )
              })}
            </Carousel>

          </div>

        </div>
      </div>
      <div className="w-full bg-[#f6e4e4] py-4">

        <div className="md:flex">
          <div ref={myfade1} className={`${myCategory1IsVisible?"animate-translate_fade":""}  md:w-[55%] w-[100%] h-56 flex flex-col justify-center gap-4`}>
            <div className="w-[60%] text-4xl  font-bold flex flex-col justify-center  mx-auto h-[50%]">
              900+ Books in one Place
            </div>
            <div className="w-[90%] text-center  mx-auto font-bold text-xl text-[#7b5b5b]" >
              A small river named Duden flows by their place and supplies it with necessary regalia.
            </div>
          </div>
          <div ref={verFade} className={`flex ${myImgIsVisible?"animate-issue_finite":""} justify-center md:w-[40%] w-[100%] h-56`}>
            <img src={img5} />
          </div>
        </div>

        <div className=" w-full p-4">
                <div className=" font-bold text-2xl">
                    New Books
                </div>
                <div className="mx-auto w-[90%] my-4 " > 
                <Carousel responsive={responsive}  showDots={true} 
                centerMode={true}
               
                 className="mx-auto"
                > 
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Carousel>
                </div>
            </div>

        <div  className={`w-full ${myFadeVisible?"animate-issue_finite":""} bg-[#f4dfdf] py-8 grid grid-cols-2 gap-4 md:flex justify-evenly  items-center`}>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center">
                      <SupervisorAccountIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center">
                    <MenuBookIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center ">
                    <ApartmentIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center ">
                    <CreateIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
        </div>

        <div ref={myfade2} className={`w-full ${myFadeVisible?"animate-issue_finite":""} bg-[#f8d2d2] py-8 grid grid-cols-2 gap-4 md:flex justify-evenly  items-center`}>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center">
                      <SupervisorAccountIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center">
                    <MenuBookIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center ">
                    <ApartmentIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
              <div className=" w-40 h-40">
                  <div className="border-2 rounded-xl border-black h-[50%] w-24 mx-auto text-center ">
                    <CreateIcon style={{fontSize:"70"}}/>
                  </div>
                  <div className=" h-[50%] my-4 w-full">
                      <div className="text-center text-3xl font-bold">
                        1260
                      </div>
                      <div className="text-center">
                        Happy Coustomers
                      </div>
                    
                  </div>
              </div>
        </div>
        {/* 
            <div className=" w-full p-4  bg-[#f1c8c8] ">
                <div className=" font-semibold text-3xl">
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
                <div className=" font-semibold text-3xl">
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
             */}
      </div>
      <Footer/>
    </div>



  )

}

export default Home

