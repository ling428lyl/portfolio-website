/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader =()=>{
    const header=document.getElementById('header')
    this.scrollY>=50?header.classList.add('bg-header'):header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selectIcon',getCurrentIcon())
})



// ===========IMAGE FULL SCREEN==============
// const image = document.getElementById('myImage');

// // 添加点击事件，点击图片时全屏显示
// image.addEventListener('click', function() {
//     if (image.requestFullscreen) {
//         image.requestFullscreen(); // 进入全屏
//     } else if (image.mozRequestFullScreen) { // 兼容火狐
//         image.mozRequestFullScreen();
//     } else if (image.webkitRequestFullscreen) { // 兼容Chrome、Safari和Opera
//         image.webkitRequestFullscreen();
//     } else if (image.msRequestFullscreen) { // 兼容IE/Edge
//         image.msRequestFullscreen();
//     }
// });



//work images


// ===============EMAIL CLICK====================

const email = document.getElementById('email');

email.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  const emailText = email.innerText;
  navigator.clipboard.writeText(emailText).then(() => {
    alert('Email address copied: ' + emailText);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});


