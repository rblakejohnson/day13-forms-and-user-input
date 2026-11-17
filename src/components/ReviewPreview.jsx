function ReviewPreview({ submittedReview }) {
  if (!submittedReview) {
    return (
      <div className="card">
        <h3>Submitted Review Preview</h3>
        <p style={{ color: "#64748b" }}>No review submitted yet. Fill out the form to see it here!</p>
      </div>
    );
  }

  return (
    <div className="card">
      <span className="badge badge-good">Review Published</span>
      <h3 style={{ marginTop: "0.5rem" }}>{submittedReview.movieTitle} ({submittedReview.rating}/5)</h3>
      <p><strong>Reviewer:</strong> {submittedReview.name} ({submittedReview.email})</p>
      <p><strong>Review:</strong> {submittedReview.review}</p>
    </div>
  );
}

export default ReviewPreview;
