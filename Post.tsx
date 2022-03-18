import React, { Component, useEffect } from 'react';

interface PostProps {
  title: string;
  body: string;
  user: string;
  date: Date;
}

export const Post: React.FC<PostProps> = ({ title, user, body, date }) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      <h5>{user}</h5>
      <p>{body}</p>
      <span>{date.toLocaleDateString()}</span>
    </div>
  );
};
