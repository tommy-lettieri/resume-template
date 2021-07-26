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
    return <div id='zrt-page-skills' className="zrt-page zrt-page-skills">
        <h1>Skills</h1>
        <div className='zrt-skill-content' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px', }}>
            {graphDataArray.map(graphData => <SkillsGraphCard key={graphData.name} {...graphData} {...pageWideGraphOverrides} />)}
        </div>
    </div>;
};
