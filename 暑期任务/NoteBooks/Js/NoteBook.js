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

    TextAreaSubmit: function() {
        FlexBox.Node.HTMLTextAreaElement.addEventListener("ondblclick", function() {
            SwitchToTextArea();
        });
        AddEnterKeyPress(this, this.TextAreaDisabled);
    },

    SwitchToTextArea: function() {
        this.Node.HTMLTextAreaElement.disabled = false;
    },

    TextAreaDisabled: function() {
        this.Node.HTMLTextAreaElement.disabled = true;
    },

    ElementListGet: document.getElementsByClassName("flex"),

    DeleteSelf: function() {
        flexList[this.Number - 1] = null;
    },

    ReMoveDiv: function() { //BUG: 为什么这个下标会过三次之后会导致序号减多了
        var ThisElement = this;
        var flag = false;
        this.Node[1].onclick = function() {
            flag = true;
            for (i = 0; i < ThisElement.ElementListGet.length; i++) {
                console.log(i);
                ThisElement.ElementListGet[i].getElementsByClassName("Number")[0].innerHTML = i;
            }
            ThisElement.element.parentElement.removeChild(ThisElement.element);
        }
        return flag;
    }
}

var FlexContain = document.getElementsByClassName("FlexContain")[0];
var Input = document.getElementById("Submit");

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
        var NewBox = FlexContain.lastElementChild.cloneNode(true);
        NewBox.getElementsByClassName("Number")[0].innerText = BoxList.length + 1;
        NewBox.getElementsByClassName("TextArea")[0].innerText = Input.value;
        FlexContain.appendChild(NewBox);
    }
}