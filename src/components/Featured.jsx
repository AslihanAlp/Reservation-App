
function Featured() {
  return (
    <div className="w-[100%] max-w-[1024px] flex justify-between z-[1] gap-5">
        <div className="relative text-white h-[250px] rounded-lg overflow-hidden">
            <img 
            className="w-[100%] object-cover  "
            src="https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=" />
            <div>
                <h1 className="absolute bottom-5 mb-5 font-bold pl-3 text-2xl">Dubai</h1>
                
            </div>
        </div>
        <div className="relative text-white h-[250px] rounded-lg overflow-hidden">
            <img 
            className="w-[100%] object-cover  "
            src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="/>
            <div>
                <h1 className="absolute bottom-5 mb-5 font-bold pl-3 text-2xl">Amsterdam</h1>
               
            </div>
        </div>
        <div className="relative text-white rounded-lg h-[250px] overflow-hidden">
            <img 
            className="w-[100%] object-cover  "
            src="https://cf.bstatic.com/xdata/images/city/600x600/972613.jpg?k=bad433a74a80d55d3e6ce265ac7b61bac169cc0c7c54cdc576f6baf8730e2c8d&o=" />
            <div>
                <h1 className="absolute bottom-5 pl-3 mb-5 font-bold text-2xl">Berlin</h1>
                
               
            </div>
        </div>
    </div>
  )
}

export default Featured