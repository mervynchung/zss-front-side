/**
 * Created by ming on 2016/4/11.
 */
import React from 'react'


const renderContent = function (value, row, index) {
  let obj = {
    children: value,
    props: {},
  };
   if (index === 4) {
    obj.props.colSpan = 0;
  }
 
  return obj;
};



const model = [ {  title: '序号',  dataIndex: 'key',  key: 'key',}, 
              {  title: '地区',  dataIndex: 'mc',  key: 'mc', }, 
               { title: '有效事务所户数', dataIndex: 'zjgs', key: 'zjgs',}, 
               { title: '参加年检的机构(户数/比率)',
               colSpan: 2,                      
                key: 'cjnj_jgs',
                 dataIndex: 'cjnj_jgs',
                 render(value, row, index) {
    let obj = {
      children: value,
      props: {},
    };  
    return obj;
  },           
                }, 
               { title: '参加年检', colSpan: 0, key: 'cjnj_bl', dataIndex: 'cjnj_bl',}, 
                { title: '未参加年检机构(户数/比率)', 
                colSpan: 2,  
                 key: 'wcjnj_jgs', 
                 dataIndex: 'wcjnj_jgs',
                   render(value, row, index) {
    let obj = {
      children: value,
      props: {},
    };  
    return obj;
  },           
                 }, 
                { title: '未参加年检比率', colSpan: 0, key: 'wcjnj_bl', dataIndex: 'wcjnj_bl',}, 
                 { title: '通过年检机构(户数/比率)', 
                colSpan: 2,  
                 key: 'tgnj_jgs', 
                 dataIndex: 'tgnj_jgs',
                   render(value, row, index) {
    let obj = {
      children: value,
      props: {},
    };  
    return obj;
  },           
                 }, 
                { title: '未参加年检比率', colSpan: 0, key: 'tgnj_bl', dataIndex: 'tgnj_bl',}, 
                 { title: '未通过年检机构(户数/比率)', 
                colSpan: 2,  
                 key: 'wtgnj_gjs', 
                 dataIndex: 'wtgnj_gjs',
                   render(value, row, index) {
    let obj = {
      children: value,
      props: {},
    };  
    return obj;
  },           
                 }, 
                { title: '未参加年检比率', colSpan: 0, key: 'wtgnj_bl', dataIndex: 'wtgnj_bl',}, 
                 { title: '年检中机构(户数/比率)', 
                colSpan: 2,  
                 key: 'njz_jgs', 
                 dataIndex: 'njz_jgs',
                   render(value, row, index) {
    let obj = {
      children: value,
      props: {},
    };  
    return obj;
  },           
                 }, 
                { title: '未参加年检比率', colSpan: 0, key: 'njz_bl', dataIndex: 'njz_bl',}, 
                
            

];


const outModel ={
 model : model
   
}

module.exports = outModel;