/* ?????? ?? if
???? ????????????? ?????????? count - ?????????? ?????? ???????.? ??????????? ?? ???????? ???? ?????????? ??????? ? ??????? ??????:
100 - 90 ?????????? ??????? - ???????
89 - 60 ?????????? ??????? - ??????
59 - 40 ?????????? ??????? - ?????????????????
39 - 0 ?????????? ??????? - ?????????? ??? ??? */

'use strict';

let count = prompt("??????? ?????????? ?????????? ???????");
if (count >= 90 && count <= 100) {
    console.log("???????");
}
else if (count >= 60 && count <= 89) {
    console.log("??????");
}
else if (count >= 40 && count <= 59) {
    console.log("?????????????????");
}
else if (count >= 0 && count <= 39) {
    console.log("?????????? ??? ???");
}