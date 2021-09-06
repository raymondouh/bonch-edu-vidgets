<template>
<div class="gst-tabs-contents hide" id="group-payment">
    <div class="gst-pie-diagram">
        <canvas id="gst-pie-diagram-payment" width="100%" height="100%"></canvas>
    </div>
    <div class="group-payment">
        <div class="gst-line-bold">
            <div class="diagram-sample-color gst-color-bad"></div>
            <div class="gst-line-text">
                Не оплатили
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
        <div class="gst-line-bold">
            <div class="diagram-sample-color gst-color-well"></div>
            <div class="gst-line-text">
                Оплатили недавно
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
    name: "GroupPayment",
    props: {},
    created(){
        let pieDiagramPayment = document.getElementById('gst-pie-diagram-payment');
        new Chart(pieDiagramPayment, this.paymentChart);
    },
    data() {
        return {
            paymentChart: {
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
        }
    },
}
</script>
