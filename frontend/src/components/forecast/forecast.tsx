import { ForecastItem } from "../forecast-item/forecast-item";

export function Forecast(): JSX.Element {
  return (
    <div className="overview__forecast">
      <ForecastItem
        day="Monday"
        time="12:00"
        temp="12 °C"
      />
    </div>
  );
}
