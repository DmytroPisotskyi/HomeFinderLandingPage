const radioButtons = document.querySelectorAll('input[name ="tab"]');
const tabs = document.querySelectorAll('.option__group');

function updateTabs() {
    const selectedTab = document.querySelector('input[name ="tab"]:checked').id;
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(`content${selectedTab.replace('tab', '')}`).classList.add('active');

}

radioButtons.forEach(radio => {
    radio.addEventListener('change', updateTabs);
})

updateTabs();