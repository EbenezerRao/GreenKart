'use client';
import { useState } from 'react';
import { Star } from 'lucide-react';

const initialReviews = [
    {
        name: 'Aditi Sharma',
        rating: 5,
        comment: 'Absolutely love it! Great quality and feels good to use something eco-friendly.',
    },
    {
        name: 'Rohan Patel',
        rating: 4,
        comment: 'Looks just like the picture. Worth the price and fast delivery!',
    },
    {
        name: 'Meena Varma',
        rating: 5,
        comment: 'Perfect for my green kitchen. Feels premium yet sustainable.',
    },
];

export default function ProductReviews() {
    const [reviews, setReviews] = useState(initialReviews);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            const newReview = { name, comment, rating };
            setReviews([newReview, ...reviews]);
            setName('');
            setComment('');
            setRating(5);
        }
    };

    return (
        <div className="mt-10">
            <div className='flex flex-col justify-center'>
                <h2 className="museo text-2xl font-semibold text-gray-800 mb-4 text-center">Customer Reviews</h2>
                <div className="space-y-6 mb-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="museo font-medium text-black">{review.name}</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="museo text-black text-sm mt-2">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mb-10  flex justify-center'>
            <form onSubmit={handleSubmit} className="bg-[#A3D977] w-[100%] p-6 border rounded-lg shadow-sm space-y-4">
                <h3 className="museo text-lg font-medium text-gray-700 text-center">Leave a Review</h3>

                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                <textarea
                    placeholder="Your Feedback"
                    className="w-full border px-3 py-2 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Rating:</span>
                    {[1, 2, 3, 4, 5].map((val) => (
                        <button
                        key={val}
                        type="button"
                        className={`p-1 ${val <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        onClick={() => setRating(val)}
                        >
                            <Star className="w-5 h-5 fill-current stroke-current" />
                        </button>
                    ))}
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                    Submit Review
                </button>
            </form>
            </div>
        </div>
    );
}
