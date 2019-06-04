<template>
    <div class="house">
        <vue-form :state="formstate" @submit.prevent="onSubmit" class="general-form">
            <div class="row">
                <div class="col-centered col-md-12">
                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.FutureSavingAmount)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ยอดเงินที่ต้องการ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <!-- <input type="text" name="name" class="form-control" required v-model.lazy="model.CurrentAge"> -->
                                <input name="FutureSavingAmount"
                                       v-model.lazy="model.FutureSavingAmount"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="FutureSavingAmount"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.FutureSavingAmount)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.NYear)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>จำนวนปีที่จะออม</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="NYear"
                                       v-model.lazy="model.NYear"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="120"
                                       onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="NYear"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.NYear)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.FirstSavingAmount)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>มีเงินออมไว้แล้ว</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <!-- <input type="text" name="name" class="form-control" required v-model.lazy="model.CurrentAge"> -->
                                <input name="FirstSavingAmount"
                                       v-model.lazy="model.FirstSavingAmount"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="FirstSavingAmount"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.FirstSavingAmount)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.CompensationRate)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ผลตอบแทนต่อปีที่คาดหวัง (%)</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="CompensationRate"
                                       v-model.lazy="model.CompensationRate"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="100"
                                       onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="CompensationRate"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.CompensationRate)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.SavingIncRate)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ต้องการออมเพิ่มขึ้นปีละ (%)</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="SavingIncRate"
                                       v-model.lazy="model.SavingIncRate"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="100"
                                       onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="SavingIncRate"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.SavingIncRate)">
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
        </vue-form>
        <div class="row" id="result" v-show="false">
            <div class="col-md-12 col-centered">
                <div class="result">
                    <p>แนะนำให้ออมเงินเดือนละ {{this.twoDigit(this.result.SavingMonth)}} บาท</p>
                    <p>โดยออมเงินเพิ่มขึ้นปีละ {{this.twoDigit(this.model.SavingIncRate)}} บาท</p>
                    <p>เพื่อให้มีเงิน {{this.twoDigit(this.result.FutureValue)}} บาท</p>
                    <p>ในอีก {{this.model.NYear}} ปีข้างหน้า</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import callapi from "../Common/apicall.js";
    export default {
        name: "MyPlan",
        data: function () {
            return {
                formstate: {},
                model: {
                    FutureSavingAmount: 500000,
                    NYear: 5,
                    FirstSavingAmount: 0,
                    CompensationRate: 0.5,
                    SavingIncRate: 0
                },
                result: {
                    FutureValue: 0,
                    SavingMonth: 0
                }
            }
        },
        mounted() { },
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
            },
            onSubmit: function () {
                $('#result').fadeOut(200);
                if (this.formstate.$invalid) {
                    return;
                }
                var response = callapi.post(Server + EndPoint, Target, this.model, ocpkey).then(response => {
                    this.result.FutureValue = response.data.FutureValue;
                    this.result.SavingMonth = response.data.SavingMonth;
                    $('#result').fadeIn(400);
                }).catch(e => {
                    this.errors.push(e);
                })
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped="">
    .result {
        border: 1px solid #bbb;
    }
</style>
