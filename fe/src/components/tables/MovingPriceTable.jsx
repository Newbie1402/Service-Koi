import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import { formatMoney } from '../../ultils/formatMoney'

function MovingPriceTable() {
    const TABLEDATA = [
        { id: 1, title: 'Under 1 kilometer', price: 7000 },
        { id: 2, title: 'From 2 to 3 kilometers', price: 10000 },
        { id: 3, title: 'From 3 to 4 kilometers', price: 20000 },
        { id: 4, title: 'Over 4 kilometers', price: 40000 },
    ]
    return (
        <Table aria-label="Example static collection table" className='max-w-[1000px] mx-auto'>
            <TableHeader>
                <TableColumn>CODE</TableColumn>
                <TableColumn>Title</TableColumn>
                <TableColumn>Price</TableColumn>
            </TableHeader>
            <TableBody>
                {TABLEDATA.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>
                            <p className="font-semibold">{item.title}</p>
                        </TableCell>
                        <TableCell>
                            <p className="font-semibold">{formatMoney(item.price)}</p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default MovingPriceTable
