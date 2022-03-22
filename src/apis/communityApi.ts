import { serverAPI } from './common'

export const getCommunities = async () => {
  return await serverAPI
    .get(`/communities`)
    .then(res => res.data.data)
    .catch(err => console.error(err))
}

export const getCommunity = async (communityId: number) => {
  return await serverAPI
    .get(`/communities/${communityId}`)
    .then(res => res.data.data)
    .catch(err => console.error(err))
}