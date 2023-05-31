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

export function timeStringToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(':').map(parseFloat);
  return (hours * 3600) + (minutes * 60) + seconds;
}

export async function getDataLake(){
  const response = await axios.post("https://" + consts.IP_ADDRESS + "/dataLake/getDataLake")
  .then((response) => {
    // ここで成功時の処理を行います
    if (response.data.success) {
      return response.data.ranking_data;
    } else {
      console.error("データの取得に失敗しました。");
      return null
    }
  })
  .catch((error) => {
    console.log("error:" + error);
    if (error.response) {
      // サーバーからエラーレスポンスが返された場合、ここが実行されます
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // リクエストは発行されたがレスポンスがない場合、ここが実行されます
      console.log(error.request);
    } else {
      // 何らかの原因でリクエストが発行されなかった場合、ここが実行されます
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}

export async function getRankAtClear(userId,gameLevel,turn,clearTime){
  let dataLake = null;
  dataLake = await getDataLake();

  if (dataLake) {
    return dataLake
      .filter(game => game.GAME_LEVEL === gameLevel)
      .sort((a, b) => {
        if (a.TURNS === b.TURNS) {
          return timeStringToSeconds(a.CLEAR_TIME) - timeStringToSeconds(b.CLEAR_TIME)
        } else {
          return a.TURNS - b.TURNS
        }
      })
      .sort((a, b) => a.INSDATE - b.INSDATE)
      .findIndex(game => {
        return game.USER_ID === userId  && game.GAME_LEVEL === gameLevel && game.TURNS === turn && game.CLEAR_TIME === clearTime;
      }) + 1;
  } else {
    // エラーメッセージを表示するなど、登録失敗時の処理を実装
    console.error("データの取得に失敗しました。");
  }
}