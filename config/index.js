module.exports = {
  //-- SITE SETTINGS -----
  author: "@konstantinmuenster",
  siteTitle: "Hannah Wischnia",
  siteShortTitle: "HW", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#EDD4C8",
      tertiary: "#EDD4C8",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Nanum Gothic, Arial, sans-serif",
    secondary: "Source Code Pro, Arial, sans-serif"
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  // mediumRssFeed:
  //   "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",
  projects: [
    {
      name: "Spell With A Friend",
      url: "http://www.spellwithafriend.com/",
      description:
        "An application that lets you play the NYTimes Spelling Bee with friends",
      img: "/bee-clipart.png",
      categories: ["test1", "test2", "test3"],
    },
    {
      name: "Meedle",
      url: "https://meedleapp.herokuapp.com",
      img: "/map.png",
      description:
        "An app that leverages the Google Maps API to help you and your friends find a place to meet.",
      categories: ["test1", "test2", "test3"],
    },
  ],
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/hannah-wischnia/",
    },
    {
      name: "Github",
      url: "https://github.com/wisch628",
    },
    {
      name: "Mail",
      url: "mailto:hannahwischnia@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
  },
  footerLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hannah-wischnia/",
    },
    {
      name: "GitHub",
      url: "https://github.com/wisch628",
    },
  ],
}
