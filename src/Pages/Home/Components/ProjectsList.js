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
import Moviemate from "../../../assets/images/projectImages/moviemate.png";
import MFSIsgucu from "../../../assets/images/projectImages/mfs.png";
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
    id: "mfs",
    title: "MFS İşgücü",
    url: "https://mfs-isgucu.com/",
    githubUrl: false,
    image: MFSIsgucu,
    description:
      "A corporate website for an Austrian firm that supplies workforce from Turkey to Austria.",
    tags: ["React.js", "Material UI", "CSS"],
  },
  {
    id: "moviemate",
    title: "Moviemate",
    url: "https://github.com/h-solak/mis-492-project",
    githubUrl: true,
    image: Moviemate,
    description:
      "A full-stack website that matches you with people with similar movie tastes. You can follow other people, review & rate movies, start a chat with your friends. ",
    tags: ["Node.js", "MongoDB", "React.js", "Material UI", "Web Socket"],
  },
  {
    id: "tunemix",
    title: "Tunemix - Playlist Generator",
    url: "https://github.com/h-solak/mis-463-project",
    githubUrl: true,
    image: Tunemix,
    description:
      "A full-stack website that generates spotify playlists for businesses such as Cafés, Bars, or Clubs. This was a school project I built with a team. It runs a Python script on the backend side. I coded frontend and backend of the website.",
    tags: ["Node.js", "MongoDB", "React.js", "Material UI"],
  },
  {
    id: "social-media",
    title: "Social Media",
    url: "https://github.com/h-solak/social-media",
    githubUrl: true,
    image: SociableCat,
    description:
      "A social media website connected to a restful API that I built. It, surely, resembles facebook :) You can share posts, chat with people, and follow them. It also has a feed that contains friend's posts, friend suggestions, and so on...",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux"],
  },
  {
    id: "notes-app",
    title: "Notes App",
    url: "https://github.com/h-solak/notesApp",
    githubUrl: true,
    image: NotesAppProject,
    description:
      "A mobile take-a-note app that allows you to take a note, add some tasks with its calendar feature.",
    tags: ["React Native", "Redux", "Tailwind CSS"],
  },
  {
    id: "movie-finder",
    title: "Movie Finder",
    url: "https://h-solak.github.io/movie-finder/",
    githubUrl: false,
    image: MovieProject,
    description:
      "A website that fetches data from an API and lists the movies you are searching for.",
    tags: ["React.js", "Axios", "CSS"],
  },
  {
    id: "youtube-downloader",
    title: "Youtube Video Downloader",
    url: "https://h-solak.github.io/youtube-downloader/",
    githubUrl: false,
    image: YoutubeDownloaderProject,
    description:
      "A website to download your favorite videos from youtube as a video or audio.",
    tags: ["React.js", "Axios", "RapidAPI"],
  },
  {
    id: "rain-sounds-player",
    title: "Rain Sounds Player",
    url: "https://h-solak.github.io/rain-sounds/",
    githubUrl: false,
    image: RainSoundProject,
    description: "A website to listen to relaxing rain sounds.",
    tags: ["React.js", "CSS"],
  },

  {
    id: "twitter-video-downloader",
    title: "Twitter Video Downloader",
    url: "https://h-solak.github.io/twitter-video-downloader/",
    githubUrl: false,
    image: TwitterVideoDownloaderProject,
    description: "A website to to download any video you want from twitter.",
    tags: ["React.js", "Typescript", "CSS"],
  },

  {
    id: "spotify-playlist-shuffler",
    title: "Spotify Playlist Shuffler",
    url: "https://spotify-playlist-shuffler.netlify.app",
    githubUrl: false,
    image: SpotifyPlaylistShuffler,
    description:
      "This website uses Spotify API to shuffle user's playlists. You can't login due to Spotify not letting me use their api without limits :(",
    tags: ["React.js", "Material UI"],
  },
  {
    id: "gpa-calculator",
    title: "GPA Calculator",
    url: "https://h-solak.github.io/gpa-calculator/",
    githubUrl: false,
    image: GpaCalculator,
    description: "A website to easily calculate your GPA.",
    tags: ["React.js", "Css"],
  },
  {
    id: "linkedin-ui-clone",
    title: "LinkedIn UI Clone",
    url: "https://h-solak.github.io/linkedin-ui-clone/",
    githubUrl: false,
    image: LinkedinCloneProject,
    description: "Responsive clone of the actual LinkedIn website.",
    tags: ["Html", "Css", "Bootstrap"],
  },
  // {
  //   id: 8,
  //   title: "Instagram UI Clone",
  //   url: "https://h-solak.github.io/instagram-ui-clone/",
  //   githubUrl: true,
  //   description:
  //     "Clone of the actual instagram website. Made with Bootstrap and it is responsive.",
  //   tags: ["HTML", "CSS", "Bootstrap"],
  // },

  // {
  //   id: 9,
  //   title: "Google UI Clone",
  //   url: "https://h-solak.github.io/google-ui-clone/",
  //   githubUrl: true,
  //   description: "Clone of the actual Google website. (Not responsive yet)",
  //   tags: ["HTML", "CSS", "Bootstrap"],
  // },
  // {
  //   id: 8,
  //   title: "Color Generator",
  //   url: "https://h-solak.github.io/hex-code-generator/",
  //   githubUrl: true,
  //   image: HexGeneratorProject,
  //   description:
  //     "My first project... This website generates random colors by using it's own hex-code generator and sets it as the background color.",
  //   tags: ["HTML", "CSS", "JS"],
  // },
  //   {
  //     id: 9,
  //     title: "Body-Mass Index Calculator",
  //     url: "https://h-solak.github.io/body-mass-index/",
  //     githubUrl: true,
  //     image: BmiCalculator,
  //     description:
  //       "A simple body mass index calculator. I actually built it for myself because I check my BMI everytime.",
  //     tags: ["HTML", "CSS", "JS"],
  //   },
];

export { ProjectList, ProjectImages };
