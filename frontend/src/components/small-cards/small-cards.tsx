import { Fragment } from "react/jsx-runtime";
import { SmallCard } from "../small-card/small-card";

export function SmallCards(): JSX.Element {
  const weatherInfo = {
    "Wind speed": "28 km/h",
    "Visibility": "10 km",
    "Pressure": "1008 hPa",
    "Humidity": "48%",
    "Sunrise": "06:26",
    "Sunset": "19:44",
  };

  const icons = ["./img/wind.svg", "./img/visibility.svg", "./img/pressure.svg",
    "./img/humidity.svg", "./img/sunrise.svg", "./img/sunset.svg"];

  return (
    <div className="overview__small-items">
      {Object.entries(weatherInfo).map(([key, val], id) => {
        const keyValue = `${id}-${key}`;
        return (
          <Fragment key={keyValue}>
            <SmallCard
              icon={icons[id]}
              name={key}
              value={val}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
