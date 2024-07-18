const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// Drop Down Menu
const companyTab = document.querySelector('.company');
const companyDropDown = document.getElementById('company-menu')
const featuresMenu = document.querySelector('.features')
const featuresDropDown = document.getElementById('features-menu')



hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

companyTab.addEventListener('click', () => {
console.log("Company")
    companyDropDown.removeAttribute('hidden');
})

featuresMenu.addEventListener('click', () => {
    console.log("featues")
        featuresDropDown.removeAttribute('hidden');
    })