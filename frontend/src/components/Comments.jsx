import React, { useState, useEffect } from 'react';





const Comments = ({eubwid}) => {
    console.log(eubwid)
    const [newComment, setNewComment] = useState({content: "", author: ""})
    const [comments, setComments] = useState([])


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/{eubwid}/comments`);
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
        }, []);


    return (
        <>
            <p>Comments Section</p>
            <form className="comment-form" >
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
                </>
        )
    }

export default Comments;