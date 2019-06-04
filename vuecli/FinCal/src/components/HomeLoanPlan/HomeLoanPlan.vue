<template>
    <div class="HomeLoan">
        <vue-form :state="formstate" @submit.prevent="onSubmit" class="general-form">
            <div class="row">
                <div class="col-centered col-md-12">
                    <p class="section-header">แผนคำนวณยอดผ่อนชำระสินเชื่อบ้าน</p>
                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.LimitAmount)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>วงเงินที่ขอสินเชื่อ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <!-- <input type="text" name="name" class="form-control" required v-model.lazy="model.CurrentAge"> -->
                                <input name="LimitAmount"
                                       v-model.lazy="model.LimitAmount"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="LimitAmount" show="$touched || $submitted" class="form-control-feedback" :class="fieldClassName(formstate.LimitAmount)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">กรุณากรอกจำนวนเงิน 0-10,000,000 บาท</div>
                            <div slot="max">กรุณากรอกจำนวนเงิน 0-10,000,000 บาท</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.Term)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ระยะเวลา</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="Term"
                                       v-model.lazy="model.Term"
                                       type="number"
                                       required
                                       min="0"
                                       max="30"
                                       onKeyPress="if(this.value.length==2) return false;">
                            </div>
                        </div>

                        <field-messages name="Term" show="$touched || $submitted" class="form-control-feedback" :class="fieldClassName(formstate.Term)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">กรุณากรอกระยะเวลา 1-30 ปี</div>
                            <div slot="max">กรุณากรอกระยะเวลา 1-30 ปี</div>
                        </field-messages>
                    </validate>
                </div>

                <div class="col-centered col-xs-11 col-sm-8 col-md-10 col-lg-5">
                    <button class="btn btn-primary btn-sm btn-block text-center" type="submit">คำนวณ</button>
                </div>
            </div>

            <div class="row" id="result" v-show="false">
                <div class="col-md-12 col-centered">
                    <div class="result">
                        <p>ยอดผ่อนชำระรายเดือน {{ this.twoDigit(this.result.LowIncome)}} บาท</p>
                        <p>รายได้ต่อเดือนขั้นต่ำ {{this.twoDigit(this.result.PaymentAmount)}} บาท</p>
                    </div>
                </div>
            </div>
        </vue-form>
    </div>
</template>

<script>
    import callapi from "../Common/apicall.js";
    export default {
        data: function () {
            return {
                formstate: {},
                model: {
                    LimitAmount: 5000000,
                    Term: 20
                },
                result: {
                    LowIncome: 0,
                    PaymentAmount: 0
                }
            };
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
                var response = callapi.post(Server + EndPoint, HomeLoan, this.model, ocpkey).then(response => {
                    this.result.LowIncome = response.data.LowIncome;
                    this.result.PaymentAmount = response.data.PaymentAmount;
                    $('#result').fadeIn(400);
                }).catch(e => {
                    this.errors.push(e);
                })
            }
        }
    };
</script>

<style>

    .pad-section {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .section-header {
        margin-top: 10px;
        margin-bottom: 20px;
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
        transition: all 0.3s;
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
        transition: all 0.3s;
    }

    .tabs-content {
        font-size: 20px;
    }

    .result {
        margin-top: 20px;
        border-radius: 10px;
        background: #233a58;
    }

        .result p {
            line-height: 2rem;
        }
</style>
