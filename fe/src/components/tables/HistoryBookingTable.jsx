import PropTypes from 'prop-types'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CloseIcon from '@mui/icons-material/Close'
import FeedbackIcon from '@mui/icons-material/Feedback'
import { Button, useDisclosure } from '@nextui-org/react'
import AddFeedbackModal from '../modals/AddFeedbackModal'
import { useState } from 'react'
import { formatMoney } from '../../ultils/formatMoney'

HistoryBookingTable.propTypes = {
    data: PropTypes.array.isRequired,
}

function HistoryBookingTable({ data }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [dataFeedback, setDataFeedback] = useState({})

    return (
        <div>
            <AddFeedbackModal isOpen={isOpen} onOpenChange={onOpenChange} dataFeedback={dataFeedback} />
            <Table aria-label="Example static collection table" className="px-20 mb-20">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Booking Date</TableColumn>
                    <TableColumn>Service name</TableColumn>
                    <TableColumn>Doctor</TableColumn>
                    <TableColumn>Total Price</TableColumn>
                    <TableColumn>Distance</TableColumn>
                    <TableColumn>Payment Method</TableColumn>
                    <TableColumn>Is Visited</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.bookingDate}</TableCell>
                            <TableCell>
                                <span className="font-semibold">{item.service.nameservice}</span>
                            </TableCell>
                            <TableCell>
                                <span className="font-semibold">{item.staff.staffname}</span>
                            </TableCell>
                            <TableCell>{formatMoney(item.totalprice)}</TableCell>
                            <TableCell>{item.distance} km</TableCell>
                            <TableCell>{item.paymentMethod}</TableCell>
                            <TableCell>{item.appointment === true ? <CheckBoxIcon className="text-success-600" /> : <CloseIcon className="text-red-500" />}</TableCell>
                            <TableCell>
                                <Button
                                    title="Feedback"
                                    isIconOnly
                                    color="warning"
                                    className="text-white"
                                    onClick={() => {
                                        setDataFeedback(item)
                                        onOpen()
                                    }}
                                >
                                    <FeedbackIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default HistoryBookingTable
