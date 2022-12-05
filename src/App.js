import React, { useState } from "react";
import "./styles.css";

const appDb = {
  marketing: [
    { name: "Mailchimp", rating: "4/5" },
    { name: "HubSpot", rating: "4/5" },
    { name: "ActiveCampaign", rating: "3.5/5" },
    { name: "LeadConnector", rating: "3.5/5" }
  ],

  productivity: [
    { name: "Notion", rating: "5/5" },
    { name: "Trello", rating: "4.5/5" },
    { name: "Calendly", rating: "4/5" },
    { name: "Google Calender", rating: "4/5" }
  ],
  commerce: [
    { name: "Stripe", rating: "4.5/5" },
    { name: "Shopify", rating: "4/5" },
    { name: "Gumroad", rating: "4/5" },
    { name: "Kajabi", rating: "3/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("productivity");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Software Apps Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout top Software Apps. Select your favourite genre to get started{" "}
      </p>

      <div>
        {Object.keys(appDb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              border: "1px solid black",
              borderRadius: "1rem",
              padding: "1rem",
              margin: "1rem",
              fontWeight: "bold"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {appDb[selectedGenre].map((app) => (
            <li
              key={app.name}
              style={{
                listStyle: "none",
                width: "60%",
                padding: "1rem",
                margin: "auto",
                border: "1px solid black",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {app.name} </div>
              <div style={{ fontSize: "smaller" }}> {app.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
