"use strict";
(function(){
	// Import
	var expect = require('chai').expect,
		joe = require('joe')

	// Test
	joe.describe('fs plugin', function(describe,it){
		var Chainy = require('chainy-core').subclass().require('set').addExtension('fs', require('../'))

		it("should work successfully", function(next){
			var path = process.cwd()+'/.tmp'
			Chainy.create()
				// Write
				.set({a:1}).writeTo(path)

				// Check write worked
				.set(path).exists()
				.action(function(exists){
					expect(exists, 'check write worked and file exists').to.equal(true)
				})

				// Check write data worked
				.set(path).readFile()
				.action(function(data){
					expect(JSON.parse(data), 'check write worked and data is correct').to.deep.equal({a:1})
				})

				// Delete
				.set(path).unlink()

				// Check delete worked
				.set(path).exists()
				.action(function(exists){
					expect(exists, 'check unlink worked and file is gone').to.equal(false)
				})

				.done(next)
		})

	})
})()