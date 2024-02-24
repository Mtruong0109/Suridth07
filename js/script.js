document.addEventListener("keydown", function (e) {
    if (e.key === "u" && e.ctrlKey) {
      e.preventDefault();
      swal({
        title: "Thông báo",
        text: "Xin lỗi, bạn không thể xem hoặc copy source code",
        icon: "error",
        timer: 3000,
        button: false,
      });
    }
  });
  
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    swal({
      title: "Thông báo",
      text: "Xin lỗi, bạn không thể xem hoặc copy source code",
      icon: "error",
      timer: 3000,
      button: false,
    });
  });
  
  document.addEventListener("keydown", function(e) {
    if (e.keyCode === 81) {
      e.preventDefault();
      cart.classList.add("active");
    } else if (e.keyCode === 82) {
       cart.classList.remove("active");
    } 
  });
  
  const image = document.querySelector('.image');
  const hover = document.querySelector('.hover');
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.close');
  
  function show(){
      hover.classList.add('active');
      modal.classList.add('show');
  }
  
  function hide(){
      hover.classList.remove('active');
      modal.classList.remove('show');
  }
  
  image.addEventListener('click', show);
  close.addEventListener('click', hide);