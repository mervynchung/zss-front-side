var arr = [
    {
        id: 0,
        pid: 'null',
        name: '导航菜单配置'
    },
    {
        id: 1, pid: 0, name: "系统设置"
    }, {
        id: 2,
        pid: 1,
        name: "模块设置"
    }, {
        id: 3, pid: 0, name: "机构管理"
    }];

//var arr = [
//    {id:1, pid:0, name:"SYSTEM"},
//    {id:2, pid:1, name:"aa"},
//    {id:3, pid:2, name:"aaa"},
//    {id:4, pid:2, name:"b"},
//    {id:5, pid:0, name:"c"},
//    {id:6, pid:5, name:"cc"}
//];
function generateTree(arr) {
    var root = {text: null};
    if (arr.length > 0) {
        var objMap = {};
        root["expanded"] = true;
        root["items"] = [];
        arr.forEach(function (item) {
            var node = {text: item.name};
            objMap[item.id] = node;
            if (item.pid === 'null') {
                root["items"].push(node);
            } else {
                var parent = objMap[item.pid];
                parent["expanded"] = true;
                if (parent["items"]) {
                    parent["items"].push(node);
                } else {
                    parent["items"] = [];
                    parent["items"].push(node);
                }
            }
        });
    }
    return root;
}

var res = generateTree(arr).items[0].items;


console.log(JSON.stringify(res, null, 2))