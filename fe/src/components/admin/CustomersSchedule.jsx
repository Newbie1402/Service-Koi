import "../../styles/CustomersSchedule.css";

const CustomersSchedule = () => {
    const customers = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            city: 'New York',
            state: 'NY',
            description: 'Regular customer interested in weekly updates'
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '234-567-8901',
            city: 'Los Angeles',
            state: 'CA',
            description: 'Prefers email communication only'
        },
        {
            firstName: 'Alice',
            lastName: 'Brown',
            email: 'alice.brown@example.com',
            phone: '345-678-9012',
            city: 'Chicago',
            state: 'IL',
            description: 'Frequent buyer of seasonal items'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson',
            email: 'bob.johnson@example.com',
            phone: '456-789-0123',
            city: 'Houston',
            state: 'TX',
            description: 'Interested in promotions and discounts'
        },
        {
            firstName: 'Emily',
            lastName: 'Davis',
            email: 'emily.davis@example.com',
            phone: '567-890-1234',
            city: 'Phoenix',
            state: 'AZ',
            description: 'Attends monthly events and workshops'
        }
    ];

    return (
        <div>
            <h2>Customers Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.city}</td>
                            <td>{customer.state}</td>
                            <td>{customer.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomersSchedule;
