/*const sections = document.querySelectorAll('.section'); //select everything with class section
const sectBtns = document.querySelectorAll('.controls'); //parent button
const sectBtn = document.querySelectorAll('.control'); //button control
const allSections = document.querySelector('.main-content'); //Body class of main content


function PageTranstions()
{
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '');
            this.className += ' active-btn';
        })
    }
  //Sections Active
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        //remove selected from other
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide other section 
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
  })
}

PageTranstions();*/
const sections = document.querySelectorAll('.section'); // Select all sections
const sectBtns = document.querySelector('.controls'); // Parent element of buttons
const sectBtn = document.querySelectorAll('.control'); // Individual buttons
const allSections = document.querySelector('.main-content'); // Body class of main content

function PageTransitions() {
    // Button click active class
    sectBtn.forEach(button => {
        button.addEventListener('click', function() {
            const currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    });

    // Sections Active
    allSections.addEventListener('click', e => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove 'active' from other buttons
            sectBtn.forEach(button => {
                button.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransitions();
