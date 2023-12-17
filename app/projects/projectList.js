import { hero, todolist, calorie, tictactoe, quiz } from '../images/index'
const list = [
    {
        id: 1,
        title: "Calorie tracker",
        link: 'https://calorie-tracker-nu.vercel.app/',
        about: "Welcome to your ultimate health companion! Our website not only tracks your calories but transforms your diet into a personalized wellness experience. Enjoy real-time insights, receive motivational email updates, and explore intuitive tools for effortless fitness. Redefine your relationship with food, embrace a healthier lifestyle, and let us guide you on your journey to a happier you!",
        technologies: ['MERN', 'Nodemailer', 'Autosuggest', 'react-bootstrap', 'notistack', 'helmetjs', 'bcrypt'],
        image: calorie,
    }, {
        id: 2,
        title: 'Tic Tac Toe game',
        link: 'https://tic-tac-toe-web-app-kappa.vercel.app/',
        about: 'Play the classic Tic Tac Toe game with your friends and family. Enjoy the game with a beautiful UI and a smooth experience.',
        technologies: ['React', 'react-bootstrap'],
        image: tictactoe,
    }, {
        id: 3,
        title: 'To do list',
        link: '',
        about: 'Create your own to-do list and manage your tasks. Add, delete, and update your tasks with a beautiful UI.',
        technologies: ['Nextjs', 'MERN', 'react-hot-toast', 'bcrypt'],
        image: todolist,
    }, {
        id: 4,
        title: "DSA Quiz",
        link: 'https://mern-quiz-app-coral.vercel.app/',
        about: "Elevate your DSA expertise with our quiz app! Quickly test your Skills. Receive instant feedback on your performance and uncover correct answers at the quiz's conclusion. Assess and enhance your understanding of DSA effortlessly!",
        technologies: ['MERN', 'react-bootstrap', 'notistack', 'redux'],
        image: quiz,
    }
];
export default list;