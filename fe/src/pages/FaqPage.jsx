import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Dữ liệu cho phần FAQ
const faqData = [
    {
        question: 'How do I know if my fish is sick?',
        answer: 'If you are not sure if your fish is sick or not, we recommend you call and we are happy to guide you. Here are the most common physical and behavioral signs of disease in fish. If you have questions or a sick fish that requires treatment, please call us at (831) 278-1081.',
    },
    {
        question: 'How do you sedate or anesthetize a fish?',
        answer: 'We use a powdered medicated known as Tricaine or Finquel. MS-222 has been used for many decades in ornamental fish health and is very safe and easily reversible. We use a small dose for physical exams and a higher one for surgical treatments.',
    },
    {
        question: 'What should I feed my fish?',
        answer: 'We understand that there is a lot of conflicting information about what to feed your fish. Here is our best guide on what to feed your fish. Never fast your fish or withhold food entirely without directions from your aquatic veterinarian.',
    },
    {
        question: 'What areas do you serve?',
        answer: 'We cover the California Bay Area and surrounding counties.',
    },
    {
        question: 'How do I treat my “constipated” fish?',
        answer: 'First off, your fish is not “constipated.” Second, many buoyancy disorders are mistaken for GI disorders. If you have a fancy goldfish, they may be very tricky to achieve correct buoyancy for life. Feeding green peas works by providing your fish with a sinking diet, more vitamins and lower protein to improve your water quality.',
    },
    {
        question: 'I think my fish may have a tumor. What do I need to do to fix it?',
        answer: 'Yes, fish do indeed get cancer. Depending on the type of tumor, and if it is external or internal, we offer many different treatment options. Please call to schedule an appointment to receive a complete diagnosis and explore your treatment options.',
    },
]

// Dữ liệu mẫu cho phần bình luận
const comments = [
    {
        name: 'Susan Ridl',
        date: 'February 13, 2017 at 4:02 pm',
        text: 'Have you ever anesthetized or performed procedures on a mudskipper? I am a veterinary technician student writing a research paper on mudskippers in captivity and am curious to see if it has been done before and if so how. Thank you!!',

        response: {
            name: 'Jessie Sanders, DVM, CertAqV',
            date: 'February 14, 2017 at 8:15 am',
            text: 'I, myself, have not had the opportunity to work with mudskippers. You may want to contact the American Association of Fish Veterinarians or the World Aquarium Veterinary Medical Association. Good luck!',
            avatar: 'data:image/jpeg;base64,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', // Thêm URL ảnh avatar cho người phản hồi,
            avatarOne:
                'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/458272635_1191908135289102_1047648228520700805_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=n3K4sqGV6VwQ7kNvgHGKJLt&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=ACWU4YubKwyj3cUtlQXf_wL&oh=00_AYCHCJCMV1ZRi4rwZcs21Hhngc8RidqWUMY24Hw8SpKoGw&oe=67264729', // Thêm URL ảnh avatar cho người phản hồi,
        },
    },
    {
        name: 'Jan',
        date: 'August 19, 2018 at 11:39 am',
        text: 'I have a large black carp in our koi pond who has been with us for about 10 years...',

        response: {
            name: 'Jessie Sanders, DVM, CertAqV',
            date: 'August 19, 2018 at 12:24 pm',
            text: 'Please call our office for veterinary assistance (831) 728-7000',
            avatar: 'https://secure.gravatar.com/avatar/b70fb4c9da271f726ec783a1713a57ce?s=50&d=mm&r=g', // Thêm URL ảnh avatar cho người phản hồi
            avatarOne: 'https://secure.gravatar.com/avatar/b70fb4c9da271f726ec783a1713a57ce?s=50&d=mm&r=g', // Thêm URL ảnh avatar cho người phản hồi,
        },
    },
]

// Component Comment để hiển thị chi tiết từng bình luận
const Comment = ({ name, date, text, response }) => (
    <div className="comment">
        <div className="first_CommentPart">
            <img src={response.avatarOne} alt={`${response.name}'s avatar`} className="avatar" />
            <p>
                <a href="" className="response_Name">
                    <strong>{name}</strong>
                </a>
                <div className="date_Info">- {date}</div>
            </p>
        </div>
        <p>{text}</p>
        {response && (
            <div className="response">
                <img src={response.avatar} alt={`${response.name}'s avatar`} className="avatar" />
                <div>
                    <p>
                        <a href="" className="response_Name">
                            <strong>{response.name}</strong>
                        </a>{' '}
                        - {response.date}
                    </p>
                    <p>{response.text}</p>
                </div>
            </div>
        )}
    </div>
)

// Component CommentList để hiển thị danh sách các bình luận
const CommentList = () => (
    <div>
        <h3 className="practice_ManagerFaQ">13 thoughts on “Frequently Asked Questions”</h3>
        {comments.map((comment, index) => (
            <Comment key={index} name={comment.name} date={comment.date} text={comment.text} response={comment.response} />
        ))}
    </div>
)

export default function FaqPage() {
    return (
        <div>
            <div className="header_aboutUs">
                <h1 className="text_Header">Frequently Asked Questions</h1>
            </div>
            <div className="container mb-20">
                {faqData.map((item, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
                {/* Thêm phần CommentList bên dưới */}
                <CommentList />
            </div>
        </div>
    )
}
