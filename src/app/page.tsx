"use client";

import { useState } from 'react';

const HomePage = () => {
  const [language, setLanguage] = useState('');  // State for selected language
  const [purpose, setPurpose] = useState('');    // State for program purpose
  const [details, setDetails] = useState('');    // State for additional details
  const [generatedPrompt, setGeneratedPrompt] = useState('');  // State for the generated prompt
  const [error, setError] = useState('');  // State for validation error messages

  const languages = [
    'JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'Go', 'PHP', 'Swift', 'Kotlin', 'TypeScript'
  ];

  const generatePrompt = () => {
    // Simple validation to check if language and purpose are filled
    if (!language || !purpose) {
      setError('Please select a programming language and specify the program purpose.');
      return;
    }

    // Clear any previous error
    setError('');

    const prompt = `Create a ${language} program that does the following: ${purpose}. Additional details: ${details}`;
    setGeneratedPrompt(prompt);  // Set the generated prompt
  };

  const clearForm = () => {
    if (confirm('Are you sure you want to clear all inputs?')) {
      setLanguage('');
      setPurpose('');
      setDetails('');
      setGeneratedPrompt('');
      setError('');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Program Prompt Generator</h1>
      
      {/* Validation Error Message */}
      {error && (
        <div className="mb-4 text-red-500">
          {error}
        </div>
      )}

      {/* Language Dropdown */}
      <div className="mb-4">
        <label className="block text-lg font-medium">Choose a programming language:</label>
        <select
          className="border rounded p-2 w-full text-black"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select a language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Program Purpose Input */}
      <div className="mb-4">
        <label className="block text-lg font-medium">What should the program do?</label>
        <input
          type="text"
          className="border rounded p-2 w-full text-black"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="e.g., Build a to-do list app"
        />
      </div>

      {/* Additional Details Input */}
      <div className="mb-4">
        <label className="block text-lg font-medium">Additional Details (optional):</label>
        <textarea
          className="border rounded p-2 w-full text-black"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="e.g., Include user authentication, use local storage"
        />
      </div>

      {/* Generate Prompt Button */}
      <button
        className="bg-blue-500 text-white p-2 rounded mr-2"
        onClick={generatePrompt}  // Call the generatePrompt function
      >
        Generate Prompt
      </button>

      {/* Clear Form Button */}
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={clearForm}  // Call the clearForm function
      >
        Clear Form
      </button>

      {/* Display Generated Prompt */}
      {generatedPrompt && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Generated Prompt:</h2>
          <p className="border p-4 rounded bg-gray-100 text-black">{generatedPrompt}</p>  {/* Ensure prompt text is dark */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
