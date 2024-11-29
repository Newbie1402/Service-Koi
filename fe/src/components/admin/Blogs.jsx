
import "../../styles/Admin.css"

const Blogs = () => {
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
            <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
            <button className="add-button">Create +</button>
            </div>
            <div className="grid-container">
            {items.map((item) => (
                    <div key={item.id} style={{border: "1px solid #ccc", borderRadius:"5px"}} className="grid-item">
                        <img 
                            style={{ width: '200px', height: '200px', marginRight: '100px' }} 
                            src={item.imageUrl} 
                            alt={`Image for ${item.textTitle}`} 
                        />
                        <h1>{item.textTitle}</h1>
                        <button className="contentButton">{item.contentButton}</button>
                        <p style={{ marginTop: '20px' }}>{item.paragraphButton}</p>
                        <p style={{ marginTop: '20px' }}>{item.paragraphButtonTwo}</p>

                        <div style={{ marginTop: '20px' }}>
                            <button >Edit</button>
                            <button style={{ marginLeft: '10px' }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;

