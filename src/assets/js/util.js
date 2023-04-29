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