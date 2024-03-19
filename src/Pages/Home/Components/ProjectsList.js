/* Project Images */
import MovieProject from "../../../assets/images/projectImages/movieproject.png";
import YoutubeDownloaderProject from "../../../assets/images/projectImages/youtubedownloader.png";
import RainSoundProject from "../../../assets/images/projectImages/rainsoundproject.png";
import TwitterVideoDownloaderProject from "../../../assets/images/projectImages/twittervideodownloader.png";
import NotesAppProject from "../../../assets/images/projectImages/projectnotesapp.png";
import GpaCalculator from "../../../assets/images/projectImages/gpacalculator.png";
import LinkedinCloneProject from "../../../assets/images/projectImages/linkedinclone.png";
import InstagramCloneProject from "../../../assets/images/projectImages/instaclone.png";
import GoogleCloneProject from "../../../assets/images/projectImages/googleclone.png";
import HexGeneratorProject from "../../../assets/images/projectImages/hexgenerator.png";
import BmiCalculator from "../../../assets/images/projectImages/bmicalculator.png";
import SociableCat from "../../../assets/images/projectImages/sociablecat.png";
import SpotifyPlaylistShuffler from "../../../assets/images/projectImages/spotifyplaylistshuffler.png";
import Tunemix from "../../../assets/images/projectImages/tunemix.png";
const ProjectImages = [
  SociableCat,
  NotesAppProject,
  MovieProject,
  YoutubeDownloaderProject,
  RainSoundProject,
  TwitterVideoDownloaderProject,
  SpotifyPlaylistShuffler,
  GpaCalculator,
  LinkedinCloneProject,
  // InstagramCloneProject,
  // GoogleCloneProject,
  HexGeneratorProject,
  BmiCalculator,
];

const ProjectList = [
  {
    id: 0,
    title: "Tunemix - Playlist Generator",
    url: "https://github.com/h-solak/mis-463-project",
    image: Tunemix,
    description:
      "A full-stack website that generates spotify playlists for businesses such as Cafés, Bars, or Clubs. This was a school project I built with a team. It runs a Python script on the backend side. I coded frontend and backend of the website.",
    tags: ["Node.js", "MongoDB", "React.js", "Material UI"],
  },
  {
    id: 1,
    title: "Social Media",
    url: "https://github.com/h-solak/social-media",
    image: SociableCat,
    description:
      "A social media website connected to a restful API that I built. It, surely, resembles facebook :) You can share posts, chat with people, and follow them. It also has a feed that contains friend's posts, friend suggestions, and so on...",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux"],
  },
  {
    id: 2,
    title: "Notes App",
    url: "https://github.com/h-solak/notesApp",
    image: NotesAppProject,
    description:
      "A mobile take-a-note app that allows you to take a note, add some tasks with its calendar feature.",
    tags: ["React Native", "Redux", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Movie Finder",
    url: "https://h-solak.github.io/movie-finder/",
    image: MovieProject,
    description:
      "A website that fetches data from an API and lists the movies you are searching for.",
    tags: ["React.js", "Axios", "CSS"],
  },
  {
    id: 4,
    title: "Youtube Video Downloader",
    url: "https://h-solak.github.io/youtube-downloader/",
    image: YoutubeDownloaderProject,
    description:
      "A website to download your favorite videos from youtube as a video or audio.",
    tags: ["React.js", "Axios", "RapidAPI"],
  },
  {
    id: 5,
    title: "Rain Sounds Player",
    url: "https://h-solak.github.io/rain-sounds/",
    image: RainSoundProject,
    description: "A website to listen to relaxing rain sounds.",
    tags: ["React.js", "CSS"],
  },

  {
    id: 6,
    title: "Twitter Video Downloader",
    url: "https://h-solak.github.io/twitter-video-downloader/",
    image: TwitterVideoDownloaderProject,
    description: "A website to to download any video you want from twitter.",
    tags: ["React.js", "Typescript", "CSS"],
  },

  {
    id: 7,
    title: "Spotify Playlist Shuffler",
    url: "https://spotify-playlist-shuffler.netlify.app",
    image: SpotifyPlaylistShuffler,
    description:
      "This website uses Spotify API to shuffle user's playlists. You can't login due to Spotify not letting me use their api without limits :(",
    tags: ["React.js", "Material UI"],
  },
  {
    id: 8,
    title: "GPA Calculator",
    url: "https://h-solak.github.io/gpa-calculator/",
    image: GpaCalculator,
    description: "A website to easily calculate your GPA.",
    tags: ["React.js", "Css"],
  },
  {
    id: 9,
    title: "LinkedIn UI Clone",
    url: "https://h-solak.github.io/linkedin-ui-clone/",
    image: LinkedinCloneProject,
    description: "Responsive clone of the actual LinkedIn website.",
    tags: ["Html", "Css", "Bootstrap"],
  },
  // {
  //   id: 8,
  //   title: "Instagram UI Clone",
  //   url: "https://h-solak.github.io/instagram-ui-clone/",
  //   description:
  //     "Clone of the actual instagram website. Made with Bootstrap and it is responsive.",
  //   tags: ["HTML", "CSS", "Bootstrap"],
  // },

  // {
  //   id: 9,
  //   title: "Google UI Clone",
  //   url: "https://h-solak.github.io/google-ui-clone/",
  //   description: "Clone of the actual Google website. (Not responsive yet)",
  //   tags: ["HTML", "CSS", "Bootstrap"],
  // },
  // {
  //   id: 8,
  //   title: "Color Generator",
  //   url: "https://h-solak.github.io/hex-code-generator/",
  //   image: HexGeneratorProject,
  //   description:
  //     "My first project... This website generates random colors by using it's own hex-code generator and sets it as the background color.",
  //   tags: ["HTML", "CSS", "JS"],
  // },
  //   {
  //     id: 9,
  //     title: "Body-Mass Index Calculator",
  //     url: "https://h-solak.github.io/body-mass-index/",
  //     image: BmiCalculator,
  //     description:
  //       "A simple body mass index calculator. I actually built it for myself because I check my BMI everytime.",
  //     tags: ["HTML", "CSS", "JS"],
  //   },
];

export { ProjectList, ProjectImages };
