;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [973],
  {
    1481: function (e, n, r) {
      Promise.resolve().then(r.bind(r, 4427))
    },
    4427: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, {
          default: function () {
            return i
          }
        })
      var t = r(1776),
        s = r(3200)
      r(5804)
      var a = r(1379)
      function l(e) {
        let { tags: n } = e,
          r = (0, s.useRouter)(),
          a = (0, s.useParams)()
        return (0, t.jsx)('div', {
          children: (0, t.jsx)('ul', {
            className: 'steps steps-vertical',
            onClick: (e) => {
              r.push('/blog/'.concat(a.slug, '/').concat(e.target.innerHTML))
            },
            style: { cursor: 'pointer' },
            children: n && n.map((e, n) => (0, t.jsx)('li', { className: 'step step-primary', children: e }, e))
          })
        })
      }
      var c = r(8870)
      function i() {
        let e = (0, s.useParams)(),
          { slug: n } = e,
          { data: r } = (0, a.useQuery)(['blog'], () => fetch('/api/tagBlogData/'.concat(n)).then((e) => e.json()), {
            refetchInterval: 5e3
          })
        return (0, t.jsx)(c.Container, { children: (0, t.jsx)(l, { tags: null == r ? void 0 : r.app }) })
      }
    },
    8870: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, {
          Container: function () {
            return i
          }
        })
      var t = r(1776),
        s = r(5804)
      let a = s.forwardRef(function (e, n) {
          let { children: r, ...s } = e
          return (0, t.jsx)('div', {
            ref: n,
            className: 'sm:px-8 ',
            ...s,
            children: (0, t.jsx)('div', { className: 'mx-auto max-w-7xl lg:px-8', children: r })
          })
        }),
        l = s.forwardRef(function (e, n) {
          let { children: r, ...s } = e
          return (0, t.jsx)('div', {
            ref: n,
            className: 'relative px-4 sm:px-8 lg:px-12',
            ...s,
            children: (0, t.jsx)('div', { className: 'mx-auto max-w-2xl lg:max-w-5xl', children: r })
          })
        }),
        c = s.forwardRef(function (e, n) {
          let { children: r, ...s } = e
          return (0, t.jsx)(a, { ref: n, ...s, children: (0, t.jsx)(l, { children: r }) })
        }),
        i = Object.assign(c, { Outer: a, Inner: l })
    }
  },
  function (e) {
    e.O(0, [451, 407, 437, 744], function () {
      return e((e.s = 1481))
    }),
      (_N_E = e.O())
  }
])