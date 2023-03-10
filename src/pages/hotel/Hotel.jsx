import { useState } from "react";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import MailList from "../../components/MailList";
import Navbar from "../../components/Navbar"


const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];


function Hotel() {

  const[slideNumber, setSlideNumber] = useState(0)
  const[open, setOpen] =useState(false)

  const handleOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>{
    let newSlideNumber

    if(direction === "l"){
      newSlideNumber === slideNumber === 0 ? 5 : slideNumber -1
    }else{
      newSlideNumber === slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  } 

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex flex-col items-center mt-[20px]">
      {open && ( 
      <div className="sticky top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.426)] z-[999] flex items-center">
        <FontAwesomeIcon icon={faCircleXmark} 
        onClick={() => setOpen(false)}
        className="absolute top-5 right-5 text-[30px] cursor-pointer text-zinc-400"  />
        <FontAwesomeIcon icon={faCircleArrowLeft}
        onClick={()=>handleMove("l")}
        className="m-5 text-5xl cursor-pointer text-zinc-400" />
        <div className="w-full h-full flex justify-center items-center">
          <img
          className="w-[80%] h-[80vh]" 
          src={photos[slideNumber].src} />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight}
        onClick={()=>handleMove("r")}
        className="m-5 text-5xl cursor-pointer text-zinc-400" />
        </div>
         )}
        <div className=" relative w-full max-w-[1024px] flex flex-col gap-[10px]">
          <button 
          className="absolute top-[10px] right-0 bg-[#0071c2] text-white px-[10px] py-[10px] font-bold border-none cursor-pointer  rounded-md">
            Reserve or Book Now!
          </button>
          <h1 className="text-xl font-bold ">Grand Hotels</h1>
          <div className="flex items-center text-xs gap-[10px]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>158. muğla </span>
          </div>
          <span className="text-[#0071c2] font-medium">
            Excellent location - 500m from center
          </span>
          <span className="text-[#008009] font-medium">
           Book a stay over $114 at this property
          </span>
          <div className=" mb-2 flex-wrap flex justify-between ">
            {photos.map((photo,i)=>(
              <div className="w-[33%] mb-1">
                <img 
                onClick={() => handleOpen(i)}
                src={photo.src}
                className="w-full object-cover" 
                key={i}/>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="w-2/3">
              <h1 className="font-bold text-md mb-2">Stay in the heart of Krakow</h1>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quae, iste eum iure possimus, aspernatur porro laborum a nihil, perspiciatis quo veritatis velit doloribus accusamus alias saepe expedita repellendus inventore?
              </p>
            </div>
            <div className="w-1/3 bg-[#ebf3ff] flex flex-col p-5 gap-5">
              <h1 className="font-bold text-l text-[#555]">Perfect for a 9-night stay!</h1>
              <span className="mb-1 text-[14px] ">
                Located in the real heart of Krakow, this property has an excellent location score of 9.8
              </span>
              <h2 className="font-300">
                <b>$945 (9 nights)</b> 
              </h2>
              <button 
              className="bg-[#0071c2] text-white px-[5px] py-[10px] font-bold border-none cursor-pointer  rounded-md">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
   </div>
  )
}

export default Hotel