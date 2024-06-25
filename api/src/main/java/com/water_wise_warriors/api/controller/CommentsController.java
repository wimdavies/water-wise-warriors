package com.water_wise_warriors.api.controller;

import com.water_wise_warriors.api.model.Comment;
import com.water_wise_warriors.api.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentsController {

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("/api/{eubwid}/comments")
    public List<Comment> all(@PathVariable String eubwid) {
        return commentRepository.findByEubwidOrderByCreatedAtDesc(eubwid);
    }

    @PostMapping("/api/{eubwid}/comments")
    public List<Comment> create(@PathVariable String eubwid, @RequestBody Comment comment) {
        comment.setEubwid(eubwid);
        commentRepository.save(comment);
        return commentRepository.findByEubwidOrderByCreatedAtDesc(eubwid);
    }

}
