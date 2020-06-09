import 'font-awesome/fonts/fontawesome-webfont.svg';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import './Dash.scss';
import Navbar from './navbar/Navbar';
import Store from './pages/store/Store';
import { addWidget } from './services/WidgetService';
import TabDash from './tab/TabDash';
import logger from './utils/LogUtils';

export interface IMenu {
	link: string;
	icon: string;
}

export default function Dash(props: any) {
	const [tabs, setTabs] = useState([]);
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab: string) => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	const onWidgetAdded = (type: any) => {
		addWidget(type.target.value)
			.then((response) => {
				if (response) {
					// const widgetData: IWidgetConfig = response.data;
					// this.createWidget(widgetData);
					// this.setState({ widgets: this.state.widgets.concat(widgetData) })
				}
			})
			.catch(error => {
				logger.error(error.message);
			})
	}

	const navItems: IMenu[] = [
		{
			link: '/',
			icon: 'fa fa-home fa-lg'
		},
		{
			link: '/store',
			icon: 'fa fa-plus-circle fa-lg'
		},
		{
			link: '/profile',
			icon: 'fa fa-user fa-lg'
		}
	];

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/tab/`)
			.then((result) => {
				return result.json();
			})
			.then(result => {
				setTabs(result);
				setActiveTab(result[0].id.toString())
			})
			.catch((error: Error) => {
				logger.error(error.message);
			});
	}, []);

	return (
		<div className="dash">
			<Router>
				<div className='flexRow'>
					<Navbar navItems={navItems} />

					<Switch>
						<Route exact={true} path="/">
							<div className='flexColumn tabsBar'>
								<Nav tabs={true}>
									{
										tabs.map((tab: any) => {
											return (
												<NavItem className="clickable-item" key={tab.id}>
													<NavLink onClick={() => { toggle(tab.id.toString()); }}>
														{tab.label}
													</NavLink>
												</NavItem>
											)
										})
									}
								</Nav>
								<TabContent activeTab={activeTab}>
									{tabs.map((tab: any) => {
										return (
											<TabDash key={tab.id} tabId={tab.id.toString()} />
										)
									})
									}
								</TabContent>
							</div>
						</Route>
						<Route path="/store">
							<Store onWidgetAdded={onWidgetAdded} />
						</Route>
						<Route path="/profile">

						</Route>
					</Switch>
				</div>
			</Router>
		</div >
	);
}
