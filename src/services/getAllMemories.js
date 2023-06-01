import api from './api';

const getAllMemories = async () => {
    const res = await api.get('/memories/getAllMemories');
    return res.data
};

export default getAllMemories;