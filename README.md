# API_Test


<!---START OF CONTENT ---
<script>
// Define the content you want to show instead of your markdown README in Template
var Template = `		
			
			
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
			
<style>
html, body {
    height: 100%;
}
html {
    display: table;
    margin: auto;
	  overflow: hidden;
}
body {
    display: table-cell;
    vertical-align: middle;
}
/* make keyframes that tell the start state and the end state of our object */
 html {
  scroll-behavior: smooth;
}
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
 
.fade-in {
	opacity:0;  /* make things invisible upon start */
	-webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animation ease-in and repeat it only 1 time */
	-moz-animation:fadeIn ease-in 1;
	animation:fadeIn ease-in 1;
 
	-webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
	-moz-animation-fill-mode:forwards;
	animation-fill-mode:forwards;
 
	-webkit-animation-duration:1s;
	-moz-animation-duration:1s;
	animation-duration:1s;
}
 
.fade-in.one {
-webkit-animation-delay: 0.7s;
-moz-animation-delay: 0.7s;
animation-delay: 0.7s;
}
 
body {
    font-size: 14px;
    font-family: 'Work Sans', sans-serif;
    color: #666;    
}
h1 {
    color: #222;
}
.intro {
    font-size: 5em;
    font-weight: bold;
}
.blurb {
    font-size: 1em;
    text-align: center;
}
</style>

<h1 style="text-align:center;" class="fade-in one intro">It Works</h1>
<p class="fade-in two blurb">Welcome To API </p> `



document.body.innerHTML = Template </script>

