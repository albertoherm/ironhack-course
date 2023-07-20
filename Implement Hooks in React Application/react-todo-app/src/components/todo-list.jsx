// Importar las dependencias de React
import React, { useState, useEffect } from "react";
// Definir el componente TodoList
function TodoList() {
  // Definir los estados: todoList para almacenar la lista de tareas y newTodo para almacenar la nueva tarea
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  // Funcion para manejar el cambio en el input donde se escribe la nueva tarea
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  // Funcion para agregar una nueva tarea a la lista
  const addTodo = () => {
    // Verificar que la nueva tarea no esté en blanco o contenga solo espacios
    if (newTodo.trim() !== "") {
      // Crear un nuevo objeto de tarea con un id basado en la hora actual y el texto de la nueva tarea
      const newTodoItem = { id: Date.now(), text: newTodo };
      // Actualizar el estado todoList agregando el nuevo objeto al final de la lista
      setTodoList([...todoList, newTodoItem]);
      // Limpiar el campo de input, estableciendo el estado newTodo a una cadena vacia
      setNewTodo("");
    }
  };
  // useEffect para cargar las todos iniciales mediante una API usando fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        // Se usa el map para mapear los datos obtenidos para que coincidan con el formato de las todos
        const mappedData = data.map((item) => ({
          id: item.id,
          text: item.title,
        }));
        // Actualizar el estado todoList con los datos obtenidos de la API
        setTodoList(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // useEffect para imprimir en la consola un mensaje cada vez que se actualiza el estado todoList
  useEffect(() => {
    console.log("Todo List has been updated:", todoList);
  }, [todoList]);

  // Renderizar el componente TodoList
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.todoList}>
        {/* Se utiliza el map para mapear la lista de todos y renderizar cada una en la lista */}
        {todoList.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    background: "#ffffff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333333",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #cccccc",
    fontSize: "16px",
  },
  addButton: {
    background: "#4CAF50",
    color: "#ffffff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  todoList: {
    listStyleType: "none",
    padding: "0",
  },
  todoItem: {
    marginBottom: "5px",
    padding: "8px",
    borderRadius: "4px",
    background: "#f2f2f2",
    color: "#333333",
  },
};

export default TodoList;
