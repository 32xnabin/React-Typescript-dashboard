import axios from 'axios'
require('dotenv').config()

const API = process.env.REACT_APP_API_URL

export const SignUp = async (data: any): Promise<any> => {
    return axios
      .post(`${API}/users/login`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
  
  export const activate = async (data: any): Promise<any> => {
    return axios
      .post(`${API}/users/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
  
  export const loginUser = async (data: any): Promise<any> => {
    return axios
      .post(`${API}/users/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
  
  export const forgotPassword = async (data: any): Promise<any> => {
    return axios
      .patch(`${API}/users/forgot`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
  
  export const validateResetToken = async (data: any): Promise<any> => {
    return axios
      .post(`${API}/users/validate`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
  export const resetPassword = async (data: any): Promise<any> => {
    return axios
      .patch(`${API}/users/reset`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }