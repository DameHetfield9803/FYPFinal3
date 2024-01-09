import { useState } from "react";
import "./ManagerFeedback.css";

export default function ManagerFeedback() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const feedback = formData.get("comments");
    const employeeId = 1; // Replace this with the actual employee ID

    try {
      const response = await fetch(
        "http://localhost:8081/submitManagerFeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback, employeeId }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setIsError(true);
    }
  };

  return (
    <div>
      {/* Your form code */}
      <form name="feedback_form" id="feedback_form" onSubmit={handleSubmit}>
        {/* ... (your form fields) ... */}

        <div className="mb-4">
          <label className="form-label" htmlFor="feedback_comments">
            <h5>Supervisor Feedback to Employees:</h5>
          </label>
          <textarea
            className="form-control"
            required
            rows="6"
            name="comments"
            id="feedback_comments"
          ></textarea>
        </div>

        {/* Show success/error messages */}
        {isSubmitted && (
          <div className="alert alert-success mt-3">
            <strong>Success!</strong> Feedback submitted successfully.
          </div>
        )}

        {isError && (
          <div className="alert alert-danger mt-3">
            <strong>Error!</strong> Failed to submit feedback. Please try again.
          </div>
        )}

        {/* Submit button */}
        <button type="submit" className="btn btn-primary d-block mx-auto mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}
