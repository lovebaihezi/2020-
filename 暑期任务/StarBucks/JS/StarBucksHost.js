window.onload = function() {
    var SwitchButton = document.getElementById("SwitchMenu");
    SwitchButton.addEventListener("click", function() {
        var SwitchMenu = document.getElementById("SwitchMenu").children;
        var ListChoose = document.getElementById("ListChoose");
        var MenuList = document.getElementsByClassName("WhichShow");
        if (SwitchMenu[0].style.opacity == "1") {
            SwitchMenu[1].style.opacity = "1";
            SwitchMenu[0].style.opacity = "0";
            MenuList[1].classList.remove("off");
            MenuList[1].classList.add("on");
            MenuList[0].classList.remove("on");
            MenuList[0].classList.add("off");
            ListChoose.style.display = "none";
        } else {
            SwitchMenu[0].style.opacity = "1";
            SwitchMenu[1].style.opacity = "0";
            MenuList[1].classList.remove("on");
            MenuList[1].classList.add("off");
            MenuList[0].classList.remove("off");
            MenuList[0].classList.add("on");
            ListChoose.style.display = "inline-block";
        }
    });
    var P = document.getElementsByClassName("P");
}