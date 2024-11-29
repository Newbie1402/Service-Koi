import "../../styles/HouseTime.css"
import { useNavigate } from "react-router-dom";

function HouseTime() {
    const navigate = useNavigate(); 
    const handleLogin = () => {
        navigate("/login"); 
    };

    return (
        <div className="wrapper">
            <div className="title">Aquatic Veterinary Services is a mobile veterinary practice taking care of pet fish in California and Nevada</div>
            <div className="title-small">Aquatic Veterinary Services is the premiere mobile specialty aquatic veterinary practice providing top quality, immeasurable value for fish and their dedicated owners. We transform pet fish owners into savvy and skilled aquatic pet parents, resulting in healthy, stress-free fish with a tremendous quality of life.</div>
            <div className="house-time">
                <img src="/src/assets/images/img-house-time.jpg" alt="" width={"310px"} height={"206px"} />
                <div className="house-time-inner">
                    <img src="/src/assets/images/logo-house-time.webp" alt="" width={"586px"} height={"86px"} />
                    <div className="title-hs" >
                        <div > <span className="title-hs1">We were recently profiled in The New York Times</span> <span style={{fontWeight:"400px"}}>on diagnosing, treating and keeping pet fish healthy. </span><span onClick={handleLogin} className="title-hs3">Read the full article here.</span> </div></div>
                        
                </div>
            </div>
        </div>
    )

}

export default HouseTime;