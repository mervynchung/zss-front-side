module.exports = {
    path: '/rygl/rycx/zyswscx(/)',
    breadcrumbName:'人员查询',	
    ignoreScrollBehavior:true,
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}