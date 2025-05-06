"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  postId: string;
}

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Sarah Johnson",
      authorImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "This article was so insightful! I've been trying to build a more sustainable wardrobe and these tips are exactly what I needed.",
      date: "2 days ago",
    },
    {
      id: "2",
      author: "Michael Chen",
      authorImage:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "I appreciate the balanced perspective here. It's important to acknowledge that sustainable fashion isn't just about materials but also about ethical labor practices.",
      date: "1 week ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const comment: Comment = {
      id: Date.now().toString(),
      author: "You",
      authorImage:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: newComment,
      date: "Just now",
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setIsSubmitting(false);
  };

  return (
    <section className="mt-16">
      <h2 className="font-heading text-2xl md:text-3xl mb-8">
        Comments ({comments.length})
      </h2>

      <form onSubmit={handleSubmit} className="mb-10">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4 min-h-[100px]"
        />
        <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={comment.authorImage || "/placeholder.svg"}
                alt={comment.author}
              />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{comment.author}</h4>
                <span className="text-xs text-muted-foreground">
                  {comment.date}
                </span>
              </div>
              <p className="text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
