type SmallCardProps = {
  name: string;
  value: string;
}

export function SmallCard({ name, value }: SmallCardProps): JSX.Element {
  return (
    <div className="overview__small-item">
      <img src="./img/wind.svg" alt="icon" className="overview__small-item-icon" />
      <div className="overview__small-item-data">
        <h3 className="overview__small-item-name">{name}</h3>
        <h2 className="overview__small-item-value">{value}</h2>
      </div>
    </div>
  );
}
