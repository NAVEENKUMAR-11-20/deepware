import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, X } from 'lucide-react';
import { Review } from './types';
import GlassPanel from '../GlassPanel';

interface TestimonialFormProps {
  onClose: () => void;
  onSubmit: (review: Omit<Review, 'id' | 'created_at'>) => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (rating === 0) newErrors.rating = 'Please select a rating';
    if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name, company, rating, message });
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-lg"
      >
        <GlassPanel variant="dark" blur="xl" className="p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <h3 className="text-2xl font-bold text-white mb-6">Write a Review</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full bg-slate-800/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="transition-transform active:scale-90"
                  >
                    <Star
                      size={28}
                      className={`${
                        star <= (hoverRating || rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Review Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className={`w-full bg-slate-800/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                placeholder="Share your experience working with us..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              Submit Review <Send size={18} />
            </button>
          </form>
        </GlassPanel>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialForm;
