import { useState } from "react";
import "./PersonalityPage.css";
import Navigation from "../components/Navigation";

function PersonalityPage() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleDescription = (index: string) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const personalitySections = [
    {
      title: "People",
      description:
        "The people I've interacted with in my life have had a huge impact on my identity and personality development. Without these people, I wouldn't be the person I am. They've taught me how to be kind to others, how to love, laugh, and enjoy life, and how to be humble and communicate well.",
      images: [
        {
          src: "marriage.jpg",
          label: "Marriage",
          description:
            "Getting married has been a huge part of my identity development. Through meeting and dating Bryce, I've learned a lot about who I am and who I want to become. I've grown in many ways throughout our year and a half of being married, especially in humility and communication.",
        },
        {
          src: "family.jpg",
          label: "My Family",
          description:
            "My family has been a foundational influence for my identity and personality. My parents have taught me the importance of so many qualities that I now treasure in my life such as hard work, my testimony, and the gospel. So much of who I am now is due to my family.",
        },
        {
          src: "bfamily.jpg",
          label: "Bryce's Family",
          description:
            "Bryce's family has also helped shape my identity and personality. They've showed me the importance of welcoming and loving everyone, maintaining strong relationships, and having fun together. They easily welcomed me as part of their family, and now it's part of who I am.",
        },
        {
          src: "siblings.jpg",
          label: "Siblings",
          description:
            "My siblings are some of my best friends in life. They are the ones I choose to hang out with all the time, and so many of my happy memories are with them. They've taught me to compromise, be happy for other people's successes, and support each other.",
        },
        {
          src: "friends.jpg",
          label: "Friends",
          description:
            "My friends over the years have helped me develop my identity. From them, I've learned how to be loyal, listen to different perspectives, and explore my interests.",
        },
      ],
    },
    {
      title: "Adventure",
      description:
        "Being in the outdoors has been a meaningful part of my entire life. Through nature, I feel closer to Heavenly Father and the beautiful earth He created for us. I've also learned so many lessons about how to work hard, keep going when things are tough, and enjoy life.",
      images: [
        {
          src: "horses.jpg",
          label: "Horseback Riding",
          description:
            "Riding horses is a major part of who I am. I've loved horseback riding since I was young, but have been consistently riding since I was 14. Horseback riding has taught me how to be patient while learning and really enjoy the little improvements over time.",
        },
        {
          src: "rapelling.jpg",
          label: "Rapelling",
          description:
            "Both rock climbing and rappelling are another one of my favorite hobbies. Both of these sports have taught me to push myself outside of my comfort zone to improve.",
        },
        {
          src: "camping.jpg",
          label: "Camping",
          description:
            "Camping with my family has been one of our most frequent vacations. Camping has instilled in me a love for the outdoors and getting away from the distractions of life.",
        },
        {
          src: "hiking.jpg",
          label: "Hiking",
          description:
            "Hiking is one of the ways I've learned to work hard. With every mile I thought I couldn't keep going but still did, I learned that I can do hard things and that it's incredibly rewarding to succeed when it's been hard. ",
        },
        {
          src: "skiing.jpg",
          label: "Skiing",
          description:
            "Even though I haven't been skiing that much, it has taught me how to have courage when something is new, uncertain, and scary. I don't like uncertainty at all, so learning how to ski has taught me that not knowing everything is okay.",
        },
      ],
    },
    {
      title: "Hobbies",
      description:
        "My hobbies have been a way for me to serve and connect with others throughout my life. Through these hobbies, I've learned how to be a good friend, how to help people when they need it, and how to come closer to Heavenly Father.",
      images: [
        {
          src: "baking.jpg",
          label: "Baking",
          description:
            "For me, baking is a way to create something that is very enjoyable for a lot of people. I enjoy baking because it brings people together and gives me a chance to serve them.",
        },
        {
          src: "piano.jpg",
          label: "Piano",
          description:
            "I have played the piano since I was 8, so it is a huge part of who I am. I love how playing the piano helps me feel more connected to the spirit, and it gives me a lot of chances to serve in the church and in my personal life.",
        },
        {
          src: "puzzles.jpg",
          label: "Puzzles",
          description:
            "Doing puzzles and playing board games is one of my favorite activities to do with friends and family. For me these activities give me a chance to connect with others in a fun and meaningful way.",
        },
        {
          src: "art.jpg",
          label: "Art",
          description:
            "I have enjoyed art in various forms including ceramics, painting, and pencil drawings. Art is a way of expressing creativity and creating something beautiful, which I believe are very important parts of my life.",
        },
        {
          src: "choir.jpg",
          label: "Choir",
          description:
            "Singing with other people, especially in high school, gave me a community to belong to. This has led to the friendships I've had, which have shaped a lot of who I am.",
        },
      ],
    },
    {
      title: "Spiritual",
      description:
        "My faith and my testimony are one of the largest parts that define who I am. The gospel helps me answer so many important life questions, and helps me feel peace when times are hard. I also know the ways I should live my life so that I can have joy here and in the eternities. I am so grateful for the effect that the gospel has had on my personality and identity development.",
      images: [
        {
          src: "baptism.jpg",
          label: "Baptism",
          description:
            "My baptism is the first covenant I made with God. Because of the promises I've made through my baptism, I've become a more humble, loving, and dedicated disciple of God.",
        },
        {
          src: "blessing.jpg",
          label: "Patriarchal Blessing",
          description:
            "When I received my patriarchal blessing, I felt more than ever that I really am a daughter of God, and that He knows me and has a plan for my life. This blessing has been huge in shaping my identity, as I truly know that I can become like God is.",
        },
        {
          src: "byu.jpg",
          label: "BYU",
          description:
            "Attending BYU has been an amazing step in my spiritual journey as well. It's helped me deepen my testimony along with gaining an education, and it's where I met my husband.",
        },
        {
          src: "endowment.jpg",
          label: "Endowment",
          description:
            "Receiving my temple endowment was a very sacred and special experience for me. I love how I felt so much love from Heavenly Father, and because of the covenants I've made, I'm a different person now than I would've been without them.",
        },
        {
          src: "temple.jpg",
          label: "Temple Visits",
          description:
            "Going to the temple often helps me continue to develop my identity as a daughter of God, and helps me find peace and purpose for my life. I know I'm a better person because I go frequently.",
        },
      ],
    },
  ];

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <div className="intro-section">
        <div className="intro-text">
          <h1>My Identity and Personality Development Across My Life</h1>
          <p>
            These photos show important aspects of my identity and personality
            now, as well as illustrating how I've developed over time. Click on
            each photo to learn about why it's an important part of who I am,
            and how it's come to be that way.
          </p>
        </div>
        <img
          src="b_and_j.jpg"
          alt="Photo of couple smiling"
          className="intro-photo"
        />
      </div>

      {personalitySections.map((section, secIndex) => (
        <div key={secIndex} className="section-box">
          <div className="section-header">{section.title}</div>
          <div className="section-description">{section.description}</div>

          <div className="card-grid five-images">
            {section.images.map((item, imgIndex) => {
              const id = `${secIndex}-${imgIndex}`;
              return (
                <div
                  key={id}
                  className={`image-card hover-card ${
                    activeIndex === id ? "active" : ""
                  }`}
                  onClick={() => toggleDescription(id)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className={
                      item.src === "marriage.jpg" || item.src === "piano.jpg"
                        ? "objpos-top"
                        : ""
                    }
                  />
                  <div className="label">{item.label}</div>
                  <div className="description">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonalityPage;
