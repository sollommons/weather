export function ForecastItem(): JSX.Element {
  return (
    <div className="overview__forecast-item">
      <div className="overview__forecast-item-data">
        <p className="overview__forecast-item-day">Monday</p>
        <p className="overview__forecast-item-time">12:00</p>
      </div>
      <h3 className="overview__forecast-item-temp">12,2°C</h3>
    </div>
  );
}
