import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Check, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-[#1a1d42] to-[#20184a] pt-20 pb-32 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete <span className="text-primary">Tasks</span>,<br />
              Earn <span className="text-secondary">NFT Rewards</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Kwesta is a Web3 platform that rewards your engagement with unique, collectible NFTs. Learn, participate, and build your on-chain reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="#early-access">Join Early Access</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center text-muted-foreground text-sm">
              <Shield className="mr-2 h-4 w-4 text-green-500" />
              <span>100% Secure. Claim NFTs at very little cost.</span>
            </div>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative border-4 border-gray-800 bg-[#192339] rounded-xl p-6 shadow-2xl"
            >
              <div className="absolute -right-3 -top-3 bg-green-500 text-xs font-bold text-black px-2 py-1 rounded-lg">PROOF OF COMPLETION</div>
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold">Developer Quest</h3>
                  <p className="text-xs text-muted-foreground">Completed 3 of 5 tasks</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Deploy a smart contract</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Create an NFT collection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Build a dApp frontend</span>
                </div>
                <div className="flex items-center opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Integrate with a DAO</span>
                </div>
                <div className="flex items-center opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Launch on mainnet</span>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Wallet</p>
                  <p className="text-xs font-mono">0x71C...E29F</p>
                </div>
                <Button variant="secondary" size="sm">
                  View NFT
                </Button>
              </div>
            </motion.div>
          </motion.div> */}
        </div>
        
        {/* <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center">
            <svg 
              className="h-8 w-8 mr-3" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA" fillOpacity="0.2"/>
              <path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="#627EEA"/>
              <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="#627EEA"/>
              <path d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z" fill="#627EEA"/>
              <path d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z" fill="#627EEA"/>
              <path d="M16.498 20.573L23.995 16.22L16.498 12.872V20.573Z" fill="#627EEA"/>
              <path d="M9 16.22L16.498 20.573V12.872L9 16.22Z" fill="#627EEA"/>
            </svg>
            <span className="text-muted-foreground">Ethereum</span>
          </div>
          <div className="flex items-center">
            <svg 
              className="h-8 w-8 mr-3" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#8247E5" fillOpacity="0.2"/>
              <path d="M21.092 13.12L16.757 6.19C16.637 5.99 16.327 5.99 16.197 6.19L11.862 13.12C11.752 13.3 11.752 13.53 11.862 13.71L13.527 16.35C13.637 16.53 13.637 16.76 13.527 16.94L11.862 19.59C11.752 19.77 11.752 20 11.862 20.18L16.197 27.14C16.317 27.34 16.627 27.34 16.757 27.14L21.092 20.18C21.202 20 21.202 19.77 21.092 19.59L19.427 16.94C19.317 16.76 19.317 16.53 19.427 16.35L21.092 13.71C21.212 13.53 21.212 13.3 21.092 13.12Z" fill="#8247E5"/>
              <path d="M22.587 17.93L20.922 16.35C20.812 16.17 20.812 15.94 20.922 15.76L22.587 14.18C22.697 14 22.697 13.77 22.587 13.59L19.817 9.15C19.707 8.97 19.397 8.97 19.287 9.15L10.457 23.2C10.347 23.38 10.347 23.61 10.457 23.79L11.172 24.91C11.282 25.09 11.592 25.09 11.702 24.91L19.287 12.7C19.397 12.52 19.707 12.52 19.817 12.7L21.092 14.71C21.202 14.89 21.202 15.12 21.092 15.3L19.817 17.3C19.707 17.48 19.707 17.71 19.817 17.89L21.092 19.9C21.202 20.08 21.202 20.31 21.092 20.49L19.817 22.49C19.707 22.67 19.707 22.9 19.817 23.08L20.522 24.18C20.632 24.36 20.942 24.36 21.052 24.18L22.597 21.67C22.707 21.49 22.707 21.26 22.597 21.08L20.932 18.44C20.812 18.26 20.812 18.03 20.932 17.85L22.587 16.27C22.707 16.08 22.707 15.85 22.587 15.67L22.587 17.93Z" fill="#8247E5"/>
            </svg>
            <span className="text-muted-foreground">Polygon</span>
          </div>
          <div className="flex items-center">
            <svg 
              className="h-8 w-8 mr-3" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#FF0420" fillOpacity="0.2"/>
              <path d="M8.99994 19.4965V10.5035C8.99994 10.0428 9.1241 9.78743 9.55242 9.56205L15.4476 6.06206C15.7898 5.87638 16.2102 5.87638 16.5524 6.06206L22.4476 9.56205C22.8759 9.78743 23 10.0428 23 10.5035V19.4965C23 19.9572 22.8759 20.2126 22.4476 20.438L16.5524 23.9379C16.2102 24.1236 15.7898 24.1236 15.4476 23.9379L9.55242 20.438C9.1241 20.2126 8.99994 19.9572 8.99994 19.4965Z" stroke="#FF0420" strokeWidth="2"/>
              <path d="M9 10L16 15L23 10" stroke="#FF0420" strokeWidth="2"/>
              <path d="M16 24V15" stroke="#FF0420" strokeWidth="2"/>
            </svg>
            <span className="text-muted-foreground">Optimism</span>
          </div>
          <div className="flex items-center">
            <svg 
              className="h-8 w-8 mr-3" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#28A0F0" fillOpacity="0.2"/>
              <path d="M18.9059 15.0615L23.111 10.8564L18.9059 6.65128L14.7009 10.8564L10.4958 6.65128L6.29077 10.8564L10.4958 15.0615L6.29077 19.2666L10.4958 23.4717L14.7009 19.2666L18.9059 15.0615ZM14.7009 19.2666L10.4958 15.0615L14.7009 10.8564L18.9059 15.0615L14.7009 19.2666Z" fill="#28A0F0"/>
            </svg>
            <span className="text-muted-foreground">Arbitrum</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
