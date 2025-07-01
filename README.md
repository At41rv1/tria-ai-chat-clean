# Tria AI Chat Application

A React + TypeScript + Vite application featuring an interactive chat interface with multiple AI personalities.

## Features

- **Chat Mode**: Interact with Leo and Max, two distinct AI personalities
  - Leo: Friendly and conversational
  - Max: Witty and humorous

- **Study Mode**: Learn with two AI tutors
  - Structured Tutor: Clear, organized explanations
  - Creative Tutor: Engaging, story-based learning

- **Technical Features**:
  - Built with React + TypeScript + Vite
  - Responsive design with Tailwind CSS
  - Real-time AI responses using Groq API
  - Clean and modern UI

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/At41rv1/tria-ai-chat-clean.git
   cd tria-ai-chat-clean
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure API keys:
   - Copy the example configuration file:
     ```bash
     cp src/config/api-keys.example.ts src/config/api-keys.ts
     ```
   - Edit `src/config/api-keys.ts` and replace the placeholder API keys with your actual Groq API keys:
     ```typescript
     export const API_KEYS = {
       // Chat Mode API Keys
       LEO: 'your_leo_api_key_here',
       MAX: 'your_max_api_key_here',
       
       // Study Mode API Keys
       TUTOR1: 'your_tutor1_api_key_here',
       TUTOR2: 'your_tutor2_api_key_here'
     };
     ```

## Development

Run the development server:
```bash
npm run dev
```

The server will start on http://localhost:8000 (or next available port)

## Preview

Run the preview server:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/        # Configuration files
│   ├── api-keys.example.ts  # Example API configuration
│   └── api-keys.ts          # Actual API configuration (gitignored)
├── contexts/      # React context providers
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and libraries
└── pages/         # Main application pages
    ├── Chat.tsx       # Chat mode interface
    └── StudyChat.tsx  # Study mode interface
```

## Security Note

The `api-keys.ts` file is excluded from version control for security. Never commit your API keys to the repository. Always use the example file as a template and keep your actual API keys private.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Create a pull request
4. Ensure your PR description clearly describes the changes

## License

MIT
