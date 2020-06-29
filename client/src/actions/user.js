export const CHANGE_VALUE = 'CHANGE_VALUE';
export const MODIFY_FIELD = 'MODIFY_FIELD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const SEND_USER = 'SEND_USER';
export const ADD_USER_INFOS = 'ADD_USER_INFOS';
export const EMPTY_USER = 'EMPTY_USER';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const ERROR_MESSAGE_TWO = 'ERROR_MESSAGE_TWO';
export const VALIDATION_SIGNUP = 'VALIDATION_SIGNUP';
export const VERIFY_CALLBACK = 'VERIFY_CALLBACK';
export const CHANGE_USER_INFOS = 'CHANGE_USER_INFOS';
export const TOGGLE_OPEN_MODIFY = 'TOOGLE_OPEN_MODIFY';
export const UPDATE_USER_INFOS = 'UPDATE_USER_INFOS';
export const DELETE_USER = 'DELETE_USER';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const modifyField = (value, key) => ({
  type: MODIFY_FIELD,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const sendUser = (value, key) => ({
  type: SEND_USER,
  value,
  key,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const addUserInfos = (user) => ({
  type: ADD_USER_INFOS,
  payload: user,
});

export const emptyUser = () => ({
  type: EMPTY_USER,
});

export const errorMsg = (value) => ({
  type: ERROR_MESSAGE,
  value,
});

export const errorMsg2 = (value) => ({
  type: ERROR_MESSAGE_TWO,
  value,
});

export const validationSignup = () => ({
  type: VALIDATION_SIGNUP,
});

export const verifyCallback = (response) => ({
  type: VERIFY_CALLBACK,
  response,
});

export const changeUserInfos = (newName) => ({
  type: CHANGE_USER_INFOS,
  newName,
});

export const updateUserInfos = (name) => ({
  type: UPDATE_USER_INFOS,
  name,
});

export const toggleOpenModify = () => ({
  type: TOGGLE_OPEN_MODIFY,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});
