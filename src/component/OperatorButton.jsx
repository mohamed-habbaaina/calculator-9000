export default function OperatorButton({ operator, onClick }) {
  return (
    <button onClick={() => onClick(operator)}>{operator}</button>
  );
}