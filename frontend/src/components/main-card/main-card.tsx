import { useAppSelector } from "../../store";
import { getTemp } from "../../store/main-process/selectors";
import { getCity } from "../../store/main-process/selectors";
import { getDate } from "../../store/main-process/selectors";

export function MainCard(): JSX.Element {
  const date = new Date(useAppSelector(getDate));
  console.log(date);


  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long'
  });
  return (
    <div className="overview__main-info">
      <img src="./img/sun.svg" alt="icon" className="overview__item-icon" />
      <h2 className="overview__item-value">{useAppSelector(getTemp)}°C</h2>
      <h3 className="overview__item-name">Clear sky</h3>
      <div className="overview__info">
        <div className="overview__info-item">
          <img src="./img/location.svg" alt="icon" className="overview__item-icon-small" />
          <h3 className="overview__card-info">{useAppSelector(getCity)}</h3>
        </div>
        <div className="overview__info-item">
          <img src="./img/calendar.svg" alt="icon" className="overview__item-icon-small" />
          <h3 className="overview__card-info">{formattedDate}</h3>
        </div>
      </div>
    </div>
  );
}
