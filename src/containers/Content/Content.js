import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

const Content = () => {
    return(
        <div>
                <Route exact path="/"><h1>POSTS</h1></Route>
                <Route exact path="/explore"><h1>EXPLORE</h1></Route>
                <Route exact path="/messages"><h1>MESSAGES</h1></Route>
                <Route exact path="/favourite"><h1>FAVOURITES</h1></Route>
        </div>
    );
}

export default Content;