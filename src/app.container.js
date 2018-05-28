import { connect } from 'react-redux'; 
import App from './app';
import * as appActions from './app.action';
import AppReducer from './app.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        data: state.AppReducer.data
    }),
    (dispatch)=>({
         actions: bindActionCreators(appActions, dispatch)
    })
)(App);