// const tinderUser = new Object(); // --Singleton object
const tinderUser = {}; // --Non Singleton object

tinderUser.id = "124abc";
tinderUser.name = "Rithik";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// object inside object 
const regularUser = {
    email : "rithik@gmail.com",
    fullName : {
        userfullname : {
            firstname : "rithik",
            lastname : "kumar"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2); // -- Combined two object
const obj3 = {...obj1, ...obj2}; // -- Best 
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "ri@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    }
]
console.log(users[1].email);


// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // -- it return array datatype so...you can loop through and do many of the operation 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name')); // -- isme ye hai ki nahi Return True and False

