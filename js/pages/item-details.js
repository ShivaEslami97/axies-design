//// countdown
function countDownTimer() {
    const difference = +new Date("2042-10-01") - +new Date();
    let remaining = "Time's up!";

    if (difference > 0) {
        const parts = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        remaining = Object.keys(parts).map(part => {
            return `${parts[part]}`;
        }).join(" : ");
    }

    document.getElementById("countdown").innerHTML = remaining;
}

setInterval(countDownTimer, 1000);


/////// tabs
const tabs = document.querySelectorAll('.tab__item');
const tabContents = document.querySelectorAll('.tab__content');

// Functions
const activateTab = tabnum => {

    tabs.forEach(tab => {
        tab.classList.remove('active');
    })

    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    })

    document.querySelector('#tab' + tabnum).classList.add('active');
    document.querySelector('#tab_content' + tabnum).classList.add('active');
}
// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})
