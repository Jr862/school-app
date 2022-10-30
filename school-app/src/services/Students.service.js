import axios from 'axios';

const BACKEND_URL = "http://localhost:3333";

class StudentService {
async select() {
        return await axios.get(`${BACKEND_URL}/students`).then((res) => res.data);

    }

    async create (student) {
        return await axios.post(`${BACKEND_URL}/students`, student).then((res) => res.data);
        
    }

    async update(id, student){
        return await axios.patch(`${BACKEND_URL}/students/${id}`, student).then((res) => res.data);

    }

    async remove(id){
        return await axios.delete(`${BACKEND_URL}/students/${id}`).then((res) => res.data);

    }
}

export default new StudentService();




