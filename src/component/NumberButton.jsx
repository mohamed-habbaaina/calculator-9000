
export default function NumberButton({ number, onClick }) {
  return (
    <button onClick={() => onClick(number)}>{number}</button>
  );
}