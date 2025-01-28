import { useDispatch } from "react-redux";
import { close } from "../../redux/slices/detailSlice";
import { nullCheck } from "../../utils/nullCheck";

const Head = ({ info }) => {
  const dispatch = useDispatch();
  return (
    <div className="head">
      <div>
        <h3 title="Call sign">
          {nullCheck(info?.identification?.callsign, "white")}
        </h3>
        <span title="Flight number">
          {nullCheck(info?.identification?.number?.default, "white")}
        </span>
        <span title="Aircraft IATA/CAO type code">
          {nullCheck(info?.aircraft?.model?.code, "white")}
        </span>
      </div>
      <button onClick={() => dispatch(close())}>X</button>
    </div>
  );
};

export default Head;
