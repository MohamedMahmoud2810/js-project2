function changTime(time){
    if(time >= 12){
        return (time - 12 + "pm");
    }
    else{
        return (time + " am");
    }
}

var time = prompt("enter the time : ");
alert(changTime(time) );
