/*模块设置功能*/
module.exports = {
    path: 'mksz(/)',
    ignoreScrollBehavior:true,
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}