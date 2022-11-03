alert("HELLO");

window.addEventListener("scroll", function(event) {
  
  let scroll = this.scrollY;
  console.log(scroll);
  if(scroll > 2500) {
    this.document.body.style.backgroundColor = "#101010";
    // this.document.body.style.filter = "invert(100%)"; 
  } else (
    this.document.body.style.backgroundColor = "#da9d1bf4"
  )

  


});


