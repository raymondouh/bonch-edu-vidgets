define([], function() {
    "use strict";

    function init(params, params1, params2) {

        console.log(params);
        console.log(params1);
        console.log(params2);

        let lastTab;
        let lastTabContent;

        let pieDiagramPerformance;
        let pieDiagramAttendance;
        let pieDiagramPayment;

        let groupPerformanceTab;
        let groupAttendanceTab;
        let groupPaymentTab;
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
        /********************************************************/
        let studentsWell = document.getElementById('well-students');
        let studentsGood = document.getElementById('good-students');
        let studentsOkay = document.getElementById('okay-students');
        let studentsBad = document.getElementById('bad-students');
        let studentsWellList = document.getElementById('well-students-list');
        let studentsGoodList = document.getElementById('good-students-list');
        let studentsOkayList = document.getElementById('okay-students-list');
        let studentsBadList = document.getElementById('bad-students-list');
        let lastPerformanceList = studentsWellList;
        let lastPerformanceListTitle = studentsWell;

        studentsWell.addEventListener('click', () => {
            closeListTab(lastPerformanceListTitle);
            openListTab(studentsWell);
            lastPerformanceListTitle = studentsWell;
            closeList(lastPerformanceList);
            openList(studentsWellList);
            lastPerformanceList = studentsWellList;
        });
        studentsGood.addEventListener('click', () => {
            closeListTab(lastPerformanceListTitle);
            openListTab(studentsGood);
            lastPerformanceListTitle = studentsGood;
            closeList(lastPerformanceList);
            openList(studentsGoodList);
            lastPerformanceList = studentsGoodList;
        });
        studentsOkay.addEventListener('click', () => {
            closeListTab(lastPerformanceListTitle);
            openListTab(studentsOkay);
            lastPerformanceListTitle = studentsOkay;
            closeList(lastPerformanceList);
            openList(studentsOkayList);
            lastPerformanceList = studentsOkayList;
        });
        studentsBad.addEventListener('click', () => {
            closeListTab(lastPerformanceListTitle);
            openListTab(studentsBad);
            lastPerformanceListTitle = studentsBad;
            closeList(lastPerformanceList);
            openList(studentsBadList);
            lastPerformanceList = studentsBadList;
        });

        let studentsAttendingWell = document.getElementById('well-attending-students');
        let studentsAttendingGood = document.getElementById('good-attending-students');
        let studentsAttendingOkay = document.getElementById('okay-attending-students');
        let studentsAttendingBad = document.getElementById('bad-attending-students');
        let studentsAttendingWellList = document.getElementById('well-attending-students-list');
        let studentsAttendingGoodList = document.getElementById('good-attending-students-list');
        let studentsAttendingOkayList = document.getElementById('okay-attending-students-list');
        let studentsAttendingBadList = document.getElementById('bad-attending-students-list');
        let lastAttendanceList = studentsAttendingWellList;
        let lastAttendanceListTitle = studentsAttendingWell

        studentsAttendingWell.addEventListener('click', () => {
            closeListTab(lastAttendanceListTitle);
            openListTab(studentsAttendingWell);
            lastAttendanceListTitle = studentsAttendingWell;
            closeList(lastAttendanceList);
            openList(studentsAttendingWellList);
            lastAttendanceList = studentsAttendingWellList;
        });
        studentsAttendingGood.addEventListener('click', () => {
            closeListTab(lastAttendanceListTitle);
            openListTab(studentsAttendingGood);
            lastAttendanceListTitle = studentsAttendingGood;
            closeList(lastAttendanceList);
            openList(studentsAttendingGoodList);
            lastAttendanceList = studentsAttendingGoodList;
        });
        studentsAttendingOkay.addEventListener('click', () => {
            closeListTab(lastAttendanceListTitle);
            openListTab(studentsAttendingOkay);
            lastAttendanceListTitle = studentsAttendingOkay;
            closeList(lastAttendanceList);
            openList(studentsAttendingOkayList);
            lastAttendanceList = studentsAttendingOkayList;
        });
        studentsAttendingBad.addEventListener('click', () => {
            closeListTab(lastAttendanceListTitle);
            openListTab(studentsAttendingOkay);
            lastAttendanceListTitle = studentsAttendingOkay;
            closeList(lastAttendanceList);
            openList(studentsAttendingBadList);
            lastAttendanceList = studentsAttendingBadList;
        });
        /********************************************************/
        pieDiagramPerformance = document.getElementById('gst-pie-diagram-performance');
        pieDiagramAttendance = document.getElementById('gst-pie-diagram-attendance');
        pieDiagramPayment = document.getElementById('gst-pie-diagram-payment');

        groupPerformanceTab = document.getElementById('group-performance');
        groupAttendanceTab = document.getElementById('group-attendance');
        groupPaymentTab = document.getElementById('group-payment');

        lastTab = document.getElementById('GroupPerformanceTab');
        lastTabContent = groupPerformanceTab;

        new Chart(pieDiagramPerformance, performanceChart);
        new Chart(pieDiagramAttendance, attendanceChart);
        new Chart(pieDiagramPayment, paymentChart);

        document.getElementById('GroupPerformanceTab').addEventListener("click", () => {
            closePreviousTab();
            setActiveTab(event.target);
            showTabContent(groupPerformanceTab);
        });
        document.getElementById('GroupAttendanceTab').addEventListener("click", () => {
            closePreviousTab();
            setActiveTab(event.target);
            showTabContent(groupAttendanceTab);
        });
        document.getElementById('GroupPaymentTab').addEventListener("click", () => {
            closePreviousTab();
            setActiveTab(event.target);
            showTabContent(groupPaymentTab);
        });

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
        /********************************************************/
        function closeList(list) {
            list.classList.remove('show-list');
            list.classList.add('hide-list');
        }

        function openList(list) {
            list.classList.remove('hide-list');
            list.classList.add('show-list');
        }

        function closeListTab(tab) {
            tab.classList.remove('selected');
        }

        function openListTab(tab) {
            tab.classList.add('selected');
        }
    }

    return {
        init: init
    };
});
