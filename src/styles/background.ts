export const getBackgroundApp = (stateOfWeather: string, location?: any): string => {
    if (location !== '/today'){
        return `#F9F9F9`
    }
    
    if ((/Cloud/).test(stateOfWeather) || (/Rain/).test(stateOfWeather)) {
        return `#EAEAEA`;
    } else if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather) || (/Showers/).test(stateOfWeather)) {
        return `#FFF7E0`;
    } else {
        return `#F9F9F9`
    }
}

export const getBackgroundCard = (stateOfWeather: string): string => {
    if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather) || (/Showers/).test(stateOfWeather) || (/Light Cloud/).test(stateOfWeather)) {
        return `#FFF7E0`;
    } else if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather) || (/Showers/).test(stateOfWeather) || (/Light Cloud/).test(stateOfWeather)) {
        return `#FFF7E0`;
    } else {
        return `#F9F9F9`
    }
}