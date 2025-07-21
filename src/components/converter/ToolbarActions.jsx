import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Copy, 
  Eye, 
  Code2, 
  Monitor,
  Check,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ToolbarActions({ 
  activePanel, 
  setActivePanel, 
  onExportHtml, 
  onCopyHtml, 
  copiedHtml,
  wordCount 
}) {
  const panelButtons = [
    { id: 'split', label: 'Split View', icon: Monitor },
    { id: 'editor', label: 'Editor', icon: Code2 },
    { id: 'preview', label: 'Preview', icon: Eye },
  ];

  return (
    <Card className="mb-6 shadow-lg border-0 bg-white/90 backdrop-blur">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600 mr-2">View:</span>
            <div className="flex bg-slate-100 rounded-lg p-1">
              {panelButtons.map((panel) => (
                <Button
                  key={panel.id}
                  variant={activePanel === panel.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActivePanel(panel.id)}
                  className={`flex items-center gap-2 transition-all duration-200 ${
                    activePanel === panel.id 
                      ? 'bg-slate-800 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <panel.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{panel.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Actions and Stats */}
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="hidden sm:flex items-center gap-2">
              <FileText className="w-3 h-3" />
              {wordCount} words
            </Badge>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onCopyHtml}
                className="flex items-center gap-2 hover:bg-emerald-50 hover:border-emerald-300"
              >
                {copiedHtml ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="hidden sm:inline text-emerald-600">Copied!</span>
                  </motion.div>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy HTML</span>
                  </>
                )}
              </Button>
              
              <Button
                onClick={onExportHtml}
                size="sm"
                className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export HTML</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}