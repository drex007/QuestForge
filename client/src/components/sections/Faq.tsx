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
    question: "What is QuestChain?",
    answer: "QuestChain is a Web3 platform that rewards users with NFTs for completing various tasks and quests. These NFTs serve as on-chain proof of your achievements and participation in the Web3 ecosystem."
  },
  {
    question: "How do I earn NFT rewards?",
    answer: "After connecting your wallet, you can browse available quests, complete the required tasks, and claim your NFT reward. The platform verifies your completion before allowing you to mint the NFT to your wallet."
  },
  {
    question: "Are there gas fees for using QuestChain?",
    answer: "Task completion and verification are gasless operations. You'll only pay gas fees when claiming your NFT rewards, which happens on-chain. We support multiple EVM chains, including those with lower gas fees like Polygon and Optimism."
  },
  {
    question: "Which wallets are supported?",
    answer: "QuestChain supports all major EVM-compatible wallets including MetaMask, WalletConnect, Coinbase Wallet, and more. Any wallet that can connect to Ethereum and other EVM chains should work with our platform."
  },
  {
    question: "What can I do with my NFT rewards?",
    answer: "Your NFT rewards represent your achievements and can be used as on-chain proof of your knowledge and engagement. They may grant access to exclusive communities, events, or additional features within the Web3 ecosystem. You can also display them in your wallet or NFT gallery."
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
            Everything you need to know about QuestChain and our NFT rewards system.
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
