type SmallCardProps = {
  icon: string;
  name: string;
  value: string | number;
  desc: string;
}

export function SmallCard({ icon, name, value, desc }: SmallCardProps): JSX.Element {
  if (name == "Sunrise" || name == "Sunset") {
    const time = new Date(value).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // 24-часовой формат
    });

    return (
      <div className="overview__small-item">
        <img src={icon} alt="icon" className="overview__small-item-icon" />
        <div className="overview__small-item-data">
          <h3 className="overview__small-item-name">{name}</h3>
          <h2 className="overview__small-item-value">{time} {desc}</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="overview__small-item">
      <img src={icon} alt="icon" className="overview__small-item-icon" />
      <div className="overview__small-item-data">
        <h3 className="overview__small-item-name">{name}</h3>
        <h2 className="overview__small-item-value">{value} {desc}</h2>
      </div>
    </div>
  );
}
