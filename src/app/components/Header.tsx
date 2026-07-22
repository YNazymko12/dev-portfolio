import Link from 'next/link';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const locales = ['EN', 'DE', 'UA'];

export default function Header() {
  return (
    <header className="border-foreground/10 bg-background/90 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="font-display text-foreground text-xl font-bold"
        >
          YN
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-accent text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="bg-chip-bg flex gap-1 rounded-full p-1">
          {locales.map((locale, i) => (
            <button
              key={locale}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${i === 0 ? 'bg-background text-foreground' : 'text-foreground-muted hover:text-foreground-muted'}`}
            >
              {locale}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
