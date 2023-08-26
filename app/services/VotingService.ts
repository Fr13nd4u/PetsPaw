'use client'
import api from '../api';

const getAll = () => {
  return api.get(`/votes`);
};

const create = (data: {
    image_id: string,
    sub_id?: string,
    value: number
  }) => {
  return api.post(`/votes`, data);
};

const remove = (id: string) => {
  return api.delete(`/votes/${id}`);
};

const GalleryService = {
  getAll,
  create,
  remove
};

export default GalleryService;