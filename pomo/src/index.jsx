import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as THREE from "three";
import AnimationsContext from "./AnimationsContext";
import Experience from "./Experience.jsx";
import "./style.css";
const api_base = "http://localhost:3001";

const App = () => {
  const modeTimes = {
    work: 25,
    shortBreak: 5,
    longBreak: 30,
  };
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // work / shortBreak / longBreak
  const [workMode, setWorkMode] = useState(4); // repeat work and short break 4 times
  const [minutesLeft, setMinutesLeft] = useState(25); // inti work minutes (25)
  const [secondsLeft, setSecondsLeft] = useState(0);

  function switchMode() {
    if (workMode === 0) {
      setMode("longBreak");
      setMinutesLeft(modeTimes["longBreak"]);
      setIsPaused(true); // end cycle
    } else {
      const nextMode = mode === "work" ? "shortBreak" : "work";
      const nextMinute = modeTimes[nextMode];
      setMode(nextMode);
      setMinutesLeft(nextMinute);

      if (nextMode === "work") {
        setWorkMode((workMode) => workMode - 1);
      }
    }
    setSecondsLeft(0);
  }

  function startPause() {
    setIsPaused((isPaused) => !isPaused);
  }

  function reset() {
    // reset
    setIsPaused(true);
    setMinutesLeft(25);
    setSecondsLeft(0);
  }

  useEffect(() => {
    if (!isPaused) {
      // ticking
      const interval = setInterval(() => {
        if (secondsLeft > 0) {
          setSecondsLeft((secondsLeft) => secondsLeft - 1);
        }
        if (secondsLeft === 0) {
          setMinutesLeft((minutesLeft) => minutesLeft - 1);
          setSecondsLeft(59);
        }
        if (secondsLeft === 0 && minutesLeft === 0) {
          // switch modes
          switchMode();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPaused, secondsLeft, minutesLeft]);

  const [playAllAnimations, setPlayAllAnimations] = useState(() => () => {});

  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    fetch(api_base + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
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
    const data = await fetch(api_base + "/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setTodos((todos) => todos.filter((todo) => todo._id !== data.result._id));
  };

  return (
    <div className="App">
      <AnimationsContext.Provider
        value={{ playAllAnimations, setPlayAllAnimations }}
      >
        <h1>Welcome, Mark</h1>
        <h4>Your tasks</h4>

        <div className="todos">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div
                className={"todo" + (todo.complete ? " is-complete" : "")}
                key={todo._id}
                onClick={() => {
                  completeTodo(todo._id);
                  playAllAnimations;
                }}
                //onClick={playAllAnimations}
              >
                <div className="checkbox"></div>

                <div className="text">{todo.text}</div>

                <div
                  className="delete-todo"
                  onClick={() => deleteTodo(todo._id)}
                >
                  x
                </div>
              </div>
            ))
          ) : (
            <p>You currently have no tasks</p>
          )}
        </div>

        <div className="addPopup" onClick={() => setPopupActive(true)}>
          +
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

        <br></br>
        <br></br>
        <br></br>

        <div className="PomoTimer">
          <div>
            <h2>
              {minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}:
              {secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}
            </h2>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                startPause();
              }}
            >
              {" "}
              {isPaused ? "Start" : "Pause"}{" "}
            </button>
            <button
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </div>

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
      </AnimationsContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
