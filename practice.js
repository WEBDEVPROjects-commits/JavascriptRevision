var traverse = Array.from(document.querySelector(".Content").children)
function dots() {
    traverse.forEach((element) => {
        setInterval(() => {
            if (element.innerHTML.endsWith("...")) {
                element.innerHTML = element.innerHTML.slice(0, (element.innerHTML.length - 3));
            }
            else {
                element.innerHTML = element.innerHTML + "."
            }
        }, 1000);
    })
}
dots()
traverse.forEach(element => {

    setTimeout(() => {
        element.removeAttribute("hidden");
    }, (Math.floor((Math.random() * (8 - 3 + 1) + 3))) * 1000)
});