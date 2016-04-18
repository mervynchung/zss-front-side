module.exports = {
    path: '/rygl/rycx/zyswscx(/)',
    ignoreScrollBehavior:true,
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}