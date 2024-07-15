import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import styles from "./CommentUpdation.module.css";

function CommentUpdation({ inputWritten, updateComment, inputData, setInputData , data }) {
  const [score, setScore] = useState(2);
  const [editIndex, setEditIndex] = useState(-1); // Track which comment is being edited
  const [newComment, setNewComment] = useState(''); // Track the new comment text
  const commentDate = new Date();
  
  const handleOnDelete = (index) => {
    // Filter out the comment at the specified index
    const updatedData = inputData.filter((_, idx) => idx !== index);
    // Update the state with the filtered array
    setInputData(updatedData);
  };

  const handleOnEdit = (index, currentComment) => {
    setEditIndex(index); // Set the index of the comment being edited
    setNewComment(currentComment); // Set the current comment as the initial value in the input
  };

  const handleUpdateComment = () => {
    // Ensure newComment is not empty
    if (newComment.trim() !== '') {
      // Create a copy of the input data array
      const updatedData = [...inputData];
      // Update the comment at the editIndex with the new comment text
      updatedData[editIndex] = newComment;
      // Update the state with the updated array
      setInputData(updatedData);
      // Reset edit state
      setEditIndex(-1);
      setNewComment('');
    }
  };

  const handleOnClick = (buttonName) => {
    if (buttonName === "plus") {
      setScore(3)
    } else {
     setScore(1)
    }
  };

  return (
    <div className={styles.commentContainer}>
      {inputData.map((elem, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.left}>
            <div className={styles.plusminuscontainer}>
              <button onClick={() => handleOnClick("plus")}>
                <img src="./images/icon-plus.svg" alt="Plus" />
              </button>
              {score}
              <button onClick={() => handleOnClick("minus")}>
                <img src="./images/icon-minus.svg" alt="Minus" />
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.upper}>
              <img src="./images/avatars/image-juliusomo.png" alt="Avatar" />
              <p className={styles.name}>juliusomo</p>
              <div className={styles.badge}>
                <p className={styles.para}>you</p>
              </div>
              <p className={styles.date}>{formatDistanceToNow(commentDate, { addSuffix: true })}</p>
              <div className={styles.editingsection}>
                <button className={styles.delete} onClick={() => handleOnDelete(index)}>
                  <img src="./images/icon-delete.svg" alt="Delete" />Delete
                </button>
                <button className={styles.edit} onClick={() => handleOnEdit(index, elem)}>
                  <img src="./images/icon-edit.svg" alt="Edit" />Edit
                </button>
              </div>
            </div>
            <div className={styles.lower}>
              {editIndex === index ? (
                <div>
                  <input type='text' value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                  <button className={styles.btn} onClick={handleUpdateComment}>UPDATE</button>
                </div>
              ) : (
                <p><span style={{fontSize:"1vw" , color : "#6a66af"}}>@maxblagun</span> {elem}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentUpdation;
