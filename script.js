const KEYS = [
    { code: "Backquote", keyRu: "ё", keyRuCaps: "Ё", keyRuShift: "Ё", keyEn: "`", keyEnCaps: "`", keyEnShift: "~", type: "typinKeys"},
    { code: "Digit1", keyRu: "1", keyRuCaps: "1", keyRuShift: "!", keyEn: "1" , keyEnCaps: "1", keyEnShift: "!", type: "typinKeys" },
    { code: "Digit2", keyRu: "2", keyRuCaps: "2", keyRuShift: "\"", keyEn: "2", keyEnCaps: "2", keyEnShift: "@", type: "typinKeys" },
    { code: "Digit3", keyRu: "3", keyRuCaps: "3", keyRuShift: "№", keyEn: "3", keyEnCaps: "3", keyEnShift: "#", type: "typinKeys" },
    { code: "Digit4", keyRu: "4", keyRuCaps: "4", keyRuShift: "%", keyEn: "4", keyEnCaps: "4", keyEnShift: "$", type: "typinKeys" },
    { code: "Digit5", keyRu: "5", keyRuCaps: "5", keyRuShift: ":", keyEn: "5", keyEnCaps: "5", keyEnShift: "", type: "typinKeys" },
    { code: "Digit6", keyRu: "6", keyRuCaps: "6", keyRuShift: ":", keyEn: "6", keyEnCaps: "6", keyEnShift: "^", type: "typinKeys" },
    { code: "Digit7", keyRu: "7", keyRuCaps: "7", keyRuShift: "?", keyEn: "7", keyEnCaps: "7", keyEnShift: "&", type: "typinKeys" },
    { code: "Digit8", keyRu: "8", keyRuCaps: "8", keyRuShift: "*", keyEn: "8", keyEnCaps: "8", keyEnShift: "*", type: "typinKeys" },
    { code: "Digit9", keyRu: "9", keyRuCaps: "9", keyRuShift: "(", keyEn: "9", keyEnCaps: "9", keyEnShift: "(", type: "typinKeys" },
    { code: "Digit0", keyRu: "0", keyRuCaps: "0", keyRuShift: ")", keyEn: "0", keyEnCaps: "0", keyEnShift: ")", type: "typinKeys" },
    { code: "Minus", keyRu: "-", keyRuCaps: "-", keyRuShift: "_", keyEn: "-", keyEnCaps: "-", keyEnShift: "_" , type: "typinKeys"},
    { code: "Equal", keyRu: "=", keyRuCaps: "=", keyRuShift: "+", keyEn: "=", keyEnCaps: "=", keyEnShift: "+", type: "typinKeys" },
    { code: "Backspace", keyRu: "Backspace", keyRuCaps: "Backspace", keyRuShift: "Backspace", keyEn: "Backspace", keyEnCaps: "Backspace", keyEnShift: "Backspace", type: "backspaceKeys" },
    { code: "Tab", keyRu: "Tab", keyRuCaps: "Tab", keyRuShift: "Tab", keyEn: "Tab", keyEnCaps: "Tab", keyEnShift: "Tab", type: "tabKey" },
    { code: "KeyQ", keyRu: "й", keyRuCaps: "Й", keyRuShift: "Й", keyEn: "q", keyEnCaps: "Q", keyEnShift: "Q", type: "typinKeys" },
    { code: "KeyW", keyRu: "ц", keyRuCaps: "Ц", keyRuShift: "Ц", keyEn: "w", keyEnCaps: "W", keyEnShift: "W", type: "typinKeys" },
    { code: "KeyE", keyRu: "у", keyRuCaps: "У", keyRuShift: "У", keyEn: "e", keyEnCaps: "E", keyEnShift: "E", type: "typinKeys"},
    { code: "KeyR", keyRu: "к", keyRuCaps: "К", keyRuShift: "К", keyEn: "r", keyEnCaps: "R", keyEnShift: "R", type: "typinKeys" },
    { code: "KeyT", keyRu: "е", keyRuCaps: "Е", keyRuShift: "Е", keyEn: "t", keyEnCaps: "T", keyEnShift: "T", type: "typinKeys" },
    { code: "KeyY", keyRu: "н", keyRuCaps: "Н", keyRuShift: "Н", keyEn: "y", keyEnCaps: "Y", keyEnShift: "Y", type: "typinKeys" },
    { code: "KeyU", keyRu: "г", keyRuCaps: "Г", keyRuShift: "Г", keyEn: "u", keyEnCaps: "U", keyEnShift: "U", type: "typinKeys" },
    { code: "KeyI", keyRu: "ш", keyRuCaps: "Ш", keyRuShift: "Ш", keyEn: "i", keyEnCaps: "I", keyEnShift: "I", type: "typinKeys" },
    { code: "KeyO", keyRu: "щ", keyRuCaps: "Щ", keyRuShift: "Щ", keyEn: "o", keyEnCaps: "O", keyEnShift: "O", type: "typinKeys" },
    { code: "KeyP", keyRu: "з", keyRuCaps: "З", keyRuShift: "З", keyEn: "p", keyEnCaps: "P", keyEnShift: "P", type: "typinKeys" },
    { code: "BracketLeft", keyRu: "х", keyRuCaps: "Х", keyRuShift: "Х", keyEn: "[", keyEnCaps: "[", keyEnShift: "{", type: "typinKeys"},
    { code: "BracketRight", keyRu: "ъ", keyRuCaps: "Ъ", keyRuShift: "Ъ", keyEn: "]", keyEnCaps: "[", keyEnShift: "}", type: "typinKeys" },
    { code: "Backslash", keyRu: "\\", keyRuCaps: "\\", keyRuShift: "\/", keyEn: "\\", keyEnCaps: "\\", keyEnShift: "|", type: "typinKeys" },
    { code: "Delete", keyRu: "Del", keyRuCaps: "Del", keyRuShift: "Del", keyEn: "Del", keyEnCaps: "Del", keyEnShift: "Del", type: "delKey" },
    { code: "CapsLock", keyRu: "CapsLock", keyRuCaps: "CapsLock", keyRuShift: "CapsLock", keyEn: "CapsLock", keyEnCaps: "CapsLock", keyEnShift: "CapsLock", type: "capsLockKey" },
    { code: "KeyA", keyRu: "ф", keyRuCaps: "Ф", keyRuShift: "Ф", keyEn: "a", keyEnCaps: "A", keyEnShift: "A", type: "typinKeys" },
    { code: "KeyS", keyRu: "ы", keyRuCaps: "Ы", keyRuShift: "Ы", keyEn: "s", keyEnCaps: "S", keyEnShift: "S", type: "typinKeys" },
    { code: "KeyD", keyRu: "в", keyRuCaps: "В", keyRuShift: "В", keyEn: "d", keyEnCaps: "D", keyEnShift: "D", type: "typinKeys" },
    { code: "KeyF", keyRu: "а", keyRuCaps: "А", keyRuShift: "А", keyEn: "f", keyEnCaps: "F", keyEnShift: "F", type: "typinKeys" },
    { code: "KeyG", keyRu: "п", keyRuCaps: "П", keyRuShift: "П", keyEn: "g", keyEnCaps: "G", keyEnShift: "G", type: "typinKeys" },
    { code: "KeyH", keyRu: "р", keyRuCaps: "Р", keyRuShift: "Р", keyEn: "h", keyEnCaps: "H", keyEnShift: "H", type: "typinKeys" },
    { code: "KeyJ", keyRu: "о", keyRuCaps: "О", keyRuShift: "О", keyEn: "j", keyEnCaps: "J", keyEnShift: "J", type: "typinKeys" },
    { code: "KeyK", keyRu: "л", keyRuCaps: "Л", keyRuShift: "Л", keyEn: "k", keyEnCaps: "K", keyEnShift: "K", type: "typinKeys" },
    { code: "KeyL", keyRu: "д", keyRuCaps: "Д", keyRuShift: "Д", keyEn: "l", keyEnCaps: "L", keyEnShift: "L", type: "typinKeys" },
    { code: "Semicolon", keyRu: "ж", keyRuCaps: "Ж", keyRuShift: "Ж", keyEn: ";", keyEnCaps: ";", keyEnShift: "\"", type: "typinKeys" },
    { code: "Quote", keyRu: "э", keyRuCaps: "Э", keyRuShift: "Э", keyEn: "'", keyEnCaps: "'", keyEnShift: "\"", type: "typinKeys" },
    { code: "Enter", keyRu: "Enter", keyRuCaps: "Enter", keyRuShift: "Enter", keyEn: "Enter", keyEnCaps: "Enter", keyEnShift: "Enter", type: "enterKey" },
    { code: "ShiftLeft", keyRu: "Shift", keyRuCaps: "Shift", keyRuShift: "Shift", keyEn: "Shift", keyEnCaps: "Shift", keyEnShift: "Shift", type: "shiftKey" },
    { code: "KeyZ", keyRu: "я", keyRuCaps: "Я", keyRuShift: "Я", keyEn: "z", keyEnCaps: "Z", keyEnShift: "Z", type: "typinKeys" },
    { code: "KeyX", keyRu: "ч", keyRuCaps: "Ч", keyRuShift: "Ч", keyEn: "x", keyEnCaps: "X", keyEnShift: "X", type: "typinKeys" },
    { code: "KeyC", keyRu: "с", keyRuCaps: "С", keyRuShift: "С", keyEn: "c", keyEnCaps: "C", keyEnShift: "C", type: "typinKeys" },
    { code: "KeyB", keyRu: "м", keyRuCaps: "М", keyRuShift: "М", keyEn: "v", keyEnCaps: "V", keyEnShift: "V", type: "typinKeys" },
    { code: "KeyN", keyRu: "и", keyRuCaps: "И", keyRuShift: "И", keyEn: "b", keyEnCaps: "B", keyEnShift: "B", type: "typinKeys" },
    { code: "KeyN", keyRu: "т", keyRuCaps: "Т", keyRuShift: "Т", keyEn: "n", keyEnCaps: "N", keyEnShift: "N", type: "typinKeys" },
    { code: "KeyM", keyRu: "ь", keyRuCaps: "Ь", keyRuShift: "Ь", keyEn: "m", keyEnCaps: "M", keyEnShift: "M", type: "typinKeys" },
    { code: "Comma", keyRu: "б", keyRuCaps: "Б", keyRuShift: "Б", keyEn: ",", keyEnCaps: ",", keyEnShift: "<", type: "typinKeys" },
    { code: "Period", keyRu: "ю", keyRuCaps: "Ю", keyRuShift: "Ю", keyEn: ".", keyEnCaps: ".", keyEnShift: ">", type: "typinKeys" },
    { code: "Slash", keyRu: ".", keyRuCaps: ".", keyRuShift: ",", keyEn: "/", keyEnCaps: "/", keyEnShift: "?", type: "typinKeys" },
    { code: "ArrowUp", keyRu: "▲", keyRuCaps: "▲", keyRuShift: "▲", keyEn: "▲", keyEnCaps: "▲", keyEnShift: "▲", type: "navigationKeys"},
    { code: "ShiftRight", keyRu: "Shift", keyRuCaps: "Shift", keyRuShift: "Shift", keyEn: "Shift", keyEnCaps: "Shift", keyEnShift: "Shift", type: "shiftRightKey" },
    { code: "ControlLeft", keyRu: "Ctrl", keyRuCaps: "Ctrl", keyRuShift: "Ctrl", keyEn: "Ctrl", keyEnCaps: "Ctrl", keyEnShift: "Ctrl", type: "controlKeys" },
    { code: "OSLeft", keyRu: "Win", keyRuCaps: "Win", keyRuShift: "Win", keyEn: "Win", keyEnCaps: "Win", keyEnShift: "Win", type: "controlKeys" },
    { code: "AltLeft", keyRu: "Alt", keyRuCaps: "Alt", keyRuShift: "Alt", keyEn: "Alt", keyEnCaps: "Alt", keyEnShift: "Alt", type: "controlKeys" },
    { code: "Space", keyRu: " ", keyRuCaps: " ", keyRuShift: " ", keyEn: " ", keyEnCaps: " ", keyEnShift: " ", type: "spaceKey" },
    { code: "AltRight", keyRu: "Alt", keyRuCaps: "Alt", keyRuShift: "Alt", keyEn: "Alt", keyEnCaps: "Alt", keyEnShift: "Alt", type: "controlKeys" },
    { code: "ArrowLeft", keyRu: "◄", keyRuCaps: "◄", keyRuShift: "◄", keyEn: "◄", keyEnCaps: "◄", keyEnShift: "◄", type: "navigationKeys" },
    { code: "ArrowDown", keyRu: "▼", keyRuCaps: "▼", keyRuShift: "▼", keyEn: "▼", keyEnCaps: "▼", keyEnShift: "▼", type: "navigationKeys" },
    { code: "ArrowRight", keyRu: "►", keyRuCaps: "►", keyRuShift: "►", keyEn: "►", keyEnCaps: "►", keyEnShift: "►", type: "navigationKeys" },
    { code: "ControlRight", keyRu: "Ctrl", keyRuCaps: "Ctrl", keyRuShift: "Ctrl", keyEn: "Ctrl", keyEnCaps: "Ctrl", keyEnShift: "Ctrl", type: "controlRightKeys" }
];

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} 

function createDom () {
    document.body.insertAdjacentHTML('afterbegin', `<div class="container">
                                                        <h1 class="container__title">RSS Virtual Keyboard</h1>
                                                        <textarea autofocus class="container__text"></textarea>
                                                        <div class="container__keyboard" id="keyboard"></div>
                                                        <p class="container__description">Клавиатура создана в операционной системе Windows</p>
                                                        <p class="container__description">Для переключения языка необхоимо нажать: левые shift + alt</p>                      
                                                    </div>`);

    const KEYBOARD = document.querySelector('#keyboard');

    for (let i = 0; i < KEYS.length; i ++) {
      KEYBOARD.insertAdjacentHTML('beforeend', `<div class="key ${KEYS[i].type}">
                                                    <span class="ru ${localStorage.getItem('lang') === 'en' ? 'hidden' : ''}">
                                                        <span class="keylowerCase">${KEYS[i].keyRu}</span>
                                                        <span class="capsLock hidden">${KEYS[i].keyRuCaps}</span>
                                                        <span class="shift hidden">${KEYS[i].keyRuShift}</span>                                                            
                                                        <span class="shift-capsLock hidden">${KEYS[i].keyRu}</span>
                                                    </span>
                                                    <span class="en hidden">
                                                        <span class="keylowerCase">${KEYS[i].keyEn}</span>
                                                        <span class="capsLock hidden">${KEYS[i].keyEnCaps}</span>
                                                        <span class="shift hidden">${KEYS[i].keyEnShift}</span>                                                            
                                                        <span class="shift-capsLock hidden">${KEYS[i].keyEn}</span>
                                                    </span>
                                                </div>`);
    }
  };
  createDom();


