var age = Number(prompt("enter your age : ")) ;
while(age != null){
    var age = Number(prompt("enter your age : ")) ;
    if(isNaN(age)){
        alert(age + "is not a number");
    }
        if(age<=0){
            var age = prompt("Negative value .. please enter your age in a possitive value ");
        }
        if(age>0 && age <11){
            alert ('child is between 1-10');
            
        }
        else if(age > 11 && age < 19){
            alert('teenager is between 11-18');
            
        }
        else if(age > 19 && age < 51){
            alert("Grow up is between 19-50");
        }
        else if(typeof age ==! 'number'){
            alert("not a number");
        }
        else {
            alert("Old is greater than 50");
        }

    } 





