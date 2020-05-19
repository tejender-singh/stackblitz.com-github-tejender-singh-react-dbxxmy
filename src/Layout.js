import React from 'react';
import AppBar from './containers/AppBar/AppBar';
import Content from './containers/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const Layout = (props) => {
    return(
        <div>
            <BrowserRouter>
                <AppBar
                    logoutHandler = {props.logoutHandler}
                />
                <Content/>
        </BrowserRouter>

    </div>
    )
}


export default Layout;
