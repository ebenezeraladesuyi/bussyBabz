import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import { HomeLayout } from "../layout";
// import ServicesLayout from "../layout/ServicesLayout";
// import ContactLayout from "../layout/ContactLayout";
// import AboutLayout from "../layout/AboutLayout";
// import BlogLayout from "../layout/BlogLayout";
import ElectionLayout from "../layout/electionLayouts/ElectionLayout";
// import ThankYou from "../pages/homePage/election/ThankYou";
// import AskMail2 from "../pages/homePage/election/AskMail2";
// import Result from "../pages/homePage/election/Result";
// import SelectCand from "../pages/homePage/election/SelectCand";
// import AskMail from "../pages/homePage/election/AskMail";
// import ElectionHomeComp from "../pages/homePage/election/ElectionHomeComp";
// import Thanks from "../pages/homePage/Thanks";
// import WaitlistForm from "../pages/homePage/WaitlistForm";

// const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
// const Services = lazy(() => import("../pages/services/Services"))
// const Contact = lazy(() => import("../pages/contact/Contact"))
// const Blog = lazy(() => import("../pages/blog/Blog"))
// const About = lazy(() => import("../pages/about/About"))
// const WaitlistForm = lazy(() => import("../pages/homePage/WaitlistForm"))
// const Thanks = lazy(() => import("../pages/homePage/Thanks"))
const ElectionHomeComp = lazy(() => import("../pages/homePage/election/ElectionHomeComp"))
const AskMail = lazy(() => import("../pages/homePage/election/AskMail"))
const AskMail2 = lazy(() => import("../pages/homePage/election/AskMail2"))
const SelectCand = lazy(() => import("../pages/homePage/election/SelectCand"))
const Result = lazy(() => import("../pages/homePage/election/Result"))
const ThankYou = lazy(() => import("../pages/homePage/election/ThankYou"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <ElectionLayout />,
        children: [
            {
                index: true,
                element: <ElectionHomeComp />
            },
            {
                path: "askmail",
                element: <AskMail />
            },
            {
                path: "askmail2",
                element: <AskMail2 />
            },
            {
                path: "selectcandidate",
                element: <SelectCand />
            },
            {
                path: "result",
                element: <Result />
            },
            {
                path: "thankyou",
                element: <ThankYou />
            }
        ]
    }
    // {
    //     path: "/",
    //     element: <HomeLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <HomeComp />
    //         },
    //         {
    //             path: "joinwaitlist",
    //             element: <WaitlistForm />
    //         },
    //         {
    //             path: "thanks",
    //             element: <Thanks />
    //         }
    //     ]
    // },
    // {
    //     path: "/services",
    //     element: <ServicesLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Services />
    //         }
    //     ]
    // },
    // {
    //     path: "/contact",
    //     element: <ContactLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Contact />
    //         }
    //     ]
    // },
    // {
    //     path: "/about",
    //     element: <AboutLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <About />
    //         }
    //     ]
    // },
    // {
    //     path: "/blog",
    //     element: <BlogLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Blog />
    //         }
    //     ]
    // },
])
