type ForecastItemProps = {
  day: string;
  time: string;
  temp: string;
}

export function ForecastItem({ day, time, temp }: ForecastItemProps): JSX.Element {
  return (
    <div className="overview__forecast-item">
      <div className="overview__forecast-item-data">
        <p className="overview__forecast-item-day">{day}</p>
        <p className="overview__forecast-item-time">{time}</p>
      </div>
      <h3 className="overview__forecast-item-temp">{temp}</h3>
    </div>
  );
}
