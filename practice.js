        document.querySelector(".Child").addEventListener("click", (e) => {
            e.stopPropagation();
            alert("Child was clicked")
        })
        document.querySelector(".Childcontainer").addEventListener("click", (e) => {
            alert("Childcontainer was clicked")
        })
        document.querySelector(".Childcontainer").addEventListener("click", (e) => {
            console.log(e.target);
            alert("container was clicked")
        })