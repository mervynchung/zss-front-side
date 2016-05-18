/*省内注销记录*/
module.exports = {
    path: 'lsjlcx/zyswslsjl/snzxjl(/)',
    breadcrumbName:'历史记录查询 / 税务师历史记录 / 省内注销记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}