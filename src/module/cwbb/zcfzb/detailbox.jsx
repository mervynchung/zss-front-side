import React from 'react'
import './style.css'

const detailBox = React.createClass({

    render(){
        const obj = this.props.data;
        //计算'流动资产合计_年初'
        let ldzchj_nc = obj.LDZC_HBZJ_NC + obj.LDZC_DQTZ_NC + obj.LDZC_YSPJ_NC +
          obj.LDZC_YSGL_NC + obj.LDZC_YSLX_NC + obj.LDZC_YSZK_NC +
          obj.LDZC_QTYS_NC + obj.LDZC_YFZK_NC + obj.LDZC_YSBT_NC +
          obj.LDZC_CH_NC + obj.LDZC_DTFY_NC + obj.LDZC_DQZJ_NC +
          obj.LDZC_QTLDZC_NC;
        ldzchj_nc = ldzchj_nc.toFixed(2);

        //计算'流动资产合计'
        let ldzchj = obj.LDZC_HBZJ + obj.LDZC_DQTZ + obj.LDZC_YSPJ +
          obj.LDZC_YSGL + obj.LDZC_YSLX + obj.LDZC_YSZK +
          obj.LDZC_QTYS + obj.LDZC_YFZK + obj.LDZC_YSBT +
          obj.LDZC_CH + obj.LDZC_DTFY + obj.LDZC_DQZJ +
          obj.LDZC_QTLDZC;
        ldzchj= ldzchj.toFixed(2);

        //生成日期
        let date = obj.TIMEVALUE == 1? '12月31日': '6月30日';
        date = obj.ND+'年'+date;

        return <div className="fix-table table-bordered table-striped">
            <table>
                <tbody>
                <tr>
                    <td colSpan="4">{obj.DWMC}</td>
                    <td colSpan="3">{date}</td>
                    <td>单位:元</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <th>资产</th>
                    <th>行次</th>
                    <th>年初数</th>
                    <th>期末数</th>
                    <th>负债及所有者权益（或股东权益）</th>
                    <th>行次</th>
                    <th>年初数</th>
                    <th>期末数</th>
                </tr>
                <tr>
                    <td colSpan="4">流动资产：</td>
                    <td colSpan="4">流动负债：</td>
                </tr>
                <tr>
                    <td>货币资金</td>
                    <td>1</td>
                    <td>{obj.LDZC_HBZJ_NC}</td>
                    <td>{obj.LDZC_HBZJ}</td>
                    <td>短期借债</td>
                    <td>33</td>
                    <td>{obj.LDFZ_DQJK_NC}</td>
                    <td>{obj.LDFZ_DQJK}</td>
                </tr>
                <tr>
                    <td>短期投资</td>
                    <td>2</td>
                    <td>{obj.LDZC_DQTZ_NC}</td>
                    <td>{obj.LDZC_DQTZ}</td>
                    <td>应付票据</td>
                    <td>34</td>
                    <td>{obj.LDFZ_YFPJ_NC}</td>
                    <td>{obj.LDFZ_YFPJ}</td>
                </tr>
                <tr>
                    <td>应收票据</td>
                    <td>3</td>
                    <td>{obj.LDZC_YSPJ_NC}</td>
                    <td>{obj.LDZC_YSPJ}</td>
                    <td>应付账款</td>
                    <td>35</td>
                    <td>{obj.LDFZ_YFZK_NC}</td>
                    <td>{obj.LDFZ_YFZK}</td>
                </tr>
                <tr>
                    <td>应收股利</td>
                    <td>4</td>
                    <td>{obj.LDZC_YSGL_NC}</td>
                    <td>{obj.LDZC_YSGL}</td>
                    <td>预收账款</td>
                    <td>36</td>
                    <td>{obj.LDFZ_YSZK_NC}</td>
                    <td>{obj.LDFZ_YSZK}</td>
                </tr>
                <tr>
                    <td>应收利息</td>
                    <td>5</td>
                    <td>{obj.LDZC_YSLX_NC}</td>
                    <td>{obj.LDZC_YSLX}</td>
                    <td>应付工资</td>
                    <td>37</td>
                    <td>{obj.LDFZ_YFGZ_NC}</td>
                    <td>{obj.LDFZ_YFGZ}</td>
                </tr>
                <tr>
                    <td>应收账款</td>
                    <td>6</td>
                    <td>{obj.LDZC_YSZK_NC}</td>
                    <td>{obj.LDZC_YSZK}</td>
                    <td>应付福利费</td>
                    <td>38</td>
                    <td>{obj.LDFZ_YFFL_NC}</td>
                    <td>{obj.LDFZ_YFFL}</td>

                </tr>
                <tr>
                    <td>其他应收款</td>
                    <td>7</td>
                    <td>{obj.LDZC_QTYS_NC}</td>
                    <td>{obj.LDZC_QTYS}</td>
                    <td>应付股利</td>
                    <td>39</td>
                    <td>{obj.LDFZ_YFGL_NC}</td>
                    <td>{obj.LDFZ_YFGL}</td>
                </tr>
                <tr>
                    <td>预付账款</td>
                    <td>8</td>
                    <td>{obj.LDZC_YFZK_NC}</td>
                    <td>{obj.LDZC_YFZK}</td>
                    <td>应缴税金</td>
                    <td>40</td>
                    <td>{obj.LDFZ_YJSJ_NC}</td>
                    <td>{obj.LDFZ_YJSJ}</td>
                </tr>
                <tr>
                    <td>应收补贴款</td>
                    <td>9</td>
                    <td>{obj.LDZC_YSBT_NC}</td>
                    <td>{obj.LDZC_YSBT}</td>
                    <td>其他应交款</td>
                    <td>41</td>
                    <td>{obj.LDFZ_QTYJ_NC}</td>
                    <td>{obj.LDFZ_QTYJ}</td>
                </tr>
                <tr>
                    <td>存货</td>
                    <td>10</td>
                    <td>{obj.LDZC_CH_NC}</td>
                    <td>{obj.LDZC_CH}</td>
                    <td>其他应付款</td>
                    <td>42</td>
                    <td>{obj.LDFZ_QTYF_NC}</td>
                    <td>{obj.LDFZ_QTYF}</td>
                </tr>
                <tr>
                    <td>待摊费用</td>
                    <td>11</td>
                    <td>{obj.LDZC_DTFY_NC}</td>
                    <td>{obj.LDZC_DTFY}</td>
                    <td>预提费用</td>
                    <td>43</td>
                    <td>{obj.LDFZ_YTFY_NC}</td>
                    <td>{obj.LDFZ_YTFY}</td>
                </tr>
                <tr>
                    <td>一年内到期的长期债券投资</td>
                    <td>12</td>
                    <td>{obj.LDZC_DQZJ_NC}</td>
                    <td>{obj.LDZC_DQZJ}</td>
                    <td>预计负债</td>
                    <td>44</td>
                    <td>{obj.LDFZ_YJFZ_NC}</td>
                    <td>{obj.LDFZ_YJFZ}</td>
                </tr>
                <tr>
                    <td>其他流动资产</td>
                    <td>13</td>
                    <td>{obj.LDZC_QTLDZC_NC}</td>
                    <td>{obj.LDZC_QTLDZC}</td>
                    <td>一年内到期的长期负债</td>
                    <td>45</td>
                    <td>{obj.LDFZ_DQFZ_NC}</td>
                    <td>{obj.LDFZ_DQFZ}</td>
                </tr>
                <tr>
                    <td>流动资产合计</td>
                    <td>14</td>
                    <td>{ldzchj_nc}</td>
                    <td>{ldzchj}</td>
                    <td>其他流动负债</td>
                    <td>46</td>
                    <td>{obj.LDFZ_QTFZ_NC}</td>
                    <td>{obj.LDFZ_QTFZ}</td>
                </tr>
                <tr>
                    <td colSpan="4">长期投资</td>
                    <td colSpan="4"> </td>
                </tr>
                <tr>
                    <td>长期股权投资</td>
                    <td>15</td>
                    <td>{obj.CQTZ_GQ_NC}</td>
                    <td>{obj.CQTZ_GQ}</td>
                    <td>流动负债合计</td>
                    <td>47</td>
                    <td>{obj.LDFZ_HJ_NC}</td>
                    <td>{obj.LDFZ_HJ}</td>
                </tr>
                <tr>
                    <td>长期债权投资</td>
                    <td>16</td>
                    <td>{obj.CQTZ_ZQ_NC}</td>
                    <td>{obj.CQTZ_ZQ}</td>
                    <td colSpan="4">长期负债</td>
                </tr>
                <tr>
                    <td>长期投资合计</td>
                    <td>17</td>
                    <td>{obj.CQTZ_HJ_NC}</td>
                    <td>{obj.CQTZ_HJ}</td>
                    <td>长期借款</td>
                    <td>48</td>
                    <td>{obj.CQFZ_CQJK_NC}</td>
                    <td>{obj.CQFZ_CQJK}</td>
                </tr>
                <tr>
                    <td colSpan="4">固定资产</td>
                    <td>应付债券</td>
                    <td>49</td>
                    <td>{obj.CQFZ_YFZQ_NC}</td>
                    <td>{obj.CQFZ_YFZQ}</td>

                </tr>
                <tr>
                    <td>固定资产原价</td>
                    <td>18</td>
                    <td>{obj.GDZC_YJ_NC}</td>
                    <td>{obj.GDZC_YJ}</td>
                    <td>长期应付款</td>
                    <td>50</td>
                    <td>{obj.CQFZ_CQYF_NC}</td>
                    <td>{obj.CQFZ_CQYF}</td>
                </tr>
                <tr>
                    <td>减：累计折旧</td>
                    <td>19</td>
                    <td>{obj.GDZC_LJZJ_NC}</td>
                    <td>{obj.GDZC_LJZJ}</td>
                    <td>专项应付款</td>
                    <td>51</td>
                    <td>{obj.CQFZ_ZXYF_NC}</td>
                    <td>{obj.CQFZ_ZXYF}</td>
                </tr>
                <tr>
                    <td colSpan="4"></td>
                    <td>职业风险基金</td>
                    <td>52</td>
                    <td>{obj.CQFZ_ZYFXJJ_NC}</td>
                    <td>{obj.CQFZ_ZYFXJJ}</td>
                </tr>
                <tr>
                    <td>固定资产净值</td>
                    <td>20</td>
                    <td>{obj.GDZC_JZ_NC}</td>
                    <td>{obj.GDZC_JZ}</td>
                    <td>其他长期负债</td>
                    <td>53</td>
                    <td>{obj.CQFZ_QTFZ_NC}</td>
                    <td>{obj.CQFZ_QTFZ}</td>
                </tr>
                <tr>
                    <td>减：固定资产减值准备</td>
                    <td>21</td>
                    <td>{obj.GDZC_JZZB_NC}</td>
                    <td>{obj.GDZC_JZZB}</td>
                    <td>长期负债合计</td>
                    <td>54</td>
                    <td>{obj.CQFZ_HJ_NC}</td>
                    <td>{obj.CQFZ_HJ}</td>
                </tr>
                <tr>
                    <td>固定资产净额</td>
                    <td>22</td>
                    <td>{obj.GDZC_JE_NC}</td>
                    <td>{obj.GDZC_JE}</td>
                    <td colSpan="4">递延税项：</td>
                </tr>
                <tr>
                    <td>工程物资</td>
                    <td>23</td>
                    <td>{obj.GDZC_GCWZ_NC}</td>
                    <td>{obj.GDZC_GCWZ}</td>
                    <td>递延税款贷项</td>
                    <td>55</td>
                    <td>{obj.DYSX_DYSKDX_NC}</td>
                    <td>{obj.DYSX_DYSKDX}</td>
                </tr>
                <tr>
                    <td>在建工程</td>
                    <td>24</td>
                    <td>{obj.GDZC_ZJGC_NC}</td>
                    <td>{obj.GDZC_ZJGC}</td>
                    <td>负债合计</td>
                    <td>56</td>
                    <td>{obj.DYSX_FZHJ_NC}</td>
                    <td>{obj.DYSX_FZHJ}</td>
                </tr>
                <tr>
                    <td>固定资产清理</td>
                    <td>25</td>
                    <td>{obj.GDZC_QL_NC}</td>
                    <td>{obj.GDZC_QL}</td>
                    <td colSpan="4"></td>
                </tr>
                <tr>
                    <td>固定资产合计</td>
                    <td>26</td>
                    <td>{obj.GDZC_HJ_NC}</td>
                    <td>{obj.GDZC_HJ}</td>
                    <td colSpan="4">所有者权益（或股东权益）：</td>
                </tr>
                <tr>
                    <td colSpan="4">无形资产及其他资产：</td>
                    <td>实收资本</td>
                    <td>57</td>
                    <td>{obj.SYZQY_SSZB_NC}</td>
                    <td>{obj.SYZQY_SSZB}</td>
                </tr>
                <tr>
                    <td>无形资产</td>
                    <td>27</td>
                    <td>{obj.WXQT_WXZC_NC}</td>
                    <td>{obj.WXQT_WXZC}</td>
                    <td>减：已归还投资</td>
                    <td>58</td>
                    <td>{obj.SYZQY_YHTZ_NC}</td>
                    <td>{obj.SYZQY_YHTZ}</td>
                </tr>
                <tr>
                    <td>长期待摊费用</td>
                    <td>28</td>
                    <td>{obj.WXQT_CQDT_NC}</td>
                    <td>{obj.WXQT_CQDT}</td>
                    <td>实收资本（股本）净额</td>
                    <td>59</td>
                    <td>{obj.SYZQY_SSZBJE_NC}</td>
                    <td>{obj.SYZQY_SSZBJE}</td>
                </tr>
                <tr>
                    <td>其他长期资产</td>
                    <td>29</td>
                    <td>{obj.WXQT_QTCQ_NC}</td>
                    <td>{obj.WXQT_QTCQ}</td>
                    <td>资本公积</td>
                    <td>60</td>
                    <td>{obj.SYZQY_ZBGJ_NC}</td>
                    <td>{obj.SYZQY_ZBGJ}</td>
                </tr>
                <tr>
                    <td>无形资产和其他资产合计</td>
                    <td>30</td>
                    <td>{obj.WXQT_HJ_NC}</td>
                    <td>{obj.WXQT_HJ_NC}</td>
                    <td>盈余公积</td>
                    <td>61</td>
                    <td>{obj.SYZQY_YYGJ_NC}</td>
                    <td>{obj.SYZQY_YYGJ}</td>
                </tr>
                <tr>
                    <td colSpan="4">递延税项：</td>
                    <td>未分配利润</td>
                    <td>62</td>
                    <td>{obj.SYZQY_WFPLR_NC}</td>
                    <td>{obj.SYZQY_WFPLR}</td>
                </tr>
                <tr>
                    <td>递延税款借项</td>
                    <td>31</td>
                    <td>{obj.YDSX_SKJX_NC}</td>
                    <td>{obj.YDSX_SKJX}</td>
                    <td>所有者权益(或股东权益)合计</td>
                    <td>63</td>
                    <td>{obj.SYZQY_HJ_NC}</td>
                    <td>{obj.SYZQY_HJ}</td>
                </tr>
                <tr>
                    <td>资产总计</td>
                    <td>32</td>
                    <td>{obj.ZCZJ_NC}</td>
                    <td>{obj.ZCZJ}</td>
                    <td>负债和所有者权益(或股东权益)合计</td>
                    <td>64</td>
                    <td>{obj.FZSYZQY_HJ_NC}</td>
                    <td>{obj.FZSYZQY_HJ}</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td colSpan="3">所长：{obj.SZ}</td>
                    <td colSpan="3">主管会计：{obj.ZGKJ}</td>
                    <td colSpan="2">制表人：{obj.ZBR}</td>
                </tr>
                </tbody>
            </table>
        </div>
    }
});

module.exports = detailBox;