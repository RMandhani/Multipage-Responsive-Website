
// open & close nav menu 
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .conatiner ul");

// open sidebar 
menuBtn.addEventListener('click', () =>{
  menu.style.display='block';
  menuBtn.style.display='none';
  closeBtn.style.display='inline-block';
  });

// close sidebar
menuBtn.addEventListener('click', () =>{
  menu.style.display='block';
  closeBtn.style.display='none';
  menuBtn.style.display='inline-block';
  });

// change active class to clicked nav items 
const navItems = document.querySelectorAll('nav ul i');

// remove active class from other items 
const removeActiveClass = () => {
  navItems.forEach(item =>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// add active class to cliked nav item
navItems.forEach(item =>{
  const link = item.querySelector('a');
  link.addEventListener('click', () =>{
    link.classList.add('active');
  })
})

// add toogle effects to Nutrition 

const nutrition = document.querySelectorAll('section#nutrition article');
nutrition.forEach(nutrition => {
  nutrition.addEventListener('click', ()=>{
    nutrition.classList.toogle('open');

    const icon = nutrition.querySelector('.icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    }
    else {
      icon.className = 'uil uil-plus';
    }
  })
})

// NAVBAR background
window.addEventListener("scroll", () =>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >0)
})