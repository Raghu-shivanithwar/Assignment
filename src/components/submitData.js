const SubmittedDataTable = ({ submittedData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Supplier</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {submittedData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.supplier}</td>
                        <td>{data.itemName}</td>
                        <td>{data.quantity}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SubmittedDataTable;