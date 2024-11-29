import PropTypes from 'prop-types'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import { Button } from '@nextui-org/react'

DoctorsAvailableTable.propTypes = {
    data: PropTypes.array.isRequired,
    staffId: PropTypes.number.isRequired,
    setStaffId: PropTypes.func.isRequired,
}

function DoctorsAvailableTable({ data, staffId, setStaffId }) {
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>Doctor Name</TableColumn>
                <TableColumn>Phone Number</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>
                            <p className="font-semibold">{item.staffname}</p>
                        </TableCell>
                        <TableCell>
                            <p className="font-semibold">{item.staffphone}</p>
                        </TableCell>
                        <TableCell>
                            <p>{item.staffemail}</p>
                        </TableCell>
                        <TableCell>
                            <Button
                                size="sm"
                                color="primary"
                                className={staffId === item.id ? 'text-white' : 'text-black'}
                                variant={staffId === item.id ? 'solid' : 'flat'}
                                onClick={() => {
                                    setStaffId(item.id)
                                }}
                            >
                                Select
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DoctorsAvailableTable
