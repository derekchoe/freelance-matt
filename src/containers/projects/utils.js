import AltoDark from './svgs/alto-dark'
import AltoLight from './svgs/alto-light'
import EventLight from './svgs/event-mate-light'
import EventDark from './svgs/event-mate-dark'
import UnifyedDark from "./svgs/unifyed-dark";
import UnifyedLight from './svgs/unifyed-light'

export const getCarouselIds = (id) => {
    const upperId = (id + 1) % (Object.keys(appWidgetArray).length)
    const lowerId = id - 1 < 0 ? Object.keys(appWidgetArray).length - 1 : id - 1
    return [lowerId, upperId]
}

export const appWidgetArray = {
    eventMate: {
        id: 0,
        link: "/projects?name=eventMate",
        image: "https://i.ibb.co/x6g5fnj/eventmate-image-2x.png",
        header: "Eventmate App",
        tag: "Eventmate",
        description: [
            {
                header: "Date",
                list: ["May 2016"],
            },
            {
                header: "What I Did",
                list: [
                    "UX Research",
                    "Improved IA",
                    "NUX & UI",
                    "Rapid Prototyping",
                ],
            },
            {
                header: "Tools",
                list: ["Sketch", "Flinto"],
            },
        ],
        images: [
            "https://i.ibb.co/frcwCWv/Explore-Events.png",
            "https://i.ibb.co/w4CFYkP/Event-Profile.png",
            "https://i.ibb.co/ZSwWL7H/Event-Profile-Scroll-2.png",
            "https://i.ibb.co/k3mrQ9h/Swipe-Profile.png",
            "https://i.ibb.co/BnmF3BS/My-Profile.png",
        ],
        summary: [
            {
                header: "Summary",
                description:
                    "Eventmate is a professional event-based networking application that enables users to meet and message other attendees before the event starts.",
            },
            {
                header: "Problem",
                description:
                    "Eventmate needed to create a product for event attendees to meet quality connections at the events they were attending.",
            },
            {
                header: "Solution & Results",
                description:
                    "We created a user experience that gave usres the ability to pre-match with attendees before the event starts with swiping card profiles. Users are able to create their accounts with a profile picture, and information such as what company you work for, what position you hold, what skills you have and what you are interested in. This gave the ability for users to seek out the people they’d hope to meet wile networking at events. When the profiles matched, the users are sent to their own chat rooms for conversation about anything they would like to discuss, or when and where they would like to meet at the event. The ability to meet each other before the event gave users a positive experience going into events, knowing that they have quality connections to network with.",
            },
        ],
        svg: {
            Light: EventLight,
            Dark: EventDark,
        },
    },
    unifyed: {
        id: 1,
        link: "/projects?name=unifyed",
        image: "https://i.ibb.co/n1Yj2Ht/unifyed-image-2x.png",
        header: "Unifyed Beta",
        tag: "Unifyed",
        description: [
            {
                header: "Date",
                list: ["October 2015"],
            },
            {
                header: "What I Did",
                list: ["Improved IA", "NUX & UI", "Rapid Prototyping"],
            },
            {
                header: "Tools",
                list: ["Sketch", "Invision"],
            },
        ],
        images: [
            "https://i.ibb.co/HH34VQq/Home-Map.png",
            "https://i.ibb.co/jZdrgMb/Home-List-View.png",
            "https://i.ibb.co/GkgvX90/Home-Map-View.png",
            "https://i.ibb.co/Th3LdHq/Home-Add-Pin.png",
            "https://i.ibb.co/KNbQwXf/View-Pin.png",
        ],
        summary: [
            {
                header: "Summary",
                description:
                    "Unifyed is a campus community platform for students to share and discover what’s happening on their University campus in real-time.",
            },
            {
                header: "Problem",
                description:
                    "The Unifyed team needed to create a more engaging user experience with tools and features to help students share and discover what is happening on campus.",
            },
            {
                header: "Solution & Results",
                description:
                    "Learning from our user research, we found that the students needed a visual indicator of the events happening on campus. Pins that were placed onto the map had a glowing animation to indicate where campus events were happening. The research showed that students would be more engaged with Unifyed if they were able to visually see what was happening on campus with this new map experience. The add events feature allowed students to share newly discovered events happening on campus, as well as the ability to create new events. Adding events based on discovery, or adding based on creation of a new event could be done through the add events button, or by force touch onto areas of the map. The results of this new UX showed indication of higher daily engagement and activity amongst students.",
            },
        ],
        svg: {
            Light: UnifyedLight,
            Dark: UnifyedDark,
        },
    },
    altoApp: {
        id: 2,
        link: "/projects?name=altoApp",
        image: "https://i.ibb.co/n1Yj2Ht/unifyed-image-2x.png",
        header: "Alto App",
        tag: "Boditrak Sports",
        description: [
            {
                header: "Date",
                list: ["February 2015"],
            },
            {
                header: "What I Did",
                list: [
                    "UX Resarch",
                    "Improved IA",
                    "NUX & UI",
                    "Icon Design",
                ],
            },
            {
                header: "Tools",
                list: ["Sketch", "Omnigraffle"],
            },
        ],
        images: [
            "https://i.ibb.co/GFp3prQ/alto1.png",
            "https://i.ibb.co/z82snCJ/alto2.png",
            "https://i.ibb.co/1MhtWfZ/alto3.png",
        ],
        extra: [
            "https://i.ibb.co/n0YbgXG/alto4.png",
            "https://i.ibb.co/xMm64mK/alto5.png",
        ],
        summary: [
            {
                header: "Summary",
                description:
                    "Alto is a comprehensive data & user management system comprising of user & cloud databases. Boditrak Sports needed a new design for their mobile application.  The Alto application pairs with its sensor hardware device to serve the sports medicine and athletic performance market. Alto relies on the core of video & wirelessly synced force data, and builds relevant metrics and user experience sequences to suit the addressable market.",
            },
            {
                header: "Problem",
                description:
                    "The Alto redesign project consisted of implementing new features that allow coaches, trainers, and sports medicine doctors to manage their athletes and the training sessions they conduct with them.",
            },
            {
                header: "Solution & Results",
                description:
                    "The user experience changed from a social application designed like Instagram, into a comprehensive data and athlete management system. The tools and features designed were to help the overall productivity between athletes and their coaches, trainers, and doctors. We implemented several tools that improved the productivity during athlete live sessions. The ability to edit and add metrics to be analyzed, the viewing models for recording athletes, annotation tools to help analyze recordings, and management tools for coaches, trainers, and doctors to schedule and communicate with their athletes. This allowed information to be easily shared, and the increase of performance for the athletes.",
            },
        ],
        svg: {
            Light: AltoLight,
            Dark: AltoDark,
        },
    },
};
