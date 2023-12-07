import React, { useEffect, useState } from "react";
import "./sessions.css";

const api_base = "http://localhost:3001";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);

  let counter = 0;

  useEffect(() => {
    GetSessions();
  }, []);

  const GetSessions = () => {
    fetch(api_base + "/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data))
      .catch((err) => console.error("Error: ", err));
  };

  return (
    <div>
      <h1>Your Past Sessions</h1>
      <p></p>

      <div className="session">
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <div className="todo">
              <div className="text">{session.title + " " + ++counter}</div>
              {session.todos.map((todo) => (
                <div className={"todo" + (todo.complete ? " is-complete" : "")}>
                  <div className="text">{todo.text}</div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No past sessions to display</p>
        )}
      </div>
    </div>
  );
};

export default Sessions;
