let containerElement = document.getElementById('container');


const displayInventory = async () =>
{
    let data = await fetch('http://localhost:5000/display_items');
    data.json().then((parsedData) =>
    {
        parsedData.forEach((item) =>
        {
            let pTag = document.createElement('p');
            pTag.textContent = `Name: ${item.name}, Price: ${item.price}, Inventory: ${item.inventory}, Next Delivery: ${item.nextDelivery}, deliveryAmt: ${item.deliveryAmt}`;
            containerElement.appendChild(pTag);
            console.log(item);
        })
    })
}

displayInventory();