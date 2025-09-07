import React, { useEffect, useMemo, useState } from 'react';

const categories = [
  { key: 'pothole', label: 'Pothole' },
  { key: 'garbage', label: 'Garbage' },
  { key: 'streetlight', label: 'Street Light' },
  { key: 'water', label: 'Water' },
  { key: 'drainage', label: 'Drainage' },
];

function routeDept(category){
  switch(category){
    case 'pothole': return 'Roads & Works';
    case 'garbage': return 'Sanitation';
    case 'streetlight': return 'Electric & Lighting';
    case 'water': return 'Water Supply';
    case 'drainage': return 'Drainage & Sewage';
    default: return 'City Services';
  }
}

export default function Prototype(){
  const [coords, setCoords] = useState();
  const [category, setCategory] = useState(categories[0].key);
  const [description, setDescription] = useState('Broken road near market causing traffic');
  const [photoName, setPhotoName] = useState('');
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        pos => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setCoords(undefined)
      );
    }
  }, []);

  const dept = useMemo(() => routeDept(category), [category]);

  const submit = () => {
    const id = `ASL-${Math.random().toString(36).slice(2,6).toUpperCase()}-${Date.now().toString().slice(-4)}`;
    setTicket({ id, category, description, coords, dept, status: 'assigned' });
  };

  return (
    <main className="min-h-[calc(100vh-9rem)] bg-gradient-to-b from-background to-background/60 flex flex-col items-center justify-center">
      <section className="container grid gap-8 py-10 md:grid-cols-2 md:gap-12">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Explore the Prototype</h1>
          <p className="mt-4 text-muted-foreground">Report a civic issue in seconds. Auto-location, AI routing to the right department, and live status tracking—everything in one place.</p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-medium">Category</label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {categories.map(c => (
                  <button key={c.key} onClick={() => setCategory(c.key)} className={`rounded-md border px-3 py-2 text-left text-sm ${category===c.key ? 'border-primary bg-primary/5' : 'hover:bg-muted/40'}`}>{c.label}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Photo</label>
              <div className="mt-2 flex items-center gap-3">
                <input type="file" accept="image/*" onChange={(e)=>setPhotoName(e.target.files?.[0]?.name ?? '')} className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90" />
                {photoName && <span className="text-xs text-muted-foreground">{photoName}</span>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea value={description} onChange={(e)=>setDescription(e.target.value)} rows={3} className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              {coords ? (
                <span>Location detected: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}</span>
              ) : (
                <span>Location access blocked. Using manual entry.</span>
              )}
            </div>

            <div className="pt-2">
              <button onClick={submit} className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground">Submit Issue</button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">AI Routing</p>
              <h3 className="text-lg font-semibold">{dept}</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-cyan-500" />
          </div>

          <div className="mt-6 grid gap-4">
            <Step active label="Created" />
            <Step active={!!ticket} label="Assigned" />
            <Step active={false} label="In Progress" />
            <Step active={false} label="Resolved" />
          </div>

          <div className="mt-6 rounded-xl border bg-muted/30 p-4 text-sm">
            <p className="font-medium">Preview</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>Category: <span className="text-foreground">{categories.find(c=>c.key===category)?.label}</span></li>
              <li>Department: <span className="text-foreground">{dept}</span></li>
              <li>Coordinates: <span className="text-foreground">{coords ? `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}` : 'N/A'}</span></li>
              <li>Photo: <span className="text-foreground">{photoName || 'Not attached'}</span></li>
            </ul>
          </div>

          {ticket && (
            <div className="mt-6 rounded-xl border bg-emerald-50/50 p-4 text-sm dark:bg-emerald-950/30">
              <p className="font-semibold text-emerald-700 dark:text-emerald-300">Ticket Created</p>
              <p className="mt-1 text-muted-foreground">Tracking ID: <span className="font-mono text-foreground">{ticket.id}</span></p>
              <p className="mt-1 text-muted-foreground">Assigned to: <span className="text-foreground">{ticket.dept}</span></p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Step({ label, active }){
  return (
    <div className="flex items-center gap-3">
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs ${active ? 'border-primary bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{active ? '✓' : ''}</span>
      <span className={`${active ? 'text-foreground' : 'text-muted-foreground'} text-sm`}>{label}</span>
    </div>
  );
}
