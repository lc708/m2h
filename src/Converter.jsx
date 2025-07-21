
import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Download, 
  Copy, 
  FileText, 
  Eye, 
  Code2, 
  Sparkles,
  Check 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

import ToolbarActions from './components/converter/ToolbarActions';
import TemplateSelector from './components/converter/TemplateSelector';
import PreviewPanel from './components/converter/PreviewPanel';

const initialMarkdown = `# Welcome to M2H - Markdown to HTML ✨

Transform your **Markdown** into beautiful HTML instantly.

## Features

- 🚀 **Real-time preview** - See changes as you type
- 📝 **Full Markdown support** - All syntax elements supported
- 💾 **Export options** - Download HTML or copy to clipboard
- 📱 **Mobile friendly** - Works perfectly on all devices

### Code Example

\`\`\`javascript
function convertMarkdown(text) {
  return markdownToHtml(text);
}
\`\`\`

### Lists and Links

1. **Ordered lists** work great
2. Check out [Google](https://google.com)
3. And much more!

- Unordered lists too
- With *italic* and **bold** text
- Plus \`inline code\`

> **Tip:** Try the sample templates below to get started quickly!

---

Ready to convert your Markdown? Start editing! 🎉`;

export default function Converter() {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [activePanel, setActivePanel] = useState('split'); // 'editor', 'preview', 'split'
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const words = markdown.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(words);
  }, [markdown]);

  const handleMarkdownChange = (value) => {
    setMarkdown(value);
  };

  const convertToHtml = useCallback(() => {
    // Create a temporary div to render markdown as HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = markdown; // This is simplified - React Markdown handles the actual conversion
    return tempDiv.innerHTML;
  }, [markdown]);

  const exportAsHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converted Document</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 2rem;
            color: #334155; /* slate-700 */
        }
        h1, h2, h3, h4, h5, h6 { 
            color: #0f172a; /* slate-900 */
            margin-top: 1.5em; 
            margin-bottom: 0.8em; 
            font-weight: 600;
        }
        h1 { font-size: 2.25em; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3em; }
        h2 { font-size: 1.75em; }
        h3 { font-size: 1.25em; }
        p {
            margin: 1em 0;
        }
        a {
            color: #10b981; /* emerald-600 */
            text-decoration: none;
            font-weight: 500;
        }
        a:hover {
            text-decoration: underline;
        }
        ul, ol {
            padding-left: 1.5rem;
            margin: 1em 0;
        }
        li {
            margin: 0.25em 0;
        }
        code { 
            background-color: #f1f5f9; /* slate-100 */
            color: #475569; /* slate-600 */
            padding: 0.2em 0.4em; 
            margin: 0;
            font-size: 85%;
            border-radius: 0.25rem;
            font-family: 'Monaco', 'Consolas', monospace;
        }
        pre { 
            background-color: #0f172a; /* slate-900 */
            color: #e2e8f0; /* slate-200 */
            padding: 1rem; 
            border-radius: 0.5rem; 
            overflow-x: auto;
            font-size: 85%;
        }
        pre code {
            background-color: transparent;
            color: inherit;
            padding: 0;
            font-size: inherit;
        }
        blockquote { 
            border-left: 4px solid #10b981; 
            margin: 1.5em 0; 
            padding: 0.5em 1em; 
            color: #475569; /* slate-600 */
            background-color: #ecfdf5; /* emerald-50 */
        }
        table { 
            border-collapse: collapse; 
            width: 100%; 
            margin: 1.5em 0;
        }
        th, td { 
            border: 1px solid #e2e8f0; /* slate-200 */
            padding: 0.75rem; 
            text-align: left;
        }
        th { 
            background: #f8fafc; /* slate-50 */
            font-weight: 600;
        }
        hr {
            border: 0;
            border-top: 1px solid #e2e8f0;
            margin: 2em 0;
        }
    </style>
</head>
<body>
${document.querySelector('#preview-content').innerHTML}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted-document.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyHtmlToClipboard = async () => {
    const htmlContent = document.querySelector('#preview-content').innerHTML;
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2000);
    } catch (err) {
      console.error('Failed to copy HTML:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              M2H - Markdown to HTML
            </h1>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Professional Markdown to HTML converter with live preview and export options
          </p>
        </motion.div>

        {/* Toolbar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ToolbarActions 
            activePanel={activePanel}
            setActivePanel={setActivePanel}
            onExportHtml={exportAsHtml}
            onCopyHtml={copyHtmlToClipboard}
            copiedHtml={copiedHtml}
            wordCount={wordCount}
          />
        </motion.div>

        {/* Template Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <TemplateSelector onSelectTemplate={setMarkdown} />
        </motion.div>

        {/* Main Editor Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-6 min-h-[600px]"
        >
          {/* Editor Panel */}
          <AnimatePresence>
            {(activePanel === 'editor' || activePanel === 'split') && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={activePanel === 'split' ? 'lg:block' : 'col-span-full'}
              >
                <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-slate-800">
                        <Code2 className="w-5 h-5 text-emerald-600" />
                        Markdown Editor
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {wordCount} words
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 h-full">
                    <Textarea
                      value={markdown}
                      onChange={(e) => handleMarkdownChange(e.target.value)}
                      className="min-h-[500px] font-mono text-sm border-0 resize-none focus:ring-0 bg-transparent"
                      placeholder="Start typing your Markdown here..."
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Preview Panel */}
          <AnimatePresence>
            {(activePanel === 'preview' || activePanel === 'split') && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={activePanel === 'split' ? 'lg:block' : 'col-span-full'}
              >
                <PreviewPanel markdown={markdown} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-slate-200"
        >
          <p className="text-slate-500 text-sm">
            Built with ❤️ using React and Markdown. Perfect for documentation, blogs, and notes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
