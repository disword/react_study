const TEXT_ELEMENT = 'TEXT_ELEMNT';
export let currentInstance;
export function createElement(type, props, ...children) {
    props = Object.assign({}, props);
    props.children = [].concat(...children)
        .filter
}
