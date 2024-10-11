import React from 'react';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
};

function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
            <button onClick={() => onDelete(task.id)}>Supprimer</button>
        </li>
    );
}

export default TaskItem;
