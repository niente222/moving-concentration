import * as consts from './const.js';

//入力チェック（ユーザーID）
export function validUserId(userId) {
    let validMessage = [];

    //必須チェック
    if(userId.length === 0){
        validMessage.push(consts.greetingValidMessageRequired(consts.VALID_USER_ID));
        return validMessage;
    }

    //最大桁数チェック
    if(userId.length > consts.MAX_LENGTH_USER_ID){
        validMessage.push(consts.greetingValidMessageMaxLength(consts.VALID_USER_ID,consts.MAX_LENGTH_USER_ID));
    }

    return validMessage;
}

//入力チェック（パスワード）
export function validPassword(password) {
    let validMessage = [];

    //必須チェック
    if(password.length === 0){
        validMessage.push(consts.greetingValidMessageRequired(consts.VALID_PASSWORD));
        return validMessage;
    }

    //最大桁数チェック
    if(password.length > consts.MAX_LENGTH_PASSWORD){
        validMessage.push(consts.greetingValidMessageMaxLength(consts.VALID_PASSWORD,consts.MAX_LENGTH_PASSWORD));
    }

    return validMessage;
}