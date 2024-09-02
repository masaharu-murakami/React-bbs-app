//src/messageCreate.jsx

//src/messageCreate.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const PostMessage = () => {
  const { thread_id } = useParams();
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const newPost = await response.json();
        console.log('New Post:', newPost);
        setContent('');
        // PostListコンポーネントでfetchPosts()を再度呼び出すなどして、リストを更新
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="メッセージを入力してください"
        required
      />
      <button type="submit">投稿する</button>
    </form>
  );
};