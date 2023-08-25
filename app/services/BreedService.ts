'use client'
import api from '../api';

const getAll = (limit: number | string) => {
  return api.get(`/breeds?limit=${limit}`);
};

const get = (id: string) => {
  return api.get(`/images/search?breed_ids=${id}&limit=5`);
};

const BreedService = {
  getAll,
  get,
};

export default BreedService;