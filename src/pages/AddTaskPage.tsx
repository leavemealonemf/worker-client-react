import { FC, SyntheticEvent, useState} from 'react';
import tasksService from '../services/tasks.service';

const AddTaskPage: FC = () => {

    const [taskName, setTaskName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    async function formSubmit(e: SyntheticEvent) {
        e.preventDefault();
        const data = await tasksService.addTask(taskName, description, 1);
        if (!data) {
            alert('Something went wrong');
            return;
        }
        alert('Заявка успешно добавлена!')
    }

    return (
        <div className='add_task_container'>
            <form className='add_task_form' onSubmit={formSubmit}>
                <input 
                    type="text" 
                    value={taskName} 
                    placeholder='Название' 
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <input 
                    type="text" 
                    value={description} 
                    placeholder='Описание' 
                    onChange={(e) => setDescription(e.target.value)}/>
                <button type='submit'>Добавить</button>
            </form>
        </div>
    )
}

export default AddTaskPage