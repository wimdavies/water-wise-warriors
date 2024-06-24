package com.water_wise_warriors.api.controller;


import com.water_wise_warriors.api.model.Comment;
import com.water_wise_warriors.api.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class CommentsController {

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("/api/{eubwid}/comments")
    public List<Comment> all(@PathVariable String eubwid) {
        return commentRepository.findByEubwidOrderByCreatedAtDesc(eubwid);
    }

    @PostMapping("/api/{eubwid}/comments")
    public List<Comment> create(@PathVariable String eubwid, @RequestBody Comment comment) {
        System.out.println("FIND ME");
        System.out.println(eubwid);
        System.out.println(comment.getEubwid());
  //      if (comment.getEubwid() == eubwid) {
            System.out.println("I am here");
            commentRepository.save(comment);
    //    }
        return commentRepository.findByEubwidOrderByCreatedAtDesc(eubwid);
    }

}
