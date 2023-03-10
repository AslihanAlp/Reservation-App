import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Featured from "../../components/Featured"
import PropertyList from "../../components/PropertyList"
import FeaturedProperties from "../../components/FeaturedProperties"
import MailList from "../../components/MailList"
import Footer from "../../components/Footer"

function Home() {

 return (
    <div>
    <Navbar />
    <Header />
    <div className=" mt-[50px] flex flex-col items-center gap-[30px]">
    <Featured />
    <div className="max-w-[1024px] font-bold text-xl">Browse by property type</div>
    <PropertyList />
    <div className="max-w-[1024px] font-bold text-xl">Homes guest love</div>
    <FeaturedProperties />
    <MailList />
    <Footer/>
    </div>
    </div>
  )
}

export default Home