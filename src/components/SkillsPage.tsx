import React from 'react';
import { SkillsGraphCard } from './SkillsGraphCard';
export const SkillsPage = () => {
    return <div id='zrt-page-skills' style={{ backgroundColor: '#EEEEEE', padding: '20px', marginBottom: '20px' }}>
        <h1>Skills</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px', }}>
            <SkillsGraphCard saturation={0.25} name={'Languages'} width={'540px'} />
            <SkillsGraphCard saturation={0.25} name={'Databases'} width={'540px'} />
            <SkillsGraphCard saturation={0.25} name={'Frameworks'} width={'540px'} />
            <SkillsGraphCard saturation={0.25} name={'Mobile Platforms'} width={'540px'} />
        </div>
    </div>;
};
