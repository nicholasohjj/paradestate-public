import axios from 'axios'

const baseUrl = "/api/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNew = async (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  const response = await request
  return response.data
}

const removePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const update = async (id,newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson)
  const response = await request
  return response.data
  
}

export default {getAll, addNew, removePerson, update}