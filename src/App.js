// import React, { useEffect, useState, useCallback } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import UAParser from 'ua-parser-js';

// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import AllRoutes from "./AllRoutes";
// import Container from "./Container";

// function App() {
//   const [first, setFirst] = useState(true);
//   const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
//   const { i18n } = useTranslation("global");

//   const colors = {
//       hi: 'blue',
//       zh: 'green',
//       fr: 'yellow',
//     };

//   useEffect(() => {
//     var storedLanguage = localStorage.getItem("language");
//     if (storedLanguage === null || storedLanguage === "null") {
//       storedLanguage = "en";
//     } 
//     setLanguage(storedLanguage);
//     i18n.changeLanguage(storedLanguage);
//   }, [i18n]);

//   const userAgentString = req.headers['user-agent'];
//   const parser = new UAParser();
//   const agent = parser.setUA(userAgentString).getResult();
//   console.log(agent.device.type)

//   useEffect(() => {
//     document.body.style.backgroundColor = colors[language] || 'white';
//   }, [language]);

//   return (
//     <div className="App">
//       <Router>
//         <Container first={first} setFirst={setFirst} language={language} />
//         <Navbar language={language} setLanguage={setLanguage} />
//         <AllRoutes setFirst={setFirst} setLanguage={setLanguage} />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import Container from "./Container";

function App() {
  const [first, setFirst] = useState(true);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const { i18n } = useTranslation("global");

  const colors = {
    hi: 'blue',
    zh: 'green',
    fr: 'yellow',
  };
  

    useEffect(() => {
    var storedLanguage = localStorage.getItem("language");
    if (storedLanguage === null || storedLanguage === "null") {
      storedLanguage = "en";
    } 
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
  }, [i18n]);

  useEffect(() => {
    document.body.style.backgroundColor = colors[language] || 'white';
  }, [language]);

  return (
    <div className="App">
      <Router>
        <Container first={first} setFirst={setFirst} language={language} />
        <Navbar language={language} setLanguage={setLanguage} />
        <AllRoutes setFirst={setFirst} setLanguage={setLanguage} />
      </Router>
    </div>
  );
}

export default App;
