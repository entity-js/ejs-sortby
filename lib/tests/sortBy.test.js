/**
 *  ______   __   __   ______  __   ______  __  __
 * /\  ___\ /\ "-.\ \ /\__  _\/\ \ /\__  _\/\ \_\ \
 * \ \  __\ \ \ \-.  \\/_/\ \/\ \ \\/_/\ \/\ \____ \
 *  \ \_____\\ \_\\"\_\  \ \_\ \ \_\  \ \_\ \/\_____\
 *   \/_____/ \/_/ \/_/   \/_/  \/_/   \/_/  \/_____/
 *                                         __   ______
 *                                        /\ \ /\  ___\
 *                                       _\_\ \\ \___  \
 *                                      /\_____\\/\_____\
 *                                      \/_____/ \/_____/
 */

var test = require('unit.js');

describe('ejs/sortBy', function () {

  'use strict';

  var sortBy = require('../');

  describe('sortBy([Array])', function () {

    it('shouldSortByWeight', function () {

      var data = [{
            text: 'world',
            weight: 1
          }, {
            text: 'hello'
          }];

      sortBy(data, 'weight');
      test.array(data).is([{
        text: 'hello'
      }, {
        text: 'world',
        weight: 1
      }]);

    });

    it('shouldSortUsingWeightFunction', function () {

      var weightFnc = function () {
            return 1;
          },
          data = [{
            text: 'world',
            weight: weightFnc
          }, {
            text: 'hello'
          }];

      sortBy(data, 'weight');
      test.array(data).is([{
        text: 'hello'
      }, {
        text: 'world',
        weight: weightFnc
      }]);

    });

    it('shouldSortInReverese', function () {

      var data = [{
            text: 'world'
          }, {
            text: 'hello',
            weight: 1
          }];

      sortBy(data, 'weight', true);
      test.array(data).is([{
        text: 'hello',
        weight: 1
      }, {
        text: 'world'
      }]);

    });

  });

  describe('sortBy([Object])', function () {

    it('shouldSortByWeight', function () {

      var data = {
            world: 'world',
            hello: {weight: -1}
          };

      sortBy(data, 'weight');
      test.object(data).is({
        hello: {weight: -1},
        world: 'world'
      });

    });

    it('shouldSortIgnoresFunctions', function () {

      var fnc = function () {},
          data = {
            world: 'world',
            hello: {weight: -1},
            foo: 'bar',
            func: fnc
          };

      sortBy(data, 'weight');
      test.object(data).is({
        func: fnc,
        hello: {weight: -1},
        world: 'world',
        foo: 'bar'
      });

    });

    it('shouldSortUsingWeightFunction', function () {

      var weightFnc = function () {
            return -1;
          },
          data = {
            world: 'world',
            hello: {weight: weightFnc}
          };

      sortBy(data, 'weight');
      test.object(data).is({
        hello: {weight: weightFnc},
        world: 'world'
      });

    });

    it('shouldSortInReverese', function () {

      var data = {
            hello: {weight: -1},
            world: 'world'
          };

      sortBy(data, 'weight', true);
      test.object(data).is({
        world: 'world',
        hello: {weight: -1}
      });

    });

  });

});
