const dropdown = document.querySelector('.dropdown')
const optionList = document.querySelector('.option');
const dropdownInput = document.querySelector('.dropdown__input');
dropdownInput.value = ""
optionList.addEventListener("click",function(event){
    if(event.target.closest('.option__item')){
        console.log(event.target)
        dropdownInput.value = event.target.innerHTML;
    }
})
dropdown.addEventListener("click",function(){
    dropdown.classList.toggle("active");
    dropdownInput.placeholder = "Select";
    checkplaceholder();
})
const checkplaceholder =()=>{
    if(dropdown.classList.contains("active") == false){
        dropdownInput.placeholder = "No selected element";
    }
}
