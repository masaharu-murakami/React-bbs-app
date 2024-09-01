import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateThread = () => {
  const [text, setText ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {e.preventDefault}
  fetch("https://railway.bulletinboard.techtrain.dev/threads/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //データの形式をJSON形式に指定
    },
    body: JSON.stringify({text}),
    // 送るデータをJSON形式に変換
  })
    .then(response => response.json())
    .then(() => {
      navigate(`/`);  //threads/${newThread.id}
    })
    .catch(error => console.error('Error creating thread:', error));

    const handleButtonClick = () => {
      navigate('/'); // ここで指定したパスに遷移する
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="スレッドタイトルを入力してください" //入力フィールドのヒントテキストを表示
        required //入力が必須であることを指定
        />
        <button type="submit" >新しくスレッドを立てる</button>
        <button type="submit" onClick={handleButtonClick} >スレッド一覧に戻る</button>
      </form>
    )
};