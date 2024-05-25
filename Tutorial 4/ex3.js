var seatingChart = [
    ['AhWei', 'Bobby', 'Changli', 'David'],
    ['Ali', 'Hantu', 'Nicholas', 'Esther'],
    ['Dominic', 'Aileen', 'Kevin', 'Jack'],
    ['Mike', 'Nancy', 'Kaixin', 'Peter'],
    ['Maziz', 'Steve', 'Sam', 'Joe']
];

// Print the initial seating chart
console.log("Initial seating chart:");
console.log(seatingChart);

// Change a student's seat (for example, moving AhWei to the seat currently occupied by Muthu)
seatingChart[0][0] = 'Muthu';
seatingChart[1][1] = 'AhWei';

console.log("\nUpdated seating chart:");
console.log(seatingChart); //Print Updated Seat
