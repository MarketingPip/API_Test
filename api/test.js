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
name: "name1"
},
{
url: "www.google.com2",
name: "name1"
},
{
url: "www.google.com3",
name: "name1"
}
]


let url = c

var blogPosts = ""

var SearchResults = false
function findMatchResults(JsonValue, url){
 input.forEach(object => {
  if(object[JsonValue].includes(url)) {
  blogPosts += object[JsonValue]
  SearchResults = true  
  } 
}) 
  
}
     
      https://marketingpip.github.io/API_Test/api/test?type=url&text=google 
       
 /// Define the search types here here
   var Route = getParameterByName("text");       
if (url == "name"){

  findMatchResults('name', Route)
 
    
   var Message = ` Blog names found containing:  ${c}  
         <br>
  
         ${blogPosts} `  
  
}
       
if (url == "url"){
  
  findMatchResults('url', Route)
    
   var Message = ` Blog URLs found containing:  ${c}  
         <br>
  
         ${blogPosts} `
}       
       
       
       if (url == ""){
        SearchResults = false 
         var Message = "No search query was provided"
       } else {
         var Message = "No blog posts found for " + c
       }
       
       
          
     if (url === null){
 SearchResults = false 
 var Message = "No search route provided"
       
     } 
       if (SearchResults === true) {
         
         document.body.innerHTML = Message
         
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
    
  
