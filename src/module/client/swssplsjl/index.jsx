/*审批历史记录*/
module.exports = {
    path: 'client/swssplsjl(/)',
    breadcrumbName:'事务所审批历史记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}