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
export const GAME_LEVEL_EASY_1 = `EASY1`;
export const GAME_LEVEL_EASY_2 = `EASY2`;
export const GAME_LEVEL_EASY_3 = `EASY3`;
export const GAME_LEVEL_NORMAL_1 = `NORMAL1`;
export const GAME_LEVEL_NORMAL_2 = `NORMAL2`;
export const GAME_LEVEL_NORMAL_3 = `NORMAL3`;
export const GAME_LEVEL_HARD_1 = `HARD1`;
export const GAME_LEVEL_HARD_2 = `HARD2`;
export const GAME_LEVEL_HARD_3 = `HARD3`;

//------------初期カード配列------------------------------------------
//EASY
export const EASY_1_CARDS_ARR = [
  { number: "1"},
  { number: "1"},
  { number: "2"},
  { number: "2"},
];

export const EASY_2_CARDS_ARR = [
  { number: "1"},
  { number: "1"},
  { number: "2"},
  { number: "2"},
  { number: "3"},
  { number: "3"},
];

export const EASY_3_CARDS_ARR = [
  { number: "1"},
  { number: "1"},
  { number: "2"},
  { number: "2"},
  { number: "3"},
  { number: "3"},
  { number: "4"},
  { number: "4"},
];


//NORMAL
export const NORMAL_1_CARDS_ARR = [
  { number: "1"},
  { number: "1" },
  { number: "2" },
  { number: "2" },
  { number: "3" },
  { number: "3" },
  { number: "4" },
  { number: "4" },
  { number: "5" },
  { number: "5" },
  { number: "6" },
  { number: "6" },
];

export const NORMAL_2_CARDS_ARR = [
  { number: "1"},
  { number: "1" },
  { number: "2" },
  { number: "2" },
  { number: "3" },
  { number: "3" },
  { number: "4" },
  { number: "4" },
  { number: "5" },
  { number: "5" },
  { number: "6" },
  { number: "6" },
];