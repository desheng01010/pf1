var inventory = [
    ['Product A', 10.99, 20],
    ['Product B', 5.99, 15],
    ['Product C', 7.49, 30]
];

function updateInventory(productName, newQuantity) {
    var index = -1;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === productName) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        inventory[index][2] = newQuantity;
        console.log("Inventory updated for", productName);
    } else {
        console.log("Product not found in inventory");
    }
}

updateInventory('Product A', 25);

console.log("\nUpdated inventory:");
console.log(inventory);
