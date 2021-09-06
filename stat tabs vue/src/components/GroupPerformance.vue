<template>
<div class="gst-tabs-contents" id="group-performance">
    <div class="gst-pie-diagram">
        <canvas id="gst-pie-diagram-performance" width="100%" height="100%"></canvas>
    </div>
    <div class="group-performance">
        <div class="gst-line-bold">
            <div class="gst-line-text">
                Занятий пройдено
            </div>
            <div class="gst-line-value">
                12
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-well"></div>
            <div class="gst-line-text">
                Успевающие
            </div>
            <div class="gst-line-value">
                30/45
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-good"></div>
            <div class="gst-line-text">
                Обгоняют
            </div>
            <div class="gst-line-value">
                6/45
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-okay"></div>
            <div class="gst-line-text">
                Не допущены
            </div>
            <div class="gst-line-value">
                4/45
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-bad"></div>
            <div class="gst-line-text">
                Неуспевающие
            </div>
            <div class="gst-line-value">
                5/45
            </div>
        </div>
        <div class="gst-line-bold">
            <div class="gst-line-text">
                Проблемные студенты
            </div>
        </div>
        <div class="gst-students-list">
            <a href="">
                <div class="gst-student">
                    <div class="student-image">
                        <img src="img/ivanov_student.png" />
                    </div>
                    <div class="student-name">
                        Иван Иванов
                    </div>
                </div>
            </a>
            <a href="">
                <div class="gst-student">
                    <div class="student-image">
                        <img src="img/ivanov_student.png" />
                    </div>
                    <div class="student-name">
                        Иван Иванов
                    </div>
                </div>
            </a>
            <a href="">
                <div class="gst-student">
                    <div class="student-image">
                        <img src="img/ivanov_student.png" />
                    </div>
                    <div class="student-name">
                        Иван Иванов
                    </div>
                </div>
            </a>
            <a href="">
                <div class="gst-student">
                    <div class="student-image">
                        <img src="img/ivanov_student.png" />
                    </div>
                    <div class="student-name">
                        Иван Иванов
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "GroupAttendance",
    props: {},
    created() {
        let pieDiagramPerformance = document.getElementById('gst-pie-diagram-performance');
        new Chart(pieDiagramPerformance, this.performanceChart);
    },
    data() {
        return {
            performanceChart: {
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
            }
        }
    },
}
</script>
