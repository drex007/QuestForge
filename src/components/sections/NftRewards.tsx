import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const nftRewards = [
  {
    title: "Smart Contract Master",
    category: "Developer Quest",
    rarity: "Uncommon",
    rarityColor: "bg-primary/20 text-primary",
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "DAO Participant",
    category: "Community Quest",
    rarity: "Common",
    rarityColor: "bg-secondary/20 text-secondary",
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "DeFi Explorer",
    category: "DeFi Quest",
    rarity: "Rare",
    rarityColor: "bg-green-500/20 text-green-500",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "NFT Collector",
    category: "NFT Explorer Quest",
    rarity: "Uncommon",
    rarityColor: "bg-purple-500/20 text-purple-500",
    image: "https://images.unsplash.com/photo-1645171666812-9aac4ec77c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export function NftRewards() {
  return (
    <section id="rewards" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            NFT Rewards Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Each quest completion earns you a unique NFT proof of achievement. 
            These badges live forever on the blockchain, showcasing your Web3 journey.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {nftRewards.map((nft, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all group"
            >
              <div className="relative overflow-hidden aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 absolute"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-card to-transparent">
                  <h3 className="font-bold text-sm">{nft.title}</h3>
                  <p className="text-xs text-muted-foreground">{nft.category}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">Rarity</span>
                  <span className={`text-xs ${nft.rarityColor} px-2 py-0.5 rounded-full`}>{nft.rarity}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>Created by Kwesta</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Build Your Reputation</h3>
              <p className="text-muted-foreground mb-6">
                Your NFT badges are more than just collectibles. They represent your expertise, 
                participation, and achievements in the different ecosystems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span>Showcase your on-chain and off-chain reputation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span>Gain access to exclusive communities and events</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span>Trade or display your achievement NFTs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span>Earn Multipliers and reward points from some of your favorite projects</span>
                </li>
              </ul>
              <Button asChild className="w-full md:w-auto">
                <a href="#early-access">
                  Start Building Your Collection
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 transform -rotate-6">
                  <div className="transform rotate-12 shadow-xl bg-card rounded-lg border-4 border-card aspect-square flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="transform -rotate-6 shadow-xl bg-card rounded-lg border-4 border-card aspect-square flex items-center justify-center">
                    <svg className="w-12 h-12 text-secondary/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="transform -rotate-12 shadow-xl bg-card rounded-lg border-4 border-card aspect-square flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-500/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="transform rotate-6 shadow-xl bg-card rounded-lg border-4 border-card aspect-square flex items-center justify-center">
                    <svg className="w-12 h-12 text-purple-500/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
