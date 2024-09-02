//src/CreateThread.jsx

import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateThread = () => {
  const [title, setTitle ] = useState('');
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault(); // デフォルトのフォーム送信動作を防止

    try {
      // 非同期にPOSTリクエストを送信
      const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // データ形式をJSONに指定
        },
        body: JSON.stringify({title }) // データをJSON形式に変換して送信
      });

      // レスポンスを確認
      if (response.ok) {
        console.log("リクエスト成功:", await response.json());
        navigate('/'); // スレッド作成後に一覧画面へリダイレクト
      } else {
        console.error("リクエスト失敗:", response.status, response.statusText);
      }
    } catch (error) {
      // エラーハンドリング
      console.error("エラーが発生しました:", error);
    }
  };

    const ReturnRouteButton = () => {
      navigate('/'); // ここで指定したパスに遷移する
    };

    return (

      <div>
      <h1>新しいスレッド作成</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>追加</button>
      <button type="submit" onClick={ReturnRouteButton} >スレッド一覧に戻る</button>
    </div>
    )
};