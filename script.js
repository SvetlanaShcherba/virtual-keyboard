const KEYS = [
    { code: "Backquote", keyRu: "ё", keyRuCaps: "Ё", keyRuShift: "Ё", keyRuShiftCaps: "ё", keyEn: "`", keyEnCaps: "`", keyEnShift: "~", keyEnShiftCaps: "~", type: "typinKeys"},
    { code: "Digit1", keyRu: "1", keyRuCaps: "1", keyRuShift: "!", keyRuShiftCaps: "!",  keyEn: "1" , keyEnCaps: "1", keyEnShift: "!", keyEnShiftCaps: "!", type: "typinKeys" },
    { code: "Digit2", keyRu: "2", keyRuCaps: "2", keyRuShift: "\"", keyRuShiftCaps: "\"",  keyEn: "2", keyEnCaps: "2", keyEnShift: "@", keyEnShiftCaps: "@", type: "typinKeys" },
    { code: "Digit3", keyRu: "3", keyRuCaps: "3", keyRuShift: "№", keyRuShiftCaps: "№", keyEn: "3", keyEnCaps: "3", keyEnShift: "#", keyEnShiftCaps: "#", type: "typinKeys" },
    { code: "Digit4", keyRu: "4", keyRuCaps: "4", keyRuShift: ";", keyRuShiftCaps: ";", keyEn: "4", keyEnCaps: "4", keyEnShift: "$", keyEnShiftCaps: "$", type: "typinKeys" },
    { code: "Digit5", keyRu: "5", keyRuCaps: "5", keyRuShift: "%", keyRuShiftCaps: "%", keyEn: "5", keyEnCaps: "5", keyEnShift: "%", keyEnShiftCaps: "%", type: "typinKeys" },
    { code: "Digit6", keyRu: "6", keyRuCaps: "6", keyRuShift: ":", keyRuShiftCaps: ":", keyEn: "6", keyEnCaps: "6", keyEnShift: "^", keyEnShiftCaps: "^", type: "typinKeys" },
    { code: "Digit7", keyRu: "7", keyRuCaps: "7", keyRuShift: "?", keyRuShiftCaps: "?", keyEn: "7", keyEnCaps: "7", keyEnShift: "&", keyEnShiftCaps: "&", type: "typinKeys" },
    { code: "Digit8", keyRu: "8", keyRuCaps: "8", keyRuShift: "*", keyRuShiftCaps: "*", keyEn: "8", keyEnCaps: "8", keyEnShift: "*", keyEnShiftCaps: "*", type: "typinKeys" },
    { code: "Digit9", keyRu: "9", keyRuCaps: "9", keyRuShift: "(", keyRuShiftCaps: "(", keyEn: "9", keyEnCaps: "9", keyEnShift: "(", keyEnShiftCaps: "(", type: "typinKeys" },
    { code: "Digit0", keyRu: "0", keyRuCaps: "0", keyRuShift: ")", keyRuShiftCaps: ")", keyEn: "0", keyEnCaps: "0", keyEnShift: ")", keyEnShiftCaps: ")", type: "typinKeys" },
    { code: "Minus", keyRu: "-", keyRuCaps: "-", keyRuShift: "_", keyRuShiftCaps: "_", keyEn: "-", keyEnCaps: "-", keyEnShift: "_" , keyEnShiftCaps: "_", type: "typinKeys"},
    { code: "Equal", keyRu: "=", keyRuCaps: "=", keyRuShift: "+", keyRuShiftCaps: "+", keyEn: "=", keyEnCaps: "=", keyEnShift: "+", keyEnShiftCaps: "+", type: "typinKeys" },
    { code: "Backspace", keyRu: "Backspace", keyRuCaps: "Backspace", keyRuShiftCaps: "Backspace", keyRuShift: "Backspace", keyEn: "Backspace", keyEnCaps: "Backspace", keyEnShift: "Backspace", keyEnShiftCaps: "Backspace", type: "backspaceKeys" },
    { code: "Tab", keyRu: "Tab", keyRuCaps: "Tab", keyRuShift: "Tab", keyRuShiftCaps: "Tab",  keyEn: "Tab", keyEnCaps: "Tab", keyEnShift: "Tab", keyEnShiftCaps: "Tab", type: "tabKey" },
    { code: "KeyQ", keyRu: "й", keyRuCaps: "Й", keyRuShift: "Й", keyRuShiftCaps: "й", keyEn: "q", keyEnCaps: "Q", keyEnShift: "Q", keyEnShiftCaps: "q", type: "typinKeys" },
    { code: "KeyW", keyRu: "ц", keyRuCaps: "Ц", keyRuShift: "Ц", keyRuShiftCaps: "ц", keyEn: "w", keyEnCaps: "W", keyEnShift: "W", keyEnShiftCaps: "w", type: "typinKeys" },
    { code: "KeyE", keyRu: "у", keyRuCaps: "У", keyRuShift: "У", keyRuShiftCaps: "у", keyEn: "e", keyEnCaps: "E", keyEnShift: "E", keyEnShiftCaps: "e", type: "typinKeys"},
    { code: "KeyR", keyRu: "к", keyRuCaps: "К", keyRuShift: "К", keyRuShiftCaps: "к", keyEn: "r", keyEnCaps: "R", keyEnShift: "R", keyEnShiftCaps: "r", type: "typinKeys" },
    { code: "KeyT", keyRu: "е", keyRuCaps: "Е", keyRuShift: "Е", keyRuShiftCaps: "е", keyEn: "t", keyEnCaps: "T", keyEnShift: "T", keyEnShiftCaps: "t", type: "typinKeys" },
    { code: "KeyY", keyRu: "н", keyRuCaps: "Н", keyRuShift: "Н", keyRuShiftCaps: "н", keyEn: "y", keyEnCaps: "Y", keyEnShift: "Y", keyEnShiftCaps: "y", type: "typinKeys" },
    { code: "KeyU", keyRu: "г", keyRuCaps: "Г", keyRuShift: "Г", keyRuShiftCaps: "г", keyEn: "u", keyEnCaps: "U", keyEnShift: "U", keyEnShiftCaps: "u", type: "typinKeys" },
    { code: "KeyI", keyRu: "ш", keyRuCaps: "Ш", keyRuShift: "Ш", keyRuShiftCaps: "ш", keyEn: "i", keyEnCaps: "I", keyEnShift: "I", keyEnShiftCaps: "i", type: "typinKeys" },
    { code: "KeyO", keyRu: "щ", keyRuCaps: "Щ", keyRuShift: "Щ", keyRuShiftCaps: "щ", keyEn: "o", keyEnCaps: "O", keyEnShift: "O", keyEnShiftCaps: "o", type: "typinKeys" },
    { code: "KeyP", keyRu: "з", keyRuCaps: "З", keyRuShift: "З", keyRuShiftCaps: "з", keyEn: "p", keyEnCaps: "P", keyEnShift: "P", keyEnShiftCaps: "p", type: "typinKeys" },
    { code: "BracketLeft", keyRu: "х", keyRuCaps: "Х", keyRuShift: "Х", keyRuShiftCaps: "х", keyEn: "[", keyEnCaps: "[", keyEnShift: "{", keyEnShiftCaps: "{", type: "typinKeys"},
    { code: "BracketRight", keyRu: "ъ", keyRuCaps: "Ъ", keyRuShift: "Ъ", keyRuShiftCaps: "ъ", keyEn: "]", keyEnCaps: "[", keyEnShift: "}", keyEnShiftCaps: "}", type: "typinKeys" },
    { code: "Backslash", keyRu: "\\", keyRuCaps: "\\", keyRuShift: "\/", keyRuShiftCaps: "\/", keyEn: "\\", keyEnCaps: "\\", keyEnShift: "|", keyEnShiftCaps: "|", type: "typinKeys" },
    { code: "Delete", keyRu: "Del", keyRuCaps: "Del", keyRuShift: "Del", keyRuShiftCaps: "Del", keyEn: "Del", keyEnCaps: "Del", keyEnShift: "Del", keyEnShiftCaps: "Del", type: "delKey" },
    { code: "CapsLock", keyRu: "CapsLock", keyRuCaps: "CapsLock", keyRuShiftCaps: "CapsLock", keyRuShift: "CapsLock", keyEn: "CapsLock", keyEnCaps: "CapsLock", keyEnShift: "CapsLock", keyEnShiftCaps: "CapsLock", type: "capsLockKey" },
    { code: "KeyA", keyRu: "ф", keyRuCaps: "Ф", keyRuShift: "Ф", keyRuShiftCaps: "ф", keyEn: "a", keyEnCaps: "A", keyEnShift: "A", keyEnShiftCaps: "a", type: "typinKeys" },
    { code: "KeyS", keyRu: "ы", keyRuCaps: "Ы", keyRuShift: "Ы", keyRuShiftCaps: "ы", keyEn: "s", keyEnCaps: "S", keyEnShift: "S", keyEnShiftCaps: "s", type: "typinKeys" },
    { code: "KeyD", keyRu: "в", keyRuCaps: "В", keyRuShift: "В", keyRuShiftCaps: "в", keyEn: "d", keyEnCaps: "D", keyEnShift: "D", keyEnShiftCaps: "d", type: "typinKeys" },
    { code: "KeyF", keyRu: "а", keyRuCaps: "А", keyRuShift: "А", keyRuShiftCaps: "а", keyEn: "f", keyEnCaps: "F", keyEnShift: "F", keyEnShiftCaps: "f", type: "typinKeys" },
    { code: "KeyG", keyRu: "п", keyRuCaps: "П", keyRuShift: "П", keyRuShiftCaps: "п", keyEn: "g", keyEnCaps: "G", keyEnShift: "G", keyEnShiftCaps: "g", type: "typinKeys" },
    { code: "KeyH", keyRu: "р", keyRuCaps: "Р", keyRuShift: "Р", keyRuShiftCaps: "р", keyEn: "h", keyEnCaps: "H", keyEnShift: "H", keyEnShiftCaps: "h", type: "typinKeys" },
    { code: "KeyJ", keyRu: "о", keyRuCaps: "О", keyRuShift: "О", keyRuShiftCaps: "о", keyEn: "j", keyEnCaps: "J", keyEnShift: "J", keyEnShiftCaps: "j", type: "typinKeys" },
    { code: "KeyK", keyRu: "л", keyRuCaps: "Л", keyRuShift: "Л", keyRuShiftCaps: "л", keyEn: "k", keyEnCaps: "K", keyEnShift: "K", keyEnShiftCaps: "k", type: "typinKeys" },
    { code: "KeyL", keyRu: "д", keyRuCaps: "Д", keyRuShift: "Д", keyRuShiftCaps: "д", keyEn: "l", keyEnCaps: "L", keyEnShift: "L", keyEnShiftCaps: "l", type: "typinKeys" },
    { code: "Semicolon", keyRu: "ж", keyRuCaps: "Ж", keyRuShift: "Ж", keyRuShiftCaps: "ж", keyEn: ";", keyEnCaps: ";", keyEnShift: ":", keyEnShiftCaps: ":", type: "typinKeys" },
    { code: "Quote", keyRu: "э", keyRuCaps: "Э", keyRuShift: "Э", keyRuShiftCaps: "э", keyEn: "'", keyEnCaps: "'", keyEnShift: "\"", keyEnShiftCaps: "\"", type: "typinKeys" },
    { code: "Enter", keyRu: "Enter", keyRuCaps: "Enter", keyRuShift: "Enter", keyRuShiftCaps: "Enter", keyRuShift: "Enter", keyEn: "Enter", keyEnCaps: "Enter", keyEnShift: "Enter", keyEnShiftCaps: "Enter", type: "enterKey" },
    { code: "ShiftLeft", keyRu: "Shift", keyRuCaps: "Shift", keyRuShift: "Shift", keyRuShiftCaps: "Shift", keyEn: "Shift", keyEnCaps: "Shift", keyEnShift: "Shift", keyEnShiftCaps: "Shift", type: "shiftKey" },
    { code: "KeyZ", keyRu: "я", keyRuCaps: "Я", keyRuShift: "Я", keyRuShiftCaps: "я", keyEn: "z", keyEnCaps: "Z", keyEnShift: "Z", keyEnShiftCaps: "z", type: "typinKeys" },
    { code: "KeyX", keyRu: "ч", keyRuCaps: "Ч", keyRuShift: "Ч", keyRuShiftCaps: "ч", keyEn: "x", keyEnCaps: "X", keyEnShift: "X", keyEnShiftCaps: "x", type: "typinKeys" },
    { code: "KeyC", keyRu: "с", keyRuCaps: "С", keyRuShift: "С", keyRuShiftCaps: "с", keyEn: "c", keyEnCaps: "C", keyEnShift: "C", keyEnShiftCaps: "c", type: "typinKeys" },
    { code: "KeyV", keyRu: "м", keyRuCaps: "М", keyRuShift: "М", keyRuShiftCaps: "м", keyEn: "v", keyEnCaps: "V", keyEnShift: "V", keyEnShiftCaps: "v", type: "typinKeys" },
    { code: "KeyB", keyRu: "и", keyRuCaps: "И", keyRuShift: "И", keyRuShiftCaps: "и", keyEn: "b", keyEnCaps: "B", keyEnShift: "B", keyEnShiftCaps: "b", type: "typinKeys" },
    { code: "KeyN", keyRu: "т", keyRuCaps: "Т", keyRuShift: "Т", keyRuShiftCaps: "т", keyEn: "n", keyEnCaps: "N", keyEnShift: "N", keyEnShiftCaps: "n", type: "typinKeys" },
    { code: "KeyM", keyRu: "ь", keyRuCaps: "Ь", keyRuShift: "Ь", keyRuShiftCaps: "ь", keyEn: "m", keyEnCaps: "M", keyEnShift: "M", keyEnShiftCaps: "m", type: "typinKeys" },
    { code: "Comma", keyRu: "б", keyRuCaps: "Б", keyRuShift: "Б", keyRuShiftCaps: "б", keyEn: ",", keyEnCaps: ",", keyEnShift: "<", keyEnShiftCaps: "<", type: "typinKeys" },
    { code: "Period", keyRu: "ю", keyRuCaps: "Ю", keyRuShift: "Ю", keyRuShiftCaps: "ю", keyEn: ".", keyEnCaps: ".", keyEnShift: ">", keyEnShiftCaps: ">", type: "typinKeys" },
    { code: "Slash", keyRu: ".", keyRuCaps: ".", keyRuShift: ",", keyRuShiftCaps: ",", keyEn: "/", keyEnCaps: "/", keyEnShift: "?", keyEnShiftCaps: "?", type: "typinKeys" },
    { code: "ArrowUp", keyRu: "▲", keyRuCaps: "▲", keyRuShift: "▲", keyRuShiftCaps: "▲", keyEn: "▲", keyEnCaps: "▲", keyEnShift: "▲", keyEnShiftCaps: "▲", type: "navigationKeys"},
    { code: "ShiftRight", keyRu: "Shift", keyRuCaps: "Shift", keyRuShiftCaps: "Shift", keyRuShift: "Shift", keyEn: "Shift", keyEnCaps: "Shift", keyEnShift: "Shift", keyEnShiftCaps: "Shift", type: "shiftRightKey" },
    { code: "ControlLeft", keyRu: "Ctrl", keyRuCaps: "Ctrl", keyRuShiftCaps: "Ctrl", keyRuShift: "Ctrl", keyEn: "Ctrl", keyEnCaps: "Ctrl", keyEnShift: "Ctrl", keyEnShiftCaps: "Ctrl", type: "ctrlLeftKey" },
    { code: "OSLeft", keyRu: "Win", keyRuCaps: "Win", keyRuShift: "Win", keyRuShiftCaps: "Win", keyEn: "Win", keyEnCaps: "Win", keyEnShift: "Win", keyEnShiftCaps: "Win", type: "controlKeys" },
    { code: "AltLeft", keyRu: "Alt", keyRuCaps: "Alt", keyRuShift: "Alt", keyRuShiftCaps: "Alt", keyEn: "Alt", keyEnCaps: "Alt", keyEnShift: "Alt", keyEnShiftCaps: "Alt", type: "controlKeys" },
    { code: "Space", keyRu: " ", keyRuCaps: " ", keyRuShift: " ", keyRuShiftCaps: " ", keyEn: " ", keyEnCaps: " ", keyEnShift: " ", keyEnShiftCaps: " ", type: "spaceKey" },
    { code: "AltRight", keyRu: "Alt", keyRuCaps: "Alt", keyRuShift: "Alt", keyRuShiftCaps: "Alt", keyEn: "Alt", keyEnCaps: "Alt", keyEnShift: "Alt", keyEnShiftCaps: "Alt", type: "controlKeys" },
    { code: "ArrowLeft", keyRu: "◄", keyRuCaps: "◄", keyRuShift: "◄", keyRuShiftCaps: "◄", keyEn: "◄", keyEnCaps: "◄", keyEnShift: "◄", keyEnShiftCaps: "◄", type: "navigationKeys" },
    { code: "ArrowDown", keyRu: "▼", keyRuCaps: "▼", keyRuShift: "▼", keyRuShiftCaps: "▼", keyEn: "▼", keyEnCaps: "▼", keyEnShift: "▼", keyEnShiftCaps: "▼", type: "navigationKeys" },
    { code: "ArrowRight", keyRu: "►", keyRuCaps: "►", keyRuShift: "►", keyRuShiftCaps: "►", keyEn: "►", keyEnCaps: "►", keyEnShift: "►", keyEnShiftCaps: "►", type: "navigationKeys" },
    { code: "ControlRight", keyRu: "Ctrl", keyRuCaps: "Ctrl", keyRuShift: "Ctrl", keyRuShiftCaps: "Ctrl", keyEn: "Ctrl", keyEnCaps: "Ctrl", keyEnShift: "Ctrl", keyEnShiftCaps: "Ctrl", type: "ctrlRightKey" }
];

if (!localStorage.getItem('inputLanguage')) {
    localStorage.setItem('inputLanguage', 'ru');
}

let createDom=()=> {
    document.body.insertAdjacentHTML('afterbegin', `<div class="container">
                                                        <h1 class="container__title">RSS Virtual Keyboard</h1>
                                                        <textarea autofocus class="container__text" id="text"></textarea>
                                                        <div class="container__keyboard" id="keyboard"></div>
                                                        <p class="container__description">Клавиатура создана в операционной системе Windows</p>
                                                        <p class="container__description">Для переключения языка необхоимо нажать: левые ctrl + alt</p>                      
                                                    </div>`);

    const KEYBOARD = document.querySelector('#keyboard');

    for (let i = 0; i < KEYS.length; i ++) {
      KEYBOARD.insertAdjacentHTML('beforeend', `<div class="key ${KEYS[i].type}" id="${KEYS[i].code}">
                                                    <span class="ru ${localStorage.getItem('inputLanguage') == 'en' ? 'hidden' : ''}" id="spanRu">
                                                        <span class="keylowerCase">${KEYS[i].keyRu}</span>
                                                        <span class="capsLock hidden">${KEYS[i].keyRuCaps}</span>
                                                        <span class="shift hidden">${KEYS[i].keyRuShift}</span>                                                            
                                                        <span class="shift-capsLock hidden">${KEYS[i].keyRuShiftCaps}</span>
                                                    </span>
                                                    <span class="en ${localStorage.getItem('inputLanguage') == 'ru' ? 'hidden' : ''}" id="spanEn">
                                                        <span class="keylowerCase">${KEYS[i].keyEn}</span>
                                                        <span class="capsLock hidden">${KEYS[i].keyEnCaps}</span>
                                                        <span class="shift hidden">${KEYS[i].keyEnShift}</span>                                                            
                                                        <span class="shift-capsLock hidden">${KEYS[i].keyEnShiftCaps}</span>
                                                    </span>
                                                </div>`);
    }
};
createDom();

const INPUT_FIELD = document.querySelector('#text');
const KEYBOARD = document.querySelector('#keyboard');
const SPAN_lOWER_CASE = document.querySelectorAll('.keylowerCase');
const SPAN_CAPS = document.querySelectorAll('.capsLock');
const SPAN_SHIFT = document.querySelectorAll('.shift');
const SPAN_SHIFT_CAPS = document.querySelectorAll('.shift-capsLock');
const SPAN_RU = document.querySelectorAll('#spanRu');
const SPAN_EN = document.querySelectorAll('#spanEn');
const CTRL_L = document.querySelector('#ControlLeft');

let text="";
let pressedCapsLock="false";
let pressedShift="false";

const SHIFT_LEFT=document.querySelector("#ShiftLeft");
const SHIFT_RIGHT=document.querySelector("#ShiftRight");

SHIFT_LEFT.addEventListener("mousedown", (event) => {
    let target=event.target.closest('div');
    target.classList.add('active');
    if (pressedCapsLock==="false") {
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.add('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.remove('hidden');
        }
    }
    else {
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.remove('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.add('hidden');
        }
    }
});

SHIFT_RIGHT.addEventListener("mousedown", (event) => {
    let target=event.target.closest('div');
    target.classList.add('active');
    if (pressedCapsLock==="false") {
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.add('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.remove('hidden');
        }
    }
    else {
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.remove('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.add('hidden');
        }
    }
});

SHIFT_LEFT.addEventListener("mouseup", (event) => {
    let target=event.target.closest('div');
    target.classList.remove('active');
    if (pressedCapsLock==="false") {        
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.remove('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.add('hidden');
        }
    }
    else {
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.add('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.remove('hidden');
        }
    }
});

SHIFT_RIGHT.addEventListener("mouseup", (event) => {
    let target=event.target.closest('div');
    target.classList.remove('active');
    if (pressedCapsLock==="false") {        
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.remove('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.add('hidden');
        }
    }
    else {
        for (let elem of SPAN_lOWER_CASE) {
            elem.classList.add('hidden');
        }
        for (let elem of SPAN_CAPS) {
            elem.classList.remove('hidden');
        }
    }
});


KEYBOARD.addEventListener("click", (event) => {
    let target=event.target.closest('div');
    let pressedKeyObj=KEYS.filter((elem) => elem.code===target.id);
    let textArr=Array.from(text);
    let startSelected=INPUT_FIELD.selectionStart;
    let endSelected=INPUT_FIELD.selectionEnd;

    if (target.id!=="keyboard") {
        let pressedKey=pressedKeyObj[0].type;
        switch (pressedKey) {
            case "capsLockKey":
                if (pressedCapsLock==="false") {
                    target.classList.add('activeCaps');
                    for (let elem of SPAN_lOWER_CASE) {
                        elem.classList.add('hidden');
                    }
                    for (let elem of SPAN_CAPS) {
                        elem.classList.remove('hidden');
                    }
                    pressedCapsLock="true";
                }
                else {
                    target.classList.remove('activeCaps');
                    for (let elem of SPAN_lOWER_CASE) {
                        elem.classList.remove('hidden');
                    }
                    for (let elem of SPAN_CAPS) {
                        elem.classList.add('hidden');
                    }
                    pressedCapsLock="false";
                }
                break;
            
            case "typinKeys":
            case "navigationKeys":
                textArr.splice(startSelected, endSelected-startSelected, target.innerText);
                text=textArr.join('');
                INPUT_FIELD.value=text;
                INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+1;
                break;
            
            case "spaceKey":
                textArr.splice(startSelected, endSelected-startSelected, " ");
                text=textArr.join('');
                INPUT_FIELD.value=text;
                INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+1;
                break;

            case "tabKey":
                textArr.splice(startSelected, endSelected-startSelected, "    ");
                text=textArr.join('');
                INPUT_FIELD.value=text;
                INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+4;
                INPUT_FIELD.focus();
                break;
        
            case "enterKey":
                textArr.splice(startSelected, endSelected-startSelected, "\n");
                text=textArr.join('');
                INPUT_FIELD.value=text;
                INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+1;
                INPUT_FIELD.focus();
                break;
            
            case "delKey":
                textArr.splice(startSelected, 1);
                text=textArr.join('');
                INPUT_FIELD.value=text;
                INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected;
                break;

            case "backspaceKeys":
                textArr.splice(startSelected-1, 1);
                text=textArr.join('');
                INPUT_FIELD.value=text;
                INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected-1;
                break;
        }
    }
})

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    let pressedKeyObj=KEYS.filter((elem) => elem.code===event.code);
    let pressedKey=document.querySelector("#"+event.code);
    pressedKey.classList.add('active');

    document.addEventListener("keyup", () => {
        pressedKey.classList.remove('active');
    });

    let textArr=Array.from(text);
    let startSelected=INPUT_FIELD.selectionStart;
    let endSelected=INPUT_FIELD.selectionEnd;

    let pressedKeyType=pressedKeyObj[0].type;
    switch (pressedKeyType) {
        case "capsLockKey":
            if (pressedCapsLock==="false") {
                pressedKey.classList.add('activeCaps');
                for (let elem of SPAN_lOWER_CASE) {
                    elem.classList.add('hidden');
                }
                for (let elem of SPAN_CAPS) {
                    elem.classList.remove('hidden');
                }
                pressedCapsLock="true";
            }
            else {
                pressedKey.classList.remove('activeCaps');
                for (let elem of SPAN_lOWER_CASE) {
                    elem.classList.remove('hidden');
                }
                for (let elem of SPAN_CAPS) {
                    elem.classList.add('hidden');
                }
                pressedCapsLock="false";
            }
            break;
        
        case "typinKeys":
        case "navigationKeys":
            textArr.splice(startSelected, endSelected-startSelected, pressedKey.innerText);
            text=textArr.join('');
            INPUT_FIELD.value=text;
            INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+1;
            break;
        
        case "spaceKey":
            textArr.splice(startSelected, endSelected-startSelected, " ");
            text=textArr.join('');
            INPUT_FIELD.value=text;
            INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+1;
            break;

        case "tabKey":
            textArr.splice(startSelected, endSelected-startSelected, "    ");
            text=textArr.join('');
            INPUT_FIELD.value=text;
            INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+4;
            INPUT_FIELD.focus();
            break;
    
        case "enterKey":
            textArr.splice(startSelected, endSelected-startSelected, "\n");
            text=textArr.join('');
            INPUT_FIELD.value=text;
            INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected+1;
            INPUT_FIELD.focus();
            break;
        
        case "delKey":
            textArr.splice(startSelected, 1);
            text=textArr.join('');
            INPUT_FIELD.value=text;
            INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected;
            break;

        case "backspaceKeys":
            textArr.splice(startSelected-1, 1);
            text=textArr.join('');
            INPUT_FIELD.value=text;
            INPUT_FIELD.selectionStart = INPUT_FIELD.selectionEnd = startSelected-1;
            break;

        case "shiftKey":
        case "shiftRightKey":
            if (pressedCapsLock=="false") {
                for (let elem of SPAN_lOWER_CASE) {
                    elem.classList.add('hidden');
                }
                for (let elem of SPAN_CAPS) {
                    elem.classList.remove('hidden');
                }
            }
            else {
                for (let elem of SPAN_lOWER_CASE) {
                    elem.classList.remove('hidden');
                }
                for (let elem of SPAN_CAPS) {
                    elem.classList.add('hidden');
                }
            }
            document.addEventListener("keyup", (event) => {
                if (event.code=="ShiftLeft" || event.code=="ShiftRight") {
                    if (pressedCapsLock==="false") {        
                        for (let elem of SPAN_lOWER_CASE) {
                            elem.classList.remove('hidden');
                        }
                        for (let elem of SPAN_CAPS) {
                            elem.classList.add('hidden');
                        }
                    }
                    else {
                        for (let elem of SPAN_lOWER_CASE) {
                            elem.classList.add('hidden');
                        }
                        for (let elem of SPAN_CAPS) {
                            elem.classList.remove('hidden');
                        }
                    }
                }
            })
            break;

            case "ctrlLeftKey":
                event.preventDefault();
                if (event.repeat) {
                    return;
                }
                document.onkeyup = (event) => {                    
                    event.preventDefault();
                    if (event.code==="AltLeft" && localStorage.getItem("inputLanguage")==="ru") {
                        localStorage.setItem("inputLanguage", "en");
                        for (let elem of SPAN_RU) {
                            elem.classList.add('hidden');
                        }
                        for (let elem of SPAN_EN) {
                            elem.classList.remove('hidden');
                        }
                    }
                    else if (event.code==="AltLeft" && localStorage.getItem("inputLanguage")==="en") {
                        localStorage.setItem("inputLanguage", "ru");
                        for (let elem of SPAN_RU) {
                            elem.classList.remove('hidden');
                        }
                        for (let elem of SPAN_EN) {
                            elem.classList.add('hidden');
                        }
                    }
                    pressedKey.classList.remove('active');
                };
                break;
    }
})
