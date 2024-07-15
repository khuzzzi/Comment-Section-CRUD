import React, { useState } from 'react';
import styles from "./Comments.module.css";
import CommentUp from './CommentUp';

function CommentsApp({ data }) {
  const [scores, setScores] = useState(data.comments.map(comment => comment.score));
  const [replyingTo, setReplyingTo] = useState(null);

  const increaseScore = (index) => {
    const newScores = [...scores];
    newScores[index] += 1;
    setScores(newScores);
  };

  const decreaseScore = (index) => {
    const newScores = [...scores];
    newScores[index] -= 1;
    setScores(newScores);
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
  };

  return (
    <>
      {data.comments.map((comment, index) => (
        <React.Fragment key={comment.id}>
          <div className={styles.commentContainer}>
            <div className={styles.left}>
              <button onClick={() => increaseScore(index)}><img src="./images/icon-plus.svg" alt="Increase score" /></button>
              <p className={styles.para}>{scores[index]}</p>
              <button onClick={() => decreaseScore(index)}><img src="./images/icon-minus.svg" alt="Decrease score" /></button>
            </div>
            
            <div className={styles.right}>
              <div className={styles.imagecontainer}>
                <img src={comment.user.image.png} alt={comment.user.username} className={styles.image} />
                <div>
                  <p className={styles.name}>{comment.user.username}</p>
                  <p className={styles.month}>{comment.createdAt}</p>
                </div>
              </div>
              <div className={styles.comment}>{comment.content}</div>
              <div className={styles.reply}>
                <button onClick={() => handleReply(comment.id)}>
                  <img src="./images/icon-reply.svg" alt="Reply" className={styles.replyimg} />
                  <p>Reply</p>
                </button>
              </div>
            </div>
          </div>
          
          {replyingTo === comment.id && (
            <div className={styles.replyContainer}>
              <CommentUp btnName="REPLY" data = {data}/>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default CommentsApp;
