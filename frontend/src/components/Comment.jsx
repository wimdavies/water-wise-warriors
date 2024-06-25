

const Comment = ({comment}) => {
    const date = new Date(comment.createdAt);
    const stringdate = date.toString().split(' ').slice(0, 5).join(' ');
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}> 
        <p>
        {comment.content}
        </p>
        <p>
        <strong>{comment.author}</strong> left this comment on <strong>{stringdate}</strong>
        </p>
        </div>
    )
}

export default Comment;