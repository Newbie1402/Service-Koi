import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import { Button, Input } from '@nextui-org/react'
import { useFormik } from 'formik'
import { Rating } from '@mui/material'
import feedbackApi from '../../apis/feedback.api'
import Swal from 'sweetalert2'

AddFeedbackModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
    dataFeedback: PropTypes.object.isRequired,
}

const LoginSchema = Yup.object().shape({
    rating: Yup.string().required('Required'),
    comment: Yup.string().required('Required'),
})

function AddFeedbackModal({ isOpen, onOpenChange, dataFeedback }) {
    const formik = useFormik({
        initialValues: {
            rating: 0,
            comment: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            const newFeedback = {
                bookingid: dataFeedback.id,
                customerid: dataFeedback.customer.id,
                staffid: dataFeedback.staff.id,
                rating: values.rating,
                comment: values.comment,
            }
            try {
                const response = await feedbackApi.createFeedback(newFeedback)
                console.log(response)

                const { status } = response
                if (status === 201) {
                    Swal.fire({
                        title: 'Successfully!',
                        text: 'Comment successfully !!!',
                        confirmButtonText: 'OK',
                    })
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    color: 'error',
                    iconColor: 'error',
                })
            }
            formik.resetForm()
        },
    })
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={formik.handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">Create New Feedback</ModalHeader>
                        <ModalBody>
                            <div className="flex items-center justify-start gap-1 mb-2">
                                <label className="text-sm">Rating</label>
                                <Rating
                                    name="simple-controlled"
                                    value={formik.values.rating}
                                    onChange={(event, newValue) => {
                                        formik.setFieldValue('rating', newValue)
                                    }}
                                />
                            </div>
                            <Input
                                isRequired
                                label="Comment"
                                name="comment"
                                id="comment"
                                labelPlacement="outside"
                                onChange={formik.handleChange}
                                value={formik.values.comment}
                                errorMessage={formik.errors.comment}
                                isInvalid={formik.errors.comment ? true : false}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onClick={() => {
                                    formik.resetForm()
                                    onClose()
                                }}
                            >
                                Close
                            </Button>
                            <Button color="primary" type="submit">
                                Action
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AddFeedbackModal
