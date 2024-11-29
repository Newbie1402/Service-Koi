import { useNavigate } from "react-router-dom";
import "../../styles/Meeting.css";

function Exam() {
    const navigate = useNavigate(); 
    const handleRequestAppointment = () => {
        navigate("/appointment"); 
    };

    return (
        <div className="bg-[#ffffff] mb-[100px]">
            <div style={{ width: "600px" }} className="container py-[50px] text-gray-500 exam-container">
                <div className="title-meeting">Schedule Your Fish Exam</div>
                <div className="title-wecome-inner">
                    Schedule an appointment or call us at (831) 278-1081.
                </div>
                <div className="btn" onClick={handleRequestAppointment}>
                    REQUEST APPOINTMENT
                </div>
            </div>
        </div>
    );
}

export default Exam;
