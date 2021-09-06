<template>
<div class="group-stats" id="group-stats">

    <div class="gst-tabs">
        <div class="gst-tab active" id="default-gst-tab" @click="">
            Успеваемость группы
        </div>
        <div class="gst-tab" @click="">
            Посещаемость
        </div>
        <div class="gst-tab" @click="">
            Оплата
        </div>
    </div>
    <GroupPerformance/>
    <GroupAttendance :is="currentTabComponent"/>
    <GroupPayment :is="currentTabComponent"/>
</div>
</template>
<script>
import GroupPerformance from './GroupPerformance.vue'
import GroupAttendance from './GroupAttendance.vue'
import GroupPayment from './GroupPayment.vue'
export default {
    name: "GroupStats",
    props: {},
    components: {
        GroupPerformance,
        GroupAttendance,
        GroupPayment
    },
    computed(){},
    data() {
        return{
            tabs: ['GroupPerformance','GroupAttendance','GroupPayment'],
            currentTabComponent: tabs[0]
        }
    },
}
</script>
