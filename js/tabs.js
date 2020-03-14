document.querySelector('.tabs').addEventListener('click', tabsClick);

function tabsClick(event) {
    let dataTab = event.target.getAttribute('data-tab');

    let tabContent = document.getElementsByClassName('tab-body');
    let tabTitle = document.getElementsByClassName('tabs-title');
    for (let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].classList.remove('active');
    }
    event.target.classList.add('active');

    for (let i = 0; i < tabContent.length; i++) {
        if (dataTab == i) {
            tabContent[i].style.display = 'flex';
        } else {
            tabContent[i].style.display = 'none';
        }
    }
}