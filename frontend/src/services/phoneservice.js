import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addNew = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const removePerson = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

const update = async (id, newPerson) => {
  const response = await axios.put(`${baseUrl}/${id}`, newPerson);
  return response.data;
};

const personService = {
  getAll,
  addNew,
  removePerson,
  update,
};

export default personService;
