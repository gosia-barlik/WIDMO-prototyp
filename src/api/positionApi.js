import { api } from "./config/axiosConfigs"
import { defineCancelApiObject } from "./config/axiosUtils"

export const PositionAPI = {
  search: async function (name, cancel = false) {

    //podpowiedzi do wyszykiwarki stanowisk
    const response = await api.request({
      url: `/position/search/${name}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.positions
  },

  //wygenerowane ogłoszenie
  getJobPosting: async function (name, cancel = false) {
    const response = await api.request({
      url: `/position/${name}/jobPosting`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.positionsDetalis
  },

  //podpowiedzi w zakładce przykładowe ogłoszenia 
  getExamples: async function (positionName, cancel = false) {
    const response = await api.request({
      url: `/position/examples/${positionName}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.get.positionName].handleRequestCancellation().signal : undefined,
    })

    return response.data.positionsDetalis
  },

  //podpowiedzi w zakładce ZRK
  getZrkInfo: async function (positionName, cancel = false) {
    const response = await api.request({
      url: `/position/zrkInfo/${positionName}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.get.positionName].handleRequestCancellation().signal : undefined,
    })

    return response.data.positionsDetalis
  },
}

const cancelApiObject = defineCancelApiObject(PositionAPI)