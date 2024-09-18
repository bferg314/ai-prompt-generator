
# AI Prompt Generator

A simple web-based tool to generate AI programming prompts. The app allows developers to fill in basic inputs such as the programming language and project details to generate an AI-ready prompt that can be used to generate boilerplate code with AI models like ChatGPT.

## Features

- Select from the top 10 programming languages.
- Input program purpose and additional project details.
- Automatically generate a detailed prompt based on user input.
- Built with Next.js, TypeScript, and Tailwind CSS for a fast and modern user experience.
- Supports basic form validation to ensure valid inputs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-prompt-generator.git
   cd ai-prompt-generator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Select a programming language from the dropdown list.
3. Enter the purpose of the program (e.g., "Build a to-do list app").
4. Optionally, add any additional project details (e.g., "Include user authentication").
5. Click **Generate Prompt** to view the AI-ready prompt based on your inputs.
6. Use the generated prompt in an AI assistant like ChatGPT to generate code.
7. Optionally, clear the form and start again by clicking the **Clear Form** button.

## Development

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Running the App

To start the development server:

```bash
npm run dev
```

### Building the App

To create a production build:

```bash
npm run build
```

### File Structure

```plaintext
.
├── public             # Public assets (favicon, etc.)
├── src
│   ├── app            # Next.js App Router structure
│   ├── components     # UI Components (if applicable)
│   └── styles         # Global styles
├── .gitignore         # Ignored files
├── package.json       # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request to merge your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
