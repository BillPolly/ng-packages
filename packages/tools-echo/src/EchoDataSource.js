/**
 * EchoDataSource - Simple data source that echoes input.
 * Implements the full DataSource interface for Handle compatibility.
 */

import { BaseDataSource } from '@ng/handles-data-sources-base';

export class EchoDataSource extends BaseDataSource {
  constructor(options = {}) {
    super(options);
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

  /**
   * DataSource query interface.
   * @param {Object} spec - Query specification
   * @returns {Array|Object} Query result
   */
  query(spec) {
    if (spec?.type === 'echo') return this.echo(spec.message);
    if (spec?.type === 'history') return this.history();
    return [];
  }

  _getSchema() {
    return {
      type: 'echo',
      description: 'Echo data source - returns what you send',
      methods: ['echo', 'history']
    };
  }
}
