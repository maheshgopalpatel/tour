import b1 from "../assets/dd.jpeg"; // Placeholder images - replace with relevant ones
import b2 from "../assets/Ganga-Aarti.webp";
import b3 from "../assets/kk.jpg";
import b4 from "../assets/kkk.jpeg";
import b5 from "../assets/kkl.jpg";
import b6 from "../assets/kl.jpg";

const hotelsData = [
  { name: "Luxury Hotel A", img: b1, desc: "Experience premium comfort and service." },
  { name: "City Center Hotel B", img: b2, desc: "Conveniently located in the heart of the city." },
  { name: "Resort Hotel C", img: b3, desc: "Relax and unwind in a serene resort setting." },
  // Add more hotel data as needed
];

const houseBoatsData = [
  { name: "Deluxe House Boat 1", img: b4, desc: "Enjoy a unique stay on the water." },
  { name: "Luxury House Boat 2", img: b5, desc: "Experience luxury and tranquility on a houseboat." },
  // Add more houseboat data
];

const lodgesData = [
  { name: "Mountain Lodge X", img: b6, desc: "Escape to nature in a cozy mountain lodge." },
  { name: "Forest Lodge Y", img: b1, desc: "Immerse yourself in the tranquility of the forest." },
  // Add more lodge data
];

const transportationData = [
  { name: "Airport Transfers", img: b2, desc: "Reliable and comfortable airport transportation." },
  { name: "City Tours", img: b3, desc: "Explore the city with our guided tours." },
  { name: "Car Rentals", img: b4, desc: "Rent a car for convenient travel." },
  // Add more transportation data
];

export default [...hotelsData, ...houseBoatsData, ...lodgesData, ...transportationData]