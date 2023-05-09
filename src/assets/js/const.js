//------------レスポンスキー-------------------------------------------------------
//ユーザーID
export const RES_USER_ID = 'user_id';
//トークン
export const RES_TOKEN = 'token';

//------------入力チェックエラーメッセージ-------------------------------------------
//ユーザーID
export const VALID_USER_ID = 'ユーザーID';

//ユーザーID 最大桁数
export const MAX_LENGTH_USER_ID = 12;

//ユーザーID
export const VALID_PASSWORD = 'パスワード';

//ユーザーID 最大桁数
export const MAX_LENGTH_PASSWORD = 20;

//必須入力エラーメッセージ生成
export const greetingValidMessageRequired = (colName) => {
    return `${colName}は必須入力です`;
  };

//最大桁数エラーメッセージ生成
export const greetingValidMessageMaxLength = (colName,maxLength) => {
    return `${colName}は${maxLength}文字以内に入力してください`;
  };

//重複エラーメッセージ生成
export const greetingValidMessageDuplication = (colName) => {
    return `入力された${colName}はすでに使用済みです`;
  };

//------------ログイン失敗メッセージ生成
//ユーザーIDが存在しない、パスワードが違うなど
export const VALID_MESSAGE_LOGIN_FAILURE = `ログインに失敗しました`;


//------------ゲームの難易度------------------------------------------
export const GAME_LEVEL_EASY = `EASY`;

//------------初期カード配列------------------------------------------
//EASY
export const EASY_CARDS_ARR = [
  { number: "1", posX: 100 , posY: 100 , speed: 1 },
  { number: "1", posX: 200 , posY: 100 , speed: 1 },
  { number: "2", posX: 100 , posY: 250 , speed: 1 },
  { number: "2", posX: 200 , posY: 250 , speed: 1 },
];


//NOMAL
export const NOMAL_CARDS_ARR = [
  { number: "1"},
  { number: "1" },
  { number: "2" },
  { number: "2" },
  { number: "3" },
  { number: "3" },
  { number: "4" },
  { number: "4" },
];