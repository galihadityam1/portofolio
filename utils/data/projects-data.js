import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Tanoe Shirt (E-Commerce)',
        description: "A web based e-commerce. Builded with next.jsA web based e-commerce. I have developed e-commerce web using Typescript, NextJS, and MongoDB. Used login section using cookie for the authentication system.",
        tools: ['NextJS', 'MongoDB', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Twitter Clone (Smartphone App)',
        description: 'I have designed and developed a full-stack app for smartphone, i cloned twitter as reference. I created the UI using JavaScript, MUI, NativeWind CSS, and React Native. The app supports multiple languages and currencies. I developed the API using ApolloGraphQl, JavaScript, and MongoDB. I deployed the front-end app to expo.dev and the back-end app to AWS EC2.',
        tools: ['JavaScript', 'NativeWind CSS', "MongoDB", "ApolloGraphQL", "React Native", "Expo"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Realtime Chat & Whiteboard',
        description: 'My team built a web for realtime chat that have whiteboard features. We used Express, JavaScript, Socket.io and ReactJS. We utilized TailwindCSS and other npm libraries for the UI.',
        tools: ['ReactJS', 'Tailwind CSS', 'Express', 'JavaScript', 'PostgreSQL', 'Socket.io'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Restaurant Website',
        description: "I built a restaurant website dashboard application. I created the dashboard using ReactJS, Material UI, and other necessary npm libraries. I used expressJS for the back-end and deployed the application to AWS EC2. I also used firebase for the front-end deployment. Using 3rd Party API, I created a payment for the restaurant using midtrans.",
        tools: ['ReactJS', 'JavaScript', 'ExpressJS', 'Midtrans', "JWT", "Firebase"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },