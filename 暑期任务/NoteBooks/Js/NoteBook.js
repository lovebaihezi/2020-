var FlexBoxList = {};

function FlexBox(number, status, node, Element) {
    this.Number = number;
    this.Status = status;
    this.Node = node;
    this.element = Element;
}

FlexBox.prototype = {
    constructor: FlexBox,

    GetSubmit: function() {
        return document.getElementById("Submit").innerHTML;
    },

    showNumber: function() {
        console.log(this.NUmber);
    },

    SwitchToTextArea: function() {
        this.element.getElementsByClassName("TextArea")[0].disabled = false;
    },

    TextAreaDisabled: function(Div) {
        Div.element.getElementsByClassName("TextArea")[0].disabled = true;
    },

    ElementListGet: document.getElementsByClassName("flex"),

    TextAreaSubmit: function() {
        var Div = this;
        this.element.ondblclick = function() {
            Div.SwitchToTextArea();
        };
        Div.element.getElementsByClassName("TextArea")[0].addEventListener("keyup", function(Key) {
            Key.preventDefault();
            if (Key.keyCode === 13) {
                Div.TextAreaDisabled(Div);
            }
        });
    },

    DeleteSelf: function() {
        flexList[this.Number - 1] = null;
    },

    ReMoveDiv: function() { //BUG: 为什么这个下标会过三次之后会导致序号减多了
        var ThisElement = this;
        var flag = false;
        this.Node[1].onclick = function() {
            flag = true;
            ThisElement.element.parentElement.removeChild(ThisElement.element);
            for (i = 0; i < ThisElement.ElementListGet.length; i++) {
                ThisElement.ElementListGet[i].getElementsByClassName("Number")[0].innerHTML = i + 1;
            }
        }
        return flag;
    }
}

var FlexContain = document.getElementsByClassName("FlexContain")[0];
var Input = document.getElementById("Submit");
var BackUp = FlexContain.lastElementChild.cloneNode(true);

window.onload = function() {
    var Number = document.getElementsByClassName("flex").length;
    var SubmitButton = document.getElementById("AddFlexBox");
    (function() {
        for (var i = 0; i < Number; i++) {
            FlexBoxList[i] = new FlexBox(i + 1, 1, document.getElementsByClassName("flex")[i].childNodes, document.getElementsByClassName("flex")[i]);
        }
    })();
    // console.log(FlexBoxList);
    (function() {
        for (i = 0; i < Number; i++) {
            if (FlexBoxList[i].ReMoveDiv()) {
                FlexBoxList[i].DeleteSelf();
            }
            FlexBoxList[i].TextAreaSubmit();
        }
    })();
    AddEnterKeyPress(Input, AddFLexBox);
    SubmitClick(SubmitButton, AddFLexBox);
}

function DoubleClick(Element, Doing) {
    Element.ondblclick() = Doing();
}

function AddEnterKeyPress(Element, Doing) {
    Element.addEventListener("keyup", function(Key) {
        Key.preventDefault();
        if (Key.keyCode === 13) {
            Doing();
        }
    });
}

function SubmitClick(Element, Doing) {
    Element.onclick = function() { Doing() }; //不包住会直接执行,迷惑
}

function AddFLexBox() {
    if (Input.value != "") {
        var BoxList = document.getElementsByClassName("flex");
        if (FlexContain.childElementCount != 0) {
            var NewBox = FlexContain.lastElementChild.cloneNode(true);
        } else NewBox = BackUp;
        NewBox.getElementsByClassName("Number")[0].innerText = BoxList.length + 1;
        NewBox.getElementsByClassName("TextArea")[0].innerText = Input.value;
        FlexContain.appendChild(NewBox);
        for (var i = 0; i < document.getElementsByClassName("flex").length; i++) {
            FlexBoxList[i] = new FlexBox(i + 1, 1, document.getElementsByClassName("flex")[i].childNodes, document.getElementsByClassName("flex")[i]);
        }
        (function() {
            for (i = 0; i < document.getElementsByClassName("flex").length; i++) {
                if (FlexBoxList[i].ReMoveDiv()) {
                    FlexBoxList[i].DeleteSelf();
                }
                FlexBoxList[i].TextAreaSubmit();
            }
        })();
    }
}