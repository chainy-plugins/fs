var fsUtil = require('graceful-fs')
var methods = [
	'appendFile', 'link', 'mkdir', 'open', 'close', 'read', 'readdir', 'readFile', 'readlink', 'realpath', 'rename', 'rmdir', 'symlink', 'truncate', 'unlink', 'utimes', 'writeFile',
	'chmod', 'chown', 'stat',
	'fchmod', 'fchown', 'fstat', 'fsync', 'ftruncate', 'futimes',
	'lchmod', 'lchown', 'lstat'
]
module.exports = function(chainy){
	methods.forEach(function(method){
		var options = {type: 'action'}
		var code = method.toLowerCase()
		if ( code !== method ) {
			options.aliases = [method]
		}
		if ( fsUtil[method] ) {
			chainy.addExtension(code, options, fsUtil[method])
		}
	})
	chainy.addExtension('exists', 'action', function(path, next){
		fsUtil.exists(path, function(exists){
			return next(null, exists)
		})
	})
	chainy.addExtension('writeto', {type:'action', aliases:'writeTo'}, function(data, path, next){
		if ( typeof data === 'object' && Buffer.isBuffer(data) === false ) {
			data = JSON.stringify(data, null, '  ')
		}
		fsUtil.writeFile(path, data, next)
	})
}
module.exports.extensionType = 'custom'