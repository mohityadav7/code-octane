import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Practice from './Practice';
import Contests from './Contest/Contests';
import About from './About';
import NotFound from './NotFound';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/practice" component={Practice} />
                    <Route path="/contests" component={Contests} />
                    <Route path="/about" component={About} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;