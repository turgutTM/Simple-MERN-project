const VenueReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_INIT":
        return {
          ...state,
          isLoggedIn:false,
          isError:false
        };
        case "ADD_COMMENT_SUCCESS":
          return {
            ...state,
            isSuccess:true
          };
          case "ADD_VENUE_SUCCESS":
            return {
              ...state,
              isSuccess:true
            };
            case "ADD_VENUE_FAILURE":
              return {
                ...state,
                isSuccess:false
              };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          isError: false
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          isLoggedIn: false,
          isError: true,
        };
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isLoggedIn:true
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isError: false,
          isLoading: false,
          isSuccess: true,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: true,
        };
      case "REMOVE_VENUE":
        return {
          ...state,
          data: state.data.filter((venue) => action.payload.id !== venue.id),
        };
      default:
        throw new Error("Hata");
    }
  };
  export default VenueReducer;
  