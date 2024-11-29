import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Avatar, Button, RadioGroup, Select, SelectItem, Textarea } from '@nextui-org/react'
import { formatMoney } from '../../ultils/formatMoney'
import { DatePicker } from '@nextui-org/date-picker'
import { useState } from 'react'
import DoctorsAvailableTable from '../tables/DoctorsAvailableTable'
import { useFindDoctor } from '../../hooks/useFindDoctor'
import { DAYS_OF_WEEK } from '../../constants/daysOfWeek'
import { parseDate } from '@internationalized/date'
import { useAuthContext } from '../../contexts/AuthContext'
import { Input } from '@nextui-org/react'
import PropTypes from 'prop-types'
import { CustomRadio } from '../input-fields/CustomRadio'
import { useCreateBooking } from '../../hooks/useCreateBooking'

const BookingSchema = Yup.object().shape({
    bookingDate: Yup.date().required('Booking date is required'),
    serviceId: Yup.string().required('Please select a service'),
    bookingDetail: Yup.string().required('Booking Detail is required'),
    distance: Yup.string().required('Distance is required'),
    paymentMethod: Yup.string().required('Payment Method is required'),
})

CustomerBookingAppointmentForm.propTypes = {
    services: PropTypes.array.isRequired,
}

function CustomerBookingAppointmentForm({ services }) {
    const { authUser } = useAuthContext()
    const [doctors, setDoctors] = useState([])
    const [isShowDoctors, setIsShowDoctors] = useState(false)
    const [staffId, setStaffId] = useState('')
    const { findDoctor } = useFindDoctor()
    const { createBooking } = useCreateBooking()

    const formik = useFormik({
        initialValues: {
            bookingDate: '2024-11-18',
            serviceId: '',
            bookingDetail: '',
            distance: '',
            paymentMethod: 'CASH',
        },
        validationSchema: BookingSchema,
        onSubmit: async (values) => {
            const servicePrice = services[values.serviceId].price

            let movingPrice = 0

            if (values.distance <= 1) {
                movingPrice = 7000
            } else if (values.distance <= 2) {
                movingPrice = 10000
            } else if (values.distance <= 3) {
                movingPrice = 10000
            } else if (values.distance <= 4) {
                movingPrice = 20000
            } else {
                movingPrice = 40000
            }

            const totalPrice = movingPrice + servicePrice

            const newBooking = {
                bookingDate: values.bookingDate,
                serviceId: values.serviceId,
                staffId: staffId,
                customerId: authUser.id,
                distance: values.distance,
                bookingDetail: values.bookingDetail,
                paymentMethod: values.paymentMethod,
                totalprice: totalPrice,
                paymentstatus: false,
                appointment: false,
                medicalid: [],
            }
            console.log(totalPrice)

            await createBooking(newBooking, totalPrice)
            // Reset Form
            formik.resetForm()
            setDoctors([])
            setStaffId('')
            setIsShowDoctors(false)
        },
    })

    const handleFindDoctor = async () => {
        const bookingDate = new Date(formik.values.bookingDate)
        if (isNaN(bookingDate)) {
            alert('Invalid booking date')
            return
        }
        const getDayBooking = bookingDate.getDay()
        const dayText = DAYS_OF_WEEK[getDayBooking]

        const doctorsFound = await findDoctor(dayText)
        setDoctors(doctorsFound)
        setIsShowDoctors(true)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="border py-5 px-10 mx-auto max-w-[1000px] flex flex-col gap-10 rounded-xl">
                <p className="text-center font-bold text-xl uppercase">Booking Appointment Form</p>
                <div className="grid grid-cols-2 gap-5">
                    <Select
                        items={services}
                        label="What service do you need?"
                        aria-label="service"
                        placeholder="Select a service"
                        labelPlacement="outside"
                        name="serviceId"
                        id="serviceId"
                        isRequired
                        onChange={formik.handleChange}
                        value={formik.values.serviceId}
                        classNames={{
                            base: 'w-full',
                            trigger: 'h-12',
                        }}
                        errorMessage={formik.errors.serviceId}
                        isInvalid={formik.errors.serviceId ? true : false}
                        renderValue={(items) => {
                            return items.map((item) => (
                                <div key={item.key} className="flex items-center gap-2">
                                    <Avatar alt={item.data.name} className="flex-shrink-0" size="sm" src={item.data.avatar} />
                                    <div className="flex flex-col">
                                        <span>{item.data.nameservice}</span>
                                        <span className="text-default-500 text-tiny">{formatMoney(item.data.price)}</span>
                                    </div>
                                </div>
                            ))
                        }}
                    >
                        {(service) => (
                            <SelectItem key={service.id} textValue={service.name}>
                                <div className="flex gap-2 items-center">
                                    <Avatar alt={service.name} className="flex-shrink-0" size="sm" src={service.avatar} />
                                    <div className="flex flex-col">
                                        <span className="text-small">{service.nameservice}</span>
                                        <span className="text-tiny text-default-400">{formatMoney(service.price)}</span>
                                    </div>
                                </div>
                            </SelectItem>
                        )}
                    </Select>
                    <DatePicker
                        label="When do you need my help?"
                        isRequired
                        labelPlacement="outside"
                        showMonthAndYearPickers
                        className="w-full"
                        name="bookingDate"
                        id="bookingDate"
                        value={parseDate(formik.values.bookingDate)}
                        onChange={(date) => {
                            const day = new Date(date)
                            const formart = day.toISOString().split('T')[0]
                            return formik.setFieldValue('bookingDate', formart)
                        }}
                        errorMessage={formik.errors.bookingDate}
                        isInvalid={formik.errors.bookingDate ? true : false}
                        aria-label="date"
                    />
                </div>
                <Button color="success" className="text-white" onClick={handleFindDoctor} type="button">
                    Find Doctor Available
                </Button>
                {isShowDoctors && (
                    <div>
                        <p className="mb-2 font-medium">Doctors Available</p>
                        {doctors.length === 0 && <p>There are no doctors available for your requested schedule.</p>}
                        {doctors.length > 0 && <DoctorsAvailableTable data={doctors} setStaffId={setStaffId} staffId={staffId} />}
                    </div>
                )}

                <Input
                    isRequired
                    label="Distance"
                    name="distance"
                    labelPlacement="outside-left"
                    onChange={formik.handleChange}
                    value={formik.values.distance}
                    errorMessage={formik.errors.distance}
                    isInvalid={formik.errors.distance ? true : false}
                    className="max-w-xs"
                    endContent={<p className="text-sm">km</p>}
                />
                <Textarea
                    label="Booking Detail"
                    aria-label="booking detail"
                    placeholder="Let me know about your detailed requirements here"
                    labelPlacement="outside"
                    isRequired
                    onChange={formik.handleChange}
                    value={formik.values.bookingDetail}
                    name="bookingDetail"
                    id="bookingDetail"
                    errorMessage={formik.errors.bookingDetail}
                    isInvalid={formik.errors.bookingDetail ? true : false}
                />
                <RadioGroup
                    defaultValue={'CASH'}
                    label="Payment Method"
                    isRequired
                    className="text-sm"
                    description="Select the payment method you will use for this service"
                    name="paymentMethod"
                    id="paymentMethod"
                    errorMessage={formik.errors.paymentMethod}
                    isInvalid={formik.errors.paymentMethod ? true : false}
                    value={formik.values.paymentMethod}
                    onValueChange={(value) => {
                        return formik.setFieldValue('paymentMethod', value)
                    }}
                >
                    <CustomRadio value="CASH">Cash</CustomRadio>
                    <CustomRadio value="BANK_TRANSFER">Bank Transfer</CustomRadio>
                    <CustomRadio value="CREDIT_CARD">Credit Card</CustomRadio>
                    <CustomRadio value="MOMO">Momo</CustomRadio>
                    <CustomRadio value="PAYPAL">Paypal</CustomRadio>
                </RadioGroup>
                <Button type="submit" color="primary" className="font-semibold">
                    Create Booking
                </Button>
            </div>
        </form>
    )
}

export default CustomerBookingAppointmentForm
