import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'
import {NotFound} from 'navigation/NotFound'
import {ROOT, DASHBOARD} from "navigation/CONSTANTS"

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route exact path={DASHBOARD} component={Dashboard} />

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </div>
    )
}
