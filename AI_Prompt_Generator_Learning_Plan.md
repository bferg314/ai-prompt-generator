
# AI Prompt Generator - Learning Plan

This document provides a detailed guide for adding two new features to the AI Prompt Generator project.

## Feature 1: Add a New Input Field

### Useful Ideas for New Field:
1. **Complexity Level**: Choose the complexity (beginner, intermediate, advanced) for generated code.
2. **Target Platform**: Specify the target platform (web, mobile, desktop) for the generated program.

### Learning Objectives:
- Add new form inputs in React/Next.js using `useState`.
- Implement logic to handle the new input.
- Modify the generated prompt to include the new field.

### Step-by-Step:
1. Add a new state using `useState` for the new field.
2. Update JSX to add a dropdown or input for the new field.
3. Modify the `generatePrompt` function to reflect the new input.
4. Optionally, add validation for this new field.

### Resources:
- [React Forms Handling](https://reactjs.org/docs/forms.html)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Feature 2: Copy to Clipboard Button

### Learning Objectives:
- Implement clipboard functionality using the browser's `navigator.clipboard` API.
- Add UI feedback for users when text is copied to the clipboard.

### Step-by-Step:
1. Add a "Copy to Clipboard" button next to the generated prompt.
2. Use `navigator.clipboard.writeText()` to copy the generated text.
3. Add feedback (e.g., "Copied!") after successful copy using `useState`.
4. Ensure cross-browser compatibility for the feature.

### Example Code:
```javascript
const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedPrompt)
    .then(() => alert('Copied to clipboard!'))
    .catch((err) => console.error('Failed to copy text: ', err));
};
```

### Resources:
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

---

## Learning Outcomes:
- Enhance state management in React by adding new form inputs.
- Improve UX with modern clipboard functionality.
- Add meaningful feedback for user actions (e.g., "Copy to Clipboard").
