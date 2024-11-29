import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqData = [
    { question: 'How do I know if my fish is sick?', answer: 'Explanation about fish sickness...' },
    { question: 'How do you sedate or anesthetize a fish?', answer: 'Explanation about sedating a fish...' },
    { question: 'What should I feed my fish?', answer: 'Explanation about fish diet...' },
    // Thêm các câu hỏi khác vào đây...
]
export default function servicesPage() {
    return (
        <div className='container'>
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
        </div>
    )
}
