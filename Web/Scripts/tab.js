function Tab_OnMouseOver(eventTarget) {
//    if (eventTarget.className != "an_a2") {
        eventTarget.className = "an_a1"
//    }
  
}
function Tab_OnMouseOut(eventTarget) {
//    if (eventTarget.className != "an_a2") {
        eventTarget.className = "an_a2"
//    }

}

function Tab_OnSelectClientClick(eventTarget,url) {
    var elements = document.getElementsByTagName("a");
    eventTarget.className = "an_a1"
    parent.menu_main.location = url;
}
