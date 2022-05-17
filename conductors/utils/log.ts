const logClient = {
  log: (msg: string, err?: any) => {
    console.log(`[${msg}]`, err)
  },
  info: (msg: string, err?: any) => {
    console.info(`[${msg}]`, err)
  },
  warn: (msg: string, err?: any) => {
    console.warn(`[${msg}]`, err)
  },
  error: (msg: string, err?: any) => {
    console.error(`[${msg}]`, err)
  }
}

export { logClient }
