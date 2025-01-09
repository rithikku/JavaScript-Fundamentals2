// Literals ke through banega toh Singleton nahi banega, Agar constructor ke through banega toh Singleton banega 

// Object.create -- constructor Method

const mySymbol = Symbol("key1");

const jsUser = {
    names : "Rithik",
    "full name" : "Rithik Kumar",
    age : 20,
    [mySymbol] : "myKey1",
    location : "England",
    email : "rithik@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}
// console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // this is why we use Square notation
console.log(jsUser[mySymbol]);

jsUser.email = "roshan@gmail.com"; // overwrite the value of the object

// Object.freeze(jsUser); // you will freeze your object no one can change in your object

jsUser.email = "raj@gmail.com";
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User ${this.names}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());