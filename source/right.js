parcelRequire = function (e, r, n, t) {
    function i(n, t) {
        function o(e) {
            return i(o.resolve(e))
        }

        function c(r) {
            return e[n][1][r] || r
        }
        if (!r[n]) {
            if (!e[n]) {
                var l = "function" == typeof parcelRequire && parcelRequire;
                if (!t && l) return l(n, !0);
                if (u) return u(n, !0);
                if (f && "string" == typeof n) return f(n);
                var p = new Error("Cannot find module '" + n + "'");
                throw p.code = "MODULE_NOT_FOUND", p
            }
            o.resolve = c;
            var a = r[n] = new i.Module(n);
        }
        return r[n].exports
    }

    function o(e) {
        this.id = e, this.bundle = i, this.exports = {}
    }
    var u = "function" == typeof parcelRequire && parcelRequire,
        f = "function" == typeof require && require;
    i.isParcelRequire = !0, i.Module = o, i.modules = e, i.cache = r, i.parent = u;
    for (var c = 0; c < n.length; c++) i(n[c]);
    if (n.length) {
        var l = i(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : t && (this[t] = l)
    }
    return i
}({
    13: [function (require, module, exports) {
        ! function () {
            function t() {
                var t = "—— Hitoko: 我们所度过的每个平凡的日常，也许就是连续发生的奇迹",
                    e = document.getElementById("hitokoto");
                fetch("https://v1.hitokoto.cn/?c=e").then(function (t) {
                    return t.json()
                }).then(function (n) {
                    var o = n.hitokoto.length > 55 ? t : "—— Hitoko: " + n.hitokoto;
                    e.textContent = o
                }).catch(function (n) {
                    console.log("一言获取失败： " + n), e.textContent = t
                })
            }

            function e(t, e) {
                return t.classList.contains(e) ? (t.classList.remove(e), !1) : (t.classList.add(e), !0)
            }
            t(), document.getElementById("refresh-hitokoto").addEventListener("click", function (e) {
                t(), this.classList.add("re"), this.addEventListener("transitionend", function (t) {
                    this.classList.remove("re")
                })
            }), document.getElementsByClassName("contact")[0].addEventListener("click", function (t) {
                t.preventDefault(), document.body.clientWidth < 450 ? e(this, "show-c") ? (document.getElementsByClassName("m")[0].style.display = "block", window.scrollTo(0, document.querySelector(".contact.cs").offsetTop + 55)) : document.getElementsByClassName("m")[0].style.display = "none" : e(this, "show-c")
            })
        }();
    }, {}]
}, {}, [13], null)