import { useState } from "react";

export default function ValidationAndUxDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const isFormIncomplete = !name.trim() || !email.trim() || !favoriteMovie.trim();

  function handleSubmit(event) {
    // Prevent default full-page browser reload
    event.preventDefault();

    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address containing '@'.");
      return;
    }

    if (!favoriteMovie.trim()) {
      setError("Favorite movie is required.");
      return;
    }

    // Valid submission
    setError("");
    setSubmittedData({ name: name.trim(), email: email.trim(), favoriteMovie: favoriteMovie.trim() });

    // Reset controlled fields
    setName("");
    setEmail("");
    setFavoriteMovie("");
  }

  return (
    <div className="card">
      <h2>Parts 4–8 — Multi-Field Submission, Validation & UX</h2>
      <p style={{ color: "#475569" }}>
        Demonstrates <code>onSubmit</code>, <code>event.preventDefault()</code>, inline validation, button disabling, and resetting controlled fields.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ux-name">Name *</label>
          <input
            id="ux-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Jordan Lee"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ux-email">Email *</label>
          <input
            id="ux-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., jordan@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ux-movie">Favorite Movie *</label>
          <input
            id="ux-movie"
            type="text"
            value={favoriteMovie}
            onChange={(e) => setFavoriteMovie(e.target.value)}
            placeholder="e.g., Spirited Away"
          />
        </div>

        <button type="submit" className="primary" disabled={isFormIncomplete}>
          Save Profile
        </button>

        {error && <div className="error-text">{error}</div>}
      </form>

      {submittedData && (
        <div className="success-text">
          <strong>Saved!</strong> {submittedData.name} ({submittedData.email}) loves{" "}
          <em>{submittedData.favoriteMovie}</em>.
        </div>
      )}
    </div>
  );
}
