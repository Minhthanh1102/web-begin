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