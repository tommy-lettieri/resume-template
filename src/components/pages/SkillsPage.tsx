import React from 'react';
import { SkillsGraphCard, SkillsCardProps } from '../SkillsGraphCard';

export interface SkillsPageProps {
    pageWideGraphOverrides?: Partial<SkillsCardProps>;
    graphDataArray: SkillsCardProps[];
}
export const SkillsPage = ({
    graphDataArray,
    pageWideGraphOverrides
}: SkillsPageProps) => {
    return <div id='zrt-page-skills' style={{ backgroundColor: '#EEEEEE', padding: '20px', marginBottom: '20px' }}>
        <h1>Skills</h1>
        <div className='zrt-skill-chart' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px', }}>
            {graphDataArray.map(graphData => <SkillsGraphCard key={graphData.name} {...graphData} {...pageWideGraphOverrides} />)}
        </div>
    </div>;
};
