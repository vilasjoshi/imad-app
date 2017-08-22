var express = require('express'); 
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//javascript object for all pages 
var articles ={
 'article-one':{
 
    title   :'Article One | VilasJoshi',
    heading :'Article One',
    date    : 'Aug 20,2017',
    content :  ` 
                <p>
                    This is article one And first article one my site
                </p>
                <p>
                    This is the content of my article.
                </p>
                
                <p>
                    This is the content of my article.
                </p>`
},
 'article-two':{
      title   :'Article Two | VilasJoshi',
    heading :'Article Two',
    date    : 'Aug 21,2017',
    content :  ` 
                <p>
                    This is article two And second article one my site
                </p>
                <p>
                    This is the content of my article.
                </p>
                
                <p>
                    This is the content of my article.
                </p>`
     
     
 },
 'article-three':{ 
    title   :'Article three | VilasJoshi',
    heading :'Article Three',
    date    : 'Aug 22,2017',
    content :  ` 
                <p>
                    This is article Three And Three article  my site
                </p>
                <p>
                    This is the content of my article.
                </p>
                
                <p>
                    This is the content of my article.
                </p>`
     
 }
};
function createTemplate(data){
    var title   = data.title;
    var date    = data.date;
    var heading  = data.heading;
    var content = data.content;
    
    var htmlTemplate=  `
        <html>
        <head >
            <title>${title}
            </title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link href="/ui/style.css" rel="stylesheet" />
        </head>    
        <body>
         <div class="container"> 
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                ${heading}
                
                <div>
                    ${date}
                    </div>
                <div>
                    
                    ${content}
            </div>
         </div>   
        </body>
    </html>`
            ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//Brown Bear:
app.get('/ui/brownbear', function (req, res) {
  res.send(path.join(__dirname, 'ui', 'brownBear.html'));
});
app.get('/:articleName', function (req, res) {
    //articlename =article-One
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
