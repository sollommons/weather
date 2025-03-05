import { ForecastItem as ForecastItemComponent } from "../forecast-item/forecast-item";
import { ForecastItem } from "../../types/state/state-types";
import { Fragment } from "react/jsx-runtime";

export function Forecast(): JSX.Element {
  const elem: ForecastItem = {
    time: "Monday 12:00",
    temperature: 12
  };
  const ForecastItems = [elem, elem, elem, elem, elem];
  return (
    <div className="overview__forecast">
      {ForecastItems.map((item, id) => {
        const keyValue = `${id}-${item.time}`;
        return (
          <Fragment key={keyValue}>
            <ForecastItemComponent
              day="Monday"
              time={item.time}
              temp="12 °C"
            />
          </Fragment>
        );
      })}

    </div>
  );
}
