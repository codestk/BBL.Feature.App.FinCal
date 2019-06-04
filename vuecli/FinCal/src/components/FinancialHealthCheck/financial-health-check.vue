<template>
    <div class="home">
        <vue-form :state="formstate" v-model="formstate" @submit.prevent="dummy" class="general-form">
            <!-- <vue-form :state='formstate' v-model='formstate' @@submit.prevent='onSubmit' class='general-form' enctype='multipart/form-data'> -->

            <div class="row">
                <div class="col-centered col-md-12">
                    <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.CurrentAge)">
                        <div class="fincal-group">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>อายุปัจจุบัน</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <!-- <input type="text" name="name" class="form-control" required v-model.lazy="model.CurrentAge"> -->
                                <input name="CurrentAge" v-model.lazy="model.CurrentAge" type="number" required min="20" max="120" onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="CurrentAge" show="$touched || $submitted" class="form-control-feedback">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.BeginWorkAge)">
                        <div class="fincal-group">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>อายุตอนเริ่มทำงาน</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="BeginWorkAge" v-model.lazy="model.BeginWorkAge" type="number" required min="20" max="120" onKeyPress="if(this.value.length==3) return false;">
                            </div>
                        </div>

                        <field-messages name="BeginWorkAge" show="$touched || $submitted" class="form-control-feedback">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>
                </div>
            </div>

            <div class="row">
                <div class="col-centered col-md-12">
                    <label class="fincal-label-healthy-child">บุตร</label>

                    <br>

                    <br>

                    <input type="radio" class="fincal-option-input fincal-radio" id="rdb-primary " value="true" name="rad_Child" v-model="model.HaveChildren">

                    <label for="rdb-primary" class="healthy-child-radio">มี</label>

                    <input type="radio" class="fincal-option-input fincal-radio" id="rdb-success" value="false" name="rad_Child" checked v-model="model.HaveChildren">

                    <label for="rdb-success" class="healthy-child-radio">ไม่มี</label>
                </div>
            </div>

            <div class="row">
                <div class="col-centered col-md-12">
                    <div class="fincal-group" :class="fieldClassName(formstate.CurrentSalary)">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>รายได้ต่อเดือน</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="CurrentSalary" separator="," v-model="model.CurrentSalary" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" maxlength="11"></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>รายได้ต่อเดือน ตอนเริ่มทำงาน</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="Beginsalary" currency separator="," v-model="model.Beginsalary" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>รายจ่ายต่อเดือน</label>
                        </div>

                        <div class="col-md-12 text-right">
                            <vue-numeric name="CurrentExpense" currency separator="," v-model="model.CurrentExpense" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>ยอดผ่อนชำระหนี้บ้านต่อเดือน</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="Homeloan" currency separator="," v-model="model.Homeloan" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>ยอดผ่อนชำระหนี้รถต่อเดือน</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="Carloan" currency separator="," v-model="model.HomeCarloanloan" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>เงินออมต่อเดือน</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="Saving" currency separator="," v-model="model.Saving" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>สินทรัพย์รวม</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="TotalAsset" currency separator="," v-model="model.TotalAsset" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>สินทรัพย์รวม</label>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>สินทรัพย์สภาพคล่อง</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="QuickAsset" currency separator="," v-model="model.QuickAsset" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>

                    <div class="fincal-group">
                        <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                            <label>หนี้สินรวม</label>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                            <vue-numeric name="TotalDebt" currency separator="," v-model="model.TotalDebt" v-bind:min="0" v-bind:max="99999999999" v-bind:minus="false" empty-value="0" maxlength="11" required></vue-numeric>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-centered col-md-12">
                    <button class="btn btn-primary btn-sm btn-block text-center" type="submit">คำนวณ</button>
                </div>
            </div>
        </vue-form>
        <div>ResultLiquidity :{{ this.FincalResult}}</div>
        <div>{{this.model.HaveChildren}}</div>
        <!-- <div>CurrentExpense :{{ this.model.CurrentExpense}}</div>
                        <div>QuickAsset :{{ this.model.QuickAsset}}</div>-->
        <div class="col-md-12 col-centered">
            <!-- Tab1 -->
            <h1>1. คุณมีสภาพคล่องเพียงพอหรือไม่?</h1>

            <img v-bind:src="ModelResultRecommendQuickAsset.EmotionUrl">
            <div class="ResultNumber">ผลการคำนวณ = {{ this.FincalResult.ResultLiquidity}} เท่าของรายจ่ายต่อเดือน*</div>

            <div>{{ ModelResultRecommendQuickAsset.Message }}</div>
            <div>{{ ModelResultRecommendQuickAsset.ResultRecommendQuickAsset }}</div>

            <div>* เกณฑ์มาตรฐาน คือ {{ModelResultRecommendQuickAsset.RemarkMessage}} เท่าของรายจ่ายต่อเดือน</div>
        </div>
        <!-- Tab2 -->
        <div class="col-md-12 col-centered">
            <h1>2. คุณมีหนี้สินมากเกินไปหรือไม่?</h1>
            <div>
                <img v-bind:src="ModelResultDebt.EmotionUrl">
                <div class="ResultNumber">ผลการคำนวณ = {{this.FincalResult.ResultDebt}} %*</div>

                <div>{{ ModelResultDebt.Message }}</div>
                <div>{{ ModelResultDebt.Result }}</div>
                <div>* เกณฑ์มาตรฐาน คือ น้อยกว่า 50%</div>
            </div>
        </div>
        <!-- Tab3 -->
        <div class="col-md-12 col-centered">
            <h1>3. คุณมีภาระในการผ่อนชำระหนี้สินต่อเดือนสูงเกินไปหรือไม่?</h1>

            <div>
                <img v-bind:src="ModelResultInstallment.EmotionUrl">
                <div class="ResultNumber">ผลการคำนวณ = {{this.FincalResult.ResultInstallment}} %*</div>
                <div>{{ ModelResultInstallment.Message }}</div>
                <div class="ResultNumber">{{ ModelResultInstallment.Result }}</div>
                <div>* เกณฑ์มาตรฐาน คือ น้อยกว่า 40%*</div>
            </div>
        </div>
        <!-- Tab4 -->
        <div class="col-md-12 col-centered">
            <h1>4. คุณมีภาระในการผ่อนชำระหนี้สินที่ไม่ใช่การจดจำนองต่อเดือนสูงเกินไปหรือไม่?</h1>
            <div>
                <img v-bind:src="ModelResultDebtMortgage.EmotionUrl">

                <div class="ResultNumber">ผลการคำนวณ = {{this.FincalResult.ResultDebtMortgage}} %*</div>

                <div>{{ ModelResultDebtMortgage.Message }}</div>
                <div class="ResultNumber">{{ ModelResultDebtMortgage.Result }}</div>
                <div>* เกณฑ์มาตรฐาน คือ น้อยกว่า 15%</div>
            </div>
        </div>
        <!-- Tab4 -->
        <div class="col-md-12 col-centered">
            <h1>5. ทุกวันนี้คุณออมเงินในสัดส่วนที่เหมาะสมหรือไม่?</h1>
            <div>
                <img v-bind:src="ModelResultSaving.EmotionUrl">
                <div class="ResultNumber">ผลการคำนวณ = {{this.FincalResult.ResultSaving}} %*</div>

                <div>{{ ModelResultSaving.Message }}</div>
                <div>{{ ModelResultSaving.Result }}</div>
                <div>* เกณฑ์มาตรฐาน คือ อย่างน้อย 10%</div>
            </div>
        </div>
        <div class="col-md-12 col-centered">
            <h1>6. ระดับสินทรัพย์ที่คุณควรมี</h1>
            <div>
                <img v-bind:src="ModelResultLevelAsset.EmotionUrl">
                <div>ระดับสินทรัพย์ที่ควรมี คือ {{ this.FincalResult.ResultLevelAsset}} บาท*</div>
                <div>
                    * สินทรัพย์อาจอยู่ในรูปแบบของ เงินสด กองทุนรวม หุ้น หรือมูลค่าของสินทรัพย์ ที่ผ่อนชำระแล้ว ณ ราคาตลาด เช่น ซื้อรถมูลค่า 1 ล้านบาท ผ่อนไปแล้ว 7 แสนบาท (70%) ราคาตลาดเท่ากับ 800,000 บาท ดังนั้นมูลค่าสินทรัพย์ที่ผ่อนชำระแล้ว ณ ราคาตลาดเท่ากับ
                    560,000 บาท (800,000*70%)
                </div>
            </div>
        </div>

        <!-- <pre>{{ formstate }}</pre> -->
    </div>
</template>

<script>
    import FincalService from "@/services/api/fincal.service";
    import {
        debug
    } from "util";

    import {
        fincalFn_health
    } from "@/components/financial-health-Function.js";
    //const imgLink = require('../assets/logo.png')
    import {
        FnString
    } from "@/Common/FnString.js";

    export default {
        name: "FinancialHealthCheck",
        data: function () {
            return {
                formstate: {},
                temp: null, //for number
                visible: true, //for number
                model: {
                    CurrentAge: "35",
                    BeginWorkAge: "22",
                    HaveChildren: false,
                    CurrentSalary: "500000",
                    Beginsalary: "10000",
                    CurrentExpense: "15000",
                    Homeloan: "20000",
                    Carloan: "10000",
                    Saving: "0",
                    TotalAsset: "0",
                    QuickAsset: "260000",
                    TotalDebt: "0"
                },
                FincalResult: [], //For Return
                ModelResultRecommendQuickAsset: {
                    EmotionUrl: "",
                    Message: "",
                    ResultRecommendQuickAsset: "",
                    RemarkMessage: ""
                },

                ModelResultDebt: {
                    EmotionUrl: "",
                    Message: "",
                    Result: ""
                },
                ModelResultInstallment: {
                    EmotionUrl: "",
                    Message: "",
                    Result: ""
                },
                ModelResultDebtMortgage: {
                    EmotionUrl: "",
                    Message: "",
                    Result: ""
                },
                ModelResultSaving: {
                    EmotionUrl: "",
                    Message: "",
                    Result: ""
                },
                ModelResultSaving: {
                    EmotionUrl: "",
                    Message: "",
                    Result: ""
                },
                ModelResultLevelAsset: {
                    EmotionUrl: "",
                    Message: "",
                    Result: ""
                }
                //For Display Teb 1
            };
        },
        mounted() { },
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
            dummy: function () { },
            onSubmit: function () {
                if (this.formstate.$invalid) {
                    // alert user and exit early

                    return;
                }
                // otherwise submit form
                this.calculator();
            },

            calculator: function () {
                FincalService.create(this.model).then(response => {
                    this.FincalResult = response.data;

                    this.CalResultRecommendQuickAsset();
                    this.CalResultDebt();
                    this.CalResultInstallment();
                    this.CalResultDebtMortgage();
                    this.CalResultSaving();
                    //this.CalResultLevelAsset();
                });
            },
            CalResultRecommendQuickAsset: function () {
                //region สภาพคล่อง
                var _ResultLiquidity = this.FincalResult.ResultLiquidity;
                var _ResultRecommendQuickAsset = FnString.Method.NumberWithCommas(
                    this.FincalResult.ResultRecommendQuickAsset
                );
                if (
                    this.model.CurrentExpense + this.model.Homeloan + this.model.Carloan ==
                    0
                ) {
                    if (this.model.QuickAsset == 0) {
                        //importanceliquidity = Importance.Low;
                        fincalFn.Method.ShowQuickAssetLow(this, _ResultRecommendQuickAsset);
                    } else {
                        //importanceliquidity = Importance.High;
                        fincalFn.Method.ShowQuickAssetHigh(this, _ResultRecommendQuickAsset);
                    }
                } else {
                    if (this.model.HaveChildren) {
                        //Set Message For Display
                        this.ModelResultRecommendQuickAsset.RemarkMessage = "6-12";

                        if (_ResultLiquidity < 6)
                            //น้อยกว่า
                            fincalFn_health.Method.ShowQuickAssetLow(
                                this,
                                _ResultRecommendQuickAsset
                            );
                        else if (_ResultLiquidity > 12) {
                            //   //มากกว่า
                            fincalFn_health.Method.ShowQuickAssetHigh(
                                this,
                                _ResultRecommendQuickAsset
                            );
                        } else if (_ResultLiquidity >= 6 && _ResultLiquidity <= 12) {
                            //เท่ากัน
                            fincalFn_health.Method.ShowQuickAssetMedium(
                                this,
                                _ResultRecommendQuickAsset
                            );
                        }
                    } else {
                        //Set Message For Display
                        this.ModelResultRecommendQuickAsset.RemarkMessage = "6-12";
                        if (_ResultLiquidity < 3)
                            //น้อยกว่า
                            fincalFn_health.Method.ShowQuickAssetLow(
                                this,
                                _ResultRecommendQuickAsset
                            );
                        else if (_ResultLiquidity > 6) {
                            //   //มากกว่า
                            fincalFn_health.Method.ShowQuickAssetHigh(
                                this,
                                _ResultRecommendQuickAsset
                            );
                        } else if (_ResultLiquidity >= 3 && _ResultLiquidity <= 6) {
                            //เท่ากัน
                            fincalFn_health.Method.ShowQuickAssetMedium(
                                this,
                                _ResultRecommendQuickAsset
                            );
                        }
                    }
                }
            },
            CalResultDebt: function () {
                var _ResultDebt = this.FincalResult.ResultDebt;

                if (this.model.TotalAsset == 0) {
                    if (this.model.TotalDebt == 0) {
                        //importanceDebt = Importance.None;
                        fincalFn_health.Method.ShowDebtNone(this, _ResultDebt);
                    } else {
                        //importanceDebt = Importance.High;
                        fincalFn_health.Method.ShowDebtHigh;
                        this, _ResultDebt;
                    }
                } else {
                    if (this.model.TotalDebt < 50) {
                        //Fixed Defect App Test R1-User Confirm
                        if (this.model.TotalDebt == 0) {
                            //importanceDebt = Importance.None;
                            fincalFn_health.Method.ShowDebtNone(this, _ResultDebt);
                        } else {
                            //importanceDebt = Importance.Low;
                            fincalFn_health.Method.ShowDebtLow(this, _ResultDebt);
                        }
                    } else if (this.model.TotalDebt == 50) {
                        //importanceDebt = Importance.Medium;
                        fincalFn_health.Method.ShowDebtMedium(this, _ResultDebt);
                    } else if (this.model.TotalDebt > 50) {
                        //importanceDebt = Importance.High;
                        fincalFn_health.Method.ShowDebtHigh(this, _ResultDebt);
                    } else {
                        //importanceDebt = Importance.None;
                        fincalFn_health.Method.ShowDebtNone(this, _ResultDebt);
                    }
                }
            },

            //คุณมีภาระในการผ่อนชำระหนี้สินต่อเดือนสูงเกินไปหรือไม่?
            CalResultInstallment: function () {
                var _ResultInstallment = this.FincalResult.ResultInstallment;
                //ภาระผ่อนชำระ

                if (this.model.CurrentSalary == 0) {
                    if (this.model.Homeloan + this.model.Carloan == 0) {
                        //importanceInstallment = Importance.None;
                        fincalFn_health.Method.ShowInstallmentNone(this, _ResultInstallment);
                    } else {
                        //importanceInstallment = Importance.High;
                        fincalFn_health.Method.ShowInstallmentHigh(this, _ResultInstallment);
                    }
                } else {
                    if (_ResultInstallment < 40) {
                        //Fixed Defect App Test R1-User Confirm
                        if (this.model.Homeloan + this.model.Carloan == 0) {
                            //importanceInstallment = Importance.None;
                            fincalFn_health.Method.ShowInstallmentNone(
                                this,
                                _ResultInstallment
                            );
                        } else {
                            //importanceInstallment = Importance.Low;
                            fincalFn_health.Method.ShowInstallmentLow(this, _ResultInstallment);
                        }
                    } else if (_ResultInstallment == 40) {
                        // importanceInstallment = Importance.Medium;
                        fincalFn_health.Method.ShowInstallmentMedium(
                            this,
                            _ResultInstallment
                        );
                    } else if (_ResultInstallment > 40) {
                        //importanceInstallment = Importance.High;
                        fincalFn_health.Method.ShowInstallmentHigh(this, _ResultInstallment);
                    } else {
                        //importanceInstallment = Importance.None;
                        fincalFn_health.Method.ShowInstallmentNone(this, _ResultInstallment);
                    }
                }
            },
            CalResultDebtMortgage: function () {
                var _ResultDebtMortgage = this.FincalResult.ResultDebtMortgage;

                if (this.model.CurrentSalary == 0) {
                    if (this.model.Carloan == 0) {
                        //importanceDebtMortgage = Importance.None;
                        fincalFn_health.Method.ShowDebtMortgageNone(
                            this,
                            _ResultDebtMortgage
                        );
                    } else {
                        //importanceDebtMortgage = Importance.High;
                        fincalFn_health.Method.ShowDebtMortgageHigh(
                            this,
                            _ResultDebtMortgage
                        );
                    }
                } else {
                    if (_ResultDebtMortgage < 15) {
                        //Fixed Defect App Test R1-User Confirm
                        if (this.model.Carloan == 0) {
                            //importanceDebtMortgage = Importance.None;
                            fincalFn_health.Method.ShowDebtMortgageNone(
                                this,
                                _ResultDebtMortgage
                            );
                        } else {
                            // importanceDebtMortgage = Importance.Low;
                            fincalFn_health.Method.ShowDebtMortgageLow(
                                this,
                                _ResultDebtMortgage
                            );
                        }
                    } else if (_ResultDebtMortgage == 15) {
                        // importanceDebtMortgage = Importance.Medium;
                        fincalFn_health.Method.ShowDebtMortgageMedium(
                            this,
                            _ResultDebtMortgage
                        );
                    } else if (_ResultDebtMortgage > 15) {
                        //importanceDebtMortgage = Importance.High;
                        fincalFn_health.Method.ShowDebtMortgageHigh(
                            this,
                            _ResultDebtMortgage
                        );
                    } else {
                        //importanceDebtMortgage = Importance.None;
                        fincalFn_health.Method.ShowDebtMortgageNone(
                            this,
                            _ResultDebtMortgage
                        );
                    }
                }
            },
            //      ออมในสัดส่วนเหมาะสม
            CalResultSaving: function () {
                var _ResultSaving = this.FincalResult.ResultSaving;
                if (this.model.CurrentSalary == 0) {
                    if (this.model.Saving == 0) {
                        //importanceSaving = Importance.None;
                        fincalFn_health.Method.ShowSavingNone(this, _ResultSaving);
                    } else {
                        //importanceSaving = Importance.High;
                        fincalFn_health.Method.ShowSavingHigh(this, _ResultSaving);
                    }
                } else {
                    if (_ResultSaving < 10) {
                        // importanceSaving = Importance.Low;

                        fincalFn_health.Method.ShowSavingLow(this, _ResultSaving);
                    } else if (_ResultSaving == 10) {
                        //importanceSaving = Importance.Medium;
                        fincalFn_health.Method.ShowSavingMedium(this, _ResultSaving);
                    } else if (_ResultSaving > 10) {
                        //importanceSaving = Importance.High;
                        fincalFn_health.Method.ShowSavingHigh(this, _ResultSaving);
                    } else {
                        // importanceSaving = Importance.None;
                        fincalFn_health.Method.ShowSavingNone(this, _ResultSaving);
                    }
                }
            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->

<style scoped>

    .row img {
        max-height: 15em;
        width: 100%;
    }

    .row h3 {
        cursor: pointer;
    }

    .col-centered {
        float: none;
        margin: 0 auto;
    }

    .required-field > label::after {
        content: "*";
        color: red;
        margin-left: 0.25rem;
    }

    .form-control-feedback {
        content: "*";
        color: red;
        margin-left: 0;
        text-align: left;
        padding-left: 21px;
    }

    .ResultNumber {
        font-size: 25px;
    }

    .Remark {
        font-size: 10px;
    }

    .fincal-group {
        margin: 0;
        margin-top: 10px;
    }
</style>
