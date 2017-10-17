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

import BaseInfo from '../components/planManagement/BaseInfo'
import FixingDateInfo from '../components/planManagement/FixingDateInfo'
import FixingDate from '../components/planManagement/FixingDate'
import Portfolio from '../components/planManagement/Portfolio'
import GuidepostsInfo from '../components/planManagement/GuidepostsInfo'
import Guideposts from '../components/planManagement/Guideposts'
import RiskManagementInfo from '../components/planManagement/RiskManagementInfo'
import RiskManagement from '../components/planManagement/RiskManagement'

import ServiceInfo from '../components/organizationManagement/ServiceInfo'
import Service from '../components/organizationManagement/Service'
import BaseInfo1 from '../components/organizationManagement/BaseInfo-1'
import Base from '../components/organizationManagement/Base'
import ChangeConditionInfo from '../components/organizationManagement/ChangeConditionInfo'
import ChangeCondition from '../components/organizationManagement/ChangeCondition'

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
import PersonalInterests from '../components/accountManagement/personalAccount/PersonalInterests'
import PersonalInterestsInfo from '../components/accountManagement/personalAccount/PersonalInterestsInfo'


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
                    <IndexRedirect to="/app/dashboard/index" />
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
                                <Route path="personalInterests" component={PersonalInterests} />
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
                            <Route path="portfolio" component={Portfolio} />
                            <Route path="fixingDateInfo" component={FixingDateInfo} />
                            <Route path="fixingDate" component={FixingDate} />
                            <Route path="guidepostsInfo" component={GuidepostsInfo} />
                            <Route path="guideposts" component={Guideposts} />
                            <Route path="riskManagementInfo" component={RiskManagementInfo} />
                            <Route path="riskManagement" component={RiskManagement} />
                        </Route>
                        <Route path={'dashboard/index'} component={Dashboard} />
                        <Route path="auth">
                            <Route path="basic" component={AuthBasic} />
                            <Route path="routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />
                        </Route>
                    </Route>
                    <Route path={'login'} components={Login} />
                    <Route path={'404'} component={NotFound} />
                </Route>
            </Router>
        )
    }
}