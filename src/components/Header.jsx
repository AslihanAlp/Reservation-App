import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPlane, faTaxi, faCar, faMap, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";


function Header({type}) {
    const [openDate, setOpenDate]= useState(false)
    const [date, setDate] =useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "section"
        }
    ])
    const [openOptions, setOpenOptions]=useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption =(name, operation) =>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }


  return (
    <div className='bg-[#003580] text-white flex justify-center relative'> 
        <div className= {type === "list" ? "ml-[20px] mr-[100px] mt-[50px] mb-0" : "w-[100%] max-w-[1024px] ml-[20px] mr-[100px] my-14"  }>
            <div className="flex gap-10 pb-8">
            <div className="flex items-center justify-center gap-[10px] border-2 rounded-full px-2 py-1 cursor-pointer border-white">
                 <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            
            <div className="flex items-center gap-[10px]"> 
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="flex items-center gap-[10px]">
                 <FontAwesomeIcon icon={faCar} />
                 <span>Car rentals</span>
            </div>
            <div className="flex items-center gap-[10px]"> 
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxi</span>
            </div>
            <div className="flex items-center gap-[10px]"> 
                <FontAwesomeIcon icon={faMap} />
                <span>Attractions</span>
            </div>
            </div>
          { type !== "list" &&
            <> 
          
           <h1 className="my-3 font-bold text-3xl">A life time discounts? It's Genius.</h1>
            <p className="text-xl mt-1">Get rewarded for your travels - unlock instant saving of 10% or more with a free Booking account</p>
            <button className="bg-[#0071c3] text-white my-2 px-2 py-2 cursor-pointer">Sign in/Register</button>
            <div className="h-[30px] bg-white text-gray-400 px-[10px] ml-[40px] mb-4 absolute bottom-[-45px] w-[100%] max-w-[1024px] flex items-center justify-between py-[30px]  border-[3px] border-solid border-[#febb02] ">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="" icon={faBed } />
                    <input  className="border-none" placeholder="Where are you going" type="text"></input>
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCalendarDays } />
                    <span className="cursor-pointer" onClick={() =>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                     to 
                     ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                   { openDate && <DateRange className="absolute top-[50px] z-[2]"
                    editableDateInputs={true}
                    onChange={item => setDate([item.section])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                     />
                     }
                 </div >
                 <div className="flex items-center gap-3 cursor-pointer">
                 <FontAwesomeIcon icon ={faPerson} />
                 <span onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult- ${options.children} children- ${options.room}room`}</span>
                 {openOptions &&
                 <div className="options absolute top-[50px] z-[2] text-gray px-3 mx-3  bg-white border-2 border-inherit ">
                    <div className="optionItem w-[200px] flex justify-between gap-2 text-lg text-black ">
                        <span className="optionText">Adult</span>
                        <div className="flex items-center gap-2 text-lg text-black">
                        <button 
                        disabled={options.adult <= 1}
                        onClick={()=>handleOption("adult", "d")} 
                        className="border-2 border-[#0071c3]  px-2">
                            -
                        </button>
                        <span >{options.adult}</span>
                        <button 
                         onClick={()=>handleOption("adult", "i")} 
                         className="border-2 border-[#0071c3] px-2 "
                            >+
                        </button>
                        </div>
                    </div>
                    <div className="optionItem w-[200px] flex justify-between gap-2 text-lg text-black">
                        <span className="optionText">Children</span>
                        <div className="flex items-center gap-2">
                       <button 
                       disabled={options.children <= 1}
                       onClick={()=>handleOption("children", "d")}  
                       className="border-2 border-[#0071c3]  px-2" > 
                             - 
                       </button>
                        <span >{options.children}</span>
                        <button  onClick={()=>handleOption("children", "i")}  className="border-2 border-[#0071c3]  px-2"> + </button>
                    
                        </div>
                    </div>
                    <div className="optionItem w-[200px] flex justify-between gap-2 text-lg text-black">
                        <span className="optionText">Room</span>
                        <div className="flex items-center gap-2">
                        <button 
                        disabled={options.room <= 1}
                         onClick={()=>handleOption("room", "d")} 
                         className="border-2 border-[#0071c3] px-2" >
                            -
                        </button>
                        <span >{options.room}</span>
                        <button onClick={()=>handleOption("room", "i")} className="border-2 border-[#0071c3] px-2">+</button>
                        </div>
                    </div>
                 </div>
                 }
                 </div>
                 <div className="w-[100px] h-10 border text-white  border-[#0071c3] bg-[#0071c3] cursor-pointer">
                 <button className="mx-auto pt-[5px] font-bold flex items-center" >Search</button>
                 </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header