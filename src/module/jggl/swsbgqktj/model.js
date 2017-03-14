var renderCol = [];
var renderDate = [];
const model = {
    setCol(col) {
        renderCol = col
    },
    setDate(date) {
        renderDate = date
    },
    columns: [
        { title: '序号', dataIndex: 'key', key: 'key' },
        {
            title: '审批时间',
            dataIndex: 'SJ',
            key: 'SJ',
            render(text, record, index) {
                let colDate = renderDate;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = colDate[index];
                return obj;
            }
        },
        {
            title: '代码',
            dataIndex: 'JGZCH',
            key: 'JGZCH',
            render(text, record, index) {
                let col = renderCol;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = col[index];
                return obj;
            }
        },
        {
            title: '名称',
            dataIndex: 'DWMC',
            key: 'DWMC',
            render(text, record, index) {
                let col = renderCol;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = col[index];
                return obj;
            }
        },
        {
            title: '地址及邮编',
            key: 'YBDZ',
            dataIndex: 'YBDZ',
            render(text, record, index) {
                let col = renderCol;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = col[index];
                return obj;
            }
        },
        {
            title: '设立时间',
            key: 'SLSJ',
            dataIndex: 'SLSJ',
            render(text, record, index) {
                let col = renderCol;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = col[index];
                return obj;
            }
        },
        {
            title: '所长姓名',
            key: 'FDDBR',
            dataIndex: 'FDDBR',
            render(text, record, index) {
                let col = renderCol;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = col[index];
                return obj;
            }
        },
        {
            title: '联系方式',
            key: 'DHUA',
            dataIndex: 'DHUA',
            render(text, record, index) {
                let col = renderCol;
                const obj = {
                    children: text,
                    props: {},
                };
                obj.props.rowSpan = col[index];
                return obj;
            }
        },
        { title: '变更事项', key: 'BGSZ', dataIndex: 'BGSZ' },
        { title: '变更内容', key: 'BGNR', dataIndex: 'BGNR' },
    ],
};

module.exports = model;