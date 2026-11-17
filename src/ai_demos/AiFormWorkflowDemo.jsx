import { useState } from "react";

const SAMPLE_BUGGY_CODE = `function BrokenForm() {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    alert("Submitted: " + title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} placeholder="Movie title" />
      <button>Save</button>
    </form>
  );
}`;

const AI_DIAGNOSIS = [
  {
    bug: "Missing onChange handler on <input value={title} />",
    explanation:
      "Because 'value' is locked to state without an 'onChange' updater, typing in the box does nothing—the input is frozen at an empty string."
  },
  {
    bug: "Missing event.preventDefault() in handleSubmit",
    explanation:
      "When the form submits, the browser triggers a full page refresh, wiping out all React state."
  },
  {
    bug: "Missing explicit type='submit' on <button>",
    explanation:
      "While buttons inside <form> default to submit, explicitly writing type='submit' prevents accidental submissions if additional buttons (like 'Clear') are added later."
  }
];

const SPEC_PROMPT = `Act as a senior React engineer. I am building a Movie Review Form inside my existing React Router movie app (/movies/:movieId/review).
Help me design:
1. The minimal state variables needed (controlled inputs + validation error).
2. Edge-case validation rules (whitespace-only strings, rating bounds 1-5, review length >= 10).
3. A clean component split between ReviewForm and ReviewPreview.`;

export default function AiFormWorkflowDemo() {
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyPrompt() {
    navigator.clipboard?.writeText(SPEC_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="card">
      <h2>AI Workflow — Spec Planning & Form Debugging</h2>
      <p style={{ color: "#475569" }}>
        Use AI as a thought partner to catch subtle controlled-input bugs and generate edge-case test checklists.
      </p>

      <h3>1. Plan & Spec Prompt (Copy & Try)</h3>
      <pre>{SPEC_PROMPT}</pre>
      <button className="primary" onClick={copyPrompt}>
        {copied ? "Copied to Clipboard!" : "Copy Spec Prompt"}
      </button>

      <hr style={{ margin: "1.5rem 0", borderColor: "#e2e8f0" }} />

      <h3>2. AI Bug Audit Challenge: Spot 3 Form Bugs</h3>
      <p style={{ fontSize: "0.9rem" }}>
        Ask students to identify all 3 bugs before clicking <strong>Run AI Code Audit</strong>:
      </p>
      <pre>{SAMPLE_BUGGY_CODE}</pre>

      <button className="primary" onClick={() => setShowDiagnosis(!showDiagnosis)}>
        {showDiagnosis ? "Hide AI Audit" : "Run AI Code Audit"}
      </button>

      {showDiagnosis && (
        <div style={{ marginTop: "1rem" }}>
          {AI_DIAGNOSIS.map((item, i) => (
            <div key={i} className="error-text" style={{ color: "#1e293b", background: "#f8fafc", borderColor: "#cbd5e1" }}>
              <strong>Bug #{i + 1}: {item.bug}</strong>
              <p style={{ margin: "0.35rem 0 0 0" }}>{item.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
