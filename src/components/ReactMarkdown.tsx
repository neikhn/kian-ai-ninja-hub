import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ReactMarkdownProps {
  children: string;
}

const ReactMarkdown: React.FC<ReactMarkdownProps> = ({ children }) => {
  return (
    <Markdown remarkPlugins={[remarkGfm]}>
      {children}
    </Markdown>
  );
};

export default ReactMarkdown;