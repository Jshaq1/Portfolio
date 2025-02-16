import BUNGLES from '../../Images/courosel-images/BUNGLES.png'
import BUNGLES_HOME from '../../Images/BUNGLES_HOME.png'
import BUNGLES_CONTACT from '../../Images/BUNGLES_CONTACT.png'
import HUE from '../../Images/courosel-images/HUE.png'
import HUE_HOME from '../../Images/HUE_HOME.png'
import JBHIFIDASH from '../../Images/courosel-images/JBHIFI-DASH.png'
import JBDASH_CALC from '../../Images/JBDASH_CALC.png'
import JBDASH_CHAT from '../../Images/JBDASH_CHAT.png'
import WORDLE from '../../Images/courosel-images/WORDLE.png'
import WORDLE_HOME from '../../Images/WORDLE_HOME.png'
import CURTIN from '../../Images/courosel-images/poster_mockup_MD.png'
import BleakMock from '../../Images/Gallery-images/BlackMock.png'
import JonzinMock from '../../Images/Gallery-images/JonzinMock.png'
import SEACLUDED from '../../Images/Gallery-images/SeacludedMock1.png'
import SEAMOCK1 from '../../Images/Gallery-images/SeaMock1.png'
import SEAMOCK2 from '../../Images/Gallery-images/SeaMock.png'
import ChurchieLogo from '../../Images/CCS.png'
import ChurchieLogo2 from '../../Images/Churchie.jpg'
import ChurchieMock from '../../Images/ChurchieKids.png'
import Busmin_Carousel from '../../Images/courosel-images/Busmin_Carousel.png'
import Busmin from '../../Images/Busmin.png'
import Busmin_alt from '../../Images/Busmin_alt.png'
import AXSDash from '../../Images/AXSDash.png'
import AXS_Tire from '../../Images/AXS_Tire.png'
import AXS_Carousel from '../../Images/courosel-images/AXS_Carousel.png'

const webprojects = [
    {
        'title': 'BUSMIN',
        'link': 'https://www.busmin.ai/',
        'categories': 'Software Dev',
        'techStack': ['React', 'Redux', 'Django', 'Firebase', 'MUI', 'ChartJS', 'RTK QUERY', 'MYOB'],
        'summary': 'A Business management tool designed to minimise the busy-work and enable staff to focus on the real work.',
        'challenge': 'Integrate all current internal business management tools into one easy to use, easy to understand and easy to customise tool. My role specifically was to ideate and liase with the design team and management team to implement new front-end features and functionality',
        'solution': 'Working closely with the design team, I was fortunate to work on some key features of the app. Including the creation of business insights and analytics. A feature that allows management to see the performance and health of their business in real time based on live user data and MYOB syncs. I was also personally responsible for the integration of user comments/tagging and the notifications system. It was imperative to maintain open communication with the design team and management to ensure that the features were both user friendly and met the needs of the business.',
        'desc': 'A Business management tool designed to minimise the busy-work and enable staff to focus on the real work.',
        'image': Busmin_Carousel,
        'images': [Busmin, Busmin_alt]
    },
    {
        'title': 'AXS WEB',
        'link': 'https://www.sram.com/en/life/stories/introducing-sram-axs-web',
        'categories': 'Software Dev',
        'techStack': ['React', 'Redux', 'Django', 'MUI', 'SAAS CSS', 'ChartJS', 'Google Maps API', 'Jest', 'BrowserStack'],
        'summary': 'A web tool designed for riders who want to better understand and improve their experience on the bike.',
        'challenge': 'Ongoing maintenance and feature development of the AXS Web platform, communicating with product managers and designers to ensure that the features and functionality of the platform are both user friendly and meet the needs of the business.',
        'solution': 'My role was to work closely with the design team and product manager to implement new front-end features and functionality as well as maintain and update existing features often as a response to user feedback. I spent alot of time maintaining and updating the CI-CD pipelines, making use of the browser stack testing platform to ensure user experience was consistent across all devices. I was heavily involved in updating some of the core features of the platform, including a complete overhaul of the tire pressure calculator, chain length guide and state management system.',
        'desc': ' A web tool designed for riders who want to better understand and improve their experience on the bike.',
        'image': AXS_Carousel,
        'images': [AXSDash, AXS_Tire]
    },
    {
        'title': 'JB DASH',
        'link': 'https://jshaq1.github.io/Project_4-ShiftPosting',
        'categories': 'Web Design',
        'techStack': ['React', 'MUI', 'FireBase', 'Google Auth', 'Emotion', 'CSS3', 'Spline 3D'],
        'summary': 'Many of my colleagues at JB-HI-Fi were having trouble keeping track of their commissions. This was my love letter to them.',
        'challenge': 'JBHIFI where I once worked offer their sales people the chance to claim back commission they lose by discounting/price matching items below a thresh-hold. However currently there is no tool to both calculate and keep record of commissions which makes this very difficult.',
        'solution': 'I started by outlining the fundamental needs of the users. That is to both calculate and save comissions for any given sale/week. Using a combination of React, MUI and Firebase allowed for a light easy to use but familiar experience; seeing as JBHIFI was already using MUI internally. Designed with the intention of being user customisable at a later date, I wanted something that users could remember to use after every sale hence the use of Spline.',
        'desc': 'An easy to use, interactive React dashboard to make the sales teams lives easier and they are being paid what they deserve.',
        'image': JBHIFIDASH,
        'images': [JBDASH_CALC, JBDASH_CHAT]
    },
    {
        'title': 'CURTIN GUILD',
        'categories': 'Graphic Design',
        'techStack': ['Jonzin Film Fest', 'Bleak Film Fest'],
        'desc': 'Alternate film poster designs for outdoor Curtins Student Guilds outdoor cinema events',
        'image': CURTIN,
        'images': [JonzinMock, BleakMock]
    },
    {
        'title': 'HUE',
        'link': 'https://hue-pallet.herokuapp.com/',
        'categories': 'Web Design',
        'techStack': ['Python', 'Flask', 'API', 'MYSQL', 'bcrypt', 'Heroku', 'CSS3', 'JINJA', 'Gunicorn', 'psycopg2'],
        'summary': 'I make use of so many design aids, and I thought why not create a very poor version of my own to explore Flask and MYSQL.  ',
        'challenge': 'Create a design helper that meaningfully impacts the way I generate web designs. Using a Flask SPA to generate and display API requests to store user created information in a database',
        'solution': 'A single page application that makes use of a color pallet API to generate thoughtfully crafted color pallets, allowing users to save pallets for later use.',
        'desc': 'A Flask based app designed to assist the user in creating meaningful color pallets based on current design trends.',
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
        'desc': 'An early exploration of JS, CSS and a simple implimentation of game logic/theory',
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
        'title': 'CHURCHIE GRAMMAR',
        'link': 'https://churchieaquatics.com.au/churchie-swim-club/uniforms-merchandise/',
        'categories': 'Branding',
        'techStack': ['Logo', 'Livery', 'Merch'],
        'summary': 'My first attempt at sports branding, finding harmony between a very old prestigeous school and a forward thinking swim club.',
        'challenge': 'I was asked to create a new brand, primary logo and merch designs. That would separate the Swim Club from the School, while still maintaining the school sense of identity. The client requested a US collegiate style logo utilising the school colours and eagle mascot.  ',
        'solution': 'Legible and reusable wordmark and logo design that is easily adaptable to all of their merch including swim caps. Using simple colours, block shapes and included brand manual allows the swim club to easily alter and change the logo to their needs.',
        'desc': 'Branding/Logo/Merch design for a prestigeous Brisbane Highschool swim club',
        'image': ChurchieMock,
        'images': [ChurchieLogo2, ChurchieLogo]
    },
    {
        'title': 'THE BUNGLES',
        'link': 'https://www.thebungles.com.au/',
        'categories': 'Web Design',
        'techStack': ['Webflow', 'CMS', 'Illustrator'],
        'summary': 'The Bungles are an interactive childrens show created in the mid 90s, bringing iconic Australian wildlife to the big stage.',
        'challenge': 'Design an interactive landing page for an Australian Childrens show called "The Bungles", for the purpose of generating new clients and bookings. Characters had not been in business since the early 90s meaning available digital content was very limited. The client wanted the ability to change and alter content themselves as they moved forward ',
        'solution': 'After discussions with the client it was clear that we were working with fairly limited digital content. I chose to use Webflow as a means of creating an engaging experience through animations and design, but also due to the ease of updating the content as time went on. I wanted to allow the team at The Bungles to readily update content on their own.',
        'desc': 'A Webflow based app designed to be simple, fun and easily updated in future ',
        'image': BUNGLES,
        'images': [BUNGLES_HOME, BUNGLES_CONTACT]
    },
    {
        'title': 'SEACLUDED HARBOR',
        'categories': 'Graphic Design',
        'techStack': ['Logo - Signage', 'Editorial'],
        'desc': 'Design collatoral including logo, signage, editorial for a upcoming housing estate in Perths northern suburbs. ',
        'image': SEACLUDED,
        'images': [SEAMOCK2, SEAMOCK1]
    },



]


export default webprojects

