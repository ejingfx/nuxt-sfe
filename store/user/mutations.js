export default {
  login (user, { isAuth, token }) {
    user.isAuth = isAuth
    user.token = token
  },

  logout (user) {
    user.isAuth = false
    user.token = ''
  }
}
