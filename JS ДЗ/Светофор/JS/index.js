const btnNode = document.querySelector('.js-btn');
const svetnode = document.querySelector('.js-svet');

initLight(svetnode);

btnNode.addEventListener('click', function() {
    switchLight(svetnode);
});