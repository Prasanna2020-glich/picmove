
// console.log('check')
const divItem1=document.querySelectorAll(".panel");

divItem1.forEach((i) => {
    console.log(i);
    i.addEventListener("mouseover",()=>{

        console.log('mouseover');
        i.classList.add("active");
    });
    i.addEventListener("mouseout",()=>{
    
        console.log('mouseout');
        i.classList.remove("active");
    });
});
