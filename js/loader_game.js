var $loader = document.querySelector('.loader');

window.onload = function () {
    $loader.classList.remove('loader--active')
};

document.querySelector('#leaveGame').addEventListener('click', function () {
    $loader.classList.add('loader--active')
    window.setTimeout(function () {
        document.location.href = 'index.html'
    }, 3000);

})
