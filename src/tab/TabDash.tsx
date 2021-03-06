import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TabPane } from 'reactstrap';
import authorizationBearer from 'src/services/auth.header';
import FacebookWidget from 'src/widgets/facebook/FacebookWidget';
import SteamWidget from 'src/widgets/steam/SteamWidget';
import { WidgetTypes } from '../enums/WidgetsEnum';
import { ITabState } from '../reducers/tabReducer';
import { deleteWidget } from '../services/widget.service';
import logger from '../utils/LogUtils';
import CalendarWidget from '../widgets/calendar/CalendarWidget';
import { IWidgetConfig } from '../widgets/IWidgetConfig';
import RSSWidget from '../widgets/rss/RSSWidget';
import StravaWidget from '../widgets/strava/StravaWidget';
import WeatherWidget from '../widgets/weather/WeatherWidget';

interface IProps {
  tabId: number;
  newWidget?: IWidgetConfig;
}

export default function TabDash(props: IProps): React.ReactElement {
  const [widgets, setWidgets] = useState([]);
  const activeTab = useSelector((state: ITabState) => state.activeTab);

  useEffect(() => {
    if (activeTab === props.tabId) {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/widget/?tabId=${props.tabId}`,
        {
          headers: {
            Authorization: authorizationBearer(),
            'Content-type': 'application/json'
          }
        }
      )
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          setWidgets(result);
        })
        .catch((error: Error) => {
          logger.error(error.message);
        });
    }
  }, [activeTab]);

  useEffect(() => {
    if (props.newWidget) {
      setWidgets((widgets as IWidgetConfig[]).concat([props.newWidget]) as []);
    }
  }, [props.newWidget != null && props.newWidget.id]);

  function createWidget(widgetConfig: IWidgetConfig) {
    switch (widgetConfig.type) {
      case WidgetTypes.WEATHER: {
        return (
          <WeatherWidget
            id={widgetConfig.id}
            tabId={widgetConfig.tab.id}
            {...widgetConfig.data}
            onDeleteButtonClicked={deleteWidgetFromDashboard}
          />
        );
      }
      case WidgetTypes.RSS: {
        return (
          <RSSWidget
            id={widgetConfig.id}
            tabId={widgetConfig.tab.id}
            {...widgetConfig.data}
            onDeleteButtonClicked={deleteWidgetFromDashboard}
          />
        );
      }
      case WidgetTypes.CALENDAR: {
        return (
          <CalendarWidget
            id={widgetConfig.id}
            tabId={widgetConfig.tab.id}
            {...widgetConfig.data}
            onDeleteButtonClicked={deleteWidgetFromDashboard}
          />
        );
      }
      case WidgetTypes.STRAVA: {
        return (
          <StravaWidget
            id={widgetConfig.id}
            tabId={widgetConfig.tab.id}
            {...widgetConfig.data}
            onDeleteButtonClicked={deleteWidgetFromDashboard}
          />
        );
      }
      case WidgetTypes.STEAM: {
        return (
          <SteamWidget
            id={widgetConfig.id}
            tabId={widgetConfig.tab.id}
            {...widgetConfig.data}
            onDeleteButtonClicked={deleteWidgetFromDashboard}
          />
        );
      }
      default: {
        return;
      }
    }
  }

  function deleteWidgetFromDashboard(id: number) {
    deleteWidget(id)
      .then((response) => {
        if (response) {
          setWidgets(
            widgets.filter((widget: IWidgetConfig) => {
              return widget.id !== id;
            })
          );
        }
      })
      .catch((error: Error) => {
        logger.error(error.message);
      });
  }

  return (
    <TabPane tabId={props.tabId}>
      <div className="widgetList">
        <FacebookWidget />
        {widgets &&
          widgets.length > 0 &&
          widgets.map((widgetConfig: IWidgetConfig) => {
            return (
              <div key={widgetConfig.id} className="widget">
                {createWidget(widgetConfig)}
              </div>
            );
          })}
      </div>
    </TabPane>
  );
}
