/*省内变动记录*/
module.exports = {
    path: 'lsjlcx/zyswslsjl/snbdjl(/)',
    breadcrumbName:'历史记录查询 / 税务师历史记录 / 省内变动记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}