//sample data in array 

const students = [
  { id: 1, name: "Mubin", department: "CSE", cgpa: 3.85, city: "Dhaka" },
  { id: 2, name: "Rahim", department: "CSE", cgpa: 3.65, city: "Chattogram" },
  { id: 3, name: "Karim", department: "EEE", cgpa: 3.72, city: "Khulna" },
  { id: 4, name: "Nusrat", department: "BBA", cgpa: 3.91, city: "Sylhet" },
  { id: 5, name: "Sadia", department: "CSE", cgpa: 3.78, city: "Rajshahi" },
  { id: 6, name: "Tanvir", department: "EEE", cgpa: 3.55, city: "Barishal" },
  { id: 7, name: "Farhan", department: "CSE", cgpa: 3.99, city: "Dhaka" },
  { id: 8, name: "Ayesha", department: "BBA", cgpa: 3.67, city: "Cumilla" },
  { id: 9, name: "Rifat", department: "CSE", cgpa: 3.44, city: "Mymensingh" },
  { id: 10, name: "Jannat", department: "EEE", cgpa: 3.81, city: "Dhaka" },
  { id: 11, name: "Hasan", department: "CSE", cgpa: 3.59, city: "Rangpur" },
  { id: 12, name: "Tania", department: "BBA", cgpa: 3.88, city: "Sylhet" },
  { id: 13, name: "Sakib", department: "CSE", cgpa: 3.76, city: "Dhaka" },
  { id: 14, name: "Mariya", department: "EEE", cgpa: 3.63, city: "Khulna" },
  { id: 15, name: "Nayeem", department: "CSE", cgpa: 3.95, city: "Dhaka" },
  { id: 16, name: "Tasnim", department: "BBA", cgpa: 3.71, city: "Rajshahi" },
  { id: 17, name: "Shuvo", department: "CSE", cgpa: 3.58, city: "Cumilla" },
  { id: 18, name: "Mehedi", department: "EEE", cgpa: 3.69, city: "Barishal" },
  { id: 19, name: "Nabila", department: "CSE", cgpa: 3.93, city: "Dhaka" },
  { id: 20, name: "Arif", department: "CSE", cgpa: 3.47, city: "Mymensingh" },
  { id: 21, name: "Fahim", department: "EEE", cgpa: 3.74, city: "Dhaka" },
  { id: 22, name: "Anika", department: "BBA", cgpa: 3.84, city: "Sylhet" },
  { id: 23, name: "Rakib", department: "CSE", cgpa: 3.61, city: "Khulna" },
  { id: 24, name: "Priya", department: "CSE", cgpa: 3.87, city: "Dhaka" },
  { id: 25, name: "Imran", department: "EEE", cgpa: 3.53, city: "Rajshahi" },
  { id: 26, name: "Mim", department: "BBA", cgpa: 3.96, city: "Dhaka" },
  { id: 27, name: "Shakil", department: "CSE", cgpa: 3.42, city: "Rangpur" },
  { id: 28, name: "Lamia", department: "CSE", cgpa: 3.79, city: "Dhaka" },
  { id: 29, name: "Asif", department: "EEE", cgpa: 3.68, city: "Cumilla" },
  { id: 30, name: "Raisa", department: "CSE", cgpa: 3.98, city: "Dhaka" }
];


students.forEach((e) => {
console.log(e.id)
})

for (let i = 0; i < students.length; i++) {
    console.log(students[i]?.cgpa )
}

for (let i in students) {
    console.log(students[i]?.name)
}

students.push({ id: 31, name: "New Student", department: "CSE", cgpa: 3.50, city: "Dhaka" }); // in the back of the array
console.log(students[students.length - 1]); // print the last student

students.pop(); // removes the last e;lement 
console.log(students[students.length - 1]); // print the last student

students.unshift({ id: 31, name: "New Student", department: "CSE", cgpa: 3.50, city: "Dhaka" }); /// adding in the fromt side of the array
console.log(students[0]); // print the last student

students.shift();
console.log(students[0]);


// so basically the data is the parameter i am sending throught the variable by calling the function

const greet = (data: object) => {console.log(`hello ${data.name}`)}

greet(students[4])



const sum = (a:number , b:number) => a+b;
console.log(sum(1,2))

students.forEach((e , i) =>{
    e.address = {road:20 , house:10 }
    console.log(`${i }- ${e.name}`);

});

console.log(students[1].address.road);