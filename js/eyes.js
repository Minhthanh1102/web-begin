
  const open = document.querySelector('#eye_open')
  const close = document.querySelector('#eye_close')
  const inputPassword = document.querySelector('#inputPassword')
  const btnSubmit = document.querySelector('#btn_submit')
  const checkbox = document.querySelector('#checkbox_accept')
  const eyePassword = () => {
      close.addEventListener('click', function() {
          open.classList.toggle("active");
          close.classList.toggle("active");
          inputPassword.type="text";
      });
      open.addEventListener('click', function() {
          open.classList.toggle("active");
          close.classList.toggle("active");
          inputPassword.type="password";
      
      });
      
  }
  const accept = () =>{
      let init = false; 
      checkbox.addEventListener("click", () => {
          if (init) {
              btnSubmit.classList.add("hidden");
              init = !init;
          }
          else {
              btnSubmit.classList.remove("hidden");
              init = !init;
          }
      })
  }
  
  accept();
  eyePassword();
  