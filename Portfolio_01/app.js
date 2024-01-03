const sections = document.querySelectorAll('.section'); //select everything with class section
const sectBtns = document.querySelectorAll('.controls'); //parent button
const sectBtn = document.querySelectorAll('.control'); //button control
const allSections = document.querySelector('.main-content'); //Body class of main content


function PageTranstions()
{
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
  //Sections Active
  allSections.addEventListener('click', (e) =>{
    //console.log(e.target);
    const id = e.target.dataset.id;
    if(id){
        //remove selected from the other btns
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide4 other sections 
        sections.forEach((section)=>{
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
  })
}

PageTranstions();
