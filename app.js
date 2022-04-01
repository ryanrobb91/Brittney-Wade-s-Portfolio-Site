(function($) {
    $('a[href^=""]').on('click', function(e) {
      e.preventDefault();
  
      var target = this.hash;
      var $target = $(target);
  
      $('.mdl-layout__content').stop().animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing', function() {
        window.location.hash = target;
      });
    });
    // $(document).ready(function(){
    //       $("#contactButton").click(function(){
    //          console.log("#needEmail");
    //       });
    //     });
    
        

    //     $("#contactButton").on('click', function(e) {
    //       e.preventDefault();
      
    //       console.log("test")
    //     });
  
  });
// {
//   (function myFunction(x) 
//     {x}.classList.toggle("change")
//     document.getElementById('mobile').classList.toggle("show-menu");
// };
  
//   const email = document.querySelector('#email');

// email.addEventListener('input', () =>{
//   email.setCustomValidity('');
//   email.checkValidity();
//   console.log(email.checkValidity());
//   if(email.validity.valid == true){
//     email.style.borderColor = '#26Ad1a';
//     emailCheck.style.display = 'inline';
//     emailX.style.display = 'none';

  // submit button success

    submit.addEventListener('click', () => {
      submit.textContent = 'Submitted';

    //     Function();
    //   console.log(`
    //   Your Name: ${name.value}
      
    //   Your Email: ${email.value}`);

    //     function newFunction() {
    //         Outputs; form; info; to; console;
    //     }
    // });
//   }
});
