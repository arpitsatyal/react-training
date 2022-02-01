import { useNavigate, Link, useParams } from "react-router-dom";

const Component1 = ({ myArr }) => {
  const { num } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>divsion from child component1: {myArr.map((el) => <ul>{el / num}</ul>)}</div>
      <Link to="/c2">component 2</Link>
      <button onClick={() => navigate('/c2')}>take me to component 2 </button>
    </>
  );
};

export default Component1;
