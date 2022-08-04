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
        $('#grow .bg-cards h3 span').removeClass('active');
        $('#grow .bg-cards .dream-pic img').get(j % 2).classList.add('active');
        $('#grow .bg-cards h3 span').get(j % 2).classList.add('active');
    }, 5000);
    $('section.accordion').each(function () {
        accordion(this, 100)
    })
    function accordion(elem, time) {
        [...elem.children].forEach((list, index) => {
            list.querySelector('span').addEventListener('click', () => {
                if (list.classList.contains('active') == false) {
                    [...elem.children].forEach(child => {
                        $(child.querySelector('ul')).slideUp(time)
                        child.classList.remove('active')
                    })
                    $(list.querySelector('ul')).slideDown(time)
                    list.classList.add('active')
                }
                else {
                    $(list.querySelector('ul')).slideUp(time)
                    list.classList.remove('active')
                }
            })
        })

    }
});