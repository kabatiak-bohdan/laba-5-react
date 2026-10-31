import React, { useState, useEffect } from 'react';

const VARIANT_NUMBER = 8; 

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Завантаження відгуків...</div>;

  return (
    <section className="reviews-section">
      <h3>Відгуки попередніх роботодавців</h3>
      <div className="reviews-list">
        {comments.map((comment) => (
          <div key={comment.id} className="review-card">
            <h4>{comment.name}</h4>
            <small>{comment.email}</small>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;