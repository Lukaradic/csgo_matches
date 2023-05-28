import { useSelector, useDispatch } from 'react-redux'
import {useState, useEffect} from 'react';
import { fetchMatches } from './matchesSlice';
import { SingleMatch } from './SingleMatch';
import './matches.scss';

export default function Matches() {
    const matches = useSelector((state) => state.matches.matches.payload)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMatches());
    }, [])

    function matchesList() {
        if(matches?.length) {
            return matches.map(match => <SingleMatch key={match.id} match={match} />)
        }
        return null

    }
    return(
        <div className="matches">
            {matchesList()}
        </div>
    )
}