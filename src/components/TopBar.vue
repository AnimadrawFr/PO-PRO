<template>
    <div id="topbar" class="d-flex">
        <a href="#" class="notification fas fa-bell"></a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#topbar {
    position: fixed;
    z-index: 9999;
    height: 50px;
    width: 100%;
    top: 0;
    background-color: $background;
    border-bottom: 1px solid $primary;
    align-items: center;
    justify-content: flex-end;
    .notification {
        margin-right: 20px;
        color: $white;
        font-size: 25px;
        transform: rotate(25deg);
    }
}
</style>