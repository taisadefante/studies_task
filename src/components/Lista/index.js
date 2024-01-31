import React from "react";

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
    <aside>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3> {item.tarefa}</h3>
            <spam>{item.tempo}</spam>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
