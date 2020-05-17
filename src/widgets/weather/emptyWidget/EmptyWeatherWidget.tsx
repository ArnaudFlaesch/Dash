import * as React from 'react';
import "./EmptyWeatherWidget.scss";

interface IProps {
    weather_api_key?: string;
	city?: string;
    onConfigSubmitted: (weatherApiKey: string, city: string) => void;
}

interface IState {
    weather_api_key: string;
	city: string;
}

export default class EmptyWeatherWidget extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.onWeatherApiKeyChangeHandler = this.onWeatherApiKeyChangeHandler.bind(this);
        this.onCityChangeHandler = this.onCityChangeHandler.bind(this);
        this.onValidation = this.onValidation.bind(this);
    }

    public onWeatherApiKeyChangeHandler(event: any) {
        this.setState({weather_api_key: event.target.value});
    }

    public onCityChangeHandler(event: any) {
        this.setState({city: event.target.value});
    }

    public onValidation() {
        this.props.onConfigSubmitted(this.state.weather_api_key, this.state.city);
    }

    public render() {
        return (
            <div>
                <input name="url" onChange={this.onWeatherApiKeyChangeHandler} value={this.state.weather_api_key} placeholder="Saisissez la cle d'API"/>
                <input name="url" onChange={this.onCityChangeHandler} value={this.state.city} placeholder="Saisissez de nom de la ville"/>
                <button onClick={this.onValidation} disabled={this.state?.city.length < 1 || this.state?.city.length < 1 } className="btn btn-success">Valider</button>
            </div>
        )
    }
}