
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
var c = url.searchParams.get("posts");
console.log(c);
     
      
     
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
function findMatchResults(JsonValue){
 input.forEach(object => {
  if(object.JsonValue.includes(url)) {
  blogPosts += object.url
  SearchResults = true  
  } 
}) 
  
}
       
       
 /// Define the rotues here      
       
if (url == "name"){
  
  findMatchResults('name')
}
       
if (url == "url"){
  
  findMatchResults('url')
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
         
         document.body.innerHTML = ` Blog posts found containing:  ${c}  
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
    
  

  
