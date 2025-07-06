

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-accent text-foreground">
      <div className="border-1 p-2 shadow-2xl text-lg font-bold text-foreground">Header - Red Boilerplate</div>
      <nav className="border-1 p-4 shadow-2xl space-x-4">
        <a href="/" className="hover:border-2 hover: p-1 text-foreground">Home</a>
        <a href="/about" className="hover:border-2 hover:p-1 text-foreground">About</a>
        <a href="/contact" className="hover:border-2 hover:p-1 text-foreground">Contact</a>
      </nav>
    </header>
  );
}


