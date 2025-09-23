import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto container-padding py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-2 items-center" style={{ alignItems: "center", textAlign: "center" }}>
          <div className="text-sm text-muted-foreground items-center">
            <p className="font-medium text-foreground">DACH Dialog</p>
          </div>
          <div className="flex md:justify-end gap-4 text-sm items-center" style={{ alignItems: "center", textAlign: "center", justifyContent: "center" }}>
            <Link to="/impressum" className="hover:underline">Impressum</Link>
            <Link to="/datenschutz" className="hover:underline">Datenschutz</Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-muted-foreground" style={{ alignItems: "center", textAlign: "center" }}>
          © {year} DACH Dialog. Alle Rechte vorbehalten.<br></br>
          <a href="https://future-now.studio" className="hover:underline">Webentwicklung by Future-Now Studio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


