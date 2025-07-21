import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const templates = [
  {
    name: 'Blog Post',
    icon: '📝',
    content: `# My Awesome Blog Post

*Published on ${new Date().toLocaleDateString()}*

## Introduction

Welcome to this amazing blog post! Here's what we'll cover:

- Key insights and findings
- Practical examples
- **Important takeaways**

## Main Content

### Section 1: Getting Started

Let's dive into the main topic. Here's some \`inline code\` to illustrate the point.

\`\`\`javascript
const blogPost = {
  title: "My Awesome Blog Post",
  author: "Your Name",
  published: new Date()
};
\`\`\`

### Section 2: Advanced Concepts

> **Pro Tip:** This is a callout box with important information that readers should pay attention to.

## Conclusion

Thanks for reading! Don't forget to:

1. **Share** this post
2. **Subscribe** for more content
3. **Comment** below with your thoughts

---

*Follow me on [Twitter](https://twitter.com) for more updates!*`
  },
  {
    name: 'Documentation',
    icon: '📚',
    content: `# API Documentation

## Overview

This API provides access to our core services. All endpoints require authentication.

## Authentication

Include your API key in the header:

\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

## Endpoints

### GET /api/users

Retrieve a list of users.

**Parameters:**
- \`limit\` (optional): Number of users to return (default: 10)
- \`offset\` (optional): Number of users to skip (default: 0)

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 100
}
\`\`\`

### POST /api/users

Create a new user.

**Request Body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | User's full name |
| email | string | Yes | User's email address |
| role | string | No | User role (default: 'user') |

## Error Handling

All errors return a JSON object with the following structure:

\`\`\`json
{
  "error": {
    "code": 400,
    "message": "Invalid request parameters"
  }
}
\`\`\`

## Rate Limiting

- 1000 requests per hour per API key
- Rate limit headers included in response

> **Note:** Contact support if you need higher rate limits.`
  },
  {
    name: 'README',
    icon: '🚀',
    content: `# Project Name

A brief description of what your project does and who it's for.

## Features ✨

- 🚀 **Fast and lightweight** - Optimized for performance
- 🎨 **Beautiful UI** - Clean and modern design
- 📱 **Mobile responsive** - Works on all devices
- 🔧 **Easy to use** - Simple and intuitive interface

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/project-name.git

# Navigate to the project directory
cd project-name

# Install dependencies
npm install

# Start the development server
npm start
\`\`\`

## Usage

Here's how to get started:

1. **Setup your environment**
   \`\`\`bash
   cp .env.example .env
   \`\`\`

2. **Configure your settings**
   Edit the \`.env\` file with your configuration.

3. **Run the application**
   \`\`\`bash
   npm run dev
   \`\`\`

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

\`\`\`bash
# Fork the repo and clone your fork
git clone https://github.com/YOUR_USERNAME/project-name.git

# Create a new branch
git checkout -b feature/amazing-feature

# Make your changes and commit
git commit -m 'Add amazing feature'

# Push to your fork and submit a pull request
git push origin feature/amazing-feature
\`\`\`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📖 [Documentation](https://docs.example.com)
- 💬 [Discord Community](https://discord.gg/example)
- 🐛 [Report Bug](https://github.com/yourusername/project-name/issues)
- ✨ [Request Feature](https://github.com/yourusername/project-name/issues)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)`
  },
  {
    name: 'Meeting Notes',
    icon: '📋',
    content: `# Team Meeting Notes

**Date:** ${new Date().toLocaleDateString()}  
**Time:** 2:00 PM - 3:00 PM  
**Attendees:** John Doe, Jane Smith, Mike Johnson

## Agenda

1. Project status update
2. Upcoming deadlines
3. Resource allocation
4. Action items

## Discussion Points

### Project Status Update

- ✅ **Completed:** User authentication module
- 🔄 **In Progress:** Dashboard implementation
- ⏳ **Pending:** API integration testing

**Blockers:**
- Waiting for design approval on new components
- Need access to staging environment

### Upcoming Deadlines

| Task | Owner | Due Date | Status |
|------|-------|----------|---------|
| UI mockups | Jane | March 15 | ✅ Complete |
| Backend API | John | March 20 | 🔄 In Progress |
| Testing | Mike | March 25 | ⏳ Not Started |

## Action Items

- [ ] **John:** Set up staging environment by EOD
- [ ] **Jane:** Review and approve component designs
- [ ] **Mike:** Prepare test cases for API endpoints
- [ ] **All:** Update project documentation

## Next Meeting

**Date:** Next Friday at 2:00 PM  
**Agenda:** Review progress on action items, discuss deployment strategy

---

> **Note:** Please review these notes and add any missed points via email.`
  }
];

export default function TemplateSelector({ onSelectTemplate }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
      <CardContent className="p-4">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between hover:bg-slate-50"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="font-medium">Quick Start Templates</span>
          </div>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {templates.map((template) => (
                <motion.div
                  key={template.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    onClick={() => onSelectTemplate(template.content)}
                    className="w-full h-auto p-4 flex flex-col items-center gap-2 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200"
                  >
                    <span className="text-2xl">{template.icon}</span>
                    <span className="font-medium text-slate-800">{template.name}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}