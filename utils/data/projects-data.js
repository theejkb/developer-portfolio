import crefin from '/public/gif/birdies.gif';


export const projectsData = [
  {
    id: 1,
    name: "GNAU - Operis",
    description:
      "The aim of the project is to overhaul the project's front-end from AngularJS to Angular. The particularity is that we have no documentation on the endpoints, nor access to the back-end code. We had to do a lot of research and retroengineering to fully understand the usefulness of the routes. We also had to create a templator to reproduce the existing style of the applications.",
    tools: [
      "Typescript",
      "Angular",
      "Leaflet",
      "RxJs",
      "TaigaUi",
      "Material Design",
      "SCSS",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "Expert - OPERIS",
    description:
      "Migration of two databases into one (Oracle and Posgre). The data had to be backward-compatible so that it could be present in the new application, but also in the old ones. Creation of generic components - Creation of a generic PDF template - Creation of an RGPD data collection system - Complete creation of the circuit for sending an Electronic Acknowledgement of Receipt - Reflection with the customer on the business / Areas for improvement",
    tools: ["NestJs", "Angular", "SCSS", "Typescript", "TypeOrm"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "xGangsters",
    description:
      "Steering the development of smart contracts. Manage the image storage system (AWS Bucket). Retrieve data stored on the blockchain and display/use the data. Development of the NFT sales system on the blockchain. Development of decentralized application for users. Coordination of smart contract development and integration into the web application.",
    tools: ["NextJs", "Tailwind", "SCSS", "Vercel"],
    code: "",
    role: "Front-end Developer - Product Owner",
    demo: "",
  },
  {
    id: 4,
    name: "Moon Mission",
    description:
      "Creation of a control center where NFT MonnMission owners can manage projects and collect rewards. Development of a web application using the MultiversX wallet connection. This application allows NFT holders to have different functionalities such as - Governance - Holding Rewards - Various statistics on the project",
    tools: ["NextJs", "Tailwind", "SCSS"],
    code: "",
    role: "Front-end Developer",
    demo: "",
  }
];
