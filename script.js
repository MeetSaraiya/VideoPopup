const btn = document.getElementById("play");
// document.getElementById("myBtn").addEventListener("click", displayDate);
const  popUpContainer = document.getElementsByClassName("pop-up-container")[0];
btn.addEventListener("click",function(){
    if (popUpContainer) {
        popUpContainer.style.visibility = "visible"; // Make it visible
        console.info(" <video> element found on the page.</vide0>");
        console.log(btn)

    } else {
        console.error("No <video> element found on the page.");
    }
});

document.getElementById("close").addEventListener("click",()=>{
    popUpContainer.style.visibility="hidden"
})