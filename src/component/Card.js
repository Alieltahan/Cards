const Card = ({
  name,
  avatar,
  DOB,
  tech,
  strength,
  specialPwr,
  loyalty,
  bg,
}) => {
  // Generating dynamic classes which will add the bg of each avatar.
  const bgClass = `card__bg-image card__bg-image-${bg}`;
  // Function to calculate TIME ALIVE:
  let birth = `${DOB.year}/${DOB.month}/${DOB.day}`;
  function getAge(birth) {
    let today = new Date();
    let birthDate = new Date(birth);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    } else if (days < 0) {
      months--;
      days += 30;
    }
    return `${('0' + years).slice(-2)}Y ${('0' + months).slice(-2)}M ${(
      '0' + days
    ).slice(-2)}D`;
  }
  let alive = getAge(birth);
  console.log(alive);

  return (
    <div className="card__container ">
      <div className="card">
        <div className="card__bg-image-container">
          <div className={bgClass}>
            <div
              className={`${
                bg === 'nick'
                  ? 'card__avatar-container card__avatar-container-nick'
                  : 'card__avatar-container'
              } `}
            >
              <img
                className="card__avatar"
                src={avatar}
                alt={`${name} avtar `}
              />
              <span className="card__name-container">
                <span className={`card__name card__name-${bg}`}>{name}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid--1x3">
          <div className="card__info">
            <div className={`card__info-item card__info-item-${bg}`}>
              Time Alive ...
            </div>
            <div className={`card__info-item card__info-item-${bg}`}>
              Technology ...
            </div>
            <div className={`card__info-item card__info-item-${bg}`}>
              Strength ...
            </div>
            <div className={`card__info-item card__info-item-${bg}`}>
              Special Powers ...
            </div>
            <div className={`card__info-item card__info-item-${bg}`}>
              Loyalty ...
            </div>
          </div>
          <div className="card__info card__info-m">
            <div className="card__info-item card__info-item-m">{alive}</div>
            <div className="card__info-item card__info-item-m">{tech}</div>
            <div className="card__info-item card__info-item-m">{strength}</div>
            <div className="card__info-item card__info-item-m">
              {specialPwr}
            </div>
            <div className="card__info-item card__info-item-m">{loyalty}</div>
          </div>
          <div className="card__info-text">
            Brenton has built up a 20 year protoflio sharpening his knowledge
            along the way and adding a wide range of projects for both print &
            web to his creative bow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
