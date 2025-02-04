
document.querySelector('.ctabutton').addEventListener('click',
function(){
        alert('Starting now...');
});


document.querySelector('.contact').addEventListener('click',
function(){
    alert('Redirecting to contact page...')
}); 

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('in-view');
            
            if (entry.target.classList.contains('slide-left')) {
                entry.target.classList.add('slide-left');
            } else if (entry.target.classList.contains('slide-right')) {
                entry.target.classList.add('slide-right');
            } else if (entry.target.classList.contains('slide-top')) {
                entry.target.classList.add('slide-top');
            } else if (entry.target.classList.contains('slide-bottom')) {
                entry.target.classList.add('slide-bottom');
            }
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});


const animatedElements = document.querySelectorAll('.animated');
animatedElements.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.milestoneitem, .hero2 li, .hero3image, .hero3text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view', entry.target.classList.contains('milestoneitem') ? 'slide-left' : 'slide-right');
            }
        });
    }, { threshold: 0.5 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
