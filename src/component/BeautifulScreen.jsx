export default function BeautifulScreen(props) {
  return (
    <div className="beautiful-screen">
      <div className="calculation">{props.calculation}</div>
      <div className="result">{props.result}</div>
    </div>
  );
}