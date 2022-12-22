const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'svet-red',
    [LIGHTS.yellow]: 'svet-yellow',
    [LIGHTS.green]: 'svet-green',
};

const NEXT_LIGHT_BY_LIGHT = {
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red,
};

let currentLight = LIGHTS.red;

function switchLight(node) {
    const currentClass = CLASSES_BY_LIGHT[currentLight];
    const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
    const nextClass = CLASSES_BY_LIGHT[nextLight];

    currentLight = NEXT_LIGHT_BY_LIGHT [currentLight];
    node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
    node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}