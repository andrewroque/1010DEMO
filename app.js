alert("HELLO");

let button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark-mode')
})

// new cursoreffects.ghostCursor();
// new cursoreffects.fairyDustCursor({colors: ["#ff0000", "#00ff00", "#0000ff"]});