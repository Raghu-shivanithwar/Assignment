const Header = ({ selectedForm, setSelectedForm }) => {
    return (
        <div className="header">
            <input
                type="checkbox"
                checked={selectedForm === 'item'}
                onChange={() => setSelectedForm('item')}
            /> Item
            <input
                type="checkbox"
                checked={selectedForm === 'supplier'}
                onChange={() => setSelectedForm('supplier')}
            /> Supplier
        </div>
    );
};
export default Header;
