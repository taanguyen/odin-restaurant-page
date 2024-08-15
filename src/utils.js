export function insertInto(parent, element, classList = '', elemHTML = '') {
    const elem = document.createElement(element);
    elem.innerHTML = elemHTML;
    if (classList.length > 0) {
        const classes = classList.split(' ');
        for (let classNm of classes) {
            elem.classList.add(classNm);
        }
    }
    if (parent == document) {
        parent = parent.body;
    }
    parent.appendChild(elem);
    return elem;
}


export function renderObjWithParent(parent, obj) {
    for (let key of Object.keys(obj)) {
        const vals = obj[key];
        if (Array.isArray(vals)) {
            for (let val of vals) {
                insertInto(parent, key, '', val);
            }

        } else {
            insertInto(parent, key, '', vals);
        }
    }
}