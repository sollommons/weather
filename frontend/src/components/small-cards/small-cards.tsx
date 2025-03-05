export function SmallCards(): JSX.Element {
  return (
    <div className="overview__small-items">
      <div className="overview__small-item">
        <img src="./img/wind.svg" alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">Wind speed</h3>
          <h2 className="overview__small-item-value">28 km/h</h2>
        </div>
      </div>
      <div className="overview__small-item">
        <img src="./img/pressure.svg" alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">Pressure</h3>
          <h2 className="overview__small-item-value">1008 hPa</h2>
        </div>
      </div>
      <div className="overview__small-item">
        <img src="./img/sunrise.svg" alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">Sunrise</h3>
          <h2 className="overview__small-item-value">06:26</h2>
        </div>
      </div>
      <div className="overview__small-item">
        <img src="./img/visibility.svg" alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">Humidity</h3>
          <h2 className="overview__small-item-value">48%</h2>
        </div>
      </div>
      <div className="overview__small-item">
        <img src="./img/visibility.svg" alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">Visibility</h3>
          <h2 className="overview__small-item-value">10 km</h2>
        </div>
      </div>
      <div className="overview__small-item">
        <img src="./img/sunset.svg" alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">Sunset</h3>
          <h2 className="overview__small-item-value">19:44</h2>
        </div>
      </div>
    </div>
  );
}
