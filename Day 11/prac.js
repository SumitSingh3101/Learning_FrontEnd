let student = {
    name: "sumit",
    marks: "not taht gud"
    age: "doesn't matter"
    sex: "Never"
}

console.log(post.name)
console.log(post["sex"])


const obj = {
    1:"a",
    2:"b",
    3:"c",
    true:"d"
    null:"e"
}

console.log(obj[1])//here 1 is just a string, it doesn't take index, it just convert the given value in string and then pass//
console.log(obj.1)//here 1 is not getting converted to string//


// How to Add or Update the values

student.city = "Kota"

student.sex = "Male"
delete student.sex

console.log(student)

//