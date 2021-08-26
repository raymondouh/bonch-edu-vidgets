let gstTabsContents;
let tabs;

let lastTab;
let lastTabContent;

let pieDiagram;

window.onload = function() {
    pieDiagram = document.getElementById('gst-pie-diagram');
    groupPerformanceTab = document.getElementById('group-performance');
    groupAttendanceTab = document.getElementById('group-attendance');
    groupPaymentTab = document.getElementById('group-payment');
    lastTab = document.getElementById('default-gst-tab');
    lastTabContent = groupPerformanceTab;
}

function openGroupPerformanceTab() {
    closePreviousTab();
    setActiveTab(event.target);
    showTabContent(groupPerformanceTab)
    let chart = new Chart(pieDiagram, {
        type: 'pie',
        data: {
            datasets: [{
                label: '# of Votes',
                data: [6, 4, 5, 30],
                backgroundColor: [
                    'rgba(219, 214, 98, 0.5)',
                    'rgba(215, 136, 63, 1)',
                    'rgba(186, 67, 67, 0.5)',
                    'rgba(89, 154, 78, 0.5)',
                ],
                borderWidth: 1
            }]
        }
    });
}

function openGroupAttendanceTab() {
    closePreviousTab();
    setActiveTab(event.target);
    showTabContent(groupAttendanceTab)
}

function openGroupPaymentTab() {
    closePreviousTab();
    setActiveTab(event.target);
    showTabContent(groupPaymentTab)
}

function closePreviousTab() {
    setInactiveTab(lastTab);
    hideTabContent(lastTabContent);
}

function setActiveTab(tab) {
    tab.classList.add('active');
    lastTab = tab;
}

function setInactiveTab(tab) {
    tab.classList.remove('active');
}

function showTabContent(tabContent) {
    tabContent.classList.remove('hide');
    tabContent.classList.add('show');
    lastTabContent = tabContent;
}

function hideTabContent(tabContent) {
    tabContent.classList.remove('show');
    tabContent.classList.add('hide');
}
