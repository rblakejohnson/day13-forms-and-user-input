import { useState, useRef } from "react";

export default function ControlledVsUncontrolledDemo() {
  // Controlled State
  const [controlledName, setControlledName] = useState("");
  const maxLength = 25;

  // Uncontrolled Ref (Anti-pattern for reactive validation)
  const uncontrolledRef = useRef(null);
  const [uncontrolledSnapshot, setUncontrolledSnapshot] = useState("");

  return (
    <div className="grid-2">
      {/* Good Pattern */}
      <div className="card">
        <span className="badge badge-good">Standard React Pattern</span>
        <h3>Controlled Input (Single Source of Truth)</h3>
        <p style={{ fontSize: "0.9rem", color: "#475569" }}>
          React state owns the value. Every keystroke fires <code>onChange</code>, updates state, and re-renders.
        </p>

        <div className="form-group">
          <label htmlFor="controlled-name">Reviewer Name</label>
          <input
            id="controlled-name"
            type="text"
            value={controlledName}
            onChange={(e) => setControlledName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <button
          className="secondary"
          style={{ marginLeft: 0 }}
          onClick={() => setControlledName("")}
          disabled={!controlledName}
        >
          Clear
        </button>

        <p style={{ marginTop: "1rem" }}>
          <strong>Live Preview:</strong> Hello, {controlledName || "Guest"}!
        </p>
        <p style={{ fontSize: "0.85rem", color: controlledName.length > maxLength ? "#dc2626" : "#64748b" }}>
          Characters: {controlledName.length} / {maxLength}
          {controlledName.length > maxLength && " — Too long!"}
        </p>
      </div>

      {/* Uncontrolled Comparison */}
      <div className="card">
        <span className="badge badge-bad">DOM-Driven / Limited UX</span>
        <h3>Uncontrolled Input (DOM Owns Value)</h3>
        <p style={{ fontSize: "0.9rem", color: "#475569" }}>
          Without <code>value</code> + <code>onChange</code>, React has no idea what the user is typing until a button is clicked.
        </p>

        <div className="form-group">
          <label htmlFor="uncontrolled-name">Uncontrolled Input</label>
          <input
            id="uncontrolled-name"
            type="text"
            ref={uncontrolledRef}
            placeholder="Type here..."
          />
        </div>

        <button
          className="primary"
          onClick={() => setUncontrolledSnapshot(uncontrolledRef.current?.value || "")}
        >
          Read DOM Value
        </button>

        <p style={{ marginTop: "1rem" }}>
          <strong>Snapshot on Click:</strong> {uncontrolledSnapshot || "(Nothing read yet)"}
        </p>
        <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
          Notice: No live character count, no instant validation, and harder to reset cleanly.
        </p>
      </div>
    </div>
  );
}
