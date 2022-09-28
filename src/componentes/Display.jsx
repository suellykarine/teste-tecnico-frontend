import "./style.css";

const Display = ({ dados }) => {
  return (
    <div className="divDisplay">
      <p className="title"> Você receberá : </p>
      <hr />
      <p>
        Amanhã:{" "}
        <b>
          R$
          {dados["1"]}
        </b>
      </p>
      <p>
        Em 15 dias: <b>R$ {dados["15"]}</b>
      </p>
      <p>
        Em 30 dias: <b>R$ {dados["30"]}</b>
      </p>
      <p>
        Em 90 dias: <b>R$ {dados["90"]}</b>
      </p>
    </div>
  );
};

export default Display;
