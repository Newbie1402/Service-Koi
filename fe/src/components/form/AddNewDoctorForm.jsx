import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import { Button, Input } from '@nextui-org/react'
import { useFormik } from 'formik'
import ChooseSchedule from '../ChooseSchedule'
import { useState } from 'react'
import { useCreateStaff } from '../../hooks/useCreateStaff'
import staffApi from '../../apis/staff.api'
import Swal from 'sweetalert2'

AddNewDoctorForm.propTypes = {
    dataEdit: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
}

const LoginSchema = Yup.object().shape({
    staffname: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
    staffphone: Yup.string().min(9, 'Invalid phone number!').max(9, 'Invalid phone number!').required('Required'),
    staffemail: Yup.string().email('Invalid email').min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    staffpassword: Yup.string().required('Required'),
    staffadress: Yup.string().nullable(),
    profilephoto: Yup.string().nullable(),
})

function AddNewDoctorForm({ isEditMode, dataEdit, isOpen, onOpenChange }) {
    const [staffSchedule, setStaffSchedule] = useState([])

    const { createStaff } = useCreateStaff()

    const formik = useFormik({
        initialValues: isEditMode
            ? dataEdit
            : {
                  staffname: '',
                  staffphone: '',
                  staffemail: '',
                  staffpassword: '',
                  profilephoto: '',
                  staffadress: '',
              },
        enableReinitialize: true,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            if (isEditMode) {
                try {
                    const updateStaff = {
                        staffName: values.staffname,
                        staffEmail: values.staffemail,
                        staffPhone: values.staffphone,
                        profilephoto: values.profilephoto,
                        staffPassword: values.staffpassword,
                        staffSchedule: staffSchedule,
                    }
                    const response = await staffApi.updateStaff(dataEdit.id, updateStaff)
                    console.log(response)

                    const { status } = response
                    if (status === 200) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Updated successfully !!!',
                            confirmButtonText: 'OK',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = '/admin'
                            }
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
            } else {
                const newStaff = {
                    staffName: values.staffname,
                    staffEmail: values.staffemail,
                    staffPhone: values.staffphone,
                    staffadress: values.staffadress,
                    profilephoto: values.profilephoto,
                    staffPassword: values.staffpassword,
                    roleId: 1,
                    staffSchedule: staffSchedule,
                }
                await createStaff(newStaff)
            }
        },
    })

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-[1000px]">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={formik.handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">{isEditMode ? `Edit '${dataEdit.staffname}' Information` : 'Add New Doctor'}</ModalHeader>
                        <ModalBody>
                            <Input
                                isRequired
                                label="Doctor Name"
                                name="staffname"
                                id="staffname"
                                onChange={formik.handleChange}
                                value={formik.values.staffname}
                                errorMessage={formik.errors.staffname}
                                isInvalid={formik.errors.staffname ? true : false}
                            />
                            <Input
                                isRequired
                                type="email"
                                label="Doctor Email"
                                name="staffemail"
                                id="staffemail"
                                onChange={formik.handleChange}
                                value={formik.values.staffemail}
                                errorMessage={formik.errors.staffemail}
                                isInvalid={formik.errors.staffemail ? true : false}
                            />
                            <Input
                                isRequired
                                type="number"
                                label="Doctor Phone"
                                name="staffphone"
                                id="staffphone"
                                onChange={formik.handleChange}
                                value={formik.values.staffphone}
                                errorMessage={formik.errors.staffphone}
                                isInvalid={formik.errors.staffphone ? true : false}
                            />
                            <Input
                                label="Address"
                                name="staffadress"
                                id="staffadress"
                                onChange={formik.handleChange}
                                value={formik.values.staffadress}
                                errorMessage={formik.errors.staffadress}
                                isInvalid={formik.errors.staffadress ? true : false}
                            />
                            <Input
                                label="Avatar URL"
                                name="profilephoto"
                                id="profilephoto"
                                onChange={formik.handleChange}
                                value={formik.values.profilephoto}
                                errorMessage={formik.errors.profilephoto}
                                isInvalid={formik.errors.profilephoto ? true : false}
                            />
                            <Input
                                isRequired
                                type="password"
                                label="Account Password"
                                autoComplete="true"
                                name="staffpassword"
                                id="staffpassword"
                                onChange={formik.handleChange}
                                value={formik.values.staffpassword}
                                errorMessage={formik.errors.staffpassword}
                                isInvalid={formik.errors.staffpassword ? true : false}
                            />
                            <ChooseSchedule setStaffSchedule={setStaffSchedule} staffSchedule={isEditMode ? dataEdit.staffschedule : []} />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                                onClick={() => {
                                    formik.resetForm()
                                }}
                            >
                                Cancel
                            </Button>
                            <Button color={isEditMode ? 'warning' : 'primary'} className="text-white" type="submit">
                                {isEditMode ? 'Update' : 'Create New Doctor'}
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AddNewDoctorForm
