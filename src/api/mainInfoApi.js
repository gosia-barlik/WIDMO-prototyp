import { api } from "./config/axiosConfigs"
import { defineCancelApiObject } from "./config/axiosUtils"

export const MainInfoAPI = {

  //zapisanie ogłoszenia
  create: async function (mainInfo, cancel = false) {
    const response = await api.request({
      url: '/Creator/JobOffer',
      method: "POST",
      data: mainInfo,
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.mainInfoDetails;
  },

  //aktualizacja ogłoszenia
  update: async function (mainInfo, cancel = false) {
    const response = await api.request({
      url: '/Creator/JobOffer',
      method: "PUT",
      data: mainInfo,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.mainInfoDetails;
  },

  //pobranie zapisanego ogłoszenia
  get: async function (offerId, cancel = false) {
    const response = await api.request({
      url: `/Creator/JobOffer/${offerId}`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.positionsDetalis
  }
}

const cancelApiObject = defineCancelApiObject(MainInfoAPI);