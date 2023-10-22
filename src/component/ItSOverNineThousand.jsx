
export default function ItSOverNineThousand({ isVisible }) {
  return (
    <div className={`over-nine-thousand ${isVisible ? 'visible' : 'hidden'}`}>
      It's Over 9000 !!!
    </div>
  );
}