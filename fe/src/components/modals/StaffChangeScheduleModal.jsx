import PropTypes from 'prop-types'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import ChooseSchedule from '../ChooseSchedule'
import { useState } from 'react'
import staffApi from '../../apis/staff.api'
import Swal from 'sweetalert2'

StaffChangeScheduleModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    staffData: PropTypes.object.isRequired,
    onOpenChange: PropTypes.func.isRequired,
}

function StaffChangeScheduleModal({ staffData, isOpen, onOpenChange }) {
    const [staffSchedule, setStaffSchedule] = useState(staffData.staffschedule)

    const handleChangeSchedule = async () => {
        try {
            const stafffUpdated = {
                staffName: staffData.staffname,
                staffEmail: staffData.staffemail,
                staffPhone: staffData.staffphone,
                staffAdress: staffData.staffadress,
                staffSchedule: staffSchedule,
                staffPassword: staffData.staffpassword,
                profilephoto: staffData.profilephoto,
            }
            const response = await staffApi.updateStaff(staffData.id, stafffUpdated)
            const { status } = response

            if (status === 200) {
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Update Schedule successfully !!!',
                    confirmButtonText: 'OK',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/staff/schedule'
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
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Change Schedule</ModalHeader>
                        <ModalBody>
                            <ChooseSchedule staffSchedule={staffData.staffschedule ?? []} setStaffSchedule={setStaffSchedule} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" type="button" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => {
                                    handleChangeSchedule()
                                    onClose()
                                }}
                            >
                                Save
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default StaffChangeScheduleModal
