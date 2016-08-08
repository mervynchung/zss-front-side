module.exports =  {
    path: '/jgsjfx/ryztsjfx',
    breadcrumbName:'人员状态数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
};

