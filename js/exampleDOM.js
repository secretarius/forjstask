function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for(let i=0; i<node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '\t');
    }
}
printDOM(document, '');

console.log(document.getElementById('content'));

const para1 = document.getElementsByTagName('p')[0];
para1.textContent;
para1.innerHTML;
para1.textContent = "Измененний HTML-файл";
para1.innerHTML = "<i>Измененний</i> HTML-файл";

const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "Это било создано динамически!";
p2.textContent = "И Это тоже било создано динамически!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1, firstChild);
parent.appendChild(p2);