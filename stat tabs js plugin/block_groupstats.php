<?php
defined('MOODLE_INTERNAL') || die();
class block_groupstats extends block_base {

    function hide_header() {
        return true;
    }

    function init() {
       $this->title = get_string('pluginname', 'block_groupstats');
    }

    function get_content() {
        if ($this->content !== NULL) {
        return $this->content;
        }
        $this->content = new stdClass;
        //$this->content->text = $this->output->render_from_template('block_groupstats/groupstats_template', []);
        $this->content->text = '<div class="group-stats" id="group-stats" on>

                <div class="gst-tabs">
                    <div class="gst-tab active" id="GroupPerformanceTab">
                        Успеваемость группы
                    </div>
                    <div class="gst-tab" id="GroupAttendanceTab">
                        Посещаемость
                    </div>
                    <div class="gst-tab" id="GroupPaymentTab">
                        Оплата
                    </div>
                </div>

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
            </div>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>';
        $this->page->requires->js_call_amd('block_groupstats/groupstats','init');
        $this->page->requires->css( '/blocks/groupstats/styles.css');
        return $this->content;
    }
}
