import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ComponentType } from "react";
import { FeedbackView }  from "../routes/feedback";

interface RouteType {
    path: string;
    name: string;
    component: ComponentType<any>;
    exact?: boolean;
  }

type RouterList= Array<RouteType>;

const ROUTER_LIST: RouterList = [
    {
        path: "/",
        name: "Feedback View",
        exact: true,
        component: FeedbackView
    }
];

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {ROUTER_LIST.map((route, idx) => {
                    const Page = route.component;

                    return (
                        <Route key={idx} path={route.path} exact={route.exact} name={route.name}>
                        <Page />
                        </Route>
                    );
                })}
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};
