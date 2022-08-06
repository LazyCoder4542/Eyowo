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
    const desktopView = matchMedia('(min-width: 960px)')
    mv(desktopView)
    desktopView.addListener(mv)
    function mv(x) {
        if (x.matches) {
            console.log('desktop')
            $('section.accordion div span').each(function () {
                $(this).replaceWith(this.cloneNode(true));  //removes the event listeners
            })
            /*$('section.accordion div').each(function () {
                $(this).mouseover(function () {
                    //$('section.accordion div ul').css({ display: 'none' })
                    $(this.querySelector('ul')).finish().css({ display: 'grid' }).animate({ opacity: '1' }, 500)
                });
            })
            $('section.accordion div').each(function () {
                $(this).mouseout(function () {
                    $(this.querySelector('ul')).finish().delay(1000).animate({ opacity: '0' }, 500).css({ display: 'none' })
                });
            })*/
        }
        else {
            $('section.accordion div span').each(function () {
                $(this).replaceWith(this.cloneNode(true));  //removes the event listeners
            })
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
        }
    }
});