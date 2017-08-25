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
//Submit nname
/*var nameInput   =   document.getElementById('name');
var name        =   nameInput.value;
var submit      =   document.getElementById('submit_btn');
submit.onclick  =   function () {
  //make request to server and send the name
  
  
  //Capture a list of names and render it as alist
  var names=['name1', 'name2','name3','name4'];
  var list ='';
  for(var i=0;i<names.lenght;i++){
      list+='<li>' + names[i] + '<li>';
  }
  var ul        = document.getElementById('namelist');
  ul.innerHTML= list;
};*/