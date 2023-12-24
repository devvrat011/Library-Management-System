import img from "../Images/img.webp";
const Card=()=>{
    return(
        <div className="shadow-xl w-36 mb-6 h-60 bg-white rounded-b-xl  ">
            <div className="h-[70%] w-full border-2">
                <img src={img} className="w-full h-full"/>
            </div>
            <div className="h-[15%] w-full text-center flex flex-col justify-center">
                250 rs
            </div>
            <div className="h-[15%] font-bold hover:scale-105 cursor-pointer text-white bg-red-500 hver:w-full text-center  rounded-b-xl flex flex-col justify-center">
                Order NOW
            </div>
        </div>
    )
}

export default Card;