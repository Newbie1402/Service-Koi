export default function services() {
    const items = [
        {
            id: 1,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/10/woman-with-koi-pond.jpg',
            contentButton: 'SIGN UP FOR SUBSCRIPTION SERVICE',
            textTitle: 'Pond Subscription Service',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 2,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/10/fish-tank-service-1024x536.jpg',
            contentButton: 'REQUEST APPOINTMENT',
            textTitle: 'Pond/Tank Package',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 3,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/12/fish-online-training.jpg',
            contentButton: 'ORDER CONSULTATION',
            textTitle: 'Aquatic Telehealth Consult',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 4,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/12/Aquatic-Veterinary-Consult.png',
            contentButton: 'ORDER CONSULTATION',
            textTitle: 'Aquatic Veterinary Consult',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 5,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/10/fish-Surgery.jpg',
            contentButton: 'REQUEST APPOINTMENT',
            textTitle: 'Fish Physical Exams',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 6,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/10/good-water-quality-in-fish-tank-1024x536.jpg',
            contentButton: 'REQUEST APPOINTMENT',
            textTitle: 'Water Quality Testing',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 7,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/10/Fish-Surgery-1.jpg',
            contentButton: 'REQUEST APPOINTMENT',
            textTitle: 'Fish Surgery',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        {
            id: 8,
            imageUrl: 'https://cafishvet.com/wp-content/uploads/2020/10/USDA-Accredited-Veterinarian.png',
            contentButton: 'REQUEST APPOINTMENT',
            textTitle: 'CVIs & VFDs',
            paragraphButton:
                'Just like a cat or dog, individual fish can be singled out for an exam. Sometimes, a little sedation is required to make the exam stress-free for our fish patients. No need to catch any fish! With our mobile service, we do everything, include catching just the right fish.',
            paragraphButtonTwo:
                'Advanced diagnostics, such as blood work or ultrasounds may be recommended. Our veterinary staff is happy to discuss any potential charges prior to performing additional diagnostics.',
        },
        // Thêm các phần tử khác theo cách tương tự
    ]
    return (
        <div>
            <div className="header_aboutUs">
                <h1 className="text_Header">Services</h1>
            </div>
            <div className="container First_PartServices">
                <div className="First_PartServices_Content">
                    <div className="main_Content_Fourth">
                        <div className="content_Wrapper_Fourth">
                            <p>
                                <div className="practice_Manager_Fourth">Aquatic Veterinary Services offers a wide-range of services for your aquatic pets.</div>
                                <div className="content_Two">
                                    All of our services are delivered tank or pond side. We charge a small mileage fee for clients outside of Santa Cruz County. Estimates are available upon request.{' '}
                                    <br />
                                </div>
                                <div className="content_Three">
                                    Our Ideal Client is one who is ready to learn and understands that pet fish deserve the same care and compassion as other pets. Our service strives to provide high
                                    level pet fish owner education and instills confidence in keeping pet fish happy and healthy.
                                </div>
                            </p>
                            <img src="https://cafishvet.com/wp-content/uploads/2024/09/Water-Treatment-Jessie-Sanders-Fish-Vetranarian-1024x683.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container grid-container">
                {items.map((item) => (
                    <div key={item.id} className="grid-item">
                        <img style={{ width: '200px', height: '200px', marginRight: '100px' }} src={item.imageUrl} alt={`Image for ${item.text}`} />
                        <h1>{item.textTitle}</h1>
                        <button className="contentButton">{item.contentButton}</button>
                        <p style={{ marginTop: '20px' }}>{item.paragraphButton}</p>
                        <p style={{ marginTop: '20px' }}>{item.paragraphButtonTwo}</p>
                    </div>
                ))}
            </div>
            <iframe
                width={1000}
                height={500}
                className="iframe_Video"
                src="https://www.youtube.com/embed/b9rf5ZwcV_E?rel=0&start&end&controls=1&mute=0&modestbranding=0&autoplay=1"
                frameBorder="0"
            ></iframe>
            <div className="cta-section cta-sectionTwo">
                <h2>Schedule Your Fish Exam</h2>
                <p>Schedule an appointment or call us at (831) 278-1081.</p>
                <button className="cta-button">Request Appointment</button>
            </div>
        </div>
    )
}
