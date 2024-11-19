import aries_img from './images/aries_img.jpg'; // Import as aries_img
import taurus_img from './images/taurus_img.jpg'; // Import as taurus_img
import gemini_img from './images/gemini_img.jpg'; // Import as gemini_img
import cancer_img from './images/cancer_img.jpg'; // Import as cancer_img
import leo_img from './images/leo_img.jpg'; // Import as leo_img
import virgo_img from './images/virgo_img.jpg'; // Import as virgo_img
import libra_img from './images/libra_img.jpg'; // Import as libra_img
import scorpio_img from './images/scorpio_img.jpg'; // Import as scorpio_img
import sagittarius_img from './images/sagittarius_img.jpg'; // Import as sagittarius_img
import capricorn_img from './images/capricorn_img.jpg'; // Import as capricorn_img
import aquarius_img from './images/aquarius_img.jpg'; // Import as aquarius_img
import pisces_img from './images/pisces_img.jpg'; // Import as pisces_img


const zodiac_data = [
  {
    id: 1,
    name: "Aries",
    image: aries_img, // Placeholder for image
    dates: "March 21 - April 19",
    element: "Fire",
    ruling_planet: "Mars",
    traits: ["Courageous", "Confident", "Energetic", "Impulsive"]
  },
  {
    id: 2,
    name: "Taurus",
    image: taurus_img, // Placeholder for image
    dates: "April 20 - May 20",
    element: "Earth",
    ruling_planet: "Venus",
    traits: ["Reliable", "Patient", "Practical", "Stubborn"]
  },
  {
    id: 3,
    name: "Gemini",
    image: gemini_img, // Placeholder for image
    dates: "May 21 - June 20",
    element: "Air",
    ruling_planet: "Mercury",
    traits: ["Adaptable", "Curious", "Communicative", "Indecisive"]
  },
  {
    id: 4,
    name: "Cancer",
    image: cancer_img, // Placeholder for image
    dates: "June 21 - July 22",
    element: "Water",
    ruling_planet: "Moon",
    traits: ["Emotional", "Intuitive", "Protective", "Moody"]
  },
  {
    id: 5,
    name: "Leo",
    image: leo_img, // Placeholder for image
    dates: "July 23 - August 22",
    element: "Fire",
    ruling_planet: "Sun",
    traits: ["Generous", "Loyal", "Creative", "Arrogant"]
  },
  {
    id: 6,
    name: "Virgo",
    image: virgo_img, // Placeholder for image
    dates: "August 23 - September 22",
    element: "Earth",
    ruling_planet: "Mercury",
    traits: ["Analytical", "Reliable", "Modest", "Perfectionist"]
  },
  {
    id: 7,
    name: "Libra",
    image: libra_img, // Placeholder for image
    dates: "September 23 - October 22",
    element: "Air",
    ruling_planet: "Venus",
    traits: ["Diplomatic", "Charming", "Balanced", "Indecisive"]
  },
  {
    id: 8,
    name: "Scorpio",
    image: scorpio_img, // Placeholder for image
    dates: "October 23 - November 21",
    element: "Water",
    ruling_planet: "Pluto",
    traits: ["Passionate", "Determined", "Resourceful", "Jealous"]
  },
  {
    id: 9,
    name: "Sagittarius",
    image: sagittarius_img, // Placeholder for image
    dates: "November 22 - December 21",
    element: "Fire",
    ruling_planet: "Jupiter",
    traits: ["Optimistic", "Adventurous", "Generous", "Impatient"]
  },
  {
    id: 10,
    name: "Capricorn",
    image: capricorn_img, // Placeholder for image
    dates: "December 22 - January 19",
    element: "Earth",
    ruling_planet: "Saturn",
    traits: ["Disciplined", "Ambitious", "Practical", "Pessimistic"]
  },
  {
    id: 11,
    name: "Aquarius",
    image: aquarius_img, // Placeholder for image
    dates: "January 20 - February 18",
    element: "Air",
    ruling_planet: "Uranus",
    traits: ["Innovative", "Independent", "Intellectual", "Aloof"]
  },
  {
    id: 12,
    name: "Pisces",
    image: pisces_img, // Placeholder for image
    dates: "February 19 - March 20",
    element: "Water",
    ruling_planet: "Neptune",
    traits: ["Compassionate", "Empathetic", "Intuitive", "Escapist"]
  }
];

export default zodiac_data;