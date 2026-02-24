/**
 * EchoHandle - Handle wrapping EchoDataSource.
 *
 * A simple handle for testing remote package loading.
 * Echoes messages back with metadata.
 */

import { Handle } from '@ng/handles-handle';

export class EchoHandle extends Handle {
  static methodMetadata = {
    echo: {
      description: 'Echo a message back with metadata',
      params: [
        { name: 'message', type: 'string', description: 'Message to echo' }
      ],
      returns: { type: 'Object', description: 'Echo result with input, output, timestamp' }
    },
    history: {
      description: 'Get history of echoed messages',
      params: [],
      returns: { type: 'Array', description: 'Array of echo results' }
    }
  };

  /**
   * @param {EchoDataSource} dataSource - The echo data source
   */
  constructor(dataSource) {
    super(dataSource);
    this._handleType = 'EchoHandle';
  }

  /**
   * Echo a message.
   * @param {string} message - Message to echo
   * @returns {Object} Echo result
   */
  echo(message) {
    return this.dataSource.echo(message);
  }

  /**
   * Get echo history.
   * @returns {Array} History
   */
  history() {
    return this.dataSource.history();
  }

  value() {
    return {
      type: 'echo',
      source: 'remote-package',
      historyLength: this.dataSource.history().length
    };
  }
}
