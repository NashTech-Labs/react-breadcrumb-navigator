import './App.css';
import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LayoutComponent from "./hoc/layout.component";

function App() {
    const HomePage = React.lazy(() =>
        import('./pages/home.page')
    );
    const LevelOnePage = React.lazy(() =>
        import('./pages/level-one.page'),
    );
    const LevelTwoPage = React.lazy(() =>
        import('./pages/level-two.page'),
    );
    const LevelThreePage = React.lazy(() =>
        import('./pages/level-three.page'),
    );
    const LevelFourPage = React.lazy(() =>
        import('./pages/level-four.page'),
    );

    const routes = [
        {path: '/', Component: HomePage, name: 'Home'},
        {path: '/level-1', Component: LevelOnePage, name: 'Level 1'},
        {path: '/level-1/level-2', Component: LevelTwoPage, name: 'Level 2'},
        {path: '/level-1/level-2/level-3', Component: LevelThreePage, name: 'Level 3'},
        {path: '/level-1/level-2/level-3/level-4', Component: LevelFourPage, name: 'Level 4'},
    ]
    return (
        <div>
            <Router>
                <Suspense fallback={<LayoutComponent/>}>
                    <Switch>
                        {
                            routes.map(({path, Component}) => {
                                return <Route
                                    exact
                                    path={path}
                                    render={(props) => {
                                        const crumbs = routes.filter(({ path }) =>
                                            props.match.path.includes(path)
                                        );
                                        return (
                                            <LayoutComponent crumbs={crumbs}>
                                                <Component/>
                                            </LayoutComponent>
                                        )
                                    }}
                                />
                            })
                        }
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
