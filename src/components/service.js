import client from "../api/client";

const advertsBaseUrl = '/api/'

export const getLatestAdverts = () => {
    const url = `${advertsBaseUrl}/v1/adverts`
    return client.get(url)
}

export const createAdvert = (advert) => {
    const url = `${advertsBaseUrl}/v1/adverts`
    return client.post(url, advert)

}

export const getTweet = (advertId) => {
    const url = `${advertsBaseUrl}/v1/adverts/${advertId}`
    return client.get(url)
}