/**
 * EchoDataSource - Simple data source that echoes input.
 */

export class EchoDataSource {
  constructor(options = {}) {
    this.resourceManager = options.resourceManager;
    this._history = [];
  }

  /**
   * Echo a message back.
   * @param {string} message - Message to echo
   * @returns {Object} Echo result
   */
  echo(message) {
    const result = {
      input: message,
      output: message,
      timestamp: new Date().toISOString(),
      source: 'remote-package'
    };
    this._history.push(result);
    return result;
  }

  /**
   * Get echo history.
   * @returns {Array} History of echoed messages
   */
  history() {
    return this._history;
  }

  getSchema() {
    return {
      type: 'echo',
      description: 'Echo data source - returns what you send',
      methods: ['echo', 'history']
    };
  }
}
