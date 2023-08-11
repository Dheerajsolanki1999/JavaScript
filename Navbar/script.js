const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.link');
const navbar = document.querySelector('.navbar');

//------Observing Active Section Details ------//
const Obcallback = function(entries,Observer)
{
    const array = entries;
    const active_section = array.find(section=>section.isIntersecting==true).target.classList[0];
    console.log(active_section);
    const clicked = Array.from(links).find(link => link.classList.contains('active-link'));
    console.log(clicked);
    clicked.classList.remove('active-link');
    clicked.style.color='#7A7A7A';

    document.querySelector(`.link-${active_section}`).classList.add('active-link');
    document.querySelector(`.link-${active_section}`).style.color='white';
};

const Oboptions = {
    root:null,
    threshold:0.6,
};

const Observer = new IntersectionObserver(Obcallback,Oboptions);
sections.forEach(function(section){
    Observer.observe(section);
});


//-------MouseOver and MouseOut movements on Navbar Links------//

navbar.addEventListener('mouseover',function(e){
    const link_target = e.target.closest('.link');
    if(!link_target || link_target.classList.contains('active-link')) return;

    link_target.style.color = 'white';
});

navbar.addEventListener('mouseout',function(e){
    const link_target = e.target.closest('.link');
    if(!link_target || link_target.classList.contains('active-link')) return;

    link_target.style.color='#7A7A7A';
});


//------1.Adding Active-link class on clicking Navbar links-------//
//------2.Scroll on clicking Navbar links-------//

navbar.addEventListener('click',function(e){
    e.preventDefault();

    //1
    const clicked = e.target.closest('.link');
    if(!clicked || clicked.classList.contains('active-link')) return;

    const active_link = Array.from(links).find(link=>link.classList.contains('active-link'));
    console.log(active_link);

    active_link.style.color = '#7A7A7A';
    active_link.classList.remove('active-link');

    clicked.classList.add('active-link');

    //2
    const jump_to = clicked.classList[0].split('-')[1];
    const jump_to_details = document.querySelector(`.${jump_to}`).getBoundingClientRect();
    console.log(jump_to_details);

    window.scroll({
        top: (jump_to_details.height*clicked.dataset.tab),
        behavior:'smooth',
    });
    
});

