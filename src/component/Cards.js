import brentonAvatar from '../images/brenton-avatar.png';
import daveAvatar from '../images/dave-avatar-2019.png';
import craigAvatar from '../images/Craig.png';
import geoffAvatar from '../images/Geoff.png';
import nickAvatar from '../images/nick-avatar.png';

import Card from './Card';
import '../styles/main.scss';

// Array of Objects for Cards details
const cardsArray = [
  {
    name: `Dave Fuller`,
    avatar: `${daveAvatar}`,
    DOB: { year: 1971, month: 5, day: 10 },
    tech: 492,
    strength: 10,
    specialPwr: 16,
    loyalty: 22,
    bg: `dave`,
  },
  {
    name: `Nick Thompson`,
    avatar: `${nickAvatar}`,
    DOB: { year: 1990, month: 3, day: 10 },
    tech: 356,
    strength: 45,
    specialPwr: 22,
    loyalty: 36,
    bg: `nick`,
  },
  {
    name: `Craig Vincent`,
    avatar: `${craigAvatar}`,
    DOB: { year: 1980, month: 12, day: 9 },
    tech: 73,
    strength: 45,
    specialPwr: 8,
    loyalty: 80,
    bg: `craig`,
  },
  {
    name: `Geoff Somner`,
    avatar: `${geoffAvatar}`,
    DOB: { year: 1986, month: 1, day: 1 },
    tech: 200,
    strength: 55,
    specialPwr: 10,
    loyalty: 7,
    bg: `geoff`,
  },
  {
    name: `Brenton Taylor`,
    avatar: `${brentonAvatar}`,
    DOB: { year: 1975, month: 11, day: 1 },
    tech: 301,
    strength: 33,
    specialPwr: 24,
    loyalty: 11,
    bg: `brenton`,
  },
];

const Cards = () => {
  // Looping over the array to  get all the Cards Dyanmically
  return (
    <>
      <div class="grid grid--1x3-main">
        {cardsArray.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            tech={card.tech}
            strength={card.strength}
            specialPwr={card.specialPwr}
            loyalty={card.loyalty}
            bg={card.bg}
            avatar={card.avatar}
            DOB={card.DOB}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
