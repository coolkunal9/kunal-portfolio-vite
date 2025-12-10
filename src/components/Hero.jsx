import React from "react";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <section className="section hero fade-up" aria-labelledby="hero-heading">
      <div className="hero-left">
        {/* Single main heading */}
        <h1 id="hero-heading" style={{ margin: "0 0 8px 0" }}>
          Kunal Prasad
        </h1>

        <div className="small" style={{ fontWeight: 600 }}>
          Full Stack Developer | MERN Stack | IT Engineer
        </div>

        {/* first-person / present-continuous value statement */}
        <p className="small" style={{ marginTop: 12, maxWidth: 720 }}>
          I build clean, scalable MERN apps with a focus on performance and
          usability — REST APIs, secure auth, and AI integrations.
        </p>

        <ul style={{ marginTop: 12, paddingLeft: 18 }}>
          <li style={{ marginBottom: 6 }}>
            I build production-ready React & Node/Express apps with JWT-based
            security.
          </li>
          <li style={{ marginBottom: 6 }}>
            I integrate cloud & AI APIs (IBM Cloud, Gemini) to enhance product
            capabilities.
          </li>
          <li style={{ marginBottom: 6 }}>
            I ship fast via CI-friendly structure and clear documentation —
            team-oriented.
          </li>
        </ul>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            className="resume-btn"
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a className="cta" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <img className="avatar" src={avatar} alt="Kunal Prasad portrait" />
      </div>
    </section>
  );
}
