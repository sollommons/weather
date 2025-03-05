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

  return (
    <div className="overview__small-items">
      {Object.entries(weatherInfo).map(([key, val]) => {
        return (
          <SmallCard
            name={key}
            value={val}
          />
        );
      })}
    </div>
  );
}
