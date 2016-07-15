/*税务师状态统计*/
module.exports = {
    path: 'xttjbb/swszttj(/)',
    breadcrumbName:'报表管理/系统统计报表/税务师状态统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}