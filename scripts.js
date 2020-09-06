document.getElementById('email').addEventListener('click',
    function() {
        document.querySelector('.overlay').style.display = 'flex';
        // document.querySelector('.overlay').style['pointer-events'] = 'all';
});

document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.overlay').style.display = 'none';
        // document.querySelector('.overlay').style['pointer-events'] = 'none';
});

// document.querySelector('.overlay').addEventListener('click',
//     function() {
//         document.querySelector('.overlay').style.display = 'none';
//         document.querySelector('.overlay').style['pointer-events'] = 'none';
//     }
// )