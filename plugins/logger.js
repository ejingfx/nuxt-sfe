export default (context, inject) => {
  // eslint-disable-next-line no-console
  const logger = msg => console.log(`Logger: ${msg}`)
  inject('logger', logger)
  context.$logger = logger
}
