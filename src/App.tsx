import React, {useEffect, useState} from 'react';
import './App.css';
import AddTaskComponent from "./Components/AddTaskComponent";
import ListTaskComponent from './Components/ListTaskComponent';
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    const addTask = (title: string) => {
        if(title !== null && title !== undefined && title !== ''  ){
            const newTask: Task = {
                id: tasks.length + 1,
                title,
                completed: false
            };
            setTasks([...tasks, newTask]);
        }

    };

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks, isLoading]);


    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
        setIsLoading(false); // Charger terminé
    }, []);


    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task: { id: number; }) => task.id !== id));
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map((task: {id: number;title: string;completed: any; }) =>
            task.id === id ? {...task , completed: !task.completed }:task
        ));
    };

    return (
        <div className="App">
            <HeaderComponent />
            <AddTaskComponent addTask={addTask} />
            <ListTaskComponent tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
            <FooterComponent />
        </div>
    );
}


export default App;
