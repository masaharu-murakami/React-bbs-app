//Thread.jsx

import React, {useEffect, useState} from "react";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import { PostMessage } from "./PostMessage";

export const Thread = () => {
  const location = useLocation();
  const { title } = location.state || {};
  const navigate = useNavigate();

  const {thread_id} = useParams();
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {method:'get'});
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("投稿の取得に失敗しました", error);
      }
    };

      fetchPosts();
    },[thread_id])

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
          method: 'POST',
          //"id": "string",
          //"post": "string",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: content }),
          // ({ content: content})  2024/09/03 課題：メッセージが表示されない  解決：左から上記に変更  質問；APIの仕様書によって変わるか否か
        });

        if (response.ok) {
          const newPost = await response.json();
          console.log('New Post:', newPost);
          setPosts([...posts, newPost]); // 新しい投稿を追加
          setContent('');
        } else {
          console.error('投稿できませんでした:', response.statusText);
        }
      } catch (error) {
        console.error('投稿できませんでした:', error);
      }
    };

    const ReturnRouteButton = () => {
      navigate('/');
    };

    return (
      <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">スレッドコメント</h1>
        <ul className="list-disc list-inside mb-4 space-y-2">
          {posts.map(post => (
            <li key={post.id} className="p-4 bg-white rounded-lg shadow border border-gray-200">
              {post.post}
              {/* {post.content} ← 2024/09/03 課題：メッセージが表示されない  解決：左から上記に変更 */}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-4">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="メッセージを入力してください"
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            投稿する
          </button>
        </form>
       {/* <PostMessage thread_id={thread_id} posts={posts} />  */}
        <button
          type="button"
          onClick={ReturnRouteButton}
          className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          スレッド一覧に戻る
        </button>
      </div>
    );
}