function Picture(SourcePicture, Element, Status) {
    this.Src = SourcePicture;
    this.Ele = Element;
    this.status = Status;
}

Picture.prototype = {
    constructor: Picture,
    MoveDistance: function() {
        return 142;
    },
    BoxWidth: function() {
        return document.getElementsByClassName("Switch")[0].style.width;
    },
    MoveControlMargin: function(MoveStep) {
        return "0 0 0 " + -(this.MoveDistance() * MoveStep) + "rem";
    },
    moveAction: function(MoveStep) {
        return this.MoveControlMargin(MoveStep);
    },
    IntervalStop: function() {
        this.Ele.addEventListener("mouseover", function() {
            window.clearInterval(TimeSwitch);
            TimeSwitch = null;
        });
        this.Ele.addEventListener("mouseout", function() {
            TimeSwitch = IntervalSwitch();
        });
    }
}

function Transfer(Ele, Num) {
    this.Element = Ele;
    this.Number = Num;
}

Transfer.prototype = {
    constructor: Transfer,
    Alive: function() {
        var that = this;
        that.Element.addEventListener("click", function() {
            PictureCount = that.Number;
            that.clear();
            that.show();
            PictureListGet[0].style.margin = PictureList[0].moveAction(PictureCount);
        });
    },
    clear: function() {
        for (i = 0; i < RoundListGet.length; i++) {
            (function(i) {
                RoundList[i].Element.style.background = "snow";
            })(i);
        }
    },
    show: function() {
        this.clear();
        this.Element.style.background = "yellow";
    }
}

function SwitchButton(Element) {
    this.LeftEle = Element[0];
    this.RightEle = Element[1];
}

SwitchButton.prototype = {
    constructor: SwitchButton,
    Right: function() {
        this.RightEle.onclick = function() {
            PictureCount++;
            if (PictureCount >= PictureListGet.length) {
                PictureCount = 0;
            }
            PictureListGet[0].style.margin = PictureList[0].moveAction(PictureCount);
            RoundList[PictureCount].show();
            if (PictureCount == PictureListGet.length) {
                PictureListGet[0].style.margin = PictureList[0].moveAction(PictureCount = 0);
            }
        }
    },
    Left: function() {
        this.LeftEle.onclick = function() {
            PictureCount--;
            if (PictureCount < 0) {
                PictureCount = PictureListGet.length - 1;
            }
            PictureListGet[0].style.margin = PictureList[0].moveAction(PictureCount);
            RoundList[PictureCount].show();
        }
    }
}

var PictureList = new Array();
var RoundList = new Array();
var PictureCount = 0;
var PictureListGet = document.getElementsByClassName("SwitchPicture");
var RoundListGet = document.getElementsByClassName("round");
var SwitchButtonList = new SwitchButton(document.getElementsByClassName("button"));
SwitchButtonList.Left();
SwitchButtonList.Right();
for (i = 0; i < PictureListGet.length; i++) {
    PictureList.push(new Picture("", (function(i) { return PictureListGet[i]; })(i), "off"));
    RoundList.push(
        new Transfer(
            (function(i) { return RoundListGet[i]; })(i),
            (function(i) { return i; })(i)
        )
    );
    (function(i) {
        PictureList[i].IntervalStop();
    })(i);
    (function(i) {
        RoundList[i].Alive();
    })(i);
}

var TimeSwitch;

function IntervalSwitch() {
    return window.setInterval(function() {
        SwitchButtonList.RightEle.click();
    }, 3000);
}
TimeSwitch = IntervalSwitch();