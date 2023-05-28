import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    matches: [],
}

export const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        setMatches: (state, payload) => {
            state.matches = payload;
        },
        clearMatches: state => {
            state.matches = [];
        },
    }
})

export const fetchMatches = () => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(`https://csgo-matches-and-tournaments.p.rapidapi.com/upcoming_matches`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '47f12bc0fcmsh1e8241ff8e2313ep160292jsn1a2519eae5b2',
                    'X-RapidAPI-Host': 'csgo-matches-and-tournaments.p.rapidapi.com'
                },
            })
            const result = await res.json();
            const matches = result.data;
            console.log(matches, 'matches from action')
            dispatch(setMatches(matches));
        } catch (err) {
            throw new Error(err);
        }
    }
}

export const { setMatches, clearMatches } = matchesSlice.actions;
export default matchesSlice.reducer;