import React from 'react';

interface DayForecast {
    date: string;
    day: {
        condition: {
            icon: string;
            text: string;
        };
        maxtemp_f: number;
        mintemp_f: number;
    };
}

interface WeekForecastProps {
    data: {
        forecast?: {
            forecastday: DayForecast[];
        };
    };
}

function WeekForcast({ data }: WeekForecastProps) {
    return (
        <div className='grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full'>
            {data.forecast.forecastday.map((day, index) => (
                <div key={index} className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
                    <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
                    <p></p>
                    <img src={day.day.condition.icon} alt={day.day.condition.text}></img>
                    <div>
                        <p>High {day.day.maxtemp_c.toFixed()}°C</p>
                        <p>Low {day.day.mintemp_c.toFixed()}°C</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default WeekForcast