'use client'
import api from '../api';

const getAll = (sub_id: any) => {
  return api.get(`/votes?sub_id=${sub_id}`);
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