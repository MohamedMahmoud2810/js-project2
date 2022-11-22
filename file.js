function isvowls (ch){
    return ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u";
}

function countvowls(str){
    var count = 0; 
    for(var i=0; i<str.length; i++){
        if(isvowls(str[i])){
            ++count;
            
        }
    }
    return count;
}

var str = prompt ("enter a string");
if(isNaN(str)){
    alert()
}
document.write (countvowls(str));
