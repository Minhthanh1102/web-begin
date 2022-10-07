$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:  true,
    arrows : false,
  });



const amount = () => {
  const prev = document.querySelector("#amount-prev");
  const input = document.querySelector("#amount-input");
  const next = document.querySelector("#amount-next");
  prev.addEventListener("click", ()=>{
    let valueInput = parseInt(input.value);
    let newValue; 
    valueInput == 0 ?  newValue = 0 : newValue =  valueInput-1 ;
    input.value= newValue;
  })
  next.addEventListener("click", ()=>{
    let valueInput = parseInt(input.value);
    let newValue = valueInput+1;
    input.value= newValue;
  })
}
amount();


$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});