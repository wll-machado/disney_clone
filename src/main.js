document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',(b)=>{
            const abaTarget = b.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaTarget}]`);

            hideTabButton();
            aba.classList.add('shows__list--active');
            removeActiveButton()
            b.target.classList.add('shows__tabs__button--active');
        })
    }
})

function removeActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--active');
    }
}

function hideTabButton(){
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('shows__list--active');
    }
}