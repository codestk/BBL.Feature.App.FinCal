<template>
    <vue-form :state="formstate" @submit.prevent="onSubmit" class="general-form">
        <div class="ProvidentFund">
            <div class="row">
                <div class="col-centered col-md-12">
                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.LTF)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ลงทุน LTF*</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="LTF"
                                       v-model.lazy="model.LTF"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="LTF" show="$touched || $submitted" class="form-control-feedback">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>
                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.LifeInsurance)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ออมผ่านประกันชีวิต*</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="LifeInsurance"
                                       v-model.lazy="model.LifeInsurance"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="LifeInsurance"
                                        show="$touched || $submitted"
                                        class="form-control-feedback">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.HealthInsurance)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ออมผ่านประกันสุขภาพ*</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="HealthInsurance"
                                       v-model.lazy="model.HealthInsurance"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="HealthInsurance"
                                        show="$touched || $submitted"
                                        class="form-control-feedback">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>
                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.Insurances)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ออมผ่านประกันชีวิต*และออมผ่านประกันสุขภาพ*</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="Insurances"
                                       v-model.lazy="model.Insurances"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="Insurances"
                                        show="$touched || $submitted"
                                        class="form-control-feedback">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>
                </div>
            </div>

            <div class="row">
                <div class="col-centered col-xs-11 col-sm-8 col-md-10 col-lg-5">
                    <button class="btn btn-primary btn-sm btn-block text-center" type="submit">คำนวณ</button>
                </div>
            </div>
        </div>
    </vue-form>
</template>

<script>
    export default {
        name: "SaveTax",
        props: ['SaveTax'],
        data: function () {
            return {
                formstate: {},
                temp: null, //for number
                visible: true, //for number
                model: {
                    LTF: "0",
                    LifeInsurance: "0",
                    HealthInsurance: "0",
                    Insurances: "0",
                    TotalDebt: "0"
                },
                result: {
                    MonthlySavings: 0,
                    YearlySavings: 0,
                    TotalSavings: 0,
                    Years: 0
                }
            };
        },
        mounted() {
            if (Object.keys(this.SaveTax).length > 0) {
                this.model = Object.assign({}, this.SaveTax);
            }
        },
        methods: {
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
            },
            onSubmit: function () {
                if (this.formstate.$invalid) {
                    // alert user and exit early
                    return;
                }
                // otherwise submit form
                this.calculator();
            },

            calculator: function () { }
        },
        watch: {
            model: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.$emit('ReturnSaveTax', newVal);
                },
                deep: true
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>

    .result {
        border: 1px solid #bbb;
    }
</style>
