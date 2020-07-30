window.onload = function() {
    var OpenBlocks = document.getElementsByClassName("li");
    for (var i = 0; i < 3; i++) {
        Change(OpenBlocks[i]);
    }
}

function Change(a) {
    a.addEventListener("click", function() {
        if (a.classList.value == "li close") {
            a.classList.remove("close");
            a.classList.add("expend");
        } else {
            a.classList.remove("expend");
            a.classList.add("close");
        }
        // console.log(a.classList);
    });
}