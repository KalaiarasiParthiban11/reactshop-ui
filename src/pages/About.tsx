import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <main className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="font-display text-3xl lg:text-5xl font-semibold text-foreground mb-6">
            About MAISON
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Founded in 2020, MAISON was born from a desire to create timeless pieces 
            that celebrate the art of craftsmanship. We believe in quality over quantity, 
            working with skilled artisans and sustainable materials to deliver products 
            that stand the test of time.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Every item in our collection is thoughtfully designed and ethically made. 
            From sourcing the finest Italian leathers to hand-finishing each detail, 
            we pour intention into every step of the process.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our mission is simple: to offer modern individuals a curated wardrobe 
            of enduring essentials — pieces you'll reach for again and again.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
