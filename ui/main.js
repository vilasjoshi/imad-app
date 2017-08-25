//counter code
var button =document.getElementById('counter');

button.onclick = function() {
    //Make request to counter endpoint
    var request =new XMLHttpRequest();
    
    //Caputer the response and store it in var
    request.onreadychange=function(){
      if (request.readtState===XMLHttpRequest.DONE){
          //Take some Action 
          if(request.status===200){
           var counter  =   requqest.responseText;
           var span     =   document.getElementById('count');
           sapn.innerHTML = counter.toString();
          }
      }
      
      
    };
    //Make the Request
    request.open('GET','http://vilasjoshi222.imad.hasura-app.io/counter',true);
    
    
};