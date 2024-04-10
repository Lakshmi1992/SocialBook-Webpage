
//import userDetails from './userDetails.json' assert{type:'json'};

var settingsmenu=document.querySelector(".settings-menu");
var darkButton=document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkButton.onclick=function(){
    darkButton.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }


}

if(localStorage.getItem("theme")=="light"){
    darkButton.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkButton.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}



fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
   return response.json();
})
.then(function(users){
   let placeholder = document.querySelector("#my-custom-posts");
   let out = "";
   for(let user of users){
 // let thisUser=  userDetails.filter(x => x.id === user.id);
      out += `
         


         <div class="post-container">
         <div class="post-row">
             <div class="user-profile">
                 <img src="images/profile-pic.png">
                 <div>
                     <p> John Nicholson</p>
                     <small>Public <i class="fa-solid fa-caret-down"></i></small>
                 </div>
             </div>
             <a href="#"><i class="fa-solid fa-ellipsis-v"></i></a>
         </div>

         <p class="post-text"> <span> ${user.title}</span> <br>
         ${user.body}
         </p>
         <img src="images/feed-image-1.png" class="post-img">

         <div class="post-row">
             <div class="activity-icons">
                 <div><img src="images/like-blue.png">250</div>
                 <div><img src="images/comments.png">50</div>
                 <div><img src="images/share.png">25</div>
             </div>
             <div class="post-profile-icon">
                 <img src="images/profile-pic.png"> <i class="fa-solid fa-caret-down"></i>
             </div>
         </div>

     </div>
      `;
   }
 
   placeholder.innerHTML = out;
});


