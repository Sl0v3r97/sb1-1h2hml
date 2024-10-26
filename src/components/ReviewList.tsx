import React from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {review.author[0].toUpperCase()}
                  </span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">{review.author}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{review.content}</p>

          <div className="flex items-center justify-between text-sm">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span>Utile ({review.helpful})</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Flag className="w-4 h-4 mr-1" />
              <span>Segnala</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;