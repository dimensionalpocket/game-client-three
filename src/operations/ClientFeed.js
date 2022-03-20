'use strict'

import { ClientAttach } from './ClientAttach.js'
import { ClientPose } from './ClientPose.js'
import { ClientPosition } from './ClientPosition.js'

export class ClientFeed {
  /**
   * @param {ThreeClient} client
   * @param {string} command
   * @param {any} [a1]
   * @param {any} [a2]
   * @param {any} [a3]
   * @param {any} [a4]
   * @param {any} [a5]
   * @param {any} [a6]
   * @returns {boolean}
   */
  static run (client, command, a1 = null, a2 = null, a3 = null, a4 = null, a5 = null, a6 = null) {
    if (command === 'position') {
      return ClientPosition.run(
        client,
        a1, // object type
        a2, // object id
        a3, // x
        a4, // y
        a5 // z
      )
    }

    if (command === 'pose') {
      return ClientPose.run(
        client,
        a1, // pose id
        a2 // skeleton id
      )
    }

    if (command === 'add') {
      return client.data.add(
        a1, // object type
        a2 // object id
      )
    }

    if (command === 'attach') {
      return ClientAttach.run(
        client,
        a1, // child type
        a2, // child id
        a3, // parent type
        a4 // parent id
      )
    }

    throw new Error(`Client#feed: unhandled command ${command} (${a1}, ${a2}, ${a3}, ${a4}, ${a5}, ${a6})`)
  }
}
