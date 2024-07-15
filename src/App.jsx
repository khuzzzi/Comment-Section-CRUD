import CommentUp from "./components/CommentUp"
import CommentUpdation from "./components/CommentUpdation"
import Commentsapp from "./components/Commentsapp"
import data from "/data.json"

function App() {
  const dataComments = data
  const btnName = "SEND"
  console.log(data)
  return (
    <>
     <Commentsapp data={dataComments} btnName = {btnName}/>
     <CommentUp data = {dataComments} btnName = {btnName}/>
     {/* <CommentUpdation/> */}
    </>
  )
}

export default App
