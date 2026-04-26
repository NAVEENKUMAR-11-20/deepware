import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Plus, Filter, SortDesc, Loader2 } from 'lucide-react';
import { Review, SortOption, FilterOption } from './types';
import { INITIAL_REVIEWS } from './data';
import TestimonialCard from './TestimonialCard';
import TestimonialForm from './TestimonialForm';
import GlassPanel from '../GlassPanel';
import { supabase } from '../../lib/supabaseClient';

const TestimonialSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const [visibleCount, setVisibleCount] = useState(3);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchReviews = async () => {
    if (!supabase) {
      console.warn('Supabase not initialized. Using initial reviews.');
      setReviews(INITIAL_REVIEWS);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('review')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Error fetching reviews:', errorMessage);
      // Fallback to initial reviews if fetch fails
      setReviews(INITIAL_REVIEWS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const ratingDistribution = useMemo(() => {
    const dist = [0, 0, 0, 0, 0];
    reviews.forEach((r) => {
      dist[r.rating - 1]++;
    });
    return dist.reverse(); // [5*, 4*, 3*, 2*, 1*]
  }, [reviews]);

  const filteredAndSortedReviews = useMemo(() => {
    let result = [...reviews];

    // Filter
    if (filterBy === '5-star') {
      result = result.filter((r) => r.rating === 5);
    }

    // Sort
    if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (sortBy === 'highest') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [reviews, sortBy, filterBy]);

  const handleAddReview = async (newReview: Omit<Review, 'identity' | 'created_at'>) => {
    if (!supabase) {
      alert('Review system is temporarily unavailable. Please try again later.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('review')
        .insert([newReview])
        .select();

      if (error) throw error;
      if (data) {
        setReviews([data[0], ...reviews]);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Error adding review:', errorMessage);
      alert(`Failed to submit review: ${errorMessage}`);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div className="space-y-4 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-xl"
          >
            Real feedback from businesses we've helped transform. We take pride in delivering excellence.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-6 lg:justify-end">
          <div className="hidden sm:flex flex-col gap-2 min-w-[200px]">
            {ratingDistribution.map((count, i) => {
              const stars = 5 - i;
              const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-3 text-xs">
                  <span className="text-gray-400 w-4">{stars}★</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                  <span className="text-gray-500 w-8 text-right">{count}</span>
                </div>
              );
            })}
          </div>

          <GlassPanel variant="dark" blur="sm" className="px-6 py-4 flex items-center gap-4 border-blue-500/20">
            <div className="text-3xl font-bold text-white flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              {averageRating}
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="text-sm">
              <div className="text-white font-semibold">{reviews.length} Reviews</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </GlassPanel>

          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <Plus size={20} /> Write Review
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <SortDesc size={16} />
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-transparent rounded-xl pr-6 text-sm text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="latest" className="bg-slate-900">Latest</option>
                <option value="highest" className="bg-slate-900">Highest Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="h-4 w-[1px] bg-white/10" />

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Filter size={16} />
            <div className="relative group">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as FilterOption)}
                className="appearance-none bg-transparent rounded-xl pr-6 text-sm text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900">All Reviews</option>
                <option value="5-star" className="bg-slate-900">5-Star Only</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Showing {Math.min(visibleCount, filteredAndSortedReviews.length)} of {filteredAndSortedReviews.length} reviews
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="relative min-h-[400px]">
        {loading && reviews.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
              <p className="text-gray-400 animate-pulse">Loading reviews...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedReviews.slice(0, visibleCount).map((review, index) => (
                <TestimonialCard key={review.identity} review={review} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && filteredAndSortedReviews.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-gray-400 text-lg">No reviews found yet. Be the first to write one!</p>
          </div>
        )}
      </div>

      {/* View More Button */}
      {visibleCount < filteredAndSortedReviews.length && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-semibold transition-all"
          >
            View More Reviews
          </button>
        </div>
      )}

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <TestimonialForm
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleAddReview}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSection;
