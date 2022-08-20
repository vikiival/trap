// Lowbudget observer / reactive state / hook
export default function state(defaultValue) {
  let value = defaultValue
  const subscribers = new Set()

  function notifyAll() {
    for (const subscriber of subscribers) {
      subscriber(value)
    }
  }

  // Function which can be used as a:
  // - value getter
  // - value setter
  // - value updater (when a callback function is provided)
  function getValue(...args) {
    if (args.length > 0) {
      const [arg] = args
      value = (typeof arg === 'function') ? arg(value) : arg
      notifyAll()
    }

    return value
  }

  getValue.subscribe = (cb) => {
    subscribers.add(cb)
    cb(value, true)
  }

  getValue.unsubscribe = (cb) => subscribers.delete(cb)

  return getValue
}