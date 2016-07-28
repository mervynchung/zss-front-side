
const model = {
 
    columns: [

        {title: '年度', dataIndex: 'nd', key: 'nd'},
        {title: '考取认定人数', dataIndex: '0', key: '0'},
        {title: '备案', dataIndex: 'ba_zrs', key: 'ba_zrs'},
       {title: '执业备案人数', dataIndex: 'zy_zrs', key: 'zy_zrs'},
       {title: '非执业备案人数', dataIndex: 'fzy_zrs', key: 'fzy_zrs'},
       {title: '执业转非执业', key: 'zzf_zrs', dataIndex: 'zzf_zrs'},
        {title: '非执业转执业', key: 'fzz_zrs', dataIndex: 'fzz_zrs'},
       {title: '死亡注销', dataIndex: 'swzx', key: 'swzx'},
       {title:'违规注销', dataIndex: 'wgzx', key: 'wgzx'}, 
       {title: '离职办所', dataIndex: 'lzzx', key: 'lzzx'},
       {title: '年检注销', dataIndex: 'njzx', key: 'njzx'},
       {title: '其他注销', dataIndex: 'qtzx', key: 'qtzx'},
       {title: '注销总人数', key: 'zx_zrs', dataIndex: 'zx_zrs'},
    ],
};

module.exports = model; 