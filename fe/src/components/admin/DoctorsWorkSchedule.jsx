import { useEffect, useState } from 'react'
import '../../styles/Admin.css'
import staffApi from '../../apis/staff.api'
import Swal from 'sweetalert2'

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import { Button, useDisclosure } from '@nextui-org/react'
import AddNewDoctorForm from '../form/AddNewDoctorForm'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'

const DoctorsWorkSchedule = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [isEditMode, setIsEditMode] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await staffApi.getStaffs()
                const { status, data } = response
                if (status === 200) {
                    setDoctors(data)
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
        fetchData()
    }, [])

    const handleDelete = async (staffId) => {
        try {
            const response = await staffApi.deleteStaff(staffId)
            const { status } = response
            // TODO: Thêm trường isDeleted
            if (status === 204) {
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Deleted successfully !!!',
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
    }

    return (
        <div>
            <h1>Doctor Management {`{${doctors.length}}`}</h1>
            <Button
                className="mb-5"
                color="primary"
                onPress={onOpen}
                onClick={() => {
                    setIsEditMode(false)
                }}
            >
                Add New Doctor
            </Button>
            <AddNewDoctorForm isOpen={isOpen} onOpenChange={onOpenChange} isEditMode={isEditMode} dataEdit={dataEdit} />
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Doctor Name</TableColumn>
                    <TableColumn>Phone Number</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Address</TableColumn>
                    <TableColumn>Schedule Work on Week</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {doctors.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.staffname}</TableCell>
                            <TableCell>{item.staffphone}</TableCell>
                            <TableCell>{item.staffemail}</TableCell>
                            <TableCell>{item.staffadress}</TableCell>
                            <TableCell>{item.staffschedule?.join(', ')}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-start gap-3">
                                    <Button
                                        color="warning"
                                        size="sm"
                                        isIconOnly
                                        title="Edit"
                                        onClick={() => {
                                            setDataEdit(item)
                                            setIsEditMode(true)
                                            onOpen()
                                        }}
                                    >
                                        <CreateIcon className="text-white" />
                                    </Button>
                                    {/* <Button
                                        color="danger"
                                        size="sm"
                                        isIconOnly
                                        title="Delete"
                                        onClick={() => {
                                            handleDelete(item.id)
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button> */}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default DoctorsWorkSchedule
