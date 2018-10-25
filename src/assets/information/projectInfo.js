import tasteDiscoveryImg from '../../images/tasteDiscovery.png'
import LyricScrapper from '../../images/LyricScrapper.png'
import facileCloset from '../../images/facileCloset.png'
import personalWebpage from '../../images/personalWebpage.png'

const projectInfo = [
  {
    imgPath: tasteDiscoveryImg,
    projectName: 'Taste Discovery',
    projectInfoText:
      'Taste Discovery is Web app that allows users to find recommendations and helps them discover new music, movies, TV shows, books and games, based on what they like. Users can search all categories, or limit their search to one specific category. The app displays information about the recommendations and provides Youtube videos relating to the recommendations when available. Information is fetched from TasteDive API. Made with React and hosted on Netlify.',
    languajes: [
      { className: 'icon-css3' },
      { className: 'icon-react' },
      { className: 'icon-javascript' },
      { className: 'icon-netlify' },
    ],
    codeLink: 'https://github.com/juanpichvrdo/Taste-Discovery',
    demoLink: 'https://tastediscovery.netlify.com/',
  },
  {
    imgPath: LyricScrapper,
    projectName: 'LyricScrapper',
    projectInfoText:
      'LyricSrapper is web app that finds the lyrics of a song providing the name of the artist and title of the song. Song lyrics are fetched from lyrics.ovh API. Made with React and hosted on Netlify.',
    languajes: [
      { className: 'icon-css3' },
      { className: 'icon-react' },
      { className: 'icon-javascript' },
      { className: 'icon-netlify' },
    ],
    codeLink: 'https://github.com/juanpichvrdo/Lyric-Scrapper',
    demoLink: 'https://lyricscraper.netlify.com/',
  },
  {
    imgPath: facileCloset,
    projectName: 'facileCloset',
    projectInfoText:
      'facileCloset is a web page for a made-up fictitious company. The company is supposed to be a subscription-based clothing company where customers pick a plan and the company will send them a monthly box full of clothes and accessories. Designed on Adobe XD, made with HTML5 and SASS using the BEM (Block, Element, Modifier) approach, also used ScrollReveal Javascript library for quickly animating elements as they enter the viewport on the desktop view. Hosted on Netlify. Disclaimer: The images on the website are not optimized, because of that the website might take a little bit more time at the begging to fully load.',
    languajes: [
      { className: 'icon-html5' },
      { className: 'icon-sass' },
      { className: 'icon-javascript' },
      { className: 'icon-netlify' },
    ],
    codeLink: 'https://github.com/juanpichvrdo/facile_closet',
    demoLink: 'https://facilecloset.netlify.com/',
  },
  {
    imgPath: personalWebpage,
    projectName: 'Personal Website',
    projectInfoText:
      'This site was made with Gatsby. Gatsby is a React-based, GraphQL powered, static site generator. It allowed me to build this site as a I would build a regular react app but the result is a website that uses only static files for incredibly fast page loads. Used SASS for styling and Icomoon to make the icon font. Hosted on Netlify.',
    languajes: [
      { className: 'icon-gatsby' },
      { className: 'icon-react' },
      { className: 'icon-javascript' },
      { className: 'icon-sass' },
      { className: 'icon-graphql' },
      { className: 'icon-netlify' },
    ],
    codeLink: 'https://github.com/juanpichvrdo/personal-website',
  },
]

export default projectInfo
