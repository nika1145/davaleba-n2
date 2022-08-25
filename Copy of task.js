//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
}
function gio(a){
     if(a.isItarable === true){
         return(a.sampleArray)
     }else{return("provided array isn't itarable")}
}console.log(gio(sampleObject))


//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/
function checkPythagoras(x,y,z){
    if(x * x + y * y === z * z){
        return("true")
    }else{return("false")}
}
console.log(checkPythagoras(3,4,5))

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/
const numbers = [2,14,25,75,11,6];
function minMax(arr2){
const smallest_number = Math.min(...numbers);
const largest_number = Math.max(...numbers);

console.log('Smallest Value:', smallest_number); 
console.log('Largest Value:', largest_number);  
}
console.log(minMax(numbers))




//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

// function checkDeg (deg) {

// }

// checkDeg(92)
function checkDeg(deg){
    if(deg > 0 && deg < 90){
        return("An angle between 0 and 90 degrees.")
    }
    else if (deg === 90){
        return("An 90 degree angle.")
    }
    else if(deg > 90 && deg < 180){
        return('An angle between 90 and 180 degrees.')
    }
    else if (deg === 180){
        return("A 180 degree angle.")
    }
}
console.log(checkDeg(180))

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
const objArr = [{name: "student1", grade : 91}, {name: "student2", grade : 71}, {name: "student3", grade : 45}]
 function checkStudentGrade(oba){
    if(oba[0].grade > 81 && oba[0].grade < 100){
        console.log("A")
    }else if (oba[1].grade >= 71 && oba[1].grade < 80 ){
        console.log('c')
    }
} 
 console.log(checkStudentGrade(objArr))
