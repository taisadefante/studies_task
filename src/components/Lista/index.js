import React from "react";
import "./style.scss";

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "0:00:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className="item">
            <h3> {item.tarefa}</h3>
            <spam>{item.tempo}</spam>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
