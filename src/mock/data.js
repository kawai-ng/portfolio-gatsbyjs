import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Ka Wai Ng | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is ',
  name: 'Ka Wai Ng',
  subtitle: 'I\'m a software engineer.' ,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePic.jpg',
  paragraphOne: 'Hello! 你好！Salam Sejahtera!',
  paragraphTwo: 'My name is Ka Wai and I hail from the beautiful city of Kuala Lumpur, Malaysia. I\'m a ' +
                'recent college graduate with a BS in Software Engineering and a minor in Cybersecurity ' + 
                'from the University of Central Missouri. ',
  paragraphThree: 'Throughout my life, I have always been fascinated by technology and how things worked. ' +
                  'I find joy in problem-solving and finding solutions to daily problems. Programming and computer science was ' +
                  'the discovery I needed to do all of the above. I enjoyed attending programming competitions, writing code ' +
                  ', and developing full-stack applications in my undergraduate journey. My other interests within the field ' +
                  'include game programming, web development, and artificial intelligence.',
  paragraphFour: 'On a personal note, I enjoy playing video games, dancing and discovering new music in my ' +
                 'down time. I\'m active seeking opportunities where I can put my skills to the test and improve ' +
                 'my knowledge. Feel free to contact me if you have any!',
  resume: 'https://drive.google.com/file/d/1mLSdv-YQNAtkGp07sqLsAUr0LEv5-mmo/view?usp=sharing', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = [
  {
    name: 'Java',
    percentage: '90',
    name2: 'SQL',
    percentage2: '80',
  },
  {
    name: 'React.JS',
    percentage: '90',
    name2: 'AWS',
    percentage2: '80',
  },
  {
    name: 'Javascript',
    percentage: '85',
    name2: 'Python',
    percentage2: '70',
  },
];

// ADDITIONAL SKILLS DATA
export const addSkillsData = [
  {title: 'C++'},
  {title: 'JavaFX'},
  {title: 'C'},
  {title: 'HTML5'},
  {title: 'CSS'},
  {title: 'Spring Framework'},
  {title: 'LINUX/UNIX Environments'},
  {title: 'Networking'},
  {title: 'Artificial Intelligence'},
  {title: 'Agile Methodologies'},
  {title: 'Algorithms'},
  {title: 'Linear Algebra'},
  {title: 'Graph Theory'},
  {title: 'Django'},
  {title: 'Selenium'},
  {title: 'PyTorch'},
  {title: 'REST APIs'},
  {title: 'MS Office'},
  {title: 'Project Management'},
  {title: 'Game Design'},
];

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'https://media.giphy.com/media/eInTL4skmcMLYrWUE3/giphy.gif',
    title: 'Cambium Carbon Website',
    info: 'The Cambium Carbon website is a platform I created for the company Cambium Carbon to fulfill ' +
          'their needs in spreading their message and showcasing their shop products to a meaningful contribution ' +
          'to combat climate change.',
    info2: 'Languages used: React.JS | Amazon Web Services (AWS) | SQL  ',
    url: 'https://cambiumcarbon.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'https://media.giphy.com/media/TLaSNpXVlpqaawvgRp/source.gif',
    title: 'AppointME!',
    info: 'AppointME! is a project created by my friends and I in a team of five as a part of our Senior ' +
          'Project requirements. The main function of Appointmeet is to allow students to schedule appointments ' +
          'and meetings with the professors.',
    info2: 'Languages used: Spring MVC | React.JS | SQL  ',
    url: 'https://github.com/ebenezerjeya/ApptApp',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'http://slazebni.cs.illinois.edu/fall18/assignment5/dqn.gif',
    title: 'Deep Q-Learning Neural Network Project',
    info: 'This project was adopted from the University of Illnois as a part of our Artificial Intelligence ' +
          'course. The main goal of the project is to develop a reinforcement learning neural network to play the ' +
          'Atari game Breakout, as depicted in the image. I utilized the Deep Q-Learning algorithm along with ' +
          'experience replay.',
    info2: 'Languages used: Python | PyTorch | TensorFlow ',
    url: 'https://colab.research.google.com/drive/1Zvgkrh52HIDBz7F9RAiQusX6Cn8kDWl7',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'https://media.giphy.com/media/QTDC941ve8AOsQERFQ/source.gif',
    title: 'Jumanji',
    info: 'Jumanji is a simple JavaFX multithreading game application stimulating the movie series of the ' +
          'same name. The applications allows any number of players to compete and reach the finish line. ' + 
          'Each player rolls a dice and has a chance to encounter a special event after each roll.',
    info2: 'Languages used: Java | JavaFX',
    url: 'https://github.com/kawai-ng/jumanji',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am open to opportunities! Let me know if you would want to work with me!',
  btn: '',
  email: 'kawai.ng@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kawai-ng/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/kawai-ng',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
