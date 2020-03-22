function movedown() {
    var c_moveBelow = document.getElementById("movedisappear_below");
    if (c_moveBelow.style.transform == "rotate(0deg)" && c_moveBelow.style.top == "500px") {
        c_moveBelow.style.transform = "rotate(60deg)";
        c_moveBelow.style.top = "204px";
    } else {
        c_moveBelow.style.transform = "rotate(0)";
        c_moveBelow.style.top = "500px";
    }
    var c_upOne = document.getElementById("upone");
    if (c_upOne.style.transform == "rotate(0deg)" && c_upOne.style.top == "160px") {
        c_upOne.style.transform = "rotate(120deg)";
        c_upOne.style.top = "116px";
    } else {
        c_upOne.style.transform = "rotate(0deg)";
        c_upOne.style.top = "160px";
    }
    var c_tri = document.getElementById("triangle");
    if (c_tri.style.left == "500px") {
        c_tri.style.left = "204px";
    } else {
        c_tri.style.left = "500px";
    }
    var c_anoR = document.getElementById("anotherround");
    if (c_anoR.style.transform == "rotate(90deg)") {
        c_anoR.style.transform = "rotate(0)"
    } else {
        c_anoR.style.transform = "rotate(90deg)";
    }
    var c_stand = document.getElementById("standone");
    if (c_stand.style.transform == "rotate(180deg)") {
        c_stand.style.transform = "rotate(0deg)";
    } else {
        c_stand.style.transform = "rotate(180deg)";
    }

}
$(window).scroll(function() {
    var expand = document.getElementById("expand");
    var imglist = document.getElementById("imglist");
    var c_long = document.getElementById("scrolltag");
    if ($(window).scrollTop() > 27) {
        //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        expand.style.width = "600px";
        imglist.style.width = "1600px";
        $('#list3').mouseover(function() {
            c_long.style.left = "1100px";
        })
        $('#list4').mouseover(function() {
            c_long.style.left = "1350px";
        })
    } else {
        expand.style.width = "0px";
        imglist.style.width = "1000px";
        $('#list3').mouseover(function() {
            c_long.style.left = "500px";
        })
        $('#list4').mouseover(function() {
            c_long.style.left = "750px";
        })
    }

    $('#list1,#list2,#list3,#list4').mouseover(function() {
        c_long.style.width = "250px";
    });
    $('#list1,#list2,#list3,#list4').mouseout(function() {
        c_long.style.width = "62.5px";
        c_long.style.left = "0";
    });
    $('#list2').mouseover(function() {
        c_long.style.left = "250px";
    })
});