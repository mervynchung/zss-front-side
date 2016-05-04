/*撤销报告预警管理*/
module.exports = {
    path: 'ywgl/cxbgyjgl',
    breadcrumbName:'撤销报告预警管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}