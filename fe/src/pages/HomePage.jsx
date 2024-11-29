import Exam from '../components/home-sections/Exam'
import Hero from '../components/home-sections/Hero'
import HouseTime from '../components/home-sections/HouseTime'
import Meeting from '../components/home-sections/Meeting'
import OurServices from '../components/home-sections/OurServices'
import WeCome from '../components/home-sections/WeCome'
//import Terminator from '../components/home-sections/Terminator'

function HomePage() {
    return (
        <div className="w-full h-full">
            <Hero />
            {/* <Terminator /> */}
            <HouseTime/>
            <Meeting/>
            <WeCome/>
            <Exam/>
            <OurServices />
        </div>
    )
}

export default HomePage
