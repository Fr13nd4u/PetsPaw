'use client'
import api from '../api';

const getAll = (limit: number) => {
  return api.get(`/breeds?limit=${limit}`);
};

const get = (id: string) => {
  return api.get(`/breeds/${id}`);
};

const BreedService = {
  getAll,
  get,
};

export default BreedService;