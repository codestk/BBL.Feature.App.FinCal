import Axios from 'axios'

const RESOURCE_NAME = '/FinancialHealthCalculator'
var PARAMS = {
  'PARAMNAME1': 'PARAMVALUE1',
}

var headers = {
  'Ocp-Apim-Subscription-Key': '249ded98f9c34100870ee1a53a342da0',

}
export default {
  getAll () {
    return Axios.get(RESOURCE_NAME, {PARAMS, headers})
  },

  get (id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`)
  },

  create (data) {
    return Axios.post(RESOURCE_NAME, data, {PARAMS, headers})
  },

  update (id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data)
  },

  delete (id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`)
  }
}
