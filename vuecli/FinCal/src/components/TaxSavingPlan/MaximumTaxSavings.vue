<template>
    <div class="MaxTaxSave general-form" v-if="this.model !== null">
        <div class="row">
            <div class="col-md-8 fincal-text-left">ลงทุน LTF*</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxLTF)}}</div>
            <div class="col-md-8 fincal-text-left">ออมผ่านประกันชีวิต*</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxInsure)}}</div>
            <div class="col-md-8 fincal-text-left">ออมผ่านประกันสุขภาพ*</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxHealthInsure)}}</div>
            <div class="col-md-8 fincal-text-left">ออมผ่านประกันชีวิต*และออมผ่านประกันสุขภาพ* รวมกันแล้วไม่เกิน</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxHealthInsure)}}</div>

            <div class="col-md-12 pad-bot"></div>

            <div class="col-md-8 fincal-text-left">ลงทุน RMF*</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxRMF)}}</div>
            <div class="col-md-8 fincal-text-left">ออมผ่านประกันบำนาญ*</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxInsure60)}}</div>
            <div class="col-md-8 fincal-text-left">ลงทุน RMF* และประกันบำนาญ* รวมกันแล้วไม่เกิน</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxRMFInsure60)}}</div>
            <div class="col-md-8 fincal-text-left">ออมผ่านประกันชีวิต*และออมผ่านประกันสุขภาพ* รวมกันแล้วไม่เกิน</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxHealthInsure)}}</div>
            <div class="col-md-12 pad-bot"></div>

            <div class="col-md-8 fincal-text-left">ภาษีที่ต้องชำระเดิม</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.TaxPayment)}}</div>
            <div class="col-md-8 fincal-text-left">ประหยัดภาษีได้สูงสุด</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.SavingTax)}}</div>
            <div class="col-md-8 fincal-text-left">โดยใช้งินลงทุนเพียง</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.Budget)}}</div>
            <div class="col-md-12 pad-bot"></div>

            <div class="col-md-12 fincal-text-left" v-if="this.parentData.TaxPaymentReduce == 0">ไม่มีภาระภาษีที่ต้องชำระ</div>
            <div v-if="this.parentData.TaxPaymentReduce > 0">
                <div class="col-md-8 fincal-text-left">เหลือภาษีที่ต้องชำระเพียง</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.TaxPaymentReduce)}}</div>
            </div>
            <div class="col-md-8 fincal-text-left">ฐานภาษีสูงสุด</div><div class="col-md-4 fincal-text-right">{{this.twoDigit(this.parentData.MaxTaxRateStep)}}</div>
            <div class="col-md-12 fincal-text-left">*คำนวณจำนวนเงินลงทุนสูงสุดที่ท่านสามารถลงทุนได้ ตามเงื่อนไขของกรมสรรพากร</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MaximumTaxSavings",
        props: ['parentData'],
        data: function () {
            return {
                model: {}
            };
        },
        mounted() {

        },
        methods: {
            twoDigit: function (val) {
                try {
                    return val.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                } catch{
                    return ''
                }
            },
            fieldClassName: function (field) {
                if (!field) {
                    return "";
                }
                if ((field.$touched || field.$submitted) && field.$valid) {
                    return "has-success";
                }
                if ((field.$touched || field.$submitted) && field.$invalid) {
                    return "has-danger";
                }
            }
        },
        watch: {
            parentData: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.model = {};
                    this.model = Object.assign({}, newVal);
                }
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    .MaxTaxSave {
        font-size: 0.925rem;
        line-height: 2rem;
    }

    .result {
        border: 1px solid #bbb;
    }
</style>
