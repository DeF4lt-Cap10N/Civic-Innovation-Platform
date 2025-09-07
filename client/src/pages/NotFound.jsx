import React from 'react';
export default function NotFound(){
  return (
    <div className="min-h-[80vh] grid place-items-center flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="mt-4 inline-block text-primary underline">Return to Home</a>
      </div>
    </div>
  );
}
