export interface IWeatherAPIResponse {
    cod: string;
    message: number;
    cnt: number;
    list: IForecast[];
    city: ICity;
}

export interface ICity {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    }
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface IForecast {
    dt: number;
    dt_text: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    },
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }],
    clouds: {
        all: number
    },
    wind: {
        speed: number;
        deg: number;
    },
    sys: {
        pod: string
    }
}