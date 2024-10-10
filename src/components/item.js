const ItemDetailsForm = ({ itemData, setItemData }) => {
    return (
        <div className="item-details">
            <input
                type="text"
                placeholder="Item Name"
                value={itemData.name}
                onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={itemData.quantity}
                onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}
            />
            <input
                type="number"
                placeholder="Unit Price"
                value={itemData.price}
                onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
            />
            <input
                type="date"
                placeholder="Date of Submission"
                value={itemData.date}
                onChange={(e) => setItemData({ ...itemData, date: e.target.value })}
            />
        </div>
    );
};

export default ItemDetailsForm;
