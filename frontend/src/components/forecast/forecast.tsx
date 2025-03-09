import { Fragment } from "react/jsx-runtime";

import { ForecastItem } from "../forecast-item/forecast-item";
import { getForecast } from "../../store/main-process/selectors";
import { useAppSelector } from "../../store";

export function Forecast(): JSX.Element {
  const ForecastItems = useAppSelector(getForecast);

  return (
    <div className="overview__forecast">
      {ForecastItems.map((item, id) => {
        const date = new Date(item.date);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const hour = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

        const keyValue = `${id}-${item.date}`;
        return (
          <Fragment key={keyValue}>
            <ForecastItem
              day={dayOfWeek}
              time={hour}
              temp={item.temperature}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
