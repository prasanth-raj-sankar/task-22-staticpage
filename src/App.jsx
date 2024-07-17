// App.js
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Apps";
import "./App.css";
import DetailedCard from "./DetailedCard";
import Cards from "./Cards";
import Footer from "./footer";

const data = [
  {
    icon: "1",
    title: "Fully Responsive",
    description:
      "This theme will look great on any device, no matter the size!",
  },
  {
    icon: "2",
    title: "Bootstrap 5 Ready",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    icon: "3",
    title: "Easy to Use",
    description:
      "Ready to use with your own content, or customize the source files!",
  },
];

const responsive = [
  {
    icons: "1",
    titles: "Fully Responsive Design",
    descriptions:
      "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    imagePosition: "left",
  },
  {
    icons: "2",
    titles: "Updated For Bootstrap 5",
    descriptions:
      "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    imagePosition: "right",
  },
  {
    icons: "3",
    titles: "Easy to Use & Customize",
    descriptions:
      "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    imagePosition: "left",
  },
];

const respon = [
  {
    icons: "1",
    titles: "Margaret E.",
    descriptions: "This is fantastic! Thanks so much guys!",
  },
  {
    icons: "2",
    titles: "Fred S.",
    descriptions:
      "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    icons: "3",
    titles: "Sarah W.",
    descriptions:
      "Thanks so much for making these free resources available to us!",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="container-fluid">
        {responsive.map((items, index) => (
          <DetailedCard
            key={index}
            icons={items.icons}
            titles={items.titles}
            descriptions={items.descriptions}
            imagePosition={items.imagePosition === "left" ? "right" : "left"}
          />
        ))}
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center pt-5">What people are saying...</h1>
          {respon.map((items, index) => (
            <Cards
              key={index}
              icons={items.icons}
              titles={items.titles}
              descriptions={items.descriptions}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
