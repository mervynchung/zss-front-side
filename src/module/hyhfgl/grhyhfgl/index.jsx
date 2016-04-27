module.exports = {
    path: 'hyhfgl/grhyhfgl(/)',
     ignoreScrollBehavior:true,
    breadcrumbName:'执业会员会费管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}