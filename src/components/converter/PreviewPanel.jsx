import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function PreviewPanel({ markdown }) {
  return (
    <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <Eye className="w-5 h-5 text-emerald-600" />
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 h-full">
        <div 
          id="preview-content"
          className="min-h-[500px] overflow-auto markdown-content"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            lineHeight: '1.6',
            color: '#334155'
          }}
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 style={{ 
                  fontSize: '2.25em', 
                  fontWeight: '600', 
                  marginTop: '1.5em', 
                  marginBottom: '0.8em',
                  color: '#0f172a',
                  borderBottom: '1px solid #e2e8f0',
                  paddingBottom: '0.3em'
                }}>{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 style={{ 
                  fontSize: '1.75em', 
                  fontWeight: '600', 
                  marginTop: '1.5em', 
                  marginBottom: '0.8em',
                  color: '#0f172a'
                }}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ 
                  fontSize: '1.25em', 
                  fontWeight: '600', 
                  marginTop: '1.5em', 
                  marginBottom: '0.8em',
                  color: '#0f172a'
                }}>{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 style={{ 
                  fontSize: '1.1em', 
                  fontWeight: '600', 
                  marginTop: '1.5em', 
                  marginBottom: '0.8em',
                  color: '#0f172a'
                }}>{children}</h4>
              ),
              h5: ({ children }) => (
                <h5 style={{ 
                  fontSize: '1em', 
                  fontWeight: '600', 
                  marginTop: '1.5em', 
                  marginBottom: '0.8em',
                  color: '#0f172a'
                }}>{children}</h5>
              ),
              h6: ({ children }) => (
                <h6 style={{ 
                  fontSize: '0.9em', 
                  fontWeight: '600', 
                  marginTop: '1.5em', 
                  marginBottom: '0.8em',
                  color: '#0f172a'
                }}>{children}</h6>
              ),
              p: ({ children }) => (
                <p style={{ margin: '1em 0' }}>{children}</p>
              ),
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  style={{ 
                    color: '#10b981', 
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul style={{ 
                  paddingLeft: '1.5rem', 
                  margin: '1em 0',
                  listStyleType: 'disc'
                }}>{children}</ul>
              ),
              ol: ({ children }) => (
                <ol style={{ 
                  paddingLeft: '1.5rem', 
                  margin: '1em 0',
                  listStyleType: 'decimal'
                }}>{children}</ol>
              ),
              li: ({ children }) => (
                <li style={{ margin: '0.25em 0' }}>{children}</li>
              ),
              table: ({ children }) => (
                <table style={{ 
                  borderCollapse: 'collapse', 
                  width: '100%', 
                  margin: '1.5em 0',
                  border: '1px solid #e2e8f0'
                }}>{children}</table>
              ),
              thead: ({ children }) => (
                <thead>{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody>{children}</tbody>
              ),
              tr: ({ children }) => (
                <tr>{children}</tr>
              ),
              th: ({ children }) => (
                <th style={{ 
                  border: '1px solid #e2e8f0',
                  padding: '0.75rem',
                  textAlign: 'left',
                  backgroundColor: '#f8fafc',
                  fontWeight: '600'
                }}>{children}</th>
              ),
              td: ({ children }) => (
                <td style={{ 
                  border: '1px solid #e2e8f0',
                  padding: '0.75rem',
                  textAlign: 'left'
                }}>{children}</td>
              ),
              blockquote: ({ children }) => (
                <blockquote style={{ 
                  borderLeft: '4px solid #10b981',
                  margin: '1.5em 0',
                  padding: '0.5em 1em',
                  color: '#475569',
                  backgroundColor: '#ecfdf5',
                  borderRadius: '0 0.25rem 0.25rem 0'
                }}>{children}</blockquote>
              ),
              hr: () => (
                <hr style={{ 
                  border: '0',
                  borderTop: '1px solid #e2e8f0',
                  margin: '2em 0'
                }} />
              ),
              strong: ({ children }) => (
                <strong style={{ fontWeight: '600', color: '#0f172a' }}>{children}</strong>
              ),
              em: ({ children }) => (
                <em style={{ fontStyle: 'italic' }}>{children}</em>
              ),
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <pre style={{
                    backgroundColor: '#0f172a',
                    color: '#e2e8f0',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    overflowX: 'auto',
                    fontSize: '0.85em',
                    margin: '1.5em 0'
                  }}>
                    <code style={{
                      backgroundColor: 'transparent',
                      color: 'inherit',
                      padding: '0',
                      fontSize: 'inherit',
                      fontFamily: 'Monaco, Consolas, monospace'
                    }} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code 
                    style={{
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      padding: '0.2em 0.4em',
                      margin: '0',
                      fontSize: '0.85em',
                      borderRadius: '0.25rem',
                      fontFamily: 'Monaco, Consolas, monospace'
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}