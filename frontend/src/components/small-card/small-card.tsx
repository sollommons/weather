type SmallCardProps = {
  icon: string;
  name: string;
  value: string;
}

export function SmallCard({ icon, name, value }: SmallCardProps): JSX.Element {
  return (
    <div className="overview__small-item">
      <img src={icon} alt="icon" className="overview__small-item-icon" />
      <div className="overview__small-item-data">
        <h3 className="overview__small-item-name">{name}</h3>
        <h2 className="overview__small-item-value">{value}</h2>
      </div>
    </div>
  );
}
