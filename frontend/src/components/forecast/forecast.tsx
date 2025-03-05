import { ForecastItem } from "../forecast-item/forecast-item";

export function Forecast(): JSX.Element {
  return (
    <div className="overview__forecast">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </div>
  );
}
