export default function Termek(props) {
  return (
    <div className="termek">
      <h3>{props.cim}</h3>
      <img src={props.kep}></img>
      <p>{props.leiras}</p>
      <p>Ár: {props.ar}</p>
      <button>Kosárba</button>
    </div>
  );
}
