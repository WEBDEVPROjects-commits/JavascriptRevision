// document.querySelector(".box").onclick=(e)=>{
//         alert("hey the button 1 has been clicked!")

// }
document.querySelector("#Bookmark").addEventListener('click',(e)=>{
    document.querySelector(".SavedBkmrk").insertAdjacentHTML('beforeend',`<a href=" ${document.querySelector("#enter").value}"class="SavedBkmrk1" target="_blank">${document.querySelector("#enter").value}</a>`)
    // =document.querySelector("#enter").value

})