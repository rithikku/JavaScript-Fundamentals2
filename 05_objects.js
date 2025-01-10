const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.couseInstructor;

const {courseInstructor : instructor} = course; // here i can destructure courseInstructor to instructor, now i can access courseInstructor through instructor
console.log(instructor);


// Api 
// {
//     "coursename" : "js in hindi",
//     "price" : "999",
//     "courseInstructor" : "hitesh"
// }

// [
//     {},
//     {},
//     {}
// ]

