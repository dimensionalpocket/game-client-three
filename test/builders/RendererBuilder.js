// DISABLED - can't mock THREE.WebGLRenderer

// 'use strict'

// import * as THREE from 'three'

// import { expect, sinon } from '@dimensionalpocket/development'
// import { RendererBuilder } from '../../src/builders/RendererBuilder.js'

// describe('RendererBuilder', function () {
//   before(function () {
//     sinon.stub(THREE, 'WebGLRenderer')
//   })

//   after(function () {
//     // @ts-ignore
//     THREE.WebGLRenderer.restore()
//   })

//   describe('.run', function () {
//     context('without arguments', function () {
//       RendererBuilder.run()
//       expect(THREE.WebGLRenderer).to.have.been.calledWith({})
//     })
//   })
// })
