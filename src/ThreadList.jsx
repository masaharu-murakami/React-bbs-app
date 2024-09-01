import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const ThreadList = () => {
  const [threads, setThreads] =useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=30` , { method: "GET" },);
        const data = await response.json();
        setThreads(data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };
    fetchThreads();
  },[]);

  return (
    <div>
      <h1>スレッド一覧</h1>
      <button onClick={() => navigate('/create')}>スレッドを立てる</button>
      <ul className='threads'>
        {threads.map(thread => (
          <li key={thread.id}>
            <a href={`/threads/${thread.id}`}>{thread.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}


