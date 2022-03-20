'use strict'

import * as THREE from 'three'

import { expect } from '@dimensionalpocket/development'
import { LightBuilder } from '../../src/builders/LightBuilder.js'

describe('LightBuilder', function () {
  describe('.run', function () {
    context('with correct arguments', function () {
      before(function () {
        /** @type {LightBuilderOptions} */
        var data = { id: 'test-light' }

        this.light = LightBuilder.run(data)
      })

      it('returns a THREE.Light', function () {
        expect(this.light).to.be.an.instanceOf(THREE.Light)
      })

      it('sets the light name', function () {
        expect(this.light.name).to.eq('test-light')
      })
    })

    context('with missing options', function () {
      it('raises an error', function () {
        // @ts-ignore
        expect(() => LightBuilder.run()).to.throw(/ID is required/)

        // @ts-ignore
        expect(() => LightBuilder.run({})).to.throw(/ID is required/)

        // @ts-ignore
        expect(() => LightBuilder.run({ id: null })).to.throw(/ID is required/)
      })
    })
  })
})
