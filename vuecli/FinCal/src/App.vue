<template>
    <div id="app" class="inner-container">
        <!-- navbar -->
        <div class="row">
            <div class="col-md-2">
                <SideMenu></SideMenu>
            </div>
            <div class="col-md-10">
                <transition name="moveInUp">
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    import SideMenu from "@/components/SideMenu.vue";
    export default {
    name: "App",
        components: {
            SideMenu
        },
    mounted: function() {}
    };
</script>
<style>
    #app {
        /*font-family: "Avenir", Helvetica, Arial, sans-serif;
        color: #2c3e50;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;*/
        text-align: center;
        margin-top: 132px;
    }

    .moveInUp-enter-active {
        animation: fadeIn 2s ease-in;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }

    .moveInUp-leave-active {
        animation: moveInUp 0.3s ease-in;
    }

    @keyframes moveInUp {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(-400px);
        }
    }

    .fincal-quick-plan-slider {
        overflow: hidden;
        margin: 10px;
        height: 252px;
    }
</style>
