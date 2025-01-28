import { nullCheck } from "../../utils/nullCheck";
import formatDate from "../../utils/formatDate";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Planlanan</span>
        <span>{nullCheck(formatDate(data.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Planlanan</span>
        <span>{nullCheck(formatDate(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Gerçekleşen</span>
        <span>{nullCheck(formatDate(data.real?.departure))}</span>
      </div>
      <div>
        <span>Tahmini</span>
        <span>{nullCheck(formatDate(data.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
