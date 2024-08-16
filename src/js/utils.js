export function insertInto(parent, tag, classList = '', elemHTML = '') {
    const elem = createElement(tag, classList, elemHTML);
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

export function createElement(tag, classList = '', elemHTML = '') {
    const elem = document.createElement(tag);
    elem.innerHTML = elemHTML;
    if (classList.length > 0) {
        const classes = classList.split(' ');
        for (let classNm of classes) {
            elem.classList.add(classNm);
        }
    }
    return elem;
}