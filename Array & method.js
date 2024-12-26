// # Assignments on Array Methods

// *Basic Level*

//1 Transform Elements with `.map()`

// You have an array of names. Convert all names to uppercase

const names = ["alice", "bob", "charlie"];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames); 



2//2. Filter Items with `.filter()
// You have an array of numbers. Filter out all numbers less than 10

// const numbers = [5,12,8,20,3];
// const filternumbers = numbers.filter(number => number >=10);
// console.log(filternumbers);


// 3. Calculate Total with `.reduce()
// Find the sum of all elements in an array

const expenses = [100,200,50,300];
const Total = expenses.reduce((sum, expense) => sum + expense,0);
console.log(Total) 

// 4. Find an Item with `.find()`
// You have a list of tasks. Find the first task that is marked as `completed`.

// const tasks = [
//     {name:"Task 1",completed:false},
//     {name:"Task 2",completed:true},
//     {name:"Task 3",completed:false},

// ];


const completedTask = tasks.find(task => task.completed);
console.log(completedTask);

// 5. Sort Items with `.sort()`
// Sort an array of numbers in ascending order.

const scores = [45,10,85,30];
const sortScores = scores.sort((a, b) => a - b);
console.log(sortScores);


// Medium Level

// 1. Chain Methods
// Filter numbers greater than 10, then double them using `.map()`.


// const numbers = [5, 12, 8, 20, 3];

// const result = numbers 
//   .filter(number => number > 10) // Step 1: Filter numbers greater than 10
//   .map(number => number * 2);   // Step 2: Double the filtered numbers

// console.log(result);



// 2. Find Total Stock
// Calculate the total stock from an array of products using `.reduce()`

// const products = [
//     { name: "Laptop", stock: 10 },
// { name: "Phone", stock: 5 },
// { name: "Tablet", stock: 8 }

// ];


// const total = products.reduce((total, product) => total + product, 0);
// console.log(total)


// 3. Validate Data with `.every()`
// Check if all users in an array are verified.

const users = [

    { name: "Alice", verified: true },
{ name: "Bob", verified: true },
{ name: "Charlie", verified: false }

];
const verified =  users.every(user => user.verified);
console.log(users);


// 4. Identify Urgent Tasks with `.some()`
// Check if there are any urgent tasks in the list.


const tasks = [
    { name: "Task 1", urgent: false },
    { name: "Task 2", urgent: true },
    { name: "Task 3", urgent: false }
  ];

const hasUrgentTask = tasks.some(task => task.urgent);
console.log(hasUrgentTask); 


  
//Custom Sorting
//   5 Sort an array of objects by age in descending order.

  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
  ];
  
  const sortedPeople = people.sort((a, b) => b.age - a.age);
  
  console.log(sortedPeople);


//   Advanced Level


// 1. Group Items by Category

// Group products by their category using `.reduce()`.

// const products = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Shirt", category: "Clothing" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Pants", category: "Clothing" }
//     ];

// const ortedPeople = people.sort((a, b) => b.age - a.age);

// console.log(sortedPeople);


// 2. Chain Multiple Methods
// Filter products in stock, then map their names, and sort alphabetically.

// const products = [
//     { name: "Laptop", stock: 10 },
//     { name: "Phone", stock: 0 },
//     { name: "Tablet", stock: 5 }
//   ];
  
//   const result = products
//     .filter(product => product.stock > 0)     // Step 1: Filter products in stock
//     .map(product => product.name)            // Step 2: Map their names
//     .sort();                                // Step 3: Sort alphabetically
  
//   console.log(result); 
  
//   *3. Advanced Search with `.find()` and `.filter()`
// Find the first product in a specific category that is in stock.

const products = [
    { name: "Laptop", category: "Electronics", stock: 0 },
    { name: "Shirt", category: "Clothing", stock: 5 },
    { name: "Phone", category: "Electronics", stock: 10 }
];

const category = "Electronics";
const firstInStock = products.find(product => product.category === category && product.stock > 0);
console.log(firstInStock);


// Nested Data Transformation
// Flatten and extract unique tags from a list of posts.

const posts = [
    { id: 1, tags: ["javascript", "web"] },
    { id: 2, tags: ["javascript", "react"] },
    { id: 3, tags: ["web", "css"] }
    ];

const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];

console.log(uniqueTags);