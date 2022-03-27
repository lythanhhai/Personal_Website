const initialState = {
    id: 0,
}

const getIndexReducer = (state =initialState, action) => 
{
    switch(action.type)
    {
        case 'getIndex':
        {
            return {
                ...state,
                id: action.payload,
            }
        }
        default:
            return state
    }
}

export default getIndexReducer;