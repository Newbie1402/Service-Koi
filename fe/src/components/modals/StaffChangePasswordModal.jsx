import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'
import { useAuthContext } from '../../contexts/AuthContext'
import { Button } from '@nextui-org/react'
import { Input } from '@nextui-org/input'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import staffApi from '../../apis/staff.api'

StaffChangePasswordModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
}

const LoginSchema = Yup.object().shape({
    newPassword: Yup.string().required('Required'),
    confirmNewPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('newPassword'), null], 'Password must match'),
})

function StaffChangePasswordModal({ isOpen, onOpenChange }) {
    const { authUser } = useAuthContext()

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            try {
                const response = await staffApi.changePassword(authUser.id, values.newPassword)
                const { status, data } = response
                if (status === 200) {
                    Swal.fire({
                        title: 'Successfully!',
                        text: data,
                        confirmButtonText: 'OK',
                    })
                }
                formik.resetForm()
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    color: 'error',
                    iconColor: 'error',
                })
            }
        },
    })

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={formik.handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">Change Password Form</ModalHeader>
                        <ModalBody>
                            <Input
                                isRequired
                                label="New Password"
                                name="newPassword"
                                id="newPassword"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.newPassword}
                                errorMessage={formik.errors.newPassword}
                                isInvalid={formik.errors.newPassword ? true : false}
                            />
                            <Input
                                isRequired
                                label="Confirm New Password"
                                name="confirmNewPassword"
                                id="confirmNewPassword"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.confirmNewPassword}
                                errorMessage={formik.errors.confirmNewPassword}
                                isInvalid={formik.errors.confirmNewPassword ? true : false}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" type="button" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                            <Button color="primary" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    )
}

export default StaffChangePasswordModal
