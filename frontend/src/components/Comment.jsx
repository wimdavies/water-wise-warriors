import formatDate from "../utils/dateFormatter";

const Comment = ({comment}) => {
    const formattedCommentLeftOnDate = formatDate(comment.createdAt);
    
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}> 
        <p>
        {comment.content}
        </p>
        <p>
        <strong>{comment.author}</strong> left this comment at <strong>{formattedCommentLeftOnDate}</strong>
        </p>
        </div>
    )
}

export default Comment;