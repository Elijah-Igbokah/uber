import multiplePeople from "../Images/Multiple people.svg";
import document from "../Images/Document.svg";
import homeIcon from "../Images/Home-1.svg";

// /////////////////////////////////////////////////
import DriverAppLogo from "../Images/Driver-App-logo.png";
import RiderAppLogo from "../Images/Rider-App-logo.png";
import arrowRight from "../Images/Arrow right.svg";

export const SmallCardItems = [
    {
        icon: `${multiplePeople}`,
        title: "About us",
        info: "Find out how we started, what drives us, and how we’re reimagining how the world moves.",
        link: "Learn more about Uber"
    },
    {
        icon: `${document}`,
        title: "Newsroom",
        info: "See announcements about our latest releases, initiatives, and partnerships.",
        link: "Go to Newsroom"
    },
    {
        icon: `${homeIcon}`,
        title: "Global citizenship",
        info: "Read about our commitment to making a positive impact in the cities we serve.",
        link: "See our partnerships"
    },
];

export const AppLogoButtonsItems= [
    {
        logo: `${DriverAppLogo}`,
        text: "Download the Driver app",
        link: "https://skuo.app.link/Wnc0AB7j0ib?%243p=a_custom_47734&%24uri_redirect_mode=1&uclick_id=beb6cbc7-e264-4bd6-9677-92eeb59de581&~campaign=uber-com-homepage-block&~tune_publisher_sub1=7393493e-73ce-413d-9c71-c0c06eaa4f56",
        arrow: arrowRight
    
    },
    {
        logo: `${RiderAppLogo}`,
        text: "Download the Ride app",
        link: "https://ocie.app.link/6qlyRoi7dfb?%243p=a_custom_47734&uclick_id=beb6cbc7-e264-4bd6-9677-92eeb59de581&~tune_publisher_sub1=7393493e-73ce-413d-9c71-c0c06eaa4f56",
        arrow: `${arrowRight}`
    }
];