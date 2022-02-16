var $loader = document.querySelector('.loader');

window.onload = function () {
    $loader.classList.remove('loader--active')
};

document.querySelector('#aStart').addEventListener('click', function () {
    playAudio('sound/SFX_SLOTS_NEW_SPIN.mp3');
    $loader.classList.add('loader--active')
    window.setTimeout(function () {
        document.location.href = 'gamePlay_v2.html'
    }, 3000);
    // window.setTimeout(function () {
    //     $loader.classList.remove('loader--active')
    // }, 5000);

})
