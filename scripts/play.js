function play() {
    "use strict";
    document.getElementById("thainam").play();
}

function preventDefaultAction(evt) {
    "use strict";
    evt.preventDefault();
}

window.addEventListener("dblclick", preventDefaultAction, false);