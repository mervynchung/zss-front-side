module.exports = {
    path: '/rygl/rycx(/)',
    breadcrumbName:'人员查询',	
    ignoreScrollBehavior:true,
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}