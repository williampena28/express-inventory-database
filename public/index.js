let displayItemsButton = document.getElementById("navContainer");

displayItemsButton.addEventListener('mouseover', () =>
{
    displayItemsButton.style.color = "#917d5b";
})
displayItemsButton.addEventListener('mouseout', () =>
{
    displayItemsButton.style.color = "black";
})
displayItemsButton.addEventListener('click', () =>
{
    window.location.href = '/display_items_page'
})

//submit button functionality
let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () =>
{
    
    let price = document.getElementById('price-item-input').value;
    let inventory = document.getElementById('inventory-item-input').value;
    let nextDelivery = document.getElementById('next-delivery-input').value;
    let deliveryAmt = document.getElementById('delivery-amt-input').value;
    let name = document.getElementById('name-item-input').value;

    const item = 
    {
        price,
        inventory,
        nextDelivery,
        deliveryAmt,
        name
    }

    console.log(item);

    let response = await fetch('http://localhost:5000/create_item', 
    {
        method: "POST",
        headers:
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    });

    let uploadStatus = document.createElement('p');
    let bodyElement = document.querySelector('body');
    console.log(response.status);
    if(response.status === 200)
    {
        console.log('Upload complete!!!');
        uploadStatus.textContent = 'Item has been uploaded!';
        uploadStatus.style.color = 'green';
    } else
    {
        console.log('Upload failed');
        uploadStatus.textContent = 'Error. Could not upload!';
        uploadStatus.style.color = 'red';
    }
    bodyElement.appendChild(uploadStatus);

})