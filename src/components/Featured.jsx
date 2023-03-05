
function Featured() {
  return (
    <div className="w-[100%] max-w-[1024px] flex justify-between z-[1] gap-5">
        <div className="relative text-white h-[250px] rounded-lg overflow-hidden">
            <img 
            className="w-[100%] object-cover  "
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" />
            <div>
                <h1 className="absolute bottom-5 mb-5 font-bold text-2xl">ffblin</h1>
                <h2 className="absolute bottom-5 font-bold text-lg">12ff proporties</h2>
            </div>
        </div>
        <div className="relative text-white h-[250px] rounded-lg overflow-hidden">
            <img 
            className="w-[100%] object-cover  "
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" />
            <div>
                <h1 className="absolute bottom-5 mb-5 font-bold text-2xl">Dublin</h1>
                <h2 className="absolute bottom-5 font-bold text-l">123 proporties</h2>
            </div>
        </div>
        <div className="relative text-white rounded-lg h-[250px] overflow-hidden">
            <img 
            className="w-[100%] object-cover  "
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" />
            <div>
                <h1 className="absolute bottom-5 mb-5 font-bold text-2xl">Dublin</h1>
                
                <h2 className="absolute bottom-5  font-bold text-l">123 proporties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured