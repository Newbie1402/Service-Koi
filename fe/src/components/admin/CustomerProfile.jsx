import '../../styles/CustomersProfile.css';

const CustomerProfile = () => {
    const customers = [
        {
            fullName: 'John Doe',
            address: '123 Main St, New York, NY',
            email: 'john.doe@example.com',
            phone: '123-456-7890'
        },
        {
            fullName: 'Jane Smith',
            address: '456 Elm St, Los Angeles, CA',
            email: 'jane.smith@example.com',
            phone: '234-567-8901'
        },
        {
            fullName: 'Alice Brown',
            address: '789 Maple Ave, Chicago, IL',
            email: 'alice.brown@example.com',
            phone: '345-678-9012'
        },
        {
            fullName: 'Bob Johnson',
            address: '101 Oak St, Houston, TX',
            email: 'bob.johnson@example.com',
            phone: '456-789-0123'
        },
        {
            fullName: 'Emily Davis',
            address: '202 Pine Rd, Phoenix, AZ',
            email: 'emily.davis@example.com',
            phone: '567-890-1234'
        }
    ];

    return (
        <div>
            <h2>Customer Profile</h2>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.fullName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerProfile;
