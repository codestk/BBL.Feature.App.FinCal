<template>
    <div class="Income">
        <vue-form :state="formstate" @submit.prevent="onSubmit" class="general-form">
            <div class="row">
                <div class="col-centered col-md-12">
                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.Income)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>เงินเดือน*</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="Income"
                                       v-model.lazy="model.Income"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="Income"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.Income)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.OtherIncome)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>เงินได้อื่น ๆ ทั้งปี*</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="OtherIncome"
                                       v-model.lazy="model.OtherIncome"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="OtherIncome"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.OtherIncome)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.Bonus)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>โบนัสทั้งปี</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="Bonus"
                                       v-model.lazy="model.Bonus"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="Bonus"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.Income)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.ProvidentFund)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>อัตราสะสมกองทุนสำรองเลี้ยงชีพ (%)</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="ProvidentFund"
                                       v-model.lazy="model.ProvidentFund"
                                       type="number"
                                       required
                                       min="0"
                                       max="15"
                                       onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="ProvidentFund"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.ProvidentFund)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>
                    <p>*กรอกเฉพาะเงินได้ที่ต้องเสียภาษีเท่านั้น และการคำนวณภาษีดังกล่าวได้รวมค่าลดหย่อนส่วนตัวและประกันสังคมแล้ว</p>
                    <br>
                    <!------------------######################################---------------->
                    <!------------------######################################---------------->
                    <!------------------######################################---------------->
                    <div class="pad-bot">
                        <button v-on:click="Reduce_Click" class="btn btn-sm btn-block text-center">รายการลดหย่อนเพิ่มเติม</button>
                    </div>

                    <div id="Reduce-Section" v-show="false">
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.NumberOfChildeBornBefore61)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>จำนวนบุตรผู้เยาว์ (เกิดก่อนปี 2561)</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="NumberOfChildeBornBefore61"
                                           v-model.lazy="model.NumberOfChildeBornBefore61"
                                           type="number"
                                           required
                                           min="0"
                                           max="3"
                                           onKeyPress="if(this.value.length==2) return false;">
                                </div>
                            </div>

                            <field-messages name="NumberOfChildeBornBefore61"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.NumberOfChildeBornBefore61)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>

                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.NumberOfChildeBorn61Onwards)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>จำนวนบุตรผู้เยาว์ (เกิดตั้งแต่ปี 2561 เป็นต้นไป)</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="NumberOfChildeBorn61Onwards"
                                           v-model.lazy="model.NumberOfChildeBorn61Onwards"
                                           type="number"
                                           required
                                           min="0"
                                           max="3"
                                           onKeyPress="if(this.value.length==2) return false;">
                                </div>
                            </div>

                            <field-messages name="NumberOfChildeBorn61Onwards"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.NumberOfChildeBorn61Onwards)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>

                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.FatherMother)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>บิดามารดาของผู้เสียภาษี</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="FatherMother"
                                           v-model.lazy="model.FatherMother"
                                           type="number"
                                           required
                                           min="0"
                                           max="4"
                                           onKeyPress="if(this.value.length==2) return false;">
                                </div>
                            </div>

                            <field-messages name="FatherMother"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.FatherMother)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>

                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.HomeInterest)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>ดอกเบี้ยสินเชื่อบ้าน</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="HomeInterest"
                                           v-model.lazy="model.HomeInterest"
                                           type="number"
                                           required
                                           min="0"
                                           max="100000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="HomeInterest"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.HomeInterest)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>

                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.FatherInsure)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>เบี้ยประกันสุขภาพบิดามารดา</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="FatherInsure"
                                           v-model.lazy="model.FatherInsure"
                                           type="number"
                                           required
                                           min="0"
                                           max="15000"
                                           onKeyPress="if(this.value.length==6) return false;">
                                </div>
                            </div>

                            <field-messages name="FatherInsure"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.FatherInsure)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.Insure)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>เบี้ยประกันชีวิต</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="Insure"
                                           v-model.lazy="model.Insure"
                                           type="number"
                                           required
                                           min="0"
                                           max="100000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="Insure"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.Insure)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.PensionInsure)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>เบี้ยประกันชีวิตแบบบำนาญ</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="PensionInsure"
                                           v-model.lazy="model.PensionInsure"
                                           type="number"
                                           required
                                           min="0"
                                           max="200000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="PensionInsure"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.PensionInsure)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.HealthInsure)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>เบี้ยประกันสุขภาพ</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="HealthInsure"
                                           v-model.lazy="model.HealthInsure"
                                           type="number"
                                           required
                                           min="0"
                                           max="200000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="HealthInsure"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.HealthInsure)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.ReduceLTF)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>LTF</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="ReduceLTF"
                                           v-model.lazy="model.ReduceLTF"
                                           type="number"
                                           required
                                           min="0"
                                           max="500000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="ReduceLTF" show="$touched || $submitted" class="form-control-feedback" :class="fieldClassName(formstate.ReduceLTF)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.ReduceRMF)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>RMF</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="ReduceRMF"
                                           v-model.lazy="model.ReduceRMF"
                                           type="number"
                                           required
                                           min="0"
                                           max="500000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="ReduceRMF" show="$touched || $submitted" class="form-control-feedback" :class="fieldClassName(formstate.ReduceRMF)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.Donate)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>เงินบริจาค</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="Donate"
                                           v-model.lazy="model.Donate"
                                           type="number"
                                           required
                                           min="0"
                                           max="99999999999"
                                           onKeyPress="if(this.value.length==12) return false;">
                                </div>
                            </div>

                            <field-messages name="Donate" show="$touched || $submitted" class="form-control-feedback" :class="fieldClassName(formstate.Donate)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                        <validate auto-label class="form-group required-field">
                            <div class="fincal-group" :class="fieldClassName(formstate.Other)">
                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                    <label>อื่นๆ</label>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                    <input name="Other"
                                           v-model.lazy="model.Other"
                                           type="number"
                                           required
                                           min="0"
                                           max="500000"
                                           onKeyPress="if(this.value.length==7) return false;">
                                </div>
                            </div>

                            <field-messages name="Other"
                                            show="$touched || $submitted"
                                            class="form-control-feedback" :class="fieldClassName(formstate.Other)">
                                <div slot="required">Name is a required field</div>
                                <div slot="min">min</div>
                                <div slot="max">max</div>
                            </field-messages>
                        </validate>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-centered col-xs-11 col-sm-8 col-md-10 col-lg-5">
                    <button class="btn btn-primary btn-sm btn-block text-center" type="submit">คำนวณ</button>
                </div>
            </div>
            <div class="row" id="result" v-show="false">
                <div class="col-md-12 col-centered">
                    <div class="result">
                        <p>ภาษีที่ต้องชำระ {{ this.twoDigit(this.result.TaxPayment)}} บาท/ปี</p>
                    </div>
                </div>
            </div>
        </vue-form>
    </div>
</template>

<script>
    import callapi from "../Common/apicall.js";
    export default {
        name: "Income",
        props: ['Income'],
        data: function () {
            return {
                formstate: {},
                temp: null, //for number
                visible: true, //for number
                model: {
                    Income: 500000,
                    OtherIncome: 0,
                    Bonus: 100000,
                    ProvidentFund: 5.0,
                    NumberOfChildeBornBefore61: 0,
                    NumberOfChildeBorn61Onwards: 0,
                    FatherMother: 0,
                    HomeInterest: 0,
                    FatherInsure: 0,
                    Insure: 0,
                    PensionInsure: 0,
                    HealthInsure: 0,
                    ReduceLTF: 0,
                    ReduceRMF: 0,
                    Donate: 0,
                    Other: 0
                },
                result: {
                    TaxPayment: 0,
                    MaxLTF: 0,
                    MaxRMF: 0,
                    MaxHealthInsure: 0,
                    MaxInsure: 0,
                    MaxInsure60: 0,
                    MaxRMFInsure60: 0,
                    OutputLTF: 0,
                    OutputRMF: 0,
                    OutputInsure: 0,
                    OutputInsure60: 0,
                    SavingTax: 0,
                    TaxPaymentReduce: 0,
                    MaxTaxRateStep: 0,
                    BuyLTFSummary: 0,
                    BuyRMFSummary: 0,
                    BuyInsureSummary: 0,
                    BuyHealthInsureSummary: 0,
                    BuyInsure60Summary: 0,
                    Budget: 0
                }
            };
        },
        mounted() {
            if (Object.keys(this.Income).length > 0) {
                this.model = Object.assign({}, this.Income);
            }
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
            },
            onSubmit: function () {
                $('#result').fadeOut(200);
                if (this.formstate.$invalid) {
                    return;
                }
                var response = callapi.post(Server + EndPoint, CalculateSavingTaxBySelf, this.model, ocpkey).then(response => {
                    this.result.TaxPayment = response.data.TaxPayment;
                    this.result.MaxLTF = response.data.MaxLTF;
                    this.result.MaxRMF = response.data.MaxRMF;
                    this.result.MaxHealthInsure = response.data.MaxHealthInsure;
                    this.result.MaxInsure = response.data.MaxInsure;
                    this.result.MaxInsure60 = response.data.MaxInsure60;
                    this.result.MaxRMFInsure60 = response.data.MaxRMFInsure60;
                    this.result.OutputLTF = response.data.OutputLTF;
                    this.result.OutputRMF = response.data.OutputRMF;
                    this.result.OutputInsure = response.data.OutputInsure;
                    this.result.OutputInsure60 = response.data.OutputInsure60;
                    this.result.SavingTax = response.data.SavingTax;
                    this.result.TaxPaymentReduce = response.data.TaxPaymentReduce;
                    this.result.MaxTaxRateStep = response.data.MaxTaxRateStep;
                    this.result.BuyLTFSummary = response.data.BuyLTFSummary;
                    this.result.BuyRMFSummary = response.data.BuyRMFSummary;
                    this.result.BuyInsureSummary = response.data.BuyInsureSummary;
                    this.result.BuyHealthInsureSummary = response.data.BuyHealthInsureSummary;
                    this.result.BuyInsure60Summary = response.data.BuyInsure60Summary;
                    this.result.Budget = response.data.Budget;
                    this.$emit('ReturnIncomeResult', this.result);
                    $('#result').fadeIn(400);
                }).catch(e => {
                    this.errors.push(e);
                })
            },
            Reduce_Click: function () {
                if ($('#Reduce-Section').css('display') === 'none') {
                    $('#Reduce-Section').slideDown(200);
                } else {
                    $('#Reduce-Section').slideUp(200);
                }
                event.preventDefault();
            }
        },
        watch: {
            model: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.$emit('ReturnIncome', newVal);
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
