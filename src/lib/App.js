import { mainComponent } from "./MainComponent.js";
import { prevComponent } from "./Prev.js";
// pruebas
function run() {
    prevComponent(
        ["container", "container2"],
        5);
    mainComponent("container", {
        timerInSecond: 5
    }, {
        popupContent: ["Hello, this is a title", "This is a paragraph..."]
    });
}

document.getElementById("btn").addEventListener("click", run);