<template>
    <div>
        <p class="section-header">แผนออมเงินเพื่อเป้าหมาย</p>
        <tabs :tabs="tabs"
              :currentTab="currentTab"
              :wrapper-class="'default-tabs'"
              :tab-class="'default-tabs__item'"
              :tab-active-class="'default-tabs__item_active'"
              :line-class="'default-tabs__active-line'"
              @onClick="handleClick" />
        <div class="tabs-content">
            <div v-if="currentTab === 'tab1'">
                <!--<p>ซื้อบ้าน</p>-->
                <BuyHouse></BuyHouse>
            </div>
            <div v-if="currentTab === 'tab2'">
                <!--<p>ซื้อรถ</p>-->
                <BuyCar></BuyCar>
            </div>
            <div v-if="currentTab === 'tab3'">
                <!--<p>แต่งงาน</p>-->
                <Marry></Marry>
            </div>
            <div v-if="currentTab === 'tab4'">
                <!--<p>อื่นๆ</p>-->
                <Others></Others>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from '../Common/VueTabsWithActiveLine.vue'
    import BuyHouse from './MyPlan'
    import BuyCar from './MyPlan'
    import Marry from './MyPlan'
    import Others from './MyPlan'

    const TABS = [{
        title: 'ซื้อบ้าน',
        value: 'tab1',
    }, {
        title: 'ซื้อรถ',
        value: 'tab2',
    }, {
        title: 'แต่งงาน',
        value: 'tab3',
    }, {
        title: 'อื่นๆ',
        value: 'tab4',
    }];

    export default {
        components: {
            Tabs,
            BuyHouse,
            BuyCar,
            Marry,
            Others
        },
        data: () => ({
            tabs: TABS,
            currentTab: 'tab1',
        }),
        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
                $('#result').fadeOut(200);
            },
        },
    }
</script>

<style>
    .default-tabs {
        position: relative;
        margin: 0 auto;
    }

    .default-tabs__item {
        display: inline-block;
        margin: 12px 0px;
        font-size: 1rem;
        color: #003fbd;
        letter-spacing: 0.8px;
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
        padding: 10px;
    }

    .default-tabs__item_active {
        color: #003fbd;
    }

    .default-tabs__item:hover {
        color: #003fbd;
    }

    .default-tabs__item:focus {
        outline: none;
        color: #003fbd;
    }

    .default-tabs__item:first-child {
        margin-left: 0;
    }

    .default-tabs__item:last-child {
        margin-right: 0;
    }

    .default-tabs__active-line {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: #003fbd;
    }

    .tabs-content {
        font-size: 20px;
    }
</style>