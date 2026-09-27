export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nico De Castro</p>
      <p>Built with Next.js. Inspired by <a href="https://emilkowal.ski/" target="_blank" rel="noreferrer">Emil Kowalski</a> and <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a>.</p>
      <a className="favicon-credit" href="https://www.flaticon.com/free-icons/letter-n" target="_blank" rel="noreferrer">Favicon by Laisa Islam Ani / Flaticon</a>
    </footer>
  );
}
