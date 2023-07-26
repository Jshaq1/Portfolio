import BUNGLES from '../Images/courosel-images/BUNGLES.png'
import BUNGLES_HOME from '../Images/BUNGLES_HOME.png'
import BUNGLES_CONTACT from '../Images/BUNGLES_CONTACT.png'
import HUE from '../Images/courosel-images/HUE.png'
import HUE_HOME from '../Images/HUE_HOME.png'
import JBHIFIDASH from '../Images/courosel-images/JBHIFI-DASH.png'
import JBDASH_CALC from '../Images/JBDASH_CALC.png'
import JBDASH_CHAT from '../Images/JBDASH_CHAT.png'
import WORDLE from '../Images/courosel-images/WORDLE.png'
import WORDLE_HOME from '../Images/WORDLE_HOME.png'
import CHURCHIE from '../Images/courosel-images/CCS.png'
import HAVANA from '../Images/courosel-images/Havana Nights.png'
import CURTIN from '../Images/courosel-images/poster_mockup_MD.png'
import BAMBERTS from '../Images/Gallery-images/Bamberts.jpg'
import BJM from '../Images/Gallery-images/BJM FINAL.jpg'
import D9 from '../Images/Gallery-images/D9 Mockup.jpg'
import D9POSTER from '../Images/Gallery-images/District9Poster.jpg'
import JIMANDY from '../Images/Gallery-images/JIMANDY.jpg'
import MUSICFEST from '../Images/Gallery-images/Musicfest.jpg'
import WILDTHINGS from '../Images/Gallery-images/Wherethewild.png'
import SNOW from '../Images/Gallery-images/SnowPiercerPoster.jpg'
import SEAMOCK1 from '../Images/Gallery-images/SeacludedMock1.png'

const webprojects = [
    {
        'title': 'JB DASH',
        'link': 'https://jshaq1.github.io/Project_4-ShiftPosting',
        'categories': 'Web Design',
        'techStack': ['React', 'MUI', 'FireBase', 'Google Auth', 'Emotion', 'CSS3', 'Spline 3D'],
        'summary': 'Many of my colleagues at JB-HI-Fi were having trouble keeping track of their commissions. This was my love letter to them.',
        'challenge': 'JBHIFI where I once worked offer their sales people the chance to claim back commission they lose by discounting/price matching items below a thresh-hold. However currently there is no tool to both calculate and keep record of commissions which makes this very difficult.',
        'solution': 'I started by outlining the fundamental needs of the users. That is to both calculate and save comissions for any given sale/week. Using a combination of React, MUI and Firebase allowed for a light easy to use but familiar experience; seeing as JBHIFI was already using MUI internally. Designed with the intention of being user customisable at a later date, I wanted something that users could remember to use after every sale hence the use of Spline.',
        'desc': 'An easy to use, interactive React dashboard to make the teams life easier and in the process make sure they are being paid what they deserve.',
        'image': JBHIFIDASH,
        'images': [JBDASH_CALC, JBDASH_CHAT]
    },
    {
        'title': 'THE BUNGLES',
        'link': 'https://www.thebungles.com.au/',
        'categories': 'Web Design',
        'techStack': ['Webflow', 'CMS', 'Illustrator'],
        'summary': 'The Bungles are an interactive childrens show created in the mid 90s, bringing iconic Australian wildlife to the big stage.',
        'challenge': 'Design an interactive landing page for an Australian Childrens show called "The Bungles", for the purpose of generating new clients and bookings. Characters had not been in business since the early 90s meaning available digital content was very limited. The client wanted the ability to change and alter content themselves as they moved forward ',
        'solution': 'After discussions with the client it was clear that we were working with fairly limited digital content. I chose to use Webflow as a means of creating an engaging experience through animations and design, but also due to the ease of updating the content as time went on. I wanted to allow the team at The Bungles to readily update content on their own.',
        'desc': 'A Webflow based CMS, single page app. That made use of the limited digital assets, designed to be simple and fun and easily updated ',
        'image': BUNGLES,
        'images': [BUNGLES_HOME, BUNGLES_CONTACT]
    },
    {
        'title': 'HUE',
        'link': 'https://hue-pallet.herokuapp.com/',
        'categories': 'Web Design',
        'techStack': ['Python', 'Flask', 'API', 'MYSQL', 'bcrypt', 'Heroku', 'CSS3', 'JINJA', 'Gunicorn', 'psycopg2'],
        'summary': 'I make use of so many design aids, and I thought why not create a very poor version of my own to explore Flask and MYSQL.  ',
        'challenge': 'Create a design helper that meaningfully impacts the way I generate web designs. Using a Flask SPA to generate and display API requests to store user created information in a database',
        'solution': 'A single page application that makes use of a color pallet API to generate thoughtfully crafted color pallets, allowing users to save pallets for later use.',
        'desc': 'A Flask based app designed to assist the user in creating meaningful color pallets based on current films and design trends.',
        'image': HUE,
        'images': [HUE_HOME]
    },
    {
        'title': 'WORDLE',
        'link': 'https://jshaq1.github.io/Project_01_Wordle/',
        'categories': 'Web Design',
        'techStack': ['HTML', 'JS', 'CSS'],
        'summary': 'My first project, provided 2 weeks after commencing my coding journey. An attempt to explore and have fun with everything new I was learning.',
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized fron-end only version of the game "WORDLE" with replayability, working game logic and functional keyboard inputs',
        'solution': 'An early exploration of JS, CSS and a simple implimentation of game logic/theory to create an engaging user experience replicating the world famous New York Times Wordle',
        'desc': 'An early exploration of JS, CSS and a simple implimentation of game logic/theory to create an engaging user experience replicating the world famous New York Times Wordle',
        'image': WORDLE,
        'images': [WORDLE_HOME]
    },
    // {
    //     'title': 'FRINGE FESTIVAL',
    //     'link': '',
    //     'categories': 'Graphic Design',
    //     'techStack': ['Illustrator', 'InDesign', 'PhotoShop', 'Photography'],
    //     'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
    //     'solution': 'A selection of posters, flyers and social media content from various Fringe Events over the years. Primarily for a Perth based organisation PSP Events',
    //     'image': HAVANA,
    //     'images': [JBDASH_CALC, JBDASH_CHAT]
    // },
    {
        'title': 'CURTIN GUILD',
        'link': '',
        'categories': 'Graphic Design',
        'techStack': ['HTML', 'JS', 'CSS'],
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
        'solution': 'A series of film poster designs and film festival design assets, created to both advertise and increase ticket sales but also showcase student work.',
        'image': CURTIN,
        'images': [MUSICFEST, WILDTHINGS, JIMANDY, D9POSTER, SNOW, BJM]
    },
    {
        'title': 'SEACLUDED',
        'link': '',
        'categories': 'Graphic Design',
        'techStack': ['HTML', 'JS', 'CSS'],
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
        'solution': 'Chirchie Grammar School in Brisbane required a simple, legible and reusable wordmark and logo design for their extended swim  club to wear proudly at competitions ',
        'desc': 'Design collatoral for a upcoming housing estate.',
        'image': SEAMOCK1,
        'images': [JBDASH_CALC, JBDASH_CHAT]
    },
    // {
    //     'title': 'CHURCHIE GRAMMAR',
    //     'link': '',
    //     'categories': 'Graphic Design',
    //     'techStack': ['HTML', 'JS', 'CSS'],
    //     'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
    //     'solution': 'Chirchie Grammar School in Brisbane required a simple, legible and reusable wordmark and logo design for their extended swim  club to wear proudly at competitions ',
    //     'image': CHURCHIE,
    //     'images': [JBDASH_CALC, JBDASH_CHAT]
    // },


]


export default webprojects

