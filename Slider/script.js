const left_button = document.querySelector('.left');
const right_button = document.querySelector('.right');
const images = document.querySelectorAll('.image');

const btn = document.querySelectorAll('.btn');
const dots = document.querySelector('.dots');

let cur_slide = 1;
const max_slide = images.length;

const update_bottom_buttons = slide =>
{
    btn.forEach(button=>{
        button.classList.remove('active-btn');
    });
    document.querySelector(`.slider-${slide}`).classList.add('active-btn');
    document.querySelector(`.slider-${slide}`).classList.add('transition');
}

right_button.addEventListener('click',function()
{

    if(cur_slide<max_slide)
    {
        images.forEach(function(image,i)
        {
            image.style.transform = `translateX(${100*(i-cur_slide)}%)`;
            image.classList.add('transition');
        },0);
        cur_slide++;
        update_bottom_buttons(cur_slide);
    }
    else 
    {
        cur_slide=1;
        images.forEach(function(image,i)
        {
            image.style.transform = `translateX(${100*i}%)`;
            image.classList.add('transition');
        },0);
        update_bottom_buttons(cur_slide);
    }
});

left_button.addEventListener('click', function() 
{
        if (cur_slide > 1) 
        {
            images.forEach(function(image, i) {
                image.style.transform = `translateX(${100*(i-(cur_slide-2))}%)`;
                image.classList.add('transition');
            });
            cur_slide--;
            update_bottom_buttons(cur_slide);
        }
        else 
        {
            cur_slide=4;
            images.forEach(function(image, i) 
            {
                image.style.transform = `translateX(${100*(i-(cur_slide-1))}%)`;
                image.classList.add('transition');
            });
            update_bottom_buttons(cur_slide);
        }
});

dots.addEventListener('click',function(e)
{
    const clicked_dot = e.target.closest('.btn');
    if(!clicked_dot) return;

    images.forEach(function(image,i)
    {
        image.style.transform = `translateX(${100*(i-(clicked_dot.dataset.tab-1))}%)`;
        image.classList.add('transition');
    },0);
    cur_slide = clicked_dot.dataset.tab;
    update_bottom_buttons(cur_slide);
});

