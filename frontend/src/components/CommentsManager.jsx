import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const Comments = ({eubwid}) => {
    console.log(eubwid)
    const [newComment, setNewComment] = useState({content: "", author: ""})
    const [comments, setComments] = useState([])
    const [feedbackMsg, setFeedbackMsg] = useState("")


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/${eubwid}/comments`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); //get items out of api
                setComments(data);
            } catch (error) {
                console.error('Error fetching Comments:', error);
            }
        };

        fetchComments();
        }, [eubwid]);

    const handleSubmit = async (event) =>{
        try {
            event.preventDefault()
            const response = await fetch(`http://localhost:8080/api/${eubwid}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment)
            })
            const data = await response.json()
            setComments(data)
            setNewComment({content: "", author: ""})
            setFeedbackMsg("Comment posted!")
        } catch (error){
            console.error('Error posting comment:', error);
            setFeedbackMsg("Couldn't post comment, sorry!")
        }
    }

    return (
        <>
            <p>Comments Section</p>
            <form className="comment-form" onSubmit={handleSubmit}>
                <label htmlFor="commentText">Leave a comment:</label>
                <input
                id="commentText"
                value={newComment.content}
                onChange={(e) => setNewComment({content: e.target.value, author: newComment.author})}
                placeholder="It was a lovely swim..."
                required
                ></input>
                <label htmlFor="commentAuthor">Add your name (optional):</label>
                <input
                id="commentAuthor"
                value={newComment.author}
                onChange={(e) => setNewComment({content: newComment.content, author: e.target.value})}

                ></input>
                <button type="submit">Submit</button>
            </form>
            <p>{feedbackMsg}</p>
            {comments.map((comment)=>{
                return <Comment key={comment.id} comment={comment}/>
            })}
        </>
        )
    }

export default Comments;