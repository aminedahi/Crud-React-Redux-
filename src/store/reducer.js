const initialisation={
    users:[{
        id:1,
        FirstName:"mohamed",
        LastName:"mohamed",
        City:"agadir"
    }],
    id:2
}
export default function reducer(state=initialisation,action){
    switch(action.type){
        case "ADD_USER":
            const newuser={...action.payload,id:state.id}
            return{
                ...state,
                users:[...state.users,newuser],
                id:state.id+1
            }
        case "DELETE_USER":
            return{
                ...state,
                users:[...state.users.filter(user=>user.id!==action.payload)]
            }
        case "UPDATE_USER":
            return{
                ...state,
                users:[...state.users.map(((user)=>(user.id===action.payload.id)?action.payload : user))]
            }
        case "FILTER_USER":
            return{
                ...state,
                filter:[...state.users.filter(user=>user.ville===action.payload)]

            }
            default:
                return state
    }
}