import React, { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // close menu on resize if wide
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 760) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // client-side forced download helper
  async function downloadResume() {
    try {
      setDownloading(true);
      // make sure path matches file in public/files
      const url = "/files/resume.pdf";

      const res = await fetch(url, {
        method: "GET",
        // include credentials only if needed: credentials: 'same-origin'
      });

      if (!res.ok)
        throw new Error(`Network error: ${res.status} ${res.statusText}`);

      const blob = await res.blob();
      // derive filename (can be hardcoded too)
      const filename = "Kunal_Prasad_Resume.pdf";

      // create temporary link to download
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      // free memory
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
      // optionally show UI feedback to user
      alert("Download failed. Try opening the resume and saving it manually.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <header className="container header">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="logo" style={{ fontSize: 18, fontWeight: 700 }}>
          Kunal Prasad
        </div>

        {/* hamburger only on small screens */}
        <button
          aria-label="Toggle navigation"
          className={`hamburger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* nav: on mobile appears as overlay drawer, on desktop inline */}
      <nav className={`nav ${open ? "open" : ""}`} aria-hidden={!open}>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#experience" onClick={() => setOpen(false)}>
          Experience
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
        <a
          href="https://github.com/coolkunal9"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        {/* View in new tab (no forced download) */}
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          onClick={() => setOpen(false)}
        >
          View Resume
        </a>

        {/* Force download (reliable) */}
        <button
          type="button"
          className="resume-btn"
          onClick={() => {
            setOpen(false);
            downloadResume();
          }}
          disabled={downloading}
          aria-disabled={downloading}
          style={{ marginLeft: 8 }}
        >
          {downloading ? "Downloading…" : "Download"}
        </button>
      </nav>
    </header>
  );
}
