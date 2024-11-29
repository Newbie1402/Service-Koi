import "../../styles/Meeting.css"

function Meeting() {
    return (
        <div className="bg-[#e8f3ff]">
            <img className="img-meeting-top" src="/src/assets/images/meeting-top.svg" alt="" />
            <div className="container py-[88px] text-gray-500 meeting-container">
                <div className="meeting-left">
                    <div className="title-meeting">Meet Your Fish Veterinarian</div>
                    <div className="title-meeting-inner">
                        <div className="title-meeting-inner1">
                            Dr. Jessie Sanders, DVM, DABVP (Fish Practice) is the owner and chief veterinarian of Aquatic Veterinary Services. Dr. Sanders received her veterinary degree from Tufts University and was the 2020 President of the American Association of Fish Veterinarians (https://fishvets.org) and chair of the Aquatic Veterinary Medicine Committee of the American Veterinary Medical Association (https://avma.org). She is one of the first veterinarians boarded as a fish practice specialist by the American Board of Veterinary Practitioners.
                        </div>
                        <div className="title-meeting-inner2">
                            Dedicating her career to improving veterinary care for aquatic pets, Dr. Sanders has spent many hours training to build a unique set of skills to pass on to pet fish owners. She is a regular presenter at many national veterinary conferences on all aspects of fish health and veterinary care. Read more about Dr. Sanders’ career here (https://drjessiesanders.com)
                        </div>
                    </div>
                </div>
                <div className="meeting-right">
                    <img src="/src/assets/images/ceo.jpeg" alt="" width="350px" height="467px" />
                </div>
            </div>
            <img className="img-meeting" src="/src/assets/images/meeting-top.svg" alt="" />
        </div>
    )
}

export default Meeting
