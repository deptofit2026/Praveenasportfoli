const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">S.P. Praveena</p>
          <p className="text-sm text-primary-foreground/80">
            Computer Science Engineer | Data Mining Specialist
          </p>
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
