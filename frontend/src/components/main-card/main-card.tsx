export function MainCard(): JSX.Element {
  return (
    <div className="overview__main-info">
      <img src="./img/sun.svg" alt="icon" className="overview__item-icon" />
      <h2 className="overview__item-value">12,2°C</h2>
      <h3 className="overview__item-name">Clear sky</h3>
      <div className="overview__info">
        <div className="overview__info-item">
          <img src="./img/location.svg" alt="icon" className="overview__item-icon-small" />
          <h3 className="overview__card-info">Spb</h3>
        </div>
        <div className="overview__info-item">
          <img src="./img/calendar.svg" alt="icon" className="overview__item-icon-small" />
          <h3 className="overview__card-info">28 August Monday</h3>
        </div>
      </div>
    </div>
  );
}
