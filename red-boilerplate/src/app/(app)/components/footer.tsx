
export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-accent text-white">
      <div className="border-1 p-3 shadow-2xl text-sm text-accent-foreground">© {new Date().getFullYear()} Red Boilerplate</div>
      <nav className="space-x-4 border-1 p-4 shadow-2xl">
       <a href="/about" className="hover:border-2 hover:p-1 text-foreground text-accent-foreground">Privacy Policy</a>
        <a href="/contact" className="hover:border-2 hover:p-1 text-foreground shadow-accent-foreground text-accent-foreground">Terms of Service</a>
      </nav>
    </footer>
  );
}