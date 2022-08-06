$(document).ready(function () {
    var items = [...document.querySelectorAll('.aos-init')]

    var options = {
        rootMargin: "1000px 0px 0px 0px", // 1000px to make sure you don't see the animations trigger when scroll upwards
        threshold: 0
    }
    var setItemActive = (entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate')
            }
            else {
                entry.target.classList.remove('aos-animate')
            }
        });
    })

    var observer = new IntersectionObserver(setItemActive, options)

    items.forEach(item => {
        observer.observe(item)
    })
});