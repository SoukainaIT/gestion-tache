import React, { useState } from 'react';

type AddTaskComponentProps = {
    addTask: (title: string) => void;
};


function AddTaskComponent({ addTask }: AddTaskComponentProps) {
    const [taskTitle, setTaskTitle] = useState('');


    const handleSubmit = () => {
        if (taskTitle.trim()) {
            addTask(taskTitle);
            setTaskTitle('');
        } else {
            alert('Veuillez entrer une tâche.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                placeholder="Ajouter une nouvelle tâche"
            />
            <button onClick={handleSubmit}>Ajouter</button>
        </div>
    );
}

export default AddTaskComponent;
