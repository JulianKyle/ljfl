module.exports = {
  formNavigate (state, emit) {
    return e => {
      e.preventDefault()
      emit(state.events.PUSHSTATE, e.currentTarget.name)
    }
  },

  navigate (state, emit, path) {
    return e => {
      if (path) {
        emit(state.events.PUSHSTATE, path)
      } else {
        history.go(-1)
      }
    }
  }
}
