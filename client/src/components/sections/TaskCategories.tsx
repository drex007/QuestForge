import { ArrowRight, Code, Users, LineChart, ImageIcon, Gamepad2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const tasks = [
  {
    title: "Developer Quests",
    description: "Build and deploy Web3 applications, smart contracts, and more.",
    icon: <Code />,
    color: "bg-primary text-primary",
    tags: ["Solidity", "dApps", "Smart Contracts"],
    count: 5
  },
  {
    title: "Community Quests",
    description: "Participate in DAO governance, community events, and social challenges.",
    icon: <Users />,
    color: "bg-secondary text-secondary",
    tags: ["DAOs", "Governance", "Social"],
    count: 3
  },
  {
    title: "DeFi Quests",
    description: "Learn and engage with decentralized finance protocols and services.",
    icon: <LineChart />,
    color: "bg-green-500 text-green-500",
    tags: ["Lending", "Staking", "Swaps"],
    count: 4
  },
  {
    title: "NFT Explorer",
    description: "Collect, trade, and learn about NFTs across different marketplaces.",
    icon: <ImageIcon />,
    color: "bg-purple-500 text-purple-500",
    tags: ["Collecting", "Art", "Marketplaces"],
    count: 3
  },
  {
    title: "GameFi Quests",
    description: "Play-to-earn games and blockchain gaming experiences.",
    icon: <Gamepad2 />,
    color: "bg-amber-500 text-amber-500",
    tags: ["P2E", "Metaverse", "Gaming"],
    count: 2
  },
  {
    title: "Web3 Education",
    description: "Learn the fundamentals of blockchain, Web3, and decentralized applications.",
    icon: <BookOpen />,
    color: "bg-blue-500 text-blue-500",
    tags: ["Beginner", "Learning", "Tutorials"],
    count: 6
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

export function TaskCategories() {
  return (
    <section id="tasks" className="py-24 bg-[#0d1323]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Quest Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore a variety of tasks designed for different interests and skill levels. 
            Each completed quest earns you a unique NFT.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tasks.map((task, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border"
            >
              <div className={`h-3 ${task.color.split(" ")[0]}`}></div>
              <div className="p-6">
                <div className={`w-14 h-14 rounded-full ${task.color.split(" ")[0]}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={task.color.split(" ")[1]}>
                    {task.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:${task.color.split(" ")[1]} transition-colors`}>
                  {task.title}
                </h3>
                <p className="text-muted-foreground mb-4">{task.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {task.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-xs ${task.color.split(" ")[0]}/10 ${task.color.split(" ")[1]} px-2 py-1 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{task.count} available quests</span>
                  <button className={`text-sm ${task.color.split(" ")[1]} flex items-center group-hover:underline`}>
                    View Quests <ArrowRight className="ml-1 group-hover:ml-2 transition-all h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
