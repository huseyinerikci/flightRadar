import { MdOutlineQuestionMark } from "react-icons/md";

export const nullCheck = (value, color) => {
  return (
    value || <MdOutlineQuestionMark style={{ color: color || "#535bf2" }} />
  );
};
