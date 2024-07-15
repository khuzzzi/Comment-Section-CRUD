import React, { useState } from 'react';
import styles from "./ReplyComment.module.css";

function ReplyComment({ data  , index }) {
  const [username, setUserName] = useState(data.comments.length > 0 ? data.comments[index].user.username : '');
  const [reply , setReply] = useState("")
  const handleChange = (e)=>{
    setReply(e.target.value)
  }
  return (
    <div className={styles.replyCommentContainer}>
      <input
        className={styles.replyCommentInput}
        onChange={handleChange}
        type="text"
        placeholder={`@ ${username}`}
      />
      <button className={styles.replyCommentButton} onClick={()=>console.log(reply)}>Reply</button>
    </div>
  );
}

export default ReplyComment;
