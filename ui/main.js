//counter code
var button =document.getElementById('counter');
var counter=0;
button.onclick = function() {
    //Make request to counter endpoint
    
    //Caputer the response and store it in var
    
    //Render the variable in the corect span
    counter = counter+1;
    var span= document.getElemetById('count');
    span.innerHTML= counter.toString();
    
};