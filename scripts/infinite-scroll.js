let items = [...document.querySelector('.slider').querySelectorAll('li')]

let options = {
    rootMargin: '20px',
    threshold: 0
}

let setItemActive = (entries => {
    entries.forEach(entry => {
        /*console.log(entry.boundingClientRect)
        if (entry.boundingClientRect.x <= -250) {
            console.log('sdfs')
            entry.target.style.order = '1'
        }
        /*else {
            setTimeout(() => {
                entry.target.style.order = null
            }, 500)
        }
        /*if (entry.isIntersecting) {
            //console.log(entry)
            setTimeout(() => {
                //entry.target.style.order = null
            }, 1000)
        }*/
    })
})

let observer = new IntersectionObserver(setItemActive, options)

items.forEach((item, index) => {
    observer.observe(item)
    console.log(item)
})