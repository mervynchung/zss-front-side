/*收费金额预警管理*/
module.exports = {
    path: 'ywgl/sfjeyjgl(/)',
    breadcrumbName:'收费金额预警管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}