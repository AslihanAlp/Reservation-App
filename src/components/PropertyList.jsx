function PropertyList() {
  return (
    <div className="max-w-[1024px w-[100%] flex justify-between gap-5">
        <div className=" cursor-pointer owerflow-hidden flex-1">
            <img 
            className="w-[100%] h-[150px] rounded-lg object-cover"
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="/>
            <h1 className="font-bold text-lg">Hotels</h1>
            <h2>123 Hotelss</h2>
        </div>
        <div className="cursor-pointer owerflow-hidden flex-1">
            <img 
            className="w-[100%] h-[150px] rounded-lg object-cover"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" />
            <h1 className="font-bold text-lg">Hotels</h1>
            <h2>1234 Hotelss</h2>
        </div>
        <div className=" cursor-pointer owerflow-hidden flex-1">
            <img 
             className="w-[100%] h-[150px] object-cover rounded-lg"
             src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" />
            <h1 className="font-bold text-lg ">Hotels</h1>
            <h2>234 Hotelss</h2>
        </div>
        <div className=" cursor-pointer owerflow-hidden flex-1">
            <img  
            className="w-[100%] h-[150px] rounded-lg object-cover"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" />
            <h1 className="font-bold text-lg">Hotels</h1>
            <h2 >345 Hotelss</h2>
        </div>
        <div className=" cursor-pointer owerflow-hidden flex-1">
            <img  
            className="w-[100%] rounded-2xl h-[150px] object-cover"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" />
            <h1 className="font-bold text-lg">Hotels</h1>
            <h2>334 Hotelss</h2>
        </div>
    </div>
  )
}

export default PropertyList