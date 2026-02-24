const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">MAISON</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Curating timeless pieces that celebrate craftsmanship and enduring style since 2020.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/60">Shop</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Clothing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/60">Company</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/60">Support</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/50 tracking-wider">
            © 2026 MAISON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
