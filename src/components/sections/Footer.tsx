import { Link } from "wouter";
import { Link as LinkIcon, Twitter, SendIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { logo } from "@/assets";

const platformLinks = [
  { text: "NFT Rewards", href: "#rewards" },
  { text: "Leaderboard", href: "#" },
  { text: "Partners", href: "#" }
];

const resourceLinks = [
  { text: "API", href: "#" },
  { text: "Developer Guide", href: "#" },
  { text: "Community Forum", href: "#" }
];



export function Footer() {
  return (
    <footer className="bg-[#0a0f1e] py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-primary text-2xl font-bold flex items-center mb-4">
            <img src={logo} alt="" className="w-[30%]" />
            </div>
            <p className="text-muted-foreground mb-6">
              Complete tasks. Earn rewards. Build your on-chain and off-chain reputation in the Web3 ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SendIcon className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           */}
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           */}

        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kwesta. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
