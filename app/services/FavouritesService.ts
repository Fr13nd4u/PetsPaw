'use client'
import api from '../api';

const getAll = (sub_id: any) => {
  return api.get(`/favourites?sub_id=${sub_id}`);
};

const create = (data: {
    image_id: string,
    sub_id?: string
  }) => {
  return api.post(`/favourites`, data);
};

const remove = (id: string) => {
  return api.delete(`/favourites/${id}`);
};

const FavouritesService = {
  getAll,
  create,
  remove
};

export default FavouritesService;