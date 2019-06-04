<template>
    <div class="Retirement">
        <vue-form :state="formstate" @submit.prevent="onSubmit" class="general-form">
            <div class="row">
                <div class="col-centered col-md-12">
                    <p class="section-header">แผนเกษียณอายุ</p>
                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.CurrentAGE)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>อายุของคุณ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="CurrentAGE"
                                       v-model.lazy="model.CurrentAGE"
                                       type="number"
                                       required
                                       min="0"
                                       max="120"
                                       onKeyPress="if(this.value.length==5) return false;">
                            </div>
                        </div>

                        <field-messages name="CurrentAGE"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.CurrentAGE)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.RetireAGE)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>อายุตอนเกษียณ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="RetireAGE"
                                       v-model.lazy="model.RetireAGE"
                                       type="number"
                                       required
                                       min="0"
                                       max="120"
                                       onKeyPress="if(this.value.length==5) return false;">
                            </div>
                        </div>

                        <field-messages name="RetireAGE"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.RetireAGE)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.SavingAGE)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>อยู่จนถึงอายุ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="SavingAGE"
                                       v-model.lazy="model.SavingAGE"
                                       type="number"
                                       required
                                       min="0"
                                       max="120"
                                       onKeyPress="if(this.value.length==5) return false;">
                            </div>
                        </div>

                        <field-messages name="SavingAGE"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.SavingAGE)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.ChargesRetireAmount)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>หลังเกษียณอยากใช้เงินเดือนละ</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="ChargesRetireAmount"
                                       v-model.lazy="model.ChargesRetireAmount"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="ChargesRetireAmount"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.ChargesRetireAmount)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.SavingBeginAmount)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>มีเงินออมไว้แล้ว</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="SavingBeginAmount"
                                       v-model.lazy="model.SavingBeginAmount"
                                       type="number"
                                       required
                                       min="0"
                                       max="99999999999"
                                       onKeyPress="if(this.value.length==12) return false;">
                            </div>
                        </div>

                        <field-messages name="SavingBeginAmount"
                                        show="$touched || $submitted"
                                        class="form-control-feedback" :class="fieldClassName(formstate.SavingBeginAmount)">
                            <div slot="required">Name is a required field</div>
                            <div slot="min">min</div>
                            <div slot="max">max</div>
                        </field-messages>
                    </validate>

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.CompensationRate)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ผลตอบแทนต่อปีที่คาดหวัง (%)</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="CompensationRate"
                                       v-model.lazy="model.CompensationRate"
                                       type="number"
                                       required
                                       min="0"
                                       max="100"
                                       onKeyPress="if(this.value.length==5) return false;">
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

                    <validate auto-label class="form-group required-field">
                        <div class="fincal-group" :class="fieldClassName(formstate.SavingIncRate)">
                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                <label>ต้องการออมเพิ่มขึ้นปีละ (%)</label>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                <input name="SavingIncRate"
                                       v-model.lazy="model.SavingIncRate"
                                       type="number"
                                       required
                                       min="0"
                                       max="100"
                                       onKeyPress="if(this.value.length==5) return false;">
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
                            <!--<p>เงินกองทุนสำรองเลี้ยงชีพ</p>-->
                            <!--<ProvidentFund CurrentAGE="this.model.CurrentAGE" RetireAGE="this.model.RetireAGE" SavingAGE="this.model.SavingAGE" ChargesRetireAmount="this.model.ChargesRetireAmount" SavingBeginAmount="this.model.SavingBeginAmount" CompensationRate="this.model.CompensationRate" SavingIncRate="this.model.SavingIncRate"></ProvidentFund>-->
                            <div class="ProvidentFund">
                                <div class="row">
                                    <div class="col-centered col-md-12">
                                        <validate auto-label class="form-group required-field">
                                            <div class="fincal-group" :class="fieldClassName(formstate.SavingCurrent)">
                                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                    <label>ยอดสะสม ณ ปัจจุบัน</label>
                                                </div>

                                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                    <input name="SavingCurrent"
                                                           v-model.lazy="model.SavingCurrent"
                                                           type="number"
                                                           required=""
                                                           min="0"
                                                           max="99999999999"
                                                           onKeyPress="if(this.value.length==12) return false;">
                                                </div>
                                            </div>

                                            <field-messages name="SavingCurrent"
                                                            show="$touched || $submitted"
                                                            class="form-control-feedback" :class="fieldClassName(formstate.SavingCurrent)">
                                                <div slot="required">Name is a required field</div>
                                                <div slot="min">min</div>
                                                <div slot="max">max</div>
                                            </field-messages>
                                        </validate>

                                        <validate auto-label class="form-group required-field">
                                            <div class="fincal-group" :class="fieldClassName(formstate.IncomeRetire)">
                                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                    <label>เงินเดือน</label>
                                                </div>

                                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                    <input name="IncomeRetire"
                                                           v-model.lazy="model.IncomeRetire"
                                                           type="number"
                                                           required=""
                                                           min="0"
                                                           max="99999999999"
                                                           onKeyPress="if(this.value.length==12) return false;">
                                                </div>
                                            </div>

                                            <field-messages name="IncomeRetire"
                                                            show="$touched || $submitted"
                                                            class="form-control-feedback" :class="fieldClassName(formstate.IncomeRetire)">
                                                <div slot="required">Name is a required field</div>
                                                <div slot="min">min</div>
                                                <div slot="max">max</div>
                                            </field-messages>
                                        </validate>

                                        <validate auto-label class="form-group required-field">
                                            <div class="fincal-group" :class="fieldClassName(formstate.PVDRetire)">
                                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                    <label>อัตราสะสมกองทุนสำรองเลี้ยงชีพ (%)</label>
                                                </div>

                                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                    <input name="PVDRetire"
                                                           v-model.lazy="model.PVDRetire"
                                                           type="number"
                                                           required=""
                                                           min="0"
                                                           max="15"
                                                           onKeyPress="if(this.value.length==5) return false;">
                                                </div>
                                            </div>

                                            <field-messages name="PVDRetire"
                                                            show="$touched || $submitted"
                                                            class="form-control-feedback" :class="fieldClassName(formstate.PVDRetire)">
                                                <div slot="required">Name is a required field</div>
                                                <div slot="min">min</div>
                                                <div slot="max">max</div>
                                            </field-messages>
                                        </validate>

                                        <validate auto-label class="form-group required-field">
                                            <div class="fincal-group" :class="fieldClassName(formstate.IncIncomeRetire)">
                                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                    <label>อัตราการเพิ่มขึ้นของเงินเดือน (%)</label>
                                                </div>

                                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                    <input name="IncIncomeRetire"
                                                           v-model.lazy="model.IncIncomeRetire"
                                                           type="number"
                                                           required=""
                                                           min="0"
                                                           max="100"
                                                           onKeyPress="if(this.value.length==5) return false;">
                                                </div>
                                            </div>

                                            <field-messages name="IncIncomeRetire"
                                                            show="$touched || $submitted"
                                                            class="form-control-feedback" :class="fieldClassName(formstate.IncIncomeRetire)">
                                                <div slot="required">Name is a required field</div>
                                                <div slot="min">min</div>
                                                <div slot="max">max</div>
                                            </field-messages>
                                        </validate>

                                        <validate auto-label class="form-group required-field">
                                            <div class="fincal-group" :class="fieldClassName(formstate.CompensationRateRetire)">
                                                <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                    <label>ผลตอบแทนต่อปีที่คาดหวัง (%)</label>
                                                </div>

                                                <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                    <input name="CompensationRateRetire"
                                                           v-model.lazy="model.CompensationRateRetire"
                                                           type="number"
                                                           required=""
                                                           min="0"
                                                           max="100"
                                                           onKeyPress="if(this.value.length==5) return false;">
                                                </div>
                                            </div>

                                            <field-messages name="CompensationRateRetire"
                                                            show="$touched || $submitted"
                                                            class="form-control-feedback" :class="fieldClassName(formstate.CompensationRateRetire)">
                                                <div slot="required">Name is a required field</div>
                                                <div slot="min">min</div>
                                                <div slot="max">max</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="currentTab === 'tab2'">
                            <!--<p>กองทุน RMF</p>-->
                            <!--<RMFFund CurrentAGE="this.model.CurrentAGE" RetireAGE="this.model.RetireAGE" SavingAGE="this.model.SavingAGE" ChargesRetireAmount="this.model.ChargesRetireAmount" SavingBeginAmount="this.model.SavingBeginAmount" CompensationRate="this.model.CompensationRate" SavingIncRate="this.model.SavingIncRate"></RMFFund>-->
                            <div class="row">
                                <div class="col-centered col-md-12">
                                    <validate auto-label class="form-group required-field">
                                        <div class="fincal-group" :class="fieldClassName(formstate.RMFSumRetire)">
                                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                <label>ยอดสะสม ณ ปัจจุบัน</label>
                                            </div>

                                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                <input name="RMFSumRetire"
                                                       v-model.lazy="model.RMFSumRetire"
                                                       type="number"
                                                       required=""
                                                       min="0"
                                                       max="50000000"
                                                       onKeyPress="if(this.value.length==9) return false;">
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

                                    <validate auto-label class="form-group required-field">
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
                                                       max="500000"
                                                       onKeyPress="if(this.value.length==7) return false;">
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

                                    <validate auto-label class="form-group required-field">
                                        <div class="fincal-group" :class="fieldClassName(formstate.RMFCompensationRateRetire)">
                                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                <label>ผลตอบแทนต่อปีที่คาดหวัง (%)</label>
                                            </div>

                                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                <input name="RMFCompensationRateRetire"
                                                       v-model.lazy="model.RMFCompensationRateRetire"
                                                       type="number"
                                                       required=""
                                                       min="0"
                                                       max="30"
                                                       onKeyPress="if(this.value.length==5) return false;">
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
                        </div>
                        <div v-if="currentTab === 'tab3'">
                            <!--<p>เงินสะสม/เงินก้อนตอนเกษียณ</p>-->
                            <!--<CumulativeMoney CurrentAGE="this.model.CurrentAGE" RetireAGE="this.model.RetireAGE" SavingAGE="this.model.SavingAGE" ChargesRetireAmount="this.model.ChargesRetireAmount" SavingBeginAmount="this.model.SavingBeginAmount" CompensationRate="this.model.CompensationRate" SavingIncRate="this.model.SavingIncRate"></CumulativeMoney>-->
                            <div class="row">
                                <div class="col-centered col-md-12">
                                    <validate auto-label class="form-group required-field">
                                        <div class="fincal-group" :class="fieldClassName(formstate.SumYearRetire)">
                                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                <label>ยอดสะสม ณ ปัจจุบัน</label>
                                            </div>

                                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                <input name="SumYearRetire"
                                                       v-model.lazy="model.SumYearRetire"
                                                       type="number"
                                                       required=""
                                                       min="0"
                                                       max="99999999999"
                                                       onKeyPress="if(this.value.length==12) return false;">
                                            </div>
                                        </div>

                                        <field-messages name="SumYearRetire"
                                                        show="$touched || $submitted"
                                                        class="form-control-feedback" :class="fieldClassName(formstate.SumYearRetire)">
                                            <div slot="required">Name is a required field</div>
                                            <div slot="min">min</div>
                                            <div slot="max">max</div>
                                        </field-messages>
                                    </validate>

                                    <validate auto-label class="form-group required-field">
                                        <div class="fincal-group" :class="fieldClassName(formstate.YearCompensationRateRetire)">
                                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                <label>ผลตอบแทนต่อปีที่คาดหวัง (%)</label>
                                            </div>

                                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                <input name="YearCompensationRateRetire"
                                                       v-model.lazy="model.YearCompensationRateRetire"
                                                       type="number"
                                                       required=""
                                                       min="0"
                                                       max="100"
                                                       onKeyPress="if(this.value.length==5) return false;">
                                            </div>
                                        </div>

                                        <field-messages name="YearCompensationRateRetire"
                                                        show="$touched || $submitted"
                                                        class="form-control-feedback" :class="fieldClassName(formstate.YearCompensationRateRetire)">
                                            <div slot="required">Name is a required field</div>
                                            <div slot="min">min</div>
                                            <div slot="max">max</div>
                                        </field-messages>
                                    </validate>

                                    <validate auto-label class="form-group required-field">
                                        <div class="fincal-group" :class="fieldClassName(formstate.OneTimeMoneyRetire)">
                                            <div class="col-md-8 col-sm-8 col-xs-8 fincal-text-left">
                                                <label>เงินก้อนที่คาดว่าจะได้รับครั้งเดียว ณ วันเกษียณ</label>
                                            </div>

                                            <div class="col-md-4 col-sm-4 col-xs-4 fincal-text-right">
                                                <input name="OneTimeMoneyRetire"
                                                       v-model.lazy="model.OneTimeMoneyRetire"
                                                       type="number"
                                                       required=""
                                                       min="0"
                                                       max="99999999999"
                                                       onKeyPress="if(this.value.length==12) return false;">
                                            </div>
                                        </div>

                                        <field-messages name="OneTimeMoneyRetire"
                                                        show="$touched || $submitted"
                                                        class="form-control-feedback" :class="fieldClassName(formstate.OneTimeMoneyRetire)">
                                            <div slot="required">Name is a required field</div>
                                            <div slot="min">min</div>
                                            <div slot="max">max</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <p>ออมเงินเพิ่มขึ้นปีละ {{this.twoDigit(this.model.SavingIncRate)}} บาท</p>
                    <p>เพื่อใช้เงินหลังเกษียณเดือนละ {{this.twoDigit(this.result.FvMonthlyGoals)}} ปีข้างหน้า</p>
                    <p class="note">*จำนวนเงินในอนาคตของเงินที่ต้องการใช้หลังเกษียณ หลังคำนวณเงินเฟ้อ 3% ต่อปีแล้ว และอัตราผลตอบแทนหลังเกษียณอยู่ที่ 3% ต่อปี</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from "../Common/VueTabsWithActiveLine.vue";
    import callapi from "../Common/apicall.js";
    //import ProvidentFund from "./ProvidentFund";
    //import RMFFund from "./RMFFund";
    //import CumulativeMoney from "./CumulativeMoney";

    const TABS = [
        {
            title: "เงินกองทุนสำรองเลี้ยงชีพ",
            value: "tab1"
        },
        {
            title: "กองทุน RMF",
            value: "tab2"
        },
        {
            title: "เงินสะสม/เงินก้อนตอนเกษียณ",
            value: "tab3"
        }
    ];

    export default {
        data: function () {
            return {
                formstate: {},
                model: {
                    CurrentAGE: 30,
                    RetireAGE: 60,
                    SavingAGE: 80,
                    ChargesRetireAmount: 20000,
                    SavingBeginAmount: 0,
                    CompensationRate: 3.0,
                    SavingIncRate: 0,

                    SavingCurrent: 0,
                    IncomeRetire: 0,
                    PVDRetire: 0,
                    IncIncomeRetire: 0,
                    CompensationRateRetire: 0,

                    RMFSumRetire: 0,
                    RMFSavingRateRetire: 0,
                    RMFCompensationRateRetire: 0,

                    SumYearRetire: 0,
                    YearCompensationRateRetire: 0,
                    OneTimeMoneyRetire: 0
                },
                temp: {
                    SavingCurrent: 0,
                    IncomeRetire: 0,
                    PVDRetire: 0,
                    IncIncomeRetire: 0,
                    CompensationRateRetire: 0,

                    RMFSumRetire: 0,
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
                },
                tabs: TABS,
                currentTab: "tab1"
            };
        },
        components: {
            Tabs
            //ProvidentFund,
            //RMFFund,
            //CumulativeMoney
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
                var response = callapi.post(Server + EndPoint, Retire, this.model, ocpkey).then(response => {
                    console.log(response);
                    this.result.TotalChargesValue = response.data.TotalChargesValue;
                    this.result.SavingMonth = response.data.SavingMonth;
                    this.result.FvMonthlyGoals = response.data.FvMonthlyGoals;
                    $('#result').fadeIn(400);
                }).catch(e => {
                    this.errors.push(e);
                })
            },
            handleClick(newTab) {
                this.formstate._reset();
                $('#result').fadeOut(200);

                if (this.currentTab === 'tab1') {
                    this.temp.SavingCurrent = this.model.SavingCurrent;
                    this.temp.IncomeRetire = this.model.IncomeRetire;
                    this.temp.PVDRetire = this.model.PVDRetire;
                    this.temp.IncIncomeRetire = this.model.IncIncomeRetire;
                    this.temp.CompensationRateRetire = this.model.CompensationRateRetire;
                    this.model.SavingCurrent = 0;
                    this.model.IncomeRetire = 0;
                    this.model.PVDRetire = 0;
                    this.model.IncIncomeRetire = 0;
                    this.model.CompensationRateRetire = 0;

                    if (newTab === 'tab2') {
                        this.model.RMFSumRetire = this.temp.RMFSumRetire;
                        this.model.RMFSavingRateRetire = this.temp.RMFSavingRateRetire;
                        this.model.RMFCompensationRateRetire = this.temp.RMFCompensationRateRetire;
                    }

                    if (newTab === 'tab3') {
                        this.model.SumYearRetire = this.temp.SumYearRetire;
                        this.model.YearCompensationRateRetire = this.temp.YearCompensationRateRetire;
                        this.model.OneTimeMoneyRetire = this.temp.OneTimeMoneyRetire;
                    }

                } else if (this.currentTab === 'tab2') {
                    if (newTab === 'tab1') {
                        this.model.SavingCurrent = this.temp.SavingCurrent;
                        this.model.IncomeRetire = this.temp.IncomeRetire;
                        this.model.PVDRetire = this.temp.PVDRetire;
                        this.model.IncIncomeRetire = this.temp.IncIncomeRetire;
                        this.model.CompensationRateRetire = this.temp.CompensationRateRetire;
                    }

                    this.temp.RMFSumRetire = this.model.RMFSumRetire;
                    this.temp.RMFSavingRateRetire = this.model.RMFSavingRateRetire;
                    this.temp.RMFCompensationRateRetire = this.model.RMFCompensationRateRetire;
                    this.model.RMFSumRetire = 0;
                    this.model.RMFSavingRateRetire = 0;
                    this.model.RMFCompensationRateRetire = 0;

                    if (newTab === 'tab3') {
                        this.model.SumYearRetire = this.temp.SumYearRetire;
                        this.model.YearCompensationRateRetire = this.temp.YearCompensationRateRetire;
                        this.model.OneTimeMoneyRetire = this.temp.OneTimeMoneyRetire;
                    }
                } else if (this.currentTab === 'tab3') {
                    if (newTab === 'tab1') {
                        this.model.SavingCurrent = this.temp.SavingCurrent;
                        this.model.IncomeRetire = this.temp.IncomeRetire;
                        this.model.PVDRetire = this.temp.PVDRetire;
                        this.model.IncIncomeRetire = this.temp.IncIncomeRetire;
                        this.model.CompensationRateRetire = this.temp.CompensationRateRetire;
                    }

                    if (newTab === 'tab2') {
                        this.model.RMFSumRetire = this.temp.RMFSumRetire;
                        this.model.RMFSavingRateRetire = this.temp.RMFSavingRateRetire;
                        this.model.RMFCompensationRateRetire = this.temp.RMFCompensationRateRetire;
                    }


                    this.temp.SumYearRetire = this.model.SumYearRetire;
                    this.temp.YearCompensationRateRetire = this.model.YearCompensationRateRetire;
                    this.temp.OneTimeMoneyRetire = this.model.OneTimeMoneyRetire;
                    this.model.SumYearRetire = 0;
                    this.model.YearCompensationRateRetire = 0;
                    this.model.OneTimeMoneyRetire = 0;
                }

                this.currentTab = newTab;

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
