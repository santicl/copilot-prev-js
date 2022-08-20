export const prevComponent = (idValue, seconds) => {
    var i = 0;
    if (typeof idValue === "object" && typeof seconds === "number") {
        //let position = add(idValue[i], i);
    } else {
        console.log("Error: Invalid arguments");
        return;
    }
}

function add(id, position) {
    setTimeout(function () {
        document.getElementById(id).classList.add('popup');
    }, 2000);
    return position + 1;
}