import { HoverEffect } from "../components/ui/projectGrid";

export function Project() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className=" flex w-full text-7xl font-bold justify-center items-center">
        Projects
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
 
  {
    title: "Linkly",
    description:" Full Stack App which provides us URL Shortening Service App contains Api Fetching , Data Querying ,etc Uses React.js as Front End and Uses Node.js with Express as Back End and MongoDB as Database",
    link: "https://linkllly.netlify.app/",
  },
  {
    title: "AI Image Generation ",
    description:
      " App use API provided by Eden AI to generate Image. App Contains Photo Generation, Photo Storage, Photo Sharing. DataBase: MongoDB",
    link: "https://sohom-img-generator.netlify.app/",
  },
  {
    title: "Amazon Product Tracker",
    description:
      " API used to fetch Amazon product History using web scraping. API can be used to set an alert when every price drops below a margin price. API sending automated alert via email if price drops. Puppeteer used for web scraping, SendGrid used for mail service.",
    link: "https://github.com/SohomSaha045/amazon_price_tracker",
  },
  {
    title: "Flight App UI",
    description: " Cross Platform Application build in Flutter. Application contains User Authentication, User Profile Creation and Advance UI Design. Uses Flutter as Front End and Uses Fire Base as Back End.",
    link: "https://www.youtube.com/watch?v=dwQzIFUSJjc&feature=youtu.be",
  },
  {
    title: "INSTA-Clone App",
    description:
      "Cross Platform Photo Sharing Application Inspired by Instagram.App Contains User Authentication , Profile Creation, Likes on Post, Comments on Post, Photo Sharing, Following Different User. Uses Flutter as Front End and Uses Fire Base as Back End and FireStore as Database.",
    link: "https://www.youtube.com/watch?v=aHbZ9-NDN_c",
  },
  {
    title: "EZ-SUPPLY App",
    description:
      " Supply Chain Logistics decentralized app using Block-Chain aimed on reducing PIRACY of Products and Tracking of Products Ensure Proper Verification of Product and track back products to their source.",
    link: "https://www.youtube.com/watch?v=dkaZ2xG4Ln0",
  }
];
