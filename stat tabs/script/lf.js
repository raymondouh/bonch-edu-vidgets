window.onload = () => {
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

    let lastAttendanceList = document.getElementById('well-attending-students-list');
    let lastPerformanceList = document.getElementById('well-students-list');
    let lastAttendanceSwitch = document.getElementById('well-attending-students');
    let lastPerformanceSwitch = document.getElementById('well-students');
    let lastGroupTab = document.getElementById('GroupPerformanceTab');
    let lastGroupContentTab = document.getElementById('group-performance');

    let pieDiagramPerformance = document.getElementById('gst-pie-diagram-performance');
    let pieDiagramAttendance = document.getElementById('gst-pie-diagram-attendance');
    let pieDiagramPayment = document.getElementById('gst-pie-diagram-payment');

    let performanceListSwitchIds = ['well-students','good-students','okay-students','bad-students'];
    let performanceListIds = ['well-students-list', 'good-students-list', 'okay-students-list', 'bad-students-list'];
    let attendanceListIds = ['well-attending-students-list', 'good-attending-students-list', 'okay-attending-students-list', 'bad-attending-students-list'];
    let attendanceListSwitchIds = ['well-attending-students','good-attending-students','okay-attending-students','bad-attending-students'];
    let groupTabsIds = ['GroupPerformanceTab','GroupAttendanceTab','GroupPaymentTab'];
    let groupTabsContentIds = ['group-performance', 'group-attendance', 'group-payment'];

    new Chart(pieDiagramPerformance, performanceChart);
    new Chart(pieDiagramAttendance, attendanceChart);
    new Chart(pieDiagramPayment, paymentChart);

    addTabListeners(groupTabsIds, groupTabsContentIds);
    addListListeners(performanceListSwitchIds, performanceListIds, "performance");
    addListListeners(attendanceListSwitchIds, attendanceListIds, "attendance");

    function setActive(element) {
        element.classList.add('active');
    }

    function setInactive(element) {
        element.classList.remove('active');
    }

    function showTabContent(tabContent) {
        tabContent.classList.remove('hide');
        tabContent.classList.add('show');
    }

    function hideTabContent(tabContent) {
        tabContent.classList.remove('show');
        tabContent.classList.add('hide');
    }

    function addTabListeners(tabIds, contentIds){
        for (var i = 0; i < tabIds.length; i++) {
            let element = document.getElementById(tabIds[i]);
            let content = document.getElementById(contentIds[i]);
            element.addEventListener('click', () => {
            setInactive(lastGroupTab);
            hideTabContent(lastGroupContentTab);
            setActive(element);
            showTabContent(content);
            lastGroupTab = element;
            lastGroupContentTab = content;
        });
        }
    }

    function addListListeners(switchIds, contentIds, parameter) {
        for (var i = 0; i < switchIds.length; i++) {
            let element = document.getElementById(switchIds[i]);
            let content = document.getElementById(contentIds[i]);
            element.addEventListener('click', () => {
                if (parameter === "performance") {
                    setInactive(lastPerformanceSwitch);
                    hideTabContent(lastPerformanceList);
                    setActive(element);
                    showTabContent(content);
                    lastPerformanceSwitch = element;
                    lastPerformanceList = content;
                } else if (parameter === "attendance") {
                    setInactive(lastAttendanceSwitch);
                    hideTabContent(lastAttendanceList);
                    setActive(element);
                    showTabContent(content);
                    lastAttendanceSwitch = element;
                    lastAttendanceList = content;
                }
            });
        }
    }
}
