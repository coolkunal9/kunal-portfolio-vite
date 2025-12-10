import React from "react";
import { contactEmail } from "../config";

export default function About() {
  return (
    <section
      id="about"
      className="section fade-up"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">About Me</h2>

      <div style={{ display: "grid", gap: 12 }}>
        <article className="card small" aria-label="What I build">
          <strong>What I build:</strong>
          <ul style={{ marginTop: 8 }}>
            <li style={{ marginBottom: 6 }}>
              Maintainable MERN applications: React frontends, Node/Express
              backends, MongoDB.
            </li>
            <li style={{ marginBottom: 6 }}>
              Secure APIs with JWT, protected routes and robust error handling.
            </li>
            <li style={{ marginBottom: 6 }}>
              AI/Cloud integrations (IBM Cloud, Gemini API) for smarter
              developer tools.
            </li>
          </ul>
        </article>

        <section className="card small" aria-label="Location and contact">
          {/* Location on its own line */}
          <div style={{ marginBottom: 12 }}>
            <strong>Location:</strong>
            <div className="small" style={{ marginTop: 6 }}>
              Jaipur, Rajasthan, India
            </div>
          </div>

          {/* Contact header on its own line, then Email / Phone / Profiles on separate lines */}
          <div>
            <strong>Contact:</strong>

            <div
              style={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactEmail}
                </a>
              </div>

              <div>
                <strong>Phone:</strong> +91 9863126358
              </div>

              <div>
                <strong>Profiles:</strong>{" "}
                <a
                  href="https://linkedin.com/in/kunal-prasad-7676392bb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                ·{" "}
                <a
                  href="https://github.com/coolkunal9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
