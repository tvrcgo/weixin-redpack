
var xml2js = require('xml2js');
var md5 = require('MD5');
var request = require('request');

function sendRedpack(opts, fn){

	var SEND_REDPACK_URL = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack";
	var PFX = opts.pfx;
	
	opts.nonce_str = _generateNonceString(32);
	opts.max_value = opts.min_value = opts.total_amount;
	opts = _sign(opts);

	var builder = new xml2js.Builder();
	var xml = builder.buildObject({ xml:opts });
	console.log(xml);

	request({
		url: SEND_REDPACK_URL, 
		method: 'POST',
		body: xml,
		agentOptions: {
			pfx: PFX,
			passphrase: opts.mch_id
		}
	}, 
		function(err, response, body){
			var parser = new xml2js.Parser({ trim:true, explicitArray:false, explicitRoot:false });
			parser.parseString(body, fn||function(err, result){});
	});
}

var _sign = function(obj){

	var PARTNER_KEY = obj.partner_key || "";

	['key', 'pfx', 'partner_key', 'sign'].forEach(function(k){
		delete obj[k];
	});

	var querystring = Object.keys(obj).filter(function(key){
		return obj[key] !== undefined && obj[key] !== '';
	}).sort().map(function(key){
		return key + '=' + obj[key];
	}).join('&') + "&key=" + PARTNER_KEY;
	console.log(querystring);
	obj.sign = md5(querystring).toUpperCase();

	return obj;
};

var _generateNonceString = function (length) {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var maxPos = chars.length;
	var noceStr = "";
	for (var i = 0; i < (length || 32); i++) {
		noceStr += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return noceStr;
};

exports = module.exports = sendRedpack;
