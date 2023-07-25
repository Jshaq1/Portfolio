import BUNGLES from '../Images/courosel-images/BUNGLES.png'
import HUE from '../Images/courosel-images/HUE.png'
import JBHIFIDASH from '../Images/courosel-images/JBHIFI-DASH.png'
import WORDLE from '../Images/courosel-images/WORDLE.png'
import CHURCHIE from '../Images/courosel-images/CCS.png'
import HAVANA from '../Images/courosel-images/Havana Nights.png'
import CURTIN from '../Images/courosel-images/poster_mockup_MD.png'

const webprojects = [
    {
        'title': 'JB DASH',
        'link': 'https://jshaq1.github.io/Project_4-ShiftPosting',
        'categories': ['Web Design'],
        'tech-stack': ['React', 'Spline 3D', 'MUI', 'FireBase', 'Google Auth', 'Emotion', 'CSS3'],
        'challenge': 'JBHIFI where I once worked offer their sales people the chance to claim back commission they lose by discounting/price matching items below a thresh-hold. The trouble is they do not provide an automated way to keep track of this so it’s incumbent on the sales team to keep track and manage this manually. Currently there is no tool to calculate and keep record of commissions which makes this very difficult.',
        'solution': 'A easy to use, interactive React dashboard to make the teams life easier and in the process make sure they are being paid what they deserve.',
        'image': JBHIFIDASH
    },
    {
        'title': 'THE BUNGLES',
        'link': 'https://www.thebungles.com.au/',
        'categories': ['Web Design'],
        'tech-stack': ['Webflow', 'CMS', 'Illustrator'],
        'challenge': 'Design an interactive landing page for an Australian Childrens show called "The Bungles", for the purpose of generating new clients and bookings. Characters had not been in business since the early 90s meaning available digital content was very limited. The client wanted the ability to change and alter content themselves as they moved forward ',
        'solution': 'A Webflow based CMS, single page app. That made use of the limited digital assets, designed to be simple and fun and easily updated ',
        'image': BUNGLES
    },
    {
        'title': 'HUE',
        'link': 'https://hue-pallet.herokuapp.com/',
        'categories': ['Web Design'],
        'tech-stack': ['Python', 'Flask', 'API', 'MYSQL', 'bcrypt', 'Heroku', 'CSS3', 'JINJA', 'Gunicorn', 'psycopg2'],
        'challenge': 'Create a design helper that meaningfully impacts the way I generate web designs. Using a Flask SPA to generate and display API requests to store user created information in a database',
        'solution': 'A single page application that makes use of a color pallet API to generate thoughtfully crafted color pallets, allowing users to save pallets for later use.',
        'image': HUE
    },
    {
        'title': 'WORDLE',
        'link': 'https://jshaq1.github.io/Project_01_Wordle/',
        'categories': ['Web Design'],
        'tech-stack': ['HTML', 'JS', 'CSS'],
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
        'solution': 'An early exploration of JS, CSS and a simple implimentation of game logic/theory to create an engaging user experience replicating the world famous New York Times Wordle',
        'image': WORDLE
    },
    {
        'title': 'FRINGE FESTIVAL',
        'link': '',
        'categories': ['Graphic Design'],
        'tech-stack': ['HTML', 'JS', 'CSS'],
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
        'solution': 'A selection of posters, flyers and social media content from various Fringe Events over the years. Primarily for a Perth based organisation PSP Events',
        'image': HAVANA
    },
    {
        'title': 'CURTIN GUILD',
        'link': '',
        'categories': ['Graphic Design'],
        'tech-stack': ['HTML', 'JS', 'CSS'],
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
        'solution': 'A series of film poster designs and film festival design assets, created to both advertise and increase ticket sales but also showcase student work.',
        'image': CURTIN
    },
    {
        'title': 'CHURCHIE GRAMMAR',
        'link': '',
        'categories': ['Graphic Design'],
        'tech-stack': ['HTML', 'JS', 'CSS'],
        'challenge': 'Using just base HTML, JS and CSS. Create a stylized version of the game "WORDLE" with replyability, working game logic and functional keyboard inputs',
        'solution': 'Chirchie Grammar School in Brisbane required a simple, legible and reusable wordmark and logo design for their extended swim  club to wear proudly at competitions ',
        'image': CHURCHIE
    },

]


export default webprojects

