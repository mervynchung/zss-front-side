var model = {
    entityModel: [
         {
            id: 'JSSJ',
            name: '结束时间',
            render(num){
                let date = new Date(num);
               
                return date.toLocaleDateString()
            }
        },
            {
            id: 'KSSJ',
            name: '开始时间',
            render(num){
                let date = new Date(num);
               
                return date.toLocaleDateString()
            }
        },
       
    ]

};

module.exports = model;