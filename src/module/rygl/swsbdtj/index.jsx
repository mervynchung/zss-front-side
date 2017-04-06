/*税务师变动统计*/
module.exports = {
    path: 'rygl/swsbdtj',
    breadcrumbName:'人员管理 / 税务师变动统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}