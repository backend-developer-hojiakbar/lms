import React from 'react';

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const renderContent = () => {
        if (!text) return '';
        let content = text.trim();
        
        content = content
            .replace(/^### (.*$)/gim, '<h4 class="text-lg font-heading font-semibold text-dark-gray mt-4 mb-2">$1</h4>')
            .replace(/^## (.*$)/gim, '<h3 class="text-xl font-heading font-bold text-dark-gray mt-6 mb-3">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
        const lines = content.split('\n');
        let inList = false;
        const processedLines = lines.map(line => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
                const listItem = `<li class="flex items-start mb-2"><svg class="w-5 h-5 text-primary-green mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${line.substring(2)}</span></li>`;
                if (!inList) {
                    inList = true;
                    return `<ul class="list-none p-0 mt-4">${listItem}`;
                }
                return listItem;
            } else {
                if (inList) {
                    inList = false;
                    return `</ul>${line ? `<p class="mb-4">${line}</p>` : ''}`;
                }
                // Avoid wrapping headings in <p> tags
                if (line.startsWith('<h')) {
                    return line;
                }
                return line ? `<p class="mb-4">${line}</p>` : '';
            }
        });

        if (inList) {
            processedLines.push('</ul>');
        }

        // This regex ensures that we don't have empty paragraphs between block elements like lists and headings
        return processedLines.join('').replace(/<\/p><p>/g, '</p><p>').replace(/<p><\/p>/g, '');
    };
    
    return <div className="prose max-w-none text-medium-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: renderContent() }} />;
};

export default SimpleMarkdown;
