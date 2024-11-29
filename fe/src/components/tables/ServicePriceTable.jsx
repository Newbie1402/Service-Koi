import PropTypes from 'prop-types'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import { formatMoney } from '../../ultils/formatMoney'

ServicePriceTable.propTypes = {
    data: PropTypes.array.isRequired,
}

function ServicePriceTable({ data }) {
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>CODE</TableColumn>
                <TableColumn>Service name</TableColumn>
                <TableColumn>Price</TableColumn>
                <TableColumn>Image</TableColumn>
                <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.productcode}</TableCell>
                        <TableCell>
                            <p className="font-semibold">{item.nameservice}</p>
                        </TableCell>
                        <TableCell>
                            <p className="font-semibold">{formatMoney(item.price)}</p>
                        </TableCell>
                        <TableCell>{item.image_path}</TableCell>
                        <TableCell>
                            <p className={`${item.status.toLowerCase() === 'active' ? 'text-green-600' : 'text-red-600'} font-semibold`}>{item.status}</p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ServicePriceTable
