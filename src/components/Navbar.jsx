function Navbar() {
  return (
    <div className="h-[50px] bg-[#003580] flex justify-center">
      <div className="w-[100%] max-w-[1024px] text-white flex items-center justify-between">
        <span className="font-bold text-2xl">Booking</span>
        <div >
          <button className="bg-white cursor-pointer ml-[20px] px-3 py-1 font-bold text-[#030b17]">Register</button>
          <button className="bg-white cursor-pointer ml-[20px] px-3 py-1 font-bold text-[#030b17]">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar