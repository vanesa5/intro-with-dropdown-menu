// Hamburger Menu
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// Drop Down Menu
const companyTab = document.querySelector('.company');
const companyDropDown = document.getElementById('company-menu')
const featuresMenu = document.querySelector('.features')
const featuresDropDown = document.getElementById('features-menu')


// f-ham Menu
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// f-dropdown menus
companyTab.addEventListener('click', () => {
    console.log("Company")
        if (companyDropDown.style.display === 'block'){
            companyDropDown.style.display = 'none';
        } else {
            companyDropDown.style.display = 'block';

        }
    })

featuresMenu.addEventListener('click', () => {
    console.log("featues")
    if (featuresDropDown.style.display === 'block'){
        featuresDropDown.style.display = 'none';
    } else {
        featuresDropDown.style.display = 'block';

    }    })