<template>
    <div class="TaxSavingPlan">
        <div class="row">
            <div class="pad-section">
                <tabs :tabs="tabs"
                      :currentTab="currentTab"
                      :wrapper-class="'default-tabs'"
                      :tab-class="'default-tabs__item'"
                      :tab-active-class="'default-tabs__item_active'"
                      :line-class="'default-tabs__active-line'"
                      @onClick="handleClick" />
                <div class="tabs-content">
                    <div v-if="currentTab === 'tab1'">
                        <!--<p>รายได้</p>-->
                        <Income :Income="this.TempIncome" @ReturnIncomeResult="GetIncomeResult" @ReturnIncome="GetIncome"></Income>
                    </div>
                    <div v-if="currentTab === 'tab2'">
                        <!--<p>ประหยัดภาษีสูงสุด</p>-->
                        <MaximumTaxSavings :parentData="this.result"></MaximumTaxSavings>
                    </div>
                    <div v-if="currentTab === 'tab3'">
                        <!--<p>ประหยัดภาษีได้ตามต้องการ</p>-->
                        <SaveTax :SaveTax="this.TempSaveTax" @ReturnSaveTax="GetSaveTax"></SaveTax>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from "../Common/VueTabsWithActiveLine.vue";
    import Income from "./Income";
    import MaximumTaxSavings from "./MaximumTaxSavings";
    import SaveTax from "./SaveTax";

    const TABS = [
        {
            title: "รายได้",
            value: "tab1"
        },
        {
            title: "ประหยัดภาษีสูงสุด",
            value: "tab2"
        },
        {
            title: "ประหยัดภาษีได้ตามต้องการ",
            value: "tab3"
        }
    ];

    export default {
        data: function () {
            return {
                result: {},
                TempIncome: {},
                TempSaveTax: {},
                tabs: TABS,
                currentTab: "tab1"
            };
        },
        components: {
            Tabs,
            Income,
            MaximumTaxSavings,
            SaveTax
        },
        methods: {
            handleClick(newTab) {
                $('#result').fadeOut(200);

                this.currentTab = newTab;
            },
            GetIncomeResult(e) {
                this.result = {};
                this.result = Object.assign({}, e);
            },
            GetIncome(e) {
                this.TempIncome = {};
                this.TempIncome = Object.assign({}, e);
            },
            GetSaveTax(e) {
                this.TempSaveTax = {};
                this.TempSaveTax = Object.assign({}, e);
            }
        }
    };
</script>

<style>

    .pad-section {
        margin-top: 10px;
        margin-bottom: 10px;
    }

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
