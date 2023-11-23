import { $api } from "../api";

export interface ITask {
    title: string;
    decription: string;
    createdById: number;
}

class TaskService {
    async addTask(title: string, description: string, createdById: number) {
        const {data} = await $api.post('requests', {title, description, createdById});
        return data;
    }
}

export default new TaskService();