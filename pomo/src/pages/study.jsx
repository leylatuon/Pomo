import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as THREE from "three";
import AnimationsContext from "../AnimationsContext";
import Experience from "../Experience.jsx";
import Timer from "../components/PomoTimer/timer.jsx";
import "./study.css";

const api_base = "http://localhost:3001";

const StudyPage = () => {
  const [playAllAnimations, setPlayAllAnimations] = useState(() => () => {});

  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  let deleting = false;

  useEffect(() => {
    GetTodos();
  }, []);

  // TODO:
  // When the user hits "end session", a new session is created, the todos get added to the session, and the session is saved to the server, The todos are then cleared, ready for new tasks

  // Maybe when "end session" is clicked, the user is redirected to the sessions page.

  // CSS
  // Add username to the welcome header
  // change todos to tasks if theres time

  const endSession = async () => {
    const data = await fetch(api_base + "/sessions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Session", // temp
        active: false,
        user: "Mark", // temp
        todos: todos,
        numberOfTasks: todos.length,
      }),
    }).then((res) => res.json());

    deleteAllTodos();
  };

  const GetTodos = () => {
    fetch(api_base + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
    console.log("Completeing");
    const data = await fetch(api_base + "/todo/complete/" + id).then((res) =>
      res.json()
    );

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }

        return todo;
      })
    );
  };

  const addTodo = async () => {
    const data = await fetch(api_base + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);

    setPopupActive(false);
    setNewTodo("");
  };

  const deleteTodo = async (id) => {
    console.log("Deleting");
    const data = await fetch(api_base + "/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setTodos((todos) => todos.filter((todo) => todo._id !== data.result._id));
  };

  const deleteAllTodos = () => {
    // array1.forEach((element) => console.log(element));
    todos.forEach((todo) => {
      deleteTodo(todo._id);
    });
  };

  // const deleteAllTodos = async () => {
  //   const data = await fetch(api_base + "/todo/delete/all", {
  //     method: "DELETE",
  //   });

  //   const emptyTodos = [];
  //   setTodos(emptyTodos);
  // };

  return (
    <div className="study-content">
      <AnimationsContext.Provider
        value={{ playAllAnimations, setPlayAllAnimations }}
      >
        <div class="tasks-content">
          <h1>Welcome, Mark</h1>
          <h4>Your tasks</h4>

          <div className="todos">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div
                  className={"todo" + (todo.complete ? " is-complete" : "")}
                  key={todo._id}
                  onClick={() => {
                    if (!deleting) {
                      completeTodo(todo._id);
                      playAllAnimations();
                    }
                    deleting = false;
                  }}
                >
                  <div className="checkbox"></div>

                  <div className="text">{todo.text}</div>

                  <div
                    className="delete-todo"
                    key={todo._id}
                    onClick={() => {
                      deleting = true;
                      deleteTodo(todo._id);
                    }}
                  >
                    x
                  </div>
                </div>
              ))
            ) : (
              <p>You currently have no tasks</p>
            )}
          </div>
        </div>

        <div className="plant-timer-content">
          <button onClick={playAllAnimations}>Play Animations</button>
          <Canvas
            dpr={[1, 2]}
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
            }}
            camera={{ fov: 20, near: 0.1, far: 200, position: [3, 2, 6] }}
          >
            <Experience />
          </Canvas>
          <Timer />
        </div>

        <div className="addPopup" onClick={() => setPopupActive(true)}>
          +
        </div>

        <div
          className="button"
          onClick={() => {
            endSession();
          }}
        >
          End Session
        </div>

        {popupActive ? (
          <div className="popup">
            <div className="closePopup" onClick={() => setPopupActive(false)}>
              X
            </div>
            <div className="content">
              <h3>Add Task</h3>
              <input
                type="text"
                className="add-todo-input"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
              />
              <div className="button" onClick={addTodo}>
                Create Task
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </AnimationsContext.Provider>
    </div>
  );
};

export default StudyPage;
