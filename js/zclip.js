! function a(b, c, e) {
	function f(d, j) {
		if (!c[d]) {
			if (!b[d]) {
				var i = typeof require == 'function' && require;
				if (!j && i) return i(d, !0);
				if (g) return g(d, !0);
				throw new Error("Cannot find module '" + d + "'")
			}
			var h = c[d] = {
				exports: {}
			};
			b[d][0].call(h.exports, function(c) {
				var a = b[d][1][c];
				return f(a ? a : c)
			}, h, h.exports, a, b, c, e)
		}
		return c[d].exports
	}
	var g = typeof require == 'function' && require;
	for (var d = 0; d < e.length; d++) f(e[d]);
	return f
}({
	1: [function(b, a, c) {
		! function(e, h, p, n, k, g, q, j, l, m, i, b, c, d, f, o) {
			'use strict';
			e = function(a, c) {
				var b = a.style[c];
				if (a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = document.defaultView.getComputedStyle(a, null).getPropertyValue(c)), b == 'auto' && c == 'cursor') {
					var e = ['a'];
					for (var d = 0; d < e.length; d++)
						if (a.tagName.toLowerCase() == e[d]) return 'pointer'
				}
				return b
			}, h = function(a) {
				if (!b.prototype._singleton) return;
				a || (a = window.event);
				var c;
				this !== window ? c = this : a.target ? c = a.target : a.srcElement && (c = a.srcElement), b.prototype._singleton.setCurrent(c)
			}, p = function(a, b, c) {
				a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent('on' + b, c)
			}, n = function(a, b, c) {
				a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent('on' + b, c)
			}, k = function(a, b) {
				if (a.addClass) return a.addClass(b), a;
				if (b && typeof b === 'string') {
					var d = (b || '').split(/\s+/);
					if (a.nodeType === 1)
						if (!a.className) a.className = b;
						else {
							var f = ' ' + a.className + ' ',
								e = a.className;
							for (var c = 0, g = d.length; c < g; c++) f.indexOf(' ' + d[c] + ' ') < 0 && (e += ' ' + d[c]);
							a.className = e.replace(/^\s+|\s+$/g, '')
						}
				}
				return a
			}, g = function(a, b) {
				if (a.removeClass) return a.removeClass(b), a;
				if (b && typeof b === 'string' || b === undefined) {
					var e = (b || '').split(/\s+/);
					if (a.nodeType === 1 && a.className)
						if (b) {
							var c = (' ' + a.className + ' ').replace(/[\n\t]/g, ' ');
							for (var d = 0, f = e.length; d < f; d++) c = c.replace(' ' + e[d] + ' ', ' ');
							a.className = c.replace(/^\s+|\s+$/g, '')
						} else a.className = ''
				}
				return a
			}, q = function(a) {
				var b = {
						left: 0,
						top: 0,
						width: a.width || a.offsetWidth || 0,
						height: a.height || a.offsetHeight || 0,
						zIndex: 9999
					},
					c = e(a, 'zIndex');
				c && c != 'auto' && (b.zIndex = parseInt(c, 10));
				while (a) {
					var d = parseInt(e(a, 'borderLeftWidth'), 10),
						f = parseInt(e(a, 'borderTopWidth'), 10);
					b.left += isNaN(a.offsetLeft) ? 0 : a.offsetLeft, b.left += isNaN(d) ? 0 : d, b.top += isNaN(a.offsetTop) ? 0 : a.offsetTop, b.top += isNaN(f) ? 0 : f, a = a.offsetParent
				}
				return b
			}, j = function(a) {
				return (a.indexOf('?') >= 0 ? '&nocache=' : '?nocache=') + new Date().getTime()
			}, l = function(a) {
				var b = [];
				return a.trustedDomains && (typeof a.trustedDomains === 'string' ? b.push('trustedDomain=' + a.trustedDomains) : b.push('trustedDomain=' + a.trustedDomains.join(','))), b.join('&')
			}, m = function(c, b) {
				if (b.indexOf) return b.indexOf(c);
				for (var a = 0, d = b.length; a < d; a++)
					if (b[a] === c) return a;
				return -1
			}, i = function(a) {
				if (typeof a === 'string') throw new TypeError("ZeroClipboard doesn't accept query strings.");
				return a.length ? a : [a]
			}, b = function(d, e) {
				if (d && (b.prototype._singleton || this).glue(d), b.prototype._singleton) return b.prototype._singleton;
				b.prototype._singleton = this, this.options = {};
				for (var a in f) this.options[a] = f[a];
				for (var c in e) this.options[c] = e[c];
				this.handlers = {}, b.detectFlashSupport() && o()
			}, d = [], b.prototype.setCurrent = function(a) {
				c = a, this.reposition(), a.getAttribute('title') && this.setTitle(a.getAttribute('title')), this.setHandCursor(e(a, 'cursor') == 'pointer')
			}, b.prototype.setText = function(a) {
				a && a !== '' && (this.options.text = a, this.ready() && this.flashBridge.setText(a))
			}, b.prototype.setTitle = function(a) {
				a && a !== '' && this.htmlBridge.setAttribute('title', a)
			}, b.prototype.setSize = function(a, b) {
				this.ready() && this.flashBridge.setSize(a, b)
			}, b.prototype.setHandCursor = function(a) {
				this.ready() && this.flashBridge.setHandCursor(a)
			}, b.version = '1.1.7', f = {
				moviePath: 'ZeroClipboard.swf',
				trustedDomains: null,
				text: null,
				hoverClass: 'zeroclipboard-is-hover',
				activeClass: 'zeroclipboard-is-active',
				allowScriptAccess: 'sameDomain'
			}, b.setDefaults = function(b) {
				for (var a in b) f[a] = b[a]
			}, b.destroy = function() {
				b.prototype._singleton.unglue(d);
				var a = b.prototype._singleton.htmlBridge;
				a.parentNode.removeChild(a), delete b.prototype._singleton
			}, b.detectFlashSupport = function() {
				var a = !1;
				try {
					new ActiveXObject('ShockwaveFlash.ShockwaveFlash'), a = !0
				} catch (b) {
					navigator.mimeTypes['application/x-shockwave-flash'] && (a = !0)
				}
				return a
			}, o = function() {
				var c = b.prototype._singleton,
					a = document.getElementById('global-zeroclipboard-html-bridge');
				if (!a) {
					var d = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + c.options.moviePath + j(c.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + c.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + l(c.options) + '"/>         <embed src="' + c.options.moviePath + j(c.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + l(c.options) + '"           scale="exactfit">         </embed>       </object>';
					a = document.createElement('div'), a.id = 'global-zeroclipboard-html-bridge', a.setAttribute('class', 'global-zeroclipboard-container'), a.setAttribute('data-clipboard-ready', !1), a.style.position = 'absolute', a.style.left = '-9999px', a.style.top = '-9999px', a.style.width = '15px', a.style.height = '15px', a.style.zIndex = '9999', a.innerHTML = d, document.body.appendChild(a)
				}
				c.htmlBridge = a, c.flashBridge = document['global-zeroclipboard-flash-bridge'] || a.children[0].lastElementChild
			}, b.prototype.resetBridge = function() {
				this.htmlBridge.style.left = '-9999px', this.htmlBridge.style.top = '-9999px', this.htmlBridge.removeAttribute('title'), this.htmlBridge.removeAttribute('data-clipboard-text'), g(c, this.options.activeClass), c = null, this.options.text = null
			}, b.prototype.ready = function() {
				var a = this.htmlBridge.getAttribute('data-clipboard-ready');
				return a === 'true' || a === !0
			}, b.prototype.reposition = function() {
				if (!c) return !1;
				var a = q(c);
				this.htmlBridge.style.top = a.top + 'px', this.htmlBridge.style.left = a.left + 'px', this.htmlBridge.style.width = a.width + 'px', this.htmlBridge.style.height = a.height + 'px', this.htmlBridge.style.zIndex = a.zIndex + 1, this.setSize(a.width, a.height)
			}, b.dispatch = function(a, c) {
				b.prototype._singleton.receiveEvent(a, c)
			}, b.prototype.on = function(a, e) {
				var d = a.toString().split(/\s/g);
				for (var c = 0; c < d.length; c++) a = d[c].toLowerCase().replace(/^on/, ''), this.handlers[a] || (this.handlers[a] = e);
				this.handlers.noflash && !b.detectFlashSupport() && this.receiveEvent('onNoFlash', null)
			}, b.prototype.addEventListener = b.prototype.on, b.prototype.off = function(c, e) {
				var d = c.toString().split(/\s/g);
				for (var a = 0; a < d.length; a++) {
					c = d[a].toLowerCase().replace(/^on/, '');
					for (var b in this.handlers) b === c && this.handlers[b] === e && delete this.handlers[b]
				}
			}, b.prototype.removeEventListener = b.prototype.off, b.prototype.receiveEvent = function(b, d) {
				b = b.toString().toLowerCase().replace(/^on/, '');
				var a = c;
				switch (b) {
					case 'load':
						if (d && parseFloat(d.flashVersion.replace(',', '.').replace(/[^0-9\.]/gi, '')) < 10) {
							this.receiveEvent('onWrongFlash', {
								flashVersion: d.flashVersion
							});
							return
						}
						this.htmlBridge.setAttribute('data-clipboard-ready', !0);
						break;
					case 'mouseover':
						k(a, this.options.hoverClass);
						break;
					case 'mouseout':
						g(a, this.options.hoverClass);
						this.resetBridge();
						break;
					case 'mousedown':
						k(a, this.options.activeClass);
						break;
					case 'mouseup':
						g(a, this.options.activeClass);
						break;
					case 'datarequested':
						var h = a.getAttribute('data-clipboard-target'),
							e = h ? document.getElementById(h) : null;
						if (e) {
							var i = e.value || e.textContent || e.innerText;
							i && this.setText(i)
						} else {
							var j = a.getAttribute('data-clipboard-text');
							j && this.setText(j)
						}
						break;
					case 'complete':
						this.options.text = null;
						break
				}
				if (this.handlers[b]) {
					var f = this.handlers[b];
					typeof f == 'function' ? f.call(a, this, d) : typeof f == 'string' && window[f].call(a, this, d)
				}
			}, b.prototype.glue = function(a) {
				a = i(a);
				for (var b = 0; b < a.length; b++) m(a[b], d) == -1 && (d.push(a[b]), p(a[b], 'mouseover', h))
			}, b.prototype.unglue = function(a) {
				a = i(a);
				for (var b = 0; b < a.length; b++) {
					n(a[b], 'mouseover', h);
					var c = m(a[b], d);
					c != -1 && d.splice(c, 1)
				}
			}, a !== void 0 ? a.exports = b : typeof define === 'function' && define.amd ? define(function() {
				return b
			}) : window.ZeroClipboard = b
		}()
	}, {}],
	2: [function(h, j, i) {
		var c = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {},
			e = c.ZeroClipboard = h('ZeroClipboard'),
			g = {
				path: 'ZeroClipboard.swf',
				copy: null,
				beforeCopy: null,
				afterCopy: null,
				clickAfter: !0
			},
			f = function(a) {
				return a = 0,
					function() {
						return a++
					}
			}(),
			d = {},
			b, a = jQuery;
		a.fn.zclip = function(i) {
			var h, j;
			if (a.isPlainObject(i)) h = a.extend({}, g, i), j = f(), d[j] = h, this.data('zclip-client', j), b ? b.glue(this) : b = new e(this, {
				moviePath: h.path,
				trustedDomains: [c.location.protocol + '//' + c.location.host],
				hoverClass: 'hover',
				activeClass: 'active'
			}), a.isFunction(h.copy) && this.on('zClip_copy', a.proxy(h.copy, this)), a.isFunction(h.beforeCopy) && this.on('zClip_beforeCopy', a.proxy(h.beforeCopy, this)), a.isFunction(h.afterCopy) && this.on('zClip_afterCopy', a.proxy(h.afterCopy, this)), b.on('mouseover', function() {
				var b = a(this);
				b.trigger('mouseenter')
			}), b.on('mouseout', function() {
				var b = a(this);
				b.trigger('mouseleave')
			}), b.on('mousedown', function() {
				var b = a(this);
				b.trigger('mousedown')
			}), b.on('load', function(a) {
				a.setHandCursor(h.setHandCursor)
			}), b.on('complete', function(h, g) {
				var b = g.text,
					e = a(this),
					f = d[e.data('zclip-client')];
				a.isFunction(f.afterCopy) ? e.trigger('zClip_afterCopy', b) : (b.length > 500 && (b = b.substr(0, 500) + '\u2026\n\n(' + (b.length - 500) + 'characters not shown)'), c.alert('Copied text to clipboard:\n\n' + g.text)), f.clickAfter && e.trigger('click')
			}), b.on('dataRequested', function(e) {
				var b = a(this),
					c = d[b.data('zclip-client')];
				b.trigger('zClip_beforeCopy'), a.isFunction(c.copy) ? e.setText(String(b.triggerHandler('zClip_copy'))) : e.setText(c.copy)
			}), a(c).on('load resize', function() {
				b.reposition()
			});
			else if (b && typeof i === 'string') switch (i) {
				case 'remove':
				case 'hide':
					b.unglue(this);
					break;
				case 'show':
					b.glue(this)
			}
		}
	}, {
		ZeroClipboard: 1
	}]
}, {}, [2])