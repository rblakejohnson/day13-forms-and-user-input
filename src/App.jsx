import { useState } from "react";
import RouterRecap from "./demos/RouterRecap";
import ControlledVsUncontrolledDemo from "./demos/ControlledVsUncontrolledDemo";
import ValidationAndUxDemo from "./demos/ValidationAndUxDemo";
import AiFormWorkflowDemo from "./ai_demos/AiFormWorkflowDemo";
import ReviewForm from "./components/ReviewForm";
import ReviewPreview from "./components/ReviewPreview";

function App() {
  const [activeTab, setActiveTab] = useState("recap");
  const [submittedReview, setSubmittedReview] = useState(null);

  return (
    <div className="app-container">
      <header>
        <h1>Day 13: Forms &amp; User Input in React</h1>
        <p>Controlled Components, Form Submission, Validation &amp; Movie App Integration</p>
      </header>

      <nav className="nav-tabs" aria-label="Lesson Sections">
        <button
          className={activeTab === "recap" ? "active" : ""}
          onClick={() => setActiveTab("recap")}
        >
          1. Day 12 Router Recap
        </button>
        <button
          className={activeTab === "controlled" ? "active" : ""}
          onClick={() => setActiveTab("controlled")}
        >
          2. Controlled Inputs
        </button>
        <button
          className={activeTab === "validation" ? "active" : ""}
          onClick={() => setActiveTab("validation")}
        >
          3. Validation &amp; UX
        </button>
        <button
          className={activeTab === "ai" ? "active" : ""}
          onClick={() => setActiveTab("ai")}
        >
          4. AI Spec &amp; Debug
        </button>
        <button
          className={activeTab === "miniproject" ? "active" : ""}
          onClick={() => setActiveTab("miniproject")}
        >
          5. Movie Review Mini Project
        </button>
      </nav>

      <main>
        {activeTab === "recap" && <RouterRecap />}
        {activeTab === "controlled" && <ControlledVsUncontrolledDemo />}
        {activeTab === "validation" && <ValidationAndUxDemo />}
        {activeTab === "ai" && <AiFormWorkflowDemo />}
        {activeTab === "miniproject" && (
          <div className="grid-2">
            <ReviewForm setSubmittedReview={setSubmittedReview} />
            <ReviewPreview submittedReview={submittedReview} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
