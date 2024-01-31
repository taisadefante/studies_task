import React from "react";
import Botao from "../Botão";

class Formulario extends React.Component {
  Render() {
    return (
      <form>
        <div>
          <label>
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              placeholder="O que você quer estudar"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input />
          </label>
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
