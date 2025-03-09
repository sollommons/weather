import { Fragment } from "react/jsx-runtime";
import { SmallCard } from "../small-card/small-card";

import { useAppSelector } from "../../store";

import { getInfo } from "../../store/main-process/selectors";

export function SmallCards(): JSX.Element {
  const weatherInfo = useAppSelector(getInfo);

  const icons = ["./img/wind.svg", "./img/visibility.svg", "./img/pressure.svg",
    "./img/humidity.svg", "./img/sunrise.svg", "./img/sunset.svg"];
  const desc = ["km/h", "km", "hPa", "%", "", ""];

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
              desc={desc[id]}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
