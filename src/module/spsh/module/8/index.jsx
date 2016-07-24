/*执业税务师转籍审批*/
module.exports = {
    path: 'spsh/module/8',
    breadcrumbName:'逐级审核 / 待审批事项 / 执业税务师转籍审批',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}