<template>
    <div id="dashboard">
        <SideBar />
    </div>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
    el: '#dashboard',
    components: {
        SideBar
    }
}
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

</style>