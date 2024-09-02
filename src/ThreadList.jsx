//ThreadList.jsx

import React, { useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const ThreadList = () => {
  const [threads, setThreads] =useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads` , { method: "GET" },);
        const data = await response.json();
        setThreads(data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };
    fetchThreads();
  },[]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">スレッド一覧</h1>
      <button
        onClick={() => navigate('/create')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        スレッドを立てる
      </button>
      <ul className="mt-4 space-y-2">
        {threads.map(thread => (
          <li
            key={thread.id}
            className="p-4 bg-gray-100 rounded-lg shadow border border-gray-200 hover:bg-gray-200"
          >
            <a
              href={`/threads/${thread.id}`}
              className="text-blue-500 hover:underline"
            >
              {thread.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


