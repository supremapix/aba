import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AreaInfo } from '../types';

interface InfiniteMarqueeProps {
  items: AreaInfo[];
  direction?: 'left' | 'right';
  speed?: number;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  items, 
  direction = 'left', 
  speed = 30 
}) => {
  // Multiply items to ensure continuous flow
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap py-6 relative">
      <motion.div
        className="inline-flex gap-6"
        animate={{
          x: direction === 'left' ? [-20, -1000] : [-1000, -20],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Link
            key={`${item.slug}-${index}`}
            to={`/localidade/${item.slug}`}
            className="inline-block px-8 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-aba-orange hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <span className={`w-2 h-2 rounded-full ${item.type === 'bairro' ? 'bg-aba-blue' : 'bg-aba-green'}`} />
              <span className="text-gray-800 font-bold group-hover:text-aba-orange transition-colors">
                {item.name}
              </span>
              <span className="text-gray-400 text-xs font-medium bg-gray-50 px-2 py-0.5 rounded">
                {item.distance}
              </span>
            </div>
          </Link>
        ))}
      </motion.div>
      
      {/* Gradients for smooth fade out */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default InfiniteMarquee;
