import '../../styles/Admin.css'

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import { Button, useDisclosure } from '@nextui-org/react'
import { useGetServices } from '../../hooks/useGetServices'
import AddNewServiceForm from '../form/AddNewServiceForm'
import { formatMoney } from '../../ultils/formatMoney'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import serviceApi from '../../apis/service.api'
import { useState } from 'react'

const ServiceManagement = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { services } = useGetServices()
    const [dataEdit, setDataEdit] = useState({})
    const [isEditMode, setIsEditMode] = useState(false)

    const handleDelete = async (serviceId) => {
        const response = await serviceApi.deleteService(serviceId)
        console.log(response)
    }

    const handleEdit = (item) => {
        setIsEditMode(true)
        setDataEdit(item)
    }

    return (
        <div>
            <h1>Service Management {`{${services.length}}`}</h1>
            <Button
                className="mb-5 text-white"
                color="success"
                onPress={onOpen}
                onClick={() => {
                    setIsEditMode(false)
                }}
            >
                Add New Service
            </Button>
            <AddNewServiceForm isOpen={isOpen} onOpenChange={onOpenChange} dataEdit={dataEdit} isEditMode={isEditMode} />
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>CODE</TableColumn>
                    <TableColumn>Service name</TableColumn>
                    <TableColumn>Price</TableColumn>
                    <TableColumn>Summary</TableColumn>
                    <TableColumn>Content</TableColumn>
                    <TableColumn>Status</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {services.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>#{item.productcode}</TableCell>
                            <TableCell>
                                <span className="font-semibold text-lg">{item.nameservice}</span>
                            </TableCell>
                            <TableCell>
                                <p className="font-semibold">{formatMoney(item.price)}</p>
                            </TableCell>
                            <TableCell>
                                <div className="max-w-[150px]">{item.summary}</div>
                            </TableCell>
                            <TableCell>
                                <div className="max-w-[400px]">{item.content}</div>
                            </TableCell>
                            <TableCell>
                                <span className={`${item.status.toLowerCase() === 'active' ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>{item.status}</span>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center justify-start gap-3">
                                    <Button
                                        color="warning"
                                        size="sm"
                                        isIconOnly
                                        title="Edit"
                                        onPress={onOpen}
                                        onClick={() => {
                                            handleEdit(item)
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

export default ServiceManagement
