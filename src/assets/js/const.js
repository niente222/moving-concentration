//レスポンスキー
//ユーザーID
export const RES_USER_ID = 'user_id';
//トークン
export const RES_TOKEN = 'token';

//入力チェックエラーメッセージ
//ユーザーID
export const VALID_USER_ID = 'ユーザーID';

//ユーザーID 最大桁数
export const MAX_LENGTH_USER_ID = 20;

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

//ログイン失敗メッセージ生成
//ユーザーIDが存在しない、パスワードが違うなど
export const validMessageLoginFailure = `ログインに失敗しました`;
