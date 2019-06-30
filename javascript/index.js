function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("box1").style.top = "400px";
    document.getElementById("box1").style.border = "1px solid #fff";
    document.getElementById("box1").style.transform = "scale(1)";
    document.getElementById("row").style.height = "800px";

    // document.getElementById("box1").style.display = "block";

 }

 function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("box1").style.transform = "scale(1)";
    document.getElementById("box1").style.transition = "all 0.7s ease";
    document.getElementById("box1").style.border = "none";
 }
// function add video
 function addVideos(selector, videoIds) {
   const list = document.querySelector(selector);
   for (let i = 0; i< videoIds.length; i+=1){
     const item = document.createElement("li");
     item.classList.add('image');
     item.innerHTML = `<a href="#">
                         <iframe width="280" height="150" src="https://www.youtube.com/embed/${videoIds[i]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         <button>abc</button>
                       </a>`;
     list.appendChild(item);
   }
 }