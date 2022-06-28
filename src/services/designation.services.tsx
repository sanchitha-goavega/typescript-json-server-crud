import api from './api';

const getData = async () => {
    const response = await api.get('/designation');
    return response.data;
}
const deleteData = async (id:any) => {
    const response = await api.delete(`/designation/${id}`);
    return response.data;
}
const getOne = async (id:any) => {
    const response = await api.get(`/designation/${id}`)
    return response.data;
}
const updateDesignation =(id:any,values:any)=>{
    return api.patch(`http://localhost:5000/designation/${id}`, values);
}
const createDesignation =(values:any)=>{
    return api.post(`http://localhost:5000/designation/`, values);
}



const TodoService = {
  getData,
  deleteData,
  getOne,
  createDesignation,
  updateDesignation,
};

export default TodoService;