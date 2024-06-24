package com.water_wise_warriors.api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;


@Entity
@Table(name = "COMMENTS")
@Getter @Setter
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private String eubwid;
    private String author;
    @Column(name = "created_at", nullable = false, updatable = false)
    @CreationTimestamp
    private Instant createdAt;

    public Comment(String content, String eubwid, String author) {
        this.content = content;
        this.eubwid = eubwid;
        this.author = author;
    }
}
