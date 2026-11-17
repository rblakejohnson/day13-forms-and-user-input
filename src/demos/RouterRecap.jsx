import { useState } from "react";

const RECAP_QUESTIONS = [
  {
    q: "1. What is a route parameter?",
    a: "A dynamic segment in a URL path (like /movies/:movieId) that captures a variable value so one route can render details for different items."
  },
  {
    q: "2. What does useParams() do?",
    a: "It is a React Router hook that returns an object of key/value pairs of the dynamic parameters from the current URL (e.g., const { movieId } = useParams())."
  },
  {
    q: "3. Why are nested routes useful?",
    a: "They allow parent layouts (like a shared navbar, sidebar, or movie header) to stay mounted while child sub-pages swap inside them based on the URL."
  },
  {
    q: "4. What does <Outlet /> do?",
    a: "It acts as a placeholder inside a parent route component where React Router renders the matching child route element."
  }
];

export default function RouterRecap() {
  const [revealed, setRevealed] = useState({});

  function toggleReveal(idx) {
    setRevealed((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  return (
    <div className="card">
      <h2>Part 1 — Day 12 Recap: Advanced React Router</h2>
      <p>
        Before diving into forms, review yesterday&apos;s routing concepts. Click each question to reveal the answer:
      </p>

      {RECAP_QUESTIONS.map((item, idx) => (
        <div key={idx} className="recap-item">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>{item.q}</strong>
            <button className="secondary" onClick={() => toggleReveal(idx)}>
              {revealed[idx] ? "Hide" : "Reveal"}
            </button>
          </div>
          {revealed[idx] && <p style={{ marginTop: "0.5rem", color: "#334155" }}>{item.a}</p>}
        </div>
      ))}

      <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#eff6ff", borderRadius: "8px" }}>
        <strong>Bridge to Today:</strong>
        <p style={{ margin: "0.25rem 0 0 0" }}>
          Routes help users <strong>move around</strong> your movie app (<code>/movies/:id</code>).<br />
          Forms help users <strong>send data into</strong> your movie app (search queries, watchlists, and movie reviews).
        </p>
      </div>
    </div>
  );
}
