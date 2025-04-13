let slide = document.querySelector('.slide');

// Optional Auto Flow (every 3s)
let autoSlide = setInterval(() => {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
}, 3000);

// Pause auto-slide on hover
slide.addEventListener('mouseenter', () => clearInterval(autoSlide));
slide.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]);
    }, 4000);
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})