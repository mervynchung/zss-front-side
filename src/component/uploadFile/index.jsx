import {Modal, Button,Upload,Icon,message,notification } from 'antd';
import req from 'common/request';
import React from 'react';
import auth from 'common/auth';
import config from 'common/configuration'

const API_URL_DELFILE = config.HOST + config.URI_API_FRAMEWORK + '/delfile';
const API_URL_INSERTDB = config.HOST + config.URI_API_FRAMEWORK + '/insertFile';
const API_URL_DELDB = config.HOST + config.URI_API_FRAMEWORK + '/upadteDelFile';

/**
 * 组件使用：引入组件（形式为一个上传按钮），用ref方式调用组件方法。
 * 组件方法：
 * getFileName()：获取已上传文件文件名称；
 * getURL()：获取已上传文件路径；
 * getValueByMap()：以map形式获取文件名称及路径；
 * setDBInsert(map={fileName:111,uploadUrl:222})：插入文件对照表（默认插入已上传文件，可带参数指定文件名和路径插入，插入前自动检测文件是否已存在）；
 * setOrgDBDel()：置原上传文件（若存在）记录为无效；
 * setFileDel()：删除上传文件（可带参数删除指定文件）；
 * 
 * 组件默认上传路径：/api/upload/files；默认已上传文件为false；默认显示已上传列表；
 * 传入已上传文件url（数据库中存在且有效标志为有效）将在已上传列表中显示；
 * 
 * 组件属性：
 * action:上传文件路径；
 * showUploadList：是否显示上传列表，默认为true；
 * initialUrl：初始已上传文件路径
 * 
 * 
 */
const uploadYY = React.createClass({
  getDefaultProps(){
      return {
        action:'/api/upload/files',
        showUploadList:true,
        initialUrl:false,
      };
  },
  getInitialState() {
    return {
      
    };
  },
  getFileName(){
      return this.state.fileName;
  },
  getURL(){
      return this.state.addUrl;
  },
  getValueByMap(){
    return {"fileName":this.state.fileName,"uploadUrl":this.state.addUrl}
  },
  setDBInsert(parm={"fileName":this.state.fileName,"uploadUrl":this.state.addUrl}){
        this.insertDB(parm);
  },
  setOrgDBDel(){
    if(!!this.props.initialUrl){
        this.delDB(this.props.initialUrl);
    }
  },
  setFileDel(url=this.state.addUrl){
    if(!!url){
        this.delfile(url);
    }
  },
  insertDB(parm){
    req({
            url: API_URL_INSERTDB,
            type: 'json',
            data:parm,
            method: 'post',
        })
  },
  delDB(url){
    req({
            url: API_URL_DELDB,
            type: 'json',
            data:url,
            method: 'put',
        })
  },
  delfile(url){
      req({
            url: API_URL_DELFILE,
            type: 'json',
            data:url,
            method: 'delete',
        })
  },
  componentDidMount(){
      //根据url是否有值判断是否显示已上传列表
        if(!!this.props.initialUrl){
            req({
                url:'/api/getFileName',
                type: 'json',
                method: 'get',
                data:{where:this.props.initialUrl},
            }).then(resp=>{
                if(typeof resp.rep !="undefined"){
                    this.setState({
                        fileList:[{ uid:'1',
                            name: resp.rep,
                            url: this.props.initialUrl,
                                         }],
                        fileName:resp.rep,
                        addUrl:this.props.initialUrl
                    })
                }
            }).catch(err=> {
            Modal.error({
                title: '数据获取错误',
                content: (
                    <div>
                        <p>网络访问故障，请刷新重试</p>
                        <p>Status: {err.status}</p>
                    </div>  )
            });
        })
        }

    },
  render() {
      const propValue=this.props;
      var that=this;
      const props = {
            showUploadList: propValue.showUploadList,
            name: 'file',
            action: propValue.action,
            headers: {'x-auth-token': auth.getToken()},
            onChange(info) {
                let fileList = info.fileList;
                // 读取服务器路径并显示链接
                fileList = fileList.map((file) => {
                if (file.response) {
                    // 组件会将 file.url 作为链接进行展示
                    file.url = file.response.text;
                }
                return file;
                });
               if (info.file.status == 'uploading') {
                    // that.setState({letValues:that.refs.addValues.getFieldsValue()});
                }
                if (info.file.status == 'done') {
                    that.setState({addUrl:info.file.response.text,fileName:info.file.name});
                } else if (info.file.status == 'error') {
                    Modal.error({
                        title: '上传失败',
                        content: (<p>{info.file.name}文件上传失败,请检查网络</p>)
                    });
                }
                that.setState({fileList})
            },
            onRemove(file){
                // let list=that.state.fileList;
                // for(var i=0; i<list.length; i++) {
                //     if(list[i] == file) {
                //     list.splice(i, 1);
                //     break;
                //     }
                // }
                that.delfile(file.url);
                that.setOrgDBDel();
                that.setState({fileList:[],addUrl:false})
            },
            beforeUpload(file) {
                console.log("uploading...");
                // if (file.type.indexOf('image')<0) {
                //     message.error('只能上传图片类型文件');
                //     return false;
                // }
                if (that.state.addUrl) {//根据url是否有值判断
                    Modal.error({
                        title: '上传错误',
                        content: (<p>仅允许上传单个文件，若要重新上传请先删除已上传文件</p>)
                    });
                    return false;
                }
                if (file.size>10485760) {
                    Modal.error({
                        title: '上传错误',
                        content: (<p>文件大小不能超过10M</p>)
                    });
                    return false;
                }
                return true;
            }
        };
    return (
          <Upload {...props} fileList={this.state.fileList} ><Button ><Icon type="upload" />上传文件</Button></Upload>
    );
  },
});
module.exports = uploadYY;