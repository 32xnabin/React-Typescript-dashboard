import axios from 'axios'
import { Myboscase } from '../../types'
require('dotenv').config()

const API = process.env.REACT_APP_API_URL

export const createCase = async (
  myboscase: Myboscase,
): Promise<Myboscase[]> => {
  const token = localStorage.getItem('token')
  return axios
    .post(
      `${API}/cases`,
      { ...myboscase },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return null
    })
}

export const getAllCases = async (): Promise<Myboscase[]> => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${API}/cases`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export const getCaseById = async (id: string): Promise<Myboscase> => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${API}/cases/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export const updateCase = async (data: any): Promise<Myboscase> => {
  const token = localStorage.getItem('token')
  return axios
    .put(`${API}/cases/${data.id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Length': `${Buffer.byteLength(data)}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export const deleteCase = async (id: string): Promise<Myboscase> => {
  const token = localStorage.getItem('token')
  return axios
    .delete(`${API}/cases/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export const uploadImage = async (file): Promise<any> => {
  const token = localStorage.getItem('token')
  let formData = new FormData()
  formData.append('file', file)
  return axios
    .post(`${API}/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}