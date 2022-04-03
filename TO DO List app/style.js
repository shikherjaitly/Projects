let add = document.querySelector(".add-btn");

let modelcont = document.querySelector(".model-cont")

let addflag = false

add.addEventListener('click',function(e){
    // display the model
//addflag, true - model display
//addflag, false - model remove
addflag = !addflag

if(addflag == true){
    modelcont.style.display = 'flex' 
}

else{
    modelcont.style.display = 'none'
}
})