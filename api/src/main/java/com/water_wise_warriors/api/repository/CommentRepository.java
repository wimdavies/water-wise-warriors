package com.water_wise_warriors.api.repository;

import com.water_wise_warriors.api.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByEubwidOrderByCreatedAtDesc(String eubwid);
}
