import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Review } from './types';
import GlassPanel from '../GlassPanel';

interface TestimonialCardProps {
  review: Review;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <GlassPanel variant="dark" blur="md" className="p-8 h-full group hover:border-blue-400/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors" />
        
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className={`${
                star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-300 mb-6 italic leading-relaxed relative z-10">
          "{review.message}"
        </p>
        
        <div className="mt-auto">
          <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
            {review.name}
          </h4>
          {review.company && (
            <p className="text-gray-400 text-sm">{review.company}</p>
          )}
          <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-wider">
            {new Date(review.created_at).toLocaleDateString(undefined, { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default TestimonialCard;
