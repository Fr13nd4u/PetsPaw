'use client'
import api from '../api';

const create = ({formData, sub_id}: {formData: any, sub_id?: string}) => {
  return api.post(`/images/upload?sub_id=${sub_id}`, formData);
};

const UploadService = {
  create,
};

export default UploadService;