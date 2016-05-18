/*省内转籍记录*/
module.exports = {
    path: 'lsjlcx/zyswslsjl/snzjjl(/)',
    breadcrumbName:'历史记录查询 / 税务师历史记录 / 省内转籍记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}