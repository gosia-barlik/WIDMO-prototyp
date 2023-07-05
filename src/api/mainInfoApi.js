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

    return response.data;
  },

  //aktualizacja ogłoszenia
  update: async function (mainInfo, cancel = false) {
    const response = await api.request({
      url: '/Creator/JobOffer',
      method: "PUT",
      data: mainInfo,
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },

  //pobranie zapisanego ogłoszenia
  get: async function (offerId, cancel = false) {
    const response = await api.request({
      url: `/Creator/JobOffer/${offerId}`,
      method: "GET",
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },

  //pobranie listy ogłoszeń
  list: async function (cancel = false) {
    const response = await api.request({
      url: "/Creator/JobOffer/List",
      method: "GET",
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  }
}

const cancelApiObject = defineCancelApiObject(MainInfoAPI);