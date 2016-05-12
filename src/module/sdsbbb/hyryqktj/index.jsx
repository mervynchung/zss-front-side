/*执业税务师行业人员情况统计表*/
module.exports = {
    path: 'sdsbbb/hyryqktj(/)',
    breadcrumbName:'报表管理/手动上报报表/执业税务师行业人员情况统计表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}