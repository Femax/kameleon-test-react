import redux from 'redux';
import axios from 'axios';

var userState = (user = [], action) => {
  if (action.type === 'PUT_USER') {
    return [
      ...user,
      action.payload
    ];
  }
  return user;
}

var quoteState = (quote = [], action) => {
  if (action.type === 'PUT_QUOTE') {
    return [
      ...quote,
      action.payload
    ];
  }
  return quote;
}

var reducers = redux.combineReducer({userState, quoteState})

var store = redux.createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  console.log('subscribe', store.getState());
})

export function createQuote(text, count, by){
  axios.post(`http://localhost:8090/quotes`,{
   text: text,
   count: count,
   by: by
  }).then(res => {
          store.dispatch({type:"PUT_QUOTE", payload: res.quotes})
        }).catch(error =>{
            console.log(error);
        });
}

export function  getQuotes() {
  axios.get(`http://localhost:8090/quotes`).then(res => {
          store.dispatch({type:"PUT_QUOTE", payload: res.quotes})
        }).catch(error =>{
            console.log(error);
        });
}
export function login(){
  axios.post(`http://localhost:8090/users`, {
      login: this.state.loginValue,
      password: this.state.passwordValue
  }).then(res => {
      store.dispatch({type:"PUT_USER", payload: res.login});
  }).catch(error => {
      console.log(error);
  })
}
export default store;
