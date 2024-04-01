'use strict';

var returnId=(id)=>{
    return document.getElementById(id);
}

// var temp={
//     name:"Pallavi"
// }
// console.log(temp);

var parsedString=JSON.parse(localStorage.getItem('data'));
console.log(parsedString);

// console.log(typeof localStorage.getItem('data'));

var myForm=returnId('myForm');
var fName=returnId('firstName');
var lName=returnId('lastName');
var sts = returnId('status');
var data=returnId('data');

data.textContent=`The First Name is ${parsedString.firstName}
The Last Name is ${parsedString.lastName}`
myForm.addEventListener('submit', (event) => {
     event.preventDefault();


    if(fName.value == ''){
        fName.style.border ='1px solid red';
        return;
    }
    else{
        fName.style.border ='none';
    }

    if(lName.value == ''){
        lName.style.border ='1px solid red';
        return;
    }
    else{
        lName.style.border ='none'
    }
    //valid form

    if(fName.value !='' && lName.value !=''){

        var obj={};
        obj['firstName']=fName.value;
        obj['lastName']=lName.value;
        console.log(obj);
        localStorage.setItem('data',JSON.stringify(obj));
     sts.textContent ="Form is getting Submitted.please wait!!"
     setTimeout(()=>{
        sts.textContent ="Form Successfully Submited!!"
     },3000)
    }
     
    
   
});