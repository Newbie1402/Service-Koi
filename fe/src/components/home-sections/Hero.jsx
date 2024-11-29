import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { config } from '../../configs'

// Background image: https://cafishvet.com/wp-content/uploads/2022/07/Healthy-Goldfish.jpg
function Hero() {
    return (
        <div className="w-full h-[452px] relative bg-[url('https://cafishvet.com/wp-content/uploads/2022/07/Healthy-Goldfish.jpg')] bg-no-repeat bg-cover bg-center text-white z-0 after:content-[''] after:block after:w-full after:h-full after:absolute after:top-0 after:left-0 after:backdrop-blur-md after:-z-10">
            <div className="container left-0 flex flex-col gap-10 pt-20">
                <h2 className="text-[62px] leading-[86px] font-bold">Got a sick fish?</h2>
                <p className="text-2xl">Our mobile veterinary service is here to help pet fish.</p>
                <Link to={config.routes.appointment} className="block w-fit">
                    <Button color="warning" size="lg" className="font-semibold text-white uppercase" variant="bordered">
                        Request Appointment
                    </Button>
                </Link>
            </div>

            <div className="absolute bottom-0 w-full">
                <svg className="uasvg-wave-slide-separator" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" opacity="1" width="100%" height="60" preserveAspectRatio="none" viewBox="0 0 1600 200">
                    <path
                        id="uabb-bottom-wave-slide-separator1"
                        d="M-8,95.3C-8,95.3,189,2,398,2s604,184.7,800,184.7s412-91.4,412-91.4V271H-8V95.3
			z"
                    ></path>
                    <path
                        id="uabb-bottom-wave-slide-separator2"
                        d="M1610,95.3c0,0-216,80-412,80c-98,0-245.8-40.5-395.1-80.9
			c149.4,46.2,297.1,92.3,395.1,92.3C1394,186.7,1610,95.3,1610,95.3z"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default Hero
