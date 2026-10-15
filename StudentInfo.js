const dateofBirth= "05/06/2004"
const getStudentName= () => {
    return " Bhawana"
}
const getCampusName =()=>{
    return("UEL Campus")
} 
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth
exports.Studentgrade=(marks)=>{
    if (marks>50 && marks<70) return("B grade")
        else
    return("A grade")
}




