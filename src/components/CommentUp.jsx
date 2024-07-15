import React, { useState } from 'react';
import styles from "./CommentUp.module.css";
import CommentUpdation from './CommentUpdation';

function CommentUp({ btnName, data }) {
  const [inputWritten, setInputWritten] = useState("");
  const [updateComment, setUpdateComment] = useState(false);
  const [inputData, setInputData] = useState([]); // initialize an empty array
  
  const handleOnChange = (e) => {
    setInputWritten(e.target.value);
  };

  const handleOnClick = () => {
    if (inputWritten.length > 0) {
      setUpdateComment(true);
      setInputData([...inputData, inputWritten]); // store previous data and current data in inputData array
      setInputWritten(""); // reset input field
    } else {
      setUpdateComment(false);
    }
  };

  console.log(inputData)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="./images/avatars/image-juliusomo.png" alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.cmntarea}>
            <input type="text" onChange={handleOnChange} value={inputWritten} />
          </div>
          <div className="btn">
            <button onClick={handleOnClick}>{btnName}</button>
          </div>
        </div>
      </div>

      {updateComment && (
        <div className={styles.commentUpdationContainer}>
          <CommentUpdation inputWritten={inputWritten} updateComment={updateComment} inputData={inputData} setInputData={setInputData} data = {data}/>
        </div>
      )}
    </div>
  );
}

export default CommentUp;