export default function getRandomImage() {
  const list = [
    "http://localhost:3001/images/carlos_castaneda_erva_do_diabo.jpg",
    "http://localhost:3001/images/edward_cummings_complete_poems.jpg",
    "http://localhost:3001/images/george_orwell_brave_new_world.jpg",
    "http://localhost:3001/images/kafka_a_metamorfose.jpg",
    "http://localhost:3001/images/ray_bradbury_fahrenheit_451.jpg",
    "http://localhost:3001/images/thoreau_walden_life_in_the_woods.jpg",
    "http://localhost:3001/images/umberto_eco_baudolino.jpg",
  ]

  const rndInt = Math.floor(Math.random() * 6) + 1
  return list[rndInt];
}