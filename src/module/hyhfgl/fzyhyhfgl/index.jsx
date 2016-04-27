module.exports = {
    path: 'hyhfgl/fzyhyhfgl(/)',
     ignoreScrollBehavior:true,
    breadcrumbName:'非执业会员会费管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}