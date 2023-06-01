import api from './api';

const newMemory = async (newMem) => {
    const res = await api.post('/memories/newMemory', newMem);
    return res.data;
}

export default newMemory;