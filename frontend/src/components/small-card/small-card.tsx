type SmallCardProps = {
  icon: string;
  name: string;
  value: string | number;
  desc: string;
}

export function SmallCard({ icon, name, value, desc }: SmallCardProps): JSX.Element {
  let val;
  if (name == "Sunrise" || name == "Sunset") {
    val = new Date(value).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  } else {
    val = value;
  }
  return (
    <div className="overview__small-item" data-testid="small-card-item-container">
      <img src={icon} alt="icon" className="overview__small-item-icon" />
      <div className="overview__small-item-data">
        <h3 className="overview__small-item-name">{name}</h3>
        <h2 className="overview__small-item-value">{val} {desc}</h2>
      </div>
    </div>
  );

}
