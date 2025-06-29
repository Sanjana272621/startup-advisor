"use client";
import {useState} from 'react';

export default function Home() {

  const [userPrompt, setUserPrompt] = useState("");

  function submitPrompt(){
    console.log("prompt submitted: ", userPrompt);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-lg font-medium mb-4">Write your prompt:</div>

        <label>
          <textarea
            name="postContent"
            value = {userPrompt}
            onChange = {(e) => setUserPrompt(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded p-2 resize-none mb-4"
            placeholder="Type your startup idea here..."
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick = {submitPrompt}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
