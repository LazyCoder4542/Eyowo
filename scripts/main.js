$(document).ready(function () {
    $('#hamburger').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open')
    });
    let i = 0
    setInterval(() => {
        i++;
        $('#intro .tagline ul li').removeClass('active');
        $('#intro .tagline ul li').get(i % 7).classList.add('active');
    }, 2000);
    let j = 0
    setInterval(() => {
        j++;
        $('#grow .bg-cards .dream-pic img').removeClass('active');
        $('#grow .bg-cards .dream-pic img').get(j % 2).classList.add('active');
    }, 5000);

    accordion($('section.accordion')[0])
    function accordion(elem) {
        //document.querySelector().childre
        [...elem.children].forEach((list, index) => {
            list.querySelector('span').addEventListener('click', () => {
                if (list.classList.contains('active') == false) {
                    [...elem.children].forEach(child => {
                        child.classList.remove('active')
                    })
                    list.classList.add('active')
                }
                else {
                    list.classList.remove('active')
                }
            })
        })

    }
});