import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'GNAU from Operis',
        description : "The aim of the project is to overhaul the project's front-end from AngularJS to Angular. The particularity is that we have no documentation on the endpoints, nor access to the back-end code. We had to do a lot of research and retroengineering to fully understand the usefulness of the routes. We also had to create a templator to reproduce the existing style of the applications. What's more, the back-end protocol is SOAP, with one particularity: the api systematically sends the entire table definition (separated by special characters) and then the data. We had to understand how this worked, and then create an in-house mini-framework to be able to interpret and make requests easily.",
        tools: ['Typescript','Angular', 'Leaflet', 'RxJs', 'TaigaUi', 'Material Design', 'SCSS'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'OPERIS',
        description: 'The aim of the project is to create an application that combines all the functionalities of two existing applications, while maintaining data integrity. Migration of two databases (Oracle and Posgre). The data had to be backward-compatible so that it could be present in the new application, but also in the old ones. Creation of generic components - Creation of a generic PDF template - Creation of an RGPD data collection system - Complete creation of the circuit for sending an Electronic Acknowledgement of Receipt - Reflection with the customer on the business / Areas for improvement',
        tools: ['NestJs', 'Angular', 'SCSS', 'Typescript', 'TypeOrm'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'xGangsters',
        description: 'Steering the development of smart contracts. Manage the image storage system (AWS Bucket). Retrieve data stored on the blockchain and display/use the data. Development of the NFT sales system on the blockchain. Development of decentralized application for users',
        tools: ['NextJs', 'Tailwind', 'SCSS'],
        code: '',
        role: 'Dev - Product Owner',
        demo: 'https://xgangsters-dapp.vercel.app/',
        image: realEstate,
    },
    {
        id: 3,
        name: 'Moon Mission',
        description: 'Creation of a control center where NFT MonnMission owners can manage projects and collect rewards. Development of a web application using the MultiversX wallet connection. This application allows NFT holders to have different functionalities such as - Governance: Users can create 1 topic per month - Holding Rewards: Users can receive rewards in $EGLD tokens depending on the number of NFTs they have in their wallet - Various statistics on the project, such as the number of holders, a preview of the different topics important',
        tools: ['NextJs', 'Tailwind', 'SCSS'],
        code: '',
        role: 'Developer ',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Branchet',
        description: "Creation from scratch of a product and service presentation website. The aim of the project was to create a website presenting the company's services, businesses and blog, as well as a turnkey solution for the customer to modify and add new data easily.",
        tools: ['Wordpress', 'PHP', 'jQuery', 'Custom Post Type Plugin'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
        image: crefin
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