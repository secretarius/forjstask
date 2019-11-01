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

const element = document.getElementById('caption');
console.log(element.innerHTML, element.innerText);
element.addEventListener('click', event => {
    console.dir({ event });
});

const elements = document.getElementsByClassName('panel1');
//HTMLCollection, HTMLElement: Element
console.log(elements);
console.log(elements[0]);
console.log(elements.namedItem('web'));
console.log(elements['web']);




//context closure
const hash = () => {
    const data = {};
    let counter = 0;
    return (key, value) => {
        data[key] = value;
        counter++;
        console.log({counter});
        return data;
    }
}

const h1 = hash();
h1('name','Alex');
h1('age', 37);
const obj1 = h1('job', false);
console.log({obj1});
//chain
const hash2 = () => {
    const data = {};
    Object.defineProperty(data, 'add', {
        enumerable: false,
        value(key, value) {
            data[key] = value;
            return data;
        }
    });
   return data;
}

console.log(
    hash2().add('name','Alex')
            .add('age', 37)
            .add('job', false)
);
//closure
const add1 = x => y => {
    const z = x + y;
    console.log(x + 'x' + y + '=' + z);
    return z;
};
// const add1 = x => y => x + y;
const res = add1(3)(6);
console.log(res);
//closure recursive
const add2 = x => y => {
    const z = x + y;
    console.log(x + 'x' + y + '=' + z);
    return add2(z);
};

//const add2 = x => y => add2(x + y);
//usage
const a1 = add2(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);
console.log(a1, a2, a3, a4, a5);

const res2 = add2(1)(4)(8)(8);
console.log(res2);



//fizzbazz
for (let i = 1; i < 17; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbazz");
    } if ( i % 3 === 0 ) {
        console.log("fizz");
    } else if ( i % 5 === 0) {
        console.log("bazz");
    } else {
        console.log(i);
    }
}
