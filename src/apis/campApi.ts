import { serverAPI } from './common'

import { CampType } from '../types/campType'

export const getCampsByType = async (type: CampType) => {
  return await serverAPI
    .get(`/camps?type=${type}`)
    .then(res => res.data.data)
    .catch(err => console.error(err))
}

export const getCamp = async (campId: number) => {
  return await serverAPI
    .get(`/camps/${campId}`)
    .then(res => res.data.data)
    .catch(err => console.error(err))
}