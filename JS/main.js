function on() {
    document.querySelector('.room').style.backgroundColor = 'yellow';
    document.querySelector('.room').style.transition = 'all 0.5s';
    document.querySelector('.on button').style.color = 'green';
    document.querySelector('.off button').style.color = '#d8d1cd';
    document.querySelector('.fa-solid').style.color = '#d8d907';
}
function off() {
    document.querySelector('.room').style.backgroundColor = '#858282';
    document.querySelector('.on button').style.color = '#FDDAB0';
    document.querySelector('.off button').style.color = 'red';
    document.querySelector('.fa-solid').style.color = '#BABABA';
}