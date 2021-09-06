<template>
<div class="gst-tabs-contents hide" id="group-attendance">
    <div class="gst-pie-diagram">
        <canvas id="gst-pie-diagram-attendance" width="100%" height="100%"></canvas>
    </div>

    <div class="group-attendance">
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-well"></div>
            <div class="gst-line-text">
                Без прогулов
            </div>
            <div class="gst-line-value">
                35/45
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-good"></div>
            <div class="gst-line-text">
                С 1-м прогулом
            </div>
            <div class="gst-line-value">
                6/45
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-okay"></div>
            <div class="gst-line-text">
                Успевающие
            </div>
            <div class="gst-line-value">
                3/45
            </div>
        </div>
        <div class="gst-line">
            <div class="diagram-sample-color gst-color-bad"></div>
            <div class="gst-line-text">
                Не посещающие занятия
            </div>
            <div class="gst-line-value">
                1/45
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "GroupAttendance",
    props: {},
    created() {
        let pieDiagramAttendance = document.getElementById('gst-pie-diagram-attendance');
        new Chart(pieDiagramAttendance, this.attendanceChart);
    },
    data() {
        return {
            attendanceChart: {
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
            }
        }
    },
}
</script>
