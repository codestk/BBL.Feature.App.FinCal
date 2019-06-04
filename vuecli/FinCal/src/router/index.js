import Vue from 'vue'
import Router from 'vue-router'
import VueForm from 'vue-form'

import FinancialHealthCheck from '@/components/FinancialHealthCheck/financial-health-check'
import SavingPlan from '@/components/SavingPlan/SavingPlan'
import RetrimentPlan from '@/components/RetrimentPlan/RetrimentPlan'
import TaxSavingPlan from '@/components/TaxSavingPlan/TaxSavingPlan'
import HomeLoanPlan from '@/components/HomeLoanPlan/HomeLoanPlan'



Vue.use(Router)

var vueFormOption = new Vue({
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(VueForm, vueFormOption)
export default new Router({
  routes: [{
      path: '/FinancialHealthCheck',
      name: 'FinancialHealthCheck',
      component: FinancialHealthCheck
    },
    {
      path: '/SavingPlan',
      name: 'SavingPlan',
      component: SavingPlan
    },

    {
      path: '/RetrimentPlan',
      name: 'RetrimentPlan',
      component: RetrimentPlan
    },
    {
      path: '/TaxSavingPlan',
      name: 'TaxSavingPlan',
      component: TaxSavingPlan
    },
    {
      path: '/HomeLoanPlan',
      name: 'HomeLoanPlan',
      component: HomeLoanPlan
    }
  ]
})
