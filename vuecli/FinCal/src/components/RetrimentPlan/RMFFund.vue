<template>
    <div class="RMFFund">
        <vue-form :state="formstate" @submit.prevent="this.onSubmit" class="general-form">
            <div class="row">
                <div class="col-centered col-md-12">
                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.RMFSumRetire)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ยอดสะสม ณ ปัจจุบัน</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <!-- <input type="text" name="name" class="form-control" required v-model.lazy="model.CurrentAge"> -->
                                <input name="RMFSumRetire"
                                       v-model.lazy="model.RMFSumRetire"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="RMFSumRetire"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.RMFSumRetire)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.RMFSavingRateRetire)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>คาดว่าจะสะสมทุกปี ปีละ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="RMFSavingRateRetire"
                                       v-model.lazy="model.RMFSavingRateRetire"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="RMFSavingRateRetire"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.RMFSavingRateRetire)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label=""
                              class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.RMFCompensationRateRetire)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ผลตอบแทนต่อปีที่คาดหวัง (%)</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <!-- <input type="text" name="name" class="form-control" required v-model.lazy="model.CurrentAge"> -->
                                <input name="RMFCompensationRateRetire"
                                       v-model.lazy="model.RMFCompensationRateRetire"
                                       type="number"
                                       required=""
                                       min="0"
                                       max="100"
                                       onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="RMFCompensationRateRetire"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.RMFCompensationRateRetire)">
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
                    <p>เพื่อใช้ชีวิตหลังเกษียณตามต้องการ</p>
                    <p>ควรมีเงิน ณ ตอนเกษียณทั้งสิ้น {{this.twoDigit(this.result.TotalChargesValue)}} บาท</p>
                    <p>แนะนำให้ออมเงินเดือนละ {{this.twoDigit(this.result.SavingMonth)}} บาท</p>
                    <p>ออมเงินเพิ่มขึ้นปีละ {{this.twoDigit(this.result.SavingIncRate)}} บาท</p>
                    <p>เพื่อใช้เงินหลังเกษียณเดือนละ {{this.result.FvMonthlyGoals}} ปีข้างหน้า</p>
                    <p class="note">*จำนวนเงินในอนาคตของเงินที่ต้องการใช้หลังเกษียณ หลังคำนวณเงินเฟ้อ 3% ต่อปีแล้ว และอัตราผลตอบแทนหลังเกษียณอยู่ที่ 3% ต่อปี</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RMFFund",
        props: [
            'CurrentAGE',
            'RetireAGE',
            'SavingAGE',
            'ChargesRetireAmount',
            'SavingBeginAmount',
            'CompensationRate',
            'SavingIncRate'
        ],
        data: function () {
            return {
                formstate: {},
                temp: null, //for number
                visible: true, //for number
                model: {
                    CurrentAGE: 30,
                    RetireAGE: 60,
                    SavingAGE: 80,
                    ChargesRetireAmount: 20000,
                    SavingBeginAmount: 3.0,
                    CompensationRate: 0.0,
                    SavingIncRate: 0,

                    SavingCurrent: 0,
                    IncomeRetire: 0,
                    PVDRetire: 0,
                    IncIncomeRetire: 0,
                    CompensationRateRetire: 0,

                    RMFSumRetire: 500000,
                    RMFSavingRateRetire: 0,
                    RMFCompensationRateRetire: 0,

                    SumYearRetire: 0,
                    YearCompensationRateRetire: 0,
                    OneTimeMoneyRetire: 0
                },
                result: {
                    TotalChargesValue: 0,
                    SavingMonth: 0,
                    FvMonthlyGoals: 0
                }
            }
        },
        mount: function () {
            this.model.CurrentAGE = this.CurrentAGE;
            this.model.RetireAGE = this.RetireAGE;
            this.model.SavingAGE = this.SavingAGE;
            this.model.ChargesRetireAmount = this.ChargesRetireAmount;
            this.model.SavingBeginAmount = this.SavingBeginAmount;
            this.model.CompensationRate = this.CompensationRate;
            this.model.SavingIncRate = this.SavingIncRate;
        },
        method: {
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
                if (this.formstate.$invalid) {
                    // alert user and exit early
                    return;
                }
                $('#result').fadeOut(200);
                if (this.formstate.$invalid) {
                    return;
                }
                var response = callapi.post(Server + EndPoint, Retire, this.model, ocpkey).then(response => {
                    this.result.FutureValue = response.data.FutureValue;
                    this.result.SavingMonth = response.data.SavingMonth;
                    this.result.FvMonthlyGoals == response.data.FvMonthlyGoals;
                    $('#result').fadeIn(400);
                }).catch(e => {
                    this.errors.push(e);
                })
            }
        },
        watch: {

            CurrentAGE: function (newVal, oldVal) {
                this.model.RetireAGE = newVal;
            },
            RetireAGE: function (newVal, oldVal) {
                this.model.CurrentAGE = newVal;
            },
            SavingAGE: function (newVal, oldVal) {
                this.model.SavingAGE = newVal;
            },
            ChargesRetireAmount: function (newVal, oldVal) {
                this.model.ChargesRetireAmount = newVal;
            },
            SavingBeginAmount: function (newVal, oldVal) {
                this.model.SavingBeginAmount = newVal;
            },
            CompensationRate: function (newVal, oldVal) {
                this.model.CompensationRate = newVal;
            },
            SavingIncRate: function (newVal, oldVal) {
                this.model.SavingIncRate = newVal;
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
