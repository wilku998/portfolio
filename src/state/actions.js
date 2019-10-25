const actionsName = {
  setScrollY: "set_scrollY",
}

export const setScrollY = scrollY => ({
  type: actionsName.setScrollY,
  scrollY,
})

export default actionsName
