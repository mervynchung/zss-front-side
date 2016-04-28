module.exports = {
    path: '/jggl/swscx(/)',
    ignoreScrollBehavior:true,
    breadcrumbName:'事务所查询',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}