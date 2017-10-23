/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../App';
import Page from '../components/Page';
import BasicForm from '../components/forms/BasicForm';
import Login from '../components/pages/Login';
import Dashboard from '../components/dashboard/Dashboard';
import NotFound from '../components/pages/NotFound';
import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';

// 计划管理
import BaseInfo from '../components/planManagement/BaseInfo'
import BaseInfoInfo from '../components/planManagement/BaseInfoInfo'
import FixingDateInfo from '../components/planManagement/FixingDateInfo'
import FixingDate from '../components/planManagement/FixingDate'
import Portfolio from '../components/planManagement/Portfolio'
import PortfolioInfo from '../components/planManagement/PortfolioInfo'
import GuidepostsInfo from '../components/planManagement/GuidepostsInfo'
import Guideposts from '../components/planManagement/Guideposts'
import RiskManagementInfo from '../components/planManagement/RiskManagementInfo'
import RiskManagement from '../components/planManagement/RiskManagement'
import InterestMessageInfo from '../components/planManagement/InterestMessageInfo'
import InterestMessage from '../components/planManagement/InterestMessage'
import Zhanghuguanlifei from '../components/planManagement/Zhanghuguanlifei'
import ZhanghuguanlifeiInfo from '../components/planManagement/ZhanghuguanlifeiInfo'
import DaiyuzhifuInfo from '../components/planManagement/DaiyuzhifuInfo'
import Daiyuzhifu from '../components/planManagement/Daiyuzhifu'

// 机构管理
import ServiceInfo from '../components/organizationManagement/ServiceInfo'
import Service from '../components/organizationManagement/Service'
import BaseInfo1 from '../components/organizationManagement/BaseInfo-1'
import Base from '../components/organizationManagement/Base'
import ChangeConditionInfo from '../components/organizationManagement/ChangeConditionInfo'
import ChangeCondition from '../components/organizationManagement/ChangeCondition'

//账户管理
import CorporateBase from '../components/accountManagement/corporateAccount/CorporateBase'
import CorporateBaseInfo from '../components/accountManagement/corporateAccount/CorporateBaseInfo'
import PaymentMessage from '../components/accountManagement/corporateAccount/PaymentMessage'
import PaymentMessageInfo from '../components/accountManagement/corporateAccount/PaymentMessageInfo'
import PaymentRule from '../components/accountManagement/corporateAccount/PaymentRule'
import PaymentRuleInfo from '../components/accountManagement/corporateAccount/PaymentRuleInfo'
import Account from '../components/accountManagement/personalAccount/Account'
import AccountInfo from '../components/accountManagement/personalAccount/AccountInfo'
import PersonalBase from '../components/accountManagement/personalAccount/PersonalBase'
import PersonalBaseInfo from '../components/accountManagement/personalAccount/PersonalBaseInfo'
import PersonalInterestsInfo from '../components/accountManagement/personalAccount/PersonalInterestsInfo'

//运作管理

//接口管理
import DataImport from '../components/interface/DataImport'

//报表管理
import Funds from '../components/reportManagement/operational/Funds'
import Confirm from '../components/reportManagement/operational/Confirm'
import Directive from '../components/reportManagement/operational/Directive'
import Fuzhai from '../components/reportManagement/publish/Fuzhai'
import Biandong from '../components/reportManagement/publish/Biandong'

//信息查询
import CorporatePaySearch from '../components/informationSearch/corporate/CorporatePaySearch'
import CorporatePaySearchInfo from '../components/informationSearch/corporate/CorporatePaySearchInfo'
import PersonalSearch from '../components/informationSearch/personally/PersonalSearch'
import PersonalSearchInfo from '../components/informationSearch/personally/PersonalSearchInfo'
import Jiben from '../components/informationSearch/personally/jiben'
import quanyi from '../components/informationSearch/personally/quanyi'
import jiaofei from '../components/informationSearch/personally/jiaofei'
import daiyuzhifu from '../components/informationSearch/personally/daiyuzhifu'
import danweijiaofei from '../components/informationSearch/corporate/danweijiaofei'
const Wysiwyg = (location, cb) => {     // 按需加载富文本配置
    require.ensure([], require => {
        cb(null, require('../components/ui/Wysiwyg').default);
    }, 'Wysiwyg');
};

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { store } = this.props;
        const { auth } = store.getState().httpData;
        if (!auth || !auth.data.permissions.includes(permission)) hashHistory.replace('/404');
        return component;
    };
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={'/'} components={Page}>
                    <IndexRedirect to="/app/informationSearch/personally/jiben" />
                    <Route path={'app'} component={App}>
                        <Route path={'form'}>
                            <Route path={'basicForm'} component={BasicForm} />
                        </Route>
                        {/* 账户管理 */}
                        <Route path="accountManagement">
                            <Route path="corporateAccount">
                                <Route path="corporateBase" component={CorporateBase} />
                                <Route path="corporateBaseInfo" component={CorporateBaseInfo} />
                                <Route path="paymentMessage" component={PaymentMessage} />
                                <Route path="paymentMessageInfo" component={PaymentMessageInfo} />
                                <Route path="paymentRule" component={PaymentRule} />
                                <Route path="paymentRuleInfo" component={PaymentRuleInfo} />
                            </Route>
                            <Route path="personalAccount">
                                <Route path="account" component={Account} />
                                <Route path="accountInfo" component={AccountInfo} />
                                <Route path="personalBase" component={PersonalBase} />
                                <Route path="personalBaseInfo" component={PersonalBaseInfo} />
                                <Route path="personalInterestsInfo" component={PersonalInterestsInfo} />
                            </Route>
                        </Route>
                        {/* 机构管理 */}
                        <Route path="organizationManagement">
                            <Route path="serviceInfo" component={ServiceInfo} />
                            <Route path="service" component={Service} />
                            <Route path="baseInfo1" component={BaseInfo1} />
                            <Route path="base" component={Base} />
                            <Route path="changeConditionInfo" component={ChangeConditionInfo} />
                            <Route path="changeCondition" component={ChangeCondition} />
                        </Route>
                        {/* 计划管理 */}
                        <Route path="planManagement">
                            <Route path="baseInfo" component={BaseInfo} />
                            <Route path="BaseInfoInfo" component={BaseInfoInfo} />
                            <Route path="portfolio" component={Portfolio} />
                            <Route path="portfolioInfo" component={PortfolioInfo} />
                            <Route path="fixingDateInfo" component={FixingDateInfo} />
                            <Route path="fixingDate" component={FixingDate} />
                            <Route path="guidepostsInfo" component={GuidepostsInfo} />
                            <Route path="guideposts" component={Guideposts} />
                            <Route path="riskManagementInfo" component={RiskManagementInfo} />
                            <Route path="riskManagement" component={RiskManagement} />
                            <Route path="Zhanghuguanlifei" component={Zhanghuguanlifei} />
                            <Route path="ZhanghuguanlifeiInfo" component={ZhanghuguanlifeiInfo} />
                            <Route path="interestMessageInfo" component={InterestMessageInfo} />
                            <Route path="interestMessage" component={InterestMessage} />
                            <Route path="daiyuzhifuInfo" component={DaiyuzhifuInfo} />
                            <Route path="daiyuzhifu" component={Daiyuzhifu} />
                        </Route>
                        {/* 运作管理 */}


                        {/* 接口管理 */}
                        <Route path="interface">
                            <Route path="dataImport" component={DataImport} />
                        </Route>
                        {/* 报表管理 */}
                        <Route path="reportManagement">
                            <Route path="operational">
                                <Route path="funds" component={Funds} />
                                <Route path="confirm" component={Confirm} />
                                <Route path="directive" component={Directive} />
                            </Route>
                            <Route path="publish">
                                <Route path="fuzhai" component={Fuzhai} />
                                <Route path="biandong" component={Biandong} />
                            </Route>
                        </Route>
                        {/* 信息查询 */}
                        <Route path="informationSearch">
                            <Route path="corporate">
                                <Route path="corporatePaySearch" component={CorporatePaySearch} />
                                <Route path="corporatePaySearchInfo" component={CorporatePaySearchInfo} />
                                <Route path="danweijiaofei" component={danweijiaofei} />
                            </Route>
                            <Route path="personally">
                                <Route path="personalSearch" component={PersonalSearch} />
                                <Route path="personalSearchInfo" component={PersonalSearchInfo} />
                                <Route path="jiben" component={Jiben} />
                                <Route path="quanyi" component={quanyi} />
                                <Route path="jiaofei" component={jiaofei} />
                                <Route path="daiyuzhifu" component={daiyuzhifu} />
                            </Route>
                        </Route>

                        <Route path={'dashboard/index'} component={Dashboard} />
                        <Route path="auth">
                            <Route path="basic" component={AuthBasic} />
                            <Route path="routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />
                        </Route>
                    </Route>
                    <Route path={'login'} components={Login} />
                    <Route path={'*'} component={NotFound} />
                </Route>
            </Router>
        )
    }
}