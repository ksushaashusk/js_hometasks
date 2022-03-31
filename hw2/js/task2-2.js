// Задача на switch
/* Даны переменные: sum - сумма покупки и code номер купона.Если code равен 4653 - скидка 30 %, если code равен 5698 или 5111 - скидка 20 %, если code равен 6922, 
 6113 или 6099 - скидка 10 %.В остальных случаях скидка не предусмотрена.Необходимо вывести сумму к оплате с учетом скидки. */

'use strict';

let sum = 15632;
let code = prompt("Введите номер купона");
switch (code) {
    case '4653':
        alert(sum - sum * 30 / 100);
        break;
    case '5698':
    case '5111':
        alert(sum - sum * 20 / 100);
        break;
    case '6922':
    case '6113':
    case '6099':
        alert(sum - sum * 10 / 100);
        break;
    default:
        alert(sum);
        }







