import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Kwesta?",
    answer: "Kwesta is a platform that rewards users with NFTs, tokens, stablecoins, Discord roles and many more for completing various tasks and quests. These rewards serve as off-chain and on-chain proof of your achievements and participation in different project ecosystems."
  },
  {
    question: "How do I earn rewards?",
    answer: "After connecting your wallet, you can browse available quests, complete the required tasks, and claim your reward. The platform verifies your completion before allowing you to claim your rewards. Quests on our platform will be in collaboration with well-vetted Web3 projects across different niches."
  },
  {
    question: "Are there gas fees for using Kwesta?",
    answer: "Task completion and verification are gasless operations. You'll only pay gas fees when claiming your on-chain rewards. We support multiple EVM chains, including those with lower gas fees like Base, Polygon and Optimism. Support for non-EVM chains is coming soon."
  },
  {
    question: "Which wallets are supported?",
    answer: "Kwesta supports all major EVM-compatible wallets including MetaMask, Rabby, OKX and more. Any wallet that can connect to Ethereum and other EVM chains should work with our platform."
  },
  {
    question: "What can I do with my rewards?",
    answer: "Your rewards represent your achievements and can be used as on-chain or off-chain proof of your knowledge and engagement. They may grant access to exclusive communities, events, reward points from partner projects, points multipliers or additional features within the Web3 ecosystem. You can also trade your NFT rewards and display them in your wallet or NFT gallery."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about Kwesta and our rewards system.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/10 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
