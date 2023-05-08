import axios from "axios";
import * as consts from './const.js';

//ログイン判定
export function isLogin() {
    const token = sessionStorage.getItem(consts.RES_USER_ID);
    return token !== null && token !== '';
  }

//オブジェクト 空判定
export  function isEmpty(obj){
    return !Object.keys(obj).length;
  }

export function sendErrorResponse(res, message, validMessage) {
  res.json({
    success: false,
    message: message,
    validMessage: validMessage
  });
}

//配列の要素の順番をシャッフル
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

export async function getDataLake(){
  const response = await axios.post("http://localhost:3000/dataLake/getDataLake");
        
  if (response.data.success) {
    return response.data.ranking_data;
  } else {
    console.error("データの取得に失敗しました。");
    return null
  }
}