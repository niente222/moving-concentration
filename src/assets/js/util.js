import * as consts from './const.js';

//ログイン判定
export function isLogin() {
    const token = sessionStorage.getItem(consts.RES_TOKEN);
    return token !== null && token !== '';
  }

//オブジェクト 空判定
export  function isEmpty(obj){
    return !Object.keys(obj).length;
  }