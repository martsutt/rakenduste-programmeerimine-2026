import { useState } from "react";

function CompletionToggle() {
  const [completed, setCompleted] = useState(false);

  function handleClick() {
    setCompleted(!completed);
  }

  return (
    <button onClick={handleClick}>
      {completed ? "Completed" : "Not completed"}
    </button>
  );
}

export default CompletionToggle;
