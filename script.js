// this for onlick event 
function showModel(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.login-form').classList.add('show-login-form');
}


// var buttonlogin = document.getElementsByClassName('btn-login');
// buttonlogin.addEventListener("click", showModel);


function closeModel(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.login-form').classList.remove('show-login-form');
}

// var closebutton = document.querySelector("span")
// cclosebutton.addEventListener("click", closeModel);