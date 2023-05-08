interface AudioPlayer {
  audioVlolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVlolume: 90,
  songDuration: 10,
  song: "la vieja ola",
  details: {
    author: "juan gabriel",
    year: 1990,
  },
};


//* Al desestructurar un objeto tambien se puede hacer una renombracion del atributo de un objeto.
const { song: audio, songDuration: duracion, details } = audioPlayer;
const { author } = details;

console.log(`la musia es ${audio}`);
console.log(`la duracion es ${duracion}`);
console.log(`el autor es ${author}`);
export {};
