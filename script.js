function val(result){
    form.disp.value = form.disp.value + result;
}
function calculate(){
    if(form.disp.value == ""){
      alert("Please enter numbers");
    }else{
        form.disp.value = eval(form.disp.value);

    }
}
var btn = form.veql;
btn.addEventListener('dblclick',function(){
    form.disp.value =""; //when we click on equal button the result will be clear
})