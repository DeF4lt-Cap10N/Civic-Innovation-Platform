import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/ChatGPT Image Sep 7, 2025, 10_40_01 PM.png"

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const isHome = pathname === '/';
  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur ${scrolled ? 'border-border/80' : 'border-transparent'}  border-grey flex flex-col items-center justify-center`}>
      <div className="container flex h-16 items-center justify-between mt-2 mb-2">
        <Link to="/" className="flex items-center gap-2">
           <div className=''>
             <img src={logo} alt="image" className='rounded-full h-16 w-16 p-2'/>
          </div>
          <span className="text-base font-bold tracking-tight">Nagar Suvidha</span>
        </Link>
        {isHome && (
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground">Problem</a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground">Solution</a>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground">Team</a>
          </nav>
        )}
        <Link to="/prototype" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90">Report</Link>
      </div>
    </header>
  );
}
