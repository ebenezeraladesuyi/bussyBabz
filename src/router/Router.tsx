import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { HomeLayout } from "../layout";
import ServicesLayout from "../layout/ServicesLayout";
import ContactLayout from "../layout/ContactLayout";
import AboutLayout from "../layout/AboutLayout";
import BlogLayout from "../layout/BlogLayout";
// import Thanks from "../pages/homePage/Thanks";
// import WaitlistForm from "../pages/homePage/WaitlistForm";

const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
const Services = lazy(() => import("../pages/services/Services"))
const Contact = lazy(() => import("../pages/contact/Contact"))
const Blog = lazy(() => import("../pages/blog/Blog"))
const About = lazy(() => import("../pages/about/About"))
const WaitlistForm = lazy(() => import("../pages/homePage/WaitlistForm"))
const Thanks = lazy(() => import("../pages/homePage/Thanks"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            },
            {
                path: "joinwaitlist",
                element: <WaitlistForm />
            },
            {
                path: "thanks",
                element: <Thanks />
            }
        ]
    },
    {
        path: "/services",
        element: <ServicesLayout />,
        children: [
            {
                index: true,
                element: <Services />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
    {
        path: "/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />
            }
        ]
    },
    {
        path: "/blog",
        element: <BlogLayout />,
        children: [
            {
                index: true,
                element: <Blog />
            }
        ]
    },
])
