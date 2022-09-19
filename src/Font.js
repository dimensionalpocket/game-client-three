import fetch from 'cross-fetch'
import ThreeMeshUI from './extensions/ThreeMeshUI.js'

const FETCH_OPTIONS = { method: 'get' }

export class Font {
  /**
   * @param {FontOptions} options
   */
  constructor (options) {
    this.id = options.id
    this.url = options.url
    this.texture = options.texture

    /**
     * The promise generated by #install().
     * It's kept around as the installation state.
     *
     * @type {?Promise<this>}
     */
    this.promise = null
  }

  install () {
    if (this.promise != null) return this.promise

    this.promise = fetch(this.url, FETCH_OPTIONS)
      .then(res => res.json())
      .then(json => {
        ThreeMeshUI.FontLibrary.addFont(this.id, json, this.texture)
        return this
      })

    return this.promise
  }
}
