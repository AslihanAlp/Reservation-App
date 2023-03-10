import { useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import {format} from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem";


  

function List() {

  const location = useLocation()
  console.log(location)

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState("false")

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-[1024px] flex gap-5">
          <div className=" w-1/3 bg-[#febb02] h-max p-[10px] border rounded-xl sticky top-[10px]">
            <h1 className="text-[20px] text-[#555] font-bold mb-[10px]">Search</h1>
            <div className="flex flex-col  gap-5 mb-[10px]">
              <label >Destination</label>
              <input className="h-[30px] p-[5px] border-none"
              placeholder="destination" 
              type="text"/>
            <div className="flex flex-col gap-5 mb-[10px]">
              <label >Check-in Date</label>
              <span className="cursor-pointer h-[30px] p-[5px] bg-white flex items-center"
                onClick={() =>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                     to 
                     ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
            {openDate && (
            <DateRange   
                onChange={(item)=> setDate([item.selection])}
                ranges={date} />
                 ) }  
            </div>
            <div className ="flex flex-col gap-[5px] mb-[10px]  "> 

              <label>Options</label>
              <div className="p-[10px] ">
              <div className="mb-2 flex text-sm justify-between text-[#555] ">
                <span>
                  Min price <small>per night</small>
                </span>
                  <input className="w-[50px]"
                   type="number"/>
              </div>
              <div className="mb-2 flex text-[#555] justify-between">
                <span>
                  Max price <small>per night</small>
                </span>
                  <input  className="w-[50px]"
                  type="number"/>
              </div>
              <div className="mb-2 flex text-[#555] justify-between">
                <span>
                  Adult
                </span>
                  <input  className="w-[50px]"
                   type="number"
                   min={1}
                   placeholder={options.adult}/>
              </div>
              <div className="mb-2 flex text-[#555] justify-between">
                <span>
                 Children
                </span>
                  <input  className="w-[50px]"
                  type="number" 
                  min={1}
                  placeholder={options.adult}/>
              </div>
              <div className="mb-2 flex text-[#555] justify-between">
                <span>
                 Room
                </span>
                  <input  className="w-[50px]"
                  type="number" 
                  min={1}
                  placeholder={options.adult}/>
              </div>

            </div>
            </div>
            <button className="p-2 bg-[#0071c2] text-white border-none w-full cursor-pointer text-md">Search</button>
           </div>
            
          
          </div>
          <div className="flex flex-col w-2/3">
            <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default List