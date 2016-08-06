module.exports = {
    path: '/hyhf/hyhfjnqk(/)',
    ignoreScrollBehavior:true,
    breadcrumbName:'会员会费缴纳情况',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}