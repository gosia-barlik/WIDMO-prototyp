import { api } from "./config/axiosConfigs"
import { defineCancelApiObject } from "./config/axiosUtils"

export const JobOfferContentAPI = {

  //zapisanie ogłoszenia
  create: async function (data, cancel = false) {
    const response = await api.request({
      url: '/Creator/JobOffer/Content',
      method: "POST",
      data,
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },

  //aktualizacja ogłoszenia
  update: async function (data, cancel = false) {
    const response = await api.request({
      url: '/Creator/JobOffer/Content',
      method: "PUT",
      data,
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },

  //pobranie zapisanego ogłoszenia
  get: async function (offerId, cancel = false) {
    const response = await api.request({
      url: `/Creator/JobOffer/Content/${offerId}`,
      method: "GET",
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  }
}

const cancelApiObject = defineCancelApiObject(JobOfferContentAPI);