import "./style.css";

const Display = ({ info }) => {
  return (
    <div className="divDisplay">
      <p className="title"> Você receberá : </p>
      <hr />
      <p>
        Amanhã:{" "}
        <b>
          R$
          {info["1"]}
        </b>
      </p>
      <p>
        Em 15 dias: <b>R$ {info["15"]}</b>
      </p>
      <p>
        Em 30 dias: <b>R$ {info["30"]}</b>
      </p>
      <p>
        Em 90 dias: <b>R$ {info["90"]}</b>
      </p>
    </div>
  );
};

export default Display;
