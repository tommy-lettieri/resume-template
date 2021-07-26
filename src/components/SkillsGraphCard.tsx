import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { getColorString, HSL, MAX_COLOR_VALUE } from '../utilities/ColorUtils';

interface InputData {
    [key: string]: number;
}

interface InputDataSorter {
    (inputData: InputData): InputData;
}

interface ColorIterationTransformer {
    (current: HSL, iteration: number, arrayLength: number): HSL;
}

interface DataTransformOptions {
    name: string;
    inputData: InputData;
    hue?: number;
    saturation?: number;
    lightness?: number;
    colorIterationTransformer?: ColorIterationTransformer;
}

const dataTransform = ({ name, inputData, hue = 200, saturation = 0.5, lightness = 0.5, colorIterationTransformer }: DataTransformOptions): Chart['data'] => {
    const result: Chart['data'] = {
        labels: [],
        datasets: [{
            // label: name,
            data: [],
            backgroundColor: [],
            borderWidth: 1,
        }]
    };
    Object.entries(inputData).forEach(([key, value], index, arr) => {
        result.labels?.push(key);
        result.datasets[0]?.data.push(value);

        const colorObject = {
            hue: hue,
            saturation: saturation,
            lightness: lightness,
        };

        (result.datasets[0]?.backgroundColor as string[] | undefined)?.push(`#${getColorString(colorIterationTransformer?.(colorObject, index, arr.length) ?? colorObject)}80`);
    });
    return result;
};

export const colorIterationTransformers = {
    colorGradientIterationTransformer: (current: HSL, iteration: number, arrayLength: number) => ({
        ...current,
        hue: (MAX_COLOR_VALUE / arrayLength) * iteration,
    }),
    saturationGradientIterationTransformer: (current: HSL, iteration: number, arrayLength: number) => ({
        ...current,
        saturation: (1 / arrayLength) * iteration,
    }),
};
// Just for validation without losing inferred type
colorIterationTransformers as { [key: string]: ColorIterationTransformer };

export const inputDataSorters = {
    sort: (inputData: InputData): InputData => {
        const result: InputData = {};
        const array = Object.entries(inputData).sort((a, b) => b[1] - a[1]);
    
        array.forEach(([key, value]) => {
            result[key] = value;
        });
    
        return result;
    },
    sortMaxOnTop: (inputData: InputData): InputData => {
        const result: InputData = {};
        const array = Object.entries(inputData).sort((a, b) => b[1] - a[1]);
    
        for(let i = 0; i < (array.length / 4); i++) {
            // TODO fix typing to just declare it as not null
            array.push(array.shift() as [string, number]);
        }
        array.forEach(([key, value]) => {
            result[key] = value;
        });
    
        return result;
    },
    everyOtherHigh: (inputData: InputData): InputData => {
        const result: InputData = {};
        const array = Object.entries(inputData).sort((a, b) => b[1] - a[1]);
    
        for(let i = 0; i < (array.length / 2); i++) {
            const element = array.pop() as [string, number];
            array.splice((i * 2) + 1, 0, element);
        }
        array.forEach(([key, value]) => {
            result[key] = value;
        });
    
        return result;
    },    
};
// Just for validation without losing inferred type
inputDataSorters as { [key: string]: InputDataSorter };

export interface SkillsCardProps {
    name: string;
    data: InputData;
    hue?: number;
    saturation?: number;
    lightness?: number;
    width?: string | number;
    height?: string | number;
    graphWidth?: number;
    graphHeight?: number;
    colorIterationTransformer?: ColorIterationTransformer;
    colorIterationTransformerName?: string;
    inputDataSorter?: InputDataSorter;
    inputDataSorterName?: string;
    style?: React.CSSProperties;
    fontSize?: number;
}
export const SkillsGraphCard = ({
    name,
    data,
    hue = 200,
    saturation = 0.5,
    lightness = 0.25,
    width,
    height,
    colorIterationTransformer,
    inputDataSorter,
    inputDataSorterName,
    colorIterationTransformerName,
    graphWidth,
    graphHeight,
    style,
    fontSize,
}: SkillsCardProps) => {
    return <div className='zrt-skill-chart' style={{
        backgroundColor: '#FFFFFF',
        maxWidth: '100%',
        width: width,
        height: height,
        margin: '5px 0px',
        textAlign: 'center',
        padding: '10px',
        ...style
    }}
    >
        <h2 style={{margin: '0px'}}>{name}</h2>
        <Bar
            width={graphWidth}
            height={graphHeight}
            options={{
                plugins: {
                    legend: {
                        display: false
                    },    
                },
                indexAxis: 'y',
                scales: {
                    y: {
                        ticks: {
                            color: 'black',
                            font: {
                                size: fontSize,
                            },
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black',
                            font: {
                                size: fontSize,
                            },
                            stepSize: 1,
                        }
                    }
                }
            }}
            data={dataTransform({
                name: 'Skill Level',
                inputData: inputDataSorter?.(data) ?? (inputDataSorters[inputDataSorterName as keyof typeof inputDataSorters] as InputDataSorter | undefined)?.(data) ?? data,
                hue: hue,
                saturation: saturation,
                lightness: lightness,
                colorIterationTransformer: colorIterationTransformer ?? colorIterationTransformers[colorIterationTransformerName as keyof typeof colorIterationTransformers],
            })}
        />
    </div>;
};
