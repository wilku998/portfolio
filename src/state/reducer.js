import actions from "./actions"

export default (state, action) => {
  const { type, scrollY } = action
  switch (type) {
    case actions.setScrollY: {
      return { ...state, scrollY }
    }
    default:
      return state
  }
}
