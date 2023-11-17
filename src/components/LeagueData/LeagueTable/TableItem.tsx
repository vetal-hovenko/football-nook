import React from 'react';

import TeamRecord from './TeamRecord';
import TeamItem from './TeamItem';

import { Standings } from '@/types/LeagueByIdResponse';

type TableItemProps = {
    teamFromAPI: Standings
}

const TableItem: React.FC<TableItemProps> = ({ teamFromAPI }) => {
    const { rank, team, points, goalsDiff, all, form } = teamFromAPI;
    const { id, name, logo } = team;
    const { goals, draw, lose, played, win } = all;
    const { for: goalsScored, against: goalsConceded } = goals;
    let r: string[] = [];
    if (form !== null) {
        r = form.split('');
    }
    return (
        <tr key={id}>
            <td>{rank}</td>
            <td>
                <TeamItem id={id} logo={logo} name={name} />
            </td>
            <td>{points}</td>
            <td>{played}</td>
            <td>{win}</td>
            <td>{lose}</td>
            <td>{draw}</td>
            <td>{goalsScored}</td>
            <td>{goalsConceded}</td>
            <td>{goalsDiff}</td>
            <td>
                <TeamRecord record={r} />
            </td>
        </tr>
    );
};

export default TableItem;
