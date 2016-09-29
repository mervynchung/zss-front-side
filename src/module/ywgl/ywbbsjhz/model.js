import React from 'react'

const columnsHz = [
  { title: '人员', dataIndex: 'ry', key: 'ry', width: "120" },
  { title: '企业技术开发费加计扣除鉴证', dataIndex: 'jskf', key: 'jskf' },
  { title: '企业所得税税前扣除鉴证', dataIndex: 'sqkc', key: 'sqkc' },
  { title: '企业所得税汇算清缴鉴证', dataIndex: 'qyhsqj', key: 'qyhsqj' },
  { title: '土地增值税鉴证', dataIndex: 'td', key: 'td' },
  { title: '房地产涉税调整鉴证', dataIndex: 'fdc', key: 'fdc' },
  { title: '其它鉴证', dataIndex: 'qt', key: 'qt' },
  { title: '高新技术企业认定专项鉴证', dataIndex: 'gxjs', key: 'gxjs' },
  { title: '企业注销税务登记税款清算鉴证', dataIndex: 'zx', key: 'zx' },
  { title: '企业变更税务登记税款清算鉴证', dataIndex: 'bg', key: 'bg' },
  { title: '个人所得税汇算清缴鉴证', dataIndex: 'grhsqj', key: 'grhsqj' }
];

const columnsSws = [
  { title: '序号', dataIndex: 'xh', key: 'xh' },
  { title: '事务所名称', dataIndex: 'swsmc', key: 'swsmc' },
  { title: '企业名称', dataIndex: 'wtdw', key: 'wtdw' },
  { title: '税务登记证号', dataIndex: 'swsswdjzh', key: 'swsswdjzh' },
  { title: '业务发生地', dataIndex: 'fsd', key: 'fsd' },
  { title: '报告文号', dataIndex: 'bgwh', key: 'bgwh' },
  { title: '报备号码', dataIndex: 'bbhm', key: 'bbhm' },
  { title: '一级复核', dataIndex: 'yjfh', key: 'yjfh' },
  { title: '二级复核', dataIndex: 'rjfh', key: 'rjfh' },
  { title: '三级复核', dataIndex: 'sjfh', key: 'sjfh' },
  { title: '签名注册税务师', dataIndex: 'qzsws', key: 'qzsws' },
  { title: '协议收费金额', dataIndex: 'xyje', key: 'xyje' },
  { title: '实际收费金额', dataIndex: 'sjsqje', key: 'sjsqje' },
  { title: '报备时间', dataIndex: 'bbrq', key: 'bbrq' },
  { title: '纳税调整增加额', dataIndex: 'tzvalue1', key: 'tzvalue1' },
  { title: '纳税调整减少额', dataIndex: 'tjvalue2', key: 'tjvalue2' },
];

const ywlx = [
  '',
  '企业技术开发费加计扣除鉴证', 
  '企业所得税税前扣除鉴证', 
  '企业所得税汇算清缴鉴证', 
  '土地增值税鉴证', 
  '房地产涉税调整鉴证', 
  '其它鉴证', 
  '高新技术企业认定专项鉴证', 
  '企业注销税务登记税款清算鉴证', 
  '企业变更税务登记税款清算鉴证',
  '个人所得税汇算清缴鉴证'
];

const model = {
  columnsHz: columnsHz,
  columnsSws: columnsSws,
  ywlx: ywlx
}
module.exports = model