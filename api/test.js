// used to get multiple query / param values
let getParameterByName = function() {
    let queries = location.search.substring(1).split('&'),
        processed = {};
    for (let query of queries) {
        let [name, value] = query.split('=');
        processed[decodeURIComponent(name)] = value? decodeURIComponent(value) : '';
    }

    return function(name) {
        if (typeof processed[name] !== 'undefined')
            return processed[name];
        else
            return null; 
    };
}();

// Redirect to routes to a page	

// if correct route



//var inputString = '22-34';
  
//var API_Route  = "/api/get_value="  
//var pattern = "(?s).*";
//API_Route = API_Route + pattern     
  
//if( pattern.test(window.location.host) ){
  //document.body.innerHTML = "Works"
//}  

if (window.location.href.indexOf("/api/test?") != -1) {

   window.onload=function(){
     var url_string = window.location.href
      var url = new URL(url_string);
var c = url.searchParams.get("type");

     
      
     
     if (c === null){
document.body.innerHTML = "No search route provided"
       
     } else {
       
         const input = [
{
url: "www.google.com",
name: "Frank"
},
{
url: "www.google.com2",
name: "Mike"
},
{
url: "www.google.com3",
name: "John"
}
]


let url = c

var blogPosts = ""

var SearchResults = false
function findMatchResults(JsonValue, url){
 input.forEach(object => {
  if(object[JsonValue].includes(url)) {
  blogPosts += object[JsonValue] + "<br>"
  SearchResults = true  
  } 
}) 
  
}
     
 
       
 /// Define the search types here here
   var Route = getParameterByName("text");       
if (url == "name"){

      var SearchTypeMessage =  "Blog Names found containing:"
  findMatchResults('name', Route)
    
       var No = "names"
  
}
       
if (url == "url"){
  
  findMatchResults('url', Route)
    var SearchTypeMessage =  "Blog URLs found containing:"
    
    var No = "URLS"
  
}       
       
       
       if (url == ""){
        SearchResults = false 
         var Message = "No search query was provided"
       } else {
         var Message =  `No blog ${No} found for ${url} `
       }
       
       
          
     if (url === null){
 SearchResults = false 
 var Message = "No search route provided"
       
     } 
       if (SearchResults === true) {
    
         document.body.innerHTML = ` ${SearchTypeMessage} ${url} 
         <br>
  
         ${blogPosts} `
         
       } else {
          document.body.innerHTML = Message
       }
         
       
       
     }
     
    }
} else {
  window.onload=function(){
      document.body.innerHTML = "Not a Valid API access route"
    }
}
    
  
