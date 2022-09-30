import "./style.css";

const Display = ({ info }) => {
  return (
    <div className="divDisplay">
      <p className="title"> Você receberá : </p>
      <hr />
      <p>
        Amanhã:{" "}
        <b>
          {info["1"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </b>
      </p>
      <p>
        Em 15 dias:{" "}
        <b>
          {" "}
          {info["15"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </b>
      </p>
      <p>
        Em 30 dias:{" "}
        <b>
          {info["30"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </b>
      </p>
      <p>
        Em 90 dias:{" "}
        <b>
          {info["90"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </b>
      </p>
    </div>
  );
};

export default Display;
