import { useState } from "react";

function ReviewForm({ setSubmittedReview }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !movieTitle.trim() || !rating || !review.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (Number(rating) < 1 || Number(rating) > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    if (review.trim().length < 10) {
      setError("Review must be at least 10 characters long.");
      return;
    }

    const newReview = {
      name: name.trim(),
      email: email.trim(),
      movieTitle: movieTitle.trim(),
      rating,
      review: review.trim(),
    };

    setSubmittedReview(newReview);
    setError("");

    // Reset form fields after successful submission
    setName("");
    setEmail("");
    setMovieTitle("");
    setRating("");
    setReview("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Write a Movie Review</h3>

      <div className="form-group">
        <label htmlFor="reviewer-name">Name</label>
        <input
          id="reviewer-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="reviewer-email">Email</label>
        <input
          id="reviewer-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="movie-title">Movie Title</label>
        <input
          id="movie-title"
          type="text"
          placeholder="e.g., Dune: Part Two"
          value={movieTitle}
          onChange={(event) => setMovieTitle(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="movie-rating">Rating (1–5)</label>
        <input
          id="movie-rating"
          type="number"
          min="1"
          max="5"
          placeholder="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="movie-review">Review (min 10 chars)</label>
        <textarea
          id="movie-review"
          rows="4"
          placeholder="Share your thoughts on the film..."
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>

      <button type="submit" className="primary">
        Submit Review
      </button>

      {error && <p className="error-text">{error}</p>}
    </form>
  );
}

export default ReviewForm;
