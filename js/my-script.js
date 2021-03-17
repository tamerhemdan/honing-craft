
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        event.preventDefault();
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

  
  $('.rigist').click(function(){
    
    'use strict';
    
    var mail = $('.togo').val();
    var phon = $('.tops').val();
    
    if (mail !== '' && phon !==''){
   
    $('.quote').hide();
    $('.welcom').show();
    }
    
                     });
  
  $('.pro-list').click(function(){
    $('.ouer-protact').toggle();

  });
$('.pro-input').change(function(){
  
      'use strict';
  
  var prtactName = $('.pro-input').val();
  var prtactUntPrice = $('.unet-input');
  var prtactQuantity = $('.quant-input');
  var prtactCost = $('.cost-input');
  
  
  
  if ( prtactName === 'Protacte 1') {
    
    prtactUntPrice.val(1000);  
      prtactCost.val(100);
      }else if(prtactName === 'Protacte 2'){
  prtactUntPrice.val(1500);
      
     prtactCost.val(150); 
      
      } else if(prtactName === 'Protacte 3'){
  prtactUntPrice.val(2000);
      
     prtactCost.val(200); 
      
      }else if(prtactName === 'Protacte 4'){
  prtactUntPrice.val(1800);
      
     prtactCost.val(180); 
      
      }
  else if(prtactName === 'Protacte 5'){
  prtactUntPrice.val(2500);
      
     prtactCost.val(250); 
      
      }
});

$('.quant-input').change(function(){
  
      'use strict';
  var q = $('.quant-input').val(),
      u = $('.unet-input').val(),
      c = $('.cost-input').val(),
      ch = u - c ,
      t = ch * q ;
  
   $('.total-input').val(t);
  
})

$('.pro-input').change(function(){
  
      'use strict';
  var q = $('.quant-input').val(),
      u = $('.unet-input').val(),
      c = $('.cost-input').val(),
      ch = u - c ,
      t = ch * q ;
  
   $('.total-input').val(t);
  
});

$('.add-orderList').click(function(){
    
  var addBox = $('.out-orderdata'),
      prtactName = $('.pro-input').val(),   
      q = $('.quant-input').val(),
      u = $('.unet-input').val(),
      c = $('.cost-input').val(),
      ch = u - c ,
      t = ch * q ;
  
  
addBox.append('<div class="col-sm-3"><p class="name">Protact</p></div>');
  $(".name").text(prtactName); 
  
addBox.append('<div class="col-sm-2"><p class="que">Protact</p></div>');
addBox.append('<div class="col-sm-2"><p class="un">Protact</p></div>');
addBox.append('<div class="col-sm-1"><p class="charg">Protact</p></div>');
addBox.append('<div class="col-sm-2"><p class="tot">Protact</p></div>');
addBox.append('<div class="col-sm-1"><button class="btn"> - </button></p></div>');
addBox.append('<div class="col-sm-1"><button class="btn"> edit </button></div>');

  
})






