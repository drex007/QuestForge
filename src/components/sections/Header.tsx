import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "@/assets";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full bg-background">
      <nav className="flex flex-1 container mx-auto px-6 py-4  items-center justify-between">
        <div className="lg:flex-[0.3] flex items-center">
          <div className="text-primary text-2xl font-bold flex items-center">
            {/* <LinkIcon className="mr-2 text-secondary" /> */}
           <img src={logo} alt="" className="w-[30%]" />
          </div>
        </div>
        
        <div className="hidden md:flex flex-[0.7] items-center space-x-6">
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          {/* <a href="#tasks" className="hover:text-primary transition-colors">Tasks</a>
          <a href="#rewards" className="hover:text-primary transition-colors">Rewards</a> */}
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        
        <div>
          <Button asChild className="hidden md:inline-flex">
            <a href="#early-access">Get Early Access</a>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute w-full bg-background border-t border-border z-20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#tasks" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tasks
              </a>
              <a 
                href="#rewards" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Rewards
              </a>
              <a 
                href="#faq" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button asChild>
                <a 
                  href="#early-access"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Early Access
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
