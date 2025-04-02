import { Button } from "@/components/ui/button";
import { Wallet, CheckSquare, Award, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Connect Your Wallet",
    description: "Link your EVM compatible wallet to get started. We support MetaMask, WalletConnect, and more.",
    icon: <Wallet className="h-6 w-6" />,
    color: "text-primary/75"
  },
  {
    id: "02",
    title: "Complete Tasks",
    description: "Explore and complete tasks across different categories. From basic interactions to advanced challenges.",
    icon: <CheckSquare className="h-6 w-6" />,
    color: "text-secondary/75"
  },
  {
    id: "03",
    title: "Earn Unique NFTs",
    description: "Claim your NFT rewards that serve as on-chain proof of your accomplishments and participation.",
    icon: <Award className="h-6 w-6" />,
    color: "text-green-500/75"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How QuestChain Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our platform makes earning NFTs simple. Complete tasks, verify your achievements, 
            and collect unique digital badges that prove your skills and engagement.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="bg-card p-8 rounded-xl border border-border relative"
            >
              <div className="absolute -top-5 -left-2 w-12 h-12 bg-primary text-xl font-bold rounded-xl flex items-center justify-center">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className={`mt-6 text-4xl ${step.color}`}>
                {step.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">No Gas Fees for Task Completion</h3>
              <p className="text-foreground/80">
                We use advanced verification methods that don't require gas fees for completing tasks. 
                You'll only pay gas when claiming your NFT rewards.
              </p>
            </div>
            <div>
              <Button asChild variant="secondary" size="lg">
                <a href="#early-access">
                  <Rocket className="mr-2 h-4 w-4" />
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
