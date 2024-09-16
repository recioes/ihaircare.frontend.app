import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7266/api', // URL do backend local
});

// Cria um novo tratamento (POST)
export const createSchedule = (schedule) => api.post('/schedule', schedule);

// Atualiza um tratamento (PUT)
export const updateSchedule = (id, schedule) => api.put(`/schedule/${id}`, schedule);

// Exclui um tratamento (DELETE)
export const deleteSchedule = (id) => api.delete(`/schedule/${id}`);

// Obtém todos os tratamentos (GET)
export const getAllSchedules = () => api.get('/schedule');

// Obtém um tratamento por ID (GET)
export const getScheduleById = (id) => api.get(`/schedule/${id}`);
