/*测试*/
module.exports =  {
    path: 'xtsjfx/rynjsjfx',
    breadcrumbName:'人员年检数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
};
