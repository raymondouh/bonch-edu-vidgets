
/*data*/
let performanceChart = {
    type: 'pie',
    data: {
        labels: ['Обгоняют', 'Не допущены', 'Неуспевающие', 'Успевающие'],
        datasets: [{
            data: [6, 4, 5, 30],
            backgroundColor: [
                'rgba(219, 214, 98, 0.5)',
                'rgba(215, 136, 63, 1)',
                'rgba(186, 67, 67, 0.5)',
                'rgba(89, 154, 78, 0.5)',
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: '#599A4E'
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

let attendanceChart = {
    type: 'pie',
    data: {
        labels: ['С 1м прогулом', 'Успевающие', 'Не посещающие занятия', 'Без прогулов'],
        datasets: [{
            data: [6, 3, 1, 35],
            backgroundColor: [
                'rgba(219, 214, 98, 0.5)',
                'rgba(215, 136, 63, 1)',
                'rgba(186, 67, 67, 0.5)',
                'rgba(89, 154, 78, 0.5)',
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: '#599A4E'
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

let paymentChart = {
    type: 'pie',
    data: {
        labels: ['Не оплатили', 'Оплатили недавно'],
        datasets: [{
            data: [4, 4],
            backgroundColor: [
                'rgba(186, 67, 67, 0.5)',
                'rgba(89, 154, 78, 0.5)',
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: '#599A4E'
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
}
/**/

let lastTab;
let lastTabContent;

let pieDiagramPerformance;
let pieDiagramAttendance;
let pieDiagramPayment;

let groupPerformanceTab;
let groupAttendanceTab;
let groupPaymentTab;

window.onload = function() {
    pieDiagramPerformance = document.getElementById('gst-pie-diagram-performance');
    pieDiagramAttendance = document.getElementById('gst-pie-diagram-attendance');
    pieDiagramPayment = document.getElementById('gst-pie-diagram-payment');

    groupPerformanceTab = document.getElementById('group-performance');
    groupAttendanceTab = document.getElementById('group-attendance');
    groupPaymentTab = document.getElementById('group-payment');

    lastTab = document.getElementById('default-gst-tab');
    lastTabContent = groupPerformanceTab;

    new Chart(pieDiagramPerformance, performanceChart);
    new Chart(pieDiagramAttendance, attendanceChart);
    new Chart(pieDiagramPayment, paymentChart);
    /************************************/
    let studentsWell = document.getElementById('well-students');
    let studentsOkay = document.getElementById('okay-students');
    let studentsWellList = document.getElementById('well-students-list');
    let studentsOkayList = document.getElementById('okay-students-list');
    let lastList = studentsWellList;

    studentsWell.addEventListener('click', () =>{
        closeList(lastList);
        openList(studentsWellList);
        lastList = studentsWellList;
    });
    studentsOkay.addEventListener('click', () =>{

        closeList(lastList);
        openList(studentsOkayList);
        lastList = studentsOkayList;
    });
}


function closeList(list){
    list.classList.remove('show-list');
    list.classList.add('hide-list');
}
function openList(list){
    list.classList.remove('hide-list');
    list.classList.add('show-list');
}


function openGroupPerformanceTab() {
    closePreviousTab();
    setActiveTab(event.target);
    showTabContent(groupPerformanceTab)
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
