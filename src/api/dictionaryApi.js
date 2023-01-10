import { api } from "./config/axiosConfigs"
import { defineCancelApiObject } from "./config/axiosUtils"

export const DictionaryAPI = {
  country: async function (countryName, cancel = false) {
    const response = await api.request({
      url: `/country/${countryName}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.search.countryName].handleRequestCancellation().signal : undefined,
    })

    return response.data.countries
  },

  voivodeship: async function (voivodeshipName, cancel = false) {
    const response = await api.request({
      url: `/voivodeship/${voivodeshipName}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.search.voivodeshipName].handleRequestCancellation().signal : undefined,
    })

    return response.data.voivodeships
  }
}

const cancelApiObject = defineCancelApiObject(DictionaryAPI)