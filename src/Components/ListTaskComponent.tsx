import React from 'react';
import TaskItem from './TaskItem';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type ListTaskComponentProps = {
    tasks: Task[];
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
};

function ListTaskComponent({ tasks, deleteTask, toggleTaskCompletion }: ListTaskComponentProps) {
    return (
        <div>
            <h3>Liste des tâches :</h3>
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onToggle={toggleTaskCompletion}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListTaskComponent;
