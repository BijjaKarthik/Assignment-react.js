// JavaScript Destructuring Assignment Questions


// Basic Level Questions


// const person = {name:'jhon', age:'30'};

// console.log(person)

// 2//
// let a = 10, b=20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

// 3//

// // const user = {
// //     name:'alice',
// //     address: {
// //         city:'new york',
// //         country:'usa'

// //     }
// // };

// console.log(user);

// 4//
//  const numbers= [10,20,30,40];
//  console.log(numbers)


//  5//
//  const person1 = {name:'jhon',age:'25'};
 

//  console.log(person1)

// //  Medium Level Questions
 
// 1//

// // const user = {
// //     details: {
// //     name: 'Alice',
// //     age: 25,
// //     address: {
// //     city: 'New York',
// //     country: 'USA'
// //     }
// // }
// //  };

// // //  const { 
// // //     details: { 
// // //       name, 
// // //       age, 
// // //       address: { city } 
// // //     } 
// // //   } = user;

// //   console.log(name);
// //   console.log(age);

//   2//

//   const users = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 }
//   ];
  
//   const names = users.map(({ name }) => name);
  
//   console.log(names); 
  

  3//
//   const person = { name: 'John', age: 30, city: 'New York', country: 'USA' };

// const { name, age, ...details } = person;

// console.log(name);    // Output: 'John'
// console.log(age);    
// console.log(details);


4//
// const prop = 'user';
// const data = { user: { name: 'Alice', age: 25 } };

// Access the dynamic property using the variable and destructure
// const { name, age } = data[prop];

// console.log(name); 
// console.log(age);  

// 5//

// const person = { name: 'Alice', age: 30 };

// // Destructure with aliases
// const { name: fullName, age: yearsOld } = person;

// console.log(fullName); 
// console.log(yearsOld); 


// Advanced Level Questions

1//

// const user = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
  
//   // Destructuring with aliases
//   const { name: firstName, age, address: { city: location } } = user;
  
//   console.log(firstName); 
//   console.log(age);       
//   console.log(location);  
  

  2//

  // function printEmployee({ name = 'Unknown', position = 'Unknown', salary = 'Unknown', ...details }) {
  //   console.log(`Name: ${name}`);
  //   console.log(`Position: ${position}`);
  //   console.log(`Salary: ${salary}`);
  //   console.log('Additional Details:', details);
  // }
  
  // // Example usage:
  // const employee1 = { name: 'John', position: 'Manager', salary: '$70,000', department: 'Sales' };
  
  // printEmployee(employee1);
  
  // 33//

  // const data = {
  //   details: {
  //     name: 'Alice',
  //     age: 25,
  //     address: {
  //       city: 'Los Angeles',
  //       country: 'USA'
  //     }
  //   }
  // };
  
  // // Destructuring with nested properties
  // const { 
  //   details: { 
  //     name, 
  //     age, 
  //     address: { city } 
  //   } 
  // } = data;
  
  // console.log(name);   
  // console.log(age);    
  // console.log(city);   
  


  // java script destructing advanced 
  
  //Question 1: Extract Data from Nested Arrays

//   const numbers = [1, [2, 3, [4, 5]]];

// function extractNumbers([first, [second, , nested]]) {
//     console.log(`First: ${first}, Second: ${second}, Nested: ${nested}`);
// }

// extractNumbers(numbers);

//Question 2: Pass Destructured Parameters

// const developer = {name:'Eve', skills:['HTML', 'CSS', 'JavaScript']};

// function listSkills({name, skills}) {

//   console.log(`${name}'s skills:`);
//   skills.forEach(skill => console.log(skill));

// }

// listSkills(developer);

// //Question 3: Extract Multiple Levels of Data


// // const user = {
// //   id: 1,
// //   personalinfo:{
// //     name:'frank',
// //     email:'frank@example.com',
// //     address:{city:'Paris',country:'France'},
// //   },
// // };

// // function getUserinfo({ personalinfo: {name, email,address: { city}}}) {
// //   console.log(`name:${name}, email:${email}, city:${city}`);

// // }

// // getUserinfo(user);


// // Question 4: Rename and Use Defaults

// // const user = { name: 'Grace'};
// //  function displayUserinfo({name: username, age=54}){

// //   console.log(`user:${username}, age:${age}`);

// //  }

// //  displayUserinfo(user)

//  5// Question 5: Extract and Reconstruct


// //  const user = { name: 'Hank', email: 'hank@example.com', age: 40 };

// // function createUserObject({ name, email }) {
// //     return { name, email };
// // }

// // console.log(createUserObject(user));


// 6// Question 6: Swap Variables Using Destructuring

// let x = 5, y = 10;

// function swapVariables() {
//     [x, y] = [y, x];
// }

// swapVariables();
// console.log(`x: ${x}, y: ${y}`);



// 7//Question 7: Combine Rest with Default Values

// // const person = { name: 'Ivy', country: 'USA', city: 'Seattle' };

// // function displayPerson({ name, age = 30, ...details }) {
// //     console.log(`Name: ${name}, Age: ${age}, Details:`, details);
// // }

// // displayPerson(person);


// 8// Question 8: Extract and Map Object Keys

// const person = { firstName: 'Jack', lastName: 'Smith', age: 28 };

// function logProperties(obj) {
//     Object.keys(obj).forEach(key => console.log(`${key}: ${obj[key]}`));
// }

// logProperties(person);



// 9// Question 9: Destructure Function Return Values

// function getData() {
//   return { id: 123, name: 'Kate', role: 'Developer' };
// }

// const { id, name, role } = getData();

// console.log(`ID: ${id}, Name: ${name}, Role: ${role}`);

// 10// Question 10: Use Array Destructuring for Multiple Return Values

// function getScores() {
//   return [85, 90, 95];
// }

// const [math, science, english] = getScores();

// console.log(`Math: ${math}, Science: ${science}, English: ${english}`);

// 11//Question 11: Destructure in Loops

// const books = [
//   { title: 'Book A', author: 'Author A' },
//   { title: 'Book B', author: 'Author B' },
// ];

// function logBooks() {
//   books.forEach(({ title, author }) => {
//       console.log(`Title: ${title}, Author: ${author}`);
//   });
// }

// logBooks();


// 12// Question 12: Dynamic Nested Destructuring

// // const data = { user: { id: 1, name: 'Liam' }, meta: { role: 'Admin' } };

// // function dynamicExtract(obj, key) {
// //     const { [key]: value } = obj.meta;
// //     console.log(`Value: ${value}`);
// // }

// // dynamicExtract(data, 'role');





// //JavaScript Destructuring Questions

// //  1. Extract User Details


// // function displayuser({name, email}) {
// //   console.log(`name:${name}, email: ${email}`);
// // }

// // const user = {name:'Alice' , email:'alice@example.com'};

// // displayuser(user)


// // 2 Write a function that extracts `name` and `price` from a product object and logs them, with a default value for `price`

// function displayproduct({name, price = 20300}) {
//   console.log(`name: ${name} , price:${price}`);
// }

// const product = { name: 'Laptop' };
// displayproduct(product);


// 3// Write a function that extracts `status` and `data` from an API response and logs them

// function handleResponse({ status, data }) {
//   console.log(`Status: ${status}, Data:`, data);
// }

// const apiResponse = { status: 200, data: { id: 101, title: 'Learn JavaScript' } };
// handleResponse(apiResponse);


// 4// Write a function that extracts `theme` and `notifications` from a settings object and logs them, with a default value for `notifications`

// // function updateSettings({ theme, notifications = true }) {
// //   console.log(`Theme: ${theme}, Notifications: ${notifications}`);
// // }

// // const settings = { theme: 'dark' };
// // updateSettings(settings);


// 5// Write a function that extracts `query` and `page` from a search parameter object and logs them

// function filterSearch({ query, page }) {
//   console.log(`Query: ${query}, Page: ${page}`);
// }

// // Test case
// const searchParams = { query: 'JavaScript', page: 1 };
// filterSearch(searchParams);

// 6// Write a function that extracts `id` and `completed` from a task object and logs them.

// function logTaskDetails({id, completed}) {
//   console.log(`id: ${id}, completed: ${completed}`)
// }


// const task = { id: 1, title: 'Do homework', completed: false };
// logTaskDetails(task);

// 7// Write a function that extracts `name` and `city` from a nested profile object and logs them.


// function showProfile(profile) {
//   const { name, location: { city } } = profile; // Destructure `name` and `city` from the nested object
//   console.log(`${name} lives in ${city}`);
// }

// // Test case
// const profile = { name: 'Bob', location: { city: 'Berlin', country: 'Germany' } };
// showProfile(profile);


// 8// Write a function that logs the `name` and `email` of each user in an array of user objects


// function logUsers(users) {
//   users.forEach(({ name, email }) => {
//     console.log(`Name: ${name}, Email: ${email}`);
//   });
// }


// const users = [
//   { name: 'Alice', email: 'alice@example.com' },
//   { name: 'Bob', email: 'bob@example.com' },
// ];
// logUsers(users);

// 9// Write a function that extracts `name` and combines the remaining properties of a user object into a separate object

// // function extractUserDetails(user) {
// //   const { name, ...details } = user; // Use destructuring with the rest operator
// //   console.log(`Name: ${name}, Details:`, details);
// // }

// // const user = { name: 'Charlie', age: 30, country: 'USA' };
// // extractUserDetails(user);


// 10//Write a function that dynamically extracts a value from an object using a provided key.

// // function getDynamicValue(obj, key) {
// //   return obj[key];
// // }


// // const user = { name: 'Dave', age: 35, email: 'dave@example.com' };
// // console.log(getDynamicValue(user, 'email'));

// 11// Write a function that extracts `host`, `port`, and a default `user` from a nested configuration object.

// function displayConfig(config) {
//   const { database: { host, port, user = 'admin' } } = config;
//   console.log(`Host: ${host}, Port: ${port}, User: ${user}`);
// }


// const config = { database: { host: 'localhost', port: 5432 } };
// displayConfig(config);


// 12// 12. Swap Variables Using Destructuring
// //Write a destructuring statement to swap the values of two variables.

// let a = 1, b = 2;
// [a, b] = [b, a];
// console.log(`a: ${a}, b: ${b}`);

// 13// 13. Handle Missing Keys Gracefully
// //Write a function that extracts `id` and `name` from an object, providing a default value for `name`.

// // function processData(data) {
// //   const { id, name = 'Unknown' } = data;
// //   console.log(`ID: ${id}, Name: ${name}`);
// // }

// // const data = { id: 42 };
// // processData(data);


// // 14. Merge Objects with Rest and Destructuring
// // Write a function that combines two objects using destructuring and rest syntax.


// function mergeUsers(mergedUser) {
//   console.log(mergedUser);
// }

// // Test case
// const user1 = { name: 'Eve', age: 28 };
// const user2 = { country: 'France' };
// mergeUsers({ ...user1, ...user2 });


// // 15. Extract Coordinates from Object
// // Write a function that extracts `x` and `y` coordinates from a point object and logs them.

// function extractCoordinates(point) {
//   const { x, y } = point;
//   console.log(`X: ${x}, Y: ${y}`);
// }


// const point = { x: 10, y: 20, z: 30 };
// extractCoordinates(point);


// //16 16. Destructure Array Elements
// //Write a function that extracts the first two elements from an array and logs them.

// function logFirstTwo(numbers) {
//   const [first, second] = numbers;
//   console.log(`First: ${first}, Second: ${second}`);
// }

// const numbers = [100, 200, 300];
// logFirstTwo(numbers);

// // 17. Extract Values with Aliases
// // Write a function that destructures `id` and `name` from an object and logs them with aliases.


// function logUser({ userId: id, userName: name }) {
//   console.log(`ID: ${id}, Name: ${name}`);
// }

// // Test case
// const user = { userId: 7, userName: 'John' };
// logUser(user);

// // 18. Flatten Nested Objects
// // Write a function that extracts values from a deeply nested object and logs them in a flattened manner.

// // function flattenObject(data) {
// //   const { user: { id, profile: { name, age } } } = data;
// //   console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
// // }


// // const data = { user: { id: 1, profile: { name: 'Anna', age: 25 } } };
// // flattenObject(data);


// //19. Destructure Function Parameters with Defaults
// // Write a function that extracts `name` and `role` with a default value from its parameters.
  

// function logRole({ name, role = 'user' }) {
//   console.log(`Name: ${name}, Role: ${role}`);
// }


// logRole({ name: 'Ella' });


// // 20. Destructure Arrays with Rest
// //Write a function that extracts the first element of an array and logs the rest as a separate array.

// function extractRest(items) {
//   const [first, ...rest] = items;
//   console.log(`First: ${first}, Rest:`, rest);
// }

// const items = [1, 2, 3, 4];
// extractRest(items);

// // 21. Dynamic Nested Destructuring
// //Write a function that extracts a nested property dynamically using a key


// function getNestedValue(obj, keyPath) {
//   return keyPath.split('.').reduce((acc, key) => acc && acc[key], obj);
// }

// const obj = { details: { address: { city: 'Paris' } } };
// console.log(getNestedValue(obj, 'details.address.city'));

// // 22. Validate and Destructure
// //Write a function that validates the presence of specific properties before destructuring an object.

// function validateAndLog(settings) {
//   if (!settings.notifications) {
//     console.error('Error: Missing required property "notifications"');
//     return;
//   }
//   const { theme, notifications } = settings;
//   console.log(`Theme: ${theme}, Notifications: ${notifications}`);
// }


// const settings = { theme: 'light' };
// validateAndLog(settings);

// //23. Partial Destructuring
// //Write a function that extracts only specific keys from a larger object and ignores the rest
// function extractImportant(bigObject) {
//   const { id, name } = bigObject;
//   console.log(`ID: ${id}, Name: ${name}`);
// }

// // Test case
// const bigObject = { id: 1, name: 'Test', extra: 'Ignore me' };
// extractImportant(bigObject);


// // 24. Multi-Level Destructuring in Function Arguments
// // Write a function that extracts values from multiple levels of nesting within the function arguments.

// function displayUsername({ user: { profile: { username } } }) {
//   console.log(`Username: ${username}`);
// }


// const data = { user: { profile: { username: 'Max' } } };
// displayUsername(data);