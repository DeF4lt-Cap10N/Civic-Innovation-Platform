import React from 'react';
export default function Footer(){
  return (
    <footer className="border-t bg-background/60 flex flex-col items-center justify-center">
      <div className="container py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>© 2025 Civic Coders · Smart India Hackathon Project</p>
          <p className="text-xs">Built with care for Asansol. A Better Asansol Starts With Your Voice.</p>
        </div>
      </div>
    </footer>
  );
}
