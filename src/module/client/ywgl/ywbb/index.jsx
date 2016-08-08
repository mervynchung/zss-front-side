/*业务报备填报功能*/
module.exports = {
    path: '/ywgl/client/ywbb',
    breadcrumbName:'业务报备',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
};