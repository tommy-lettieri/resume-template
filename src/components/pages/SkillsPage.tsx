import React from 'react';
import { SkillsGraphCard, SkillsCardProps } from '../SkillsGraphCard';
import './SkillsPage.css';

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
        <div className='zrt-skill-content'>
            {graphDataArray.map(graphData => <SkillsGraphCard key={graphData.name} {...graphData} {...pageWideGraphOverrides} />)}
        </div>
    </div>;
};
