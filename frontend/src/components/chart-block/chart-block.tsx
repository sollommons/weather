export function ChartBlock(): JSX.Element {
  return (
    <div className="chart__content-part">
      <div className="chart__content-info">
        <h3 className="chart__content-info-period">3 Days</h3>
        <div className="custom-select">
          <select name="period1" required>
            <option value="" disabled selected>Select</option>
            <option value="wind">Wind speed</option>
            <option value="pressure">Pressure</option>
            <option value="humidity">Humidity</option>
            <option value="visibility">Visibility</option>
          </select>
        </div>
      </div>
      <img src="./img/mock-diagram.png" alt="mock" className="mock" />
    </div>
  );
}
