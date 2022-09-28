import { useForm } from "react-hook-form";
import Display from "../componentes/Display";
import api from "../service/api";
import "./style.css";

const LandingPage = ({ dados, setDados }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmitCadastrar = ({ amount, installments, mdr }) => {
    const data = {
      amount,
      installments,
      mdr,
    };
    api
      .post("", data)
      .then((response) => {
        setDados(response.data);
      })
      .catch((err) => {
        setDados(err.response);
      });

    reset();
  };
  return (
    <div className="principal">
      <div className="div1">
        <form className="formulario" onSubmit={handleSubmit(onSubmitCadastrar)}>
          <h1>Simule sua antecipação</h1>
          <label> Informe o valor da venda*</label>
          <input
            placeholder="R$"
            type="number"
            name="amount"
            {...register("amount")}
          />
          <label className="label2">Em quantas parcelas*</label>
          <input
            placeholder="R$"
            type="number"
            name="installments"
            {...register("installments")}
          />
          <span>Máximo de 12 parcelas</span>
          <label className="label3">Infome o percentual de MDR*</label>
          <input
            placeholder="R$"
            type="number"
            name="mdr"
            {...register("mdr")}
          />
          <button className="myButton" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="div2">
        <Display dados={dados} />
      </div>
    </div>
  );
};
export default LandingPage;
