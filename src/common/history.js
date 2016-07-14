/**
 * Created by ming on 2016/7/13.
 */
import {useRouterHistory}  from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'

const history = useRouterHistory(createHistory)({
    basename: '/'
});

module.exports = history;