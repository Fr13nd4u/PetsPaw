'use client'
import api from '../api';

const getAll = (limit: number) => {
  return api.get(`/breeds?limit=${limit}`);
};

const get = (
    id: string,
    limit: number,
    order: string,
    mime_types: string
  ) => {
  return api.get(`/images/search?breed_ids=${id}&limit=${limit}&order=${order}&mime_types=${mime_types}&has_breeds=1`)
};

const GalleryService = {
  get,
};

export default GalleryService;