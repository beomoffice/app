import produce from 'immer'

export default function createReducer(initalState, handlerMap){
    return function (state = initalState, action){
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if(handler) {
                handler(draft, action);
            }
        })
    }
}