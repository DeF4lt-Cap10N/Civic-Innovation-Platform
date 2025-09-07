import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/pexels-charlesdeluvio-1851164.jpg"
import img2 from "../assets/pexels-ekamelev-1101196.jpg"
import img3 from "../assets/pexels-george-desipris-792381.jpg"
import img4 from "../assets/pexels-pixabay-162140.jpg"
import img5 from "../assets/pexels-pixabay-62289.jpg"
import img6 from "../assets/pexels-pixabay-45201.jpg"

export default function Index(){
  return (
    <main className="min-h-screen bg-gradient-to-b from-[hsl(var(--background))] to-background flex flex-col items-center justify-center">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="container grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Smart India Hackathon · Civic Tech</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">A Better Asansol Starts With Your Voice</h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">Nagar Suvidha empowers citizens to report issues, track progress in real time, and help the city route problems to the right team with AI—fast, transparent, and accountable.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/prototype" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-primary-foreground">View Live Prototype</Link>
              <a href="#how" className="text-sm text-muted-foreground underline-offset-4 hover:underline">See how it works</a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-[520px] w-[300px] rounded-[2rem] border bg-card shadow-xl sm:w-[340px]">
              <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-muted" />
              <div className="mt-4 px-4">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 p-3">
                  <div className="rounded-lg border bg-background p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-muted-foreground">Report Issue</p>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">AI</span>
                    </div>
                    <div className="mt-3 grid gap-2">
                      <div className="h-24 rounded-md border bg-muted/40" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-md border px-2 py-1 text-center text-[10px]">Pothole</div>
                        <div className="rounded-md border px-2 py-1 text-center text-[10px]">Garbage</div>
                        <div className="rounded-md border px-2 py-1 text-center text-[10px]">Lighting</div>
                      </div>
                      <div className="h-16 rounded-md border bg-muted/40" />
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                        <span>Location detected</span>
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="mt-1 grid grid-cols-2 gap-2">
                        <div className="rounded-md bg-primary px-3 py-2 text-center text-[10px] font-medium text-primary-foreground">Submit</div>
                        <div className="rounded-md border px-3 py-2 text-center text-[10px]">Preview</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-12 -top-8 hidden h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl md:block" />
          </div>
        </div>
      </section>

      <section id="problem" className="container py-16">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">The Problem</h2>
            <p className="mt-4 text-muted-foreground">Citizens face daily frustrations—potholes, garbage overflow, broken streetlights. Reporting is tedious, tracking is opaque, and resolutions are slow.</p>
          </div>
          <ul className="grid gap-4 text-sm text-muted-foreground">
            <li className="rounded-xl border bg-card p-4">Manual reporting via phone/email with no acknowledgement</li>
            <li className="rounded-xl border bg-card p-4">No single place to see status or who is responsible</li>
            <li className="rounded-xl border bg-card p-4">Lack of data for city officials to prioritize effectively</li>
          </ul>
        </div>
      </section>

      <section id="solution" className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Solution: Nagar Suvidha</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6"><p className="text-sm font-semibold">Easy Reporting</p><p className="mt-2 text-sm text-muted-foreground">Snap a photo, auto-capture location, and submit in seconds.</p></div>
            <div className="rounded-xl border bg-card p-6"><p className="text-sm font-semibold">AI-Powered Routing</p><p className="mt-2 text-sm text-muted-foreground">Automatically assigns to the correct department for faster resolution.</p></div>
            <div className="rounded-xl border bg-card p-6"><p className="text-sm font-semibold">Transparent Tracking</p><p className="mt-2 text-sm text-muted-foreground">Follow progress with real-time updates until it’s resolved.</p></div>
          </div>
        </div>
      </section>

      <section id="how" className="container py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">How It Works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6"><div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</div><p className="font-semibold">Snap & Send</p><p className="mt-2 text-sm text-muted-foreground">Take a photo; location is captured automatically.</p></div>
          <div className="rounded-2xl border bg-card p-6"><div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</div><p className="font-semibold">AI Routing</p><p className="mt-2 text-sm text-muted-foreground">Assigned to the right department instantly.</p></div>
          <div className="rounded-2xl border bg-card p-6"><div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</div><p className="font-semibold">Track & Resolve</p><p className="mt-2 text-sm text-muted-foreground">Get real-time updates until the issue is closed.</p></div>
        </div>
      </section>

      <section id="features" className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6"><p className="font-semibold">Public Status Feed</p><p className="mt-2 text-sm text-muted-foreground">Transparent, real-time issue updates accessible to all citizens.</p></div>
            <div className="rounded-2xl border bg-card p-6"><p className="font-semibold">Governance Insights</p><p className="mt-2 text-sm text-muted-foreground">Dashboards help officials allocate budgets and teams effectively.</p></div>
            <div className="rounded-2xl border bg-card p-6"><p className="font-semibold">Citizen Rewards</p><p className="mt-2 text-sm text-muted-foreground">Earn points for engagement and responsible reporting.</p></div>
          </div>
        </div>
      </section>

      <section id="prototype" className="container py-16">
        <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-cyan-500/10 p-8 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div><h3 className="text-2xl font-bold">Try the Interactive Prototype</h3><p className="mt-2 text-muted-foreground">Experience the flow end-to-end—report a sample issue and see AI routing in action.</p></div>
            <div className="md:text-right">
              <Link to="/prototype" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-primary-foreground shadow-lg">Launch the Prototype</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-gradient-to-b from-background to-background/60 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold sm:text-3xl">Meet the Team</h2>
          <p className="mt-2 text-muted-foreground">We are Civic Coders—a student team building community-first technology.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <TeamCard url={img3} name="Rahul Kumar" role="Team Lead · Full-Stack" />
            <TeamCard url={img6} name="Kaushal Kumar" role="Product · Research" />
            <TeamCard url={img1} name="Raj Vir singh" role="UI · Frontend" />
            <TeamCard url={img4} name="Saket Kumar" role="AI/ML · Data" />
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamCard({url, name, role }){
  return (
    <div className="rounded-2xl border bg-card p-6 text-center flex flex-col items-center justify-center">
      <div className="" >
        <img src={url} alt="image" className='rounded-full h-24 w-24'/>
      </div>
      <p className="mt-4 font-semibold">{name}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
}
