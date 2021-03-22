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
    position: absolute;
    height: 50px;
    width: 100%;
    background-color: $white;
    align-items: center;
    justify-content: flex-end;
    .notification {
        margin-right: 20px;
        color: $primary;
        font-size: 25px;
        transform: rotate(25deg);
    }
}
</style>