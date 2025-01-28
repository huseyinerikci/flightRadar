import { divIcon, icon } from "leaflet";

export const getIcon = (deg) => {
  return divIcon({
    html: `<div style='transform:rotate(${
      deg - 45
    }deg)'><img src='/plane_icon.png' style='width:30px; height:30px'/></div>`,
    className: "",
  });
};
