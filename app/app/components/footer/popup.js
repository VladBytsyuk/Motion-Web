// const callback = angular.element('callback_btn');

// const callbackAction = new function() {
//     const popup = angular.element('popup');

//     const nameField = angular.element('fname');
//     const phoneField = angular.element('fnumber');
//     const adressField = angular.element('fadress');
//     const submit = angular.element('popup_btn');
//     const infoBlock = angular.element('footer_info');

//     function open() {
//         nameField.value = '';
//         phoneField.value = '';
//         adressField.value = '';
//         popup.style.visibility = 'visible';
//         popup.style.opacity = 1;
//     }

//     function close() {
//         popup.style.visibility = 'hidden';
//         popup.style.opacity = 0;
//     }

//     function send(userInfo) {
//         close();
//     }

//     submit.addEventListener('click', function() {
//         const nameRegEp = /^[a-zA-Z]{2,30}$/;
//         const phoneRegExp = /^[0-9]{7,16}$/;
//         const adressRegExp = /\S+@\S+\.\S+/;
//         let isBreak = false;
//         const userInfo = {
//             name: nameField.value,
//             phone: phoneField.value,
//             adress: adressField.value
//         }
//         nameField.style.borderColor = '#232324';
//         phoneField.style.borderColor = '#232324';
//         adressField.style.borderColor = '#232324';
        
//         if (nameField.value === '' || !nameField.value.match(nameRegEp)) {
//             nameField.style.borderColor = '#eb4f4e';
//             isBreak = true;
//         }
//         if (phoneField.value === '' || !phoneField.value.match(phoneRegExp)) {
//             phoneField.style.borderColor = '#eb4f4e';
//             isBreak = true;
//         }
//         if (adressField.value === '' || !adressField.value.match(adressRegExp)) {
//             adressField.style.borderColor = '#eb4f4e';
//             isBreak = true;
//         }
//         if (isBreak) {
//             return;
//         }

//         send(userInfo);
//     });

//     return {
//         open : open,
//         close: close,
//         nameField: nameField.value,
//         phoneField: phoneField.value,
//         adressField: adressField.value
//     }
// };

// callback.addEventListener('click', callbackAction.open);