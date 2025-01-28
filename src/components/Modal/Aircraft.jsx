import { IoAirplaneOutline } from "react-icons/io5";
import { nullCheck } from "../../utils/nullCheck";

const Aircraft = ({ data }) => {
  return (
    <div className="aircraft">
      <div className="icon">
        <IoAirplaneOutline />
      </div>

      <div>
        <p>
          <span className="title">Aircraft Type</span>
          <span>{nullCheck(data?.model?.text)}</span>
        </p>
        <div>
          <p>
            <span className="title">Kuyruk Kodu</span>
            <span>{nullCheck(data?.registration)}</span>
          </p>
          <p>
            <span className="title">Ülke Id</span>
            <span>{nullCheck(data?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
