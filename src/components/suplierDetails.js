const SupplierDetailsForm = ({ supplierData, setSupplierData }) => {
    return (
        <div className="supplier-details">
            <input
                type="text"
                placeholder="Supplier Name"
                value={supplierData.name}
                onChange={(e) => setSupplierData({ ...supplierData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Company Name"
                value={supplierData.company}
                onChange={(e) => setSupplierData({ ...supplierData, company: e.target.value })}
            />
            <select
                value={supplierData.country}
                onChange={(e) => setSupplierData({ ...supplierData, country: e.target.value })}
            >
                {/* Options for country */}
            </select>
            <select
                value={supplierData.state}
                onChange={(e) => setSupplierData({ ...supplierData, state: e.target.value })}
            >
                {/* Options for state */}
            </select>
            <input
                type="text"
                placeholder="City"
                value={supplierData.city}
                onChange={(e) => setSupplierData({ ...supplierData, city: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email Address"
                value={supplierData.email}
                onChange={(e) => setSupplierData({ ...supplierData, email: e.target.value })}
            />
            <input
                type="tel"
                placeholder="Phone Number"
                value={supplierData.phone}
                onChange={(e) => setSupplierData({ ...supplierData, phone: e.target.value })}
            />
        </div>
    );
};

export default SupplierDetailsForm;
