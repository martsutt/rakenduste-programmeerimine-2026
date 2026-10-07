"use client";

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMessage() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/message");

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setError("Could not load server message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={loadMessage} disabled={loading}>
        {loading ? "Loading..." : "Load server message"}
      </button>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
