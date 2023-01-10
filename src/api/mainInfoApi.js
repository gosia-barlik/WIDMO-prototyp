import { api } from "./config/axiosConfigs"
import { defineCancelApiObject } from "./config/axiosUtils"

export const MainInfoAPI = {

  //zapisanie ogłoszenia
  create: async function (mainInfo, cancel = false) {
    const response = await api.request({
      url: `/mainInfo`,
      method: "POST",
      data: mainInfo,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.mainInfoDetails;
  },

  //pobranie zapisanego ogłoszenia
  get: async function (offerId, cancel = false) {
    const response = await api.request({
      url: `/mainInfo/${offerId}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.positionsDetalis
  }
}

const cancelApiObject = defineCancelApiObject(MainInfoAPI);