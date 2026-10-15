function EmployeeInfo(name,salary)
{
    console.log("welcome " +name ) 
    console.log("Your monthly salary is "+salary );
}
const currentDateTime=new Date();
console. log("This is my first program");
console.log("Program run on : "+ currentDateTime.toLocaleString());
var EmpName ="John";
var EmpSalary = "50000";
EmployeeInfo(EmpName,EmpSalary);
const EmpSkills=(skills, Name, LabGrp)=>
    {
    console.log("Student Id " + Name )
    console.log("Expertin "+skills )
    console.log("Lab Group Name",LabGrp)
}
EmpSkills("java","3129236,Bhawana", "23")
const Student = require('./StudentInfo')
const Person = require('./Person')
console.log("Student Name:" +Student.getName())
console.log(Student.Location())
console.log(Student.dob)
//console.log(Student.Studentgrade())
console.log("grade is " +Student.Studentgrade(55))
person1= new Person("Jim", "USA", "myemail@gmail.com")
console.log("using Person Module ", person1.getPersonInfo())
console.log("Program ended")
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")