/* Funcion animacion por scrolling
*/

const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('a-show');
        }else{
            entry.target.classList.remove('a-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.a-hidden');
hiddenElements.forEach((el) => observer.observe(el));