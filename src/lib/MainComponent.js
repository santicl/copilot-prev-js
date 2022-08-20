/**
 * Selects the main component of the application and add new component with class named pop.
 * 
 * @param
 *  popups with the class pop.
 * 
 * @param 
 * timerInSecond with the time in seconds to show the popups.
 * 
 * @returns returns the main component of the application, middle functions.
 * 
 * 
 * **/

export function mainComponent(ID = null, { timerInSecond = Number }, { popupContent = [h2Text = '', pText = ''] }) {
    var element = document.getElementById(ID);
    let [ h2Text, pText ] = popupContent;


    setTimeout(function () {
        let { top, left, right, width, height, bottom } = element.getBoundingClientRect();
        let positionBottom = { bottom };
        var body = document.body;
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        var p = document.createElement('p');
        var close = document.createElement('button');
        var next = document.createElement('button');
        let divContent = { body, div, h2, p, close, next };

        let content = { h2Text, pText };

        popup(divContent, content, positionBottom);


        let newEl = document.createElement('div');
        let eleStyle = newEl.style;
        newEl.classList.add('popup');
        eleStyle.top = `${top}px`;
        eleStyle.left = `${left}px`;
        eleStyle.width = `${width}px`;
        eleStyle.height = `${height}px`;
        eleStyle.bottom = `${bottom}px`;
        eleStyle.right = `${right}px`;
        eleStyle.backgroundColor = 'red';
        eleStyle.position = 'absolute';
        element.appendChild(newEl);
    }, timerInSecond * 1000);
}

function popup(divContent, content, position) {
    divContent.div.classList.add('pop');
    divContent.h2.innerHTML = content.h2Text;
    divContent.p.innerHTML = content.pText;
    divContent.close.innerHTML = 'Close';
    divContent.close.classList.add('close');
    divContent.next.innerHTML = 'Next';
    divContent.next.classList.add('next');

    divContent.h2.classList.add('h2');

    divContent.div.appendChild(divContent.h2);
    divContent.div.appendChild(divContent.p);
    divContent.div.appendChild(divContent.close);
    divContent.div.appendChild(divContent.next);
    divContent.body.appendChild(divContent.div);
    divContent.div.style.bottom = position.bottom + 'px';
    divContent.div.style.position = 'relative';
    divContent.div.style.backgroundColor = 'blue';
}