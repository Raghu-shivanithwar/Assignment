import React, { useState } from 'react';
import Header from "../components/header.js"
import ItemDetailsForm from '../components/item.js';
import SupplierDetailsForm from '../components/suplierDetails';
import SubmittedDataTable from '../components/submitData';
import NavBar from '../components/nav';
import './index.css';
const InventoryPage = () => {
    const [selectedForm, setSelectedForm] = useState('item');
    const [itemData, setItemData] = useState({ name: '', quantity: '', price: '', date: '' });
    const [supplierData, setSupplierData] = useState({ name: '', company: '', country: '', state: '', city: '', email: '', phone: '' });
    const [submittedData, setSubmittedData] = useState([]);

    const handleSubmit = () => {
        if (selectedForm === 'item') {
            setSubmittedData([...submittedData, { ...itemData, supplier: false }]);
        } else {
            setSubmittedData([...submittedData, { ...supplierData, supplier: true }]);
        }
    };

    return (
        <div className="inventory-page">
            <NavBar /> 
            <Header selectedForm={selectedForm} setSelectedForm={setSelectedForm} />

            {selectedForm === 'item' ? (
                <ItemDetailsForm itemData={itemData} setItemData={setItemData} />
            ) : (
                <SupplierDetailsForm supplierData={supplierData} setSupplierData={setSupplierData} />
            )}

            <button onClick={handleSubmit}>Submit</button>

            <SubmittedDataTable submittedData={submittedData} />
        </div>
    );
};

export default InventoryPage;
