
// 15th Feb 2023
// Create an object including your name and any other information you like.
// Create a function that will return your information
// Return the information in th eobject using the "this." keyword 


const person={
    firstName:'Nancy',
    maidenName:'Amaka',
    lastName:'Gabriel',
    tribe:'Igbo',
    sex:'Female',
    religion:'Christain',
    country:'Nigeria',
    isMarried:'false',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.getFullName());


function returnInfo(){
    return person
};
returnInfo();
