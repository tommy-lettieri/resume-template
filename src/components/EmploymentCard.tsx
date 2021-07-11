import React from 'react';
import { GenericCard } from './GenericCard';

export interface Employment {
    startDate?: string | Date;
    endDate?: string | Date | null;
    logoURL?: string;
    website?: string;
    name: string;
    bullets?: string[];
}

interface EmploymentCardProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    employment: Employment;
    logoWidth?: number;
}

export const EmploymentCard = ({
    employment,
    ...props
}: EmploymentCardProps) => {
    return (
        <GenericCard
            data={employment}
            {...props}
        />
    );
};
