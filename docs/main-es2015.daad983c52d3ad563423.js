(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n('zUnb');
    },
    zUnb: function (e, t, n) {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      n.r(t);
      let i = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                e.stack
            );
          } else
            i &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          i = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return i;
        }
      };
      function o(e) {
        setTimeout(() => {
          throw e;
        });
      }
      const l = {
          closed: !0,
          next(e) {},
          error(e) {
            if (s.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete() {}
        },
        a = Array.isArray || (e => e && 'number' == typeof e.length);
      function u(e) {
        return null !== e && 'object' == typeof e;
      }
      function c(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = e),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      const h = c;
      let d = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          unsubscribe() {
            let e,
              t = !1;
            if (this.closed) return;
            let {
              _parent: n,
              _parents: i,
              _unsubscribe: s,
              _subscriptions: o
            } = this;
            (this.closed = !0),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null);
            let l = -1,
              c = i ? i.length : 0;
            for (; n; ) n.remove(this), (n = (++l < c && i[l]) || null);
            if (r(s))
              try {
                s.call(this);
              } catch (d) {
                (t = !0), (e = d instanceof h ? m(d.errors) : [d]);
              }
            if (a(o))
              for (l = -1, c = o.length; ++l < c; ) {
                const n = o[l];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (d) {
                    (t = !0),
                      (e = e || []),
                      d instanceof h ? (e = e.concat(m(d.errors))) : e.push(d);
                  }
              }
            if (t) throw new h(e);
          }
          add(t) {
            let n = t;
            switch (typeof t) {
              case 'function':
                n = new e(t);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e())._subscriptions = [t];
                }
                break;
              default:
                if (!t) return e.EMPTY;
                throw new Error(
                  'unrecognized teardown ' + t + ' added to Subscription.'
                );
            }
            if (n._addParent(this)) {
              const e = this._subscriptions;
              e ? e.push(n) : (this._subscriptions = [n]);
            }
            return n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
          _addParent(e) {
            let { _parent: t, _parents: n } = this;
            return (
              t !== e &&
              (t
                ? n
                  ? -1 === n.indexOf(e) && (n.push(e), !0)
                  : ((this._parents = [e]), !0)
                : ((this._parent = e), !0))
            );
          }
        }
        return (
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function m(e) {
        return e.reduce((e, t) => e.concat(t instanceof h ? t.errors : t), []);
      }
      const p =
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      class f extends d {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = l;
              break;
            case 1:
              if (!e) {
                this.destination = l;
                break;
              }
              if ('object' == typeof e) {
                e instanceof f
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, e, t, n));
          }
        }
        [p]() {
          return this;
        }
        static create(e, t, n) {
          const r = new f(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = e),
            (this._parents = t),
            this
          );
        }
      }
      class g extends f {
        constructor(e, t, n, i) {
          let s;
          super(), (this._parentSubscriber = e);
          let o = this;
          r(t)
            ? (s = t)
            : t &&
              ((s = t.next),
              (n = t.error),
              (i = t.complete),
              t !== l &&
                (r((o = Object.create(t)).unsubscribe) &&
                  this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = s),
            (this._error = n),
            (this._complete = i);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = s;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : o(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              o(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!s.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            t.call(this._context, n);
          } catch (r) {
            return s.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const _ =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function b() {}
      function y(...e) {
        return v(e);
      }
      function v(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce((e, t) => t(e), t);
              }
          : b;
      }
      let w = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              i = (function (e, t, n) {
                if (e) {
                  if (e instanceof f) return e;
                  if (e[p]) return e[p]();
                }
                return e || t || n ? new f(e, t, n) : new f(l);
              })(e, t, n);
            if (
              (i.add(
                r
                  ? r.call(i, this.source)
                  : this.source ||
                    (s.useDeprecatedSynchronousErrorHandling &&
                      !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              s.useDeprecatedSynchronousErrorHandling &&
                i.syncErrorThrowable &&
                ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue;
            return i;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              s.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function (e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = C(t))((t, n) => {
              let r;
              r = this.subscribe(
                t => {
                  try {
                    e(t);
                  } catch (i) {
                    n(i), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [_]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length ? this : v(e)(this);
          }
          toPromise(e) {
            return new (e = C(e))((e, t) => {
              let n;
              this.subscribe(
                e => (n = e),
                e => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = t => new e(t)), e;
      })();
      function C(e) {
        if ((e || (e = s.Promise || Promise), !e))
          throw new Error('no Promise impl found');
        return e;
      }
      function x() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      x.prototype = Object.create(Error.prototype);
      const k = x;
      class E extends d {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class S extends f {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let T = (() => {
        class e extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new S(this);
          }
          lift(e) {
            const t = new I(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new k();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let i = 0; i < n; i++) r[i].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new k();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let i = 0; i < n; i++) r[i].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new k();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new k();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new k();
            return this.hasError
              ? (e.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (e.complete(), d.EMPTY)
              : (this.observers.push(e), new E(this, e));
          }
          asObservable() {
            const e = new w();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new I(e, t)), e;
      })();
      class I extends T {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : d.EMPTY;
        }
      }
      function A(e) {
        return e && 'function' == typeof e.schedule;
      }
      class O extends f {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const P = e => t => {
          for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        },
        M = e => t => (
          e
            .then(
              e => {
                t.closed || (t.next(e), t.complete());
              },
              e => t.error(e)
            )
            .then(null, o),
          t
        );
      function R() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      const N = R(),
        D = e => t => {
          const n = e[N]();
          for (;;) {
            const e = n.next();
            if (e.done) {
              t.complete();
              break;
            }
            if ((t.next(e.value), t.closed)) break;
          }
          return (
            'function' == typeof n.return &&
              t.add(() => {
                n.return && n.return();
              }),
            t
          );
        },
        F = e => t => {
          const n = e[_]();
          if ('function' != typeof n.subscribe)
            throw new TypeError(
              'Provided object does not correctly implement Symbol.observable'
            );
          return n.subscribe(t);
        },
        L = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function V(e) {
        return (
          !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then
        );
      }
      const U = e => {
        if (e instanceof w)
          return t =>
            e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        if (e && 'function' == typeof e[_]) return F(e);
        if (L(e)) return P(e);
        if (V(e)) return M(e);
        if (e && 'function' == typeof e[N]) return D(e);
        {
          const t = u(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
      function j(e, t, n, r, i = new O(e, n, r)) {
        if (!i.closed) return U(t)(i);
      }
      class $ extends f {
        notifyNext(e, t, n, r, i) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      function z(e, t) {
        return function (n) {
          if ('function' != typeof e)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new B(e, t));
        };
      }
      class B {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new H(e, this.project, this.thisArg));
        }
      }
      class H extends f {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function q(e, t) {
        return new w(
          t
            ? n => {
                const r = new d();
                let i = 0;
                return (
                  r.add(
                    t.schedule(function () {
                      i !== e.length
                        ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : P(e)
        );
      }
      function G(e, t) {
        if (!t) return e instanceof w ? e : new w(U(e));
        if (null != e) {
          if (
            (function (e) {
              return e && 'function' == typeof e[_];
            })(e)
          )
            return (function (e, t) {
              return new w(
                t
                  ? n => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() => {
                            const i = e[_]();
                            r.add(
                              i.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : F(e)
              );
            })(e, t);
          if (V(e))
            return (function (e, t) {
              return new w(
                t
                  ? n => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              e => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              e => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    }
                  : M(e)
              );
            })(e, t);
          if (L(e)) return q(e, t);
          if (
            (function (e) {
              return e && 'function' == typeof e[N];
            })(e) ||
            'string' == typeof e
          )
            return (function (e, t) {
              if (!e) throw new Error('Iterable cannot be null');
              return new w(
                t
                  ? n => {
                      const r = new d();
                      let i;
                      return (
                        r.add(() => {
                          i && 'function' == typeof i.return && i.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (i = e[N]()),
                              r.add(
                                t.schedule(function () {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = i.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : D(e)
              );
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + ' is not observable'
        );
      }
      function Q(e, t, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof t
          ? r =>
              r.pipe(
                Q((n, r) => G(e(n, r)).pipe(z((e, i) => t(n, e, r, i))), n)
              )
          : ('number' == typeof t && (n = t), t => t.lift(new W(e, n)));
      }
      class W {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new K(e, this.project, this.concurrent));
        }
      }
      class K extends $ {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new O(this, void 0, void 0);
          this.destination.add(r), j(this, e, t, n, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, i) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function Z(e) {
        return e;
      }
      function Y(e = Number.POSITIVE_INFINITY) {
        return Q(Z, e);
      }
      function X(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        return (
          A(r)
            ? ((n = e.pop()),
              e.length > 1 &&
                'number' == typeof e[e.length - 1] &&
                (t = e.pop()))
            : 'number' == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof w
            ? e[0]
            : Y(t)(q(e, n))
        );
      }
      function J() {
        return function (e) {
          return e.lift(new ee(e));
        };
      }
      class ee {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new te(e, n),
            i = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), i;
        }
      }
      class te extends f {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const ne = class extends w {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(e) {
            return this.getSubject().subscribe(e);
          }
          getSubject() {
            const e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }
          connect() {
            let e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new d()).add(
                  this.source.subscribe(new ie(this.getSubject(), this))
                ),
                e.closed
                  ? ((this._connection = null), (e = d.EMPTY))
                  : (this._connection = e)),
              e
            );
          }
          refCount() {
            return J()(this);
          }
        }.prototype,
        re = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ne._subscribe },
          _isComplete: { value: ne._isComplete, writable: !0 },
          getSubject: { value: ne.getSubject },
          connect: { value: ne.connect },
          refCount: { value: ne.refCount }
        };
      class ie extends S {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function se() {
        return new T();
      }
      function oe() {
        return e =>
          J()(
            (function (e, t) {
              return function (t) {
                let n;
                n =
                  'function' == typeof e
                    ? e
                    : function () {
                        return e;
                      };
                const r = Object.create(t, re);
                return (r.source = t), (r.subjectFactory = n), r;
              };
            })(se)(e)
          );
      }
      const le = '__parameters__';
      function ae(e, t, n) {
        const r = (function (e) {
          return function (...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function i(...e) {
          if (this instanceof i) return r.apply(this, e), this;
          const t = new i(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const i = e.hasOwnProperty(le)
              ? e[le]
              : Object.defineProperty(e, le, { value: [] })[le];
            for (; i.length <= r; ) i.push(null);
            return (i[r] = i[r] || []).push(t), e;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = e),
          (i.annotationCls = i),
          i
        );
      }
      const ue = ae('Inject', e => ({ token: e })),
        ce = ae('Optional'),
        he = ae('Self'),
        de = ae('SkipSelf');
      var me = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })({});
      function pe(e) {
        for (let t in e) if (e[t] === pe) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function fe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        };
      }
      function ge(e) {
        const t = e[_e];
        return t && t.token === e ? t : null;
      }
      const _e = pe({ ngInjectableDef: pe });
      function be(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(be).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      const ye = pe({ __forward_ref__: pe });
      function ve(e) {
        return (
          (e.__forward_ref__ = ve),
          (e.toString = function () {
            return be(this());
          }),
          e
        );
      }
      function we(e) {
        const t = e;
        return 'function' == typeof t &&
          t.hasOwnProperty(ye) &&
          t.__forward_ref__ === ve
          ? t()
          : e;
      }
      const Ce = 'undefined' != typeof globalThis && globalThis,
        xe = 'undefined' != typeof window && window,
        ke =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Ee = 'undefined' != typeof global && global,
        Se = Ce || Ee || xe || ke;
      class Te {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = fe({
                  token: this,
                  providedIn: t.providedIn || 'root',
                  factory: t.factory
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Ie = new Te('INJECTOR', -1),
        Ae = new Object(),
        Oe = 'ngTempTokenPath',
        Pe = 'ngTokenPath',
        Me = /\n/gm,
        Re = '\u0275',
        Ne = '__source',
        De = pe({ provide: String, useValue: pe });
      let Fe,
        Le = void 0;
      function Ve(e) {
        const t = Le;
        return (Le = e), t;
      }
      function Ue(e, t = me.Default) {
        if (void 0 === Le)
          throw new Error('inject() must be called from an injection context');
        return null === Le
          ? (function (e, t, n) {
              const r = ge(e);
              if (r && 'root' == r.providedIn)
                return void 0 === r.value ? (r.value = r.factory()) : r.value;
              if (n & me.Optional) return null;
              throw new Error(`Injector: NOT_FOUND [${be(e)}]`);
            })(e, 0, t)
          : Le.get(e, t & me.Optional ? null : void 0, t);
      }
      function je(e, t = me.Default) {
        return (Fe || Ue)(e, t);
      }
      const $e = je;
      class ze {
        get(e, t = Ae) {
          if (t === Ae) {
            const t = new Error(`NullInjectorError: No provider for ${be(e)}!`);
            throw ((t.name = 'NullInjectorError'), t);
          }
          return t;
        }
      }
      function Be(e, t, n, r = null) {
        e = e && '\n' === e.charAt(0) && e.charAt(1) == Re ? e.substr(2) : e;
        let i = be(t);
        if (t instanceof Array) i = t.map(be).join(' -> ');
        else if ('object' == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(
                n + ':' + ('string' == typeof r ? JSON.stringify(r) : be(r))
              );
            }
          i = `{${e.join(', ')}}`;
        }
        return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(Me, '\n  ')}`;
      }
      class He {}
      class qe {}
      function Ge(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Qe(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      const We = (function () {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = 'Emulated'),
            (e[e.Native] = 'Native'),
            (e[e.None] = 'None'),
            (e[e.ShadowDom] = 'ShadowDom'),
            e
          );
        })(),
        Ke = (() =>
          (
            ('undefined' != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(Se))(),
        Ze = 'ngDebugContext',
        Ye = 'ngOriginalError',
        Xe = 'ngErrorLogger';
      function Je(e) {
        return e[Ze];
      }
      function et(e) {
        return e[Ye];
      }
      function tt(e, ...t) {
        e.error(...t);
      }
      class nt {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function (e) {
              return e[Xe] || tt;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(e) {
          return e ? (Je(e) ? Je(e) : this._findContext(et(e))) : null;
        }
        _findOriginalError(e) {
          let t = et(e);
          for (; t && et(t); ) t = et(t);
          return t;
        }
      }
      let rt = !0,
        it = !1;
      function st() {
        return (it = !0), rt;
      }
      class ot {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement(
                'body'
              )),
              e.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function () {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = 'document'),
            t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
            t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            const t = new window.DOMParser().parseFromString(e, 'text/html')
              .body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const lt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        at = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function ut(e) {
        return (e = String(e)).match(lt) || e.match(at)
          ? e
          : (st() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + e);
      }
      function ct(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function ht(...e) {
        const t = {};
        for (const n of e)
          for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const dt = ct('area,br,col,hr,img,wbr'),
        mt = ct('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        pt = ct('rp,rt'),
        ft = ht(pt, mt),
        gt = ht(
          dt,
          ht(
            mt,
            ct(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          ht(
            pt,
            ct(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          ft
        ),
        _t = ct('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        bt = ct('srcset'),
        yt = ht(
          _t,
          bt,
          ct(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          ct(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        vt = ct('script,style,template');
      class wt {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              n && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join('');
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!gt.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !vt.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const n = e.attributes;
          for (let i = 0; i < n.length; i++) {
            const e = n.item(i),
              t = e.name,
              s = t.toLowerCase();
            if (!yt.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = e.value;
            _t[s] && (o = ut(o)),
              bt[s] &&
                ((r = o),
                (o = (r = String(r))
                  .split(',')
                  .map(e => ut(e.trim()))
                  .join(', '))),
              this.buf.push(' ', t, '="', kt(o), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          gt.hasOwnProperty(t) &&
            !dt.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(e) {
          this.buf.push(kt(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`
            );
          return t;
        }
      }
      const Ct = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        xt = /([^\#-~ |!])/g;
      function kt(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(Ct, function (e) {
            return (
              '&#' +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(xt, function (e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let Et;
      function St(e) {
        return 'content' in e &&
          (function (e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      const Tt = (function () {
        var e = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5
        };
        return (
          (e[e.NONE] = 'NONE'),
          (e[e.HTML] = 'HTML'),
          (e[e.STYLE] = 'STYLE'),
          (e[e.SCRIPT] = 'SCRIPT'),
          (e[e.URL] = 'URL'),
          (e[e.RESOURCE_URL] = 'RESOURCE_URL'),
          e
        );
      })();
      class It {}
      const At = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        Ot = /^url\(([^)]+)\)$/,
        Pt = /([A-Z])/g;
      function Mt(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let Rt = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Nt()), e;
      })();
      const Nt = (...e) => {},
        Dt = new Te(
          'The presence of this token marks an injector as being the root injector.'
        ),
        Ft = function (e, t, n) {
          return new Bt(e, t, n);
        };
      let Lt = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e)
              ? Ft(e, t, '')
              : Ft(e.providers, e.parent, e.name || '');
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Ae),
          (e.NULL = new ze()),
          (e.ngInjectableDef = fe({
            token: e,
            providedIn: 'any',
            factory: () => je(Ie)
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      const Vt = function (e) {
          return e;
        },
        Ut = [],
        jt = Vt,
        $t = function () {
          return Array.prototype.slice.call(arguments);
        },
        zt = '\u0275';
      class Bt {
        constructor(e, t = Lt.NULL, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(Lt, { token: Lt, fn: Vt, deps: Ut, value: this, useNew: !1 }),
            r.set(Ie, { token: Ie, fn: Vt, deps: Ut, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = we(n)) instanceof Array)
                  for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ('function' == typeof n)
                    throw qt('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide)
                    throw qt('Unexpected provider', n);
                  {
                    let e = we(n.provide);
                    const r = (function (e) {
                      const t = (function (e) {
                        let t = Ut;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              i = we(n[e]);
                            if (i instanceof Array)
                              for (let e = 0, t = i; e < t.length; e++) {
                                const n = t[e];
                                n instanceof ce || n == ce
                                  ? (r |= 1)
                                  : n instanceof de || n == de
                                  ? (r &= -3)
                                  : n instanceof he || n == he
                                  ? (r &= -5)
                                  : (i = n instanceof ue ? n.token : we(n));
                              }
                            t.push({ token: i, options: r });
                          }
                        } else if (e.useExisting)
                          t = [{ token: we(e.useExisting), options: 6 }];
                        else if (!(n || De in e))
                          throw qt("'deps' required", e);
                        return t;
                      })(e);
                      let n = Vt,
                        r = Ut,
                        i = !1,
                        s = we(e.provide);
                      if (De in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (i = !0), (n = we(e.useClass));
                      else {
                        if ('function' != typeof s)
                          throw qt(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            e
                          );
                        (i = !0), (n = s);
                      }
                      return { deps: t, fn: n, useNew: i, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== $t) throw Ht(e);
                      } else
                        t.set(
                          e,
                          (r = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: $t,
                            value: Ut
                          })
                        );
                      r.deps.push({ token: (e = n), options: 6 });
                    }
                    const i = t.get(e);
                    if (i && i.fn == $t) throw Ht(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = me.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, i, s, o) {
              try {
                return (function (t, n, r, i, s, o) {
                  let l;
                  if (!n || o & me.SkipSelf)
                    o & me.Self || (l = i.get(t, s, me.Default));
                  else {
                    if ((l = n.value) == jt)
                      throw Error(zt + 'Circular dependency');
                    if (l === Ut) {
                      n.value = jt;
                      let t = void 0,
                        s = n.useNew,
                        o = n.fn,
                        a = n.deps,
                        u = Ut;
                      if (a.length) {
                        u = [];
                        for (let t = 0; t < a.length; t++) {
                          const n = a[t],
                            s = n.options,
                            o = 2 & s ? r.get(n.token) : void 0;
                          u.push(
                            e(
                              n.token,
                              o,
                              r,
                              o || 4 & s ? i : Lt.NULL,
                              1 & s ? null : Lt.THROW_IF_NOT_FOUND,
                              me.Default
                            )
                          );
                        }
                      }
                      n.value = l = s ? new o(...u) : o.apply(t, u);
                    }
                  }
                  return l;
                })(t, n, r, i, s, o);
              } catch (l) {
                throw (
                  (l instanceof Error || (l = new Error(l)),
                  (l[Oe] = l[Oe] || []).unshift(t),
                  n && n.value == jt && (n.value = Ut),
                  l)
                );
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (i) {
            return (function (e, t, n, r) {
              const i = e[Oe];
              throw (
                (t[Ne] && i.unshift(t[Ne]),
                (e.message = Be('\n' + e.message, i, 'StaticInjectorError', r)),
                (e[Pe] = i),
                (e[Oe] = null),
                e)
              );
            })(i, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          return (
            this._records.forEach((t, n) => e.push(be(n))),
            `StaticInjector[${e.join(', ')}]`
          );
        }
      }
      function Ht(e) {
        return qt('Cannot mix multi providers and regular providers', e);
      }
      function qt(e, t) {
        return new Error(Be(e, t, 'StaticInjectorError'));
      }
      const Gt = new Te('AnalyzeForEntryComponents');
      let Qt = null;
      function Wt() {
        if (!Qt) {
          const e = Se.Symbol;
          if (e && e.iterator) Qt = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Qt = n);
            }
          }
        }
        return Qt;
      }
      function Kt(e, t) {
        return (
          e === t ||
          ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function Zt(e, t) {
        const n = Xt(e),
          r = Xt(t);
        if (n && r)
          return (function (e, t, n) {
            const r = e[Wt()](),
              i = t[Wt()]();
            for (;;) {
              const e = r.next(),
                t = i.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, Zt);
        {
          const i = e && ('object' == typeof e || 'function' == typeof e),
            s = t && ('object' == typeof t || 'function' == typeof t);
          return !(n || !i || r || !s) || Kt(e, t);
        }
      }
      class Yt {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Yt(e);
        }
        static unwrap(e) {
          return Yt.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof Yt;
        }
      }
      function Xt(e) {
        return (
          !!Jt(e) && (Array.isArray(e) || (!(e instanceof Map) && Wt() in e))
        );
      }
      function Jt(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function en(e) {
        return !!e && 'function' == typeof e.then;
      }
      function tn(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      class nn {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class rn {}
      class sn {}
      function on(e) {
        const t = Error(
          `No component factory found for ${be(
            e
          )}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[ln] = e), t;
      }
      const ln = 'ngComponent';
      class an {
        resolveComponentFactory(e) {
          throw on(e);
        }
      }
      let un = (() => {
        class e {}
        return (e.NULL = new an()), e;
      })();
      class cn {
        constructor(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if (
            (!t &&
              this._parent &&
              (t = this._parent.resolveComponentFactory(e)),
            !t)
          )
            throw on(e);
          return new hn(t, this._ngModule);
        }
      }
      class hn extends sn {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      function dn(...e) {}
      let mn = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (e.__NG_ELEMENT_ID__ = () => pn(e)), e;
      })();
      const pn = dn;
      class fn {}
      class gn {}
      const _n = (function () {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
      })();
      let bn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => yn()), e;
      })();
      const yn = dn;
      class vn {
        constructor(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e.split('.').slice(2).join('.'));
        }
      }
      const wn = new vn('8.2.14');
      class Cn {
        constructor() {}
        supports(e) {
          return Xt(e);
        }
        create(e) {
          return new kn(e);
        }
      }
      const xn = (e, t) => t;
      class kn {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || xn);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            i = null;
          for (; t || n; ) {
            const s = !n || (t && t.currentIndex < In(n, r, i)) ? t : n,
              o = In(s, r, i),
              l = s.currentIndex;
            if (s === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == s.previousIndex)) r++;
            else {
              i || (i = []);
              const e = o - r,
                t = l - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < i.length ? i[n] : (i[n] = 0),
                    s = r + n;
                  t <= s && s < e && (i[n] = r + 1);
                }
                i[s.previousIndex] = t - e;
              }
            }
            o !== l && e(s, o, l);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Xt(e)))
            throw new Error(
              `Error trying to diff '${be(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            i = this._itHead,
            s = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (r = this._trackByFn(t, (n = e[t]))),
                null !== i && Kt(i.trackById, r)
                  ? (s && (i = this._verifyReinsertion(i, n, r, t)),
                    Kt(i.item, n) || this._addIdentityChange(i, n))
                  : ((i = this._mismatch(i, n, r, t)), (s = !0)),
                (i = i._next);
          } else
            (t = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Wt()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, e => {
                (r = this._trackByFn(t, e)),
                  null !== i && Kt(i.trackById, r)
                    ? (s && (i = this._verifyReinsertion(i, e, r, t)),
                      Kt(i.item, e) || this._addIdentityChange(i, e))
                    : ((i = this._mismatch(i, e, r, t)), (s = !0)),
                  (i = i._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(i), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = t
            )
              (e.previousIndex = e.currentIndex), (t = e._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let i;
          return (
            null === e ? (i = this._itTail) : ((i = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Kt(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, i, r))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Kt(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, i, r))
              : (e = this._addAfter(new En(t, n), i, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== i
              ? (e = this._reinsertAfter(i, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            i = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
            null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new Tn()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return e.previousIndex === t
            ? e
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
              e);
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Tn()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class En {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class Sn {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && Kt(n.trackById, e))
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class Tn {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new Sn()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function In(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class An {
        constructor() {}
        supports(e) {
          return e instanceof Map || Jt(e);
        }
        create() {
          return new On();
        }
      }
      class On {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || Jt(e)))
              throw new Error(
                `Error trying to diff '${be(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              i = n._next;
            return (
              r && (r._next = i),
              i && (i._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Pn(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Kt(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach(n => t(e[n], n));
        }
      }
      class Pn {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Mn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new de(), new ce()]]
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${
                  ((n = e), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (e.ngInjectableDef = fe({
              token: e,
              providedIn: 'root',
              factory: () => new e([new Cn()])
            })),
            e
          );
        })(),
        Rn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new de(), new ce()]]
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ngInjectableDef = fe({
              token: e,
              providedIn: 'root',
              factory: () => new e([new An()])
            })),
            e
          );
        })();
      const Nn = [new An()],
        Dn = new Mn([new Cn()]),
        Fn = new Rn(Nn);
      let Ln = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Vn(e, mn)), e;
      })();
      const Vn = dn;
      let Un = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => jn(e, mn)), e;
      })();
      const jn = dn;
      function $n(e, t, n, r) {
        let i = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (i +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function (e, t) {
            const n = new Error(e);
            return zn(n, t), n;
          })(i, e)
        );
      }
      function zn(e, t) {
        (e[Ze] = t), (e[Xe] = t.logError.bind(t));
      }
      function Bn(e) {
        return new Error(
          `ViewDestroyedError: Attempt to use a destroyed view: ${e}`
        );
      }
      function Hn(e, t, n) {
        const r = e.state,
          i = 1792 & r;
        return i === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : i === n;
      }
      function qn(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function Gn(e, t) {
        return e.nodes[t];
      }
      function Qn(e, t) {
        return e.nodes[t];
      }
      function Wn(e, t) {
        return e.nodes[t];
      }
      function Kn(e, t) {
        return e.nodes[t];
      }
      function Zn(e, t) {
        return e.nodes[t];
      }
      const Yn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0
        },
        Xn = () => {},
        Jn = new Map();
      function er(e) {
        let t = Jn.get(e);
        return t || ((t = be(e) + '_' + Jn.size), Jn.set(e, t)), t;
      }
      function tr(e, t, n, r) {
        if (Yt.isWrapped(r)) {
          r = Yt.unwrap(r);
          const i = e.def.nodes[t].bindingIndex + n,
            s = Yt.unwrap(e.oldValues[i]);
          e.oldValues[i] = new Yt(s);
        }
        return r;
      }
      const nr = '$$undefined',
        rr = '$$empty';
      function ir(e) {
        return {
          id: nr,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data
        };
      }
      let sr = 0;
      function or(e, t, n, r) {
        return !(!(2 & e.state) && Kt(e.oldValues[t.bindingIndex + n], r));
      }
      function lr(e, t, n, r) {
        return !!or(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function ar(e, t, n, r) {
        const i = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Zt(i, r)) {
          const s = t.bindings[n].name;
          throw $n(
            Yn.createDebugContext(e, t.nodeIndex),
            `${s}: ${i}`,
            `${s}: ${r}`,
            0 != (1 & e.state)
          );
        }
      }
      function ur(e) {
        let t = e;
        for (; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function cr(e, t) {
        let n = e;
        for (; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function hr(e, t, n, r) {
        try {
          return (
            ur(33554432 & e.def.nodes[t].flags ? Qn(e, t).componentView : e),
            Yn.handleEvent(e, t, n, r)
          );
        } catch (i) {
          e.root.errorHandler.handleError(i);
        }
      }
      function dr(e) {
        return e.parent ? Qn(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function mr(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function pr(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Qn(e, t.nodeIndex).renderElement;
          case 2:
            return Gn(e, t.nodeIndex).renderText;
        }
      }
      function fr(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function gr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function _r(e) {
        return 1 << e % 32;
      }
      function br(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, i]) => {
              'number' == typeof e ? ((t[e] = i), (n |= _r(e))) : (r[e] = i);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function yr(e, t) {
        return e.map(e => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              t &&
              Object.defineProperty(n, Ne, { value: t, configurable: !0 }),
            { flags: r, token: n, tokenKey: er(n) }
          );
        });
      }
      function vr(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === We.Native)
            ? Qn(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const wr = new WeakMap();
      function Cr(e) {
        let t = wr.get(e);
        return t || (((t = e(() => Xn)).factory = e), wr.set(e, t)), t;
      }
      function xr(e, t, n, r, i) {
        3 === t && (n = e.renderer.parentNode(pr(e, e.def.lastRenderRootNode))),
          kr(e, t, 0, e.def.nodes.length - 1, n, r, i);
      }
      function kr(e, t, n, r, i, s, o) {
        for (let l = n; l <= r; l++) {
          const n = e.def.nodes[l];
          11 & n.flags && Sr(e, n, t, i, s, o), (l += n.childCount);
        }
      }
      function Er(e, t, n, r, i, s) {
        let o = e;
        for (; o && !fr(o); ) o = o.parent;
        const l = o.parent,
          a = mr(o),
          u = a.nodeIndex + a.childCount;
        for (let c = a.nodeIndex + 1; c <= u; c++) {
          const e = l.def.nodes[c];
          e.ngContentIndex === t && Sr(l, e, n, r, i, s), (c += e.childCount);
        }
        if (!l.parent) {
          const o = e.root.projectableNodes[t];
          if (o) for (let t = 0; t < o.length; t++) Tr(e, o[t], n, r, i, s);
        }
      }
      function Sr(e, t, n, r, i, s) {
        if (8 & t.flags) Er(e, t.ngContent.index, n, r, i, s);
        else {
          const o = pr(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && Tr(e, o, n, r, i, s),
                32 & t.bindingFlags &&
                  Tr(Qn(e, t.nodeIndex).componentView, o, n, r, i, s))
              : Tr(e, o, n, r, i, s),
            16777216 & t.flags)
          ) {
            const o = Qn(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < o.length; e++) xr(o[e], n, r, i, s);
          }
          1 & t.flags &&
            !t.element.name &&
            kr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, i, s);
        }
      }
      function Tr(e, t, n, r, i, s) {
        const o = e.renderer;
        switch (n) {
          case 1:
            o.appendChild(r, t);
            break;
          case 2:
            o.insertBefore(r, t, i);
            break;
          case 3:
            o.removeChild(r, t);
            break;
          case 0:
            s.push(t);
        }
      }
      const Ir = /^:([^:]+):(.+)$/;
      function Ar(e) {
        if (':' === e[0]) {
          const t = e.match(Ir);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function Or(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      const Pr = new Object(),
        Mr = er(Lt),
        Rr = er(Ie),
        Nr = er(He);
      function Dr(e, t, n, r) {
        return (
          (n = we(n)),
          { index: -1, deps: yr(r, be(t)), flags: e, token: t, value: n }
        );
      }
      function Fr(e, t, n = Lt.THROW_IF_NOT_FOUND) {
        const r = Ve(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          const o = t.tokenKey;
          switch (o) {
            case Mr:
            case Rr:
            case Nr:
              return e;
          }
          const l = e._def.providersByKey[o];
          let a;
          if (l) {
            let t = e._providers[l.index];
            return (
              void 0 === t && (t = e._providers[l.index] = Lr(e, l)),
              t === Pr ? void 0 : t
            );
          }
          if (
            (a = ge(t.token)) &&
            ((i = e),
            null != (s = a).providedIn &&
              ((function (e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(i, s.providedIn) ||
                ('root' === s.providedIn && i._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: a.factory,
                deps: [],
                index: n,
                token: t.token
              }),
              (e._providers[n] = Pr),
              (e._providers[n] = Lr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Ve(r);
        }
        var i, s;
      }
      function Lr(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function (e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Fr(e, n[0]));
                case 2:
                  return new t(Fr(e, n[0]), Fr(e, n[1]));
                case 3:
                  return new t(Fr(e, n[0]), Fr(e, n[1]), Fr(e, n[2]));
                default:
                  const i = new Array(r);
                  for (let t = 0; t < r; t++) i[t] = Fr(e, n[t]);
                  return new t(...i);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function (e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Fr(e, n[0]));
                case 2:
                  return t(Fr(e, n[0]), Fr(e, n[1]));
                case 3:
                  return t(Fr(e, n[0]), Fr(e, n[1]), Fr(e, n[2]));
                default:
                  const i = Array(r);
                  for (let t = 0; t < r; t++) i[t] = Fr(e, n[t]);
                  return t(...i);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Fr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === Pr ||
            null === n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? Pr : n
        );
      }
      function Vr(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        const r = n[t];
        return (
          (r.viewContainerParent = null),
          Qe(n, t),
          Yn.dirtyParentQueries(r),
          jr(r),
          r
        );
      }
      function Ur(e, t, n) {
        const r = t ? pr(t, t.def.lastRenderRootNode) : e.renderElement,
          i = n.renderer.parentNode(r),
          s = n.renderer.nextSibling(r);
        xr(n, 2, i, s, void 0);
      }
      function jr(e) {
        xr(e, 3, null, null, void 0);
      }
      const $r = new Object();
      function zr(e, t, n, r, i, s) {
        return new Br(e, t, n, r, i, s);
      }
      class Br extends sn {
        constructor(e, t, n, r, i, s) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = i),
            (this.ngContentSelectors = s),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs)
            e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error('ngModule should be provided');
          const i = Cr(this.viewDefFactory),
            s = i.nodes[0].element.componentProvider.nodeIndex,
            o = Yn.createRootView(e, t || [], n, i, r, $r),
            l = Wn(o, s).instance;
          return (
            n &&
              o.renderer.setAttribute(
                Qn(o, 0).renderElement,
                'ng-version',
                wn.full
              ),
            new Hr(o, new Wr(o), l)
          );
        }
      }
      class Hr extends rn {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new mn(Qn(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Xr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function qr(e, t, n) {
        return new Gr(e, t, n);
      }
      class Gr {
        constructor(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        get element() {
          return new mn(this._data.renderElement);
        }
        get injector() {
          return new Xr(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = mr(e)), (e = e.parent);
          return e ? new Xr(e, t) : new Xr(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = Vr(this._data, e);
            Yn.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new Wr(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, i) {
          const s = n || this.parentInjector;
          i || e instanceof hn || (i = s.get(He));
          const o = e.create(s, r, void 0, i);
          return this.insert(o.hostView, t), o;
        }
        insert(e, t) {
          if (e.destroyed)
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          const n = e;
          return (
            (function (e, t, n, r) {
              let i = t.viewContainer._embeddedViews;
              null == n && (n = i.length),
                (r.viewContainerParent = e),
                Ge(i, n, r),
                (function (e, t) {
                  const n = dr(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function (e, t) {
                      if (4 & t.flags) return;
                      (e.nodeFlags |= 4), (t.flags |= 4);
                      let n = t.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(t.parent.def, t.parentNodeDef);
                })(t, r),
                Yn.dirtyParentQueries(r),
                Ur(t, n > 0 ? i[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed)
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function (e, t, n) {
              const r = e.viewContainer._embeddedViews,
                i = r[t];
              Qe(r, t),
                null == n && (n = r.length),
                Ge(r, n, i),
                Yn.dirtyParentQueries(i),
                jr(i),
                Ur(e, n > 0 ? r[n - 1] : null, i);
            })(this._data, n, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = Vr(this._data, e);
          t && Yn.destroyView(t);
        }
        detach(e) {
          const t = Vr(this._data, e);
          return t ? new Wr(t) : null;
        }
      }
      function Qr(e) {
        return new Wr(e);
      }
      class Wr {
        constructor(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        get rootNodes() {
          return (function (e) {
            const t = [];
            return xr(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          ur(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            Yn.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          Yn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            Yn.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null),
            jr(this._view),
            Yn.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._viewContainerRef = e;
        }
      }
      function Kr(e, t) {
        return new Zr(e, t);
      }
      class Zr extends Ln {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new Wr(
            Yn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }
        get elementRef() {
          return new mn(
            Qn(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      function Yr(e, t) {
        return new Xr(e, t);
      }
      class Xr {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = Lt.THROW_IF_NOT_FOUND) {
          return Yn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: er(e) },
            t
          );
        }
      }
      function Jr(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = Qn(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return Gn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return Wn(e, n.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${t}`);
      }
      function ei(e) {
        return new ti(e.renderer);
      }
      class ti {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = Ar(t),
            i = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, i), i;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment('');
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let i = 0; i < t.length; i++)
            this.delegate.insertBefore(n, t[i], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, i] = Ar(t);
          null != n
            ? this.delegate.setAttribute(e, i, n, r)
            : this.delegate.removeAttribute(e, i, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function ni(e, t, n, r) {
        return new ri(e, t, n, r);
      }
      class ri {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function (e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const i = t.providers[r];
                4096 & i.flags || (void 0 === n[r] && (n[r] = Lr(e, i)));
              }
            })(this);
        }
        get(e, t = Lt.THROW_IF_NOT_FOUND, n = me.Default) {
          let r = 0;
          return (
            n & me.SkipSelf ? (r |= 1) : n & me.Self && (r |= 4),
            Fr(this, { token: e, tokenKey: er(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(un);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${be(
                this.instance.constructor
              )} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function (e, t) {
              const n = e._def,
                r = new Set();
              for (let i = 0; i < n.providers.length; i++)
                if (131072 & n.providers[i].flags) {
                  const t = e._providers[i];
                  if (t && t !== Pr) {
                    const e = t.ngOnDestroy;
                    'function' != typeof e ||
                      r.has(t) ||
                      (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach(e => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const ii = er(fn),
        si = er(bn),
        oi = er(mn),
        li = er(Un),
        ai = er(Ln),
        ui = er(Rt),
        ci = er(Lt),
        hi = er(Ie);
      function di(e, t, n, r, i, s, o, l) {
        const a = [];
        if (o)
          for (let c in o) {
            const [e, t] = o[c];
            a[e] = {
              flags: 8,
              name: c,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null
            };
          }
        const u = [];
        if (l)
          for (let c in l)
            u.push({ type: 1, propName: c, target: null, eventName: l[c] });
        return fi(e, (t |= 16384), n, r, i, i, s, a, u);
      }
      function mi(e, t, n) {
        return fi(-1, (e |= 16), null, 0, t, t, n);
      }
      function pi(e, t, n, r, i) {
        return fi(-1, e, t, 0, n, r, i);
      }
      function fi(e, t, n, r, i, s, o, l, a) {
        const { matchedQueries: u, references: c, matchedQueryIds: h } = br(n);
        a || (a = []), l || (l = []), (s = we(s));
        const d = yr(o, be(i));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: u,
          matchedQueryIds: h,
          references: c,
          ngContentIndex: -1,
          childCount: r,
          bindings: l,
          bindingFlags: Or(l),
          outputs: a,
          element: null,
          provider: { token: i, value: s, deps: d },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function gi(e, t) {
        return vi(e, t);
      }
      function _i(e, t) {
        let n = e;
        for (; n.parent && !fr(n); ) n = n.parent;
        return wi(n.parent, mr(n), !0, t.provider.value, t.provider.deps);
      }
      function bi(e, t) {
        const n = wi(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length)
          for (let r = 0; r < t.outputs.length; r++) {
            const i = t.outputs[r],
              s = n[i.propName];
            if (!tn(s))
              throw new Error(
                `@Output ${i.propName} not initialized in '${n.constructor.name}'.`
              );
            {
              const n = s.subscribe(yi(e, t.parent.nodeIndex, i.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function yi(e, t, n) {
        return r => hr(e, t, n, r);
      }
      function vi(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return wi(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function (e, t, n, r, i) {
              const s = i.length;
              switch (s) {
                case 0:
                  return r();
                case 1:
                  return r(xi(e, t, n, i[0]));
                case 2:
                  return r(xi(e, t, n, i[0]), xi(e, t, n, i[1]));
                case 3:
                  return r(
                    xi(e, t, n, i[0]),
                    xi(e, t, n, i[1]),
                    xi(e, t, n, i[2])
                  );
                default:
                  const o = Array(s);
                  for (let r = 0; r < s; r++) o[r] = xi(e, t, n, i[r]);
                  return r(...o);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return xi(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function wi(e, t, n, r, i) {
        const s = i.length;
        switch (s) {
          case 0:
            return new r();
          case 1:
            return new r(xi(e, t, n, i[0]));
          case 2:
            return new r(xi(e, t, n, i[0]), xi(e, t, n, i[1]));
          case 3:
            return new r(
              xi(e, t, n, i[0]),
              xi(e, t, n, i[1]),
              xi(e, t, n, i[2])
            );
          default:
            const o = new Array(s);
            for (let r = 0; r < s; r++) o[r] = xi(e, t, n, i[r]);
            return new r(...o);
        }
      }
      const Ci = {};
      function xi(e, t, n, r, i = Lt.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const s = e;
        2 & r.flags && (i = null);
        const o = r.tokenKey;
        o === ui && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        let l = e;
        for (; l; ) {
          if (t)
            switch (o) {
              case ii:
                return ei(ki(l, t, n));
              case si:
                return ki(l, t, n).renderer;
              case oi:
                return new mn(Qn(l, t.nodeIndex).renderElement);
              case li:
                return Qn(l, t.nodeIndex).viewContainer;
              case ai:
                if (t.element.template) return Qn(l, t.nodeIndex).template;
                break;
              case ui:
                return Qr(ki(l, t, n));
              case ci:
              case hi:
                return Yr(l, t);
              default:
                const e = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[o];
                if (e) {
                  let t = Wn(l, e.nodeIndex);
                  return (
                    t ||
                      ((t = { instance: vi(l, e) }),
                      (l.nodes[e.nodeIndex] = t)),
                    t.instance
                  );
                }
            }
          (n = fr(l)), (t = mr(l)), (l = l.parent), 4 & r.flags && (l = null);
        }
        const a = s.root.injector.get(r.token, Ci);
        return a !== Ci || i === Ci
          ? a
          : s.root.ngModule.injector.get(r.token, i);
      }
      function ki(e, t, n) {
        let r;
        if (n) r = Qn(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !fr(r); ) r = r.parent;
        return r;
      }
      function Ei(e, t, n, r, i, s) {
        if (32768 & n.flags) {
          const t = Qn(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = i), 524288 & n.flags)) {
          s = s || {};
          const t = Yt.unwrap(e.oldValues[n.bindingIndex + r]);
          s[n.bindings[r].nonMinifiedName] = new nn(t, i, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = i), s;
      }
      function Si(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          let o = s.parent;
          for (
            !o && s.flags & t && Ii(e, i, s.flags & t, r++),
              0 == (s.childFlags & t) && (i += s.childCount);
            o && 1 & o.flags && i === o.nodeIndex + o.childCount;

          )
            o.directChildFlags & t && (r = Ti(e, o, t, r)), (o = o.parent);
        }
      }
      function Ti(e, t, n, r) {
        for (let i = t.nodeIndex + 1; i <= t.nodeIndex + t.childCount; i++) {
          const t = e.def.nodes[i];
          t.flags & n && Ii(e, i, t.flags & n, r++), (i += t.childCount);
        }
        return r;
      }
      function Ii(e, t, n, r) {
        const i = Wn(e, t);
        if (!i) return;
        const s = i.instance;
        s &&
          (Yn.setCurrentNode(e, t),
          1048576 & n && qn(e, 512, r) && s.ngAfterContentInit(),
          2097152 & n && s.ngAfterContentChecked(),
          4194304 & n && qn(e, 768, r) && s.ngAfterViewInit(),
          8388608 & n && s.ngAfterViewChecked(),
          131072 & n && s.ngOnDestroy());
      }
      const Ai = new Te('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: () => Ke
        }),
        Oi = {},
        Pi = (function () {
          var e = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19
          };
          return (
            (e[e.LocaleId] = 'LocaleId'),
            (e[e.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (e[e.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (e[e.DaysFormat] = 'DaysFormat'),
            (e[e.DaysStandalone] = 'DaysStandalone'),
            (e[e.MonthsFormat] = 'MonthsFormat'),
            (e[e.MonthsStandalone] = 'MonthsStandalone'),
            (e[e.Eras] = 'Eras'),
            (e[e.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (e[e.WeekendRange] = 'WeekendRange'),
            (e[e.DateFormat] = 'DateFormat'),
            (e[e.TimeFormat] = 'TimeFormat'),
            (e[e.DateTimeFormat] = 'DateTimeFormat'),
            (e[e.NumberSymbols] = 'NumberSymbols'),
            (e[e.NumberFormats] = 'NumberFormats'),
            (e[e.CurrencySymbol] = 'CurrencySymbol'),
            (e[e.CurrencyName] = 'CurrencyName'),
            (e[e.Currencies] = 'Currencies'),
            (e[e.PluralCase] = 'PluralCase'),
            (e[e.ExtraData] = 'ExtraData'),
            e
          );
        })(),
        Mi = void 0;
      var Ri = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Mi],
        [['AM', 'PM'], Mi, Mi],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Mi,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        Mi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Mi, "{1} 'at' {0}", Mi],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':'
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function (e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        }
      ];
      const Ni = 'en-US';
      let Di = Ni;
      function Fi(e) {
        var t;
        (t = 'Expected localeId to be defined'),
          null == e &&
            (function (e) {
              throw new Error(`ASSERTION ERROR: ${e}`);
            })(t),
          'string' == typeof e && (Di = e.toLowerCase().replace(/_/g, '-'));
      }
      class Li extends T {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            i = e => null,
            s = () => null;
          e && 'object' == typeof e
            ? ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e.next(t));
                  }
                : t => {
                    e.next(t);
                  }),
              e.error &&
                (i = this.__isAsync
                  ? t => {
                      setTimeout(() => e.error(t));
                    }
                  : t => {
                      e.error(t);
                    }),
              e.complete &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e(t));
                  }
                : t => {
                    e(t);
                  }),
              t &&
                (i = this.__isAsync
                  ? e => {
                      setTimeout(() => t(e));
                    }
                  : e => {
                      t(e);
                    }),
              n &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, i, s);
          return e instanceof d && e.add(o), o;
        }
      }
      function Vi() {
        return this._results[Wt()]();
      }
      class Ui {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new Li()),
            (this.length = 0);
          const e = Wt(),
            t = Ui.prototype;
          t[e] || (t[e] = Vi);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let i = t[r];
              Array.isArray(i)
                ? (n === t && (n = t.slice(0, r)), e(i, n))
                : n !== t && n.push(i);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const ji = new Te('Application Initializer');
      class $i {
        constructor(e) {
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const e = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              en(t) && e.push(t);
            }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch(e => {
              this.reject(e);
            }),
            0 === e.length && t(),
            (this.initialized = !0);
        }
      }
      const zi = new Te('AppId');
      function Bi() {
        return `${Hi()}${Hi()}${Hi()}`;
      }
      function Hi() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const qi = new Te('Platform Initializer'),
        Gi = new Te('Platform ID'),
        Qi = new Te('appBootstrapListener');
      class Wi {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      const Ki = new Te('LocaleId'),
        Zi = !1;
      function Yi() {
        throw new Error('Runtime compiler is not loaded');
      }
      const Xi = Yi,
        Ji = Yi,
        es = Yi,
        ts = Yi;
      class ns {
        constructor() {
          (this.compileModuleSync = Xi),
            (this.compileModuleAsync = Ji),
            (this.compileModuleAndAllComponentsSync = es),
            (this.compileModuleAndAllComponentsAsync = ts);
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      class rs {}
      let is, ss;
      function os() {
        const e = Se.wtf;
        return !(!e || !(is = e.trace) || ((ss = is.events), 0));
      }
      const ls = os();
      function as(e, t) {
        return null;
      }
      const us = ls
          ? function (e, t = null) {
              return ss.createScope(e, t);
            }
          : (e, t) => as,
        cs = ls
          ? function (e, t) {
              return is.leaveScope(e, t), t;
            }
          : (e, t) => t,
        hs = (() => Promise.resolve(0))();
      function ds(e) {
        'undefined' == typeof Zone
          ? hs.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class ms {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Li(!1)),
            (this.onMicrotaskEmpty = new Li(!1)),
            (this.onStable = new Li(!1)),
            (this.onError = new Li(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, i, s, o) => {
                try {
                  return _s(t), e.invokeTask(r, i, s, o);
                } finally {
                  bs(t);
                }
              },
              onInvoke: (e, n, r, i, s, o, l) => {
                try {
                  return _s(t), e.invoke(r, i, s, o, l);
                } finally {
                  bs(t);
                }
              },
              onHasTask: (e, n, r, i) => {
                e.hasTask(r, i),
                  n === r &&
                    ('microTask' == i.change
                      ? ((t.hasPendingMicrotasks = i.microTask), gs(t))
                      : 'macroTask' == i.change &&
                        (t.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: (e, n, r, i) => (
                e.handleError(r, i),
                t.runOutsideAngular(() => t.onError.emit(i)),
                !1
              )
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!ms.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (ms.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const i = this._inner,
            s = i.scheduleEventTask('NgZoneEvent: ' + r, e, fs, ps, ps);
          try {
            return i.runTask(s, t, n);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function ps() {}
      const fs = {};
      function gs(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function _s(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function bs(e) {
        e._nesting--, gs(e);
      }
      class ys {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Li()),
            (this.onMicrotaskEmpty = new Li()),
            (this.onStable = new Li()),
            (this.onError = new Li());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      class vs {
        constructor(e) {
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            e.run(() => {
              this.taskTrackingZone =
                'undefined' == typeof Zone
                  ? null
                  : Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            }
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  ms.assertNotInAngularZone(),
                    ds(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                }
              });
            });
        }
        increasePendingRequestCount() {
          return (
            (this._pendingCount += 1), (this._didWork = !0), this._pendingCount
          );
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable &&
            0 === this._pendingCount &&
            !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            ds(() => {
              for (; 0 !== this._callbacks.length; ) {
                let e = this._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let e = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              t =>
                !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map(e => ({
                source: e.source,
                creationLocation: e.creationLocation,
                data: e.data
              }))
            : [];
        }
        addCallback(e, t, n) {
          let r = -1;
          t &&
            t > 0 &&
            (r = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(
                e => e.timeoutId !== r
              )),
                e(this._didWork, this.getPendingTasks());
            }, t)),
            this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
        }
        whenStable(e, t, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(e, t, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(e, t, n) {
          return [];
        }
      }
      class ws {
        constructor() {
          (this._applications = new Map()), ks.addToWindow(this);
        }
        registerApplication(e, t) {
          this._applications.set(e, t);
        }
        unregisterApplication(e) {
          this._applications.delete(e);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(e) {
          return this._applications.get(e) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(e, t = !0) {
          return ks.findTestabilityInTree(this, e, t);
        }
      }
      class Cs {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let xs,
        ks = new Cs(),
        Es = function (e, t, n) {
          return e.get(rs).createCompiler([t]).compileModuleAsync(n);
        },
        Ss = function (e) {
          return e instanceof hn;
        };
      const Ts = new Te('AllowMultipleToken');
      class Is {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function As(e, t, n = []) {
        const r = `Platform: ${t}`,
          i = new Te(r);
        return (t = []) => {
          let s = Os();
          if (!s || s.injector.get(Ts, !1))
            if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: i, useValue: !0 });
              !(function (e) {
                if (xs && !xs.destroyed && !xs.injector.get(Ts, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                xs = e.get(Ps);
                const t = e.get(qi, null);
                t && t.forEach(e => e());
              })(Lt.create({ providers: e, name: r }));
            }
          return (function (e) {
            const t = Os();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(i);
        };
      }
      function Os() {
        return xs && !xs.destroyed ? xs : null;
      }
      class Ps {
        constructor(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(e, t) {
          const n =
              'noop' === (i = t ? t.ngZone : void 0)
                ? new ys()
                : ('zone.js' === i ? void 0 : i) ||
                  new ms({ enableLongStackTrace: st() }),
            r = [{ provide: ms, useValue: n }];
          var i;
          return n.run(() => {
            const t = Lt.create({
                providers: r,
                parent: this.injector,
                name: e.moduleType.name
              }),
              i = e.create(t),
              s = i.injector.get(nt, null);
            if (!s)
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            return (
              Zi && Fi(i.injector.get(Ki, Ni) || Ni),
              i.onDestroy(() => Ns(this._modules, i)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: e => {
                    s.handleError(e);
                  }
                })
              ),
              (function (e, t, n) {
                try {
                  const r = n();
                  return en(r)
                    ? r.catch(n => {
                        throw (t.runOutsideAngular(() => e.handleError(n)), n);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(s, n, () => {
                const e = i.injector.get($i);
                return (
                  e.runInitializers(),
                  e.donePromise.then(() => (this._moduleDoBootstrap(i), i))
                );
              })
            );
          });
        }
        bootstrapModule(e, t = []) {
          const n = Ms({}, t);
          return Es(this.injector, n, e).then(e =>
            this.bootstrapModuleFactory(e, n)
          );
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(Rs);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach(e => t.bootstrap(e));
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                `The module ${be(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed)
            throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach(e => e.destroy()),
            this._destroyListeners.forEach(e => e()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function Ms(e, t) {
        return Array.isArray(t) ? t.reduce(Ms, e) : Object.assign({}, e, t);
      }
      let Rs = (() => {
        class e {
          constructor(e, t, n, r, i, s) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = i),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = st()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const o = new w(e => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              l = new w(e => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    ms.assertNotInAngularZone(),
                      ds(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  ms.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = X(o, l.pipe(oe()));
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n =
              e instanceof sn
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = Ss(n) ? null : this._injector.get(He),
              i = n.create(Lt.NULL, [], t || n.selector, r);
            i.onDestroy(() => {
              this._unloadComponent(i);
            });
            const s = i.injector.get(vs, null);
            return (
              s &&
                i.injector
                  .get(ws)
                  .registerApplication(i.location.nativeElement, s),
              this._loadComponent(i),
              st() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              i
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            const t = e._tickScope();
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges)
                for (let e of this._views) e.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              (this._runningTick = !1), cs(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            Ns(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Qi, [])
                .concat(this._bootstrapListeners)
                .forEach(t => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), Ns(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach(e => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (e._tickScope = us('ApplicationRef#tick()')), e;
      })();
      function Ns(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class Ds {}
      const Fs = '#',
        Ls = 'NgFactory';
      class Vs {}
      const Us = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class js {
        constructor(e, t) {
          (this._compiler = e), (this._config = t || Us);
        }
        load(e) {
          return !Zi && this._compiler instanceof ns
            ? this.loadFactory(e)
            : this.loadAndCompile(e);
        }
        loadAndCompile(e) {
          let [t, r] = e.split(Fs);
          return (
            void 0 === r && (r = 'default'),
            n('zn8P')(t)
              .then(e => e[r])
              .then(e => $s(e, t, r))
              .then(e => this._compiler.compileModuleAsync(e))
          );
        }
        loadFactory(e) {
          let [t, r] = e.split(Fs),
            i = Ls;
          return (
            void 0 === r && ((r = 'default'), (i = '')),
            n('zn8P')(
              this._config.factoryPathPrefix +
                t +
                this._config.factoryPathSuffix
            )
              .then(e => e[r + i])
              .then(e => $s(e, t, r))
          );
        }
      }
      function $s(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      class zs {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class Bs {
        constructor(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof Hs && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class Hs extends Bs {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach(t => {
              t.parent && t.parent.removeChild(t), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach(t => {
                t instanceof Hs && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof Hs &&
                t.childNodes.forEach(t => {
                  n(t) && r.push(t), t instanceof Hs && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter(e => e instanceof Hs);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach(n => {
            n.name == e && n.callback(t);
          });
        }
      }
      const qs = new Map(),
        Gs = function (e) {
          return qs.get(e) || null;
        };
      function Qs(e) {
        qs.set(e.nativeNode, e);
      }
      const Ws = As(null, 'core', [
        { provide: Gi, useValue: 'unknown' },
        { provide: Ps, deps: [Lt] },
        { provide: ws, deps: [] },
        { provide: Wi, deps: [] }
      ]);
      function Ks() {
        return Dn;
      }
      function Zs() {
        return Fn;
      }
      function Ys(e) {
        return e ? (Zi && Fi(e), e) : Ni;
      }
      function Xs(e) {
        let t = [];
        return (
          e.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function (e) {
            t.push(e);
          }
        );
      }
      class Js {
        constructor(e) {}
      }
      function eo(e, t, n, r, i, s) {
        e |= 1;
        const { matchedQueries: o, references: l, matchedQueryIds: a } = br(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: a,
          references: l,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: s ? Cr(s) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: i || Xn
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function to(e, t, n, r, i, s, o = [], l, a, u, c, h) {
        u || (u = Xn);
        const { matchedQueries: d, references: m, matchedQueryIds: p } = br(n);
        let f = null,
          g = null;
        s && ([f, g] = Ar(s)), (l = l || []);
        const _ = new Array(l.length);
        for (let v = 0; v < l.length; v++) {
          const [e, t, n] = l[v],
            [r, i] = Ar(t);
          let s = void 0,
            o = void 0;
          switch (15 & e) {
            case 4:
              o = n;
              break;
            case 1:
            case 8:
              s = n;
          }
          _[v] = {
            flags: e,
            ns: r,
            name: i,
            nonMinifiedName: i,
            securityContext: s,
            suffix: o
          };
        }
        a = a || [];
        const b = new Array(a.length);
        for (let v = 0; v < a.length; v++) {
          const [e, t] = a[v];
          b[v] = { type: 0, target: e, eventName: t, propName: null };
        }
        const y = (o = o || []).map(([e, t]) => {
          const [n, r] = Ar(e);
          return [n, r, t];
        });
        return (
          (h = (function (e) {
            if (e && e.id === nr) {
              const t =
                (null != e.encapsulation && e.encapsulation !== We.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? `c${sr++}` : rr;
            }
            return e && e.id === rr && (e = null), e || null;
          })(h)),
          c && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: p,
            references: m,
            ngContentIndex: r,
            childCount: i,
            bindings: _,
            bindingFlags: Or(_),
            outputs: b,
            element: {
              ns: f,
              name: g,
              attrs: y,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: u || Xn
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function no(e, t, n) {
        const r = n.element,
          i = e.root.selectorOrNode,
          s = e.renderer;
        let o;
        if (e.parent || !i) {
          o = r.name ? s.createElement(r.name, r.ns) : s.createComment('');
          const i = vr(e, t, n);
          i && s.appendChild(i, o);
        } else
          o = s.selectRootElement(
            i,
            !!r.componentRendererType &&
              r.componentRendererType.encapsulation === We.ShadowDom
          );
        if (r.attrs)
          for (let l = 0; l < r.attrs.length; l++) {
            const [e, t, n] = r.attrs[l];
            s.setAttribute(o, t, n, e);
          }
        return o;
      }
      function ro(e, t, n, r) {
        for (let o = 0; o < n.outputs.length; o++) {
          const l = n.outputs[o],
            a = io(
              e,
              n.nodeIndex,
              ((s = l.eventName), (i = l.target) ? `${i}:${s}` : s)
            );
          let u = l.target,
            c = e;
          'component' === l.target && ((u = null), (c = t));
          const h = c.renderer.listen(u || r, l.eventName, a);
          e.disposables[n.outputIndex + o] = h;
        }
        var i, s;
      }
      function io(e, t, n) {
        return r => hr(e, t, n, r);
      }
      function so(e, t, n, r) {
        if (!lr(e, t, n, r)) return !1;
        const i = t.bindings[n],
          s = Qn(e, t.nodeIndex),
          o = s.renderElement,
          l = i.name;
        switch (15 & i.flags) {
          case 1:
            !(function (e, t, n, r, i, s) {
              const o = t.securityContext;
              let l = o ? e.root.sanitizer.sanitize(o, s) : s;
              l = null != l ? l.toString() : null;
              const a = e.renderer;
              null != s
                ? a.setAttribute(n, i, l, r)
                : a.removeAttribute(n, i, r);
            })(e, i, o, i.ns, l, r);
            break;
          case 2:
            !(function (e, t, n, r) {
              const i = e.renderer;
              r ? i.addClass(t, n) : i.removeClass(t, n);
            })(e, o, l, r);
            break;
          case 4:
            !(function (e, t, n, r, i) {
              let s = e.root.sanitizer.sanitize(Tt.STYLE, i);
              if (null != s) {
                s = s.toString();
                const e = t.suffix;
                null != e && (s += e);
              } else s = null;
              const o = e.renderer;
              null != s ? o.setStyle(n, r, s) : o.removeStyle(n, r);
            })(e, i, o, l, r);
            break;
          case 8:
            !(function (e, t, n, r, i) {
              const s = t.securityContext;
              let o = s ? e.root.sanitizer.sanitize(s, i) : i;
              e.renderer.setProperty(n, r, o);
            })(
              33554432 & t.flags && 32 & i.flags ? s.componentView : e,
              i,
              o,
              l,
              r
            );
        }
        return !0;
      }
      function oo(e, t, n) {
        let r = [];
        for (let i in n) r.push({ propName: i, bindingType: n[i] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: t, filterId: _r(t), bindings: r },
          ngContent: null
        };
      }
      function lo(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && gr(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let i = 0; i <= r; i++) {
            const r = e.def.nodes[i];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              Zn(e, i).setDirty(),
              (!(1 & r.flags && i + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (i += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && Zn(e, n).setDirty(),
              (n += t.childCount);
          }
      }
      function ao(e, t) {
        const n = Zn(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          i = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (i = uo(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
            (r = Wn(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((i = uo(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(i);
        const s = t.query.bindings;
        let o = !1;
        for (let l = 0; l < s.length; l++) {
          const e = s[l];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (o = !0);
          }
          r[e.propName] = t;
        }
        o && n.notifyOnChanges();
      }
      function uo(e, t, n, r, i) {
        for (let s = t; s <= n; s++) {
          const t = e.def.nodes[s],
            n = t.matchedQueries[r.id];
          if (
            (null != n && i.push(co(e, t, n)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            const n = Qn(e, s);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (uo(e, s + 1, s + t.childCount, r, i), (s += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const s = e[t],
                  o = dr(s);
                o && o === n && uo(s, 0, s.def.nodes.length - 1, r, i);
              }
            }
            const o = n.template._projectedViews;
            if (o)
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                uo(t, 0, t.def.nodes.length - 1, r, i);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId &&
            (s += t.childCount);
        }
        return i;
      }
      function co(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Qn(e, t.nodeIndex).renderElement;
            case 0:
              return new mn(Qn(e, t.nodeIndex).renderElement);
            case 2:
              return Qn(e, t.nodeIndex).template;
            case 3:
              return Qn(e, t.nodeIndex).viewContainer;
            case 4:
              return Wn(e, t.nodeIndex).instance;
          }
      }
      function ho(e, t) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: t }
        };
      }
      function mo(e, t, n) {
        const r = vr(e, t, n);
        r && Er(e, n.ngContent.index, 1, r, null, void 0);
      }
      function po(e, t) {
        const n = Object.keys(t),
          r = n.length,
          i = new Array(r);
        for (let s = 0; s < r; s++) {
          const e = n[s];
          i[t[e]] = e;
        }
        return fo(64, e, i);
      }
      function fo(e, t, n) {
        const r = new Array(n.length);
        for (let i = 0; i < n.length; i++) {
          const e = n[i];
          r[i] = {
            flags: 8,
            name: e,
            ns: null,
            nonMinifiedName: e,
            securityContext: null,
            suffix: null
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: Or(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function go(e, t, n) {
        const r = new Array(n.length - 1);
        for (let i = 1; i < n.length; i++)
          r[i - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[i]
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null
        };
      }
      function _o(e, t, n) {
        let r;
        const i = e.renderer;
        r = i.createText(n.text.prefix);
        const s = vr(e, t, n);
        return s && i.appendChild(s, r), { renderText: r };
      }
      function bo(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function yo(e, t, n, r) {
        let i = 0,
          s = 0,
          o = 0,
          l = 0,
          a = 0,
          u = null,
          c = null,
          h = !1,
          d = !1,
          m = null;
        for (let p = 0; p < t.length; p++) {
          const e = t[p];
          if (
            ((e.nodeIndex = p),
            (e.parent = u),
            (e.bindingIndex = i),
            (e.outputIndex = s),
            (e.renderParent = c),
            (o |= e.flags),
            (a |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = u
              ? u.element.publicProviders
              : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              e.element.template &&
                (a |= e.element.template.nodeMatchedQueries);
          }
          if (
            (wo(u, e, t.length),
            (i += e.bindings.length),
            (s += e.outputs.length),
            !c && 3 & e.flags && (m = e),
            20224 & e.flags)
          ) {
            h ||
              ((h = !0),
              (u.element.publicProviders = Object.create(
                u.element.publicProviders
              )),
              (u.element.allProviders = u.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (u.element.publicProviders[er(e.provider.token)] = e)
              : (d ||
                  ((d = !0),
                  (u.element.allProviders = Object.create(
                    u.element.publicProviders
                  ))),
                (u.element.allProviders[er(e.provider.token)] = e)),
              t && (u.element.componentProvider = e);
          }
          if (
            (u
              ? ((u.childFlags |= e.flags),
                (u.directChildFlags |= e.flags),
                (u.childMatchedQueries |= e.matchedQueryIds),
                e.element &&
                  e.element.template &&
                  (u.childMatchedQueries |=
                    e.element.template.nodeMatchedQueries))
              : (l |= e.flags),
            e.childCount > 0)
          )
            (u = e), vo(e) || (c = e);
          else
            for (; u && p === u.nodeIndex + u.childCount; ) {
              const e = u.parent;
              e &&
                ((e.childFlags |= u.childFlags),
                (e.childMatchedQueries |= u.childMatchedQueries)),
                (c = (u = e) && vo(u) ? u.renderParent : u);
            }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: l,
          nodeMatchedQueries: a,
          flags: e,
          nodes: t,
          updateDirectives: n || Xn,
          updateRenderer: r || Xn,
          handleEvent: (e, n, r, i) => t[n].element.handleEvent(e, r, i),
          bindingCount: i,
          outputCount: s,
          lastRenderRootNode: m
        };
      }
      function vo(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function wo(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && e)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
            );
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
            );
        }
      }
      function Co(e, t, n, r) {
        const i = Eo(e.root, e.renderer, e, t, n);
        return So(i, e.component, r), To(i), i;
      }
      function xo(e, t, n) {
        const r = Eo(e, e.renderer, null, null, t);
        return So(r, n, n), To(r), r;
      }
      function ko(e, t, n, r) {
        const i = t.element.componentRendererType;
        let s;
        return (
          (s = i
            ? e.root.rendererFactory.createRenderer(r, i)
            : e.root.renderer),
          Eo(e.root, s, e, t.element.componentProvider, n)
        );
      }
      function Eo(e, t, n, r, i) {
        const s = new Array(i.nodes.length),
          o = i.outputCount ? new Array(i.outputCount) : null;
        return {
          def: i,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: s,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(i.bindingCount),
          disposables: o,
          initIndex: -1
        };
      }
      function So(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function To(e) {
        let t;
        fr(e) &&
          (t = Qn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let i = 0; i < n.nodes.length; i++) {
          const s = n.nodes[i];
          let o;
          switch ((Yn.setCurrentNode(e, i), 201347067 & s.flags)) {
            case 1:
              const n = no(e, t, s);
              let l = void 0;
              if (33554432 & s.flags) {
                const t = Cr(s.element.componentView);
                l = Yn.createComponentView(e, s, t, n);
              }
              ro(e, l, s, n),
                (o = {
                  renderElement: n,
                  componentView: l,
                  viewContainer: null,
                  template: s.element.template ? Kr(e, s) : void 0
                }),
                16777216 & s.flags && (o.viewContainer = qr(e, s, o));
              break;
            case 2:
              o = _o(e, t, s);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (o = r[i]) || 4096 & s.flags || (o = { instance: gi(e, s) });
              break;
            case 16:
              o = { instance: _i(e, s) };
              break;
            case 16384:
              (o = r[i]) || (o = { instance: bi(e, s) }),
                32768 & s.flags &&
                  So(
                    Qn(e, s.parent.nodeIndex).componentView,
                    o.instance,
                    o.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new Ui();
              break;
            case 8:
              mo(e, t, s), (o = void 0);
          }
          r[i] = o;
        }
        Fo(e, Do.CreateViewNodes), jo(e, 201326592, 268435456, 0);
      }
      function Io(e) {
        Po(e),
          Yn.updateDirectives(e, 1),
          Lo(e, Do.CheckNoChanges),
          Yn.updateRenderer(e, 1),
          Fo(e, Do.CheckNoChanges),
          (e.state &= -97);
      }
      function Ao(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Hn(e, 0, 256),
          Po(e),
          Yn.updateDirectives(e, 0),
          Lo(e, Do.CheckAndUpdate),
          jo(e, 67108864, 536870912, 0);
        let t = Hn(e, 256, 512);
        Si(e, 2097152 | (t ? 1048576 : 0)),
          Yn.updateRenderer(e, 0),
          Fo(e, Do.CheckAndUpdate),
          jo(e, 134217728, 536870912, 0),
          Si(e, 8388608 | ((t = Hn(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Hn(e, 768, 1024);
      }
      function Oo(e, t, n, r, i, s, o, l, a, u, c, h, d) {
        return 0 === n
          ? (function (e, t, n, r, i, s, o, l, a, u, c, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n, r, i, s, o, l, a, u, c, h) {
                    const d = t.bindings.length;
                    let m = !1;
                    return (
                      d > 0 && so(e, t, 0, n) && (m = !0),
                      d > 1 && so(e, t, 1, r) && (m = !0),
                      d > 2 && so(e, t, 2, i) && (m = !0),
                      d > 3 && so(e, t, 3, s) && (m = !0),
                      d > 4 && so(e, t, 4, o) && (m = !0),
                      d > 5 && so(e, t, 5, l) && (m = !0),
                      d > 6 && so(e, t, 6, a) && (m = !0),
                      d > 7 && so(e, t, 7, u) && (m = !0),
                      d > 8 && so(e, t, 8, c) && (m = !0),
                      d > 9 && so(e, t, 9, h) && (m = !0),
                      m
                    );
                  })(e, t, n, r, i, s, o, l, a, u, c, h);
                case 2:
                  return (function (e, t, n, r, i, s, o, l, a, u, c, h) {
                    let d = !1;
                    const m = t.bindings,
                      p = m.length;
                    if (
                      (p > 0 && lr(e, t, 0, n) && (d = !0),
                      p > 1 && lr(e, t, 1, r) && (d = !0),
                      p > 2 && lr(e, t, 2, i) && (d = !0),
                      p > 3 && lr(e, t, 3, s) && (d = !0),
                      p > 4 && lr(e, t, 4, o) && (d = !0),
                      p > 5 && lr(e, t, 5, l) && (d = !0),
                      p > 6 && lr(e, t, 6, a) && (d = !0),
                      p > 7 && lr(e, t, 7, u) && (d = !0),
                      p > 8 && lr(e, t, 8, c) && (d = !0),
                      p > 9 && lr(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
                      p > 0 && (d += bo(n, m[0])),
                        p > 1 && (d += bo(r, m[1])),
                        p > 2 && (d += bo(i, m[2])),
                        p > 3 && (d += bo(s, m[3])),
                        p > 4 && (d += bo(o, m[4])),
                        p > 5 && (d += bo(l, m[5])),
                        p > 6 && (d += bo(a, m[6])),
                        p > 7 && (d += bo(u, m[7])),
                        p > 8 && (d += bo(c, m[8])),
                        p > 9 && (d += bo(h, m[9]));
                      const f = Gn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(f, d);
                    }
                    return d;
                  })(e, t, n, r, i, s, o, l, a, u, c, h);
                case 16384:
                  return (function (e, t, n, r, i, s, o, l, a, u, c, h) {
                    const d = Wn(e, t.nodeIndex),
                      m = d.instance;
                    let p = !1,
                      f = void 0;
                    const g = t.bindings.length;
                    return (
                      g > 0 &&
                        or(e, t, 0, n) &&
                        ((p = !0), (f = Ei(e, d, t, 0, n, f))),
                      g > 1 &&
                        or(e, t, 1, r) &&
                        ((p = !0), (f = Ei(e, d, t, 1, r, f))),
                      g > 2 &&
                        or(e, t, 2, i) &&
                        ((p = !0), (f = Ei(e, d, t, 2, i, f))),
                      g > 3 &&
                        or(e, t, 3, s) &&
                        ((p = !0), (f = Ei(e, d, t, 3, s, f))),
                      g > 4 &&
                        or(e, t, 4, o) &&
                        ((p = !0), (f = Ei(e, d, t, 4, o, f))),
                      g > 5 &&
                        or(e, t, 5, l) &&
                        ((p = !0), (f = Ei(e, d, t, 5, l, f))),
                      g > 6 &&
                        or(e, t, 6, a) &&
                        ((p = !0), (f = Ei(e, d, t, 6, a, f))),
                      g > 7 &&
                        or(e, t, 7, u) &&
                        ((p = !0), (f = Ei(e, d, t, 7, u, f))),
                      g > 8 &&
                        or(e, t, 8, c) &&
                        ((p = !0), (f = Ei(e, d, t, 8, c, f))),
                      g > 9 &&
                        or(e, t, 9, h) &&
                        ((p = !0), (f = Ei(e, d, t, 9, h, f))),
                      f && m.ngOnChanges(f),
                      65536 & t.flags &&
                        qn(e, 256, t.nodeIndex) &&
                        m.ngOnInit(),
                      262144 & t.flags && m.ngDoCheck(),
                      p
                    );
                  })(e, t, n, r, i, s, o, l, a, u, c, h);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n, r, i, s, o, l, a, u, c, h) {
                    const d = t.bindings;
                    let m = !1;
                    const p = d.length;
                    if (
                      (p > 0 && lr(e, t, 0, n) && (m = !0),
                      p > 1 && lr(e, t, 1, r) && (m = !0),
                      p > 2 && lr(e, t, 2, i) && (m = !0),
                      p > 3 && lr(e, t, 3, s) && (m = !0),
                      p > 4 && lr(e, t, 4, o) && (m = !0),
                      p > 5 && lr(e, t, 5, l) && (m = !0),
                      p > 6 && lr(e, t, 6, a) && (m = !0),
                      p > 7 && lr(e, t, 7, u) && (m = !0),
                      p > 8 && lr(e, t, 8, c) && (m = !0),
                      p > 9 && lr(e, t, 9, h) && (m = !0),
                      m)
                    ) {
                      const m = Kn(e, t.nodeIndex);
                      let f;
                      switch (201347067 & t.flags) {
                        case 32:
                          (f = new Array(d.length)),
                            p > 0 && (f[0] = n),
                            p > 1 && (f[1] = r),
                            p > 2 && (f[2] = i),
                            p > 3 && (f[3] = s),
                            p > 4 && (f[4] = o),
                            p > 5 && (f[5] = l),
                            p > 6 && (f[6] = a),
                            p > 7 && (f[7] = u),
                            p > 8 && (f[8] = c),
                            p > 9 && (f[9] = h);
                          break;
                        case 64:
                          (f = {}),
                            p > 0 && (f[d[0].name] = n),
                            p > 1 && (f[d[1].name] = r),
                            p > 2 && (f[d[2].name] = i),
                            p > 3 && (f[d[3].name] = s),
                            p > 4 && (f[d[4].name] = o),
                            p > 5 && (f[d[5].name] = l),
                            p > 6 && (f[d[6].name] = a),
                            p > 7 && (f[d[7].name] = u),
                            p > 8 && (f[d[8].name] = c),
                            p > 9 && (f[d[9].name] = h);
                          break;
                        case 128:
                          const e = n;
                          switch (p) {
                            case 1:
                              f = e.transform(n);
                              break;
                            case 2:
                              f = e.transform(r);
                              break;
                            case 3:
                              f = e.transform(r, i);
                              break;
                            case 4:
                              f = e.transform(r, i, s);
                              break;
                            case 5:
                              f = e.transform(r, i, s, o);
                              break;
                            case 6:
                              f = e.transform(r, i, s, o, l);
                              break;
                            case 7:
                              f = e.transform(r, i, s, o, l, a);
                              break;
                            case 8:
                              f = e.transform(r, i, s, o, l, a, u);
                              break;
                            case 9:
                              f = e.transform(r, i, s, o, l, a, u, c);
                              break;
                            case 10:
                              f = e.transform(r, i, s, o, l, a, u, c, h);
                          }
                      }
                      m.value = f;
                    }
                    return m;
                  })(e, t, n, r, i, s, o, l, a, u, c, h);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, i, s, o, l, a, u, c, h, d)
          : (function (e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n) {
                    let r = !1;
                    for (let i = 0; i < n.length; i++)
                      so(e, t, i, n[i]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function (e, t, n) {
                    const r = t.bindings;
                    let i = !1;
                    for (let s = 0; s < n.length; s++)
                      lr(e, t, s, n[s]) && (i = !0);
                    if (i) {
                      let i = '';
                      for (let e = 0; e < n.length; e++) i += bo(n[e], r[e]);
                      i = t.text.prefix + i;
                      const s = Gn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(s, i);
                    }
                    return i;
                  })(e, t, n);
                case 16384:
                  return (function (e, t, n) {
                    const r = Wn(e, t.nodeIndex),
                      i = r.instance;
                    let s = !1,
                      o = void 0;
                    for (let l = 0; l < n.length; l++)
                      or(e, t, l, n[l]) &&
                        ((s = !0), (o = Ei(e, r, t, l, n[l], o)));
                    return (
                      o && i.ngOnChanges(o),
                      65536 & t.flags &&
                        qn(e, 256, t.nodeIndex) &&
                        i.ngOnInit(),
                      262144 & t.flags && i.ngDoCheck(),
                      s
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n) {
                    const r = t.bindings;
                    let i = !1;
                    for (let s = 0; s < n.length; s++)
                      lr(e, t, s, n[s]) && (i = !0);
                    if (i) {
                      const i = Kn(e, t.nodeIndex);
                      let s;
                      switch (201347067 & t.flags) {
                        case 32:
                          s = n;
                          break;
                        case 64:
                          s = {};
                          for (let i = 0; i < n.length; i++)
                            s[r[i].name] = n[i];
                          break;
                        case 128:
                          const e = n[0],
                            t = n.slice(1);
                          s = e.transform(...t);
                      }
                      i.value = s;
                    }
                    return i;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function Po(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = Qn(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), cr(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function Mo(e, t, n, r, i, s, o, l, a, u, c, h, d) {
        return (
          0 === n
            ? (function (e, t, n, r, i, s, o, l, a, u, c, h) {
                const d = t.bindings.length;
                d > 0 && ar(e, t, 0, n),
                  d > 1 && ar(e, t, 1, r),
                  d > 2 && ar(e, t, 2, i),
                  d > 3 && ar(e, t, 3, s),
                  d > 4 && ar(e, t, 4, o),
                  d > 5 && ar(e, t, 5, l),
                  d > 6 && ar(e, t, 6, a),
                  d > 7 && ar(e, t, 7, u),
                  d > 8 && ar(e, t, 8, c),
                  d > 9 && ar(e, t, 9, h);
              })(e, t, r, i, s, o, l, a, u, c, h, d)
            : (function (e, t, n) {
                for (let r = 0; r < n.length; r++) ar(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function Ro(e, t) {
        if (Zn(e, t.nodeIndex).dirty)
          throw $n(
            Yn.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function No(e) {
        if (!(128 & e.state)) {
          if (
            (Lo(e, Do.Destroy), Fo(e, Do.Destroy), Si(e, 131072), e.disposables)
          )
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function (e) {
            if (!(16 & e.state)) return;
            const t = dr(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (Qe(n, n.indexOf(e)), Yn.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function (e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(Qn(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(Gn(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) &&
                      Zn(e, n).destroy();
                }
              })(e),
            fr(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      const Do = (function () {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (e[e.CreateViewNodes] = 'CreateViewNodes'),
          (e[e.CheckNoChanges] = 'CheckNoChanges'),
          (e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (e[e.CheckAndUpdate] = 'CheckAndUpdate'),
          (e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (e[e.Destroy] = 'Destroy'),
          e
        );
      })();
      function Fo(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const i = n.nodes[r];
            33554432 & i.flags
              ? Vo(Qn(e, r).componentView, t)
              : 0 == (33554432 & i.childFlags) && (r += i.childCount);
          }
      }
      function Lo(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const i = n.nodes[r];
            if (16777216 & i.flags) {
              const n = Qn(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) Vo(n[e], t);
            } else 0 == (16777216 & i.childFlags) && (r += i.childCount);
          }
      }
      function Vo(e, t) {
        const n = e.state;
        switch (t) {
          case Do.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Io(e)
                : 64 & n && Uo(e, Do.CheckNoChangesProjectedViews));
            break;
          case Do.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? Io(e) : 64 & n && Uo(e, t));
            break;
          case Do.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Ao(e)
                : 64 & n && Uo(e, Do.CheckAndUpdateProjectedViews));
            break;
          case Do.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? Ao(e) : 64 & n && Uo(e, t));
            break;
          case Do.Destroy:
            No(e);
            break;
          case Do.CreateViewNodes:
            To(e);
        }
      }
      function Uo(e, t) {
        Lo(e, t), Fo(e, t);
      }
      function jo(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const i = e.def.nodes.length;
        for (let s = 0; s < i; s++) {
          const i = e.def.nodes[s];
          if (i.flags & t && i.flags & n)
            switch ((Yn.setCurrentNode(e, i.nodeIndex), r)) {
              case 0:
                ao(e, i);
                break;
              case 1:
                Ro(e, i);
            }
          (i.childFlags & t && i.childFlags & n) || (s += i.childCount);
        }
      }
      let $o = !1;
      function zo(e, t, n, r, i, s) {
        const o = i.injector.get(gn);
        return xo(Ho(e, i, o, t, n), r, s);
      }
      function Bo(e, t, n, r, i, s) {
        const o = i.injector.get(gn),
          l = Ho(e, i, new Cl(o), t, n),
          a = el(r);
        return vl(ol.create, xo, null, [l, a, s]);
      }
      function Ho(e, t, n, r, i) {
        const s = t.injector.get(It),
          o = t.injector.get(nt),
          l = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: i,
          sanitizer: s,
          rendererFactory: n,
          renderer: l,
          errorHandler: o
        };
      }
      function qo(e, t, n, r) {
        const i = el(n);
        return vl(ol.create, Co, null, [e, t, i, r]);
      }
      function Go(e, t, n, r) {
        return (
          (n = Zo.get(t.element.componentProvider.provider.token) || el(n)),
          vl(ol.create, ko, null, [e, t, n, r])
        );
      }
      function Qo(e, t, n, r) {
        return ni(
          e,
          t,
          n,
          (function (e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function (
              e
            ) {
              let t = !1,
                n = !1;
              return 0 === Wo.size
                ? { hasOverrides: t, hasDeprecatedOverrides: n }
                : (e.providers.forEach(e => {
                    const r = Wo.get(e.token);
                    3840 & e.flags &&
                      r &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach(e => {
                    Ko.forEach((r, i) => {
                      ge(i).providedIn === e &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: t, hasDeprecatedOverrides: n });
            })(e);
            return t
              ? ((function (e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const i = Wo.get(r.token);
                    i &&
                      ((r.flags = (-3841 & r.flags) | i.flags),
                      (r.deps = yr(i.deps)),
                      (r.value = i.value));
                  }
                  if (Ko.size > 0) {
                    let t = new Set(e.modules);
                    Ko.forEach((r, i) => {
                      if (t.has(ge(i).providedIn)) {
                        let t = {
                          token: i,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: yr(r.deps),
                          value: r.value,
                          index: e.providers.length
                        };
                        e.providers.push(t), (e.providersByKey[er(i)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => Xn))),
                e)
              : e;
          })(r)
        );
      }
      const Wo = new Map(),
        Ko = new Map(),
        Zo = new Map();
      function Yo(e) {
        let t;
        Wo.set(e.token, e),
          'function' == typeof e.token &&
            (t = ge(e.token)) &&
            'function' == typeof t.providedIn &&
            Ko.set(e.token, e);
      }
      function Xo(e, t) {
        const n = Cr(t.viewDefFactory),
          r = Cr(n.nodes[0].element.componentView);
        Zo.set(e, r);
      }
      function Jo() {
        Wo.clear(), Ko.clear(), Zo.clear();
      }
      function el(e) {
        if (0 === Wo.size) return e;
        const t = (function (e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const i = e.nodes[r];
            1 & i.flags && (n = i),
              n &&
                3840 & i.flags &&
                Wo.has(i.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => Xn);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = Wo.get(e.token);
              n &&
                ((t.flags = (-3841 & t.flags) | n.flags),
                (e.deps = yr(n.deps)),
                (e.value = n.value));
            }
          }
        }
      }
      function tl(e, t, n, r, i, s, o, l, a, u, c, h, d) {
        const m = e.def.nodes[t];
        return (
          Oo(e, m, n, r, i, s, o, l, a, u, c, h, d),
          224 & m.flags ? Kn(e, t).value : void 0
        );
      }
      function nl(e, t, n, r, i, s, o, l, a, u, c, h, d) {
        const m = e.def.nodes[t];
        return (
          Mo(e, m, n, r, i, s, o, l, a, u, c, h, d),
          224 & m.flags ? Kn(e, t).value : void 0
        );
      }
      function rl(e) {
        return vl(ol.detectChanges, Ao, null, [e]);
      }
      function il(e) {
        return vl(ol.checkNoChanges, Io, null, [e]);
      }
      function sl(e) {
        return vl(ol.destroy, No, null, [e]);
      }
      const ol = (function () {
        var e = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4
        };
        return (
          (e[e.create] = 'create'),
          (e[e.detectChanges] = 'detectChanges'),
          (e[e.checkNoChanges] = 'checkNoChanges'),
          (e[e.destroy] = 'destroy'),
          (e[e.handleEvent] = 'handleEvent'),
          e
        );
      })();
      let ll, al, ul;
      function cl(e, t) {
        (al = e), (ul = t);
      }
      function hl(e, t, n, r) {
        return (
          cl(e, t), vl(ol.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function dl(e, t) {
        if (128 & e.state) throw Bn(ol[ll]);
        return (
          cl(e, gl(e, 0)),
          e.def.updateDirectives(function (e, n, r, ...i) {
            const s = e.def.nodes[n];
            return (
              0 === t ? pl(e, s, r, i) : fl(e, s, r, i),
              16384 & s.flags && cl(e, gl(e, n)),
              224 & s.flags ? Kn(e, s.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function ml(e, t) {
        if (128 & e.state) throw Bn(ol[ll]);
        return (
          cl(e, _l(e, 0)),
          e.def.updateRenderer(function (e, n, r, ...i) {
            const s = e.def.nodes[n];
            return (
              0 === t ? pl(e, s, r, i) : fl(e, s, r, i),
              3 & s.flags && cl(e, _l(e, n)),
              224 & s.flags ? Kn(e, s.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function pl(e, t, n, r) {
        if (Oo(e, t, n, ...r)) {
          const o = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                l = o[e];
              8 & r.flags &&
                (n[
                  ((i = r.nonMinifiedName),
                  (s = void 0),
                  (s = i.replace(/[$@]/g, '_')),
                  `ng-reflect-${(i = s.replace(
                    Pt,
                    (...e) => '-' + e[1].toLowerCase()
                  ))}`)
                ] = Mt(l));
            }
            const r = t.parent,
              l = Qn(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r
                  ? e.renderer.setAttribute(l, t, r)
                  : e.renderer.removeAttribute(l, t);
              }
            else
              e.renderer.setValue(l, `bindings=${JSON.stringify(n, null, 2)}`);
          }
        }
        var i, s;
      }
      function fl(e, t, n, r) {
        Mo(e, t, n, ...r);
      }
      function gl(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function _l(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class bl {
        constructor(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = mr(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return (
            Qn(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return Yr(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            yl(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && yl(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function (e) {
            for (; e && !fr(e); ) e = e.parent;
            return e.parent ? Qn(e.parent, mr(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags
            ? pr(this.view, this.nodeDef)
            : pr(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const i = (function (e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let s = -1;
          n.factory(() => (++s === i ? e.error.bind(e, ...t) : Xn)),
            s < i &&
              (e.error(
                'Illegal state: the ViewDefinitionFactory did not call the logger!'
              ),
              e.error(...t));
        }
      }
      function yl(e, t, n) {
        for (let r in t.references) n[r] = co(e, t, t.references[r]);
      }
      function vl(e, t, n, r) {
        const i = ll,
          s = al,
          o = ul;
        try {
          ll = e;
          const l = t.apply(n, r);
          return (al = s), (ul = o), (ll = i), l;
        } catch (u) {
          if (Je(u) || !al) throw u;
          throw (
            ((l = u),
            (a = wl()),
            l instanceof Error || (l = new Error(l.toString())),
            zn(l, a),
            l)
          );
        }
        var l, a;
      }
      function wl() {
        return al ? new bl(al, ul) : null;
      }
      class Cl {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new xl(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class xl {
        constructor(e) {
          (this.delegate = e),
            (this.debugContextFactory = wl),
            (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          const t = Gs(e);
          !(function (e) {
            qs.delete(e.nativeNode);
          })(t),
            t instanceof Bs && (t.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new Hs(n, null, r);
            (t.name = e), Qs(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && Qs(new Bs(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && Qs(new Bs(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = Gs(e),
            r = Gs(t);
          n && r && n instanceof Hs && n.addChild(r),
            this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = Gs(e),
            i = Gs(t),
            s = Gs(n);
          r && i && r instanceof Hs && r.insertBefore(s, i),
            this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = Gs(e),
            r = Gs(t);
          n && r && n instanceof Hs && n.removeChild(r),
            this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = wl();
          return r && Qs(new Hs(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const i = Gs(e);
          i && i instanceof Hs && (i.attributes[r ? r + ':' + t : t] = n),
            this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = Gs(e);
          r && r instanceof Hs && (r.attributes[n ? n + ':' + t : t] = null),
            this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = Gs(e);
          n && n instanceof Hs && (n.classes[t] = !0),
            this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = Gs(e);
          n && n instanceof Hs && (n.classes[t] = !1),
            this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const i = Gs(e);
          i && i instanceof Hs && (i.styles[t] = n),
            this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = Gs(e);
          r && r instanceof Hs && (r.styles[t] = null),
            this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = Gs(e);
          r && r instanceof Hs && (r.properties[t] = n),
            this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ('string' != typeof e) {
            const r = Gs(e);
            r && r.listeners.push(new zs(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function kl(e, t, n) {
        return new El(e, t, n);
      }
      class El extends qe {
        constructor(e, t, n) {
          super(),
            (this.moduleType = e),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function () {
            if ($o) return;
            $o = !0;
            const e = st()
              ? {
                  setCurrentNode: cl,
                  createRootView: Bo,
                  createEmbeddedView: qo,
                  createComponentView: Go,
                  createNgModuleRef: Qo,
                  overrideProvider: Yo,
                  overrideComponentView: Xo,
                  clearOverrides: Jo,
                  checkAndUpdateView: rl,
                  checkNoChangesView: il,
                  destroyView: sl,
                  createDebugContext: (e, t) => new bl(e, t),
                  handleEvent: hl,
                  updateDirectives: dl,
                  updateRenderer: ml
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: zo,
                  createEmbeddedView: Co,
                  createComponentView: ko,
                  createNgModuleRef: ni,
                  overrideProvider: Xn,
                  overrideComponentView: Xn,
                  clearOverrides: Xn,
                  checkAndUpdateView: Ao,
                  checkNoChangesView: Io,
                  destroyView: No,
                  createDebugContext: (e, t) => new bl(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) =>
                    e.def.updateDirectives(0 === t ? tl : nl, e),
                  updateRenderer: (e, t) =>
                    e.def.updateRenderer(0 === t ? tl : nl, e)
                };
            (Yn.setCurrentNode = e.setCurrentNode),
              (Yn.createRootView = e.createRootView),
              (Yn.createEmbeddedView = e.createEmbeddedView),
              (Yn.createComponentView = e.createComponentView),
              (Yn.createNgModuleRef = e.createNgModuleRef),
              (Yn.overrideProvider = e.overrideProvider),
              (Yn.overrideComponentView = e.overrideComponentView),
              (Yn.clearOverrides = e.clearOverrides),
              (Yn.checkAndUpdateView = e.checkAndUpdateView),
              (Yn.checkNoChangesView = e.checkNoChangesView),
              (Yn.destroyView = e.destroyView),
              (Yn.resolveDep = xi),
              (Yn.createDebugContext = e.createDebugContext),
              (Yn.handleEvent = e.handleEvent),
              (Yn.updateDirectives = e.updateDirectives),
              (Yn.updateRenderer = e.updateRenderer),
              (Yn.dirtyParentQueries = lo);
          })();
          const t = (function (e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const i in e.providersByKey) r[i] = e.providersByKey[i];
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r
            };
          })(Cr(this._ngModuleDefFactory));
          return Yn.createNgModuleRef(
            this.moduleType,
            e || Lt.NULL,
            this._bootstrapComponents,
            t
          );
        }
      }
      class Sl {}
      const Tl = new Te('Location Initialized');
      class Il {}
      const Al = new Te('appBaseHref');
      class Ol {
        constructor(e, t) {
          (this._subject = new Li()),
            (this._urlChangeListeners = []),
            (this._platformStrategy = e);
          const n = this._platformStrategy.getBaseHref();
          (this._platformLocation = t),
            (this._baseHref = Ol.stripTrailingSlash(Pl(n))),
            this._platformStrategy.onPopState(e => {
              this._subject.emit({
                url: this.path(!0),
                pop: !0,
                state: e.state,
                type: e.type
              });
            });
        }
        path(e = !1) {
          return this.normalize(this._platformStrategy.path(e));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(e, t = '') {
          return this.path() == this.normalize(e + Ol.normalizeQueryParams(t));
        }
        normalize(e) {
          return Ol.stripTrailingSlash(
            (function (e, t) {
              return e && t.startsWith(e) ? t.substring(e.length) : t;
            })(this._baseHref, Pl(e))
          );
        }
        prepareExternalUrl(e) {
          return (
            e && '/' !== e[0] && (e = '/' + e),
            this._platformStrategy.prepareExternalUrl(e)
          );
        }
        go(e, t = '', n = null) {
          this._platformStrategy.pushState(n, '', e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + Ol.normalizeQueryParams(t)),
              n
            );
        }
        replaceState(e, t = '', n = null) {
          this._platformStrategy.replaceState(n, '', e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + Ol.normalizeQueryParams(t)),
              n
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(e) {
          this._urlChangeListeners.push(e),
            this.subscribe(e => {
              this._notifyUrlChangeListeners(e.url, e.state);
            });
        }
        _notifyUrlChangeListeners(e = '', t) {
          this._urlChangeListeners.forEach(n => n(e, t));
        }
        subscribe(e, t, n) {
          return this._subject.subscribe({ next: e, error: t, complete: n });
        }
        static normalizeQueryParams(e) {
          return e && '?' !== e[0] ? '?' + e : e;
        }
        static joinWithSlash(e, t) {
          if (0 == e.length) return t;
          if (0 == t.length) return e;
          let n = 0;
          return (
            e.endsWith('/') && n++,
            t.startsWith('/') && n++,
            2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
          );
        }
        static stripTrailingSlash(e) {
          const t = e.match(/#|\?|$/),
            n = (t && t.index) || e.length;
          return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
        }
      }
      function Pl(e) {
        return e.replace(/\/index.html$/, '');
      }
      class Ml extends Il {
        constructor(e, t) {
          super(),
            (this._platformLocation = e),
            (this._baseHref = ''),
            null != t && (this._baseHref = t);
        }
        onPopState(e) {
          this._platformLocation.onPopState(e),
            this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(e = !1) {
          let t = this._platformLocation.hash;
          return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
        }
        prepareExternalUrl(e) {
          const t = Ol.joinWithSlash(this._baseHref, e);
          return t.length > 0 ? '#' + t : t;
        }
        pushState(e, t, n, r) {
          let i = this.prepareExternalUrl(n + Ol.normalizeQueryParams(r));
          0 == i.length && (i = this._platformLocation.pathname),
            this._platformLocation.pushState(e, t, i);
        }
        replaceState(e, t, n, r) {
          let i = this.prepareExternalUrl(n + Ol.normalizeQueryParams(r));
          0 == i.length && (i = this._platformLocation.pathname),
            this._platformLocation.replaceState(e, t, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class Rl extends Il {
        constructor(e, t) {
          if (
            (super(),
            (this._platformLocation = e),
            null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
            null == t)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = t;
        }
        onPopState(e) {
          this._platformLocation.onPopState(e),
            this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(e) {
          return Ol.joinWithSlash(this._baseHref, e);
        }
        path(e = !1) {
          const t =
              this._platformLocation.pathname +
              Ol.normalizeQueryParams(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && e ? `${t}${n}` : t;
        }
        pushState(e, t, n, r) {
          const i = this.prepareExternalUrl(n + Ol.normalizeQueryParams(r));
          this._platformLocation.pushState(e, t, i);
        }
        replaceState(e, t, n, r) {
          const i = this.prepareExternalUrl(n + Ol.normalizeQueryParams(r));
          this._platformLocation.replaceState(e, t, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const Nl = (function () {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = 'Zero'),
            (e[e.One] = 'One'),
            (e[e.Two] = 'Two'),
            (e[e.Few] = 'Few'),
            (e[e.Many] = 'Many'),
            (e[e.Other] = 'Other'),
            e
          );
        })(),
        Dl = function (e) {
          return (function (e) {
            const t = e.toLowerCase().replace(/_/g, '-');
            let n = Oi[t];
            if (n) return n;
            const r = t.split('-')[0];
            if ((n = Oi[r])) return n;
            if ('en' === r) return Ri;
            throw new Error(`Missing locale data for the locale "${e}".`);
          })(e)[Pi.PluralCase];
        },
        Fl = new Te('UseV4Plurals');
      class Ll {}
      class Vl extends Ll {
        constructor(e, t) {
          super(), (this.locale = e), (this.deprecatedPluralFn = t);
        }
        getPluralCategory(e, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, e)
              : Dl(t || this.locale)(e)
          ) {
            case Nl.Zero:
              return 'zero';
            case Nl.One:
              return 'one';
            case Nl.Two:
              return 'two';
            case Nl.Few:
              return 'few';
            case Nl.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      class Ul {
        constructor(e, t, n, r) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class jl {
        constructor(e, t, n) {
          (this._viewContainer = e),
            (this._template = t),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(e) {
          (this._ngForOf = e), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(e) {
          st() &&
            null != e &&
            'function' != typeof e &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                e
              )}. ` +
                'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
            ),
            (this._trackByFn = e);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(e) {
          e && (this._template = e);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (t) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${
                    ((e = n), e.name || typeof e)
                  }'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var e;
          if (this._differ) {
            const e = this._differ.diff(this._ngForOf);
            e && this._applyChanges(e);
          }
        }
        _applyChanges(e) {
          const t = [];
          e.forEachOperation((e, n, r) => {
            if (null == e.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new Ul(null, this._ngForOf, -1, -1),
                  null === r ? void 0 : r
                ),
                i = new $l(e, n);
              t.push(i);
            } else if (null == r)
              this._viewContainer.remove(null === n ? void 0 : n);
            else if (null !== n) {
              const i = this._viewContainer.get(n);
              this._viewContainer.move(i, r);
              const s = new $l(e, i);
              t.push(s);
            }
          });
          for (let n = 0; n < t.length; n++)
            this._perViewChange(t[n].view, t[n].record);
          for (let n = 0, r = this._viewContainer.length; n < r; n++) {
            const e = this._viewContainer.get(n);
            (e.context.index = n),
              (e.context.count = r),
              (e.context.ngForOf = this._ngForOf);
          }
          e.forEachIdentityChange(e => {
            this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
          });
        }
        _perViewChange(e, t) {
          e.context.$implicit = t.item;
        }
        static ngTemplateContextGuard(e, t) {
          return !0;
        }
      }
      class $l {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      class zl {
        constructor(e, t) {
          (this._viewContainer = e),
            (this._context = new Bl()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = t);
        }
        set ngIf(e) {
          (this._context.$implicit = this._context.ngIf = e),
            this._updateView();
        }
        set ngIfThen(e) {
          Hl('ngIfThen', e),
            (this._thenTemplateRef = e),
            (this._thenViewRef = null),
            this._updateView();
        }
        set ngIfElse(e) {
          Hl('ngIfElse', e),
            (this._elseTemplateRef = e),
            (this._elseViewRef = null),
            this._updateView();
        }
        _updateView() {
          this._context.$implicit
            ? this._thenViewRef ||
              (this._viewContainer.clear(),
              (this._elseViewRef = null),
              this._thenTemplateRef &&
                (this._thenViewRef = this._viewContainer.createEmbeddedView(
                  this._thenTemplateRef,
                  this._context
                )))
            : this._elseViewRef ||
              (this._viewContainer.clear(),
              (this._thenViewRef = null),
              this._elseTemplateRef &&
                (this._elseViewRef = this._viewContainer.createEmbeddedView(
                  this._elseTemplateRef,
                  this._context
                )));
        }
      }
      class Bl {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Hl(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${be(t)}'.`
          );
      }
      class ql {
        constructor(e, t) {
          (this._viewContainerRef = e),
            (this._templateRef = t),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(e) {
          e && !this._created
            ? this.create()
            : !e && this._created && this.destroy();
        }
      }
      class Gl {
        constructor() {
          (this._defaultUsed = !1),
            (this._caseCount = 0),
            (this._lastCaseCheckIndex = 0),
            (this._lastCasesMatched = !1);
        }
        set ngSwitch(e) {
          (this._ngSwitch = e),
            0 === this._caseCount && this._updateDefaultCases(!0);
        }
        _addCase() {
          return this._caseCount++;
        }
        _addDefault(e) {
          this._defaultViews || (this._defaultViews = []),
            this._defaultViews.push(e);
        }
        _matchCase(e) {
          const t = e == this._ngSwitch;
          return (
            (this._lastCasesMatched = this._lastCasesMatched || t),
            this._lastCaseCheckIndex++,
            this._lastCaseCheckIndex === this._caseCount &&
              (this._updateDefaultCases(!this._lastCasesMatched),
              (this._lastCaseCheckIndex = 0),
              (this._lastCasesMatched = !1)),
            t
          );
        }
        _updateDefaultCases(e) {
          if (this._defaultViews && e !== this._defaultUsed) {
            this._defaultUsed = e;
            for (let t = 0; t < this._defaultViews.length; t++)
              this._defaultViews[t].enforceState(e);
          }
        }
      }
      class Ql {
        constructor(e, t, n) {
          (this.ngSwitch = n), n._addCase(), (this._view = new ql(e, t));
        }
        ngDoCheck() {
          this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
        }
      }
      class Wl {
        constructor(e) {
          (this._viewContainerRef = e),
            (this._viewRef = null),
            (this.ngTemplateOutletContext = null),
            (this.ngTemplateOutlet = null);
        }
        ngOnChanges(e) {
          this._shouldRecreateView(e)
            ? (this._viewRef &&
                this._viewContainerRef.remove(
                  this._viewContainerRef.indexOf(this._viewRef)
                ),
              this.ngTemplateOutlet &&
                (this._viewRef = this._viewContainerRef.createEmbeddedView(
                  this.ngTemplateOutlet,
                  this.ngTemplateOutletContext
                )))
            : this._viewRef &&
              this.ngTemplateOutletContext &&
              this._updateExistingContext(this.ngTemplateOutletContext);
        }
        _shouldRecreateView(e) {
          const t = e.ngTemplateOutletContext;
          return !!e.ngTemplateOutlet || (t && this._hasContextShapeChanged(t));
        }
        _hasContextShapeChanged(e) {
          const t = Object.keys(e.previousValue || {}),
            n = Object.keys(e.currentValue || {});
          if (t.length === n.length) {
            for (let e of n) if (-1 === t.indexOf(e)) return !0;
            return !1;
          }
          return !0;
        }
        _updateExistingContext(e) {
          for (let t of Object.keys(e))
            this._viewRef.context[t] = this.ngTemplateOutletContext[t];
        }
      }
      class Kl {
        createSubscription(e, t) {
          return e.subscribe({
            next: t,
            error: e => {
              throw e;
            }
          });
        }
        dispose(e) {
          e.unsubscribe();
        }
        onDestroy(e) {
          e.unsubscribe();
        }
      }
      class Zl {
        createSubscription(e, t) {
          return e.then(t, e => {
            throw e;
          });
        }
        dispose(e) {}
        onDestroy(e) {}
      }
      const Yl = new Zl(),
        Xl = new Kl();
      class Jl {
        constructor(e) {
          (this._ref = e),
            (this._latestValue = null),
            (this._latestReturnedValue = null),
            (this._subscription = null),
            (this._obj = null),
            (this._strategy = null);
        }
        ngOnDestroy() {
          this._subscription && this._dispose();
        }
        transform(e) {
          return this._obj
            ? e !== this._obj
              ? (this._dispose(), this.transform(e))
              : Kt(this._latestValue, this._latestReturnedValue)
              ? this._latestReturnedValue
              : ((this._latestReturnedValue = this._latestValue),
                Yt.wrap(this._latestValue))
            : (e && this._subscribe(e),
              (this._latestReturnedValue = this._latestValue),
              this._latestValue);
        }
        _subscribe(e) {
          (this._obj = e),
            (this._strategy = this._selectStrategy(e)),
            (this._subscription = this._strategy.createSubscription(e, t =>
              this._updateLatestValue(e, t)
            ));
        }
        _selectStrategy(e) {
          if (en(e)) return Yl;
          if (tn(e)) return Xl;
          throw Error(`InvalidPipeArgument: '${e}' for pipe '${be(Jl)}'`);
        }
        _dispose() {
          this._strategy.dispose(this._subscription),
            (this._latestValue = null),
            (this._latestReturnedValue = null),
            (this._subscription = null),
            (this._obj = null);
        }
        _updateLatestValue(e, t) {
          e === this._obj &&
            ((this._latestValue = t), this._ref.markForCheck());
        }
      }
      class ea {}
      const ta = new Te('DocumentToken'),
        na = 'browser',
        ra = 'server';
      let ia = (() => {
        class e {}
        return (
          (e.ngInjectableDef = fe({
            token: e,
            providedIn: 'root',
            factory: () => new sa(je(ta), window, je(nt))
          })),
          e
        );
      })();
      class sa {
        constructor(e, t, n) {
          (this.document = e),
            (this.window = t),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(e) {
          this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const t = this.document.querySelector(`#${e}`);
              if (t) return void this.scrollToElement(t);
              const n = this.document.querySelector(`[name='${e}']`);
              if (n) return void this.scrollToElement(n);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(n - i[0], r - i[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return !1;
          }
        }
      }
      let oa = null;
      function la() {
        return oa;
      }
      class aa {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      }
      class ua extends aa {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const e = this.createElement('div', document);
            if (null != this.getStyle(e, 'animationName'))
              this._animationPrefix = '';
            else {
              const t = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < t.length; n++)
                if (null != this.getStyle(e, t[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + t[n].toLowerCase() + '-';
                  break;
                }
            }
            const t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(t).forEach(n => {
              null != this.getStyle(e, n) && (this._transitionEnd = t[n]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      }
      const ca = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex'
        },
        ha = 3,
        da = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        ma = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        pa = (() => {
          if (Se.Node)
            return (
              Se.Node.prototype.contains ||
              function (e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })();
      class fa extends ua {
        parse(e) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var e;
          (e = new fa()), oa || (oa = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        get attrToPropMap() {
          return ca;
        }
        contains(e, t) {
          return pa.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent('Event');
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return (
            e.defaultPrevented || (null != e.returnValue && !e.returnValue)
          );
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return 'content' in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, 'content') ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach(n => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement('template');
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement(
            'SCRIPT'
          );
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = '';
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || '';
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || '';
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute('href');
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (null == (t = e.keyIdentifier)) return 'Unidentified';
            t.startsWith('U+') &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              e.location === ha && ma.hasOwnProperty(t) && (t = ma[t]));
          }
          return da[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return 'window' === t
            ? window
            : 'document' === t
            ? e
            : 'body' === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            _a || (_a = document.querySelector('base'))
              ? _a.getAttribute('href')
              : null;
          return null == t
            ? null
            : ((n = t),
              ga || (ga = document.createElement('a')),
              ga.setAttribute('href', n),
              '/' === ga.pathname.charAt(0) ? ga.pathname : '/' + ga.pathname);
          var n;
        }
        resetBaseElement() {
          _a = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, 'data-' + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, 'data-' + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return (function (e, t) {
            t = encodeURIComponent(t);
            for (const n of e.split(';')) {
              const e = n.indexOf('='),
                [r, i] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
              if (r.trim() === t) return decodeURIComponent(i);
            }
            return null;
          })(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
        }
      }
      let ga,
        _a = null;
      function ba() {
        return !!window.history.pushState;
      }
      const ya = new Te('TRANSITION_ID'),
        va = [
          {
            provide: ji,
            useFactory: function (e, t, n) {
              return () => {
                n.get($i).donePromise.then(() => {
                  const n = la();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(t => n.getAttribute(t, 'ng-transition') === e)
                    .forEach(e => n.remove(e));
                });
              };
            },
            deps: [ya, ta, Lt],
            multi: !0
          }
        ];
      class wa {
        static init() {
          var e;
          (e = new wa()), (ks = e);
        }
        addToWindow(e) {
          (Se.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error('Could not find testability for element.');
            return r;
          }),
            (Se.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (Se.getAllAngularRootElements = () => e.getAllRootElements()),
            Se.frameworkStabilizers || (Se.frameworkStabilizers = []),
            Se.frameworkStabilizers.push(e => {
              const t = Se.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const i = function (t) {
                (r = r || t), 0 == --n && e(r);
              };
              t.forEach(function (e) {
                e.whenStable(i);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? la().isShadowRoot(t)
              ? this.findTestabilityInTree(e, la().getHost(t), !0)
              : this.findTestabilityInTree(e, la().parentElement(t), !0)
            : null;
        }
      }
      function Ca(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) ||
          ((Se.ng = Se.ng || {})[e] = t);
      }
      const xa = (() => ({ ApplicationRef: Rs, NgZone: ms }))();
      function ka(e) {
        return Gs(e);
      }
      const Ea = new Te('EventManagerPlugins');
      class Sa {
        constructor(e, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach(e => (e.manager = this)),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) return t;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
          }
          throw new Error(`No event manager plugin found for event ${e}`);
        }
      }
      class Ta {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = la().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      class Ia {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(e) {
          const t = new Set();
          e.forEach(e => {
            this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
          }),
            this.onStylesAdded(t);
        }
        onStylesAdded(e) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class Aa extends Ia {
        constructor(e) {
          super(),
            (this._doc = e),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(e.head);
        }
        _addStylesToHost(e, t) {
          e.forEach(e => {
            const n = this._doc.createElement('style');
            (n.textContent = e), this._styleNodes.add(t.appendChild(n));
          });
        }
        addHost(e) {
          this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
        }
        removeHost(e) {
          this._hostNodes.delete(e);
        }
        onStylesAdded(e) {
          this._hostNodes.forEach(t => this._addStylesToHost(e, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach(e => la().remove(e));
        }
      }
      const Oa = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        Pa = /%COMP%/g,
        Ma = '_nghost-%COMP%',
        Ra = '_ngcontent-%COMP%';
      function Na(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let i = t[r];
          Array.isArray(i) ? Na(e, i, n) : ((i = i.replace(Pa, e)), n.push(i));
        }
        return n;
      }
      function Da(e) {
        return t => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      class Fa {
        constructor(e, t, n) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new La(e));
        }
        createRenderer(e, t) {
          if (!e || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case We.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              return (
                n ||
                  ((n = new ja(
                    this.eventManager,
                    this.sharedStylesHost,
                    t,
                    this.appId
                  )),
                  this.rendererByCompId.set(t.id, n)),
                n.applyToHost(e),
                n
              );
            }
            case We.Native:
            case We.ShadowDom:
              return new $a(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = Na(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class La {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(Oa[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = 'string' == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ''), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ':' + t;
            const i = Oa[r];
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = Oa[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & _n.DashCase
            ? e.style.setProperty(t, n, r & _n.Important ? 'important' : '')
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & _n.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
        }
        setProperty(e, t, n) {
          Ua(t, 'property'), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            Ua(t, 'listener'),
            'string' == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, Da(n))
              : this.eventManager.addEventListener(e, t, Da(n))
          );
        }
      }
      const Va = (() => '@'.charCodeAt(0))();
      function Ua(e, t) {
        if (e.charCodeAt(0) === Va)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class ja extends La {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const i = Na(r + '-' + n.id, n.styles, []);
          t.addStyles(i),
            (this.contentAttr = Ra.replace(Pa, r + '-' + n.id)),
            (this.hostAttr = Ma.replace(Pa, r + '-' + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class $a extends La {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === We.ShadowDom
                ? n.attachShadow({ mode: 'open' })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = Na(r.id, r.styles, []);
          for (let s = 0; s < i.length; s++) {
            const e = document.createElement('style');
            (e.textContent = i[s]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      const za = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function (e) {
            return '__zone_symbol__' + e;
          })(),
        Ba = za('addEventListener'),
        Ha = za('removeEventListener'),
        qa = {},
        Ga = 'FALSE',
        Qa = 'ANGULAR',
        Wa = 'addEventListener',
        Ka = 'removeEventListener',
        Za = '__zone_symbol__propagationStopped',
        Ya = '__zone_symbol__stopImmediatePropagation',
        Xa = (() => {
          const e =
            'undefined' != typeof Zone && Zone[za('BLACK_LISTED_EVENTS')];
          if (e) {
            const t = {};
            return (
              e.forEach(e => {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        Ja = function (e) {
          return !!Xa && Xa.hasOwnProperty(e);
        },
        eu = function (e) {
          const t = qa[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current
              ? e.zone.run(e.handler, this, r)
              : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[Za]; n++) {
              const e = t[n];
              e.zone !== Zone.current
                ? e.zone.run(e.handler, this, r)
                : e.handler.apply(this, r);
            }
          }
        };
      class tu extends Ta {
        constructor(e, t, n) {
          super(e),
            (this.ngZone = t),
            (n &&
              (function (e) {
                return e === ra;
              })(n)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype[Ya]) return;
          const e = (Event.prototype[Ya] =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function () {
            this && (this[Za] = !0), e && e.apply(this, arguments);
          };
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, t, n) {
          let r = n;
          if (!e[Ba] || (ms.isInAngularZone() && !Ja(t))) e[Wa](t, r, !1);
          else {
            let n = qa[t];
            n || (n = qa[t] = za(Qa + t + Ga));
            let i = e[n];
            const s = i && i.length > 0;
            i || (i = e[n] = []);
            const o = Ja(t) ? Zone.root : Zone.current;
            if (0 === i.length) i.push({ zone: o, handler: r });
            else {
              let e = !1;
              for (let t = 0; t < i.length; t++)
                if (i[t].handler === r) {
                  e = !0;
                  break;
                }
              e || i.push({ zone: o, handler: r });
            }
            s || e[Ba](t, eu, !1);
          }
          return () => this.removeEventListener(e, t, r);
        }
        removeEventListener(e, t, n) {
          let r = e[Ha];
          if (!r) return e[Ka].apply(e, [t, n, !1]);
          let i = qa[t],
            s = i && e[i];
          if (!s) return e[Ka].apply(e, [t, n, !1]);
          let o = !1;
          for (let l = 0; l < s.length; l++)
            if (s[l].handler === n) {
              (o = !0), s.splice(l, 1);
              break;
            }
          o
            ? 0 === s.length && r.apply(e, [t, eu, !1])
            : e[Ka].apply(e, [t, n, !1]);
        }
      }
      const nu = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        ru = new Te('HammerGestureConfig'),
        iu = new Te('HammerLoader');
      class su {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(e) {
          const t = new Hammer(e, this.options);
          t.get('pinch').set({ enable: !0 }),
            t.get('rotate').set({ enable: !0 });
          for (const n in this.overrides) t.get(n).set(this.overrides[n]);
          return t;
        }
      }
      class ou extends Ta {
        constructor(e, t, n, r) {
          super(e), (this._config = t), (this.console = n), (this.loader = r);
        }
        supports(e) {
          return !(
            (!nu.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${e}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(e, t, n) {
          const r = this.manager.getZone();
          if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
            let r = !1,
              i = () => {
                r = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                      ),
                      void (i = () => {})
                    );
                  r || (i = this.addEventListener(e, t, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${t}" event cannot be bound because the custom ` +
                      'Hammer.JS loader failed.'
                  ),
                    (i = () => {});
                }),
              () => {
                i();
              }
            );
          }
          return r.runOutsideAngular(() => {
            const i = this._config.buildHammer(e),
              s = function (e) {
                r.runGuarded(function () {
                  n(e);
                });
              };
            return (
              i.on(t, s),
              () => {
                i.off(t, s), 'function' == typeof i.destroy && i.destroy();
              }
            );
          });
        }
        isCustomEvent(e) {
          return this._config.events.indexOf(e) > -1;
        }
      }
      const lu = ['alt', 'control', 'meta', 'shift'],
        au = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey
        };
      class uu extends Ta {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return null != uu.parseEventName(e);
        }
        addEventListener(e, t, n) {
          const r = uu.parseEventName(t),
            i = uu.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => la().onAndCancel(e, r.domEventName, i));
        }
        static parseEventName(e) {
          const t = e.toLowerCase().split('.'),
            n = t.shift();
          if (0 === t.length || ('keydown' !== n && 'keyup' !== n)) return null;
          const r = uu._normalizeKey(t.pop());
          let i = '';
          if (
            (lu.forEach(e => {
              const n = t.indexOf(e);
              n > -1 && (t.splice(n, 1), (i += e + '.'));
            }),
            (i += r),
            0 != t.length || 0 === r.length)
          )
            return null;
          const s = {};
          return (s.domEventName = n), (s.fullKey = i), s;
        }
        static getEventFullKey(e) {
          let t = '',
            n = la().getEventKey(e);
          return (
            ' ' === (n = n.toLowerCase())
              ? (n = 'space')
              : '.' === n && (n = 'dot'),
            lu.forEach(r => {
              r != n && (0, au[r])(e) && (t += r + '.');
            }),
            (t += n)
          );
        }
        static eventCallback(e, t, n) {
          return r => {
            uu.getEventFullKey(r) === e && n.runGuarded(() => t(r));
          };
        }
        static _normalizeKey(e) {
          switch (e) {
            case 'esc':
              return 'escape';
            default:
              return e;
          }
        }
      }
      class cu {}
      class hu extends cu {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, t) {
          if (null == t) return null;
          switch (e) {
            case Tt.NONE:
              return t;
            case Tt.HTML:
              return t instanceof mu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'HTML'),
                  (function (e, t) {
                    let n = null;
                    try {
                      Et = Et || new ot(e);
                      let r = t ? String(t) : '';
                      n = Et.getInertBodyElement(r);
                      let i = 5,
                        s = r;
                      do {
                        if (0 === i)
                          throw new Error(
                            'Failed to sanitize html because the input is unstable'
                          );
                        i--,
                          (r = s),
                          (s = n.innerHTML),
                          (n = Et.getInertBodyElement(r));
                      } while (r !== s);
                      const o = new wt(),
                        l = o.sanitizeChildren(St(n) || n);
                      return (
                        st() &&
                          o.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                          ),
                        l
                      );
                    } finally {
                      if (n) {
                        const e = St(n) || n;
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                      }
                    }
                  })(this._doc, String(t)));
            case Tt.STYLE:
              return t instanceof pu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'Style'),
                  (function (e) {
                    if (!(e = String(e).trim())) return '';
                    const t = e.match(Ot);
                    return (t && ut(t[1]) === t[1]) ||
                      (e.match(At) &&
                        (function (e) {
                          let t = !0,
                            n = !0;
                          for (let r = 0; r < e.length; r++) {
                            const i = e.charAt(r);
                            "'" === i && n
                              ? (t = !t)
                              : '"' === i && t && (n = !n);
                          }
                          return t && n;
                        })(e))
                      ? e
                      : (st() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(t));
            case Tt.SCRIPT:
              if (t instanceof fu)
                return t.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(t, 'Script'),
                new Error('unsafe value used in a script context'))
              );
            case Tt.URL:
              return t instanceof _u || t instanceof gu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'URL'), ut(String(t)));
            case Tt.RESOURCE_URL:
              if (t instanceof _u)
                return t.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(t, 'ResourceURL'),
                new Error(
                  'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                ))
              );
            default:
              throw new Error(
                `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
              );
          }
        }
        checkNotSafeValue(e, t) {
          if (e instanceof du)
            throw new Error(
              `Required a safe ${t}, got a ${e.getTypeName()} ` +
                '(see http://g.co/ng/security#xss)'
            );
        }
        bypassSecurityTrustHtml(e) {
          return new mu(e);
        }
        bypassSecurityTrustStyle(e) {
          return new pu(e);
        }
        bypassSecurityTrustScript(e) {
          return new fu(e);
        }
        bypassSecurityTrustUrl(e) {
          return new gu(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return new _u(e);
        }
      }
      class du {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class mu extends du {
        getTypeName() {
          return 'HTML';
        }
      }
      class pu extends du {
        getTypeName() {
          return 'Style';
        }
      }
      class fu extends du {
        getTypeName() {
          return 'Script';
        }
      }
      class gu extends du {
        getTypeName() {
          return 'URL';
        }
      }
      class _u extends du {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const bu = As(Ws, 'browser', [
        { provide: Gi, useValue: na },
        {
          provide: qi,
          useValue: function () {
            fa.makeCurrent(), wa.init();
          },
          multi: !0
        },
        {
          provide: Sl,
          useClass: class extends Sl {
            constructor(e) {
              super(), (this._doc = e), this._init();
            }
            _init() {
              (this.location = la().getLocation()),
                (this._history = la().getHistory());
            }
            getBaseHrefFromDOM() {
              return la().getBaseHref(this._doc);
            }
            onPopState(e) {
              la()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', e, !1);
            }
            onHashChange(e) {
              la()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', e, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(e) {
              this.location.pathname = e;
            }
            pushState(e, t, n) {
              ba()
                ? this._history.pushState(e, t, n)
                : (this.location.hash = n);
            }
            replaceState(e, t, n) {
              ba()
                ? this._history.replaceState(e, t, n)
                : (this.location.hash = n);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          },
          deps: [ta]
        },
        {
          provide: ta,
          useFactory: function () {
            return document;
          },
          deps: []
        }
      ]);
      function yu() {
        return new nt();
      }
      class vu {
        constructor(e) {
          if (e)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(e) {
          return {
            ngModule: vu,
            providers: [
              { provide: zi, useValue: e.appId },
              { provide: ya, useExisting: zi },
              va
            ]
          };
        }
      }
      'undefined' != typeof window && window;
      const wu = new vn('8.2.3');
      function Cu(e) {
        return null != e && 'false' !== `${e}`;
      }
      function xu(e) {
        return e instanceof mn ? e.nativeElement : e;
      }
      let ku;
      try {
        ku = 'undefined' != typeof Intl && Intl.v8BreakIterator;
      } catch (Qw) {
        ku = !1;
      }
      let Eu,
        Su = (() => {
          class e {
            constructor(e) {
              (this._platformId = e),
                (this.isBrowser = this._platformId
                  ? this._platformId === na
                  : 'object' == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !ku) &&
                  'undefined' != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !('MSStream' in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (e.ngInjectableDef = fe({
              factory: function () {
                return new e(je(Gi, 8));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })();
      class Tu {}
      const Iu = [
        'color',
        'button',
        'checkbox',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ];
      function Au() {
        if (Eu) return Eu;
        if ('object' != typeof document || !document) return (Eu = new Set(Iu));
        let e = document.createElement('input');
        return (Eu = new Set(
          Iu.filter(t => (e.setAttribute('type', t), e.type === t))
        ));
      }
      let Ou;
      function Pu(e) {
        return (function () {
          if (null == Ou && 'undefined' != typeof window)
            try {
              window.addEventListener(
                'test',
                null,
                Object.defineProperty({}, 'passive', { get: () => (Ou = !0) })
              );
            } finally {
              Ou = Ou || !1;
            }
          return Ou;
        })()
          ? e
          : !!e.capture;
      }
      function Mu(e) {
        const t = new w(t => {
          t.next(e), t.complete();
        });
        return (t._isScalar = !0), (t.value = e), t;
      }
      const Ru = new w(e => e.complete());
      function Nu(e) {
        return e
          ? (function (e) {
              return new w(t => e.schedule(() => t.complete()));
            })(e)
          : Ru;
      }
      function Du(...e) {
        let t = e[e.length - 1];
        switch ((A(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return Nu(t);
          case 1:
            return t ? q(e, t) : Mu(e[0]);
          default:
            return q(e, t);
        }
      }
      function Fu() {
        return Y(1);
      }
      function Lu(...e) {
        return t => {
          let n = e[e.length - 1];
          A(n) ? e.pop() : (n = null);
          const r = e.length;
          return (function (...e) {
            return Fu()(Du(...e));
          })(1 !== r || n ? (r > 0 ? q(e, n) : Nu(n)) : Mu(e[0]), t);
        };
      }
      function Vu(e, t, n) {
        return function (r) {
          return r.lift(new Uu(e, t, n));
        };
      }
      class Uu {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(
            new ju(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class ju extends f {
        constructor(e, t, n, i) {
          super(e),
            (this._tapNext = b),
            (this._tapError = b),
            (this._tapComplete = b),
            (this._tapError = n || b),
            (this._tapComplete = i || b),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || b),
                (this._tapError = t.error || b),
                (this._tapComplete = t.complete || b));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      class $u extends d {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class zu extends $u {
        constructor(e, t) {
          super(e, t),
            (this.scheduler = e),
            (this.work = t),
            (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            r = void 0;
          try {
            this.work(e);
          } catch (i) {
            (n = !0), (r = (!!i && i) || new Error(i));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      let Bu = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class Hu extends Bu {
        constructor(e, t = Bu.now) {
          super(e, () =>
            Hu.delegate && Hu.delegate !== this ? Hu.delegate.now() : t()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return Hu.delegate && Hu.delegate !== this
            ? Hu.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const qu = new Hu(zu);
      function Gu(e, t = qu) {
        return n => n.lift(new Qu(e, t));
      }
      class Qu {
        constructor(e, t) {
          (this.dueTime = e), (this.scheduler = t);
        }
        call(e, t) {
          return t.subscribe(new Wu(e, this.dueTime, this.scheduler));
        }
      }
      class Wu extends f {
        constructor(e, t, n) {
          super(e),
            (this.dueTime = t),
            (this.scheduler = n),
            (this.debouncedSubscription = null),
            (this.lastValue = null),
            (this.hasValue = !1);
        }
        _next(e) {
          this.clearDebounce(),
            (this.lastValue = e),
            (this.hasValue = !0),
            this.add(
              (this.debouncedSubscription = this.scheduler.schedule(
                Ku,
                this.dueTime,
                this
              ))
            );
        }
        _complete() {
          this.debouncedNext(), this.destination.complete();
        }
        debouncedNext() {
          if ((this.clearDebounce(), this.hasValue)) {
            const { lastValue: e } = this;
            (this.lastValue = null),
              (this.hasValue = !1),
              this.destination.next(e);
          }
        }
        clearDebounce() {
          const e = this.debouncedSubscription;
          null !== e &&
            (this.remove(e),
            e.unsubscribe(),
            (this.debouncedSubscription = null));
        }
      }
      function Ku(e) {
        e.debouncedNext();
      }
      function Zu(e, t) {
        return function (n) {
          return n.lift(new Yu(e, t));
        };
      }
      class Yu {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new Xu(e, this.predicate, this.thisArg));
        }
      }
      class Xu extends f {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      function Ju() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      Ju.prototype = Object.create(Error.prototype);
      const ec = Ju;
      function tc(e) {
        return t => (0 === e ? Nu() : t.lift(new nc(e)));
      }
      class nc {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new ec();
        }
        call(e, t) {
          return t.subscribe(new rc(e, this.total));
        }
      }
      class rc extends f {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t &&
            (this.destination.next(e),
            n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      const ic = 650,
        sc = Pu({ passive: !0, capture: !0 });
      let oc = (() => {
        class e {
          constructor(e, t) {
            (this._ngZone = e),
              (this._platform = t),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._documentKeydownListener = () => {
                (this._lastTouchTarget = null),
                  this._setOriginForCurrentEventQueue('keyboard');
              }),
              (this._documentMousedownListener = () => {
                this._lastTouchTarget ||
                  this._setOriginForCurrentEventQueue('mouse');
              }),
              (this._documentTouchstartListener = e => {
                null != this._touchTimeoutId &&
                  clearTimeout(this._touchTimeoutId),
                  (this._lastTouchTarget = e.composedPath
                    ? e.composedPath()[0]
                    : e.target),
                  (this._touchTimeoutId = setTimeout(
                    () => (this._lastTouchTarget = null),
                    ic
                  ));
              }),
              (this._windowFocusListener = () => {
                (this._windowFocused = !0),
                  (this._windowFocusTimeoutId = setTimeout(
                    () => (this._windowFocused = !1)
                  ));
              });
          }
          monitor(e, t = !1) {
            if (!this._platform.isBrowser) return Du(null);
            const n = xu(e);
            if (this._elementInfo.has(n)) {
              let e = this._elementInfo.get(n);
              return (e.checkChildren = t), e.subject.asObservable();
            }
            let r = { unlisten: () => {}, checkChildren: t, subject: new T() };
            this._elementInfo.set(n, r), this._incrementMonitoredElementCount();
            let i = e => this._onFocus(e, n),
              s = e => this._onBlur(e, n);
            return (
              this._ngZone.runOutsideAngular(() => {
                n.addEventListener('focus', i, !0),
                  n.addEventListener('blur', s, !0);
              }),
              (r.unlisten = () => {
                n.removeEventListener('focus', i, !0),
                  n.removeEventListener('blur', s, !0);
              }),
              r.subject.asObservable()
            );
          }
          stopMonitoring(e) {
            const t = xu(e),
              n = this._elementInfo.get(t);
            n &&
              (n.unlisten(),
              n.subject.complete(),
              this._setClasses(t),
              this._elementInfo.delete(t),
              this._decrementMonitoredElementCount());
          }
          focusVia(e, t, n) {
            const r = xu(e);
            this._setOriginForCurrentEventQueue(t),
              'function' == typeof r.focus && r.focus(n);
          }
          ngOnDestroy() {
            this._elementInfo.forEach((e, t) => this.stopMonitoring(t));
          }
          _toggleClass(e, t, n) {
            n ? e.classList.add(t) : e.classList.remove(t);
          }
          _setClasses(e, t) {
            this._elementInfo.get(e) &&
              (this._toggleClass(e, 'cdk-focused', !!t),
              this._toggleClass(e, 'cdk-touch-focused', 'touch' === t),
              this._toggleClass(e, 'cdk-keyboard-focused', 'keyboard' === t),
              this._toggleClass(e, 'cdk-mouse-focused', 'mouse' === t),
              this._toggleClass(e, 'cdk-program-focused', 'program' === t));
          }
          _setOriginForCurrentEventQueue(e) {
            this._ngZone.runOutsideAngular(() => {
              (this._origin = e),
                (this._originTimeoutId = setTimeout(
                  () => (this._origin = null),
                  1
                ));
            });
          }
          _wasCausedByTouch(e) {
            let t = e.target;
            return (
              this._lastTouchTarget instanceof Node &&
              t instanceof Node &&
              (t === this._lastTouchTarget || t.contains(this._lastTouchTarget))
            );
          }
          _onFocus(e, t) {
            const n = this._elementInfo.get(t);
            if (!n || (!n.checkChildren && t !== e.target)) return;
            let r = this._origin;
            r ||
              (r =
                this._windowFocused && this._lastFocusOrigin
                  ? this._lastFocusOrigin
                  : this._wasCausedByTouch(e)
                  ? 'touch'
                  : 'program'),
              this._setClasses(t, r),
              this._emitOrigin(n.subject, r),
              (this._lastFocusOrigin = r);
          }
          _onBlur(e, t) {
            const n = this._elementInfo.get(t);
            !n ||
              (n.checkChildren &&
                e.relatedTarget instanceof Node &&
                t.contains(e.relatedTarget)) ||
              (this._setClasses(t), this._emitOrigin(n.subject, null));
          }
          _emitOrigin(e, t) {
            this._ngZone.run(() => e.next(t));
          }
          _incrementMonitoredElementCount() {
            1 == ++this._monitoredElementCount &&
              this._platform.isBrowser &&
              this._ngZone.runOutsideAngular(() => {
                document.addEventListener(
                  'keydown',
                  this._documentKeydownListener,
                  sc
                ),
                  document.addEventListener(
                    'mousedown',
                    this._documentMousedownListener,
                    sc
                  ),
                  document.addEventListener(
                    'touchstart',
                    this._documentTouchstartListener,
                    sc
                  ),
                  window.addEventListener('focus', this._windowFocusListener);
              });
          }
          _decrementMonitoredElementCount() {
            --this._monitoredElementCount ||
              (document.removeEventListener(
                'keydown',
                this._documentKeydownListener,
                sc
              ),
              document.removeEventListener(
                'mousedown',
                this._documentMousedownListener,
                sc
              ),
              document.removeEventListener(
                'touchstart',
                this._documentTouchstartListener,
                sc
              ),
              window.removeEventListener('focus', this._windowFocusListener),
              clearTimeout(this._windowFocusTimeoutId),
              clearTimeout(this._touchTimeoutId),
              clearTimeout(this._originTimeoutId));
          }
        }
        return (
          (e.ngInjectableDef = fe({
            factory: function () {
              return new e(je(ms), je(Su));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      const lc = new vn('8.2.3'),
        ac = new Te('mat-sanity-checks', {
          providedIn: 'root',
          factory: function () {
            return !0;
          }
        });
      class uc {
        constructor(e, t) {
          (this._sanityChecksEnabled = e),
            (this._hammerLoader = t),
            (this._hasDoneGlobalChecks = !1),
            (this._hasCheckedHammer = !1),
            (this._document =
              'object' == typeof document && document ? document : null),
            (this._window =
              'object' == typeof window && window ? window : null),
            this._areChecksEnabled() &&
              !this._hasDoneGlobalChecks &&
              (this._checkDoctypeIsDefined(),
              this._checkThemeIsPresent(),
              this._checkCdkVersionMatch(),
              (this._hasDoneGlobalChecks = !0));
        }
        _areChecksEnabled() {
          return this._sanityChecksEnabled && st() && !this._isTestEnv();
        }
        _isTestEnv() {
          const e = this._window;
          return e && (e.__karma__ || e.jasmine);
        }
        _checkDoctypeIsDefined() {
          this._document &&
            !this._document.doctype &&
            console.warn(
              'Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.'
            );
        }
        _checkThemeIsPresent() {
          if (
            !this._document ||
            !this._document.body ||
            'function' != typeof getComputedStyle
          )
            return;
          const e = this._document.createElement('div');
          e.classList.add('mat-theme-loaded-marker'),
            this._document.body.appendChild(e);
          const t = getComputedStyle(e);
          t &&
            'none' !== t.display &&
            console.warn(
              'Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming'
            ),
            this._document.body.removeChild(e);
        }
        _checkCdkVersionMatch() {
          lc.full !== wu.full &&
            console.warn(
              'The Angular Material version (' +
                lc.full +
                ') does not match the Angular CDK version (' +
                wu.full +
                ').\nPlease ensure the versions of these two packages exactly match.'
            );
        }
        _checkHammerIsAvailable() {
          !this._hasCheckedHammer &&
            this._window &&
            (!this._areChecksEnabled() ||
              this._window.Hammer ||
              this._hammerLoader ||
              console.warn(
                'Could not find HammerJS. Certain Angular Material components may not work correctly.'
              ),
            (this._hasCheckedHammer = !0));
        }
      }
      function cc(e) {
        return class extends e {
          constructor(...e) {
            super(...e), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(e) {
            this._disabled = Cu(e);
          }
        };
      }
      function hc(e, t) {
        return class extends e {
          get color() {
            return this._color;
          }
          set color(e) {
            const n = e || t;
            n !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  `mat-${this._color}`
                ),
              n && this._elementRef.nativeElement.classList.add(`mat-${n}`),
              (this._color = n));
          }
          constructor(...e) {
            super(...e), (this.color = t);
          }
        };
      }
      function dc(e) {
        return class extends e {
          constructor(...e) {
            super(...e), (this._disableRipple = !1);
          }
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(e) {
            this._disableRipple = Cu(e);
          }
        };
      }
      function mc(e, t = 0) {
        return class extends e {
          constructor(...e) {
            super(...e), (this._tabIndex = t);
          }
          get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
          }
          set tabIndex(e) {
            this._tabIndex = null != e ? e : t;
          }
        };
      }
      function pc(e) {
        return class extends e {
          constructor(...e) {
            super(...e), (this.errorState = !1), (this.stateChanges = new T());
          }
          updateErrorState() {
            const e = this.errorState,
              t = (
                this.errorStateMatcher || this._defaultErrorStateMatcher
              ).isErrorState(
                this.ngControl ? this.ngControl.control : null,
                this._parentFormGroup || this._parentForm
              );
            t !== e && ((this.errorState = t), this.stateChanges.next());
          }
        };
      }
      let fc;
      try {
        fc = 'undefined' != typeof Intl;
      } catch (Qw) {
        fc = !1;
      }
      let gc = (() => {
        class e {
          isErrorState(e, t) {
            return !!(e && e.invalid && (e.touched || (t && t.submitted)));
          }
        }
        return (
          (e.ngInjectableDef = fe({
            factory: function () {
              return new e();
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      const _c = (function () {
        var e = { FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3 };
        return (
          (e[e.FADING_IN] = 'FADING_IN'),
          (e[e.VISIBLE] = 'VISIBLE'),
          (e[e.FADING_OUT] = 'FADING_OUT'),
          (e[e.HIDDEN] = 'HIDDEN'),
          e
        );
      })();
      class bc {
        constructor(e, t, n) {
          (this._renderer = e),
            (this.element = t),
            (this.config = n),
            (this.state = _c.HIDDEN);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const yc = { enterDuration: 450, exitDuration: 400 },
        vc = 800,
        wc = Pu({ passive: !0 });
      class Cc {
        constructor(e, t, n, r) {
          (this._target = e),
            (this._ngZone = t),
            (this._isPointerDown = !1),
            (this._triggerEvents = new Map()),
            (this._activeRipples = new Set()),
            (this._onMousedown = e => {
              const t = (function (e) {
                  return 0 === e.buttons;
                })(e),
                n =
                  this._lastTouchStartEvent &&
                  Date.now() < this._lastTouchStartEvent + vc;
              this._target.rippleDisabled ||
                t ||
                n ||
                ((this._isPointerDown = !0),
                this.fadeInRipple(
                  e.clientX,
                  e.clientY,
                  this._target.rippleConfig
                ));
            }),
            (this._onTouchStart = e => {
              if (!this._target.rippleDisabled) {
                (this._lastTouchStartEvent = Date.now()),
                  (this._isPointerDown = !0);
                const t = e.changedTouches;
                for (let e = 0; e < t.length; e++)
                  this.fadeInRipple(
                    t[e].clientX,
                    t[e].clientY,
                    this._target.rippleConfig
                  );
              }
            }),
            (this._onPointerUp = () => {
              this._isPointerDown &&
                ((this._isPointerDown = !1),
                this._activeRipples.forEach(e => {
                  !e.config.persistent &&
                    (e.state === _c.VISIBLE ||
                      (e.config.terminateOnPointerUp &&
                        e.state === _c.FADING_IN)) &&
                    e.fadeOut();
                }));
            }),
            r.isBrowser &&
              ((this._containerElement = xu(n)),
              this._triggerEvents
                .set('mousedown', this._onMousedown)
                .set('mouseup', this._onPointerUp)
                .set('mouseleave', this._onPointerUp)
                .set('touchstart', this._onTouchStart)
                .set('touchend', this._onPointerUp)
                .set('touchcancel', this._onPointerUp));
        }
        fadeInRipple(e, t, n = {}) {
          const r = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            i = Object.assign({}, yc, n.animation);
          n.centered &&
            ((e = r.left + r.width / 2), (t = r.top + r.height / 2));
          const s =
              n.radius ||
              (function (e, t, n) {
                const r = Math.max(Math.abs(e - n.left), Math.abs(e - n.right)),
                  i = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
                return Math.sqrt(r * r + i * i);
              })(e, t, r),
            o = e - r.left,
            l = t - r.top,
            a = i.enterDuration,
            u = document.createElement('div');
          u.classList.add('mat-ripple-element'),
            (u.style.left = `${o - s}px`),
            (u.style.top = `${l - s}px`),
            (u.style.height = `${2 * s}px`),
            (u.style.width = `${2 * s}px`),
            (u.style.backgroundColor = n.color || null),
            (u.style.transitionDuration = `${a}ms`),
            this._containerElement.appendChild(u),
            window.getComputedStyle(u).getPropertyValue('opacity'),
            (u.style.transform = 'scale(1)');
          const c = new bc(this, u, n);
          return (
            (c.state = _c.FADING_IN),
            this._activeRipples.add(c),
            n.persistent || (this._mostRecentTransientRipple = c),
            this._runTimeoutOutsideZone(() => {
              const e = c === this._mostRecentTransientRipple;
              (c.state = _c.VISIBLE),
                n.persistent || (e && this._isPointerDown) || c.fadeOut();
            }, a),
            c
          );
        }
        fadeOutRipple(e) {
          const t = this._activeRipples.delete(e);
          if (
            (e === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !t)
          )
            return;
          const n = e.element,
            r = Object.assign({}, yc, e.config.animation);
          (n.style.transitionDuration = `${r.exitDuration}ms`),
            (n.style.opacity = '0'),
            (e.state = _c.FADING_OUT),
            this._runTimeoutOutsideZone(() => {
              (e.state = _c.HIDDEN), n.parentNode.removeChild(n);
            }, r.exitDuration);
        }
        fadeOutAll() {
          this._activeRipples.forEach(e => e.fadeOut());
        }
        setupTriggerEvents(e) {
          const t = xu(e);
          t &&
            t !== this._triggerElement &&
            (this._removeTriggerEvents(),
            this._ngZone.runOutsideAngular(() => {
              this._triggerEvents.forEach((e, n) => {
                t.addEventListener(n, e, wc);
              });
            }),
            (this._triggerElement = t));
        }
        _runTimeoutOutsideZone(e, t = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(e, t));
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            this._triggerEvents.forEach((e, t) => {
              this._triggerElement.removeEventListener(t, e, wc);
            });
        }
      }
      const xc = new Te('mat-ripple-global-options');
      class kc {
        constructor(e, t, n, r, i) {
          (this._elementRef = e),
            (this.radius = 0),
            (this._disabled = !1),
            (this._isInitialized = !1),
            (this._globalOptions = r || {}),
            (this._rippleRenderer = new Cc(this, t, e, n)),
            'NoopAnimations' === i &&
              (this._globalOptions.animation = {
                enterDuration: 0,
                exitDuration: 0
              });
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          (this._disabled = e), this._setupTriggerEventsIfEnabled();
        }
        get trigger() {
          return this._trigger || this._elementRef.nativeElement;
        }
        set trigger(e) {
          (this._trigger = e), this._setupTriggerEventsIfEnabled();
        }
        ngOnInit() {
          (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
        }
        ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        get rippleConfig() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign(
              {},
              this._globalOptions.animation,
              this.animation
            ),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
          };
        }
        get rippleDisabled() {
          return this.disabled || !!this._globalOptions.disabled;
        }
        _setupTriggerEventsIfEnabled() {
          !this.disabled &&
            this._isInitialized &&
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
        launch(e, t = 0, n) {
          return 'number' == typeof e
            ? this._rippleRenderer.fadeInRipple(
                e,
                t,
                Object.assign({}, this.rippleConfig, n)
              )
            : this._rippleRenderer.fadeInRipple(
                0,
                0,
                Object.assign({}, this.rippleConfig, e)
              );
        }
      }
      class Ec {}
      const Sc = new Te('mat-label-global-options'),
        Tc = 'accent',
        Ic = [
          'mat-button',
          'mat-flat-button',
          'mat-icon-button',
          'mat-raised-button',
          'mat-stroked-button',
          'mat-mini-fab',
          'mat-fab'
        ];
      class Ac {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const Oc = hc(cc(dc(Ac)));
      class Pc extends Oc {
        constructor(e, t, n) {
          super(e),
            (this._focusMonitor = t),
            (this._animationMode = n),
            (this.isRoundButton = this._hasHostAttributes(
              'mat-fab',
              'mat-mini-fab'
            )),
            (this.isIconButton = this._hasHostAttributes('mat-icon-button'));
          for (const r of Ic)
            this._hasHostAttributes(r) &&
              this._getHostElement().classList.add(r);
          e.nativeElement.classList.add('mat-button-base'),
            this._focusMonitor.monitor(this._elementRef, !0),
            this.isRoundButton && (this.color = Tc);
        }
        ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        focus(e = 'program', t) {
          this._focusMonitor.focusVia(this._getHostElement(), e, t);
        }
        _getHostElement() {
          return this._elementRef.nativeElement;
        }
        _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        _hasHostAttributes(...e) {
          return e.some(e => this._getHostElement().hasAttribute(e));
        }
      }
      class Mc {}
      function Rc(...e) {
        let t;
        return (
          'function' == typeof e[e.length - 1] && (t = e.pop()),
          1 === e.length && a(e[0]) && (e = e[0]),
          0 === e.length
            ? Ru
            : t
            ? Rc(e).pipe(z(e => t(...e)))
            : new w(t => new Nc(t, e))
        );
      }
      class Nc extends $ {
        constructor(e, t) {
          super(e),
            (this.sources = t),
            (this.completed = 0),
            (this.haveValues = 0);
          const n = t.length;
          this.values = new Array(n);
          for (let r = 0; r < n; r++) {
            const e = j(this, t[r], null, r);
            e && this.add(e);
          }
        }
        notifyNext(e, t, n, r, i) {
          (this.values[n] = t),
            i._hasValue || ((i._hasValue = !0), this.haveValues++);
        }
        notifyComplete(e) {
          const { destination: t, haveValues: n, values: r } = this,
            i = r.length;
          e._hasValue
            ? (this.completed++,
              this.completed === i && (n === i && t.next(r), t.complete()))
            : t.complete();
        }
      }
      const Dc = new Te('NgValueAccessor'),
        Fc = new Te('CompositionEventMode');
      class Lc {
        constructor(e, t, n) {
          (this._renderer = e),
            (this._elementRef = t),
            (this._compositionMode = n),
            (this.onChange = e => {}),
            (this.onTouched = () => {}),
            (this._composing = !1),
            null == this._compositionMode &&
              (this._compositionMode = !(function () {
                const e = la() ? la().getUserAgent() : '';
                return /android (\d+)/.test(e.toLowerCase());
              })());
        }
        writeValue(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            null == e ? '' : e
          );
        }
        registerOnChange(e) {
          this.onChange = e;
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            e
          );
        }
        _handleInput(e) {
          (!this._compositionMode ||
            (this._compositionMode && !this._composing)) &&
            this.onChange(e);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(e) {
          (this._composing = !1), this._compositionMode && this.onChange(e);
        }
      }
      class Vc {
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        reset(e) {
          this.control && this.control.reset(e);
        }
        hasError(e, t) {
          return !!this.control && this.control.hasError(e, t);
        }
        getError(e, t) {
          return this.control ? this.control.getError(e, t) : null;
        }
      }
      class Uc extends Vc {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      function jc() {
        throw new Error('unimplemented');
      }
      class $c extends Vc {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return jc();
        }
        get asyncValidator() {
          return jc();
        }
      }
      class zc {
        constructor(e) {
          this._cd = e;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      class Bc extends zc {
        constructor(e) {
          super(e);
        }
      }
      class Hc extends zc {
        constructor(e) {
          super(e);
        }
      }
      function qc(e) {
        return null == e || 0 === e.length;
      }
      const Gc = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Qc {
        static min(e) {
          return t => {
            if (qc(t.value) || qc(e)) return null;
            const n = parseFloat(t.value);
            return !isNaN(n) && n < e
              ? { min: { min: e, actual: t.value } }
              : null;
          };
        }
        static max(e) {
          return t => {
            if (qc(t.value) || qc(e)) return null;
            const n = parseFloat(t.value);
            return !isNaN(n) && n > e
              ? { max: { max: e, actual: t.value } }
              : null;
          };
        }
        static required(e) {
          return qc(e.value) ? { required: !0 } : null;
        }
        static requiredTrue(e) {
          return !0 === e.value ? null : { required: !0 };
        }
        static email(e) {
          return qc(e.value) ? null : Gc.test(e.value) ? null : { email: !0 };
        }
        static minLength(e) {
          return t => {
            if (qc(t.value)) return null;
            const n = t.value ? t.value.length : 0;
            return n < e
              ? { minlength: { requiredLength: e, actualLength: n } }
              : null;
          };
        }
        static maxLength(e) {
          return t => {
            const n = t.value ? t.value.length : 0;
            return n > e
              ? { maxlength: { requiredLength: e, actualLength: n } }
              : null;
          };
        }
        static pattern(e) {
          if (!e) return Qc.nullValidator;
          let t, n;
          return (
            'string' == typeof e
              ? ((n = ''),
                '^' !== e.charAt(0) && (n += '^'),
                (n += e),
                '$' !== e.charAt(e.length - 1) && (n += '$'),
                (t = new RegExp(n)))
              : ((n = e.toString()), (t = e)),
            e => {
              if (qc(e.value)) return null;
              const r = e.value;
              return t.test(r)
                ? null
                : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(e) {
          return null;
        }
        static compose(e) {
          if (!e) return null;
          const t = e.filter(Wc);
          return 0 == t.length
            ? null
            : function (e) {
                return Zc(
                  (function (e, t) {
                    return t.map(t => t(e));
                  })(e, t)
                );
              };
        }
        static composeAsync(e) {
          if (!e) return null;
          const t = e.filter(Wc);
          return 0 == t.length
            ? null
            : function (e) {
                return Rc(
                  (function (e, t) {
                    return t.map(t => t(e));
                  })(e, t).map(Kc)
                ).pipe(z(Zc));
              };
        }
      }
      function Wc(e) {
        return null != e;
      }
      function Kc(e) {
        const t = en(e) ? G(e) : e;
        if (!tn(t))
          throw new Error(
            'Expected validator to return Promise or Observable.'
          );
        return t;
      }
      function Zc(e) {
        const t = e.reduce(
          (e, t) => (null != t ? Object.assign({}, e, t) : e),
          {}
        );
        return 0 === Object.keys(t).length ? null : t;
      }
      function Yc(e) {
        return e.validate ? t => e.validate(t) : e;
      }
      function Xc(e) {
        return e.validate ? t => e.validate(t) : e;
      }
      class Jc {
        constructor() {
          this._accessors = [];
        }
        add(e, t) {
          this._accessors.push([e, t]);
        }
        remove(e) {
          for (let t = this._accessors.length - 1; t >= 0; --t)
            if (this._accessors[t][1] === e)
              return void this._accessors.splice(t, 1);
        }
        select(e) {
          this._accessors.forEach(t => {
            this._isSameGroup(t, e) && t[1] !== e && t[1].fireUncheck(e.value);
          });
        }
        _isSameGroup(e, t) {
          return (
            !!e[0].control &&
            e[0]._parent === t._control._parent &&
            e[1].name === t.name
          );
        }
      }
      const eh = {
        formControlName:
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        formGroupName:
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        formArrayName:
          '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        ngModelGroup:
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        ngModelWithFormGroup:
          '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
      };
      class th {
        static controlParentException() {
          throw new Error(
            `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${eh.formControlName}`
          );
        }
        static ngModelGroupException() {
          throw new Error(
            `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${eh.formGroupName}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ${eh.ngModelGroup}`
          );
        }
        static missingFormException() {
          throw new Error(
            `formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${eh.formControlName}`
          );
        }
        static groupParentException() {
          throw new Error(
            `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${eh.formGroupName}`
          );
        }
        static arrayParentException() {
          throw new Error(
            `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ${eh.formArrayName}`
          );
        }
        static disabledAttrWarning() {
          console.warn(
            "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
          );
        }
        static ngModelWarning(e) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${e}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === e ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      function nh(e, t) {
        return [...t.path, e];
      }
      function rh(e, t) {
        e || lh(t, 'Cannot find control with'),
          t.valueAccessor || lh(t, 'No value accessor for form control with'),
          (e.validator = Qc.compose([e.validator, t.validator])),
          (e.asyncValidator = Qc.composeAsync([
            e.asyncValidator,
            t.asyncValidator
          ])),
          t.valueAccessor.writeValue(e.value),
          (function (e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && ih(e, t);
            });
          })(e, t),
          (function (e, t) {
            e.registerOnChange((e, n) => {
              t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
            });
          })(e, t),
          (function (e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && ih(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          t.valueAccessor.setDisabledState &&
            e.registerOnDisabledChange(e => {
              t.valueAccessor.setDisabledState(e);
            }),
          t._rawValidators.forEach(t => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => e.updateValueAndValidity());
          }),
          t._rawAsyncValidators.forEach(t => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => e.updateValueAndValidity());
          });
      }
      function ih(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function sh(e, t) {
        null == e && lh(t, 'Cannot find control with'),
          (e.validator = Qc.compose([e.validator, t.validator])),
          (e.asyncValidator = Qc.composeAsync([
            e.asyncValidator,
            t.asyncValidator
          ]));
      }
      function oh(e) {
        return lh(
          e,
          'There is no FormControl instance attached to form control element with'
        );
      }
      function lh(e, t) {
        let n;
        throw (
          ((n =
            e.path.length > 1
              ? `path: '${e.path.join(' -> ')}'`
              : e.path[0]
              ? `name: '${e.path}'`
              : 'unspecified name attribute'),
          new Error(`${t} ${n}`))
        );
      }
      function ah(e) {
        return null != e ? Qc.compose(e.map(Yc)) : null;
      }
      function uh(e) {
        return null != e ? Qc.composeAsync(e.map(Xc)) : null;
      }
      const ch = [
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = e => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'checked',
              e
            );
          }
          registerOnChange(e) {
            this.onChange = e;
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = e => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              parseFloat(e)
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              e('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = e => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              null == e ? '' : e
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              e('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = e => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Kt);
          }
          set compareWith(e) {
            if ('function' != typeof e)
              throw new Error(
                `compareWith must be a function, but received ${JSON.stringify(
                  e
                )}`
              );
            this._compareWith = e;
          }
          writeValue(e) {
            this.value = e;
            const t = this._getOptionId(e);
            null == t &&
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'selectedIndex',
                -1
              );
            const n = (function (e, t) {
              return null == e
                ? `${t}`
                : (t && 'object' == typeof t && (t = 'Object'),
                  `${e}: ${t}`.slice(0, 50));
            })(t, e);
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              n
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              (this.value = this._getOptionValue(t)), e(this.value);
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(e) {
            for (const t of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(t), e)) return t;
            return null;
          }
          _getOptionValue(e) {
            const t = (function (e) {
              return e.split(':')[0];
            })(e);
            return this._optionMap.has(t) ? this._optionMap.get(t) : e;
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = e => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Kt);
          }
          set compareWith(e) {
            if ('function' != typeof e)
              throw new Error(
                `compareWith must be a function, but received ${JSON.stringify(
                  e
                )}`
              );
            this._compareWith = e;
          }
          writeValue(e) {
            let t;
            if (((this.value = e), Array.isArray(e))) {
              const n = e.map(e => this._getOptionId(e));
              t = (e, t) => {
                e._setSelected(n.indexOf(t.toString()) > -1);
              };
            } else
              t = (e, t) => {
                e._setSelected(!1);
              };
            this._optionMap.forEach(t);
          }
          registerOnChange(e) {
            this.onChange = t => {
              const n = [];
              if (t.hasOwnProperty('selectedOptions')) {
                const e = t.selectedOptions;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t),
                    i = this._getOptionValue(r.value);
                  n.push(i);
                }
              } else {
                const e = t.options;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t);
                  if (r.selected) {
                    const e = this._getOptionValue(r.value);
                    n.push(e);
                  }
                }
              }
              (this.value = n), e(n);
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _registerOption(e) {
            const t = (this._idCounter++).toString();
            return this._optionMap.set(t, e), t;
          }
          _getOptionId(e) {
            for (const t of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(t)._value, e)) return t;
            return null;
          }
          _getOptionValue(e) {
            const t = (function (e) {
              return e.split(':')[0];
            })(e);
            return this._optionMap.has(t) ? this._optionMap.get(t)._value : e;
          }
        },
        class {
          constructor(e, t, n, r) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._registry = n),
              (this._injector = r),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          ngOnInit() {
            (this._control = this._injector.get($c)),
              this._checkName(),
              this._registry.add(this._control, this);
          }
          ngOnDestroy() {
            this._registry.remove(this);
          }
          writeValue(e) {
            (this._state = e === this.value),
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'checked',
                this._state
              );
          }
          registerOnChange(e) {
            (this._fn = e),
              (this.onChange = () => {
                e(this.value), this._registry.select(this);
              });
          }
          fireUncheck(e) {
            this.writeValue(e);
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _checkName() {
            this.name &&
              this.formControlName &&
              this.name !== this.formControlName &&
              this._throwNameError(),
              !this.name &&
                this.formControlName &&
                (this.name = this.formControlName);
          }
          _throwNameError() {
            throw new Error(
              '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
            );
          }
        }
      ];
      function hh(e, t) {
        e._syncPendingControls(),
          t.forEach(e => {
            const t = e.control;
            'submit' === t.updateOn &&
              t._pendingChange &&
              (e.viewToModelUpdate(t._pendingValue), (t._pendingChange = !1));
          });
      }
      function dh(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const mh = 'VALID',
        ph = 'INVALID',
        fh = 'PENDING',
        gh = 'DISABLED';
      function _h(e) {
        const t = yh(e) ? e.validators : e;
        return Array.isArray(t) ? ah(t) : t || null;
      }
      function bh(e, t) {
        const n = yh(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? uh(n) : n || null;
      }
      function yh(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      class vh {
        constructor(e, t) {
          (this.validator = e),
            (this.asyncValidator = t),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === mh;
        }
        get invalid() {
          return this.status === ph;
        }
        get pending() {
          return this.status == fh;
        }
        get disabled() {
          return this.status === gh;
        }
        get enabled() {
          return this.status !== gh;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(e) {
          this.validator = _h(e);
        }
        setAsyncValidators(e) {
          this.asyncValidator = bh(e);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(e = {}) {
          (this.touched = !0),
            this._parent && !e.onlySelf && this._parent.markAsTouched(e);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild(e => e.markAllAsTouched());
        }
        markAsUntouched(e = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(e => {
              e.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !e.onlySelf && this._parent._updateTouched(e);
        }
        markAsDirty(e = {}) {
          (this.pristine = !1),
            this._parent && !e.onlySelf && this._parent.markAsDirty(e);
        }
        markAsPristine(e = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(e => {
              e.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !e.onlySelf && this._parent._updatePristine(e);
        }
        markAsPending(e = {}) {
          (this.status = fh),
            !1 !== e.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !e.onlySelf && this._parent.markAsPending(e);
        }
        disable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          (this.status = gh),
            (this.errors = null),
            this._forEachChild(t => {
              t.disable(Object.assign({}, e, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== e.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign({}, e, { skipPristineCheck: t })
            ),
            this._onDisabledChange.forEach(e => e(!0));
        }
        enable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          (this.status = mh),
            this._forEachChild(t => {
              t.enable(Object.assign({}, e, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: e.emitEvent
            }),
            this._updateAncestors(
              Object.assign({}, e, { skipPristineCheck: t })
            ),
            this._onDisabledChange.forEach(e => e(!1));
        }
        _updateAncestors(e) {
          this._parent &&
            !e.onlySelf &&
            (this._parent.updateValueAndValidity(e),
            e.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(e) {
          this._parent = e;
        }
        updateValueAndValidity(e = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status !== mh && this.status !== fh) ||
                this._runAsyncValidator(e.emitEvent)),
            !1 !== e.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !e.onlySelf &&
              this._parent.updateValueAndValidity(e);
        }
        _updateTreeValidity(e = { emitEvent: !0 }) {
          this._forEachChild(t => t._updateTreeValidity(e)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: e.emitEvent
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? gh : mh;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(e) {
          if (this.asyncValidator) {
            this.status = fh;
            const t = Kc(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe(t =>
              this.setErrors(t, { emitEvent: e })
            );
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(e, t = {}) {
          (this.errors = e), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(e) {
          return (function (e, t, n) {
            return null == t
              ? null
              : (t instanceof Array || (t = t.split('.')),
                t instanceof Array && 0 === t.length
                  ? null
                  : t.reduce(
                      (e, t) =>
                        e instanceof Ch
                          ? e.controls.hasOwnProperty(t)
                            ? e.controls[t]
                            : null
                          : (e instanceof xh && e.at(t)) || null,
                      e
                    ));
          })(this, e);
        }
        getError(e, t) {
          const n = t ? this.get(t) : this;
          return n && n.errors ? n.errors[e] : null;
        }
        hasError(e, t) {
          return !!this.getError(e, t);
        }
        get root() {
          let e = this;
          for (; e._parent; ) e = e._parent;
          return e;
        }
        _updateControlsErrors(e) {
          (this.status = this._calculateStatus()),
            e && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(e);
        }
        _initObservables() {
          (this.valueChanges = new Li()), (this.statusChanges = new Li());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? gh
            : this.errors
            ? ph
            : this._anyControlsHaveStatus(fh)
            ? fh
            : this._anyControlsHaveStatus(ph)
            ? ph
            : mh;
        }
        _anyControlsHaveStatus(e) {
          return this._anyControls(t => t.status === e);
        }
        _anyControlsDirty() {
          return this._anyControls(e => e.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(e => e.touched);
        }
        _updatePristine(e = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !e.onlySelf && this._parent._updatePristine(e);
        }
        _updateTouched(e = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !e.onlySelf && this._parent._updateTouched(e);
        }
        _isBoxedValue(e) {
          return (
            'object' == typeof e &&
            null !== e &&
            2 === Object.keys(e).length &&
            'value' in e &&
            'disabled' in e
          );
        }
        _registerOnCollectionChange(e) {
          this._onCollectionChange = e;
        }
        _setUpdateStrategy(e) {
          yh(e) && null != e.updateOn && (this._updateOn = e.updateOn);
        }
        _parentMarkedDirty(e) {
          return (
            !e &&
            this._parent &&
            this._parent.dirty &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class wh extends vh {
        constructor(e = null, t, n) {
          super(_h(t), bh(n, t)),
            (this._onChange = []),
            this._applyFormState(e),
            this._setUpdateStrategy(t),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(e, t = {}) {
          (this.value = this._pendingValue = e),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach(e =>
                e(this.value, !1 !== t.emitViewToModelChange)
              ),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          this.setValue(e, t);
        }
        reset(e = null, t = {}) {
          this._applyFormState(e),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(e) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(e) {
          this._onChange.push(e);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(e) {
          this._onDisabledChange.push(e);
        }
        _forEachChild(e) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1
            }),
            0)
          );
        }
        _applyFormState(e) {
          this._isBoxedValue(e)
            ? ((this.value = this._pendingValue = e.value),
              e.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = e);
        }
      }
      class Ch extends vh {
        constructor(e, t, n) {
          super(_h(t), bh(n, t)),
            (this.controls = e),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(e, t) {
          return this.controls[e]
            ? this.controls[e]
            : ((this.controls[e] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(e, t) {
          this.registerControl(e, t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(e) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            delete this.controls[e],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(e, t) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            delete this.controls[e],
            t && this.registerControl(e, t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(e) {
          return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e),
            Object.keys(e).forEach(n => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(e[n], {
                  onlySelf: !0,
                  emitEvent: t.emitEvent
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          Object.keys(e).forEach(n => {
            this.controls[n] &&
              this.controls[n].patchValue(e[n], {
                onlySelf: !0,
                emitEvent: t.emitEvent
              });
          }),
            this.updateValueAndValidity(t);
        }
        reset(e = {}, t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => (
              (e[n] = t instanceof wh ? t.value : t.getRawValue()), e
            )
          );
        }
        _syncPendingControls() {
          let e = this._reduceChildren(
            !1,
            (e, t) => !!t._syncPendingControls() || e
          );
          return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
        }
        _throwIfControlMissing(e) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[e])
            throw new Error(`Cannot find form control with name: ${e}.`);
        }
        _forEachChild(e) {
          Object.keys(this.controls).forEach(t => e(this.controls[t], t));
        }
        _setUpControls() {
          this._forEachChild(e => {
            e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(e) {
          let t = !1;
          return (
            this._forEachChild((n, r) => {
              t = t || (this.contains(r) && e(n));
            }),
            t
          );
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => ((t.enabled || this.disabled) && (e[n] = t.value), e)
          );
        }
        _reduceChildren(e, t) {
          let n = e;
          return (
            this._forEachChild((e, r) => {
              n = t(n, e, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const e of Object.keys(this.controls))
            if (this.controls[e].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (void 0 === e[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class xh extends vh {
        constructor(e, t, n) {
          super(_h(t), bh(n, t)),
            (this.controls = e),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(e) {
          return this.controls[e];
        }
        push(e) {
          this.controls.push(e),
            this._registerControl(e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(e, t) {
          this.controls.splice(e, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity();
        }
        removeAt(e) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            this.controls.splice(e, 1),
            this.updateValueAndValidity();
        }
        setControl(e, t) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            this.controls.splice(e, 1),
            t && (this.controls.splice(e, 0, t), this._registerControl(t)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e),
            e.forEach((e, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(e, {
                  onlySelf: !0,
                  emitEvent: t.emitEvent
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          e.forEach((e, n) => {
            this.at(n) &&
              this.at(n).patchValue(e, {
                onlySelf: !0,
                emitEvent: t.emitEvent
              });
          }),
            this.updateValueAndValidity(t);
        }
        reset(e = [], t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map(e =>
            e instanceof wh ? e.value : e.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(e => e._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let e = this.controls.reduce(
            (e, t) => !!t._syncPendingControls() || e,
            !1
          );
          return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
        }
        _throwIfControlMissing(e) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(e))
            throw new Error(`Cannot find form control at index ${e}`);
        }
        _forEachChild(e) {
          this.controls.forEach((t, n) => {
            e(t, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(e => e.enabled || this.disabled)
            .map(e => e.value);
        }
        _anyControls(e) {
          return this.controls.some(t => t.enabled && e(t));
        }
        _setUpControls() {
          this._forEachChild(e => this._registerControl(e));
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (void 0 === e[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const e of this.controls) if (e.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(e) {
          e.setParent(this),
            e._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const kh = (() => Promise.resolve(null))();
      class Eh extends Uc {
        constructor(e, t) {
          super(),
            (this.submitted = !1),
            (this._directives = []),
            (this.ngSubmit = new Li()),
            (this.form = new Ch({}, ah(e), uh(t)));
        }
        ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        get controls() {
          return this.form.controls;
        }
        addControl(e) {
          kh.then(() => {
            const t = this._findContainer(e.path);
            (e.control = t.registerControl(e.name, e.control)),
              rh(e.control, e),
              e.control.updateValueAndValidity({ emitEvent: !1 }),
              this._directives.push(e);
          });
        }
        getControl(e) {
          return this.form.get(e.path);
        }
        removeControl(e) {
          kh.then(() => {
            const t = this._findContainer(e.path);
            t && t.removeControl(e.name), dh(this._directives, e);
          });
        }
        addFormGroup(e) {
          kh.then(() => {
            const t = this._findContainer(e.path),
              n = new Ch({});
            sh(n, e),
              t.registerControl(e.name, n),
              n.updateValueAndValidity({ emitEvent: !1 });
          });
        }
        removeFormGroup(e) {
          kh.then(() => {
            const t = this._findContainer(e.path);
            t && t.removeControl(e.name);
          });
        }
        getFormGroup(e) {
          return this.form.get(e.path);
        }
        updateModel(e, t) {
          kh.then(() => {
            this.form.get(e.path).setValue(t);
          });
        }
        setValue(e) {
          this.control.setValue(e);
        }
        onSubmit(e) {
          return (
            (this.submitted = !0),
            hh(this.form, this._directives),
            this.ngSubmit.emit(e),
            !1
          );
        }
        onReset() {
          this.resetForm();
        }
        resetForm(e) {
          this.form.reset(e), (this.submitted = !1);
        }
        _setUpdateStrategy() {
          this.options &&
            null != this.options.updateOn &&
            (this.form._updateOn = this.options.updateOn);
        }
        _findContainer(e) {
          return e.pop(), e.length ? this.form.get(e) : this.form;
        }
      }
      class Sh {
        static modelParentException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${eh.formControlName}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${eh.ngModelWithFormGroup}`
          );
        }
        static formGroupNameException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${eh.formGroupName}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${eh.ngModelGroup}`
          );
        }
        static missingNameException() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        }
        static modelGroupParentException() {
          throw new Error(
            `\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${eh.formGroupName}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${eh.ngModelGroup}`
          );
        }
        static ngFormWarning() {
          console.warn(
            "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
          );
        }
      }
      const Th = new Te('NgFormSelectorWarning');
      class Ih extends Uc {
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormGroup(this);
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return nh(this.name, this._parent);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return ah(this._validators);
        }
        get asyncValidator() {
          return uh(this._asyncValidators);
        }
        _checkParentType() {}
      }
      class Ah extends Ih {
        constructor(e, t, n) {
          super(),
            (this._parent = e),
            (this._validators = t),
            (this._asyncValidators = n);
        }
        _checkParentType() {
          this._parent instanceof Ah ||
            this._parent instanceof Eh ||
            Sh.modelGroupParentException();
        }
      }
      const Oh = (() => Promise.resolve(null))();
      class Ph extends $c {
        constructor(e, t, n, r) {
          super(),
            (this.control = new wh()),
            (this._registered = !1),
            (this.update = new Li()),
            (this._parent = e),
            (this._rawValidators = t || []),
            (this._rawAsyncValidators = n || []),
            (this.valueAccessor = (function (e, t) {
              if (!t) return null;
              Array.isArray(t) ||
                lh(
                  e,
                  'Value accessor was not provided as an array for form control with'
                );
              let n = void 0,
                r = void 0,
                i = void 0;
              return (
                t.forEach(t => {
                  t.constructor === Lc
                    ? (n = t)
                    : (function (e) {
                        return ch.some(t => e.constructor === t);
                      })(t)
                    ? (r &&
                        lh(
                          e,
                          'More than one built-in value accessor matches form control with'
                        ),
                      (r = t))
                    : (i &&
                        lh(
                          e,
                          'More than one custom value accessor matches form control with'
                        ),
                      (i = t));
                }),
                i ||
                  r ||
                  n ||
                  (lh(e, 'No valid value accessor for form control with'), null)
              );
            })(this, r));
        }
        ngOnChanges(e) {
          this._checkForErrors(),
            this._registered || this._setUpControl(),
            'isDisabled' in e && this._updateDisabled(e),
            (function (e, t) {
              if (!e.hasOwnProperty('model')) return !1;
              const n = e.model;
              return !!n.isFirstChange() || !Kt(t, n.currentValue);
            })(e, this.viewModel) &&
              (this._updateValue(this.model), (this.viewModel = this.model));
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        get path() {
          return this._parent ? nh(this.name, this._parent) : [this.name];
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return ah(this._rawValidators);
        }
        get asyncValidator() {
          return uh(this._rawAsyncValidators);
        }
        viewToModelUpdate(e) {
          (this.viewModel = e), this.update.emit(e);
        }
        _setUpControl() {
          this._setUpdateStrategy(),
            this._isStandalone()
              ? this._setUpStandalone()
              : this.formDirective.addControl(this),
            (this._registered = !0);
        }
        _setUpdateStrategy() {
          this.options &&
            null != this.options.updateOn &&
            (this.control._updateOn = this.options.updateOn);
        }
        _isStandalone() {
          return !this._parent || !(!this.options || !this.options.standalone);
        }
        _setUpStandalone() {
          rh(this.control, this),
            this.control.updateValueAndValidity({ emitEvent: !1 });
        }
        _checkForErrors() {
          this._isStandalone() || this._checkParentType(), this._checkName();
        }
        _checkParentType() {
          !(this._parent instanceof Ah) && this._parent instanceof Ih
            ? Sh.formGroupNameException()
            : this._parent instanceof Ah ||
              this._parent instanceof Eh ||
              Sh.modelParentException();
        }
        _checkName() {
          this.options && this.options.name && (this.name = this.options.name),
            this._isStandalone() || this.name || Sh.missingNameException();
        }
        _updateValue(e) {
          Oh.then(() => {
            this.control.setValue(e, { emitViewToModelChange: !1 });
          });
        }
        _updateDisabled(e) {
          const t = e.isDisabled.currentValue,
            n = '' === t || (t && 'false' !== t);
          Oh.then(() => {
            n && !this.control.disabled
              ? this.control.disable()
              : !n && this.control.disabled && this.control.enable();
          });
        }
      }
      class Mh {}
      class Rh extends Uc {
        constructor(e, t) {
          super(),
            (this._validators = e),
            (this._asyncValidators = t),
            (this.submitted = !1),
            (this.directives = []),
            (this.form = null),
            (this.ngSubmit = new Li());
        }
        ngOnChanges(e) {
          this._checkFormPresent(),
            e.hasOwnProperty('form') &&
              (this._updateValidators(),
              this._updateDomValue(),
              this._updateRegistrations());
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        addControl(e) {
          const t = this.form.get(e.path);
          return (
            rh(t, e),
            t.updateValueAndValidity({ emitEvent: !1 }),
            this.directives.push(e),
            t
          );
        }
        getControl(e) {
          return this.form.get(e.path);
        }
        removeControl(e) {
          dh(this.directives, e);
        }
        addFormGroup(e) {
          const t = this.form.get(e.path);
          sh(t, e), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormGroup(e) {}
        getFormGroup(e) {
          return this.form.get(e.path);
        }
        addFormArray(e) {
          const t = this.form.get(e.path);
          sh(t, e), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormArray(e) {}
        getFormArray(e) {
          return this.form.get(e.path);
        }
        updateModel(e, t) {
          this.form.get(e.path).setValue(t);
        }
        onSubmit(e) {
          return (
            (this.submitted = !0),
            hh(this.form, this.directives),
            this.ngSubmit.emit(e),
            !1
          );
        }
        onReset() {
          this.resetForm();
        }
        resetForm(e) {
          this.form.reset(e), (this.submitted = !1);
        }
        _updateDomValue() {
          this.directives.forEach(e => {
            const t = this.form.get(e.path);
            e.control !== t &&
              ((function (e, t) {
                t.valueAccessor.registerOnChange(() => oh(t)),
                  t.valueAccessor.registerOnTouched(() => oh(t)),
                  t._rawValidators.forEach(e => {
                    e.registerOnValidatorChange &&
                      e.registerOnValidatorChange(null);
                  }),
                  t._rawAsyncValidators.forEach(e => {
                    e.registerOnValidatorChange &&
                      e.registerOnValidatorChange(null);
                  }),
                  e && e._clearChangeFns();
              })(e.control, e),
              t && rh(t, e),
              (e.control = t));
          }),
            this.form._updateTreeValidity({ emitEvent: !1 });
        }
        _updateRegistrations() {
          this.form._registerOnCollectionChange(() => this._updateDomValue()),
            this._oldForm &&
              this._oldForm._registerOnCollectionChange(() => {}),
            (this._oldForm = this.form);
        }
        _updateValidators() {
          const e = ah(this._validators);
          this.form.validator = Qc.compose([this.form.validator, e]);
          const t = uh(this._asyncValidators);
          this.form.asyncValidator = Qc.composeAsync([
            this.form.asyncValidator,
            t
          ]);
        }
        _checkFormPresent() {
          this.form || th.missingFormException();
        }
      }
      class Nh {}
      class Dh {
        static withConfig(e) {
          return {
            ngModule: Dh,
            providers: [
              { provide: Th, useValue: e.warnOnDeprecatedNgFormSelector }
            ]
          };
        }
      }
      const Fh = new Te('mat-checkbox-click-action');
      let Lh = 0;
      const Vh = (function () {
        var e = { Init: 0, Checked: 1, Unchecked: 2, Indeterminate: 3 };
        return (
          (e[e.Init] = 'Init'),
          (e[e.Checked] = 'Checked'),
          (e[e.Unchecked] = 'Unchecked'),
          (e[e.Indeterminate] = 'Indeterminate'),
          e
        );
      })();
      class Uh {}
      class jh {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const $h = mc(hc(dc(cc(jh)), 'accent'));
      class zh extends $h {
        constructor(e, t, n, r, i, s, o) {
          super(e),
            (this._changeDetectorRef = t),
            (this._focusMonitor = n),
            (this._ngZone = r),
            (this._clickAction = s),
            (this._animationMode = o),
            (this.ariaLabel = ''),
            (this.ariaLabelledby = null),
            (this._uniqueId = `mat-checkbox-${++Lh}`),
            (this.id = this._uniqueId),
            (this.labelPosition = 'after'),
            (this.name = null),
            (this.change = new Li()),
            (this.indeterminateChange = new Li()),
            (this._onTouched = () => {}),
            (this._currentAnimationClass = ''),
            (this._currentCheckState = Vh.Init),
            (this._controlValueAccessorChangeFn = () => {}),
            (this._checked = !1),
            (this._disabled = !1),
            (this._indeterminate = !1),
            (this.tabIndex = parseInt(i) || 0),
            this._focusMonitor.monitor(e, !0).subscribe(e => {
              e ||
                Promise.resolve().then(() => {
                  this._onTouched(), t.markForCheck();
                });
            });
        }
        get inputId() {
          return `${this.id || this._uniqueId}-input`;
        }
        get required() {
          return this._required;
        }
        set required(e) {
          this._required = Cu(e);
        }
        ngAfterViewChecked() {}
        ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        get checked() {
          return this._checked;
        }
        set checked(e) {
          e != this.checked &&
            ((this._checked = e), this._changeDetectorRef.markForCheck());
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          const t = Cu(e);
          t !== this.disabled &&
            ((this._disabled = t), this._changeDetectorRef.markForCheck());
        }
        get indeterminate() {
          return this._indeterminate;
        }
        set indeterminate(e) {
          const t = e != this._indeterminate;
          (this._indeterminate = e),
            t &&
              (this._transitionCheckState(
                this._indeterminate
                  ? Vh.Indeterminate
                  : this.checked
                  ? Vh.Checked
                  : Vh.Unchecked
              ),
              this.indeterminateChange.emit(this._indeterminate));
        }
        _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        _onLabelTextChange() {
          this._changeDetectorRef.detectChanges();
        }
        writeValue(e) {
          this.checked = !!e;
        }
        registerOnChange(e) {
          this._controlValueAccessorChangeFn = e;
        }
        registerOnTouched(e) {
          this._onTouched = e;
        }
        setDisabledState(e) {
          this.disabled = e;
        }
        _getAriaChecked() {
          return this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false';
        }
        _transitionCheckState(e) {
          let t = this._currentCheckState,
            n = this._elementRef.nativeElement;
          if (
            t !== e &&
            (this._currentAnimationClass.length > 0 &&
              n.classList.remove(this._currentAnimationClass),
            (this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(
              t,
              e
            )),
            (this._currentCheckState = e),
            this._currentAnimationClass.length > 0)
          ) {
            n.classList.add(this._currentAnimationClass);
            const e = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                n.classList.remove(e);
              }, 1e3);
            });
          }
        }
        _emitChangeEvent() {
          const e = new Uh();
          (e.source = this),
            (e.checked = this.checked),
            this._controlValueAccessorChangeFn(this.checked),
            this.change.emit(e);
        }
        toggle() {
          this.checked = !this.checked;
        }
        _onInputClick(e) {
          e.stopPropagation(),
            this.disabled || 'noop' === this._clickAction
              ? this.disabled ||
                'noop' !== this._clickAction ||
                ((this._inputElement.nativeElement.checked = this.checked),
                (this._inputElement.nativeElement.indeterminate = this.indeterminate))
              : (this.indeterminate &&
                  'check' !== this._clickAction &&
                  Promise.resolve().then(() => {
                    (this._indeterminate = !1),
                      this.indeterminateChange.emit(this._indeterminate);
                  }),
                this.toggle(),
                this._transitionCheckState(
                  this._checked ? Vh.Checked : Vh.Unchecked
                ),
                this._emitChangeEvent());
        }
        focus(e = 'keyboard', t) {
          this._focusMonitor.focusVia(this._inputElement, e, t);
        }
        _onInteractionEvent(e) {
          e.stopPropagation();
        }
        _getAnimationClassForCheckStateTransition(e, t) {
          if ('NoopAnimations' === this._animationMode) return '';
          let n = '';
          switch (e) {
            case Vh.Init:
              if (t === Vh.Checked) n = 'unchecked-checked';
              else {
                if (t != Vh.Indeterminate) return '';
                n = 'unchecked-indeterminate';
              }
              break;
            case Vh.Unchecked:
              n =
                t === Vh.Checked
                  ? 'unchecked-checked'
                  : 'unchecked-indeterminate';
              break;
            case Vh.Checked:
              n =
                t === Vh.Unchecked
                  ? 'checked-unchecked'
                  : 'checked-indeterminate';
              break;
            case Vh.Indeterminate:
              n =
                t === Vh.Checked
                  ? 'indeterminate-checked'
                  : 'indeterminate-unchecked';
          }
          return `mat-checkbox-anim-${n}`;
        }
      }
      class Bh {}
      class Hh {}
      class qh {}
      class Gh {}
      const Qh = '*';
      function Wh(e, t = null) {
        return { type: 2, steps: e, options: t };
      }
      function Kh(e) {
        return { type: 6, styles: e, offset: null };
      }
      function Zh(e) {
        Promise.resolve(null).then(e);
      }
      class Yh {
        constructor(e = 0, t = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = e + t);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(e => e()),
            (this._onDoneFns = []));
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Zh(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach(e => e()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach(e => e()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(e) {}
        getPosition() {
          return 0;
        }
        triggerCallback(e) {
          const t = 'start' == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
      }
      class Xh {
        constructor(e) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = e);
          let t = 0,
            n = 0,
            r = 0;
          const i = this.players.length;
          0 == i
            ? Zh(() => this._onFinish())
            : this.players.forEach(e => {
                e.onDone(() => {
                  ++t == i && this._onFinish();
                }),
                  e.onDestroy(() => {
                    ++n == i && this._onDestroy();
                  }),
                  e.onStart(() => {
                    ++r == i && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (e, t) => Math.max(e, t.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(e => e()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach(e => e.init());
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach(e => e()),
            (this._onStartFns = []));
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach(e => e.play());
        }
        pause() {
          this.players.forEach(e => e.pause());
        }
        restart() {
          this.players.forEach(e => e.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach(e => e.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach(e => e.destroy()),
            this._onDestroyFns.forEach(e => e()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach(e => e.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(e) {
          const t = e * this.totalTime;
          this.players.forEach(e => {
            const n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
            e.setPosition(n);
          });
        }
        getPosition() {
          let e = 0;
          return (
            this.players.forEach(t => {
              const n = t.getPosition();
              e = Math.min(n, e);
            }),
            e
          );
        }
        beforeDestroy() {
          this.players.forEach(e => {
            e.beforeDestroy && e.beforeDestroy();
          });
        }
        triggerCallback(e) {
          const t = 'start' == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
      }
      const Jh = '!';
      function ed(e, t, n, i) {
        return (
          r(n) && ((i = n), (n = void 0)),
          i
            ? ed(e, t, n).pipe(z(e => (a(e) ? i(...e) : i(e))))
            : new w(r => {
                !(function e(t, n, r, i, s) {
                  let o;
                  if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.addEventListener &&
                        'function' == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addEventListener(n, r, s),
                      (o = () => e.removeEventListener(n, r, s));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.on &&
                        'function' == typeof e.off
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.on(n, r), (o = () => e.off(n, r));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.addListener &&
                        'function' == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addListener(n, r), (o = () => e.removeListener(n, r));
                  } else {
                    if (!t || !t.length)
                      throw new TypeError('Invalid event target');
                    for (let o = 0, l = t.length; o < l; o++)
                      e(t[o], n, r, i, s);
                  }
                  i.add(o);
                })(
                  e,
                  t,
                  function (e) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : e
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      function td(e) {
        return t => t.lift(new nd(e));
      }
      class nd {
        constructor(e) {
          this.notifier = e;
        }
        call(e, t) {
          const n = new rd(e),
            r = j(n, this.notifier);
          return r && !n.seenValue ? (n.add(r), t.subscribe(n)) : n;
        }
      }
      class rd extends $ {
        constructor(e) {
          super(e), (this.seenValue = !1);
        }
        notifyNext(e, t, n, r, i) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      class id {}
      function sd(e) {
        return Error(`A hint was already declared for 'align="${e}"'.`);
      }
      let od = 0;
      const ld = 0.75,
        ad = 5;
      class ud {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const cd = hc(ud, 'primary'),
        hd = new Te('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      class dd extends cd {
        constructor(e, t, n, r, i, s, o, l) {
          super(e),
            (this._elementRef = e),
            (this._changeDetectorRef = t),
            (this._dir = r),
            (this._defaults = i),
            (this._platform = s),
            (this._ngZone = o),
            (this._outlineGapCalculationNeededImmediately = !1),
            (this._outlineGapCalculationNeededOnStable = !1),
            (this._destroyed = new T()),
            (this._showAlwaysAnimate = !1),
            (this._subscriptAnimationState = ''),
            (this._hintLabel = ''),
            (this._hintLabelId = `mat-hint-${od++}`),
            (this._labelId = `mat-form-field-label-${od++}`),
            (this._previousDirection = 'ltr'),
            (this._labelOptions = n || {}),
            (this.floatLabel = this._labelOptions.float || 'auto'),
            (this._animationsEnabled = 'NoopAnimations' !== l),
            (this.appearance = i && i.appearance ? i.appearance : 'legacy'),
            (this._hideRequiredMarker =
              !(!i || null == i.hideRequiredMarker) && i.hideRequiredMarker);
        }
        get appearance() {
          return this._appearance;
        }
        set appearance(e) {
          const t = this._appearance;
          (this._appearance =
            e || (this._defaults && this._defaults.appearance) || 'legacy'),
            'outline' === this._appearance &&
              t !== e &&
              (this._outlineGapCalculationNeededOnStable = !0);
        }
        get hideRequiredMarker() {
          return this._hideRequiredMarker;
        }
        set hideRequiredMarker(e) {
          this._hideRequiredMarker = Cu(e);
        }
        get _shouldAlwaysFloat() {
          return 'always' === this.floatLabel && !this._showAlwaysAnimate;
        }
        get _canLabelFloat() {
          return 'never' !== this.floatLabel;
        }
        get hintLabel() {
          return this._hintLabel;
        }
        set hintLabel(e) {
          (this._hintLabel = e), this._processHints();
        }
        get floatLabel() {
          return 'legacy' !== this.appearance && 'never' === this._floatLabel
            ? 'auto'
            : this._floatLabel;
        }
        set floatLabel(e) {
          e !== this._floatLabel &&
            ((this._floatLabel = e || this._labelOptions.float || 'auto'),
            this._changeDetectorRef.markForCheck());
        }
        get _control() {
          return (
            this._explicitFormFieldControl ||
            this._controlNonStatic ||
            this._controlStatic
          );
        }
        set _control(e) {
          this._explicitFormFieldControl = e;
        }
        get _labelChild() {
          return this._labelChildNonStatic || this._labelChildStatic;
        }
        getConnectedOverlayOrigin() {
          return this._connectionContainerRef || this._elementRef;
        }
        ngAfterContentInit() {
          this._validateControlChild();
          const e = this._control;
          e.controlType &&
            this._elementRef.nativeElement.classList.add(
              `mat-form-field-type-${e.controlType}`
            ),
            e.stateChanges.pipe(Lu(null)).subscribe(() => {
              this._validatePlaceholders(),
                this._syncDescribedByIds(),
                this._changeDetectorRef.markForCheck();
            }),
            e.ngControl &&
              e.ngControl.valueChanges &&
              e.ngControl.valueChanges
                .pipe(td(this._destroyed))
                .subscribe(() => this._changeDetectorRef.markForCheck()),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable
                .asObservable()
                .pipe(td(this._destroyed))
                .subscribe(() => {
                  this._outlineGapCalculationNeededOnStable &&
                    this.updateOutlineGap();
                });
            }),
            X(
              this._prefixChildren.changes,
              this._suffixChildren.changes
            ).subscribe(() => {
              (this._outlineGapCalculationNeededOnStable = !0),
                this._changeDetectorRef.markForCheck();
            }),
            this._hintChildren.changes.pipe(Lu(null)).subscribe(() => {
              this._processHints(), this._changeDetectorRef.markForCheck();
            }),
            this._errorChildren.changes.pipe(Lu(null)).subscribe(() => {
              this._syncDescribedByIds(),
                this._changeDetectorRef.markForCheck();
            }),
            this._dir &&
              this._dir.change.pipe(td(this._destroyed)).subscribe(() => {
                this.updateOutlineGap(),
                  (this._previousDirection = this._dir.value);
              });
        }
        ngAfterContentChecked() {
          this._validateControlChild(),
            this._outlineGapCalculationNeededImmediately &&
              this.updateOutlineGap();
        }
        ngAfterViewInit() {
          (this._subscriptAnimationState = 'enter'),
            this._changeDetectorRef.detectChanges();
        }
        ngOnDestroy() {
          this._destroyed.next(), this._destroyed.complete();
        }
        _shouldForward(e) {
          const t = this._control ? this._control.ngControl : null;
          return t && t[e];
        }
        _hasPlaceholder() {
          return !!(
            (this._control && this._control.placeholder) ||
            this._placeholderChild
          );
        }
        _hasLabel() {
          return !!this._labelChild;
        }
        _shouldLabelFloat() {
          return (
            this._canLabelFloat &&
            (this._control.shouldLabelFloat || this._shouldAlwaysFloat)
          );
        }
        _hideControlPlaceholder() {
          return (
            ('legacy' === this.appearance && !this._hasLabel()) ||
            (this._hasLabel() && !this._shouldLabelFloat())
          );
        }
        _hasFloatingLabel() {
          return (
            this._hasLabel() ||
            ('legacy' === this.appearance && this._hasPlaceholder())
          );
        }
        _getDisplayedMessages() {
          return this._errorChildren &&
            this._errorChildren.length > 0 &&
            this._control.errorState
            ? 'error'
            : 'hint';
        }
        _animateAndLockLabel() {
          this._hasFloatingLabel() &&
            this._canLabelFloat &&
            (this._animationsEnabled &&
              ((this._showAlwaysAnimate = !0),
              ed(this._label.nativeElement, 'transitionend')
                .pipe(tc(1))
                .subscribe(() => {
                  this._showAlwaysAnimate = !1;
                })),
            (this.floatLabel = 'always'),
            this._changeDetectorRef.markForCheck());
        }
        _validatePlaceholders() {
          if (this._control.placeholder && this._placeholderChild)
            throw Error(
              'Placeholder attribute and child element were both specified.'
            );
        }
        _processHints() {
          this._validateHints(), this._syncDescribedByIds();
        }
        _validateHints() {
          if (this._hintChildren) {
            let e, t;
            this._hintChildren.forEach(n => {
              if ('start' === n.align) {
                if (e || this.hintLabel) throw sd('start');
                e = n;
              } else if ('end' === n.align) {
                if (t) throw sd('end');
                t = n;
              }
            });
          }
        }
        _syncDescribedByIds() {
          if (this._control) {
            let e = [];
            if ('hint' === this._getDisplayedMessages()) {
              const t = this._hintChildren
                  ? this._hintChildren.find(e => 'start' === e.align)
                  : null,
                n = this._hintChildren
                  ? this._hintChildren.find(e => 'end' === e.align)
                  : null;
              t ? e.push(t.id) : this._hintLabel && e.push(this._hintLabelId),
                n && e.push(n.id);
            } else
              this._errorChildren && (e = this._errorChildren.map(e => e.id));
            this._control.setDescribedByIds(e);
          }
        }
        _validateControlChild() {
          if (!this._control)
            throw Error('mat-form-field must contain a MatFormFieldControl.');
        }
        updateOutlineGap() {
          const e = this._label ? this._label.nativeElement : null;
          if (
            'outline' !== this.appearance ||
            !e ||
            !e.children.length ||
            !e.textContent.trim()
          )
            return;
          if (!this._platform.isBrowser) return;
          if (
            !document.documentElement.contains(this._elementRef.nativeElement)
          )
            return void (this._outlineGapCalculationNeededImmediately = !0);
          let t = 0,
            n = 0;
          const r = this._connectionContainerRef.nativeElement,
            i = r.querySelectorAll('.mat-form-field-outline-start'),
            s = r.querySelectorAll('.mat-form-field-outline-gap');
          if (this._label && this._label.nativeElement.children.length) {
            const i = r.getBoundingClientRect();
            if (0 === i.width && 0 === i.height)
              return (
                (this._outlineGapCalculationNeededOnStable = !0),
                void (this._outlineGapCalculationNeededImmediately = !1)
              );
            const s = this._getStartEnd(i),
              o = this._getStartEnd(e.children[0].getBoundingClientRect());
            let l = 0;
            for (const t of e.children) l += t.offsetWidth;
            (t = o - s - ad), (n = l > 0 ? l * ld + 2 * ad : 0);
          }
          for (let o = 0; o < i.length; o++) i.item(o).style.width = `${t}px`;
          for (let o = 0; o < s.length; o++) s.item(o).style.width = `${n}px`;
          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1;
        }
        _getStartEnd(e) {
          return 'rtl' === this._previousDirection ? e.right : e.left;
        }
      }
      class md {}
      function pd(e, t) {
        return Q(e, t, 1);
      }
      class fd {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  'string' == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split('\n').forEach(e => {
                            const t = e.indexOf(':');
                            if (t > 0) {
                              const n = e.slice(0, t),
                                r = n.toLowerCase(),
                                i = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(i)
                                  : this.headers.set(r, [i]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach(t => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(t, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: 'd' });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof fd
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach(e => this.applyUpdate(e)),
              (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach(t => {
              this.headers.set(t, e.headers.get(t)),
                this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new fd();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof fd
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case 'a':
            case 's':
              let n = e.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const r = ('a' === e.op ? this.headers.get(t) : void 0) || [];
              r.push(...n), this.headers.set(t, r);
              break;
            case 'd':
              const i = e.value;
              if (i) {
                let e = this.headers.get(t);
                if (!e) return;
                0 === (e = e.filter(e => -1 === i.indexOf(e))).length
                  ? (this.headers.delete(t), this.normalizedNames.delete(t))
                  : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(t =>
              e(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class gd {
        encodeKey(e) {
          return _d(e);
        }
        encodeValue(e) {
          return _d(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function _d(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class bd {
        constructor(e = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = e.encoder || new gd()),
            e.fromString)
          ) {
            if (e.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function (e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e.split('&').forEach(e => {
                    const r = e.indexOf('='),
                      [i, s] =
                        -1 == r
                          ? [t.decodeKey(e), '']
                          : [
                              t.decodeKey(e.slice(0, r)),
                              t.decodeValue(e.slice(r + 1))
                            ],
                      o = n.get(i) || [];
                    o.push(s), n.set(i, o);
                  }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach(t => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(e => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map(e => t + '=' + this.encoder.encodeValue(e))
                  .join('&');
              })
              .join('&')
          );
        }
        clone(e) {
          const t = new bd({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat([e])),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach(e => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach(e => {
                switch (e.op) {
                  case 'a':
                  case 's':
                    const t =
                      ('a' === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case 'd':
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1),
                        t.length > 0
                          ? this.map.set(e.param, t)
                          : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function yd(e) {
        return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function vd(e) {
        return 'undefined' != typeof Blob && e instanceof Blob;
      }
      function wd(e) {
        return 'undefined' != typeof FormData && e instanceof FormData;
      }
      class Cd {
        constructor(e, t, n, r) {
          let i;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = e.toUpperCase()),
            (function (e) {
              switch (e) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (i = r))
              : (i = n),
            i &&
              ((this.reportProgress = !!i.reportProgress),
              (this.withCredentials = !!i.withCredentials),
              i.responseType && (this.responseType = i.responseType),
              i.headers && (this.headers = i.headers),
              i.params && (this.params = i.params)),
            this.headers || (this.headers = new fd()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf('?');
              this.urlWithParams =
                t + (-1 === n ? '?' : n < t.length - 1 ? '&' : '') + e;
            }
          } else (this.params = new bd()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : yd(this.body) ||
              vd(this.body) ||
              wd(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof bd
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body
            ? null
            : wd(this.body)
            ? null
            : vd(this.body)
            ? this.body.type || null
            : yd(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof bd
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            r = e.responseType || this.responseType,
            i = void 0 !== e.body ? e.body : this.body,
            s =
              void 0 !== e.withCredentials
                ? e.withCredentials
                : this.withCredentials,
            o =
              void 0 !== e.reportProgress
                ? e.reportProgress
                : this.reportProgress;
          let l = e.headers || this.headers,
            a = e.params || this.params;
          return (
            void 0 !== e.setHeaders &&
              (l = Object.keys(e.setHeaders).reduce(
                (t, n) => t.set(n, e.setHeaders[n]),
                l
              )),
            e.setParams &&
              (a = Object.keys(e.setParams).reduce(
                (t, n) => t.set(n, e.setParams[n]),
                a
              )),
            new Cd(t, n, i, {
              params: a,
              headers: l,
              reportProgress: o,
              responseType: r,
              withCredentials: s
            })
          );
        }
      }
      const xd = (function () {
        var e = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5
        };
        return (
          (e[e.Sent] = 'Sent'),
          (e[e.UploadProgress] = 'UploadProgress'),
          (e[e.ResponseHeader] = 'ResponseHeader'),
          (e[e.DownloadProgress] = 'DownloadProgress'),
          (e[e.Response] = 'Response'),
          (e[e.User] = 'User'),
          e
        );
      })();
      class kd {
        constructor(e, t = 200, n = 'OK') {
          (this.headers = e.headers || new fd()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Ed extends kd {
        constructor(e = {}) {
          super(e),
            (this.type = xd.Response),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new Ed({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0
          });
        }
      }
      function Sd(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials
        };
      }
      class Td {
        constructor(e) {
          this.handler = e;
        }
        request(e, t, n = {}) {
          let r;
          if (e instanceof Cd) r = e;
          else {
            let i = void 0;
            i = n.headers instanceof fd ? n.headers : new fd(n.headers);
            let s = void 0;
            n.params &&
              (s =
                n.params instanceof bd
                  ? n.params
                  : new bd({ fromObject: n.params })),
              (r = new Cd(e, t, void 0 !== n.body ? n.body : null, {
                headers: i,
                params: s,
                reportProgress: n.reportProgress,
                responseType: n.responseType || 'json',
                withCredentials: n.withCredentials
              }));
          }
          const i = Du(r).pipe(pd(e => this.handler.handle(e)));
          if (e instanceof Cd || 'events' === n.observe) return i;
          const s = i.pipe(Zu(e => e instanceof Ed));
          switch (n.observe || 'body') {
            case 'body':
              switch (r.responseType) {
                case 'arraybuffer':
                  return s.pipe(
                    z(e => {
                      if (null !== e.body && !(e.body instanceof ArrayBuffer))
                        throw new Error('Response is not an ArrayBuffer.');
                      return e.body;
                    })
                  );
                case 'blob':
                  return s.pipe(
                    z(e => {
                      if (null !== e.body && !(e.body instanceof Blob))
                        throw new Error('Response is not a Blob.');
                      return e.body;
                    })
                  );
                case 'text':
                  return s.pipe(
                    z(e => {
                      if (null !== e.body && 'string' != typeof e.body)
                        throw new Error('Response is not a string.');
                      return e.body;
                    })
                  );
                case 'json':
                default:
                  return s.pipe(z(e => e.body));
              }
            case 'response':
              return s;
            default:
              throw new Error(
                `Unreachable: unhandled observe type ${n.observe}}`
              );
          }
        }
        delete(e, t = {}) {
          return this.request('DELETE', e, t);
        }
        get(e, t = {}) {
          return this.request('GET', e, t);
        }
        head(e, t = {}) {
          return this.request('HEAD', e, t);
        }
        jsonp(e, t) {
          return this.request('JSONP', e, {
            params: new bd().append(t, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json'
          });
        }
        options(e, t = {}) {
          return this.request('OPTIONS', e, t);
        }
        patch(e, t, n = {}) {
          return this.request('PATCH', e, Sd(n, t));
        }
        post(e, t, n = {}) {
          return this.request('POST', e, Sd(n, t));
        }
        put(e, t, n = {}) {
          return this.request('PUT', e, Sd(n, t));
        }
      }
      function Id(e, t) {
        return new w(
          t
            ? n => t.schedule(Ad, 0, { error: e, subscriber: n })
            : t => t.error(e)
        );
      }
      function Ad({ error: e, subscriber: t }) {
        t.error(e);
      }
      function Od(e) {
        return function (t) {
          const n = new Pd(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class Pd {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new Md(e, this.selector, this.caught));
        }
      }
      class Md extends $ {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new O(this, void 0, void 0);
            this.add(r), j(this, n, void 0, void 0, r);
          }
        }
      }
      function Rd(e) {
        return t => t.lift(new Nd(e));
      }
      class Nd {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new Dd(e, this.callback));
        }
      }
      class Dd extends f {
        constructor(e, t) {
          super(e), this.add(new d(t));
        }
      }
      function Fd(e) {
        return Error(`Unable to find icon with the name "${e}"`);
      }
      function Ld(e) {
        return Error(
          'The URL provided to MatIconRegistry was not trusted as a resource URL ' +
            `via Angular's DomSanitizer. Attempted URL was "${e}".`
        );
      }
      function Vd(e) {
        return Error(
          'The literal provided to MatIconRegistry was not trusted as safe HTML by ' +
            `Angular's DomSanitizer. Attempted literal was "${e}".`
        );
      }
      class Ud {
        constructor(e, t) {
          (this.options = t),
            e.nodeName ? (this.svgElement = e) : (this.url = e);
        }
      }
      let jd = (() => {
        class e {
          constructor(e, t, n, r) {
            (this._httpClient = e),
              (this._sanitizer = t),
              (this._errorHandler = r),
              (this._svgIconConfigs = new Map()),
              (this._iconSetConfigs = new Map()),
              (this._cachedIconsByUrl = new Map()),
              (this._inProgressUrlFetches = new Map()),
              (this._fontCssClassesByAlias = new Map()),
              (this._defaultFontSetClass = 'material-icons'),
              (this._document = n);
          }
          addSvgIcon(e, t, n) {
            return this.addSvgIconInNamespace('', e, t, n);
          }
          addSvgIconLiteral(e, t, n) {
            return this.addSvgIconLiteralInNamespace('', e, t, n);
          }
          addSvgIconInNamespace(e, t, n, r) {
            return this._addSvgIconConfig(e, t, new Ud(n, r));
          }
          addSvgIconLiteralInNamespace(e, t, n, r) {
            const i = this._sanitizer.sanitize(Tt.HTML, n);
            if (!i) throw Vd(n);
            const s = this._createSvgElementForSingleIcon(i, r);
            return this._addSvgIconConfig(e, t, new Ud(s, r));
          }
          addSvgIconSet(e, t) {
            return this.addSvgIconSetInNamespace('', e, t);
          }
          addSvgIconSetLiteral(e, t) {
            return this.addSvgIconSetLiteralInNamespace('', e, t);
          }
          addSvgIconSetInNamespace(e, t, n) {
            return this._addSvgIconSetConfig(e, new Ud(t, n));
          }
          addSvgIconSetLiteralInNamespace(e, t, n) {
            const r = this._sanitizer.sanitize(Tt.HTML, t);
            if (!r) throw Vd(t);
            const i = this._svgElementFromString(r);
            return this._addSvgIconSetConfig(e, new Ud(i, n));
          }
          registerFontClassAlias(e, t = e) {
            return this._fontCssClassesByAlias.set(e, t), this;
          }
          classNameForFontAlias(e) {
            return this._fontCssClassesByAlias.get(e) || e;
          }
          setDefaultFontSetClass(e) {
            return (this._defaultFontSetClass = e), this;
          }
          getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          getSvgIconFromUrl(e) {
            const t = this._sanitizer.sanitize(Tt.RESOURCE_URL, e);
            if (!t) throw Ld(e);
            const n = this._cachedIconsByUrl.get(t);
            return n
              ? Du($d(n))
              : this._loadSvgIconFromConfig(new Ud(e)).pipe(
                  Vu(e => this._cachedIconsByUrl.set(t, e)),
                  z(e => $d(e))
                );
          }
          getNamedSvgIcon(e, t = '') {
            const n = zd(t, e),
              r = this._svgIconConfigs.get(n);
            if (r) return this._getSvgFromConfig(r);
            const i = this._iconSetConfigs.get(t);
            return i ? this._getSvgFromIconSetConfigs(e, i) : Id(Fd(n));
          }
          ngOnDestroy() {
            this._svgIconConfigs.clear(),
              this._iconSetConfigs.clear(),
              this._cachedIconsByUrl.clear();
          }
          _getSvgFromConfig(e) {
            return e.svgElement
              ? Du($d(e.svgElement))
              : this._loadSvgIconFromConfig(e).pipe(
                  Vu(t => (e.svgElement = t)),
                  z(e => $d(e))
                );
          }
          _getSvgFromIconSetConfigs(e, t) {
            const n = this._extractIconWithNameFromAnySet(e, t);
            return n
              ? Du(n)
              : Rc(
                  t
                    .filter(e => !e.svgElement)
                    .map(e =>
                      this._loadSvgIconSetFromConfig(e).pipe(
                        Od(t => {
                          const n = `Loading icon set URL: ${this._sanitizer.sanitize(
                            Tt.RESOURCE_URL,
                            e.url
                          )} failed: ${t.message}`;
                          return (
                            this._errorHandler
                              ? this._errorHandler.handleError(new Error(n))
                              : console.error(n),
                            Du(null)
                          );
                        })
                      )
                    )
                ).pipe(
                  z(() => {
                    const n = this._extractIconWithNameFromAnySet(e, t);
                    if (!n) throw Fd(e);
                    return n;
                  })
                );
          }
          _extractIconWithNameFromAnySet(e, t) {
            for (let n = t.length - 1; n >= 0; n--) {
              const r = t[n];
              if (r.svgElement) {
                const t = this._extractSvgIconFromSet(
                  r.svgElement,
                  e,
                  r.options
                );
                if (t) return t;
              }
            }
            return null;
          }
          _loadSvgIconFromConfig(e) {
            return this._fetchUrl(e.url).pipe(
              z(t => this._createSvgElementForSingleIcon(t, e.options))
            );
          }
          _loadSvgIconSetFromConfig(e) {
            return e.svgElement
              ? Du(e.svgElement)
              : this._fetchUrl(e.url).pipe(
                  z(
                    t => (
                      e.svgElement ||
                        (e.svgElement = this._svgElementFromString(t)),
                      e.svgElement
                    )
                  )
                );
          }
          _createSvgElementForSingleIcon(e, t) {
            const n = this._svgElementFromString(e);
            return this._setSvgAttributes(n, t), n;
          }
          _extractSvgIconFromSet(e, t, n) {
            const r = e.querySelector(`[id="${t}"]`);
            if (!r) return null;
            const i = r.cloneNode(!0);
            if ((i.removeAttribute('id'), 'svg' === i.nodeName.toLowerCase()))
              return this._setSvgAttributes(i, n);
            if ('symbol' === i.nodeName.toLowerCase())
              return this._setSvgAttributes(this._toSvgElement(i), n);
            const s = this._svgElementFromString('<svg></svg>');
            return s.appendChild(i), this._setSvgAttributes(s, n);
          }
          _svgElementFromString(e) {
            const t = this._document.createElement('DIV');
            t.innerHTML = e;
            const n = t.querySelector('svg');
            if (!n) throw Error('<svg> tag not found');
            return n;
          }
          _toSvgElement(e) {
            const t = this._svgElementFromString('<svg></svg>'),
              n = e.attributes;
            for (let r = 0; r < n.length; r++) {
              const { name: e, value: i } = n[r];
              'id' !== e && t.setAttribute(e, i);
            }
            for (let r = 0; r < e.childNodes.length; r++)
              e.childNodes[r].nodeType === this._document.ELEMENT_NODE &&
                t.appendChild(e.childNodes[r].cloneNode(!0));
            return t;
          }
          _setSvgAttributes(e, t) {
            return (
              e.setAttribute('fit', ''),
              e.setAttribute('height', '100%'),
              e.setAttribute('width', '100%'),
              e.setAttribute('preserveAspectRatio', 'xMidYMid meet'),
              e.setAttribute('focusable', 'false'),
              t && t.viewBox && e.setAttribute('viewBox', t.viewBox),
              e
            );
          }
          _fetchUrl(e) {
            if (!this._httpClient)
              throw Error(
                'Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.'
              );
            if (null == e) throw Error(`Cannot fetch icon from URL "${e}".`);
            const t = this._sanitizer.sanitize(Tt.RESOURCE_URL, e);
            if (!t) throw Ld(e);
            const n = this._inProgressUrlFetches.get(t);
            if (n) return n;
            const r = this._httpClient.get(t, { responseType: 'text' }).pipe(
              Rd(() => this._inProgressUrlFetches.delete(t)),
              oe()
            );
            return this._inProgressUrlFetches.set(t, r), r;
          }
          _addSvgIconConfig(e, t, n) {
            return this._svgIconConfigs.set(zd(e, t), n), this;
          }
          _addSvgIconSetConfig(e, t) {
            const n = this._iconSetConfigs.get(e);
            return n ? n.push(t) : this._iconSetConfigs.set(e, [t]), this;
          }
        }
        return (
          (e.ngInjectableDef = fe({
            factory: function () {
              return new e(je(Td, 8), je(cu), je(ta, 8), je(nt, 8));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      function $d(e) {
        return e.cloneNode(!0);
      }
      function zd(e, t) {
        return e + ':' + t;
      }
      class Bd {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const Hd = hc(Bd),
        qd = new Te('mat-icon-location', {
          providedIn: 'root',
          factory: function () {
            const e = $e(ta),
              t = e ? e.location : null;
            return { getPathname: () => (t ? t.pathname + t.search : '') };
          }
        }),
        Gd = [
          'clip-path',
          'color-profile',
          'src',
          'cursor',
          'fill',
          'filter',
          'marker',
          'marker-start',
          'marker-mid',
          'marker-end',
          'mask',
          'stroke'
        ],
        Qd = Gd.map(e => `[${e}]`).join(', '),
        Wd = /^url\(['"]?#(.*?)['"]?\)$/;
      class Kd extends Hd {
        constructor(e, t, n, r, i) {
          super(e),
            (this._iconRegistry = t),
            (this._location = r),
            (this._errorHandler = i),
            (this._inline = !1),
            n || e.nativeElement.setAttribute('aria-hidden', 'true');
        }
        get inline() {
          return this._inline;
        }
        set inline(e) {
          this._inline = Cu(e);
        }
        get fontSet() {
          return this._fontSet;
        }
        set fontSet(e) {
          this._fontSet = this._cleanupFontValue(e);
        }
        get fontIcon() {
          return this._fontIcon;
        }
        set fontIcon(e) {
          this._fontIcon = this._cleanupFontValue(e);
        }
        _splitIconName(e) {
          if (!e) return ['', ''];
          const t = e.split(':');
          switch (t.length) {
            case 1:
              return ['', t[0]];
            case 2:
              return t;
            default:
              throw Error(`Invalid icon name: "${e}"`);
          }
        }
        ngOnChanges(e) {
          const t = e.svgIcon;
          if (t)
            if (this.svgIcon) {
              const [e, t] = this._splitIconName(this.svgIcon);
              this._iconRegistry
                .getNamedSvgIcon(t, e)
                .pipe(tc(1))
                .subscribe(
                  e => this._setSvgElement(e),
                  n => {
                    const r = `Error retrieving icon ${e}:${t}! ${n.message}`;
                    this._errorHandler
                      ? this._errorHandler.handleError(new Error(r))
                      : console.error(r);
                  }
                );
            } else t.previousValue && this._clearSvgElement();
          this._usingFontIcon() && this._updateFontIconClasses();
        }
        ngOnInit() {
          this._usingFontIcon() && this._updateFontIconClasses();
        }
        ngAfterViewChecked() {
          const e = this._elementsWithExternalReferences;
          if (e && this._location && e.size) {
            const e = this._location.getPathname();
            e !== this._previousPath &&
              ((this._previousPath = e), this._prependPathToReferences(e));
          }
        }
        ngOnDestroy() {
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
        }
        _usingFontIcon() {
          return !this.svgIcon;
        }
        _setSvgElement(e) {
          this._clearSvgElement();
          const t = e.querySelectorAll('style');
          for (let n = 0; n < t.length; n++) t[n].textContent += ' ';
          if (this._location) {
            const t = this._location.getPathname();
            (this._previousPath = t),
              this._cacheChildrenWithExternalReferences(e),
              this._prependPathToReferences(t);
          }
          this._elementRef.nativeElement.appendChild(e);
        }
        _clearSvgElement() {
          const e = this._elementRef.nativeElement;
          let t = e.childNodes.length;
          for (
            this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
            t--;

          ) {
            const n = e.childNodes[t];
            (1 === n.nodeType && 'svg' !== n.nodeName.toLowerCase()) ||
              e.removeChild(n);
          }
        }
        _updateFontIconClasses() {
          if (!this._usingFontIcon()) return;
          const e = this._elementRef.nativeElement,
            t = this.fontSet
              ? this._iconRegistry.classNameForFontAlias(this.fontSet)
              : this._iconRegistry.getDefaultFontSetClass();
          t != this._previousFontSetClass &&
            (this._previousFontSetClass &&
              e.classList.remove(this._previousFontSetClass),
            t && e.classList.add(t),
            (this._previousFontSetClass = t)),
            this.fontIcon != this._previousFontIconClass &&
              (this._previousFontIconClass &&
                e.classList.remove(this._previousFontIconClass),
              this.fontIcon && e.classList.add(this.fontIcon),
              (this._previousFontIconClass = this.fontIcon));
        }
        _cleanupFontValue(e) {
          return 'string' == typeof e ? e.trim().split(' ')[0] : e;
        }
        _prependPathToReferences(e) {
          const t = this._elementsWithExternalReferences;
          t &&
            t.forEach((t, n) => {
              t.forEach(t => {
                n.setAttribute(t.name, `url('${e}#${t.value}')`);
              });
            });
        }
        _cacheChildrenWithExternalReferences(e) {
          const t = e.querySelectorAll(Qd),
            n = (this._elementsWithExternalReferences =
              this._elementsWithExternalReferences || new Map());
          for (let r = 0; r < t.length; r++)
            Gd.forEach(e => {
              const i = t[r],
                s = i.getAttribute(e),
                o = s ? s.match(Wd) : null;
              if (o) {
                let t = n.get(i);
                t || n.set(i, (t = [])), t.push({ name: e, value: o[1] });
              }
            });
        }
      }
      class Zd {}
      const Yd = Pu({ passive: !0 });
      let Xd = (() => {
        class e {
          constructor(e, t) {
            (this._platform = e),
              (this._ngZone = t),
              (this._monitoredElements = new Map());
          }
          monitor(e) {
            if (!this._platform.isBrowser) return Ru;
            const t = xu(e),
              n = this._monitoredElements.get(t);
            if (n) return n.subject.asObservable();
            const r = new T(),
              i = 'cdk-text-field-autofilled',
              s = e => {
                'cdk-text-field-autofill-start' !== e.animationName ||
                t.classList.contains(i)
                  ? 'cdk-text-field-autofill-end' === e.animationName &&
                    t.classList.contains(i) &&
                    (t.classList.remove(i),
                    this._ngZone.run(() =>
                      r.next({ target: e.target, isAutofilled: !1 })
                    ))
                  : (t.classList.add(i),
                    this._ngZone.run(() =>
                      r.next({ target: e.target, isAutofilled: !0 })
                    ));
              };
            return (
              this._ngZone.runOutsideAngular(() => {
                t.addEventListener('animationstart', s, Yd),
                  t.classList.add('cdk-text-field-autofill-monitored');
              }),
              this._monitoredElements.set(t, {
                subject: r,
                unlisten: () => {
                  t.removeEventListener('animationstart', s, Yd);
                }
              }),
              r.asObservable()
            );
          }
          stopMonitoring(e) {
            const t = xu(e),
              n = this._monitoredElements.get(t);
            n &&
              (n.unlisten(),
              n.subject.complete(),
              t.classList.remove('cdk-text-field-autofill-monitored'),
              t.classList.remove('cdk-text-field-autofilled'),
              this._monitoredElements.delete(t));
          }
          ngOnDestroy() {
            this._monitoredElements.forEach((e, t) => this.stopMonitoring(t));
          }
        }
        return (
          (e.ngInjectableDef = fe({
            factory: function () {
              return new e(je(Su), je(ms));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      class Jd {}
      const em = [
        'button',
        'checkbox',
        'file',
        'hidden',
        'image',
        'radio',
        'range',
        'reset',
        'submit'
      ];
      let tm = 0;
      class nm {
        constructor(e, t, n, r) {
          (this._defaultErrorStateMatcher = e),
            (this._parentForm = t),
            (this._parentFormGroup = n),
            (this.ngControl = r);
        }
      }
      const rm = pc(nm);
      class im extends rm {
        constructor(e, t, n, r, i, s, o, l, a) {
          super(s, r, i, n),
            (this._elementRef = e),
            (this._platform = t),
            (this.ngControl = n),
            (this._autofillMonitor = l),
            (this._uid = `mat-input-${tm++}`),
            (this._isServer = !1),
            (this._isNativeSelect = !1),
            (this.focused = !1),
            (this.stateChanges = new T()),
            (this.controlType = 'mat-input'),
            (this.autofilled = !1),
            (this._disabled = !1),
            (this._required = !1),
            (this._type = 'text'),
            (this._readonly = !1),
            (this._neverEmptyInputTypes = [
              'date',
              'datetime',
              'datetime-local',
              'month',
              'time',
              'week'
            ].filter(e => Au().has(e)));
          const u = this._elementRef.nativeElement;
          (this._inputValueAccessor = o || u),
            (this._previousNativeValue = this.value),
            (this.id = this.id),
            t.IOS &&
              a.runOutsideAngular(() => {
                e.nativeElement.addEventListener('keyup', e => {
                  let t = e.target;
                  t.value ||
                    t.selectionStart ||
                    t.selectionEnd ||
                    (t.setSelectionRange(1, 1), t.setSelectionRange(0, 0));
                });
              }),
            (this._isServer = !this._platform.isBrowser),
            (this._isNativeSelect = 'select' === u.nodeName.toLowerCase()),
            this._isNativeSelect &&
              (this.controlType = u.multiple
                ? 'mat-native-select-multiple'
                : 'mat-native-select');
        }
        get disabled() {
          return this.ngControl && null !== this.ngControl.disabled
            ? this.ngControl.disabled
            : this._disabled;
        }
        set disabled(e) {
          (this._disabled = Cu(e)),
            this.focused && ((this.focused = !1), this.stateChanges.next());
        }
        get id() {
          return this._id;
        }
        set id(e) {
          this._id = e || this._uid;
        }
        get required() {
          return this._required;
        }
        set required(e) {
          this._required = Cu(e);
        }
        get type() {
          return this._type;
        }
        set type(e) {
          (this._type = e || 'text'),
            this._validateType(),
            !this._isTextarea() &&
              Au().has(this._type) &&
              (this._elementRef.nativeElement.type = this._type);
        }
        get value() {
          return this._inputValueAccessor.value;
        }
        set value(e) {
          e !== this.value &&
            ((this._inputValueAccessor.value = e), this.stateChanges.next());
        }
        get readonly() {
          return this._readonly;
        }
        set readonly(e) {
          this._readonly = Cu(e);
        }
        ngOnInit() {
          this._platform.isBrowser &&
            this._autofillMonitor
              .monitor(this._elementRef.nativeElement)
              .subscribe(e => {
                (this.autofilled = e.isAutofilled), this.stateChanges.next();
              });
        }
        ngOnChanges() {
          this.stateChanges.next();
        }
        ngOnDestroy() {
          this.stateChanges.complete(),
            this._platform.isBrowser &&
              this._autofillMonitor.stopMonitoring(
                this._elementRef.nativeElement
              );
        }
        ngDoCheck() {
          this.ngControl && this.updateErrorState(),
            this._dirtyCheckNativeValue();
        }
        focus(e) {
          this._elementRef.nativeElement.focus(e);
        }
        _focusChanged(e) {
          e === this.focused ||
            (this.readonly && e) ||
            ((this.focused = e), this.stateChanges.next());
        }
        _onInput() {}
        _dirtyCheckNativeValue() {
          const e = this._elementRef.nativeElement.value;
          this._previousNativeValue !== e &&
            ((this._previousNativeValue = e), this.stateChanges.next());
        }
        _validateType() {
          if (em.indexOf(this._type) > -1)
            throw Error(
              `Input type "${this._type}" isn't supported by matInput.`
            );
        }
        _isNeverEmpty() {
          return this._neverEmptyInputTypes.indexOf(this._type) > -1;
        }
        _isBadInput() {
          let e = this._elementRef.nativeElement.validity;
          return e && e.badInput;
        }
        _isTextarea() {
          return (
            'textarea' === this._elementRef.nativeElement.nodeName.toLowerCase()
          );
        }
        get empty() {
          return !(
            this._isNeverEmpty() ||
            this._elementRef.nativeElement.value ||
            this._isBadInput() ||
            this.autofilled
          );
        }
        get shouldLabelFloat() {
          if (this._isNativeSelect) {
            const e = this._elementRef.nativeElement,
              t = e.options[0];
            return (
              this.focused ||
              e.multiple ||
              !this.empty ||
              !!(e.selectedIndex > -1 && t && t.label)
            );
          }
          return this.focused || !this.empty;
        }
        setDescribedByIds(e) {
          this._ariaDescribedby = e.join(' ');
        }
        onContainerClick() {
          this.focused || this.focus();
        }
      }
      class sm {}
      class om {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const lm = hc(om);
      class am extends lm {
        constructor(e, t, n) {
          super(e), (this._platform = t), (this._document = n);
        }
        ngAfterViewInit() {
          st() &&
            this._platform.isBrowser &&
            (this._checkToolbarMixedModes(),
            this._toolbarRows.changes.subscribe(() =>
              this._checkToolbarMixedModes()
            ));
        }
        _checkToolbarMixedModes() {
          this._toolbarRows.length &&
            Array.from(this._elementRef.nativeElement.childNodes)
              .filter(
                e => !(e.classList && e.classList.contains('mat-toolbar-row'))
              )
              .filter(
                e =>
                  e.nodeType !==
                  (this._document ? this._document.COMMENT_NODE : 8)
              )
              .some(e => !(!e.textContent || !e.textContent.trim())) &&
            (function () {
              throw Error(
                'MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.'
              );
            })();
        }
      }
      class um {}
      const cm = new Te('mat-radio-default-options', {
        providedIn: 'root',
        factory: function () {
          return { color: 'accent' };
        }
      });
      let hm = 0;
      class dm {
        constructor(e, t) {
          (this.source = e), (this.value = t);
        }
      }
      class mm {
        constructor(e) {
          (this._changeDetector = e),
            (this._value = null),
            (this._name = `mat-radio-group-${hm++}`),
            (this._selected = null),
            (this._isInitialized = !1),
            (this._labelPosition = 'after'),
            (this._disabled = !1),
            (this._required = !1),
            (this._controlValueAccessorChangeFn = () => {}),
            (this.onTouched = () => {}),
            (this.change = new Li());
        }
        get name() {
          return this._name;
        }
        set name(e) {
          (this._name = e), this._updateRadioButtonNames();
        }
        get labelPosition() {
          return this._labelPosition;
        }
        set labelPosition(e) {
          (this._labelPosition = 'before' === e ? 'before' : 'after'),
            this._markRadiosForCheck();
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this._value !== e &&
            ((this._value = e),
            this._updateSelectedRadioFromValue(),
            this._checkSelectedRadioButton());
        }
        _checkSelectedRadioButton() {
          this._selected &&
            !this._selected.checked &&
            (this._selected.checked = !0);
        }
        get selected() {
          return this._selected;
        }
        set selected(e) {
          (this._selected = e),
            (this.value = e ? e.value : null),
            this._checkSelectedRadioButton();
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          (this._disabled = Cu(e)), this._markRadiosForCheck();
        }
        get required() {
          return this._required;
        }
        set required(e) {
          (this._required = Cu(e)), this._markRadiosForCheck();
        }
        ngAfterContentInit() {
          this._isInitialized = !0;
        }
        _touch() {
          this.onTouched && this.onTouched();
        }
        _updateRadioButtonNames() {
          this._radios &&
            this._radios.forEach(e => {
              (e.name = this.name), e._markForCheck();
            });
        }
        _updateSelectedRadioFromValue() {
          this._radios &&
            (null === this._selected || this._selected.value !== this._value) &&
            ((this._selected = null),
            this._radios.forEach(e => {
              (e.checked = this.value === e.value),
                e.checked && (this._selected = e);
            }));
        }
        _emitChangeEvent() {
          this._isInitialized &&
            this.change.emit(new dm(this._selected, this._value));
        }
        _markRadiosForCheck() {
          this._radios && this._radios.forEach(e => e._markForCheck());
        }
        writeValue(e) {
          (this.value = e), this._changeDetector.markForCheck();
        }
        registerOnChange(e) {
          this._controlValueAccessorChangeFn = e;
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          (this.disabled = e), this._changeDetector.markForCheck();
        }
      }
      class pm {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const fm = dc(mc(pm));
      class gm extends fm {
        constructor(e, t, n, r, i, s, o) {
          super(t),
            (this._changeDetector = n),
            (this._focusMonitor = r),
            (this._radioDispatcher = i),
            (this._animationMode = s),
            (this._providerOverride = o),
            (this._uniqueId = `mat-radio-${++hm}`),
            (this.id = this._uniqueId),
            (this.change = new Li()),
            (this._checked = !1),
            (this._value = null),
            (this._removeUniqueSelectionListener = () => {}),
            (this.radioGroup = e),
            (this._removeUniqueSelectionListener = i.listen((e, t) => {
              e !== this.id && t === this.name && (this.checked = !1);
            }));
        }
        get checked() {
          return this._checked;
        }
        set checked(e) {
          const t = Cu(e);
          this._checked !== t &&
            ((this._checked = t),
            t && this.radioGroup && this.radioGroup.value !== this.value
              ? (this.radioGroup.selected = this)
              : !t &&
                this.radioGroup &&
                this.radioGroup.value === this.value &&
                (this.radioGroup.selected = null),
            t && this._radioDispatcher.notify(this.id, this.name),
            this._changeDetector.markForCheck());
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this._value !== e &&
            ((this._value = e),
            null !== this.radioGroup &&
              (this.checked || (this.checked = this.radioGroup.value === e),
              this.checked && (this.radioGroup.selected = this)));
        }
        get labelPosition() {
          return (
            this._labelPosition ||
            (this.radioGroup && this.radioGroup.labelPosition) ||
            'after'
          );
        }
        set labelPosition(e) {
          this._labelPosition = e;
        }
        get disabled() {
          return (
            this._disabled ||
            (null !== this.radioGroup && this.radioGroup.disabled)
          );
        }
        set disabled(e) {
          const t = Cu(e);
          this._disabled !== t &&
            ((this._disabled = t), this._changeDetector.markForCheck());
        }
        get required() {
          return (
            this._required || (this.radioGroup && this.radioGroup.required)
          );
        }
        set required(e) {
          this._required = Cu(e);
        }
        get color() {
          return (
            this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            (this._providerOverride && this._providerOverride.color) ||
            'accent'
          );
        }
        set color(e) {
          this._color = e;
        }
        get inputId() {
          return `${this.id || this._uniqueId}-input`;
        }
        focus(e) {
          this._focusMonitor.focusVia(this._inputElement, 'keyboard', e);
        }
        _markForCheck() {
          this._changeDetector.markForCheck();
        }
        ngOnInit() {
          this.radioGroup &&
            ((this.checked = this.radioGroup.value === this._value),
            (this.name = this.radioGroup.name));
        }
        ngAfterViewInit() {
          this._focusMonitor.monitor(this._elementRef, !0).subscribe(e => {
            !e && this.radioGroup && this.radioGroup._touch();
          });
        }
        ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef),
            this._removeUniqueSelectionListener();
        }
        _emitChangeEvent() {
          this.change.emit(new dm(this, this._value));
        }
        _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        _onInputClick(e) {
          e.stopPropagation();
        }
        _onInputChange(e) {
          e.stopPropagation();
          const t = this.radioGroup && this.value !== this.radioGroup.value;
          (this.checked = !0),
            this._emitChangeEvent(),
            this.radioGroup &&
              (this.radioGroup._controlValueAccessorChangeFn(this.value),
              t && this.radioGroup._emitChangeEvent());
        }
      }
      class _m {}
      function bm(e) {
        return new w(t => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? G(n) : Nu()).subscribe(t);
        });
      }
      function ym(e, t) {
        return 'function' == typeof t
          ? n =>
              n.pipe(ym((n, r) => G(e(n, r)).pipe(z((e, i) => t(n, e, r, i)))))
          : t => t.lift(new vm(e));
      }
      class vm {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new wm(e, this.project));
        }
      }
      class wm extends $ {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const i = new O(this, void 0, void 0);
          this.destination.add(i),
            (this.innerSubscription = j(this, e, t, n, i));
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(e, t, n, r, i) {
          this.destination.next(t);
        }
      }
      let Cm = (() => {
        class e {
          constructor(e, t, n) {
            (this.kind = e),
              (this.value = t),
              (this.error = n),
              (this.hasValue = 'N' === e);
          }
          observe(e) {
            switch (this.kind) {
              case 'N':
                return e.next && e.next(this.value);
              case 'E':
                return e.error && e.error(this.error);
              case 'C':
                return e.complete && e.complete();
            }
          }
          do(e, t, n) {
            switch (this.kind) {
              case 'N':
                return e && e(this.value);
              case 'E':
                return t && t(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(e, t, n) {
            return e && 'function' == typeof e.next
              ? this.observe(e)
              : this.do(e, t, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return Du(this.value);
              case 'E':
                return Id(this.error);
              case 'C':
                return Nu();
            }
            throw new Error('unexpected notification kind value');
          }
          static createNext(t) {
            return void 0 !== t ? new e('N', t) : e.undefinedValueNotification;
          }
          static createError(t) {
            return new e('E', void 0, t);
          }
          static createComplete() {
            return e.completeNotification;
          }
        }
        return (
          (e.completeNotification = new e('C')),
          (e.undefinedValueNotification = new e('N', void 0)),
          e
        );
      })();
      class xm {
        constructor(e, t) {
          (this.delay = e), (this.scheduler = t);
        }
        call(e, t) {
          return t.subscribe(new km(e, this.delay, this.scheduler));
        }
      }
      class km extends f {
        constructor(e, t, n) {
          super(e),
            (this.delay = t),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(e) {
          const t = e.source,
            n = t.queue,
            r = e.scheduler,
            i = e.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; )
            n.shift().notification.observe(i);
          if (n.length > 0) {
            const t = Math.max(0, n[0].time - r.now());
            this.schedule(e, t);
          } else this.unsubscribe(), (t.active = !1);
        }
        _schedule(e) {
          (this.active = !0),
            this.destination.add(
              e.schedule(km.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: e
              })
            );
        }
        scheduleNotification(e) {
          if (!0 === this.errored) return;
          const t = this.scheduler,
            n = new Em(t.now() + this.delay, e);
          this.queue.push(n), !1 === this.active && this._schedule(t);
        }
        _next(e) {
          this.scheduleNotification(Cm.createNext(e));
        }
        _error(e) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(e),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(Cm.createComplete()), this.unsubscribe();
        }
      }
      class Em {
        constructor(e, t) {
          (this.time = e), (this.notification = t);
        }
      }
      const Sm = {
          galleryLabel: 'Image Gallery',
          viewerLabel: 'Displayed gallery image',
          thumbnailsLabel: 'Gallery thumbnails'
        },
        Tm = 'undefined' != typeof window,
        Im = {
          scrollBehavior: Tm && 'scrollBehavior' in document.body.style,
          nativeMediaLoading: Tm && 'loading' in Image.prototype,
          intersectionObserver: Tm && 'IntersectionObserver' in window
        },
        Am = {
          ios: Tm && !!window.navigator.userAgent.match(/iP(ad|hone|od)/)
        };
      class Om {
        constructor(e, t, n) {
          (this.hostRef = e),
            (this.cd = t),
            (this.zone = n),
            (this.imageClick = new Li()),
            (this.descriptionClick = new Li()),
            (this.selection = new Li()),
            (this.destroy$ = new T()),
            (this.interacted = !1),
            (this.listX = 0),
            (this.onInteraction = () => (this.interacted = !0)),
            (this.onResize = () => {
              setTimeout(() => {
                (this.noAnimation = !0),
                  this.items && this.items.length
                    ? ((this.itemWidth = this.getItemWidth()), this.center())
                    : this.shift(0),
                  setTimeout(() => (this.noAnimation = !1));
              });
            }),
            (this.shiftByDelta = e => {
              this.shift(this.selectedIndex * this.itemWidth + e);
            });
        }
        set noAnimation(e) {
          this.itemListRef.nativeElement.style.transitionDuration = e
            ? '0ms'
            : '';
        }
        get lazyLoading() {
          return 'lazy' === this.loading;
        }
        get showArrow() {
          return this.arrows && this.items && this.items.length > 1;
        }
        get showPrevArrow() {
          return this.showArrow && (this.selectedIndex > 0 || this.loop);
        }
        get showNextArrow() {
          return (
            this.showArrow &&
            (this.selectedIndex < this.items.length - 1 || this.loop)
          );
        }
        ngOnChanges({ thumbsOrientation: e, items: t }) {
          if (
            (e &&
              !e.firstChange &&
              (e.currentValue & e.previousValue ||
                requestAnimationFrame(() => {
                  (this.itemWidth = this.getItemWidth()), this.center();
                })),
            t && t.currentValue && t.currentValue.length)
          ) {
            setTimeout(() => this.onResize());
            const e = t.currentValue[this.selectedIndex];
            e && (e._seen = !0);
          }
        }
        ngOnInit() {
          void 0 === this.imageCounter && (this.imageCounter = !0),
            null == this.imageCounterOrientation &&
              (this.imageCounterOrientation = 'top'),
            null == this.objectFit && (this.objectFit = 'contain');
          const e = { passive: !Am.ios };
          Tm &&
            ed(window, 'resize', e)
              .pipe(td(this.destroy$))
              .subscribe(this.onResize),
            Tm &&
              this.mouseGestures &&
              this.zone.runOutsideAngular(() => {
                const t = this.itemListRef.nativeElement;
                let n,
                  r = 0,
                  i = 0;
                const s = t => {
                    (n = t),
                      (this.noAnimation = !0),
                      document.addEventListener('mousemove', o, e),
                      document.addEventListener('mouseup', l, e);
                  },
                  o = e => {
                    (r = Math.max(Math.abs(n.x - e.x))),
                      (i = Math.max(Math.abs(n.y - e.y))),
                      this.shiftByDelta(n.x - e.x);
                  },
                  l = e => {
                    (this.noAnimation = !1),
                      this.selectBySwipeStats(
                        e.timeStamp - n.timeStamp,
                        n.x - e.x
                      ),
                      document.removeEventListener('mousemove', o),
                      document.removeEventListener('mouseup', l);
                  },
                  a = e => {
                    (r > 10 || i > 10) && e.stopPropagation(), (i = r = 0);
                  };
                t.addEventListener('mousedown', s, e),
                  t.addEventListener('click', a, { capture: !0 }),
                  this.destroy$.subscribe(() => {
                    t.removeEventListener('mousedown', s),
                      t.removeEventListener('click', a);
                  });
              }),
            Tm &&
              this.touchGestures &&
              this.zone.runOutsideAngular(() => {
                const t = this.itemListRef.nativeElement;
                let n,
                  r,
                  i = null;
                const s = e => {
                    (n = e), (this.noAnimation = !0);
                  },
                  o = e => {
                    if (!n || 1 !== e.touches.length) return;
                    const t = n.touches[0],
                      s = e.touches[0];
                    if (null == i) {
                      const e = Math.abs(s.clientX - t.clientX),
                        n = Math.abs(s.clientY - t.clientY);
                      (e || n) && (i = 1.2 * e >= n);
                    }
                    i &&
                      ((r = e),
                      this.shiftByDelta(t.clientX - s.clientX),
                      Am.ios && (e.preventDefault(), e.stopPropagation()));
                  },
                  l = () => {
                    (this.noAnimation = !1),
                      r &&
                        this.selectBySwipeStats(
                          r.timeStamp - n.timeStamp,
                          n.touches[0].clientX - r.touches[0].clientX
                        ),
                      (i = null),
                      (n = null),
                      (r = null);
                  };
                t.addEventListener('touchstart', s, e),
                  document.addEventListener('touchmove', o, e),
                  document.addEventListener('touchend', l),
                  this.destroy$.subscribe(() => {
                    t.removeEventListener('touchstart', s),
                      document.removeEventListener('touchmove', o),
                      document.removeEventListener('touchend', l);
                  });
              });
        }
        ngOnDestroy() {
          this.destroy$.next(null), this.destroy$.complete();
        }
        getSrc(e) {
          const t = this.items.indexOf(e),
            n = this.isInScrollportProximity(t);
          return !this.lazyLoading || e._seen || n ? e.src : '';
        }
        isInScrollportProximity(e) {
          const t = Math.abs(this.selectedIndex - e);
          return this.interacted
            ? (t === this.items.length - 1 && this.loop) || t <= 1
            : this.selectedIndex === e;
        }
        isYoutube(e) {
          return !!e.src.match(/youtube.*\/embed\//);
        }
        prev() {
          this.select(this.selectedIndex - 1);
        }
        next() {
          this.select(this.selectedIndex + 1);
        }
        select(e) {
          if (this.selectedIndex !== e)
            if (this.loop || !(e < 0 || e >= this.items.length)) {
              if (
                (e < 0
                  ? (e = this.items.length - 1)
                  : e >= this.items.length && (e = 0),
                this.items[this.selectedIndex].video)
              ) {
                const e = this.itemsRef
                  .toArray()
                  [this.selectedIndex].nativeElement.querySelector('video');
                e && e.pause();
              }
              (this.items[e]._seen = !0),
                (this.selectedIndex = e),
                this.selection.emit(e),
                this.center();
            } else this.center();
          else this.center();
        }
        onDragstart(e) {
          this.mouseGestures && e.preventDefault();
        }
        onImageClick(e, t) {
          this.imageClick.emit({
            event: t,
            item: e,
            index: this.items.indexOf(e)
          });
        }
        onTab(e) {
          e >= 0 &&
            e < this.items.length &&
            (this.select(e),
            requestAnimationFrame(
              () => (this.hostRef.nativeElement.scrollLeft = 0)
            ));
        }
        onItemLoaded(e, t) {
          t.target.getAttribute('src') &&
            ((e._loaded = !0), this.cd.detectChanges());
        }
        onItemErrored(e, t) {
          t.target.getAttribute('src') &&
            ((e._failed = !0), this.cd.detectChanges());
        }
        center() {
          this.shift(this.selectedIndex * this.itemWidth);
        }
        getItemWidth() {
          return this.hostRef.nativeElement.querySelector('li').offsetWidth;
        }
        selectBySwipeStats(e, t) {
          Math.abs(e / t) < 4 && Math.abs(t) > 20
            ? this.select(this.selectedIndex + Math.sign(t))
            : this.select(Math.round(this.listX / this.itemWidth)),
            this.cd.detectChanges();
        }
        shift(e) {
          this.itemListRef.nativeElement.style.transform = `translate3d(${-(this.listX = e)}px, 0, 0)`;
        }
      }
      class Pm extends zu {
        constructor(e, t) {
          super(e, t), (this.scheduler = e), (this.work = t);
        }
        requestAsyncId(e, t, n = 0) {
          return null !== n && n > 0
            ? super.requestAsyncId(e, t, n)
            : (e.actions.push(this),
              e.scheduled ||
                (e.scheduled = requestAnimationFrame(() => e.flush(null))));
        }
        recycleAsyncId(e, t, n = 0) {
          if ((null !== n && n > 0) || (null === n && this.delay > 0))
            return super.recycleAsyncId(e, t, n);
          0 === e.actions.length &&
            (cancelAnimationFrame(t), (e.scheduled = void 0));
        }
      }
      class Mm extends Hu {
        flush(e) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: t } = this;
          let n,
            r = -1,
            i = t.length;
          e = e || t.shift();
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while (++r < i && (e = t.shift()));
          if (((this.active = !1), n)) {
            for (; ++r < i && (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const Rm = new Mm(Pm);
      class Nm {
        constructor(e, t) {
          (this.count = e), (this.source = t);
        }
        call(e, t) {
          return t.subscribe(new Dm(e, this.count, this.source));
        }
      }
      class Dm extends f {
        constructor(e, t, n) {
          super(e), (this.count = t), (this.source = n);
        }
        complete() {
          if (!this.isStopped) {
            const { source: e, count: t } = this;
            if (0 === t) return super.complete();
            t > -1 && (this.count = t - 1),
              e.subscribe(this._unsubscribeAndRecycle());
          }
        }
      }
      class Fm {
        constructor(e, t) {
          (this.predicate = e), (this.inclusive = t);
        }
        call(e, t) {
          return t.subscribe(new Lm(e, this.predicate, this.inclusive));
        }
      }
      class Lm extends f {
        constructor(e, t, n) {
          super(e),
            (this.predicate = t),
            (this.inclusive = n),
            (this.index = 0);
        }
        _next(e) {
          const t = this.destination;
          let n;
          try {
            n = this.predicate(e, this.index++);
          } catch (r) {
            return void t.error(r);
          }
          this.nextOrComplete(e, n);
        }
        nextOrComplete(e, t) {
          const n = this.destination;
          Boolean(t) ? n.next(e) : (this.inclusive && n.next(e), n.complete());
        }
      }
      class Vm {
        constructor(e, t) {
          (this.cd = e),
            (this.elRef = t),
            (this.items = []),
            (this.thumbClick = new Li()),
            (this.thumbHover = new Li()),
            (this.showStartArrow = !1),
            (this.showEndArrow = !1),
            (this.destroy$ = new T()),
            (this.sliding$ = new T()),
            (this.smoothScrollAllowed = !1),
            (this.updateArrows = () => {
              setTimeout(() => {
                (this.showStartArrow =
                  this.thumbListRef.nativeElement[this.scrollKey] > 0),
                  (this.showEndArrow =
                    this.thumbListRef.nativeElement[this.scrollKey] <
                    this.thumbListMainAxis - this.thumbContainerMainAxis),
                  this.cd.detectChanges();
              });
            });
        }
        set scrollBehavior(e) {
          this._scrollBehavior = e || 'smooth';
        }
        get scrollBehavior() {
          return this.smoothScrollAllowed ? this._scrollBehavior : 'auto';
        }
        get scrollKey() {
          return this.vertical ? 'scrollTop' : 'scrollLeft';
        }
        get thumbContainerMainAxis() {
          return this.vertical
            ? this.elRef.nativeElement.offsetHeight
            : this.elRef.nativeElement.offsetWidth;
        }
        get thumbListMainAxis() {
          return this.vertical
            ? this.thumbListRef.nativeElement.scrollHeight
            : this.thumbListRef.nativeElement.scrollWidth;
        }
        ngOnChanges({ arrows: e, items: t, orientation: n }) {
          if (n && null != n.currentValue) {
            const e = n.currentValue;
            this.vertical = 'left' === e || 'right' === e;
          }
          if (
            (e &&
              !e.firstChange &&
              (e.currentValue
                ? this.initArrowUpdates()
                : ((this.showStartArrow = !1),
                  (this.showEndArrow = !1),
                  this.arrowUpdatesSub.unsubscribe())),
            t && t.currentValue)
          ) {
            const e = t.previousValue || [];
            if ((t.currentValue || []).length === e.length) return;
            !this.arrowUpdatesSub && this.arrows
              ? this.initArrowUpdates()
              : this.arrows && this.updateArrows(),
              e.length ||
                setTimeout(() => this.centerThumbIfNeeded(this.selectedIndex));
          }
        }
        ngOnInit() {
          void 0 === this.autoScroll && (this.autoScroll = !0),
            null == this.scrollBehavior && (this.scrollBehavior = 'smooth'),
            this.arrows && Tm && this.initImperativeScroll();
        }
        ngAfterViewInit() {
          this.centerThumbIfNeeded(this.selectedIndex),
            (this.smoothScrollAllowed = !0);
        }
        ngOnDestroy() {
          this.destroy$.next(null), this.destroy$.complete();
        }
        slide(e) {
          let t;
          (t = this.arrowSlideByLength
            ? this.arrowSlideByLength
            : Math.min(
                this.thumbContainerMainAxis,
                this.thumbListMainAxis - this.thumbContainerMainAxis
              )),
            this.sliding$.next(t * e);
        }
        centerThumbIfNeeded(e) {
          if (!this.items || this.items.length <= 1) return;
          const t = this.thumbListRef.nativeElement
              .querySelectorAll('li')
              .item(e),
            {
              offsetLeft: n,
              offsetTop: r,
              offsetWidth: i,
              offsetHeight: s
            } = t,
            o = this.vertical ? r : n,
            l = this.vertical ? s : i,
            a = this.thumbContainerMainAxis,
            u = this.thumbListRef.nativeElement[this.scrollKey];
          (u + a < o + l || u > o) && this.sliding$.next(o + l / 2 - a / 2 - u);
        }
        select(e) {
          this.autoScroll && this.centerThumbIfNeeded(e);
        }
        onItemErrored(e) {
          e._thumbFailed = !0;
        }
        emitEvent(e, t, n) {
          n.emit({ index: e, event: t });
        }
        initArrowUpdates() {
          Tm &&
            (this.arrowUpdatesSub = X(
              ed(this.thumbListRef.nativeElement, 'scroll', { passive: !0 }),
              ed(window, 'resize')
            )
              .pipe(Gu(50), td(this.destroy$))
              .subscribe(this.updateArrows)),
            this.updateArrows();
        }
        initImperativeScroll() {
          this.sliding$
            .pipe(
              ym(e => {
                if (Im.scrollBehavior || 'auto' === this.scrollBehavior)
                  return Du(e);
                const t = e < 0;
                e = Math.abs(e);
                const n = Date.now();
                let r = 200 * (Math.log10(e) - 1.1);
                r < 0 && (r = 200);
                let i = 0;
                return Du(0, Rm).pipe(
                  (function (e = -1) {
                    return t =>
                      0 === e ? Nu() : t.lift(new Nm(e < 0 ? -1 : e - 1, t));
                  })(),
                  z(s => {
                    const o = Math.ceil(((Date.now() - n) / r) * e),
                      l = Math.min(o - i, e - i);
                    return (i = o), t ? -l : l;
                  }),
                  (function (e, t = !1) {
                    return n => n.lift(new Fm(e, t));
                  })(t => i < e, !0)
                );
              }),
              td(this.destroy$)
            )
            .subscribe(e => {
              this.thumbListRef.nativeElement[this.scrollKey] += e;
            });
        }
      }
      class Um {
        constructor() {
          (this.imageClick = new Li()),
            (this.thumbClick = new Li()),
            (this.thumbHover = new Li()),
            (this.descriptionClick = new Li()),
            (this.selection = new Li()),
            (this._tabindex = 0);
        }
        get galleryCollumn() {
          return (
            'top' === this.thumbsOrientation ||
            'bottom' === this.thumbsOrientation
          );
        }
        get ariaLabel() {
          return this.aria && this.aria.galleryLabel;
        }
        get thumbsOrientationFlag() {
          return 'top' === this.thumbsOrientation ||
            'bottom' === this.thumbsOrientation
            ? 6
            : 24;
        }
        ngOnChanges({ items: e }) {
          e &&
            (this._internalItems = (e.currentValue || []).map(e =>
              Object.assign({}, e)
            ));
        }
        ngOnInit() {
          null == this.aria && (this.aria = Sm),
            void 0 === this.arrows && (this.arrows = !0),
            null == this.descriptions && (this.descriptions = !0),
            null == this.mouseGestures && (this.mouseGestures = !0),
            null == this.touchGestures && (this.touchGestures = !0),
            void 0 === this.loop && (this.loop = !0),
            null == this.loading && (this.loading = 'auto'),
            null == this.selectedIndex && (this.selectedIndex = 0),
            void 0 === this.thumbs && (this.thumbs = !0),
            void 0 === this.thumbsArrows && (this.thumbsArrows = !0),
            void 0 === this.thumbsOrientation &&
              (this.thumbsOrientation = 'left');
        }
        ngOnDestroy() {}
        focus() {
          this.imageViewerEl.nativeElement.focus();
        }
        next() {
          this.imageViewer.next();
        }
        prev() {
          this.imageViewer.prev();
        }
        onThumbClick(e) {
          this.imageViewer.select(e.index),
            this._emitEvent(e, this.thumbClick),
            this._selectInternal(e.index);
        }
        select(e) {
          this.imageViewer.select(e),
            this.thumbnails.select(e),
            this._selectInternal(e);
        }
        slideThumbs(e) {
          this.thumbnails.slide(e);
        }
        _emitEvent(e, t) {
          const n = e;
          (n.item = this.items[e.index]), t.emit(n);
        }
        _selectInternal(e) {
          (this.selectedIndex = e), this.selection.emit(this.items[e]);
        }
      }
      class jm {}
      class $m {
        constructor(e) {
          (this.cd = e),
            (this.displayGallery = !0),
            (this.imageLoadingLatency = 0),
            (this.mobile = matchMedia('(max-width: 767px)').matches),
            (this.galleryConfig = {
              arrows: !this.mobile,
              descriptions: !1,
              mouseGestures: !0,
              touchGestures: !0,
              imageCounter: !0,
              imageCounterOrientation: 'top',
              objectFit: 'cover',
              loading: 'lazy',
              loop: !0,
              thumbs: !0,
              thumbsAutoScroll: !0,
              thumbsOrientation: this.mobile ? 'bottom' : 'left',
              thumbsArrows: !0,
              thumbsArrowSlideByLength: 0,
              thumbsScrollBehavior: 'smooth'
            }),
            (this.storeGalleryConfig = () => {
              sessionStorage.setItem(
                'galleryConfig',
                JSON.stringify(this.galleryConfig)
              );
            }),
            (this.galleryConfig =
              this.getGalleryConfig() || this.galleryConfig);
        }
        ngOnInit() {
          (this.images = Du([
            {
              src: './assets/kitten3.jpg',
              alt: 'Kitten 3',
              description: 'Beautiful kitten'
            },
            {
              src: './assets/kitten4.jpg',
              alt: 'Kitten 4',
              description:
                '<i>Lovely</i> kitten that <strong>will</strong> make your day way more enjoyable'
            },
            {
              src: './assets/mountains4.jpg',
              thumbSrc: './assets/mountains4-thumb.jpg',
              alt: 'Mountains 4',
              description: 'Mountain shoulder'
            },
            {
              src: './assets/fruit1.jpg',
              alt: 'Fruit 1',
              description: 'Passion fruit'
            },
            {
              src: './assets/fruit2.jpg',
              thumbSrc: './assets/fruit2-thumb.jpg',
              alt: 'Fruit 2',
              description: 'Really juicy fruit'
            },
            {
              src: './assets/fruit3.jpg',
              alt: 'Fruit 3',
              description: 'Most exotic fruit I have ever seen'
            },
            {
              src:
                'https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4',
              thumbSrc: './assets/flower.jpg',
              video: !0,
              description: 'Blooming rose'
            },
            {
              src: './assets/vogel1.jpg',
              thumbSrc: './assets/vogel1-thumb.jpg',
              alt: 'Bird 1',
              description: 'Bird, taking off'
            },
            {
              src: './assets/landscape1.jpg',
              thumbSrc: './assets/landscape1-thumb.jpg',
              alt: 'Landscape 1',
              description: 'Pale painting of a landscape'
            }
          ]).pipe(
            ym(e =>
              bm(() =>
                Du(e).pipe(
                  (function (e, t = qu) {
                    var n;
                    const r =
                      (n = e) instanceof Date && !isNaN(+n)
                        ? +e - t.now()
                        : Math.abs(e);
                    return e => e.lift(new xm(r, t));
                  })(this.imageLoadingLatency)
                )
              )
            )
          )),
            window.addEventListener('pagehide', this.storeGalleryConfig);
        }
        onImageClick(e) {
          return (
            (t = this),
            (r = function* () {}),
            new ((n = void 0) || (n = Promise))(function (e, i) {
              function s(e) {
                try {
                  l(r.next(e));
                } catch (t) {
                  i(t);
                }
              }
              function o(e) {
                try {
                  l(r.throw(e));
                } catch (t) {
                  i(t);
                }
              }
              function l(t) {
                t.done
                  ? e(t.value)
                  : new n(function (e) {
                      e(t.value);
                    }).then(s, o);
              }
              l((r = r.apply(t, [])).next());
            })
          );
          var t, n, r;
        }
        onImageLoad() {}
        reloadGallery() {
          (this.displayGallery = !1),
            this.cd.detectChanges(),
            (this.displayGallery = !0),
            this.cd.detectChanges();
        }
        getGalleryConfig() {
          return JSON.parse(sessionStorage.getItem('galleryConfig'));
        }
      }
      class zm {}
      class Bm {}
      class Hm extends T {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new k();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      function qm() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      qm.prototype = Object.create(Error.prototype);
      const Gm = qm,
        Qm = {};
      class Wm {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new Km(e, this.resultSelector));
        }
      }
      class Km extends $ {
        constructor(e, t) {
          super(e),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(e) {
          this.values.push(Qm), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add(j(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n, r, i) {
          const s = this.values,
            o = this.toRespond
              ? s[n] === Qm
                ? --this.toRespond
                : this.toRespond
              : 0;
          (s[n] = t),
            0 === o &&
              (this.resultSelector
                ? this._tryResultSelector(s)
                : this.destination.next(s.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function Zm(e) {
        return function (t) {
          return 0 === e ? Nu() : t.lift(new Ym(e));
        };
      }
      class Ym {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new ec();
        }
        call(e, t) {
          return t.subscribe(new Xm(e, this.total));
        }
      }
      class Xm extends f {
        constructor(e, t) {
          super(e),
            (this.total = t),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let i = 0; i < n; i++) {
              const i = t++ % n;
              e.next(r[i]);
            }
          }
          e.complete();
        }
      }
      const Jm = (e = ep) =>
        Vu({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw e();
          }
        });
      function ep() {
        return new Gm();
      }
      function tp(e = null) {
        return t => t.lift(new np(e));
      }
      class np {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new rp(e, this.defaultValue));
        }
      }
      class rp extends f {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function ip(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? Zu((t, n) => e(t, n, r)) : Z,
            Zm(1),
            n ? tp(t) : Jm(() => new Gm())
          );
      }
      function sp(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? Zu((t, n) => e(t, n, r)) : Z,
            tc(1),
            n ? tp(t) : Jm(() => new Gm())
          );
      }
      class op {
        constructor(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        call(e, t) {
          return t.subscribe(
            new lp(e, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class lp extends f {
        constructor(e, t, n, r) {
          super(e),
            (this.predicate = t),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(e) {
          this.destination.next(e), this.destination.complete();
        }
        _next(e) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function ap(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new up(e, t, n));
          }
        );
      }
      class up {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(
            new cp(e, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class cp extends f {
        constructor(e, t, n, r) {
          super(e),
            (this.accumulator = t),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      class hp {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class dp extends hp {
        constructor(e, t, n = 'imperative', r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class mp extends hp {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class pp extends hp {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class fp extends hp {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class gp extends hp {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class _p extends hp {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class bp extends hp {
        constructor(e, t, n, r, i) {
          super(e, t),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = i);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class yp extends hp {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class vp extends hp {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class wp {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Cp {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class xp {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class kp {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Ep {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Sp {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Tp {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Ip {}
      const Ap = 'primary';
      class Op {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Pp(e) {
        return new Op(e);
      }
      const Mp = 'ngNavigationCancelingError';
      function Rp(e) {
        const t = Error('NavigationCancelingError: ' + e);
        return (t[Mp] = !0), t;
      }
      function Np(e, t, n) {
        const r = n.path.split('/');
        if (r.length > e.length) return null;
        if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        const i = {};
        for (let s = 0; s < r.length; s++) {
          const t = r[s],
            n = e[s];
          if (t.startsWith(':')) i[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: i };
      }
      class Dp {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function Fp(e, t = '') {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          Lp(r, Vp(t, r));
        }
      }
      function Lp(e, t) {
        if (!e)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(e))
          throw new Error(
            `Invalid configuration of route '${t}': Array cannot be specified`
          );
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          e.outlet !== Ap
        )
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (e.redirectTo && e.children)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        if (e.children && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        if (e.redirectTo && e.component)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        if (e.path && e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        if (
          void 0 === e.redirectTo &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof e.path && '/' === e.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${t}': path cannot start with a slash`
          );
        if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== e.pathMatch &&
          'full' !== e.pathMatch &&
          'prefix' !== e.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        e.children && Fp(e.children, t);
      }
      function Vp(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? `${e}/`
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ''
          : e;
      }
      function Up(e) {
        const t = e.children && e.children.map(Up),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== Ap &&
            (n.component = Ip),
          n
        );
      }
      function jp(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (!n || !r || n.length != r.length) return !1;
        let i;
        for (let s = 0; s < n.length; s++)
          if (e[(i = n[s])] !== t[i]) return !1;
        return !0;
      }
      function $p(e) {
        return Array.prototype.concat.apply([], e);
      }
      function zp(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Bp(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function Hp(e) {
        return tn(e) ? e : en(e) ? G(Promise.resolve(e)) : Du(e);
      }
      function qp(e, t, n) {
        return n
          ? (function (e, t) {
              return jp(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!Kp(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(n => t[n] === e[n])
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, i) {
                  if (n.segments.length > i.length)
                    return (
                      !!Kp(n.segments.slice(0, i.length), i) && !r.hasChildren()
                    );
                  if (n.segments.length === i.length) {
                    if (!Kp(n.segments, i)) return !1;
                    for (const t in r.children) {
                      if (!n.children[t]) return !1;
                      if (!e(n.children[t], r.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const e = i.slice(0, n.segments.length),
                      s = i.slice(n.segments.length);
                    return (
                      !!Kp(n.segments, e) &&
                      !!n.children[Ap] &&
                      t(n.children[Ap], r, s)
                    );
                  }
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      class Gp {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Pp(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Jp.serialize(this);
        }
      }
      class Qp {
        constructor(e, t) {
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            Bp(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return ef(this);
        }
      }
      class Wp {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Pp(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return lf(this);
        }
      }
      function Kp(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function Zp(e, t) {
        let n = [];
        return (
          Bp(e.children, (e, r) => {
            r === Ap && (n = n.concat(t(e, r)));
          }),
          Bp(e.children, (e, r) => {
            r !== Ap && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      class Yp {}
      class Xp {
        parse(e) {
          const t = new df(e);
          return new Gp(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(e) {
          var t;
          return `${`/${(function e(t, n) {
            if (!t.hasChildren()) return ef(t);
            if (n) {
              const n = t.children[Ap] ? e(t.children[Ap], !1) : '',
                r = [];
              return (
                Bp(t.children, (t, n) => {
                  n !== Ap && r.push(`${n}:${e(t, !1)}`);
                }),
                r.length > 0 ? `${n}(${r.join('//')})` : n
              );
            }
            {
              const n = Zp(t, (n, r) =>
                r === Ap ? [e(t.children[Ap], !1)] : [`${r}:${e(n, !1)}`]
              );
              return `${ef(t)}/(${n.join('//')})`;
            }
          })(e.root, !0)}`}${(function (e) {
            const t = Object.keys(e).map(t => {
              const n = e[t];
              return Array.isArray(n)
                ? n.map(e => `${nf(t)}=${nf(e)}`).join('&')
                : `${nf(t)}=${nf(n)}`;
            });
            return t.length ? `?${t.join('&')}` : '';
          })(e.queryParams)}${
            'string' == typeof e.fragment
              ? `#${((t = e.fragment), encodeURI(t))}`
              : ''
          }`;
        }
      }
      const Jp = new Xp();
      function ef(e) {
        return e.segments.map(e => lf(e)).join('/');
      }
      function tf(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function nf(e) {
        return tf(e).replace(/%3B/gi, ';');
      }
      function rf(e) {
        return tf(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function sf(e) {
        return decodeURIComponent(e);
      }
      function of(e) {
        return sf(e.replace(/\+/g, '%20'));
      }
      function lf(e) {
        return `${rf(e.path)}${
          ((t = e.parameters),
          Object.keys(t)
            .map(e => `;${rf(e)}=${rf(t[e])}`)
            .join(''))
        }`;
        var t;
      }
      const af = /^[^\/()?;=#]+/;
      function uf(e) {
        const t = e.match(af);
        return t ? t[0] : '';
      }
      const cf = /^[^=?&#]+/,
        hf = /^[^?&#]+/;
      class df {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new Qp([], {})
              : new Qp([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional('&'));
          return e;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const e = [];
          for (
            this.peekStartsWith('(') || e.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) &&
              (n[Ap] = new Qp(e, t)),
            n
          );
        }
        parseSegment() {
          const e = uf(this.remaining);
          if ('' === e && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(e), new Wp(sf(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(';'); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = uf(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = uf(this.remaining);
            e && this.capture((n = e));
          }
          e[sf(t)] = sf(n);
        }
        parseQueryParam(e) {
          const t = (function (e) {
            const t = e.match(cf);
            return t ? t[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = (function (e) {
              const t = e.match(hf);
              return t ? t[0] : '';
            })(this.remaining);
            e && this.capture((n = e));
          }
          const r = of(t),
            i = of(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || (e[r] = t = [t]), t.push(i);
          } else e[r] = i;
        }
        parseParens(e) {
          const t = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = uf(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let i = void 0;
            n.indexOf(':') > -1
              ? ((i = n.substr(0, n.indexOf(':'))),
                this.capture(i),
                this.capture(':'))
              : e && (i = Ap);
            const s = this.parseChildren();
            (t[i] = 1 === Object.keys(s).length ? s[Ap] : new Qp([], s)),
              this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) &&
            ((this.remaining = this.remaining.substring(e.length)), !0)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class mf {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = pf(e, this._root);
          return t ? t.children.map(e => e.value) : [];
        }
        firstChild(e) {
          const t = pf(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = ff(e, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map(e => e.value).filter(t => t !== e);
        }
        pathFromRoot(e) {
          return ff(e, this._root).map(e => e.value);
        }
      }
      function pf(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = pf(e, n);
          if (t) return t;
        }
        return null;
      }
      function ff(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = ff(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class gf {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function _f(e) {
        const t = {};
        return e && e.children.forEach(e => (t[e.value.outlet] = e)), t;
      }
      class bf extends mf {
        constructor(e, t) {
          super(e), (this.snapshot = t), kf(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function yf(e, t) {
        const n = (function (e, t) {
            const n = new Cf([], {}, {}, '', {}, Ap, t, null, e.root, -1, {});
            return new xf('', new gf(n, []));
          })(e, t),
          r = new Hm([new Wp('', {})]),
          i = new Hm({}),
          s = new Hm({}),
          o = new Hm({}),
          l = new Hm(''),
          a = new vf(r, i, o, l, s, Ap, t, n.root);
        return (a.snapshot = n.root), new bf(new gf(a, []), n);
      }
      class vf {
        constructor(e, t, n, r, i, s, o, l) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = s),
            (this.component = o),
            (this._futureSnapshot = l);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(z(e => Pp(e)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(z(e => Pp(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function wf(e, t = 'emptyOnly') {
        const n = e.pathFromRoot;
        let r = 0;
        if ('always' !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && '' === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Cf {
        constructor(e, t, n, r, i, s, o, l, a, u, c) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = s),
            (this.component = o),
            (this.routeConfig = l),
            (this._urlSegment = a),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Pp(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Pp(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map(e => e.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class xf extends mf {
        constructor(e, t) {
          super(t), (this.url = e), kf(this, t);
        }
        toString() {
          return Ef(this._root);
        }
      }
      function kf(e, t) {
        (t.value._routerState = e), t.children.forEach(t => kf(e, t));
      }
      function Ef(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(Ef).join(', ')} } ` : '';
        return `${e.value}${t}`;
      }
      function Sf(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            jp(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            jp(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!jp(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            jp(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function Tf(e, t) {
        var n, r;
        return (
          jp(e.params, t.params) &&
          Kp((n = e.url), (r = t.url)) &&
          n.every((e, t) => jp(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Tf(e.parent, t.parent))
        );
      }
      function If(e) {
        return (
          'object' == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function Af(e, t, n, r, i) {
        let s = {};
        return (
          r &&
            Bp(r, (e, t) => {
              s[t] = Array.isArray(e) ? e.map(e => `${e}`) : `${e}`;
            }),
          new Gp(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  const i = {};
                  return (
                    Bp(t.children, (t, s) => {
                      i[s] = t === n ? r : e(t, n, r);
                    }),
                    new Qp(t.segments, i)
                  );
                })(n.root, e, t),
            s,
            i
          )
        );
      }
      class Of {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e),
            (this.numberOfDoubleDots = t),
            (this.commands = n),
            e && n.length > 0 && If(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(e => 'object' == typeof e && null != e && e.outlets);
          if (r && r !== zp(n))
            throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class Pf {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function Mf(e) {
        return 'object' == typeof e && null != e && e.outlets
          ? e.outlets[Ap]
          : `${e}`;
      }
      function Rf(e, t, n) {
        if (
          (e || (e = new Qp([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return Nf(e, t, n);
        const r = (function (e, t, n) {
            let r = 0,
              i = t;
            const s = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; i < e.segments.length; ) {
              if (r >= n.length) return s;
              const t = e.segments[i],
                o = Mf(n[r]),
                l = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === o) break;
              if (o && l && 'object' == typeof l && void 0 === l.outlets) {
                if (!Vf(o, l, t)) return s;
                r += 2;
              } else {
                if (!Vf(o, {}, t)) return s;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(e, t, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new Qp(e.segments.slice(0, r.pathIndex), {});
          return (
            (t.children[Ap] = new Qp(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            Nf(t, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new Qp(e.segments, {})
          : r.match && !e.hasChildren()
          ? Df(e, t, n)
          : r.match
          ? Nf(e, 0, i)
          : Df(e, t, n);
      }
      function Nf(e, t, n) {
        if (0 === n.length) return new Qp(e.segments, {});
        {
          const r = (function (e) {
              return 'object' != typeof e[0]
                ? { [Ap]: e }
                : void 0 === e[0].outlets
                ? { [Ap]: e }
                : e[0].outlets;
            })(n),
            i = {};
          return (
            Bp(r, (n, r) => {
              null !== n && (i[r] = Rf(e.children[r], t, n));
            }),
            Bp(e.children, (e, t) => {
              void 0 === r[t] && (i[t] = e);
            }),
            new Qp(e.segments, i)
          );
        }
      }
      function Df(e, t, n) {
        const r = e.segments.slice(0, t);
        let i = 0;
        for (; i < n.length; ) {
          if ('object' == typeof n[i] && void 0 !== n[i].outlets) {
            const e = Ff(n[i].outlets);
            return new Qp(r, e);
          }
          if (0 === i && If(n[0])) {
            r.push(new Wp(e.segments[t].path, n[0])), i++;
            continue;
          }
          const s = Mf(n[i]),
            o = i < n.length - 1 ? n[i + 1] : null;
          s && o && If(o)
            ? (r.push(new Wp(s, Lf(o))), (i += 2))
            : (r.push(new Wp(s, {})), i++);
        }
        return new Qp(r, {});
      }
      function Ff(e) {
        const t = {};
        return (
          Bp(e, (e, n) => {
            null !== e && (t[n] = Df(new Qp([], {}), 0, e));
          }),
          t
        );
      }
      function Lf(e) {
        const t = {};
        return Bp(e, (e, n) => (t[n] = `${e}`)), t;
      }
      function Vf(e, t, n) {
        return e == n.path && jp(t, n.parameters);
      }
      const Uf = (e, t, n) =>
        z(
          r => (
            new jf(t, r.targetRouterState, r.currentRouterState, n).activate(e),
            r
          )
        );
      class jf {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            Sf(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = _f(t);
          e.children.forEach(e => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            Bp(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            i = t ? t.value : null;
          if (r === i)
            if (r.component) {
              const i = n.getContext(r.outlet);
              i && this.deactivateChildRoutes(e, t, i.children);
            } else this.deactivateChildRoutes(e, t, n);
          else i && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = _f(e),
              i = e.value.component ? n.children : t;
            Bp(r, (e, t) => this.deactivateRouteAndItsChildren(e, i)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(e, t, n) {
          const r = _f(t);
          e.children.forEach(e => {
            this.activateRoutes(e, r[e.value.outlet], n),
              this.forwardEvent(new Sp(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new kp(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            i = t ? t.value : null;
          if ((Sf(r), r === i))
            if (r.component) {
              const i = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, i.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                $f(e.route);
            } else {
              const n = (function (e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(r.snapshot),
                i = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = i),
                t.outlet && t.outlet.activateWith(r, i),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function $f(e) {
        Sf(e.value), e.children.forEach($f);
      }
      function zf(e) {
        return 'function' == typeof e;
      }
      function Bf(e) {
        return e instanceof Gp;
      }
      class Hf {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class qf {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function Gf(e) {
        return new w(t => t.error(new Hf(e)));
      }
      function Qf(e) {
        return new w(t => t.error(new qf(e)));
      }
      function Wf(e) {
        return new w(t =>
          t.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${e}'`
            )
          )
        );
      }
      class Kf {
        constructor(e, t, n, r, i) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(He));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            Ap
          )
            .pipe(
              z(e =>
                this.createUrlTree(
                  e,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Od(e => {
                if (e instanceof qf)
                  return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof Hf) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, Ap)
            .pipe(z(t => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              Od(e => {
                if (e instanceof Hf) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(
            `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
          );
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new Qp([], { [Ap]: e }) : e;
          return new Gp(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(z(e => new Qp([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          return (function (e, t) {
            if (0 === Object.keys(e).length) return Du({});
            const n = [],
              r = [],
              i = {};
            return (
              Bp(e, (e, s) => {
                const o = t(s, e).pipe(z(e => (i[s] = e)));
                s === Ap ? n.push(o) : r.push(o);
              }),
              Du.apply(null, n.concat(r)).pipe(
                Fu(),
                ip(),
                z(() => i)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, i, s) {
          return Du(...n).pipe(
            z(o =>
              this.expandSegmentAgainstRoute(e, t, n, o, r, i, s).pipe(
                Od(e => {
                  if (e instanceof Hf) return Du(null);
                  throw e;
                })
              )
            ),
            Fu(),
            sp(e => !!e),
            Od((e, n) => {
              if (e instanceof Gm || 'EmptyError' === e.name) {
                if (this.noLeftoversInUrl(t, r, i)) return Du(new Qp([], {}));
                throw new Hf(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, i, s, o) {
          return Jf(r) !== s
            ? Gf(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, i)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s)
            : Gf(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                i,
                s
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const i = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? Qf(i)
            : this.lineralizeSegments(n, i).pipe(
                Q(n => {
                  const i = new Qp(n, {});
                  return this.expandSegment(e, i, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s) {
          const {
            matched: o,
            consumedSegments: l,
            lastChild: a,
            positionalParamSegments: u
          } = Zf(t, r, i);
          if (!o) return Gf(t);
          const c = this.applyRedirectCommands(l, r.redirectTo, u);
          return r.redirectTo.startsWith('/')
            ? Qf(c)
            : this.lineralizeSegments(r, c).pipe(
                Q(r => this.expandSegment(e, t, n, r.concat(i.slice(a)), s, !1))
              );
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(e.injector, n)
                  .pipe(z(e => ((n._loadedConfig = e), new Qp(r, {}))))
              : Du(new Qp(r, {}));
          const { matched: i, consumedSegments: s, lastChild: o } = Zf(t, n, r);
          if (!i) return Gf(t);
          const l = r.slice(o);
          return this.getChildConfig(e, n, r).pipe(
            Q(e => {
              const n = e.module,
                r = e.routes,
                { segmentGroup: i, slicedSegments: o } = (function (
                  e,
                  t,
                  n,
                  r
                ) {
                  return n.length > 0 &&
                    (function (e, t, n) {
                      return n.some(n => Xf(e, t, n) && Jf(n) !== Ap);
                    })(e, n, r)
                    ? {
                        segmentGroup: Yf(
                          new Qp(
                            t,
                            (function (e, t) {
                              const n = {};
                              n[Ap] = t;
                              for (const r of e)
                                '' === r.path &&
                                  Jf(r) !== Ap &&
                                  (n[Jf(r)] = new Qp([], {}));
                              return n;
                            })(r, new Qp(n, e.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === n.length &&
                      (function (e, t, n) {
                        return n.some(n => Xf(e, t, n));
                      })(e, n, r)
                    ? {
                        segmentGroup: Yf(
                          new Qp(
                            e.segments,
                            (function (e, t, n, r) {
                              const i = {};
                              for (const s of n)
                                Xf(e, t, s) &&
                                  !r[Jf(s)] &&
                                  (i[Jf(s)] = new Qp([], {}));
                              return Object.assign({}, r, i);
                            })(e, n, r, e.children)
                          )
                        ),
                        slicedSegments: n
                      }
                    : { segmentGroup: e, slicedSegments: n };
                })(t, s, l, r);
              return 0 === o.length && i.hasChildren()
                ? this.expandChildren(n, r, i).pipe(z(e => new Qp(s, e)))
                : 0 === r.length && 0 === o.length
                ? Du(new Qp(s, {}))
                : this.expandSegment(n, i, r, o, Ap, !0).pipe(
                    z(e => new Qp(s.concat(e.segments), e.children))
                  );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Du(new Dp(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Du(t._loadedConfig)
              : (function (e, t, n) {
                  const r = t.canLoad;
                  return r && 0 !== r.length
                    ? G(r)
                        .pipe(
                          z(r => {
                            const i = e.get(r);
                            let s;
                            if (
                              (function (e) {
                                return e && zf(e.canLoad);
                              })(i)
                            )
                              s = i.canLoad(t, n);
                            else {
                              if (!zf(i))
                                throw new Error('Invalid CanLoad guard');
                              s = i(t, n);
                            }
                            return Hp(s);
                          })
                        )
                        .pipe(
                          Fu(),
                          ((i = e => !0 === e),
                          e => e.lift(new op(i, void 0, e)))
                        )
                    : Du(!0);
                  var i;
                })(e.injector, t, n).pipe(
                  Q(n =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe(z(e => ((t._loadedConfig = e), e)))
                      : (function (e) {
                          return new w(t =>
                            t.error(
                              Rp(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Du(new Dp([], e));
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Du(n);
            if (r.numberOfChildren > 1 || !r.children[Ap])
              return Wf(e.redirectTo);
            r = r.children[Ap];
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const i = this.createSegmentGroup(e, t.root, n, r);
          return new Gp(
            i,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            Bp(e, (e, r) => {
              if ('string' == typeof e && e.startsWith(':')) {
                const i = e.substring(1);
                n[r] = t[i];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const i = this.createSegments(e, t.segments, n, r);
          let s = {};
          return (
            Bp(t.children, (t, i) => {
              s[i] = this.createSegmentGroup(e, t, n, r);
            }),
            new Qp(i, s)
          );
        }
        createSegments(e, t, n, r) {
          return t.map(t =>
            t.path.startsWith(':')
              ? this.findPosParam(e, t, r)
              : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
            );
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function Zf(e, t, n) {
        if ('' === t.path)
          return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
              };
        const r = (t.matcher || Np)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {}
            };
      }
      function Yf(e) {
        if (1 === e.numberOfChildren && e.children[Ap]) {
          const t = e.children[Ap];
          return new Qp(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function Xf(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Jf(e) {
        return e.outlet || Ap;
      }
      class eg {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class tg {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function ng(e, t, n) {
        const r = e._root;
        return (function e(
          t,
          n,
          r,
          i,
          s = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = _f(n);
          return (
            t.children.forEach(t => {
              !(function (
                t,
                n,
                r,
                i,
                s = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = t.value,
                  l = n ? n.value : null,
                  a = r ? r.getContext(t.value.outlet) : null;
                if (l && o.routeConfig === l.routeConfig) {
                  const u = (function (e, t, n) {
                    if ('function' == typeof n) return n(e, t);
                    switch (n) {
                      case 'pathParamsChange':
                        return !Kp(e.url, t.url);
                      case 'pathParamsOrQueryParamsChange':
                        return (
                          !Kp(e.url, t.url) || !jp(e.queryParams, t.queryParams)
                        );
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Tf(e, t) || !jp(e.queryParams, t.queryParams);
                      case 'paramsChange':
                      default:
                        return !Tf(e, t);
                    }
                  })(l, o, o.routeConfig.runGuardsAndResolvers);
                  u
                    ? s.canActivateChecks.push(new eg(i))
                    : ((o.data = l.data), (o._resolvedData = l._resolvedData)),
                    e(t, n, o.component ? (a ? a.children : null) : r, i, s),
                    u &&
                      s.canDeactivateChecks.push(
                        new tg((a && a.outlet && a.outlet.component) || null, l)
                      );
                } else
                  l && ig(n, a, s),
                    s.canActivateChecks.push(new eg(i)),
                    e(t, null, o.component ? (a ? a.children : null) : r, i, s);
              })(t, o[t.value.outlet], r, i.concat([t.value]), s),
                delete o[t.value.outlet];
            }),
            Bp(o, (e, t) => ig(e, r.getContext(t), s)),
            s
          );
        })(r, t ? t._root : null, n, [r.value]);
      }
      function rg(e, t, n) {
        const r = (function (e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function ig(e, t, n) {
        const r = _f(e),
          i = e.value;
        Bp(r, (e, r) => {
          ig(e, i.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new tg(
              i.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              i
            )
          );
      }
      const sg = Symbol('INITIAL_VALUE');
      function og() {
        return ym(e =>
          (function (...e) {
            let t = null,
              n = null;
            return (
              A(e[e.length - 1]) && (n = e.pop()),
              'function' == typeof e[e.length - 1] && (t = e.pop()),
              1 === e.length && a(e[0]) && (e = e[0]),
              q(e, n).lift(new Wm(t))
            );
          })(...e.map(e => e.pipe(tc(1), Lu(sg)))).pipe(
            ap((e, t) => {
              let n = !1;
              return t.reduce((e, r, i) => {
                if (e !== sg) return e;
                if ((r === sg && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (i === t.length - 1 || Bf(r)) return r;
                }
                return e;
              }, e);
            }, sg),
            Zu(e => e !== sg),
            z(e => (Bf(e) ? e : !0 === e)),
            tc(1)
          )
        );
      }
      function lg(e, t) {
        return null !== e && t && t(new Ep(e)), Du(!0);
      }
      function ag(e, t) {
        return null !== e && t && t(new xp(e)), Du(!0);
      }
      function ug(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Du(
              r.map(r =>
                bm(() => {
                  const i = rg(r, t, n);
                  let s;
                  if (
                    (function (e) {
                      return e && zf(e.canActivate);
                    })(i)
                  )
                    s = Hp(i.canActivate(t, e));
                  else {
                    if (!zf(i)) throw new Error('Invalid CanActivate guard');
                    s = Hp(i(t, e));
                  }
                  return s.pipe(sp());
                })
              )
            ).pipe(og())
          : Du(!0);
      }
      function cg(e, t, n) {
        const r = t[t.length - 1],
          i = t
            .slice(0, t.length - 1)
            .reverse()
            .map(e =>
              (function (e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e)
            )
            .filter(e => null !== e)
            .map(t =>
              bm(() =>
                Du(
                  t.guards.map(i => {
                    const s = rg(i, t.node, n);
                    let o;
                    if (
                      (function (e) {
                        return e && zf(e.canActivateChild);
                      })(s)
                    )
                      o = Hp(s.canActivateChild(r, e));
                    else {
                      if (!zf(s))
                        throw new Error('Invalid CanActivateChild guard');
                      o = Hp(s(r, e));
                    }
                    return o.pipe(sp());
                  })
                ).pipe(og())
              )
            );
        return Du(i).pipe(og());
      }
      class hg {}
      class dg {
        constructor(e, t, n, r, i, s) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = i),
            (this.relativeLinkResolution = s);
        }
        recognize() {
          try {
            const e = fg(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              t = this.processSegmentGroup(this.config, e, Ap),
              n = new Cf(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                Ap,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new gf(n, t),
              i = new xf(this.url, r);
            return this.inheritParamsAndData(i._root), Du(i);
          } catch (e) {
            return new w(t => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = wf(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach(e => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = Zp(t, (t, n) => this.processSegmentGroup(e, t, n));
          return (
            (function (e) {
              const t = {};
              e.forEach(e => {
                const n = t[e.value.outlet];
                if (n) {
                  const t = n.url.map(e => e.toString()).join('/'),
                    r = e.value.url.map(e => e.toString()).join('/');
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                  );
                }
                t[e.value.outlet] = e.value;
              });
            })(n),
            n.sort((e, t) =>
              e.value.outlet === Ap
                ? -1
                : t.value.outlet === Ap
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            n
          );
        }
        processSegment(e, t, n, r) {
          for (const s of e)
            try {
              return this.processSegmentAgainstRoute(s, t, n, r);
            } catch (i) {
              if (!(i instanceof hg)) throw i;
            }
          if (this.noLeftoversInUrl(t, n, r)) return [];
          throw new hg();
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) throw new hg();
          if ((e.outlet || Ap) !== r) throw new hg();
          let i,
            s = [],
            o = [];
          if ('**' === e.path) {
            const s = n.length > 0 ? zp(n).parameters : {};
            i = new Cf(
              n,
              s,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              bg(e),
              r,
              e.component,
              e,
              mg(t),
              pg(t) + n.length,
              yg(e)
            );
          } else {
            const l = (function (e, t, n) {
              if ('' === t.path) {
                if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0))
                  throw new hg();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || Np)(n, e, t);
              if (!r) throw new hg();
              const i = {};
              Bp(r.posParams, (e, t) => {
                i[t] = e.path;
              });
              const s =
                r.consumed.length > 0
                  ? Object.assign(
                      {},
                      i,
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : i;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: s
              };
            })(t, e, n);
            (s = l.consumedSegments),
              (o = n.slice(l.lastChild)),
              (i = new Cf(
                s,
                l.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                bg(e),
                r,
                e.component,
                e,
                mg(t),
                pg(t) + s.length,
                yg(e)
              ));
          }
          const l = (function (e) {
              return e.children
                ? e.children
                : e.loadChildren
                ? e._loadedConfig.routes
                : [];
            })(e),
            { segmentGroup: a, slicedSegments: u } = fg(
              t,
              s,
              o,
              l,
              this.relativeLinkResolution
            );
          if (0 === u.length && a.hasChildren()) {
            const e = this.processChildren(l, a);
            return [new gf(i, e)];
          }
          if (0 === l.length && 0 === u.length) return [new gf(i, [])];
          const c = this.processSegment(l, a, u, Ap);
          return [new gf(i, c)];
        }
      }
      function mg(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function pg(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          n += (t = t._sourceSegment)._segmentIndexShift
            ? t._segmentIndexShift
            : 0;
        return n - 1;
      }
      function fg(e, t, n, r, i) {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some(n => gg(e, t, n) && _g(n) !== Ap);
          })(e, n, r)
        ) {
          const i = new Qp(
            t,
            (function (e, t, n, r) {
              const i = {};
              (i[Ap] = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              for (const s of n)
                if ('' === s.path && _g(s) !== Ap) {
                  const n = new Qp([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = t.length),
                    (i[_g(s)] = n);
                }
              return i;
            })(e, t, r, new Qp(n, e.children))
          );
          return (
            (i._sourceSegment = e),
            (i._segmentIndexShift = t.length),
            { segmentGroup: i, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some(n => gg(e, t, n));
          })(e, n, r)
        ) {
          const s = new Qp(
            e.segments,
            (function (e, t, n, r, i, s) {
              const o = {};
              for (const l of r)
                if (gg(e, n, l) && !i[_g(l)]) {
                  const n = new Qp([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift =
                      'legacy' === s ? e.segments.length : t.length),
                    (o[_g(l)] = n);
                }
              return Object.assign({}, i, o);
            })(e, t, n, r, e.children, i)
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: n }
          );
        }
        const s = new Qp(e.segments, e.children);
        return (
          (s._sourceSegment = e),
          (s._segmentIndexShift = t.length),
          { segmentGroup: s, slicedSegments: n }
        );
      }
      function gg(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function _g(e) {
        return e.outlet || Ap;
      }
      function bg(e) {
        return e.data || {};
      }
      function yg(e) {
        return e.resolve || {};
      }
      function vg(e, t, n, r) {
        const i = rg(e, t, r);
        return Hp(i.resolve ? i.resolve(t, n) : i(t, n));
      }
      function wg(e) {
        return function (t) {
          return t.pipe(
            ym(t => {
              const n = e(t);
              return n ? G(n).pipe(z(() => t)) : G([t]);
            })
          );
        };
      }
      class Cg {}
      class xg {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const kg = new Te('ROUTES');
      class Eg {
        constructor(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(e, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              z(n => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new Dp($p(r.injector.get(kg)).map(Up), r);
              })
            )
          );
        }
        loadModuleFactory(e) {
          return 'string' == typeof e
            ? G(this.loader.load(e))
            : Hp(e()).pipe(
                Q(e =>
                  e instanceof qe
                    ? Du(e)
                    : G(this.compiler.compileModuleAsync(e))
                )
              );
        }
      }
      class Sg {}
      class Tg {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function Ig(e) {
        throw e;
      }
      function Ag(e, t, n) {
        return t.parse('/');
      }
      function Og(e, t) {
        return Du(null);
      }
      class Pg {
        constructor(e, t, n, r, i, s, o, l) {
          (this.rootComponentType = e),
            (this.urlSerializer = t),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = l),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new T()),
            (this.errorHandler = Ig),
            (this.malformedUriErrorHandler = Ag),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: Og, afterPreactivation: Og }),
            (this.urlHandlingStrategy = new Tg()),
            (this.routeReuseStrategy = new xg()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = i.get(He)),
            (this.console = i.get(Wi));
          const a = i.get(ms);
          (this.isNgZoneEnabled = a instanceof ms),
            this.resetConfig(l),
            (this.currentUrlTree = new Gp(new Qp([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Eg(
              s,
              o,
              e => this.triggerEvent(new wp(e)),
              e => this.triggerEvent(new Cp(e))
            )),
            (this.routerState = yf(
              this.currentUrlTree,
              this.rootComponentType
            )),
            (this.transitions = new Hm({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              urlAfterRedirects: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: 'imperative',
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            Zu(e => 0 !== e.id),
            z(e =>
              Object.assign({}, e, {
                extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl)
              })
            ),
            ym(e => {
              let n = !1,
                r = !1;
              return Du(e).pipe(
                Vu(e => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null
                        })
                      : null
                  };
                }),
                ym(e => {
                  const n =
                    !this.navigated ||
                    e.extractedUrl.toString() !==
                      this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Du(e).pipe(
                      ym(e => {
                        const n = this.transitions.getValue();
                        return (
                          t.next(
                            new dp(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              e.source,
                              e.restoredState
                            )
                          ),
                          n !== this.transitions.getValue() ? Ru : [e]
                        );
                      }),
                      ym(e => Promise.resolve(e)),
                      (function (e, t, n, r) {
                        return function (i) {
                          return i.pipe(
                            ym(i =>
                              (function (e, t, n, r, i) {
                                return new Kf(e, t, n, r, i).apply();
                              })(e, t, n, i.extractedUrl, r).pipe(
                                z(e =>
                                  Object.assign({}, i, { urlAfterRedirects: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.ngModule.injector,
                        this.configLoader,
                        this.urlSerializer,
                        this.config
                      ),
                      Vu(e => {
                        this.currentNavigation = Object.assign(
                          {},
                          this.currentNavigation,
                          { finalUrl: e.urlAfterRedirects }
                        );
                      }),
                      (function (e, t, n, r, i) {
                        return function (s) {
                          return s.pipe(
                            Q(s =>
                              (function (
                                e,
                                t,
                                n,
                                r,
                                i = 'emptyOnly',
                                s = 'legacy'
                              ) {
                                return new dg(e, t, n, r, i, s).recognize();
                              })(
                                e,
                                t,
                                s.urlAfterRedirects,
                                n(s.urlAfterRedirects),
                                r,
                                i
                              ).pipe(
                                z(e =>
                                  Object.assign({}, s, { targetSnapshot: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        e => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      Vu(e => {
                        'eager' === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              e.urlAfterRedirects,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            ),
                          (this.browserUrlTree = e.urlAfterRedirects));
                      }),
                      Vu(e => {
                        const n = new gp(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const {
                        id: n,
                        extractedUrl: r,
                        source: i,
                        restoredState: s,
                        extras: o
                      } = e,
                      l = new dp(n, this.serializeUrl(r), i, s);
                    t.next(l);
                    const a = yf(r, this.rootComponentType).snapshot;
                    return Du(
                      Object.assign({}, e, {
                        targetSnapshot: a,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, o, {
                          skipLocationChange: !1,
                          replaceUrl: !1
                        })
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = e.rawUrl),
                    (this.browserUrlTree = e.urlAfterRedirects),
                    e.resolve(null),
                    Ru
                  );
                }),
                wg(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: i,
                    extras: { skipLocationChange: s, replaceUrl: o }
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: i,
                    skipLocationChange: !!s,
                    replaceUrl: !!o
                  });
                }),
                Vu(e => {
                  const t = new _p(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                z(e =>
                  Object.assign({}, e, {
                    guards: ng(
                      e.targetSnapshot,
                      e.currentSnapshot,
                      this.rootContexts
                    )
                  })
                ),
                (function (e, t) {
                  return function (n) {
                    return n.pipe(
                      Q(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: i,
                          guards: {
                            canActivateChecks: s,
                            canDeactivateChecks: o
                          }
                        } = n;
                        return 0 === o.length && 0 === s.length
                          ? Du(Object.assign({}, n, { guardsResult: !0 }))
                          : (function (e, t, n, r) {
                              return G(e).pipe(
                                Q(e =>
                                  (function (e, t, n, r, i) {
                                    const s =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return s && 0 !== s.length
                                      ? Du(
                                          s.map(s => {
                                            const o = rg(s, t, i);
                                            let l;
                                            if (
                                              (function (e) {
                                                return e && zf(e.canDeactivate);
                                              })(o)
                                            )
                                              l = Hp(
                                                o.canDeactivate(e, t, n, r)
                                              );
                                            else {
                                              if (!zf(o))
                                                throw new Error(
                                                  'Invalid CanDeactivate guard'
                                                );
                                              l = Hp(o(e, t, n, r));
                                            }
                                            return l.pipe(sp());
                                          })
                                        ).pipe(og())
                                      : Du(!0);
                                  })(e.component, e.route, n, t, r)
                                ),
                                sp(e => !0 !== e, !0)
                              );
                            })(o, r, i, e).pipe(
                              Q(n =>
                                n &&
                                (function (e) {
                                  return 'boolean' == typeof e;
                                })(n)
                                  ? (function (e, t, n, r) {
                                      return G(t).pipe(
                                        pd(t =>
                                          G([
                                            ag(t.route.parent, r),
                                            lg(t.route, r),
                                            cg(e, t.path, n),
                                            ug(e, t.route, n)
                                          ]).pipe(
                                            Fu(),
                                            sp(e => !0 !== e, !0)
                                          )
                                        ),
                                        sp(e => !0 !== e, !0)
                                      );
                                    })(r, s, e, t)
                                  : Du(n)
                              ),
                              z(e => Object.assign({}, n, { guardsResult: e }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, e => this.triggerEvent(e)),
                Vu(e => {
                  if (Bf(e.guardsResult)) {
                    const t = Rp(
                      `Redirecting to "${this.serializeUrl(e.guardsResult)}"`
                    );
                    throw ((t.url = e.guardsResult), t);
                  }
                }),
                Vu(e => {
                  const t = new bp(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                Zu(e => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new pp(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      ''
                    );
                    return t.next(n), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                wg(e => {
                  if (e.guards.canActivateChecks.length)
                    return Du(e).pipe(
                      Vu(e => {
                        const t = new yp(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      (function (e, t) {
                        return function (n) {
                          return n.pipe(
                            Q(n => {
                              const {
                                targetSnapshot: r,
                                guards: { canActivateChecks: i }
                              } = n;
                              return i.length
                                ? G(i).pipe(
                                    pd(n =>
                                      (function (e, t, n, r) {
                                        return (function (e, t, n, r) {
                                          const i = Object.keys(e);
                                          if (0 === i.length) return Du({});
                                          if (1 === i.length) {
                                            const s = i[0];
                                            return vg(e[s], t, n, r).pipe(
                                              z(e => ({ [s]: e }))
                                            );
                                          }
                                          const s = {};
                                          return G(i)
                                            .pipe(
                                              Q(i =>
                                                vg(e[i], t, n, r).pipe(
                                                  z(e => ((s[i] = e), e))
                                                )
                                              )
                                            )
                                            .pipe(
                                              ip(),
                                              z(() => s)
                                            );
                                        })(e._resolve, e, t, r).pipe(
                                          z(
                                            t => (
                                              (e._resolvedData = t),
                                              (e.data = Object.assign(
                                                {},
                                                e.data,
                                                wf(e, n).resolve
                                              )),
                                              null
                                            )
                                          )
                                        );
                                      })(n.route, r, e, t)
                                    ),
                                    (function (e, t) {
                                      return arguments.length >= 2
                                        ? function (n) {
                                            return y(ap(e, t), Zm(1), tp(t))(n);
                                          }
                                        : function (t) {
                                            return y(
                                              ap((t, n, r) => e(t, n, r + 1)),
                                              Zm(1)
                                            )(t);
                                          };
                                    })((e, t) => e),
                                    z(e => n)
                                  )
                                : Du(n);
                            })
                          );
                        };
                      })(
                        this.paramsInheritanceStrategy,
                        this.ngModule.injector
                      ),
                      Vu(e => {
                        const t = new vp(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                }),
                wg(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: i,
                    extras: { skipLocationChange: s, replaceUrl: o }
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: i,
                    skipLocationChange: !!s,
                    replaceUrl: !!o
                  });
                }),
                z(e => {
                  const t = (function (e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const i = r.value;
                        i._futureSnapshot = n.value;
                        const s = (function (t, n, r) {
                          return n.children.map(n => {
                            for (const i of r.children)
                              if (t.shouldReuseRoute(i.value.snapshot, n.value))
                                return e(t, n, i);
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new gf(i, s);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
                          return (
                            (function e(t, n) {
                              if (t.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (t.children.length !== n.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              n.value._futureSnapshot = t.value;
                              for (let r = 0; r < t.children.length; ++r)
                                e(t.children[r], n.children[r]);
                            })(n, e),
                            e
                          );
                        }
                        {
                          const r = new vf(
                              new Hm((i = n.value).url),
                              new Hm(i.params),
                              new Hm(i.queryParams),
                              new Hm(i.fragment),
                              new Hm(i.data),
                              i.outlet,
                              i.component,
                              i
                            ),
                            s = n.children.map(n => e(t, n));
                          return new gf(r, s);
                        }
                      }
                      var i;
                    })(e, t._root, n ? n._root : void 0);
                    return new bf(r, t);
                  })(
                    this.routeReuseStrategy,
                    e.targetSnapshot,
                    e.currentRouterState
                  );
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                Vu(e => {
                  (this.currentUrlTree = e.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      e.rawUrl
                    )),
                    (this.routerState = e.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (e.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!e.extras.replaceUrl,
                          e.id,
                          e.extras.state
                        ),
                      (this.browserUrlTree = e.urlAfterRedirects));
                }),
                Uf(this.rootContexts, this.routeReuseStrategy, e =>
                  this.triggerEvent(e)
                ),
                Vu({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  }
                }),
                Rd(() => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new pp(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(n), e.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                Od(n => {
                  if (
                    ((r = !0),
                    (function (e) {
                      return e && e[Mp];
                    })(n))
                  ) {
                    const r = Bf(n.url);
                    r ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      ));
                    const i = new pp(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n.message
                    );
                    t.next(i), e.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(
                      e.currentRouterState,
                      e.currentUrlTree,
                      e.rawUrl
                    );
                    const r = new fp(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n
                    );
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (i) {
                      e.reject(i);
                    }
                  }
                  return Ru;
                })
              );
            })
          );
        }
        resetRootComponentType(e) {
          (this.rootComponentType = e),
            (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const e = this.transitions.value;
          return (e.urlAfterRedirects = this.browserUrlTree), e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(e => {
              let t = this.parseUrl(e.url);
              const n = 'popstate' === e.type ? 'popstate' : 'hashchange',
                r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          Fp(e),
            (this.config = e.map(Up)),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(),
            (this.locationSubscription = null));
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: i,
            preserveQueryParams: s,
            queryParamsHandling: o,
            preserveFragment: l
          } = t;
          st() &&
            s &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          const a = n || this.routerState.root,
            u = l ? this.currentUrlTree.fragment : i;
          let c = null;
          if (o)
            switch (o) {
              case 'merge':
                c = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                c = this.currentUrlTree.queryParams;
                break;
              default:
                c = r || null;
            }
          else c = s ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== c && (c = this.removeEmptyProps(c)),
            (function (e, t, n, r, i) {
              if (0 === n.length) return Af(t.root, t.root, t, r, i);
              const s = (function (e) {
                if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
                  return new Of(!0, 0, e);
                let t = 0,
                  n = !1;
                const r = e.reduce((e, r, i) => {
                  if ('object' == typeof r && null != r) {
                    if (r.outlets) {
                      const t = {};
                      return (
                        Bp(r.outlets, (e, n) => {
                          t[n] = 'string' == typeof e ? e.split('/') : e;
                        }),
                        [...e, { outlets: t }]
                      );
                    }
                    if (r.segmentPath) return [...e, r.segmentPath];
                  }
                  return 'string' != typeof r
                    ? [...e, r]
                    : 0 === i
                    ? (r.split('/').forEach((r, i) => {
                        (0 == i && '.' === r) ||
                          (0 == i && '' === r
                            ? (n = !0)
                            : '..' === r
                            ? t++
                            : '' != r && e.push(r));
                      }),
                      e)
                    : [...e, r];
                }, []);
                return new Of(n, t, r);
              })(n);
              if (s.toRoot()) return Af(t.root, new Qp([], {}), t, r, i);
              const o = (function (e, t, n) {
                  if (e.isAbsolute) return new Pf(t.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex)
                    return new Pf(n.snapshot._urlSegment, !0, 0);
                  const r = If(e.commands[0]) ? 0 : 1;
                  return (function (e, t, n) {
                    let r = e,
                      i = t,
                      s = n;
                    for (; s > i; ) {
                      if (((s -= i), !(r = r.parent)))
                        throw new Error("Invalid number of '../'");
                      i = r.segments.length;
                    }
                    return new Pf(r, !1, i - s);
                  })(
                    n.snapshot._urlSegment,
                    n.snapshot._lastPathIndex + r,
                    e.numberOfDoubleDots
                  );
                })(s, t, e),
                l = o.processChildren
                  ? Nf(o.segmentGroup, o.index, s.commands)
                  : Rf(o.segmentGroup, o.index, s.commands);
              return Af(o.segmentGroup, l, t, r, i);
            })(a, this.currentUrlTree, e, c, u)
          );
        }
        navigateByUrl(e, t = { skipLocationChange: !1 }) {
          st() &&
            this.isNgZoneEnabled &&
            !ms.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const n = Bf(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, t);
        }
        navigate(e, t = { skipLocationChange: !1 }) {
          return (
            (function (e) {
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (null == n)
                  throw new Error(
                    `The requested path contains ${n} segment at index ${t}`
                  );
              }
            })(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (Bf(e)) return qp(this.currentUrlTree, e, t);
          const n = this.parseUrl(e);
          return qp(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            return null != r && (t[n] = r), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            e => {
              (this.navigated = !0),
                (this.lastSuccessfulId = e.id),
                this.events.next(
                  new mp(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                e.resolve(!0);
            },
            e => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const i = this.getTransition();
          if (
            i &&
            'imperative' !== t &&
            'imperative' === i.source &&
            i.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            i &&
            'hashchange' == t &&
            'popstate' === i.source &&
            i.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            i &&
            'popstate' == t &&
            'hashchange' === i.source &&
            i.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          let s = null,
            o = null;
          const l = new Promise((e, t) => {
              (s = e), (o = t);
            }),
            a = ++this.navigationId;
          return (
            this.setTransition({
              id: a,
              source: t,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: s,
              reject: o,
              promise: l,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            l.catch(e => Promise.reject(e))
          );
        }
        setBrowserUrl(e, t, n, r) {
          const i = this.urlSerializer.serialize(e);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(i) || t
              ? this.location.replaceState(
                  i,
                  '',
                  Object.assign({}, r, { navigationId: n })
                )
              : this.location.go(
                  i,
                  '',
                  Object.assign({}, r, { navigationId: n })
                );
        }
        resetStateAndUrl(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              n
            )),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            '',
            { navigationId: this.lastSuccessfulId }
          );
        }
      }
      class Mg {
        constructor(e, t, n) {
          (this.router = e),
            (this.route = t),
            (this.locationStrategy = n),
            (this.commands = []),
            (this.subscription = e.events.subscribe(e => {
              e instanceof mp && this.updateTargetUrlAndHref();
            }));
        }
        set routerLink(e) {
          this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
        }
        set preserveQueryParams(e) {
          st() &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            ),
            (this.preserve = e);
        }
        ngOnChanges(e) {
          this.updateTargetUrlAndHref();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        onClick(e, t, n, r) {
          if (0 !== e || t || n || r) return !0;
          if ('string' == typeof this.target && '_self' != this.target)
            return !0;
          const i = {
            skipLocationChange: Rg(this.skipLocationChange),
            replaceUrl: Rg(this.replaceUrl),
            state: this.state
          };
          return this.router.navigateByUrl(this.urlTree, i), !1;
        }
        updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(
            this.router.serializeUrl(this.urlTree)
          );
        }
        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: Rg(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: Rg(this.preserveFragment)
          });
        }
      }
      function Rg(e) {
        return '' === e || !!e;
      }
      class Ng {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Dg()),
            (this.attachRef = null);
        }
      }
      class Dg {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new Ng()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      class Fg {
        constructor(e, t, n, r, i) {
          (this.parentContexts = e),
            (this.location = t),
            (this.resolver = n),
            (this.changeDetector = i),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new Li()),
            (this.deactivateEvents = new Li()),
            (this.name = r || Ap),
            e.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const e = this.parentContexts.getContext(this.name);
            e &&
              e.route &&
              (e.attachRef
                ? this.attach(e.attachRef, e.route)
                : this.activateWith(e.route, e.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error('Outlet is not activated');
          this.location.detach();
          const e = this.activated;
          return (this.activated = null), (this._activatedRoute = null), e;
        }
        attach(e, t) {
          (this.activated = e),
            (this._activatedRoute = t),
            this.location.insert(e.hostView);
        }
        deactivate() {
          if (this.activated) {
            const e = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(e);
          }
        }
        activateWith(e, t) {
          if (this.isActivated)
            throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = e;
          const n = (t = t || this.resolver).resolveComponentFactory(
              e._futureSnapshot.routeConfig.component
            ),
            r = this.parentContexts.getOrCreateContext(this.name).children,
            i = new Lg(e, r, this.location.injector);
          (this.activated = this.location.createComponent(
            n,
            this.location.length,
            i
          )),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class Lg {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === vf
            ? this.route
            : e === Dg
            ? this.childContexts
            : this.parent.get(e, t);
        }
      }
      class Vg {}
      class Ug {
        preload(e, t) {
          return t().pipe(Od(() => Du(null)));
        }
      }
      class jg {
        preload(e, t) {
          return Du(null);
        }
      }
      class $g {
        constructor(e, t, n, r, i) {
          (this.router = e),
            (this.injector = r),
            (this.preloadingStrategy = i),
            (this.loader = new Eg(
              t,
              n,
              t => e.triggerEvent(new wp(t)),
              t => e.triggerEvent(new Cp(t))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              Zu(e => e instanceof mp),
              pd(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const e = this.injector.get(He);
          return this.processRoutes(e, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(e, t) {
          const n = [];
          for (const r of t)
            if (r.loadChildren && !r.canLoad && r._loadedConfig) {
              const e = r._loadedConfig;
              n.push(this.processRoutes(e.module, e.routes));
            } else
              r.loadChildren && !r.canLoad
                ? n.push(this.preloadConfig(e, r))
                : r.children && n.push(this.processRoutes(e, r.children));
          return G(n).pipe(
            Y(),
            z(e => void 0)
          );
        }
        preloadConfig(e, t) {
          return this.preloadingStrategy.preload(t, () =>
            this.loader
              .load(e.injector, t)
              .pipe(
                Q(
                  e => (
                    (t._loadedConfig = e),
                    this.processRoutes(e.module, e.routes)
                  )
                )
              )
          );
        }
      }
      class zg {
        constructor(e, t, n = {}) {
          (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration =
              n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof dp
              ? ((this.store[
                  this.lastId
                ] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState
                  ? e.restoredState.navigationId
                  : 0))
              : e instanceof mp &&
                ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.router.parseUrl(e.urlAfterRedirects).fragment
                ));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof Tp &&
              (e.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(
            new Tp(
              e,
              'popstate' === this.lastSource
                ? this.store[this.restoredId]
                : null,
              t
            )
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription &&
            this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription &&
              this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Bg = new Te('ROUTER_CONFIGURATION'),
        Hg = new Te('ROUTER_FORROOT_GUARD'),
        qg = [
          Ol,
          { provide: Yp, useClass: Xp },
          {
            provide: Pg,
            useFactory: Xg,
            deps: [
              Rs,
              Yp,
              Dg,
              Ol,
              Lt,
              Ds,
              ns,
              kg,
              Bg,
              [Sg, new ce()],
              [Cg, new ce()]
            ]
          },
          Dg,
          { provide: vf, useFactory: Jg, deps: [Pg] },
          { provide: Ds, useClass: js },
          $g,
          jg,
          Ug,
          { provide: Bg, useValue: { enableTracing: !1 } }
        ];
      function Gg() {
        return new Is('Router', Pg);
      }
      class Qg {
        constructor(e, t) {}
        static forRoot(e, t) {
          return {
            ngModule: Qg,
            providers: [
              qg,
              Yg(e),
              { provide: Hg, useFactory: Zg, deps: [[Pg, new ce(), new de()]] },
              { provide: Bg, useValue: t || {} },
              {
                provide: Il,
                useFactory: Kg,
                deps: [Sl, [new ue(Al), new ce()], Bg]
              },
              { provide: zg, useFactory: Wg, deps: [Pg, ia, Bg] },
              {
                provide: Vg,
                useExisting:
                  t && t.preloadingStrategy ? t.preloadingStrategy : jg
              },
              { provide: Is, multi: !0, useFactory: Gg },
              [
                e_,
                { provide: ji, multi: !0, useFactory: t_, deps: [e_] },
                { provide: r_, useFactory: n_, deps: [e_] },
                { provide: Qi, multi: !0, useExisting: r_ }
              ]
            ]
          };
        }
        static forChild(e) {
          return { ngModule: Qg, providers: [Yg(e)] };
        }
      }
      function Wg(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new zg(e, t, n);
      }
      function Kg(e, t, n = {}) {
        return n.useHash ? new Ml(e, t) : new Rl(e, t);
      }
      function Zg(e) {
        if (e)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function Yg(e) {
        return [
          { provide: Gt, multi: !0, useValue: e },
          { provide: kg, multi: !0, useValue: e }
        ];
      }
      function Xg(e, t, n, r, i, s, o, l, a = {}, u, c) {
        const h = new Pg(null, t, n, r, i, s, o, $p(l));
        if (
          (u && (h.urlHandlingStrategy = u),
          c && (h.routeReuseStrategy = c),
          a.errorHandler && (h.errorHandler = a.errorHandler),
          a.malformedUriErrorHandler &&
            (h.malformedUriErrorHandler = a.malformedUriErrorHandler),
          a.enableTracing)
        ) {
          const e = la();
          h.events.subscribe(t => {
            e.logGroup(`Router Event: ${t.constructor.name}`),
              e.log(t.toString()),
              e.log(t),
              e.logGroupEnd();
          });
        }
        return (
          a.onSameUrlNavigation &&
            (h.onSameUrlNavigation = a.onSameUrlNavigation),
          a.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
          a.urlUpdateStrategy && (h.urlUpdateStrategy = a.urlUpdateStrategy),
          a.relativeLinkResolution &&
            (h.relativeLinkResolution = a.relativeLinkResolution),
          h
        );
      }
      function Jg(e) {
        return e.routerState.root;
      }
      class e_ {
        constructor(e) {
          (this.injector = e),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new T());
        }
        appInitializer() {
          return this.injector.get(Tl, Promise.resolve(null)).then(() => {
            let e = null;
            const t = new Promise(t => (e = t)),
              n = this.injector.get(Pg),
              r = this.injector.get(Bg);
            if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
            else if ('disabled' === r.initialNavigation)
              n.setUpLocationChangeListener(), e(!0);
            else {
              if ('enabled' !== r.initialNavigation)
                throw new Error(
                  `Invalid initialNavigation options: '${r.initialNavigation}'`
                );
              (n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? Du(null)
                  : ((this.initNavigation = !0),
                    e(!0),
                    this.resultOfPreactivationDone)),
                n.initialNavigation();
            }
            return t;
          });
        }
        bootstrapListener(e) {
          const t = this.injector.get(Bg),
            n = this.injector.get($g),
            r = this.injector.get(zg),
            i = this.injector.get(Pg),
            s = this.injector.get(Rs);
          e === s.components[0] &&
            (this.isLegacyEnabled(t)
              ? i.initialNavigation()
              : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            i.resetRootComponentType(s.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(e) {
          return (
            'legacy_enabled' === e.initialNavigation ||
            !0 === e.initialNavigation ||
            void 0 === e.initialNavigation
          );
        }
        isLegacyDisabled(e) {
          return (
            'legacy_disabled' === e.initialNavigation ||
            !1 === e.initialNavigation
          );
        }
      }
      function t_(e) {
        return e.appInitializer.bind(e);
      }
      function n_(e) {
        return e.bootstrapListener.bind(e);
      }
      const r_ = new Te('Router Initializer');
      var i_ = ir({ encapsulation: 2, styles: [], data: {} });
      function s_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            di(1, 212992, null, 0, Fg, [Dg, Un, un, [8, null], Rt], null, null)
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function o_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'ng-component',
              [],
              null,
              null,
              null,
              s_,
              i_
            )),
            di(1, 49152, null, 0, Ip, [], null, null)
          ],
          null,
          null
        );
      }
      var l_ = zr('ng-component', Ip, o_, {}, {}, []);
      class a_ {
        constructor() {}
        ngOnInit() {}
      }
      var u_ = ir({
        encapsulation: 0,
        styles: [
          [
            'svg[_ngcontent-%COMP%]{width:26px;height:26px;fill:#fff;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);display:block}'
          ]
        ],
        data: {}
      });
      function c_(e) {
        return yo(
          2,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              16,
              ':svg:svg',
              [
                [':xml:space', 'preserve'],
                [':xmlns:xlink', 'http://www.w3.org/1999/xlink'],
                ['id', 'Layer_1'],
                ['style', 'enable-background:new 0 0 407.436 407.436;'],
                ['version', '1.1'],
                ['viewBox', '0 0 407.436 407.436'],
                ['x', '0px'],
                ['xmlns', 'http://www.w3.org/2000/svg'],
                ['y', '0px']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              0,
              ':svg:polygon',
              [
                [
                  'points',
                  '112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 '
                ]
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              2,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              4,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              5,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              6,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              7,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              8,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              9,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              10,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              11,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              12,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              13,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              14,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              15,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              16,
              0,
              null,
              null,
              0,
              ':svg:g',
              [],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      var h_ = ir({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{flex:1 0 auto;position:relative}.bottom[_nghost-%COMP%], .top[_nghost-%COMP%]{width:100%}.bottom[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .top[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;display:flex;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch}.bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%], .top[_nghost-%COMP%]   li[_ngcontent-%COMP%]{flex:1 0 auto}.bottom[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%], .bottom[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%], .top[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%], .top[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]{width:30px;height:100%;top:0}.bottom[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%], .top[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]{left:0}.bottom[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]   ngx-chevron-icon[_ngcontent-%COMP%], .top[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]   ngx-chevron-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.bottom[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%], .top[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%]{right:0}.left[_nghost-%COMP%], .right[_nghost-%COMP%]{height:100%}.left[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .right[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch}.left[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%], .left[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%], .right[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%], .right[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]{width:100%;height:30px}.left[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%], .right[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]{top:0}.left[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]   ngx-chevron-icon[_ngcontent-%COMP%], .right[_nghost-%COMP%]   .prev-thumbs[_ngcontent-%COMP%]   ngx-chevron-icon[_ngcontent-%COMP%]{transform:rotate(-90deg)}.left[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%], .right[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%]{bottom:0}.left[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%]   ngx-chevron-icon[_ngcontent-%COMP%], .right[_nghost-%COMP%]   .next-thumbs[_ngcontent-%COMP%]   ngx-chevron-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.bottom[_nghost-%COMP%], .right[_nghost-%COMP%]{order:1}ul[_ngcontent-%COMP%]{outline:0;scrollbar-width:none;-ms-overflow-style:none}ul[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}li[_ngcontent-%COMP%]{width:120px;height:80px;margin:1px;position:relative;cursor:pointer}img[_ngcontent-%COMP%]{width:100%;height:100%;background-repeat:no-repeat;background-position:center;-o-object-fit:cover;object-fit:cover}.error[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background:#222}.error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:20px;height:20px;border:2px solid #716f6f;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:600;color:#716f6f}.next-thumbs[_ngcontent-%COMP%], .prev-thumbs[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.5);padding:0;overflow:hidden;outline:0;cursor:pointer;z-index:10;opacity:.7}@media (hover:hover) and (pointer:fine){.next-thumbs[_ngcontent-%COMP%]:hover, .prev-thumbs[_ngcontent-%COMP%]:hover{opacity:1}}'
          ]
        ],
        data: {}
      });
      function d_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              2,
              'button',
              [
                ['aria-hidden', 'true'],
                ['class', 'prev-thumbs']
              ],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== e.component.slide(-1) && r), r
                );
              },
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              1,
              'ngx-chevron-icon',
              [],
              null,
              null,
              null,
              c_,
              u_
            )),
            di(2, 114688, null, 0, a_, [], null, null)
          ],
          function (e, t) {
            e(t, 2, 0);
          },
          null
        );
      }
      function m_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, d_)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, !n.prevArrowTemplate, n.prevArrowTemplate);
          },
          null
        );
      }
      function p_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 0, 'li', [], null, null, null, null, null))
          ],
          null,
          null
        );
      }
      function f_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'error']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'icon']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['!']))
          ],
          null,
          null
        );
      }
      function g_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, f_)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, !n.thumbErrorTemplate, n.thumbErrorTemplate);
          },
          null
        );
      }
      function __(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 3, null, null, null, null, null, null, null)),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              0,
              'img',
              [],
              [
                [8, 'src', 4],
                [8, 'alt', 0]
              ],
              [[null, 'error']],
              function (e, t, n) {
                var r = !0;
                return (
                  'error' === t &&
                    (r =
                      !1 !==
                        e.component.onItemErrored(e.parent.context.$implicit) &&
                      r),
                  r
                );
              },
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, g_)),
            di(3, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            e(t, 3, 0, t.parent.context.$implicit._thumbFailed);
          },
          function (e, t) {
            e(
              t,
              1,
              0,
              t.parent.context.$implicit.thumbSrc ||
                t.parent.context.$implicit.src,
              t.parent.context.$implicit.alt
            );
          }
        );
      }
      function b_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 0, null, null, null, null, null, null, null))
          ],
          null,
          null
        );
      }
      function y_(e) {
        return yo(
          0,
          [
            (e()(), eo(16777216, null, null, 2, null, b_)),
            di(
              1,
              540672,
              null,
              0,
              Wl,
              [Un],
              {
                ngTemplateOutletContext: [0, 'ngTemplateOutletContext'],
                ngTemplateOutlet: [1, 'ngTemplateOutlet']
              },
              null
            ),
            po(2, { index: 0, selectedIndex: 1, item: 2 }),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component,
              r = e(
                t,
                2,
                0,
                t.parent.context.index,
                n.selectedIndex,
                t.parent.context.$implicit
              );
            e(t, 1, 0, r, n.thumbTemplate);
          },
          null
        );
      }
      function v_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              3,
              'li',
              [['aria-hidden', 'true']],
              [[2, 'selected', null]],
              [
                [null, 'click'],
                [null, 'mouseenter']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'click' === t &&
                    (r =
                      !1 !== i.emitEvent(e.context.index, n, i.thumbClick) &&
                      r),
                  'mouseenter' === t &&
                    (r =
                      !1 !== i.emitEvent(e.context.index, n, i.thumbHover) &&
                      r),
                  r
                );
              },
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, __)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, [['customThumbTemplate', 2]], null, 0, null, y_))
          ],
          function (e, t) {
            e(t, 2, 0, !t.component.thumbTemplate, Jr(t, 3));
          },
          function (e, t) {
            e(t, 0, 0, t.context.index === t.component.selectedIndex);
          }
        );
      }
      function w_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              2,
              'button',
              [
                ['aria-hidden', 'true'],
                ['class', 'next-thumbs']
              ],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== e.component.slide(1) && r), r
                );
              },
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              1,
              'ngx-chevron-icon',
              [],
              null,
              null,
              null,
              c_,
              u_
            )),
            di(2, 114688, null, 0, a_, [], null, null)
          ],
          function (e, t) {
            e(t, 2, 0);
          },
          null
        );
      }
      function C_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, w_)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, !n.nextArrowTemplate, n.nextArrowTemplate);
          },
          null
        );
      }
      function x_(e) {
        return yo(
          2,
          [
            oo(402653184, 1, { thumbListRef: 0 }),
            (e()(), eo(16777216, null, null, 1, null, m_)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            to(
              3,
              0,
              [
                [1, 0],
                ['thumbs', 1]
              ],
              null,
              4,
              'ul',
              [['tabindex', '0']],
              [
                [4, 'scrollBehavior', null],
                [1, 'aria-label', 0]
              ],
              null,
              null,
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, p_)),
            di(5, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, v_)),
            di(
              7,
              278528,
              null,
              0,
              jl,
              [Un, Ln, Mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(), eo(16777216, null, null, 1, null, C_)),
            di(9, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.showStartArrow),
              e(t, 5, 0, !n.items || !n.items.length),
              e(t, 7, 0, n.items),
              e(t, 9, 0, n.showEndArrow);
          },
          function (e, t) {
            var n = t.component;
            e(
              t,
              3,
              0,
              n.scrollBehavior,
              null == n.aria ? null : n.aria.thumbnailsLabel
            );
          }
        );
      }
      class k_ {}
      var E_ = ir({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{position:absolute;left:50%;transform:translateX(-50%);background:#222;padding:2px 5px;color:#e3e3e3;opacity:.8;font-size:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 0 2px #000}.top[_nghost-%COMP%]{top:0}.bottom[_nghost-%COMP%]{bottom:0}.delimiter[_ngcontent-%COMP%]{padding:0 1px}'
          ]
        ],
        data: {}
      });
      function S_(e) {
        return yo(
          2,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              4,
              'span',
              [['aria-hidden', 'true']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(1, null, [' ', ''])),
            (e()(),
            to(
              2,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'delimiter']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['/'])),
            (e()(), go(4, null, ['', ' ']))
          ],
          null,
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n.selectedIndex + 1), e(t, 4, 0, n.itemQuantity || 0);
          }
        );
      }
      class T_ {
        constructor(e) {
          this.sanitizer = e;
        }
        transform(e) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(e);
        }
      }
      var I_ = ir({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:block;position:relative;width:100%;height:100%;overflow:hidden;outline:0}ul[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;transition:transform .4s;scrollbar-width:none;-ms-overflow-style:none}ul[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}li[_ngcontent-%COMP%]{display:flex;align-items:center;flex:none;position:relative;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0}li[_ngcontent-%COMP%]   .aria-description[_ngcontent-%COMP%]{opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-1;position:absolute;bottom:0;left:50%;transform:translateX(-50%)}iframe[_ngcontent-%COMP%], img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{width:100%;height:100%;background-color:transparent;transition:opacity .3s ease-out;outline:0}iframe[src=""][_ngcontent-%COMP%], img[src=""][_ngcontent-%COMP%], video[src=""][_ngcontent-%COMP%]{opacity:0}iframe.loading[_ngcontent-%COMP%], img.loading[_ngcontent-%COMP%], video.loading[_ngcontent-%COMP%]{opacity:.5}img[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.description-container[_ngcontent-%COMP%]{position:absolute;bottom:5px;width:100%;display:flex;justify-content:center}.description-container.above-counter[_ngcontent-%COMP%]{bottom:35px}.description[_ngcontent-%COMP%]{display:inline-block;background:#222;opacity:.8;color:#e3e3e3;padding:6px 15px;letter-spacing:.02em;max-width:80%;box-shadow:0 0 2px #000;text-align:center}.error[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background:#222;color:#e3e3e3}.error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:40px;height:40px;border:4px solid #dc3d3d;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:38px;font-weight:600;color:#dc3d3d}.error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-top:20px;letter-spacing:.04em}ngx-chevron-icon[_ngcontent-%COMP%]{display:flex;position:absolute;box-sizing:border-box;top:50%;transform:translateY(-50%);z-index:100;padding:15px 6px;cursor:pointer;opacity:.6}@media (hover:hover) and (pointer:fine){ngx-chevron-icon[_ngcontent-%COMP%]:hover{opacity:1}}ngx-chevron-icon.prev[_ngcontent-%COMP%]{left:0;transform:rotate(180deg) translateY(50%)}ngx-chevron-icon.next[_ngcontent-%COMP%]{right:0}ngx-chevron-icon[_ngcontent-%COMP%]  svg{height:32px;width:32px}'
          ]
        ],
        data: {}
      });
      function A_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'ngx-chevron-icon',
              [['class', 'prev']],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.prev() && r), r;
              },
              c_,
              u_
            )),
            di(1, 114688, null, 0, a_, [], null, null)
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function O_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, A_)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, !n.prevArrowTemplate, n.prevArrowTemplate);
          },
          null
        );
      }
      function P_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              0,
              'li',
              [['class', 'initial-item']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      function M_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              0,
              'img',
              [],
              [
                [8, 'src', 4],
                [8, 'alt', 0],
                [2, 'loading', null],
                [4, 'objectFit', null]
              ],
              [
                [null, 'load'],
                [null, 'error']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'load' === t &&
                    (r =
                      !1 !==
                        i.onItemLoaded(
                          e.parent.parent.parent.context.$implicit,
                          n
                        ) && r),
                  'error' === t &&
                    (r =
                      !1 !==
                        i.onItemErrored(
                          e.parent.parent.parent.context.$implicit,
                          n
                        ) && r),
                  r
                );
              },
              null,
              null
            ))
          ],
          null,
          function (e, t) {
            e(
              t,
              0,
              0,
              t.parent.context.$implicit,
              t.parent.parent.parent.context.$implicit.alt,
              t.parent.parent.parent.context.$implicit._seen &&
                !t.parent.parent.parent.context.$implicit._loaded,
              t.component.objectFit
            );
          }
        );
      }
      function R_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              0,
              'video',
              [
                ['controls', ''],
                ['playsinline', '']
              ],
              [
                [8, 'src', 4],
                [8, 'poster', 4],
                [2, 'loading', null],
                [4, 'objectFit', null]
              ],
              [
                [null, 'loadedmetadata'],
                [null, 'error']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'loadedmetadata' === t &&
                    (r =
                      !1 !==
                        i.onItemLoaded(
                          e.parent.parent.parent.context.$implicit,
                          n
                        ) && r),
                  'error' === t &&
                    (r =
                      !1 !==
                        i.onItemErrored(
                          e.parent.parent.parent.context.$implicit,
                          n
                        ) && r),
                  r
                );
              },
              null,
              null
            ))
          ],
          null,
          function (e, t) {
            e(
              t,
              0,
              0,
              t.parent.context.$implicit,
              t.parent.parent.parent.context.$implicit.thumbSrc,
              t.parent.parent.parent.context.$implicit._seen &&
                !t.parent.parent.parent.context.$implicit._loaded,
              t.component.objectFit
            );
          }
        );
      }
      function N_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'iframe',
              [
                [
                  'allow',
                  'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                ],
                ['allowfullscreen', ''],
                ['frameborder', '0']
              ],
              [[8, 'src', 5]],
              [[null, 'load']],
              function (e, t, n) {
                var r = !0;
                return (
                  'load' === t &&
                    (r =
                      !1 !==
                        e.component.onItemLoaded(
                          e.parent.parent.parent.context.$implicit,
                          n
                        ) && r),
                  r
                );
              },
              null,
              null
            )),
            fo(128, 1, new Array(2))
          ],
          null,
          function (e, t) {
            var n = tr(
              t,
              0,
              0,
              e(
                t,
                1,
                0,
                Jr(t.parent.parent.parent.parent, 0),
                t.parent.context.$implicit
              )
            );
            e(t, 0, 0, n);
          }
        );
      }
      function D_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 6, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, M_)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, R_)),
            di(4, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, N_)),
            di(6, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              2,
              0,
              !n.isYoutube(t.parent.parent.context.$implicit) &&
                !t.parent.parent.context.$implicit.video
            ),
              e(
                t,
                4,
                0,
                !n.isYoutube(t.parent.parent.context.$implicit) &&
                  t.parent.parent.context.$implicit.video
              ),
              e(t, 6, 0, n.isYoutube(t.parent.parent.context.$implicit));
          },
          null
        );
      }
      function F_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 0, null, null, null, null, null, null, null))
          ],
          null,
          null
        );
      }
      function L_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, F_)),
            di(
              2,
              540672,
              null,
              0,
              Wl,
              [Un],
              { ngTemplateOutlet: [0, 'ngTemplateOutlet'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            e(t, 2, 0, t.component.loadingTemplate);
          },
          null
        );
      }
      function V_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'error']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'icon']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['!'])),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'text']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(4, null, [' ', ' ']))
          ],
          null,
          function (e, t) {
            e(t, 4, 0, t.component.errorText || 'Loading of this media failed');
          }
        );
      }
      function U_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, V_)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            e(t, 2, 0, t.parent.parent.context.$implicit._failed);
          },
          null
        );
      }
      function j_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 6, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, D_)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, L_)),
            di(4, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, U_)),
            di(
              6,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.getSrc(t.parent.context.$implicit)),
              e(
                t,
                4,
                0,
                t.parent.context.$implicit._seen &&
                  !t.parent.context.$implicit._loaded &&
                  !t.parent.context.$implicit._failed
              ),
              e(t, 6, 0, !n.errorTemplate, n.errorTemplate);
          },
          null
        );
      }
      function $_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 0, null, null, null, null, null, null, null))
          ],
          null,
          null
        );
      }
      function z_(e) {
        return yo(
          0,
          [
            (e()(), eo(16777216, null, null, 2, null, $_)),
            di(
              1,
              540672,
              null,
              0,
              Wl,
              [Un],
              {
                ngTemplateOutletContext: [0, 'ngTemplateOutletContext'],
                ngTemplateOutlet: [1, 'ngTemplateOutlet']
              },
              null
            ),
            po(2, { index: 0, selectedIndex: 1, item: 2, seen: 3 }),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component,
              r = e(
                t,
                2,
                0,
                t.parent.context.index,
                n.selectedIndex,
                t.parent.context.$implicit,
                t.parent.context.$implicit._seen
              );
            e(t, 1, 0, r, n.itemTemplate);
          },
          null
        );
      }
      function B_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              [
                [2, 0],
                ['items', 1]
              ],
              null,
              4,
              'li',
              [['tabindex', '0']],
              [
                [2, 'selected', null],
                [1, 'aria-label', 0],
                [1, 'aria-describedby', 0]
              ],
              [
                [null, 'click'],
                [null, 'dragstart'],
                [null, 'keydown.Tab'],
                [null, 'keydown.shift.Tab']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'click' === t &&
                    (r = !1 !== i.onImageClick(e.context.$implicit, n) && r),
                  'dragstart' === t && (r = !1 !== i.onDragstart(n) && r),
                  'keydown.Tab' === t &&
                    (r = !1 !== i.onTab(e.context.index + 1) && r),
                  'keydown.shift.Tab' === t &&
                    (r = !1 !== i.onTab(e.context.index - 1) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, j_)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              0,
              'span',
              [
                ['aria-hidden', 'true'],
                ['class', 'aria-description']
              ],
              [
                [8, 'id', 0],
                [8, 'innerHTML', 1]
              ],
              null,
              null,
              null,
              null
            )),
            (e()(), eo(0, [['customTemplate', 2]], null, 0, null, z_))
          ],
          function (e, t) {
            e(t, 2, 0, !t.component.itemTemplate, Jr(t, 4));
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              t.context.index === t.component.selectedIndex,
              t.context.$implicit.alt,
              'imgr-desc-' + t.context.index
            ),
              e(
                t,
                3,
                0,
                'imgr-desc-' + t.context.index,
                t.context.$implicit.description
              );
          }
        );
      }
      function H_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'ngx-chevron-icon',
              [['class', 'next']],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.next() && r), r;
              },
              c_,
              u_
            )),
            di(1, 114688, null, 0, a_, [], null, null)
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function q_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, H_)),
            di(
              2,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, !n.nextArrowTemplate, n.nextArrowTemplate);
          },
          null
        );
      }
      function G_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'ngx-image-counter',
              [],
              [[8, 'className', 0]],
              null,
              null,
              S_,
              E_
            )),
            di(
              1,
              49152,
              null,
              0,
              k_,
              [],
              {
                itemQuantity: [0, 'itemQuantity'],
                selectedIndex: [1, 'selectedIndex'],
                orientation: [2, 'orientation']
              },
              null
            )
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              null == n.items ? null : n.items.length,
              n.selectedIndex,
              n.imageCounterOrientation
            );
          },
          function (e, t) {
            e(t, 0, 0, Jr(t, 1).orientation);
          }
        );
      }
      function Q_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'description']],
              [[8, 'innerHTML', 1]],
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.descriptionClick.emit(n) && r),
                  r
                );
              },
              null,
              null
            ))
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.context.ngIf);
          }
        );
      }
      function W_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              2,
              'div',
              [
                ['aria-hidden', 'true'],
                ['class', 'description-container']
              ],
              [[2, 'above-counter', null]],
              null,
              null,
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, Q_)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              2,
              0,
              null == n.items[n.selectedIndex]
                ? null
                : n.items[n.selectedIndex].description
            );
          },
          function (e, t) {
            e(t, 0, 0, 'bottom' === t.component.imageCounterOrientation);
          }
        );
      }
      function K_(e) {
        return yo(
          2,
          [
            mi(0, T_, [cu]),
            oo(402653184, 1, { itemListRef: 0 }),
            oo(671088640, 2, { itemsRef: 1 }),
            (e()(), eo(16777216, null, null, 1, null, O_)),
            di(4, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            to(
              5,
              0,
              [
                [1, 0],
                ['itemList', 1]
              ],
              null,
              4,
              'ul',
              [],
              [[1, 'aria-label', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, P_)),
            di(7, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, B_)),
            di(
              9,
              278528,
              null,
              0,
              jl,
              [Un, Ln, Mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(), eo(16777216, null, null, 1, null, q_)),
            di(11, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, G_)),
            di(13, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, W_)),
            di(15, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (e, t) {
            var n = t.component;
            e(t, 4, 0, n.showPrevArrow),
              e(t, 7, 0, !(null != n.items && n.items.length)),
              e(t, 9, 0, n.items),
              e(t, 11, 0, n.showNextArrow),
              e(
                t,
                13,
                0,
                n.imageCounter && (null == n.items ? null : n.items.length)
              ),
              e(t, 15, 0, n.descriptions && n.items);
          },
          function (e, t) {
            var n = t.component;
            e(t, 5, 0, null == n.aria ? null : n.aria.viewerLabel);
          }
        );
      }
      var Z_ = ir({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:flex;height:500px;width:500px;outline:0;position:relative}.column[_nghost-%COMP%]{flex-direction:column}[_nghost-%COMP%] {font-family:Helvetica Neue,Helvetica,Arial,sans-serif}[_nghost-%COMP%]  button{border:none}[_nghost-%COMP%]  ul{list-style-type:none;margin:0;padding:0}ngx-image-viewer[_ngcontent-%COMP%]{z-index:1}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%], ngx-image-viewer[_ngcontent-%COMP%]  .loading{display:flex;justify-content:center;align-items:center;color:#fff;position:absolute;width:100%;height:100%;left:0;top:0;background-color:transparent}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], ngx-image-viewer[_ngcontent-%COMP%]  .loading .spinner{width:60px;height:62px;max-width:100%;border-radius:100%;background:#ececec;-webkit-animation:1s infinite rotate;animation:1s infinite rotate}.initial-item   [_nghost-%COMP%]   .loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], .initial-item[_ngcontent-%COMP%]   ngx-image-viewer[_ngcontent-%COMP%]  .loading .spinner{-webkit-animation:1s infinite rotate,1s ease-in fadein;animation:1s infinite rotate,1s ease-in fadein}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]::after, ngx-image-viewer[_ngcontent-%COMP%]  .loading .spinner::after{content:"";display:block;background-color:#222;width:16px;height:16px;margin-left:10px;margin-top:10px;border-radius:100%}@-webkit-keyframes rotate{from{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes rotate{from{transform:rotate(0)}to{transform:rotate(359deg)}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}'
          ]
        ],
        data: {}
      });
      function Y_(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'ngx-thumbnails',
              [],
              [[8, 'className', 0]],
              [
                [null, 'thumbClick'],
                [null, 'thumbHover']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'thumbClick' === t && (r = !1 !== i.onThumbClick(n) && r),
                  'thumbHover' === t &&
                    (r = !1 !== i._emitEvent(n, i.thumbHover) && r),
                  r
                );
              },
              x_,
              h_
            )),
            di(
              1,
              4964352,
              [[2, 4]],
              0,
              Vm,
              [Rt, mn],
              {
                items: [0, 'items'],
                selectedIndex: [1, 'selectedIndex'],
                aria: [2, 'aria'],
                orientation: [3, 'orientation'],
                arrows: [4, 'arrows'],
                arrowSlideByLength: [5, 'arrowSlideByLength'],
                autoScroll: [6, 'autoScroll'],
                scrollBehavior: [7, 'scrollBehavior'],
                thumbTemplate: [8, 'thumbTemplate'],
                thumbErrorTemplate: [9, 'thumbErrorTemplate'],
                prevArrowTemplate: [10, 'prevArrowTemplate'],
                nextArrowTemplate: [11, 'nextArrowTemplate']
              },
              { thumbClick: 'thumbClick', thumbHover: 'thumbHover' }
            )
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 1, [
              n._internalItems,
              n.selectedIndex,
              n.aria,
              n.thumbsOrientation,
              n.thumbsArrows,
              n.thumbsArrowSlideByLength,
              n.thumbsAutoScroll,
              n.thumbsScrollBehavior,
              n.thumbTemplate,
              n.thumbErrorTemplate,
              n.prevThumbsArrowTemplate,
              n.nextThumbsArrowTemplate
            ]);
          },
          function (e, t) {
            e(t, 0, 0, Jr(t, 1).orientation);
          }
        );
      }
      function X_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 0, null, null, null, null, null, null, null))
          ],
          null,
          null
        );
      }
      function J_(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 2, null, null, null, null, null, null, null)),
            (e()(), eo(16777216, null, null, 1, null, X_)),
            di(
              2,
              540672,
              null,
              0,
              Wl,
              [Un],
              { ngTemplateOutlet: [0, 'ngTemplateOutlet'] },
              null
            ),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            e(t, 2, 0, t.component.loadingTemplate || Jr(t.parent, 9));
          },
          null
        );
      }
      function eb(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'loading']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'spinner']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      function tb(e) {
        return yo(
          2,
          [
            oo(671088640, 1, { imageViewer: 0 }),
            oo(671088640, 2, { thumbnails: 0 }),
            oo(671088640, 3, { imageViewerEl: 0 }),
            (e()(), eo(16777216, null, null, 1, null, Y_)),
            di(4, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            to(
              5,
              0,
              [[3, 0]],
              null,
              1,
              'ngx-image-viewer',
              [['tabindex', '0']],
              null,
              [
                [null, 'imageClick'],
                [null, 'descriptionClick'],
                [null, 'selection'],
                [null, 'mousedown'],
                [null, 'touchstart']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'mousedown' === t &&
                    (r = !1 !== Jr(e, 6).onInteraction() && r),
                  'touchstart' === t &&
                    (r = !1 !== Jr(e, 6).onInteraction() && r),
                  'imageClick' === t &&
                    (r = !1 !== i._emitEvent(n, i.imageClick) && r),
                  'descriptionClick' === t &&
                    (r = !1 !== i.descriptionClick.emit(n) && r),
                  'selection' === t &&
                    (i._selectInternal(n),
                    (r =
                      !1 !==
                        (null == i.thumbnails
                          ? null
                          : i.thumbnails.select(n)) && r)),
                  r
                );
              },
              K_,
              I_
            )),
            di(
              6,
              770048,
              [[1, 4]],
              0,
              Om,
              [mn, Rt, ms],
              {
                items: [0, 'items'],
                arrows: [1, 'arrows'],
                selectedIndex: [2, 'selectedIndex'],
                descriptions: [3, 'descriptions'],
                errorText: [4, 'errorText'],
                mouseGestures: [5, 'mouseGestures'],
                touchGestures: [6, 'touchGestures'],
                imageCounter: [7, 'imageCounter'],
                imageCounterOrientation: [8, 'imageCounterOrientation'],
                loading: [9, 'loading'],
                loop: [10, 'loop'],
                objectFit: [11, 'objectFit'],
                itemTemplate: [12, 'itemTemplate'],
                loadingTemplate: [13, 'loadingTemplate'],
                errorTemplate: [14, 'errorTemplate'],
                prevArrowTemplate: [15, 'prevArrowTemplate'],
                nextArrowTemplate: [16, 'nextArrowTemplate'],
                thumbsOrientation: [17, 'thumbsOrientation'],
                aria: [18, 'aria']
              },
              {
                imageClick: 'imageClick',
                descriptionClick: 'descriptionClick',
                selection: 'selection'
              }
            ),
            (e()(), eo(16777216, null, null, 1, null, J_)),
            di(8, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(0, [['defaultLoadingTemplate', 2]], null, 0, null, eb))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 4, 0, n.thumbs),
              e(t, 6, 1, [
                n._internalItems,
                n.arrows,
                n.selectedIndex,
                n.descriptions,
                n.errorText,
                n.mouseGestures,
                n.touchGestures,
                n.imageCounter,
                n.imageCounterOrientation,
                n.loading,
                n.loop,
                n.objectFit,
                n.itemTemplate,
                n.loadingTemplate || Jr(t, 9),
                n.errorTemplate,
                n.prevArrowTemplate,
                n.nextArrowTemplate,
                n.thumbsOrientationFlag,
                n.aria
              ]),
              e(
                t,
                8,
                0,
                !(null != n._internalItems && n._internalItems.length)
              );
          },
          null
        );
      }
      const nb = new Te('cdk-dir-doc', {
        providedIn: 'root',
        factory: function () {
          return $e(ta);
        }
      });
      let rb = (() => {
        class e {
          constructor(e) {
            if (((this.value = 'ltr'), (this.change = new Li()), e)) {
              const t = e.documentElement ? e.documentElement.dir : null,
                n = (e.body ? e.body.dir : null) || t;
              this.value = 'ltr' === n || 'rtl' === n ? n : 'ltr';
            }
          }
          ngOnDestroy() {
            this.change.complete();
          }
        }
        return (
          (e.ngInjectableDef = fe({
            factory: function () {
              return new e(je(nb, 8));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      class ib {}
      var sb = ir({
        encapsulation: 2,
        styles: [
          '.mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}'
        ],
        data: {}
      });
      function ob(e) {
        return yo(2, [ho(null, 0)], null, null);
      }
      let lb = (() => {
          class e {
            create(e) {
              return 'undefined' == typeof MutationObserver
                ? null
                : new MutationObserver(e);
            }
          }
          return (
            (e.ngInjectableDef = fe({
              factory: function () {
                return new e();
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        ab = (() => {
          class e {
            constructor(e) {
              (this._mutationObserverFactory = e),
                (this._observedElements = new Map());
            }
            ngOnDestroy() {
              this._observedElements.forEach((e, t) =>
                this._cleanupObserver(t)
              );
            }
            observe(e) {
              const t = xu(e);
              return new w(e => {
                const n = this._observeElement(t).subscribe(e);
                return () => {
                  n.unsubscribe(), this._unobserveElement(t);
                };
              });
            }
            _observeElement(e) {
              if (this._observedElements.has(e))
                this._observedElements.get(e).count++;
              else {
                const t = new T(),
                  n = this._mutationObserverFactory.create(e => t.next(e));
                n &&
                  n.observe(e, {
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                  }),
                  this._observedElements.set(e, {
                    observer: n,
                    stream: t,
                    count: 1
                  });
              }
              return this._observedElements.get(e).stream;
            }
            _unobserveElement(e) {
              this._observedElements.has(e) &&
                (this._observedElements.get(e).count--,
                this._observedElements.get(e).count ||
                  this._cleanupObserver(e));
            }
            _cleanupObserver(e) {
              if (this._observedElements.has(e)) {
                const { observer: t, stream: n } = this._observedElements.get(
                  e
                );
                t && t.disconnect(),
                  n.complete(),
                  this._observedElements.delete(e);
              }
            }
          }
          return (
            (e.ngInjectableDef = fe({
              factory: function () {
                return new e(je(lb));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })();
      class ub {
        constructor(e, t, n) {
          (this._contentObserver = e),
            (this._elementRef = t),
            (this._ngZone = n),
            (this.event = new Li()),
            (this._disabled = !1),
            (this._currentSubscription = null);
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          (this._disabled = Cu(e)),
            this._disabled ? this._unsubscribe() : this._subscribe();
        }
        get debounce() {
          return this._debounce;
        }
        set debounce(e) {
          (this._debounce = (function (e, t = 0) {
            return (function (e) {
              return !isNaN(parseFloat(e)) && !isNaN(Number(e));
            })(e)
              ? Number(e)
              : t;
          })(e)),
            this._subscribe();
        }
        ngAfterContentInit() {
          this._currentSubscription || this.disabled || this._subscribe();
        }
        ngOnDestroy() {
          this._unsubscribe();
        }
        _subscribe() {
          this._unsubscribe();
          const e = this._contentObserver.observe(this._elementRef);
          this._ngZone.runOutsideAngular(() => {
            this._currentSubscription = (this.debounce
              ? e.pipe(Gu(this.debounce))
              : e
            ).subscribe(this.event);
          });
        }
        _unsubscribe() {
          this._currentSubscription && this._currentSubscription.unsubscribe();
        }
      }
      class cb {}
      function hb() {
        return 'undefined' != typeof process;
      }
      function db(e) {
        switch (e.length) {
          case 0:
            return new Yh();
          case 1:
            return e[0];
          default:
            return new Xh(e);
        }
      }
      function mb(e, t, n, r, i = {}, s = {}) {
        const o = [],
          l = [];
        let a = -1,
          u = null;
        if (
          (r.forEach(e => {
            const n = e.offset,
              r = n == a,
              c = (r && u) || {};
            Object.keys(e).forEach(n => {
              let r = n,
                l = e[n];
              if ('offset' !== n)
                switch (((r = t.normalizePropertyName(r, o)), l)) {
                  case Jh:
                    l = i[n];
                    break;
                  case Qh:
                    l = s[n];
                    break;
                  default:
                    l = t.normalizeStyleValue(n, r, l, o);
                }
              c[r] = l;
            }),
              r || l.push(c),
              (u = c),
              (a = n);
          }),
          o.length)
        ) {
          const e = '\n - ';
          throw new Error(
            `Unable to animate due to the following errors:${e}${o.join(e)}`
          );
        }
        return l;
      }
      function pb(e, t, n, r) {
        switch (t) {
          case 'start':
            e.onStart(() => r(n && fb(n, 'start', e)));
            break;
          case 'done':
            e.onDone(() => r(n && fb(n, 'done', e)));
            break;
          case 'destroy':
            e.onDestroy(() => r(n && fb(n, 'destroy', e)));
        }
      }
      function fb(e, t, n) {
        const r = n.totalTime,
          i = gb(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            t || e.phaseName,
            null == r ? e.totalTime : r,
            !!n.disabled
          ),
          s = e._data;
        return null != s && (i._data = s), i;
      }
      function gb(e, t, n, r, i = '', s = 0, o) {
        return {
          element: e,
          triggerName: t,
          fromState: n,
          toState: r,
          phaseName: i,
          totalTime: s,
          disabled: !!o
        };
      }
      function _b(e, t, n) {
        let r;
        return (
          e instanceof Map
            ? (r = e.get(t)) || e.set(t, (r = n))
            : (r = e[t]) || (r = e[t] = n),
          r
        );
      }
      function bb(e) {
        const t = e.indexOf(':');
        return [e.substring(1, t), e.substr(t + 1)];
      }
      let yb = (e, t) => !1,
        vb = (e, t) => !1,
        wb = (e, t, n) => [];
      const Cb = hb();
      (Cb || 'undefined' != typeof Element) &&
        ((yb = (e, t) => e.contains(t)),
        (vb = (() => {
          if (Cb || Element.prototype.matches) return (e, t) => e.matches(t);
          {
            const e = Element.prototype,
              t =
                e.matchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector ||
                e.oMatchesSelector ||
                e.webkitMatchesSelector;
            return t ? (e, n) => t.apply(e, [n]) : vb;
          }
        })()),
        (wb = (e, t, n) => {
          let r = [];
          if (n) r.push(...e.querySelectorAll(t));
          else {
            const n = e.querySelector(t);
            n && r.push(n);
          }
          return r;
        }));
      let xb = null,
        kb = !1;
      function Eb(e) {
        xb ||
          ((xb = ('undefined' != typeof document ? document.body : null) || {}),
          (kb = !!xb.style && 'WebkitAppearance' in xb.style));
        let t = !0;
        return (
          xb.style &&
            !(function (e) {
              return 'ebkit' == e.substring(1, 6);
            })(e) &&
            !(t = e in xb.style) &&
            kb &&
            (t =
              'Webkit' + e.charAt(0).toUpperCase() + e.substr(1) in xb.style),
          t
        );
      }
      const Sb = vb,
        Tb = yb,
        Ib = wb;
      function Ab(e) {
        const t = {};
        return (
          Object.keys(e).forEach(n => {
            const r = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            t[r] = e[n];
          }),
          t
        );
      }
      class Ob {
        validateStyleProperty(e) {
          return Eb(e);
        }
        matchesElement(e, t) {
          return Sb(e, t);
        }
        containsElement(e, t) {
          return Tb(e, t);
        }
        query(e, t, n) {
          return Ib(e, t, n);
        }
        computeStyle(e, t, n) {
          return n || '';
        }
        animate(e, t, n, r, i, s = [], o) {
          return new Yh(n, r);
        }
      }
      let Pb = (() => {
        class e {}
        return (e.NOOP = new Ob()), e;
      })();
      const Mb = 1e3,
        Rb = '{{',
        Nb = 'ng-enter',
        Db = 'ng-leave',
        Fb = 'ng-trigger',
        Lb = '.ng-trigger',
        Vb = 'ng-animating',
        Ub = '.ng-animating';
      function jb(e) {
        if ('number' == typeof e) return e;
        const t = e.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : $b(parseFloat(t[1]), t[2]);
      }
      function $b(e, t) {
        switch (t) {
          case 's':
            return e * Mb;
          default:
            return e;
        }
      }
      function zb(e, t, n) {
        return e.hasOwnProperty('duration')
          ? e
          : (function (e, t, n) {
              let r,
                i = 0,
                s = '';
              if ('string' == typeof e) {
                const n = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    t.push(`The provided timing value "${e}" is invalid.`),
                    { duration: 0, delay: 0, easing: '' }
                  );
                r = $b(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (i = $b(parseFloat(o), n[4]));
                const l = n[5];
                l && (s = l);
              } else r = e;
              if (!n) {
                let n = !1,
                  s = t.length;
                r < 0 &&
                  (t.push(
                    'Duration values below 0 are not allowed for this animation step.'
                  ),
                  (n = !0)),
                  i < 0 &&
                    (t.push(
                      'Delay values below 0 are not allowed for this animation step.'
                    ),
                    (n = !0)),
                  n &&
                    t.splice(
                      s,
                      0,
                      `The provided timing value "${e}" is invalid.`
                    );
              }
              return { duration: r, delay: i, easing: s };
            })(e, t, n);
      }
      function Bb(e, t = {}) {
        return (
          Object.keys(e).forEach(n => {
            t[n] = e[n];
          }),
          t
        );
      }
      function Hb(e, t, n = {}) {
        if (t) for (let r in e) n[r] = e[r];
        else Bb(e, n);
        return n;
      }
      function qb(e, t, n) {
        return n ? t + ':' + n + ';' : '';
      }
      function Gb(e) {
        let t = '';
        for (let n = 0; n < e.style.length; n++) {
          const r = e.style.item(n);
          t += qb(0, r, e.style.getPropertyValue(r));
        }
        for (const n in e.style)
          e.style.hasOwnProperty(n) &&
            !n.startsWith('_') &&
            (t += qb(
              0,
              n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
              e.style[n]
            ));
        e.setAttribute('style', t);
      }
      function Qb(e, t, n) {
        e.style &&
          (Object.keys(t).forEach(r => {
            const i = ty(r);
            n && !n.hasOwnProperty(r) && (n[r] = e.style[i]),
              (e.style[i] = t[r]);
          }),
          hb() && Gb(e));
      }
      function Wb(e, t) {
        e.style &&
          (Object.keys(t).forEach(t => {
            const n = ty(t);
            e.style[n] = '';
          }),
          hb() && Gb(e));
      }
      function Kb(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : Wh(e)) : e;
      }
      const Zb = new RegExp(`${Rb}\\s*(.+?)\\s*}}`, 'g');
      function Yb(e) {
        let t = [];
        if ('string' == typeof e) {
          const n = e.toString();
          let r;
          for (; (r = Zb.exec(n)); ) t.push(r[1]);
          Zb.lastIndex = 0;
        }
        return t;
      }
      function Xb(e, t, n) {
        const r = e.toString(),
          i = r.replace(Zb, (e, r) => {
            let i = t[r];
            return (
              t.hasOwnProperty(r) ||
                (n.push(`Please provide a value for the animation param ${r}`),
                (i = '')),
              i.toString()
            );
          });
        return i == r ? e : i;
      }
      function Jb(e) {
        const t = [];
        let n = e.next();
        for (; !n.done; ) t.push(n.value), (n = e.next());
        return t;
      }
      const ey = /-+([a-z0-9])/g;
      function ty(e) {
        return e.replace(ey, (...e) => e[1].toUpperCase());
      }
      function ny(e, t) {
        return 0 === e || 0 === t;
      }
      function ry(e, t, n) {
        const r = Object.keys(n);
        if (r.length && t.length) {
          let s = t[0],
            o = [];
          if (
            (r.forEach(e => {
              s.hasOwnProperty(e) || o.push(e), (s[e] = n[e]);
            }),
            o.length)
          )
            for (var i = 1; i < t.length; i++) {
              let n = t[i];
              o.forEach(function (t) {
                n[t] = sy(e, t);
              });
            }
        }
        return t;
      }
      function iy(e, t, n) {
        switch (t.type) {
          case 7:
            return e.visitTrigger(t, n);
          case 0:
            return e.visitState(t, n);
          case 1:
            return e.visitTransition(t, n);
          case 2:
            return e.visitSequence(t, n);
          case 3:
            return e.visitGroup(t, n);
          case 4:
            return e.visitAnimate(t, n);
          case 5:
            return e.visitKeyframes(t, n);
          case 6:
            return e.visitStyle(t, n);
          case 8:
            return e.visitReference(t, n);
          case 9:
            return e.visitAnimateChild(t, n);
          case 10:
            return e.visitAnimateRef(t, n);
          case 11:
            return e.visitQuery(t, n);
          case 12:
            return e.visitStagger(t, n);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${t.type}`
            );
        }
      }
      function sy(e, t) {
        return window.getComputedStyle(e)[t];
      }
      const oy = '*';
      function ly(e, t) {
        const n = [];
        return (
          'string' == typeof e
            ? e.split(/\s*,\s*/).forEach(e =>
                (function (e, t, n) {
                  if (':' == e[0]) {
                    const r = (function (e, t) {
                      switch (e) {
                        case ':enter':
                          return 'void => *';
                        case ':leave':
                          return '* => void';
                        case ':increment':
                          return (e, t) => parseFloat(t) > parseFloat(e);
                        case ':decrement':
                          return (e, t) => parseFloat(t) < parseFloat(e);
                        default:
                          return (
                            t.push(
                              `The transition alias value "${e}" is not supported`
                            ),
                            '* => *'
                          );
                      }
                    })(e, n);
                    if ('function' == typeof r) return void t.push(r);
                    e = r;
                  }
                  const r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${e}" is not supported`
                      ),
                      t
                    );
                  const i = r[1],
                    s = r[2],
                    o = r[3];
                  t.push(cy(i, o)),
                    '<' != s[0] || (i == oy && o == oy) || t.push(cy(o, i));
                })(e, n, t)
              )
            : n.push(e),
          n
        );
      }
      const ay = new Set(['true', '1']),
        uy = new Set(['false', '0']);
      function cy(e, t) {
        const n = ay.has(e) || uy.has(e),
          r = ay.has(t) || uy.has(t);
        return (i, s) => {
          let o = e == oy || e == i,
            l = t == oy || t == s;
          return (
            !o && n && 'boolean' == typeof i && (o = i ? ay.has(e) : uy.has(e)),
            !l && r && 'boolean' == typeof s && (l = s ? ay.has(t) : uy.has(t)),
            o && l
          );
        };
      }
      const hy = ':self',
        dy = new RegExp(`s*${hy}s*,?`, 'g');
      function my(e, t, n) {
        return new fy(e).build(t, n);
      }
      const py = '';
      class fy {
        constructor(e) {
          this._driver = e;
        }
        build(e, t) {
          const n = new gy(t);
          return this._resetContextStyleTimingState(n), iy(this, Kb(e), n);
        }
        _resetContextStyleTimingState(e) {
          (e.currentQuerySelector = py),
            (e.collectedStyles = {}),
            (e.collectedStyles[py] = {}),
            (e.currentTime = 0);
        }
        visitTrigger(e, t) {
          let n = (t.queryCount = 0),
            r = (t.depCount = 0);
          const i = [],
            s = [];
          return (
            '@' == e.name.charAt(0) &&
              t.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            e.definitions.forEach(e => {
              if ((this._resetContextStyleTimingState(t), 0 == e.type)) {
                const n = e,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach(e => {
                    (n.name = e), i.push(this.visitState(n, t));
                  }),
                  (n.name = r);
              } else if (1 == e.type) {
                const i = this.visitTransition(e, t);
                (n += i.queryCount), (r += i.depCount), s.push(i);
              } else
                t.errors.push(
                  'only state() and transition() definitions can sit inside of a trigger()'
                );
            }),
            {
              type: 7,
              name: e.name,
              states: i,
              transitions: s,
              queryCount: n,
              depCount: r,
              options: null
            }
          );
        }
        visitState(e, t) {
          const n = this.visitStyle(e.styles, t),
            r = (e.options && e.options.params) || null;
          if (n.containsDynamicStyles) {
            const i = new Set(),
              s = r || {};
            if (
              (n.styles.forEach(e => {
                if (_y(e)) {
                  const t = e;
                  Object.keys(t).forEach(e => {
                    Yb(t[e]).forEach(e => {
                      s.hasOwnProperty(e) || i.add(e);
                    });
                  });
                }
              }),
              i.size)
            ) {
              const n = Jb(i.values());
              t.errors.push(
                `state("${
                  e.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ', '
                )}`
              );
            }
          }
          return {
            type: 0,
            name: e.name,
            style: n,
            options: r ? { params: r } : null
          };
        }
        visitTransition(e, t) {
          (t.queryCount = 0), (t.depCount = 0);
          const n = iy(this, Kb(e.animation), t);
          return {
            type: 1,
            matchers: ly(e.expr, t.errors),
            animation: n,
            queryCount: t.queryCount,
            depCount: t.depCount,
            options: by(e.options)
          };
        }
        visitSequence(e, t) {
          return {
            type: 2,
            steps: e.steps.map(e => iy(this, e, t)),
            options: by(e.options)
          };
        }
        visitGroup(e, t) {
          const n = t.currentTime;
          let r = 0;
          const i = e.steps.map(e => {
            t.currentTime = n;
            const i = iy(this, e, t);
            return (r = Math.max(r, t.currentTime)), i;
          });
          return (
            (t.currentTime = r), { type: 3, steps: i, options: by(e.options) }
          );
        }
        visitAnimate(e, t) {
          const n = (function (e, t) {
            let n = null;
            if (e.hasOwnProperty('duration')) n = e;
            else if ('number' == typeof e) return yy(zb(e, t).duration, 0, '');
            const r = e;
            if (
              r.split(/\s+/).some(e => '{' == e.charAt(0) && '{' == e.charAt(1))
            ) {
              const e = yy(0, 0, '');
              return (e.dynamic = !0), (e.strValue = r), e;
            }
            return yy((n = n || zb(r, t)).duration, n.delay, n.easing);
          })(e.timings, t.errors);
          let r;
          t.currentAnimateTimings = n;
          let i = e.styles ? e.styles : Kh({});
          if (5 == i.type) r = this.visitKeyframes(i, t);
          else {
            let i = e.styles,
              s = !1;
            if (!i) {
              s = !0;
              const e = {};
              n.easing && (e.easing = n.easing), (i = Kh(e));
            }
            t.currentTime += n.duration + n.delay;
            const o = this.visitStyle(i, t);
            (o.isEmptyStep = s), (r = o);
          }
          return (
            (t.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(e, t) {
          const n = this._makeStyleAst(e, t);
          return this._validateStyleAst(n, t), n;
        }
        _makeStyleAst(e, t) {
          const n = [];
          Array.isArray(e.styles)
            ? e.styles.forEach(e => {
                'string' == typeof e
                  ? e == Qh
                    ? n.push(e)
                    : t.errors.push(
                        `The provided style string value ${e} is not allowed.`
                      )
                  : n.push(e);
              })
            : n.push(e.styles);
          let r = !1,
            i = null;
          return (
            n.forEach(e => {
              if (_y(e)) {
                const t = e,
                  n = t.easing;
                if ((n && ((i = n), delete t.easing), !r))
                  for (let e in t)
                    if (t[e].toString().indexOf(Rb) >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: i,
              offset: e.offset,
              containsDynamicStyles: r,
              options: null
            }
          );
        }
        _validateStyleAst(e, t) {
          const n = t.currentAnimateTimings;
          let r = t.currentTime,
            i = t.currentTime;
          n && i > 0 && (i -= n.duration + n.delay),
            e.styles.forEach(e => {
              'string' != typeof e &&
                Object.keys(e).forEach(n => {
                  if (!this._driver.validateStyleProperty(n))
                    return void t.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const s = t.collectedStyles[t.currentQuerySelector],
                    o = s[n];
                  let l = !0;
                  o &&
                    (i != r &&
                      i >= o.startTime &&
                      r <= o.endTime &&
                      (t.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${i}ms" and "${r}ms"`
                      ),
                      (l = !1)),
                    (i = o.startTime)),
                    l && (s[n] = { startTime: i, endTime: r }),
                    t.options &&
                      (function (e, t, n) {
                        const r = t.params || {},
                          i = Yb(e);
                        i.length &&
                          i.forEach(e => {
                            r.hasOwnProperty(e) ||
                              n.push(
                                `Unable to resolve the local animation param ${e} in the given list of values`
                              );
                          });
                      })(e[n], t.options, t.errors);
                });
            });
        }
        visitKeyframes(e, t) {
          const n = { type: 5, styles: [], options: null };
          if (!t.currentAnimateTimings)
            return (
              t.errors.push(
                'keyframes() must be placed inside of a call to animate()'
              ),
              n
            );
          let r = 0;
          const i = [];
          let s = !1,
            o = !1,
            l = 0;
          const a = e.steps.map(e => {
            const n = this._makeStyleAst(e, t);
            let a =
                null != n.offset
                  ? n.offset
                  : (function (e) {
                      if ('string' == typeof e) return null;
                      let t = null;
                      if (Array.isArray(e))
                        e.forEach(e => {
                          if (_y(e) && e.hasOwnProperty('offset')) {
                            const n = e;
                            (t = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (_y(e) && e.hasOwnProperty('offset')) {
                        const n = e;
                        (t = parseFloat(n.offset)), delete n.offset;
                      }
                      return t;
                    })(n.styles),
              u = 0;
            return (
              null != a && (r++, (u = n.offset = a)),
              (o = o || u < 0 || u > 1),
              (s = s || u < l),
              (l = u),
              i.push(u),
              n
            );
          });
          o &&
            t.errors.push(
              'Please ensure that all keyframe offsets are between 0 and 1'
            ),
            s &&
              t.errors.push(
                'Please ensure that all keyframe offsets are in order'
              );
          const u = e.steps.length;
          let c = 0;
          r > 0 && r < u
            ? t.errors.push(
                'Not all style() steps within the declared keyframes() contain offsets'
              )
            : 0 == r && (c = 1 / (u - 1));
          const h = u - 1,
            d = t.currentTime,
            m = t.currentAnimateTimings,
            p = m.duration;
          return (
            a.forEach((e, r) => {
              const s = c > 0 ? (r == h ? 1 : c * r) : i[r],
                o = s * p;
              (t.currentTime = d + m.delay + o),
                (m.duration = o),
                this._validateStyleAst(e, t),
                (e.offset = s),
                n.styles.push(e);
            }),
            n
          );
        }
        visitReference(e, t) {
          return {
            type: 8,
            animation: iy(this, Kb(e.animation), t),
            options: by(e.options)
          };
        }
        visitAnimateChild(e, t) {
          return t.depCount++, { type: 9, options: by(e.options) };
        }
        visitAnimateRef(e, t) {
          return {
            type: 10,
            animation: this.visitReference(e.animation, t),
            options: by(e.options)
          };
        }
        visitQuery(e, t) {
          const n = t.currentQuerySelector,
            r = e.options || {};
          t.queryCount++, (t.currentQuery = e);
          const [i, s] = (function (e) {
            const t = !!e.split(/\s*,\s*/).find(e => e == hy);
            return (
              t && (e = e.replace(dy, '')),
              [
                (e = e
                  .replace(/@\*/g, Lb)
                  .replace(/@\w+/g, e => Lb + '-' + e.substr(1))
                  .replace(/:animating/g, Ub)),
                t
              ]
            );
          })(e.selector);
          (t.currentQuerySelector = n.length ? n + ' ' + i : i),
            _b(t.collectedStyles, t.currentQuerySelector, {});
          const o = iy(this, Kb(e.animation), t);
          return (
            (t.currentQuery = null),
            (t.currentQuerySelector = n),
            {
              type: 11,
              selector: i,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: s,
              animation: o,
              originalSelector: e.selector,
              options: by(e.options)
            }
          );
        }
        visitStagger(e, t) {
          t.currentQuery ||
            t.errors.push('stagger() can only be used inside of query()');
          const n =
            'full' === e.timings
              ? { duration: 0, delay: 0, easing: 'full' }
              : zb(e.timings, t.errors, !0);
          return {
            type: 12,
            animation: iy(this, Kb(e.animation), t),
            timings: n,
            options: null
          };
        }
      }
      class gy {
        constructor(e) {
          (this.errors = e),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function _y(e) {
        return !Array.isArray(e) && 'object' == typeof e;
      }
      function by(e) {
        var t;
        return (
          e
            ? (e = Bb(e)).params && (e.params = (t = e.params) ? Bb(t) : null)
            : (e = {}),
          e
        );
      }
      function yy(e, t, n) {
        return { duration: e, delay: t, easing: n };
      }
      function vy(e, t, n, r, i, s, o = null, l = !1) {
        return {
          type: 1,
          element: e,
          keyframes: t,
          preStyleProps: n,
          postStyleProps: r,
          duration: i,
          delay: s,
          totalTime: i + s,
          easing: o,
          subTimeline: l
        };
      }
      class wy {
        constructor() {
          this._map = new Map();
        }
        consume(e) {
          let t = this._map.get(e);
          return t ? this._map.delete(e) : (t = []), t;
        }
        append(e, t) {
          let n = this._map.get(e);
          n || this._map.set(e, (n = [])), n.push(...t);
        }
        has(e) {
          return this._map.has(e);
        }
        clear() {
          this._map.clear();
        }
      }
      const Cy = 1,
        xy = new RegExp(':enter', 'g'),
        ky = new RegExp(':leave', 'g');
      function Ey(e, t, n, r, i, s = {}, o = {}, l, a, u = []) {
        return new Sy().buildKeyframes(e, t, n, r, i, s, o, l, a, u);
      }
      class Sy {
        buildKeyframes(e, t, n, r, i, s, o, l, a, u = []) {
          a = a || new wy();
          const c = new Iy(e, t, a, r, i, u, []);
          (c.options = l),
            c.currentTimeline.setStyles([s], null, c.errors, l),
            iy(this, n, c);
          const h = c.timelines.filter(e => e.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const e = h[h.length - 1];
            e.allowOnlyTimelineStyles() || e.setStyles([o], null, c.errors, l);
          }
          return h.length
            ? h.map(e => e.buildKeyframes())
            : [vy(t, [], [], [], 0, 0, '', !1)];
        }
        visitTrigger(e, t) {}
        visitState(e, t) {}
        visitTransition(e, t) {}
        visitAnimateChild(e, t) {
          const n = t.subInstructions.consume(t.element);
          if (n) {
            const r = t.createSubContext(e.options),
              i = t.currentTimeline.currentTime,
              s = this._visitSubInstructions(n, r, r.options);
            i != s && t.transformIntoNewTimeline(s);
          }
          t.previousNode = e;
        }
        visitAnimateRef(e, t) {
          const n = t.createSubContext(e.options);
          n.transformIntoNewTimeline(),
            this.visitReference(e.animation, n),
            t.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (t.previousNode = e);
        }
        _visitSubInstructions(e, t, n) {
          let r = t.currentTimeline.currentTime;
          const i = null != n.duration ? jb(n.duration) : null,
            s = null != n.delay ? jb(n.delay) : null;
          return (
            0 !== i &&
              e.forEach(e => {
                const n = t.appendInstructionToTimeline(e, i, s);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(e, t) {
          t.updateOptions(e.options, !0),
            iy(this, e.animation, t),
            (t.previousNode = e);
        }
        visitSequence(e, t) {
          const n = t.subContextCount;
          let r = t;
          const i = e.options;
          if (
            i &&
            (i.params || i.delay) &&
            ((r = t.createSubContext(i)).transformIntoNewTimeline(),
            null != i.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = Ty));
            const e = jb(i.delay);
            r.delayNextStep(e);
          }
          e.steps.length &&
            (e.steps.forEach(e => iy(this, e, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (t.previousNode = e);
        }
        visitGroup(e, t) {
          const n = [];
          let r = t.currentTimeline.currentTime;
          const i = e.options && e.options.delay ? jb(e.options.delay) : 0;
          e.steps.forEach(s => {
            const o = t.createSubContext(e.options);
            i && o.delayNextStep(i),
              iy(this, s, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach(e => t.currentTimeline.mergeTimelineCollectedStyles(e)),
            t.transformIntoNewTimeline(r),
            (t.previousNode = e);
        }
        _visitTiming(e, t) {
          if (e.dynamic) {
            const n = e.strValue;
            return zb(t.params ? Xb(n, t.params, t.errors) : n, t.errors);
          }
          return { duration: e.duration, delay: e.delay, easing: e.easing };
        }
        visitAnimate(e, t) {
          const n = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
            r = t.currentTimeline;
          n.delay && (t.incrementTime(n.delay), r.snapshotCurrentStyles());
          const i = e.style;
          5 == i.type
            ? this.visitKeyframes(i, t)
            : (t.incrementTime(n.duration),
              this.visitStyle(i, t),
              r.applyStylesToKeyframe()),
            (t.currentAnimateTimings = null),
            (t.previousNode = e);
        }
        visitStyle(e, t) {
          const n = t.currentTimeline,
            r = t.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const i = (r && r.easing) || e.easing;
          e.isEmptyStep
            ? n.applyEmptyStep(i)
            : n.setStyles(e.styles, i, t.errors, t.options),
            (t.previousNode = e);
        }
        visitKeyframes(e, t) {
          const n = t.currentAnimateTimings,
            r = t.currentTimeline.duration,
            i = n.duration,
            s = t.createSubContext().currentTimeline;
          (s.easing = n.easing),
            e.styles.forEach(e => {
              s.forwardTime((e.offset || 0) * i),
                s.setStyles(e.styles, e.easing, t.errors, t.options),
                s.applyStylesToKeyframe();
            }),
            t.currentTimeline.mergeTimelineCollectedStyles(s),
            t.transformIntoNewTimeline(r + i),
            (t.previousNode = e);
        }
        visitQuery(e, t) {
          const n = t.currentTimeline.currentTime,
            r = e.options || {},
            i = r.delay ? jb(r.delay) : 0;
          i &&
            (6 === t.previousNode.type ||
              (0 == n &&
                t.currentTimeline.getCurrentStyleProperties().length)) &&
            (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = Ty));
          let s = n;
          const o = t.invokeQuery(
            e.selector,
            e.originalSelector,
            e.limit,
            e.includeSelf,
            !!r.optional,
            t.errors
          );
          t.currentQueryTotal = o.length;
          let l = null;
          o.forEach((n, r) => {
            t.currentQueryIndex = r;
            const o = t.createSubContext(e.options, n);
            i && o.delayNextStep(i),
              n === t.element && (l = o.currentTimeline),
              iy(this, e.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (s = Math.max(s, o.currentTimeline.currentTime));
          }),
            (t.currentQueryIndex = 0),
            (t.currentQueryTotal = 0),
            t.transformIntoNewTimeline(s),
            l &&
              (t.currentTimeline.mergeTimelineCollectedStyles(l),
              t.currentTimeline.snapshotCurrentStyles()),
            (t.previousNode = e);
        }
        visitStagger(e, t) {
          const n = t.parentContext,
            r = t.currentTimeline,
            i = e.timings,
            s = Math.abs(i.duration),
            o = s * (t.currentQueryTotal - 1);
          let l = s * t.currentQueryIndex;
          switch (i.duration < 0 ? 'reverse' : i.easing) {
            case 'reverse':
              l = o - l;
              break;
            case 'full':
              l = n.currentStaggerTime;
          }
          const a = t.currentTimeline;
          l && a.delayNextStep(l);
          const u = a.currentTime;
          iy(this, e.animation, t),
            (t.previousNode = e),
            (n.currentStaggerTime =
              r.currentTime - u + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const Ty = {};
      class Iy {
        constructor(e, t, n, r, i, s, o, l) {
          (this._driver = e),
            (this.element = t),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = i),
            (this.errors = s),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Ty),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = l || new Ay(this._driver, t, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(e, t) {
          if (!e) return;
          const n = e;
          let r = this.options;
          null != n.duration && (r.duration = jb(n.duration)),
            null != n.delay && (r.delay = jb(n.delay));
          const i = n.params;
          if (i) {
            let e = r.params;
            e || (e = this.options.params = {}),
              Object.keys(i).forEach(n => {
                (t && e.hasOwnProperty(n)) || (e[n] = Xb(i[n], e, this.errors));
              });
          }
        }
        _copyOptions() {
          const e = {};
          if (this.options) {
            const t = this.options.params;
            if (t) {
              const n = (e.params = {});
              Object.keys(t).forEach(e => {
                n[e] = t[e];
              });
            }
          }
          return e;
        }
        createSubContext(e = null, t, n) {
          const r = t || this.element,
            i = new Iy(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (i.previousNode = this.previousNode),
            (i.currentAnimateTimings = this.currentAnimateTimings),
            (i.options = this._copyOptions()),
            i.updateOptions(e),
            (i.currentQueryIndex = this.currentQueryIndex),
            (i.currentQueryTotal = this.currentQueryTotal),
            (i.parentContext = this),
            this.subContextCount++,
            i
          );
        }
        transformIntoNewTimeline(e) {
          return (
            (this.previousNode = Ty),
            (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(e, t, n) {
          const r = {
              duration: null != t ? t : e.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                e.delay,
              easing: ''
            },
            i = new Oy(
              this._driver,
              e.element,
              e.keyframes,
              e.preStyleProps,
              e.postStyleProps,
              r,
              e.stretchStartingKeyframe
            );
          return this.timelines.push(i), r;
        }
        incrementTime(e) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
        }
        delayNextStep(e) {
          e > 0 && this.currentTimeline.delayNextStep(e);
        }
        invokeQuery(e, t, n, r, i, s) {
          let o = [];
          if ((r && o.push(this.element), e.length > 0)) {
            e = (e = e.replace(xy, '.' + this._enterClassName)).replace(
              ky,
              '.' + this._leaveClassName
            );
            let t = this._driver.query(this.element, e, 1 != n);
            0 !== n &&
              (t = n < 0 ? t.slice(t.length + n, t.length) : t.slice(0, n)),
              o.push(...t);
          }
          return (
            i ||
              0 != o.length ||
              s.push(
                `\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class Ay {
        constructor(e, t, n, r) {
          (this._driver = e),
            (this.element = t),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              t
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                t,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(e) {
          const t =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || t
            ? (this.forwardTime(this.currentTime + e),
              t && this.snapshotCurrentStyles())
            : (this.startTime += e);
        }
        fork(e, t) {
          return (
            this.applyStylesToKeyframe(),
            new Ay(
              this._driver,
              e,
              t || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += Cy), this._loadKeyframe();
        }
        forwardTime(e) {
          this.applyStylesToKeyframe(),
            (this.duration = e),
            this._loadKeyframe();
        }
        _updateStyle(e, t) {
          (this._localTimelineStyles[e] = t),
            (this._globalTimelineStyles[e] = t),
            (this._styleSummary[e] = { time: this.currentTime, value: t });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(e) {
          e && (this._previousKeyframe.easing = e),
            Object.keys(this._globalTimelineStyles).forEach(e => {
              (this._backFill[e] = this._globalTimelineStyles[e] || Qh),
                (this._currentKeyframe[e] = Qh);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(e, t, n, r) {
          t && (this._previousKeyframe.easing = t);
          const i = (r && r.params) || {},
            s = (function (e, t) {
              const n = {};
              let r;
              return (
                e.forEach(e => {
                  '*' === e
                    ? (r = r || Object.keys(t)).forEach(e => {
                        n[e] = Qh;
                      })
                    : Hb(e, !1, n);
                }),
                n
              );
            })(e, this._globalTimelineStyles);
          Object.keys(s).forEach(e => {
            const t = Xb(s[e], i, n);
            (this._pendingStyles[e] = t),
              this._localTimelineStyles.hasOwnProperty(e) ||
                (this._backFill[e] = this._globalTimelineStyles.hasOwnProperty(
                  e
                )
                  ? this._globalTimelineStyles[e]
                  : Qh),
              this._updateStyle(e, t);
          });
        }
        applyStylesToKeyframe() {
          const e = this._pendingStyles,
            t = Object.keys(e);
          0 != t.length &&
            ((this._pendingStyles = {}),
            t.forEach(t => {
              this._currentKeyframe[t] = e[t];
            }),
            Object.keys(this._localTimelineStyles).forEach(e => {
              this._currentKeyframe.hasOwnProperty(e) ||
                (this._currentKeyframe[e] = this._localTimelineStyles[e]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach(e => {
            const t = this._localTimelineStyles[e];
            (this._pendingStyles[e] = t), this._updateStyle(e, t);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const e = [];
          for (let t in this._currentKeyframe) e.push(t);
          return e;
        }
        mergeTimelineCollectedStyles(e) {
          Object.keys(e._styleSummary).forEach(t => {
            const n = this._styleSummary[t],
              r = e._styleSummary[t];
            (!n || r.time > n.time) && this._updateStyle(t, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const e = new Set(),
            t = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((i, s) => {
            const o = Hb(i, !0);
            Object.keys(o).forEach(n => {
              const r = o[n];
              r == Jh ? e.add(n) : r == Qh && t.add(n);
            }),
              n || (o.offset = s / this.duration),
              r.push(o);
          });
          const i = e.size ? Jb(e.values()) : [],
            s = t.size ? Jb(t.values()) : [];
          if (n) {
            const e = r[0],
              t = Bb(e);
            (e.offset = 0), (t.offset = 1), (r = [e, t]);
          }
          return vy(
            this.element,
            r,
            i,
            s,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Oy extends Ay {
        constructor(e, t, n, r, i, s, o = !1) {
          super(e, t, s.delay),
            (this.element = t),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = i),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: s.duration,
              delay: s.delay,
              easing: s.easing
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let e = this.keyframes,
            { delay: t, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && t) {
            const i = [],
              s = n + t,
              o = t / s,
              l = Hb(e[0], !1);
            (l.offset = 0), i.push(l);
            const a = Hb(e[0], !1);
            (a.offset = Py(o)), i.push(a);
            const u = e.length - 1;
            for (let r = 1; r <= u; r++) {
              let o = Hb(e[r], !1);
              (o.offset = Py((t + o.offset * n) / s)), i.push(o);
            }
            (n = s), (t = 0), (r = ''), (e = i);
          }
          return vy(
            this.element,
            e,
            this.preStyleProps,
            this.postStyleProps,
            n,
            t,
            r,
            !0
          );
        }
      }
      function Py(e, t = 3) {
        const n = Math.pow(10, t - 1);
        return Math.round(e * n) / n;
      }
      class My {}
      class Ry extends My {
        normalizePropertyName(e, t) {
          return ty(e);
        }
        normalizeStyleValue(e, t, n, r) {
          let i = '';
          const s = n.toString().trim();
          if (Ny[t] && 0 !== n && '0' !== n)
            if ('number' == typeof n) i = 'px';
            else {
              const t = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              t &&
                0 == t[1].length &&
                r.push(`Please provide a CSS unit value for ${e}:${n}`);
            }
          return s + i;
        }
      }
      const Ny = (() =>
        (function (e) {
          const t = {};
          return e.forEach(e => (t[e] = !0)), t;
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ','
          )
        ))();
      function Dy(e, t, n, r, i, s, o, l, a, u, c, h, d) {
        return {
          type: 0,
          element: e,
          triggerName: t,
          isRemovalTransition: i,
          fromState: n,
          fromStyles: s,
          toState: r,
          toStyles: o,
          timelines: l,
          queriedElements: a,
          preStyleProps: u,
          postStyleProps: c,
          totalTime: h,
          errors: d
        };
      }
      const Fy = {};
      class Ly {
        constructor(e, t, n) {
          (this._triggerName = e), (this.ast = t), (this._stateStyles = n);
        }
        match(e, t, n, r) {
          return (function (e, t, n, r, i) {
            return e.some(e => e(t, n, r, i));
          })(this.ast.matchers, e, t, n, r);
        }
        buildStyles(e, t, n) {
          const r = this._stateStyles['*'],
            i = this._stateStyles[e],
            s = r ? r.buildStyles(t, n) : {};
          return i ? i.buildStyles(t, n) : s;
        }
        build(e, t, n, r, i, s, o, l, a, u) {
          const c = [],
            h = (this.ast.options && this.ast.options.params) || Fy,
            d = this.buildStyles(n, (o && o.params) || Fy, c),
            m = (l && l.params) || Fy,
            p = this.buildStyles(r, m, c),
            f = new Set(),
            g = new Map(),
            _ = new Map(),
            b = 'void' === r,
            y = { params: Object.assign({}, h, m) },
            v = u ? [] : Ey(e, t, this.ast.animation, i, s, d, p, y, a, c);
          let w = 0;
          if (
            (v.forEach(e => {
              w = Math.max(e.duration + e.delay, w);
            }),
            c.length)
          )
            return Dy(t, this._triggerName, n, r, b, d, p, [], [], g, _, w, c);
          v.forEach(e => {
            const n = e.element,
              r = _b(g, n, {});
            e.preStyleProps.forEach(e => (r[e] = !0));
            const i = _b(_, n, {});
            e.postStyleProps.forEach(e => (i[e] = !0)), n !== t && f.add(n);
          });
          const C = Jb(f.values());
          return Dy(t, this._triggerName, n, r, b, d, p, v, C, g, _, w);
        }
      }
      class Vy {
        constructor(e, t) {
          (this.styles = e), (this.defaultParams = t);
        }
        buildStyles(e, t) {
          const n = {},
            r = Bb(this.defaultParams);
          return (
            Object.keys(e).forEach(t => {
              const n = e[t];
              null != n && (r[t] = n);
            }),
            this.styles.styles.forEach(e => {
              if ('string' != typeof e) {
                const i = e;
                Object.keys(i).forEach(e => {
                  let s = i[e];
                  s.length > 1 && (s = Xb(s, r, t)), (n[e] = s);
                });
              }
            }),
            n
          );
        }
      }
      class Uy {
        constructor(e, t) {
          (this.name = e),
            (this.ast = t),
            (this.transitionFactories = []),
            (this.states = {}),
            t.states.forEach(e => {
              this.states[e.name] = new Vy(
                e.style,
                (e.options && e.options.params) || {}
              );
            }),
            jy(this.states, 'true', '1'),
            jy(this.states, 'false', '0'),
            t.transitions.forEach(t => {
              this.transitionFactories.push(new Ly(e, t, this.states));
            }),
            (this.fallbackTransition = new Ly(
              e,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(e, t) => !0],
                options: null,
                queryCount: 0,
                depCount: 0
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(e, t, n, r) {
          return (
            this.transitionFactories.find(i => i.match(e, t, n, r)) || null
          );
        }
        matchStyles(e, t, n) {
          return this.fallbackTransition.buildStyles(e, t, n);
        }
      }
      function jy(e, t, n) {
        e.hasOwnProperty(t)
          ? e.hasOwnProperty(n) || (e[n] = e[t])
          : e.hasOwnProperty(n) && (e[t] = e[n]);
      }
      const $y = new wy();
      class zy {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(e, t) {
          const n = [],
            r = my(this._driver, t, n);
          if (n.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${n.join(
                '\n'
              )}`
            );
          this._animations[e] = r;
        }
        _buildPlayer(e, t, n) {
          const r = e.element,
            i = mb(0, this._normalizer, 0, e.keyframes, t, n);
          return this._driver.animate(
            r,
            i,
            e.duration,
            e.delay,
            e.easing,
            [],
            !0
          );
        }
        create(e, t, n = {}) {
          const r = [],
            i = this._animations[e];
          let s;
          const o = new Map();
          if (
            (i
              ? (s = Ey(this._driver, t, i, Nb, Db, {}, {}, n, $y, r)).forEach(
                  e => {
                    const t = _b(o, e.element, {});
                    e.postStyleProps.forEach(e => (t[e] = null));
                  }
                )
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (s = [])),
            r.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${r.join(
                '\n'
              )}`
            );
          o.forEach((e, t) => {
            Object.keys(e).forEach(n => {
              e[n] = this._driver.computeStyle(t, n, Qh);
            });
          });
          const l = db(
            s.map(e => {
              const t = o.get(e.element);
              return this._buildPlayer(e, {}, t);
            })
          );
          return (
            (this._playersById[e] = l),
            l.onDestroy(() => this.destroy(e)),
            this.players.push(l),
            l
          );
        }
        destroy(e) {
          const t = this._getPlayer(e);
          t.destroy(), delete this._playersById[e];
          const n = this.players.indexOf(t);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(e) {
          const t = this._playersById[e];
          if (!t)
            throw new Error(
              `Unable to find the timeline player referenced by ${e}`
            );
          return t;
        }
        listen(e, t, n, r) {
          const i = gb(t, '', '', '');
          return pb(this._getPlayer(e), n, i, r), () => {};
        }
        command(e, t, n, r) {
          if ('register' == n) return void this.register(e, r[0]);
          if ('create' == n) return void this.create(e, t, r[0] || {});
          const i = this._getPlayer(e);
          switch (n) {
            case 'play':
              i.play();
              break;
            case 'pause':
              i.pause();
              break;
            case 'reset':
              i.reset();
              break;
            case 'restart':
              i.restart();
              break;
            case 'finish':
              i.finish();
              break;
            case 'init':
              i.init();
              break;
            case 'setPosition':
              i.setPosition(parseFloat(r[0]));
              break;
            case 'destroy':
              this.destroy(e);
          }
        }
      }
      const By = 'ng-animate-queued',
        Hy = '.ng-animate-queued',
        qy = 'ng-animate-disabled',
        Gy = '.ng-animate-disabled',
        Qy = 'ng-star-inserted',
        Wy = '.ng-star-inserted',
        Ky = [],
        Zy = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1
        },
        Yy = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0
        },
        Xy = '__ng_removed';
      class Jy {
        constructor(e, t = '') {
          this.namespaceId = t;
          const n = e && e.hasOwnProperty('value');
          if (((this.value = null != (r = n ? e.value : e) ? r : null), n)) {
            const t = Bb(e);
            delete t.value, (this.options = t);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(e) {
          const t = e.params;
          if (t) {
            const e = this.options.params;
            Object.keys(t).forEach(n => {
              null == e[n] && (e[n] = t[n]);
            });
          }
        }
      }
      const ev = 'void',
        tv = new Jy(ev);
      class nv {
        constructor(e, t, n) {
          (this.id = e),
            (this.hostElement = t),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + e),
            cv(t, this._hostClassName);
        }
        listen(e, t, n, r) {
          if (!this._triggers.hasOwnProperty(t))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${t}" because the provided event is undefined!`
            );
          if ('start' != (i = n) && 'done' != i)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`
            );
          var i;
          const s = _b(this._elementListeners, e, []),
            o = { name: t, phase: n, callback: r };
          s.push(o);
          const l = _b(this._engine.statesByElement, e, {});
          return (
            l.hasOwnProperty(t) ||
              (cv(e, Fb), cv(e, Fb + '-' + t), (l[t] = tv)),
            () => {
              this._engine.afterFlush(() => {
                const e = s.indexOf(o);
                e >= 0 && s.splice(e, 1), this._triggers[t] || delete l[t];
              });
            }
          );
        }
        register(e, t) {
          return !this._triggers[e] && ((this._triggers[e] = t), !0);
        }
        _getTrigger(e) {
          const t = this._triggers[e];
          if (!t)
            throw new Error(
              `The provided animation trigger "${e}" has not been registered!`
            );
          return t;
        }
        trigger(e, t, n, r = !0) {
          const i = this._getTrigger(t),
            s = new iv(this.id, t, e);
          let o = this._engine.statesByElement.get(e);
          o ||
            (cv(e, Fb),
            cv(e, Fb + '-' + t),
            this._engine.statesByElement.set(e, (o = {})));
          let l = o[t];
          const a = new Jy(n, this.id);
          if (
            (!(n && n.hasOwnProperty('value')) &&
              l &&
              a.absorbOptions(l.options),
            (o[t] = a),
            l || (l = tv),
            a.value !== ev && l.value === a.value)
          ) {
            if (
              !(function (e, t) {
                const n = Object.keys(e),
                  r = Object.keys(t);
                if (n.length != r.length) return !1;
                for (let i = 0; i < n.length; i++) {
                  const r = n[i];
                  if (!t.hasOwnProperty(r) || e[r] !== t[r]) return !1;
                }
                return !0;
              })(l.params, a.params)
            ) {
              const t = [],
                n = i.matchStyles(l.value, l.params, t),
                r = i.matchStyles(a.value, a.params, t);
              t.length
                ? this._engine.reportError(t)
                : this._engine.afterFlush(() => {
                    Wb(e, n), Qb(e, r);
                  });
            }
            return;
          }
          const u = _b(this._engine.playersByElement, e, []);
          u.forEach(e => {
            e.namespaceId == this.id &&
              e.triggerName == t &&
              e.queued &&
              e.destroy();
          });
          let c = i.matchTransition(l.value, a.value, e, a.params),
            h = !1;
          if (!c) {
            if (!r) return;
            (c = i.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: t,
              transition: c,
              fromState: l,
              toState: a,
              player: s,
              isFallbackTransition: h
            }),
            h ||
              (cv(e, By),
              s.onStart(() => {
                hv(e, By);
              })),
            s.onDone(() => {
              let t = this.players.indexOf(s);
              t >= 0 && this.players.splice(t, 1);
              const n = this._engine.playersByElement.get(e);
              if (n) {
                let e = n.indexOf(s);
                e >= 0 && n.splice(e, 1);
              }
            }),
            this.players.push(s),
            u.push(s),
            s
          );
        }
        deregister(e) {
          delete this._triggers[e],
            this._engine.statesByElement.forEach((t, n) => {
              delete t[e];
            }),
            this._elementListeners.forEach((t, n) => {
              this._elementListeners.set(
                n,
                t.filter(t => t.name != e)
              );
            });
        }
        clearElementCache(e) {
          this._engine.statesByElement.delete(e),
            this._elementListeners.delete(e);
          const t = this._engine.playersByElement.get(e);
          t &&
            (t.forEach(e => e.destroy()),
            this._engine.playersByElement.delete(e));
        }
        _signalRemovalForInnerTriggers(e, t, n = !1) {
          this._engine.driver.query(e, Lb, !0).forEach(e => {
            if (e[Xy]) return;
            const n = this._engine.fetchNamespacesByElement(e);
            n.size
              ? n.forEach(n => n.triggerLeaveAnimation(e, t, !1, !0))
              : this.clearElementCache(e);
          });
        }
        triggerLeaveAnimation(e, t, n, r) {
          const i = this._engine.statesByElement.get(e);
          if (i) {
            const s = [];
            if (
              (Object.keys(i).forEach(t => {
                if (this._triggers[t]) {
                  const n = this.trigger(e, t, ev, r);
                  n && s.push(n);
                }
              }),
              s.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, e, !0, t),
                n && db(s).onDone(() => this._engine.processLeaveNode(e)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(e) {
          const t = this._elementListeners.get(e);
          if (t) {
            const n = new Set();
            t.forEach(t => {
              const r = t.name;
              if (n.has(r)) return;
              n.add(r);
              const i = this._triggers[r].fallbackTransition,
                s = this._engine.statesByElement.get(e)[r] || tv,
                o = new Jy(ev),
                l = new iv(this.id, r, e);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: e,
                  triggerName: r,
                  transition: i,
                  fromState: s,
                  toState: o,
                  player: l,
                  isFallbackTransition: !0
                });
            });
          }
        }
        removeNode(e, t) {
          const n = this._engine;
          if (
            (e.childElementCount &&
              this._signalRemovalForInnerTriggers(e, t, !0),
            this.triggerLeaveAnimation(e, t, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const t = n.players.length ? n.playersByQueriedElement.get(e) : [];
            if (t && t.length) r = !0;
            else {
              let t = e;
              for (; (t = t.parentNode); )
                if (n.statesByElement.get(t)) {
                  r = !0;
                  break;
                }
            }
          }
          this.prepareLeaveAnimationListeners(e),
            r
              ? n.markElementAsRemoved(this.id, e, !1, t)
              : (n.afterFlush(() => this.clearElementCache(e)),
                n.destroyInnerAnimations(e),
                n._onRemovalComplete(e, t));
        }
        insertNode(e, t) {
          cv(e, this._hostClassName);
        }
        drainQueuedTransitions(e) {
          const t = [];
          return (
            this._queue.forEach(n => {
              const r = n.player;
              if (r.destroyed) return;
              const i = n.element,
                s = this._elementListeners.get(i);
              s &&
                s.forEach(t => {
                  if (t.name == n.triggerName) {
                    const r = gb(
                      i,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = e), pb(n.player, t.phase, r, t.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : t.push(n);
            }),
            (this._queue = []),
            t.sort((e, t) => {
              const n = e.transition.ast.depCount,
                r = t.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(e.element, t.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(e) {
          this.players.forEach(e => e.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, e);
        }
        elementContainsData(e) {
          let t = !1;
          return (
            this._elementListeners.has(e) && (t = !0),
            !!this._queue.find(t => t.element === e) || t
          );
        }
      }
      class rv {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this.driver = t),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (e, t) => {});
        }
        _onRemovalComplete(e, t) {
          this.onRemovalComplete(e, t);
        }
        get queuedPlayers() {
          const e = [];
          return (
            this._namespaceList.forEach(t => {
              t.players.forEach(t => {
                t.queued && e.push(t);
              });
            }),
            e
          );
        }
        createNamespace(e, t) {
          const n = new nv(e, t, this);
          return (
            t.parentNode
              ? this._balanceNamespaceList(n, t)
              : (this.newHostElements.set(t, n), this.collectEnterElement(t)),
            (this._namespaceLookup[e] = n)
          );
        }
        _balanceNamespaceList(e, t) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let i = n; i >= 0; i--)
              if (
                this.driver.containsElement(
                  this._namespaceList[i].hostElement,
                  t
                )
              ) {
                this._namespaceList.splice(i + 1, 0, e), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, e);
          } else this._namespaceList.push(e);
          return this.namespacesByHostElement.set(t, e), e;
        }
        register(e, t) {
          let n = this._namespaceLookup[e];
          return n || (n = this.createNamespace(e, t)), n;
        }
        registerTrigger(e, t, n) {
          let r = this._namespaceLookup[e];
          r && r.register(t, n) && this.totalAnimations++;
        }
        destroy(e, t) {
          if (!e) return;
          const n = this._fetchNamespace(e);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[e];
            const t = this._namespaceList.indexOf(n);
            t >= 0 && this._namespaceList.splice(t, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(t));
        }
        _fetchNamespace(e) {
          return this._namespaceLookup[e];
        }
        fetchNamespacesByElement(e) {
          const t = new Set(),
            n = this.statesByElement.get(e);
          if (n) {
            const e = Object.keys(n);
            for (let r = 0; r < e.length; r++) {
              const i = n[e[r]].namespaceId;
              if (i) {
                const e = this._fetchNamespace(i);
                e && t.add(e);
              }
            }
          }
          return t;
        }
        trigger(e, t, n, r) {
          if (sv(t)) {
            const i = this._fetchNamespace(e);
            if (i) return i.trigger(t, n, r), !0;
          }
          return !1;
        }
        insertNode(e, t, n, r) {
          if (!sv(t)) return;
          const i = t[Xy];
          if (i && i.setForRemoval) {
            (i.setForRemoval = !1), (i.setForMove = !0);
            const e = this.collectedLeaveElements.indexOf(t);
            e >= 0 && this.collectedLeaveElements.splice(e, 1);
          }
          if (e) {
            const r = this._fetchNamespace(e);
            r && r.insertNode(t, n);
          }
          r && this.collectEnterElement(t);
        }
        collectEnterElement(e) {
          this.collectedEnterElements.push(e);
        }
        markElementAsDisabled(e, t) {
          t
            ? this.disabledNodes.has(e) ||
              (this.disabledNodes.add(e), cv(e, qy))
            : this.disabledNodes.has(e) &&
              (this.disabledNodes.delete(e), hv(e, qy));
        }
        removeNode(e, t, n, r) {
          if (sv(t)) {
            const i = e ? this._fetchNamespace(e) : null;
            if (
              (i ? i.removeNode(t, r) : this.markElementAsRemoved(e, t, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(t);
              n && n.id !== e && n.removeNode(t, r);
            }
          } else this._onRemovalComplete(t, r);
        }
        markElementAsRemoved(e, t, n, r) {
          this.collectedLeaveElements.push(t),
            (t[Xy] = {
              namespaceId: e,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1
            });
        }
        listen(e, t, n, r, i) {
          return sv(t) ? this._fetchNamespace(e).listen(t, n, r, i) : () => {};
        }
        _buildInstruction(e, t, n, r, i) {
          return e.transition.build(
            this.driver,
            e.element,
            e.fromState.value,
            e.toState.value,
            n,
            r,
            e.fromState.options,
            e.toState.options,
            t,
            i
          );
        }
        destroyInnerAnimations(e) {
          let t = this.driver.query(e, Lb, !0);
          t.forEach(e => this.destroyActiveAnimationsForElement(e)),
            0 != this.playersByQueriedElement.size &&
              (t = this.driver.query(e, Ub, !0)).forEach(e =>
                this.finishActiveQueriedAnimationOnElement(e)
              );
        }
        destroyActiveAnimationsForElement(e) {
          const t = this.playersByElement.get(e);
          t &&
            t.forEach(e => {
              e.queued ? (e.markedForDestroy = !0) : e.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(e) {
          const t = this.playersByQueriedElement.get(e);
          t && t.forEach(e => e.finish());
        }
        whenRenderingDone() {
          return new Promise(e => {
            if (this.players.length) return db(this.players).onDone(() => e());
            e();
          });
        }
        processLeaveNode(e) {
          const t = e[Xy];
          if (t && t.setForRemoval) {
            if (((e[Xy] = Zy), t.namespaceId)) {
              this.destroyInnerAnimations(e);
              const n = this._fetchNamespace(t.namespaceId);
              n && n.clearElementCache(e);
            }
            this._onRemovalComplete(e, t.setForRemoval);
          }
          this.driver.matchesElement(e, Gy) &&
            this.markElementAsDisabled(e, !1),
            this.driver.query(e, Gy, !0).forEach(e => {
              this.markElementAsDisabled(e, !1);
            });
        }
        flush(e = -1) {
          let t = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((e, t) =>
                this._balanceNamespaceList(e, t)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              cv(this.collectedEnterElements[n], Qy);
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              t = this._flushAnimations(n, e);
            } finally {
              for (let e = 0; e < n.length; e++) n[e]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach(e => e()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const e = this._whenQuietFns;
            (this._whenQuietFns = []),
              t.length
                ? db(t).onDone(() => {
                    e.forEach(e => e());
                  })
                : e.forEach(e => e());
          }
        }
        reportError(e) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${e.join(
              '\n'
            )}`
          );
        }
        _flushAnimations(e, t) {
          const n = new wy(),
            r = [],
            i = new Map(),
            s = [],
            o = new Map(),
            l = new Map(),
            a = new Map(),
            u = new Set();
          this.disabledNodes.forEach(e => {
            u.add(e);
            const t = this.driver.query(e, Hy, !0);
            for (let n = 0; n < t.length; n++) u.add(t[n]);
          });
          const c = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = av(h, this.collectedEnterElements),
            m = new Map();
          let p = 0;
          d.forEach((e, t) => {
            const n = Nb + p++;
            m.set(t, n), e.forEach(e => cv(e, n));
          });
          const f = [],
            g = new Set(),
            _ = new Set();
          for (let O = 0; O < this.collectedLeaveElements.length; O++) {
            const e = this.collectedLeaveElements[O],
              t = e[Xy];
            t &&
              t.setForRemoval &&
              (f.push(e),
              g.add(e),
              t.hasAnimation
                ? this.driver.query(e, Wy, !0).forEach(e => g.add(e))
                : _.add(e));
          }
          const b = new Map(),
            y = av(h, Array.from(g));
          y.forEach((e, t) => {
            const n = Db + p++;
            b.set(t, n), e.forEach(e => cv(e, n));
          }),
            e.push(() => {
              d.forEach((e, t) => {
                const n = m.get(t);
                e.forEach(e => hv(e, n));
              }),
                y.forEach((e, t) => {
                  const n = b.get(t);
                  e.forEach(e => hv(e, n));
                }),
                f.forEach(e => {
                  this.processLeaveNode(e);
                });
            });
          const v = [],
            w = [];
          for (let O = this._namespaceList.length - 1; O >= 0; O--)
            this._namespaceList[O].drainQueuedTransitions(t).forEach(e => {
              const t = e.player,
                i = e.element;
              if ((v.push(t), this.collectedEnterElements.length)) {
                const e = i[Xy];
                if (e && e.setForMove) return void t.destroy();
              }
              const u = !c || !this.driver.containsElement(c, i),
                h = b.get(i),
                d = m.get(i),
                p = this._buildInstruction(e, n, d, h, u);
              if (!p.errors || !p.errors.length)
                return u
                  ? (t.onStart(() => Wb(i, p.fromStyles)),
                    t.onDestroy(() => Qb(i, p.toStyles)),
                    void r.push(t))
                  : e.isFallbackTransition
                  ? (t.onStart(() => Wb(i, p.fromStyles)),
                    t.onDestroy(() => Qb(i, p.toStyles)),
                    void r.push(t))
                  : (p.timelines.forEach(e => (e.stretchStartingKeyframe = !0)),
                    n.append(i, p.timelines),
                    s.push({ instruction: p, player: t, element: i }),
                    p.queriedElements.forEach(e => _b(o, e, []).push(t)),
                    p.preStyleProps.forEach((e, t) => {
                      const n = Object.keys(e);
                      if (n.length) {
                        let e = l.get(t);
                        e || l.set(t, (e = new Set())),
                          n.forEach(t => e.add(t));
                      }
                    }),
                    void p.postStyleProps.forEach((e, t) => {
                      const n = Object.keys(e);
                      let r = a.get(t);
                      r || a.set(t, (r = new Set())), n.forEach(e => r.add(e));
                    }));
              w.push(p);
            });
          if (w.length) {
            const e = [];
            w.forEach(t => {
              e.push(`@${t.triggerName} has failed due to:\n`),
                t.errors.forEach(t => e.push(`- ${t}\n`));
            }),
              v.forEach(e => e.destroy()),
              this.reportError(e);
          }
          const C = new Map(),
            x = new Map();
          s.forEach(e => {
            const t = e.element;
            n.has(t) &&
              (x.set(t, t),
              this._beforeAnimationBuild(
                e.player.namespaceId,
                e.instruction,
                C
              ));
          }),
            r.forEach(e => {
              const t = e.element;
              this._getPreviousPlayers(
                t,
                !1,
                e.namespaceId,
                e.triggerName,
                null
              ).forEach(e => {
                _b(C, t, []).push(e), e.destroy();
              });
            });
          const k = f.filter(e => mv(e, l, a)),
            E = new Map();
          lv(E, this.driver, _, a, Qh).forEach(e => {
            mv(e, l, a) && k.push(e);
          });
          const S = new Map();
          d.forEach((e, t) => {
            lv(S, this.driver, new Set(e), l, Jh);
          }),
            k.forEach(e => {
              const t = E.get(e),
                n = S.get(e);
              E.set(e, Object.assign({}, t, n));
            });
          const T = [],
            I = [],
            A = {};
          s.forEach(e => {
            const { element: t, player: s, instruction: o } = e;
            if (n.has(t)) {
              if (u.has(t))
                return (
                  s.onDestroy(() => Qb(t, o.toStyles)),
                  (s.disabled = !0),
                  s.overrideTotalTime(o.totalTime),
                  void r.push(s)
                );
              let e = A;
              if (x.size > 1) {
                let n = t;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const t = x.get(n);
                  if (t) {
                    e = t;
                    break;
                  }
                  r.push(n);
                }
                r.forEach(t => x.set(t, e));
              }
              const n = this._buildAnimation(s.namespaceId, o, C, i, S, E);
              if ((s.setRealPlayer(n), e === A)) T.push(s);
              else {
                const t = this.playersByElement.get(e);
                t && t.length && (s.parentPlayer = db(t)), r.push(s);
              }
            } else
              Wb(t, o.fromStyles),
                s.onDestroy(() => Qb(t, o.toStyles)),
                I.push(s),
                u.has(t) && r.push(s);
          }),
            I.forEach(e => {
              const t = i.get(e.element);
              if (t && t.length) {
                const n = db(t);
                e.setRealPlayer(n);
              }
            }),
            r.forEach(e => {
              e.parentPlayer ? e.syncPlayerEvents(e.parentPlayer) : e.destroy();
            });
          for (let O = 0; O < f.length; O++) {
            const e = f[O],
              t = e[Xy];
            if ((hv(e, Db), t && t.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let t = o.get(e);
              t && t.length && n.push(...t);
              let r = this.driver.query(e, Ub, !0);
              for (let e = 0; e < r.length; e++) {
                let t = o.get(r[e]);
                t && t.length && n.push(...t);
              }
            }
            const r = n.filter(e => !e.destroyed);
            r.length ? dv(this, e, r) : this.processLeaveNode(e);
          }
          return (
            (f.length = 0),
            T.forEach(e => {
              this.players.push(e),
                e.onDone(() => {
                  e.destroy();
                  const t = this.players.indexOf(e);
                  this.players.splice(t, 1);
                }),
                e.play();
            }),
            T
          );
        }
        elementContainsData(e, t) {
          let n = !1;
          const r = t[Xy];
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(t) && (n = !0),
            this.playersByQueriedElement.has(t) && (n = !0),
            this.statesByElement.has(t) && (n = !0),
            this._fetchNamespace(e).elementContainsData(t) || n
          );
        }
        afterFlush(e) {
          this._flushFns.push(e);
        }
        afterFlushAnimationsDone(e) {
          this._whenQuietFns.push(e);
        }
        _getPreviousPlayers(e, t, n, r, i) {
          let s = [];
          if (t) {
            const t = this.playersByQueriedElement.get(e);
            t && (s = t);
          } else {
            const t = this.playersByElement.get(e);
            if (t) {
              const e = !i || i == ev;
              t.forEach(t => {
                t.queued || ((e || t.triggerName == r) && s.push(t));
              });
            }
          }
          return (
            (n || r) &&
              (s = s.filter(
                e => !((n && n != e.namespaceId) || (r && r != e.triggerName))
              )),
            s
          );
        }
        _beforeAnimationBuild(e, t, n) {
          const r = t.element,
            i = t.isRemovalTransition ? void 0 : e,
            s = t.isRemovalTransition ? void 0 : t.triggerName;
          for (const o of t.timelines) {
            const e = o.element,
              l = e !== r,
              a = _b(n, e, []);
            this._getPreviousPlayers(e, l, i, s, t.toState).forEach(e => {
              const t = e.getRealPlayer();
              t.beforeDestroy && t.beforeDestroy(), e.destroy(), a.push(e);
            });
          }
          Wb(r, t.fromStyles);
        }
        _buildAnimation(e, t, n, r, i, s) {
          const o = t.triggerName,
            l = t.element,
            a = [],
            u = new Set(),
            c = new Set(),
            h = t.timelines.map(t => {
              const h = t.element;
              u.add(h);
              const d = h[Xy];
              if (d && d.removedBeforeQueried)
                return new Yh(t.duration, t.delay);
              const m = h !== l,
                p = (function (e) {
                  const t = [];
                  return (
                    (function e(t, n) {
                      for (let r = 0; r < t.length; r++) {
                        const i = t[r];
                        i instanceof Xh ? e(i.players, n) : n.push(i);
                      }
                    })(e, t),
                    t
                  );
                })((n.get(h) || Ky).map(e => e.getRealPlayer())).filter(
                  e => !!e.element && e.element === h
                ),
                f = i.get(h),
                g = s.get(h),
                _ = mb(0, this._normalizer, 0, t.keyframes, f, g),
                b = this._buildPlayer(t, _, p);
              if ((t.subTimeline && r && c.add(h), m)) {
                const t = new iv(e, o, h);
                t.setRealPlayer(b), a.push(t);
              }
              return b;
            });
          a.forEach(e => {
            _b(this.playersByQueriedElement, e.element, []).push(e),
              e.onDone(() =>
                (function (e, t, n) {
                  let r;
                  if (e instanceof Map) {
                    if ((r = e.get(t))) {
                      if (r.length) {
                        const e = r.indexOf(n);
                        r.splice(e, 1);
                      }
                      0 == r.length && e.delete(t);
                    }
                  } else if ((r = e[t])) {
                    if (r.length) {
                      const e = r.indexOf(n);
                      r.splice(e, 1);
                    }
                    0 == r.length && delete e[t];
                  }
                  return r;
                })(this.playersByQueriedElement, e.element, e)
              );
          }),
            u.forEach(e => cv(e, Vb));
          const d = db(h);
          return (
            d.onDestroy(() => {
              u.forEach(e => hv(e, Vb)), Qb(l, t.toStyles);
            }),
            c.forEach(e => {
              _b(r, e, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(e, t, n) {
          return t.length > 0
            ? this.driver.animate(
                e.element,
                t,
                e.duration,
                e.delay,
                e.easing,
                n
              )
            : new Yh(e.duration, e.delay);
        }
      }
      class iv {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.triggerName = t),
            (this.element = n),
            (this._player = new Yh()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(e) {
          this._containsRealPlayer ||
            ((this._player = e),
            Object.keys(this._queuedCallbacks).forEach(t => {
              this._queuedCallbacks[t].forEach(n => pb(e, t, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(e.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(e) {
          this.totalTime = e;
        }
        syncPlayerEvents(e) {
          const t = this._player;
          t.triggerCallback && e.onStart(() => t.triggerCallback('start')),
            e.onDone(() => this.finish()),
            e.onDestroy(() => this.destroy());
        }
        _queueEvent(e, t) {
          _b(this._queuedCallbacks, e, []).push(t);
        }
        onDone(e) {
          this.queued && this._queueEvent('done', e), this._player.onDone(e);
        }
        onStart(e) {
          this.queued && this._queueEvent('start', e), this._player.onStart(e);
        }
        onDestroy(e) {
          this.queued && this._queueEvent('destroy', e),
            this._player.onDestroy(e);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(e) {
          this.queued || this._player.setPosition(e);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(e) {
          const t = this._player;
          t.triggerCallback && t.triggerCallback(e);
        }
      }
      function sv(e) {
        return e && 1 === e.nodeType;
      }
      function ov(e, t) {
        const n = e.style.display;
        return (e.style.display = null != t ? t : 'none'), n;
      }
      function lv(e, t, n, r, i) {
        const s = [];
        n.forEach(e => s.push(ov(e)));
        const o = [];
        r.forEach((n, r) => {
          const s = {};
          n.forEach(e => {
            const n = (s[e] = t.computeStyle(r, e, i));
            (n && 0 != n.length) || ((r[Xy] = Yy), o.push(r));
          }),
            e.set(r, s);
        });
        let l = 0;
        return n.forEach(e => ov(e, s[l++])), o;
      }
      function av(e, t) {
        const n = new Map();
        if ((e.forEach(e => n.set(e, [])), 0 == t.length)) return n;
        const r = new Set(t),
          i = new Map();
        return (
          t.forEach(e => {
            const t = (function e(t) {
              if (!t) return 1;
              let s = i.get(t);
              if (s) return s;
              const o = t.parentNode;
              return (s = n.has(o) ? o : r.has(o) ? 1 : e(o)), i.set(t, s), s;
            })(e);
            1 !== t && n.get(t).push(e);
          }),
          n
        );
      }
      const uv = '$$classes';
      function cv(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          let n = e[uv];
          n || (n = e[uv] = {}), (n[t] = !0);
        }
      }
      function hv(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          let n = e[uv];
          n && delete n[t];
        }
      }
      function dv(e, t, n) {
        db(n).onDone(() => e.processLeaveNode(t));
      }
      function mv(e, t, n) {
        const r = n.get(e);
        if (!r) return !1;
        let i = t.get(e);
        return i ? r.forEach(e => i.add(e)) : t.set(e, r), n.delete(e), !0;
      }
      class pv {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (e, t) => {}),
            (this._transitionEngine = new rv(e, t, n)),
            (this._timelineEngine = new zy(e, t, n)),
            (this._transitionEngine.onRemovalComplete = (e, t) =>
              this.onRemovalComplete(e, t));
        }
        registerTrigger(e, t, n, r, i) {
          const s = e + '-' + r;
          let o = this._triggerCache[s];
          if (!o) {
            const e = [],
              t = my(this._driver, i, e);
            if (e.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join(
                  '\n - '
                )}`
              );
            (o = (function (e, t) {
              return new Uy(e, t);
            })(r, t)),
              (this._triggerCache[s] = o);
          }
          this._transitionEngine.registerTrigger(t, r, o);
        }
        register(e, t) {
          this._transitionEngine.register(e, t);
        }
        destroy(e, t) {
          this._transitionEngine.destroy(e, t);
        }
        onInsert(e, t, n, r) {
          this._transitionEngine.insertNode(e, t, n, r);
        }
        onRemove(e, t, n, r) {
          this._transitionEngine.removeNode(e, t, r || !1, n);
        }
        disableAnimations(e, t) {
          this._transitionEngine.markElementAsDisabled(e, t);
        }
        process(e, t, n, r) {
          if ('@' == n.charAt(0)) {
            const [e, i] = bb(n);
            this._timelineEngine.command(e, t, i, r);
          } else this._transitionEngine.trigger(e, t, n, r);
        }
        listen(e, t, n, r, i) {
          if ('@' == n.charAt(0)) {
            const [e, r] = bb(n);
            return this._timelineEngine.listen(e, t, r, i);
          }
          return this._transitionEngine.listen(e, t, n, r, i);
        }
        flush(e = -1) {
          this._transitionEngine.flush(e);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function fv(e, t) {
        let n = null,
          r = null;
        return (
          Array.isArray(t) && t.length
            ? ((n = _v(t[0])), t.length > 1 && (r = _v(t[t.length - 1])))
            : t && (n = _v(t)),
          n || r ? new gv(e, n, r) : null
        );
      }
      let gv = (() => {
        class e {
          constructor(t, n, r) {
            (this._element = t),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let i = e.initialStylesByElement.get(t);
            i || e.initialStylesByElement.set(t, (i = {})),
              (this._initialStyles = i);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                Qb(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (Qb(this._element, this._initialStyles),
                this._endStyles &&
                  (Qb(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (e.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (Wb(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (Wb(this._element, this._endStyles),
                  (this._endStyles = null)),
                Qb(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (e.initialStylesByElement = new WeakMap()), e;
      })();
      function _v(e) {
        let t = null;
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          bv(i) && ((t = t || {})[i] = e[i]);
        }
        return t;
      }
      function bv(e) {
        return 'display' === e || 'position' === e;
      }
      const yv = 3,
        vv = 'animation',
        wv = 'animationend',
        Cv = 1e3;
      class xv {
        constructor(e, t, n, r, i, s, o) {
          (this._element = e),
            (this._name = t),
            (this._duration = n),
            (this._delay = r),
            (this._easing = i),
            (this._fillMode = s),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = e => this._handleCallback(e));
        }
        apply() {
          !(function (e, t) {
            const n = Av(e, '').trim();
            n.length &&
              ((function (e, t) {
                let n = 0;
                for (let r = 0; r < e.length; r++) ',' === e.charAt(r) && n++;
              })(n),
              (t = `${n}, ${t}`)),
              Iv(e, '', t);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Tv(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          kv(this._element, this._name, 'paused');
        }
        resume() {
          kv(this._element, this._name, 'running');
        }
        setPosition(e) {
          const t = Ev(this._element, this._name);
          (this._position = e * this._duration),
            Iv(this._element, 'Delay', `-${this._position}ms`, t);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(e) {
          const t = e._ngTestManualTimestamp || Date.now(),
            n = parseFloat(e.elapsedTime.toFixed(yv)) * Cv;
          e.animationName == this._name &&
            Math.max(t - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Tv(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (e, t) {
              const n = Av(e, '').split(','),
                r = Sv(n, t);
              r >= 0 && (n.splice(r, 1), Iv(e, '', n.join(',')));
            })(this._element, this._name));
        }
      }
      function kv(e, t, n) {
        Iv(e, 'PlayState', n, Ev(e, t));
      }
      function Ev(e, t) {
        const n = Av(e, '');
        return n.indexOf(',') > 0 ? Sv(n.split(','), t) : Sv([n], t);
      }
      function Sv(e, t) {
        for (let n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
        return -1;
      }
      function Tv(e, t, n) {
        n ? e.removeEventListener(wv, t) : e.addEventListener(wv, t);
      }
      function Iv(e, t, n, r) {
        const i = vv + t;
        if (null != r) {
          const t = e.style[i];
          if (t.length) {
            const e = t.split(',');
            (e[r] = n), (n = e.join(','));
          }
        }
        e.style[i] = n;
      }
      function Av(e, t) {
        return e.style[vv + t];
      }
      const Ov = 'forwards',
        Pv = 'linear';
      class Mv {
        constructor(e, t, n, r, i, s, o, l) {
          (this.element = e),
            (this.keyframes = t),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = i),
            (this._finalStyles = o),
            (this._specialStyles = l),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = s || Pv),
            (this.totalTime = r + i),
            this._buildStyler();
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach(e => e()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach(e => e()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach(e => e()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(e) {
          this._styler.setPosition(e);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new xv(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            Ov,
            () => this.finish()
          );
        }
        triggerCallback(e) {
          const t = 'start' == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
        beforeDestroy() {
          this.init();
          const e = {};
          if (this.hasStarted()) {
            const t = this._state >= 3;
            Object.keys(this._finalStyles).forEach(n => {
              'offset' != n &&
                (e[n] = t ? this._finalStyles[n] : sy(this.element, n));
            });
          }
          this.currentSnapshot = e;
        }
      }
      class Rv extends Yh {
        constructor(e, t) {
          super(),
            (this.element = e),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Ab(t));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach(e => {
              this._startingStyles[e] = this.element.style[e];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach(e =>
              this.element.style.setProperty(e, this._styles[e])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach(e => {
              const t = this._startingStyles[e];
              t
                ? this.element.style.setProperty(e, t)
                : this.element.style.removeProperty(e);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      const Nv = 'gen_css_kf_',
        Dv = ' ';
      class Fv {
        constructor() {
          (this._count = 0),
            (this._head = document.querySelector('head')),
            (this._warningIssued = !1);
        }
        validateStyleProperty(e) {
          return Eb(e);
        }
        matchesElement(e, t) {
          return Sb(e, t);
        }
        containsElement(e, t) {
          return Tb(e, t);
        }
        query(e, t, n) {
          return Ib(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        buildKeyframeElement(e, t, n) {
          n = n.map(e => Ab(e));
          let r = `@keyframes ${t} {\n`,
            i = '';
          n.forEach(e => {
            i = Dv;
            const t = parseFloat(e.offset);
            (r += `${i}${100 * t}% {\n`),
              (i += Dv),
              Object.keys(e).forEach(t => {
                const n = e[t];
                switch (t) {
                  case 'offset':
                    return;
                  case 'easing':
                    return void (
                      n && (r += `${i}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${i}${t}: ${n};\n`);
                }
              }),
              (r += `${i}}\n`);
          }),
            (r += '}\n');
          const s = document.createElement('style');
          return (s.innerHTML = r), s;
        }
        animate(e, t, n, r, i, s = [], o) {
          o && this._notifyFaultyScrubber();
          const l = s.filter(e => e instanceof Mv),
            a = {};
          ny(n, r) &&
            l.forEach(e => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach(e => (a[e] = t[e]));
            });
          const u = (function (e) {
            let t = {};
            return (
              e &&
                (Array.isArray(e) ? e : [e]).forEach(e => {
                  Object.keys(e).forEach(n => {
                    'offset' != n && 'easing' != n && (t[n] = e[n]);
                  });
                }),
              t
            );
          })((t = ry(e, t, a)));
          if (0 == n) return new Rv(e, u);
          const c = `${Nv}${this._count++}`,
            h = this.buildKeyframeElement(e, c, t);
          document.querySelector('head').appendChild(h);
          const d = fv(e, t),
            m = new Mv(e, t, c, n, r, i, u, d);
          return (
            m.onDestroy(() =>
              (function (e) {
                e.parentNode.removeChild(e);
              })(h)
            ),
            m
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              '@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n',
              '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.'
            ),
            (this._warningIssued = !0));
        }
      }
      class Lv {
        constructor(e, t, n, r) {
          (this.element = e),
            (this.keyframes = t),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(e => e()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const e = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            e,
            this.options
          )),
            (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(e, t, n) {
          return e.animate(t, n);
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach(e => e()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach(e => e()),
            (this._onDestroyFns = []));
        }
        setPosition(e) {
          this.domPlayer.currentTime = e * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const e = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach(t => {
              'offset' != t &&
                (e[t] = this._finished
                  ? this._finalKeyframe[t]
                  : sy(this.element, t));
            }),
            (this.currentSnapshot = e);
        }
        triggerCallback(e) {
          const t = 'start' == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
      }
      class Vv {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            Uv().toString()
          )),
            (this._cssKeyframesDriver = new Fv());
        }
        validateStyleProperty(e) {
          return Eb(e);
        }
        matchesElement(e, t) {
          return Sb(e, t);
        }
        containsElement(e, t) {
          return Tb(e, t);
        }
        query(e, t, n) {
          return Ib(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        overrideWebAnimationsSupport(e) {
          this._isNativeImpl = e;
        }
        animate(e, t, n, r, i, s = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(e, t, n, r, i, s);
          const l = {
            duration: n,
            delay: r,
            fill: 0 == r ? 'both' : 'forwards'
          };
          i && (l.easing = i);
          const a = {},
            u = s.filter(e => e instanceof Lv);
          ny(n, r) &&
            u.forEach(e => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach(e => (a[e] = t[e]));
            });
          const c = fv(e, (t = ry(e, (t = t.map(e => Hb(e, !1))), a)));
          return new Lv(e, t, l, c);
        }
      }
      function Uv() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      class jv extends qh {
        constructor(e, t) {
          super(),
            (this._nextAnimationId = 0),
            (this._renderer = e.createRenderer(t.body, {
              id: '0',
              encapsulation: We.None,
              styles: [],
              data: { animation: [] }
            }));
        }
        build(e) {
          const t = this._nextAnimationId.toString();
          this._nextAnimationId++;
          const n = Array.isArray(e) ? Wh(e) : e;
          return (
            Bv(this._renderer, null, t, 'register', [n]),
            new $v(t, this._renderer)
          );
        }
      }
      class $v extends Gh {
        constructor(e, t) {
          super(), (this._id = e), (this._renderer = t);
        }
        create(e, t) {
          return new zv(this._id, e, t || {}, this._renderer);
        }
      }
      class zv {
        constructor(e, t, n, r) {
          (this.id = e),
            (this.element = t),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', n);
        }
        _listen(e, t) {
          return this._renderer.listen(this.element, `@@${this.id}:${e}`, t);
        }
        _command(e, ...t) {
          return Bv(this._renderer, this.element, this.id, e, t);
        }
        onDone(e) {
          this._listen('done', e);
        }
        onStart(e) {
          this._listen('start', e);
        }
        onDestroy(e) {
          this._listen('destroy', e);
        }
        init() {
          this._command('init');
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command('play'), (this._started = !0);
        }
        pause() {
          this._command('pause');
        }
        restart() {
          this._command('restart');
        }
        finish() {
          this._command('finish');
        }
        destroy() {
          this._command('destroy');
        }
        reset() {
          this._command('reset');
        }
        setPosition(e) {
          this._command('setPosition', e);
        }
        getPosition() {
          return 0;
        }
      }
      function Bv(e, t, n, r, i) {
        return e.setProperty(t, `@@${n}:${r}`, i);
      }
      const Hv = '@',
        qv = '@.disabled';
      class Gv {
        constructor(e, t, n) {
          (this.delegate = e),
            (this.engine = t),
            (this._zone = n),
            (this._currentId = 0),
            (this._microtaskId = 1),
            (this._animationCallbacksBuffer = []),
            (this._rendererCache = new Map()),
            (this._cdRecurDepth = 0),
            (this.promise = Promise.resolve(0)),
            (t.onRemovalComplete = (e, t) => {
              t && t.parentNode(e) && t.removeChild(e.parentNode, e);
            });
        }
        createRenderer(e, t) {
          const n = this.delegate.createRenderer(e, t);
          if (!(e && t && t.data && t.data.animation)) {
            let e = this._rendererCache.get(n);
            return (
              e ||
                ((e = new Qv('', n, this.engine)),
                this._rendererCache.set(n, e)),
              e
            );
          }
          const r = t.id,
            i = t.id + '-' + this._currentId;
          return (
            this._currentId++,
            this.engine.register(i, e),
            t.data.animation.forEach(t =>
              this.engine.registerTrigger(r, i, e, t.name, t)
            ),
            new Wv(this, i, n, this.engine)
          );
        }
        begin() {
          this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
        }
        _scheduleCountTask() {
          this.promise.then(() => {
            this._microtaskId++;
          });
        }
        scheduleListenerCallback(e, t, n) {
          e >= 0 && e < this._microtaskId
            ? this._zone.run(() => t(n))
            : (0 == this._animationCallbacksBuffer.length &&
                Promise.resolve(null).then(() => {
                  this._zone.run(() => {
                    this._animationCallbacksBuffer.forEach(e => {
                      const [t, n] = e;
                      t(n);
                    }),
                      (this._animationCallbacksBuffer = []);
                  });
                }),
              this._animationCallbacksBuffer.push([t, n]));
        }
        end() {
          this._cdRecurDepth--,
            0 == this._cdRecurDepth &&
              this._zone.runOutsideAngular(() => {
                this._scheduleCountTask(), this.engine.flush(this._microtaskId);
              }),
            this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.engine.whenRenderingDone();
        }
      }
      class Qv {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.delegate = t),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? e => t.destroyNode(e)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(e, t) {
          return this.delegate.createElement(e, t);
        }
        createComment(e) {
          return this.delegate.createComment(e);
        }
        createText(e) {
          return this.delegate.createText(e);
        }
        appendChild(e, t) {
          this.delegate.appendChild(e, t),
            this.engine.onInsert(this.namespaceId, t, e, !1);
        }
        insertBefore(e, t, n) {
          this.delegate.insertBefore(e, t, n),
            this.engine.onInsert(this.namespaceId, t, e, !0);
        }
        removeChild(e, t, n) {
          this.engine.onRemove(this.namespaceId, t, this.delegate, n);
        }
        selectRootElement(e, t) {
          return this.delegate.selectRootElement(e, t);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setAttribute(e, t, n, r) {
          this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          t.charAt(0) == Hv && t == qv
            ? this.disableAnimations(e, !!n)
            : this.delegate.setProperty(e, t, n);
        }
        setValue(e, t) {
          this.delegate.setValue(e, t);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        disableAnimations(e, t) {
          this.engine.disableAnimations(e, t);
        }
      }
      class Wv extends Qv {
        constructor(e, t, n, r) {
          super(t, n, r), (this.factory = e), (this.namespaceId = t);
        }
        setProperty(e, t, n) {
          t.charAt(0) == Hv
            ? '.' == t.charAt(1) && t == qv
              ? this.disableAnimations(e, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, e, t.substr(1), n)
            : this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if (t.charAt(0) == Hv) {
            const r = (function (e) {
              switch (e) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return e;
              }
            })(e);
            let i = t.substr(1),
              s = '';
            return (
              i.charAt(0) != Hv &&
                ([i, s] = (function (e) {
                  const t = e.indexOf('.');
                  return [e.substring(0, t), e.substr(t + 1)];
                })(i)),
              this.engine.listen(this.namespaceId, r, i, s, e => {
                this.factory.scheduleListenerCallback(e._data || -1, n, e);
              })
            );
          }
          return this.delegate.listen(e, t, n);
        }
      }
      class Kv extends pv {
        constructor(e, t, n) {
          super(e.body, t, n);
        }
      }
      function Zv() {
        return 'function' == typeof Uv() ? new Vv() : new Fv();
      }
      function Yv() {
        return new Ry();
      }
      function Xv(e, t, n) {
        return new Gv(e, t, n);
      }
      const Jv = new Te('AnimationModuleType');
      class ew {}
      var tw = ir({
        encapsulation: 2,
        styles: [
          '@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}'
        ],
        data: {}
      });
      function nw(e) {
        return yo(
          2,
          [
            oo(671088640, 1, { _inputElement: 0 }),
            oo(671088640, 2, { ripple: 0 }),
            (e()(),
            to(
              2,
              0,
              [['label', 1]],
              null,
              16,
              'label',
              [['class', 'mat-checkbox-layout']],
              [[1, 'for', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'mat-checkbox-inner-container']],
              [[2, 'mat-checkbox-inner-container-no-side-margin', null]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              4,
              0,
              [
                [1, 0],
                ['input', 1]
              ],
              null,
              0,
              'input',
              [
                ['class', 'mat-checkbox-input cdk-visually-hidden'],
                ['type', 'checkbox']
              ],
              [
                [8, 'id', 0],
                [8, 'required', 0],
                [8, 'checked', 0],
                [1, 'value', 0],
                [8, 'disabled', 0],
                [1, 'name', 0],
                [8, 'tabIndex', 0],
                [8, 'indeterminate', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-checked', 0]
              ],
              [
                [null, 'change'],
                [null, 'click']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'change' === t && (r = !1 !== i._onInteractionEvent(n) && r),
                  'click' === t && (r = !1 !== i._onInputClick(n) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            to(
              5,
              0,
              null,
              null,
              3,
              'div',
              [
                ['class', 'mat-checkbox-ripple mat-ripple'],
                ['matRipple', '']
              ],
              [[2, 'mat-ripple-unbounded', null]],
              null,
              null,
              null,
              null
            )),
            di(
              6,
              212992,
              [[2, 4]],
              0,
              kc,
              [mn, ms, Su, [2, xc], [2, Jv]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            po(7, { enterDuration: 0 }),
            (e()(),
            to(
              8,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-ripple-element mat-checkbox-persistent-ripple']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              9,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-checkbox-frame']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              10,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-checkbox-background']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              11,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [
                [':xml:space', 'preserve'],
                ['class', 'mat-checkbox-checkmark'],
                ['focusable', 'false'],
                ['version', '1.1'],
                ['viewBox', '0 0 24 24']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              12,
              0,
              null,
              null,
              0,
              ':svg:path',
              [
                ['class', 'mat-checkbox-checkmark-path'],
                ['d', 'M4.1,12.7 9,17.6 20.3,6.3'],
                ['fill', 'none'],
                ['stroke', 'white']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              13,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-checkbox-mixedmark']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              14,
              0,
              [['checkboxLabel', 1]],
              null,
              4,
              'span',
              [['class', 'mat-checkbox-label']],
              null,
              [[null, 'cdkObserveContent']],
              function (e, t, n) {
                var r = !0;
                return (
                  'cdkObserveContent' === t &&
                    (r = !1 !== e.component._onLabelTextChange() && r),
                  r
                );
              },
              null,
              null
            )),
            di(15, 1196032, null, 0, ub, [ab, mn, ms], null, {
              event: 'cdkObserveContent'
            }),
            (e()(),
            to(
              16,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'display:none']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['\xa0'])),
            ho(null, 0)
          ],
          function (e, t) {
            var n = t.component,
              r = e(t, 7, 0, 150);
            e(t, 6, 0, !0, 20, r, n._isRippleDisabled(), Jr(t, 2));
          },
          function (e, t) {
            var n = t.component;
            e(t, 2, 0, n.inputId),
              e(
                t,
                3,
                0,
                !Jr(t, 14).textContent || !Jr(t, 14).textContent.trim()
              ),
              e(t, 4, 1, [
                n.inputId,
                n.required,
                n.checked,
                n.value,
                n.disabled,
                n.name,
                n.tabIndex,
                n.indeterminate,
                n.ariaLabel || null,
                n.ariaLabelledby,
                n._getAriaChecked()
              ]),
              e(t, 5, 0, Jr(t, 6).unbounded);
          }
        );
      }
      var rw = ir({
        encapsulation: 2,
        styles: [
          '.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}'
        ],
        data: {}
      });
      function iw(e) {
        return yo(
          2,
          [
            oo(671088640, 1, { ripple: 0 }),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'mat-button-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            ho(null, 0),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              1,
              'div',
              [
                ['class', 'mat-button-ripple mat-ripple'],
                ['matRipple', '']
              ],
              [
                [2, 'mat-button-ripple-round', null],
                [2, 'mat-ripple-unbounded', null]
              ],
              null,
              null,
              null,
              null
            )),
            di(
              4,
              212992,
              [[1, 4]],
              0,
              kc,
              [mn, ms, Su, [2, xc], [2, Jv]],
              {
                centered: [0, 'centered'],
                disabled: [1, 'disabled'],
                trigger: [2, 'trigger']
              },
              null
            ),
            (e()(),
            to(
              5,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-button-focus-overlay']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              4,
              0,
              n.isIconButton,
              n._isRippleDisabled(),
              n._getHostElement()
            );
          },
          function (e, t) {
            var n = t.component;
            e(t, 3, 0, n.isRoundButton || n.isIconButton, Jr(t, 4).unbounded);
          }
        );
      }
      let sw = (() => {
        class e {
          constructor() {
            this._listeners = [];
          }
          notify(e, t) {
            for (let n of this._listeners) n(e, t);
          }
          listen(e) {
            return (
              this._listeners.push(e),
              () => {
                this._listeners = this._listeners.filter(t => e !== t);
              }
            );
          }
          ngOnDestroy() {
            this._listeners = [];
          }
        }
        return (
          (e.ngInjectableDef = fe({
            factory: function () {
              return new e();
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      var ow = ir({
        encapsulation: 2,
        styles: [
          '.mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}@media (-ms-high-contrast:active){.mat-radio-checked .mat-radio-inner-circle{border:solid 10px}}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple,.mat-radio-persistent-ripple{opacity:0}@media (hover:none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}@media (-ms-high-contrast:active){.mat-radio-disabled{opacity:.5}}'
        ],
        data: {}
      });
      function lw(e) {
        return yo(
          2,
          [
            oo(671088640, 1, { _inputElement: 0 }),
            (e()(),
            to(
              1,
              0,
              [['label', 1]],
              null,
              12,
              'label',
              [['class', 'mat-radio-label']],
              [[1, 'for', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              2,
              0,
              null,
              null,
              7,
              'div',
              [['class', 'mat-radio-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-radio-outer-circle']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              4,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-radio-inner-circle']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              5,
              0,
              null,
              null,
              3,
              'div',
              [
                ['class', 'mat-radio-ripple mat-ripple'],
                ['mat-ripple', '']
              ],
              [[2, 'mat-ripple-unbounded', null]],
              null,
              null,
              null,
              null
            )),
            di(
              6,
              212992,
              null,
              0,
              kc,
              [mn, ms, Su, [2, xc], [2, Jv]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            po(7, { enterDuration: 0 }),
            (e()(),
            to(
              8,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-ripple-element mat-radio-persistent-ripple']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              9,
              0,
              [
                [1, 0],
                ['input', 1]
              ],
              null,
              0,
              'input',
              [
                ['class', 'mat-radio-input cdk-visually-hidden'],
                ['type', 'radio']
              ],
              [
                [8, 'id', 0],
                [8, 'checked', 0],
                [8, 'disabled', 0],
                [8, 'tabIndex', 0],
                [1, 'name', 0],
                [1, 'value', 0],
                [8, 'required', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [
                [null, 'change'],
                [null, 'click']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'change' === t && (r = !1 !== i._onInputChange(n) && r),
                  'click' === t && (r = !1 !== i._onInputClick(n) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            to(
              10,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-radio-label-content']],
              [[2, 'mat-radio-label-before', null]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              11,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'display:none']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['\xa0'])),
            ho(null, 0)
          ],
          function (e, t) {
            var n = t.component,
              r = e(t, 7, 0, 150);
            e(t, 6, 0, !0, 20, r, n._isRippleDisabled(), Jr(t, 1));
          },
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n.inputId),
              e(t, 5, 0, Jr(t, 6).unbounded),
              e(
                t,
                9,
                0,
                n.inputId,
                n.checked,
                n.disabled,
                n.tabIndex,
                n.name,
                n.value,
                n.required,
                n.ariaLabel,
                n.ariaLabelledby,
                n.ariaDescribedby
              ),
              e(t, 10, 0, 'before' == n.labelPosition);
          }
        );
      }
      var aw = ir({
        encapsulation: 2,
        styles: [
          '.mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}',
          ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}",
          ".mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}",
          '.mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}',
          '.mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none}',
          '.mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}'
        ],
        data: {
          animation: [
            {
              type: 7,
              name: 'transitionMessages',
              definitions: [
                {
                  type: 0,
                  name: 'enter',
                  styles: {
                    type: 6,
                    styles: { opacity: 1, transform: 'translateY(0%)' },
                    offset: null
                  },
                  options: void 0
                },
                {
                  type: 1,
                  expr: 'void => enter',
                  animation: [
                    {
                      type: 6,
                      styles: { opacity: 0, transform: 'translateY(-100%)' },
                      offset: null
                    },
                    {
                      type: 4,
                      styles: null,
                      timings: '300ms cubic-bezier(0.55, 0, 0.55, 0.2)'
                    }
                  ],
                  options: null
                }
              ],
              options: {}
            }
          ]
        }
      });
      function uw(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-form-field-outline']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              2,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-start']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              3,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-gap']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              4,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-end']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              5,
              0,
              null,
              null,
              3,
              'div',
              [
                ['class', 'mat-form-field-outline mat-form-field-outline-thick']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              6,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-start']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              7,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-gap']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              8,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-end']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      function cw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-form-field-prefix']],
              null,
              null,
              null,
              null,
              null
            )),
            ho(null, 0)
          ],
          null,
          null
        );
      }
      function hw(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 3, null, null, null, null, null, null, null)),
            ho(null, 2),
            (e()(),
            to(2, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), go(3, null, ['', '']))
          ],
          null,
          function (e, t) {
            e(t, 3, 0, t.component._control.placeholder);
          }
        );
      }
      function dw(e) {
        return yo(0, [ho(null, 3), (e()(), eo(0, null, null, 0))], null, null);
      }
      function mw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'span',
              [
                ['aria-hidden', 'true'],
                [
                  'class',
                  'mat-placeholder-required mat-form-field-required-marker'
                ]
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, [' *']))
          ],
          null,
          null
        );
      }
      function pw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              [
                [4, 0],
                ['label', 1]
              ],
              null,
              8,
              'label',
              [['class', 'mat-form-field-label']],
              [
                [8, 'id', 0],
                [1, 'for', 0],
                [1, 'aria-owns', 0],
                [2, 'mat-empty', null],
                [2, 'mat-form-field-empty', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null]
              ],
              [[null, 'cdkObserveContent']],
              function (e, t, n) {
                var r = !0;
                return (
                  'cdkObserveContent' === t &&
                    (r = !1 !== e.component.updateOutlineGap() && r),
                  r
                );
              },
              null,
              null
            )),
            di(1, 16384, null, 0, Gl, [], { ngSwitch: [0, 'ngSwitch'] }, null),
            di(
              2,
              1196032,
              null,
              0,
              ub,
              [ab, mn, ms],
              { disabled: [0, 'disabled'] },
              { event: 'cdkObserveContent' }
            ),
            (e()(), eo(16777216, null, null, 1, null, hw)),
            di(
              4,
              278528,
              null,
              0,
              Ql,
              [Un, Ln, Gl],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (e()(), eo(16777216, null, null, 1, null, dw)),
            di(
              6,
              278528,
              null,
              0,
              Ql,
              [Un, Ln, Gl],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (e()(), eo(16777216, null, null, 1, null, mw)),
            di(8, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, n._hasLabel()),
              e(t, 2, 0, 'outline' != n.appearance),
              e(t, 4, 0, !1),
              e(t, 6, 0, !0),
              e(
                t,
                8,
                0,
                !n.hideRequiredMarker &&
                  n._control.required &&
                  !n._control.disabled
              );
          },
          function (e, t) {
            var n = t.component;
            e(
              t,
              0,
              0,
              n._labelId,
              n._control.id,
              n._control.id,
              n._control.empty && !n._shouldAlwaysFloat,
              n._control.empty && !n._shouldAlwaysFloat,
              'accent' == n.color,
              'warn' == n.color
            );
          }
        );
      }
      function fw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-form-field-suffix']],
              null,
              null,
              null,
              null,
              null
            )),
            ho(null, 4)
          ],
          null,
          null
        );
      }
      function gw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              [
                [1, 0],
                ['underline', 1]
              ],
              null,
              1,
              'div',
              [['class', 'mat-form-field-underline']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              0,
              'span',
              [['class', 'mat-form-field-ripple']],
              [
                [2, 'mat-accent', null],
                [2, 'mat-warn', null]
              ],
              null,
              null,
              null,
              null
            ))
          ],
          null,
          function (e, t) {
            var n = t.component;
            e(t, 1, 0, 'accent' == n.color, 'warn' == n.color);
          }
        );
      }
      function _w(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [],
              [[24, '@transitionMessages', 0]],
              null,
              null,
              null,
              null
            )),
            ho(null, 5)
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.component._subscriptAnimationState);
          }
        );
      }
      function bw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-hint']],
              [[8, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), go(1, null, ['', '']))
          ],
          null,
          function (e, t) {
            var n = t.component;
            e(t, 0, 0, n._hintLabelId), e(t, 1, 0, n.hintLabel);
          }
        );
      }
      function yw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'mat-form-field-hint-wrapper']],
              [[24, '@transitionMessages', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, bw)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            ho(null, 6),
            (e()(),
            to(
              4,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-hint-spacer']],
              null,
              null,
              null,
              null,
              null
            )),
            ho(null, 7)
          ],
          function (e, t) {
            e(t, 2, 0, t.component.hintLabel);
          },
          function (e, t) {
            e(t, 0, 0, t.component._subscriptAnimationState);
          }
        );
      }
      function vw(e) {
        return yo(
          2,
          [
            oo(671088640, 1, { underlineRef: 0 }),
            oo(402653184, 2, { _connectionContainerRef: 0 }),
            oo(671088640, 3, { _inputContainerRef: 0 }),
            oo(671088640, 4, { _label: 0 }),
            (e()(),
            to(
              4,
              0,
              null,
              null,
              20,
              'div',
              [['class', 'mat-form-field-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              5,
              0,
              [
                [2, 0],
                ['connectionContainer', 1]
              ],
              null,
              11,
              'div',
              [['class', 'mat-form-field-flex']],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'click' === t &&
                    (r =
                      !1 !==
                        (i._control.onContainerClick &&
                          i._control.onContainerClick(n)) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, uw)),
            di(7, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, cw)),
            di(9, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            to(
              10,
              0,
              [
                [3, 0],
                ['inputContainer', 1]
              ],
              null,
              4,
              'div',
              [['class', 'mat-form-field-infix']],
              null,
              null,
              null,
              null,
              null
            )),
            ho(null, 1),
            (e()(),
            to(
              12,
              0,
              null,
              null,
              2,
              'span',
              [['class', 'mat-form-field-label-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, pw)),
            di(14, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, fw)),
            di(16, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(16777216, null, null, 1, null, gw)),
            di(18, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            to(
              19,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'mat-form-field-subscript-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            di(20, 16384, null, 0, Gl, [], { ngSwitch: [0, 'ngSwitch'] }, null),
            (e()(), eo(16777216, null, null, 1, null, _w)),
            di(
              22,
              278528,
              null,
              0,
              Ql,
              [Un, Ln, Gl],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (e()(), eo(16777216, null, null, 1, null, yw)),
            di(
              24,
              278528,
              null,
              0,
              Ql,
              [Un, Ln, Gl],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            )
          ],
          function (e, t) {
            var n = t.component;
            e(t, 7, 0, 'outline' == n.appearance),
              e(t, 9, 0, n._prefixChildren.length),
              e(t, 14, 0, n._hasFloatingLabel()),
              e(t, 16, 0, n._suffixChildren.length),
              e(t, 18, 0, 'outline' != n.appearance),
              e(t, 20, 0, n._getDisplayedMessages()),
              e(t, 22, 0, 'error'),
              e(t, 24, 0, 'hint');
          },
          null
        );
      }
      var ww = ir({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:block;min-height:1000px}form[_ngcontent-%COMP%]{margin-bottom:20px}section[_ngcontent-%COMP%]{margin-bottom:15px}mat-checkbox[_ngcontent-%COMP%]{display:block}mat-radio-button[_ngcontent-%COMP%]{margin-left:20px}mat-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{white-space:nowrap}ngx-gallery[_ngcontent-%COMP%]{width:100%;margin:0 auto 300px}@media (max-width:480px){ngx-gallery[_ngcontent-%COMP%]{max-width:calc(100vw - 60px)}}ngx-gallery[_ngcontent-%COMP%]     ngx-image-viewer img{margin:0 auto}  .gallery-detail ngx-gallery{width:100vw;height:100vh;max-width:900px;max-height:800px}@media (max-width:767px){  .gallery-detail ngx-gallery{width:auto}}  .gallery-detail ngx-gallery img{margin:0 auto}  .gallery-detail ngx-gallery ngx-image-viewer .next{right:30px}  .gallery-detail ngx-gallery ngx-image-viewer .prev{left:30px}section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]  .image-loading-latency .mat-form-field-infix{width:auto}.custom-media[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;width:100%;height:100%;outline:0}.custom-media[src=""][_ngcontent-%COMP%]{opacity:0}.custom-error[_ngcontent-%COMP%], .custom-loading[_ngcontent-%COMP%], .custom-thumb-error[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;justify-content:center;align-items:center;background-color:#000;color:#fff;opacity:.8}.custom-next-thumbs[_ngcontent-%COMP%], .custom-prev-thumbs[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;width:36px;background-color:transparent;border:none;display:block;outline:0;cursor:pointer}.custom-prev-thumbs[_ngcontent-%COMP%]{left:-40px}.custom-next-thumbs[_ngcontent-%COMP%]{right:-40px}'
          ]
        ],
        data: {}
      });
      function Cw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              2,
              'ngx-gallery',
              [],
              [
                [8, 'tabIndex', 0],
                [2, 'column', null],
                [1, 'aria-label', 0]
              ],
              [
                [null, 'imageClick'],
                [null, 'descriptionClick'],
                [null, 'keydown.arrowright'],
                [null, 'keydown.arrowleft']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'keydown.arrowright' === t &&
                    (r = !1 !== Jr(e, 1).next() && r),
                  'keydown.arrowleft' === t &&
                    (r = !1 !== Jr(e, 1).prev() && r),
                  'imageClick' === t && (r = !1 !== i.onImageClick(n) && r),
                  'descriptionClick' === t &&
                    (r = 0 != (i.galleryConfig.descriptions = !1) && r),
                  r
                );
              },
              tb,
              Z_
            )),
            di(
              1,
              770048,
              [[1, 4]],
              0,
              Um,
              [],
              {
                items: [0, 'items'],
                arrows: [1, 'arrows'],
                descriptions: [2, 'descriptions'],
                mouseGestures: [3, 'mouseGestures'],
                touchGestures: [4, 'touchGestures'],
                imageCounter: [5, 'imageCounter'],
                imageCounterOrientation: [6, 'imageCounterOrientation'],
                loading: [7, 'loading'],
                loop: [8, 'loop'],
                objectFit: [9, 'objectFit'],
                thumbs: [10, 'thumbs'],
                thumbsAutoScroll: [11, 'thumbsAutoScroll'],
                thumbsOrientation: [12, 'thumbsOrientation'],
                thumbsArrows: [13, 'thumbsArrows'],
                thumbsArrowSlideByLength: [14, 'thumbsArrowSlideByLength'],
                thumbsScrollBehavior: [15, 'thumbsScrollBehavior']
              },
              { imageClick: 'imageClick', descriptionClick: 'descriptionClick' }
            ),
            mi(131072, Jl, [Rt])
          ],
          function (e, t) {
            var n = t.component;
            e(t, 1, 1, [
              tr(t, 1, 0, Jr(t, 2).transform(n.images)),
              n.galleryConfig.arrows,
              n.galleryConfig.descriptions,
              n.galleryConfig.mouseGestures,
              n.galleryConfig.touchGestures,
              n.galleryConfig.imageCounter,
              n.galleryConfig.imageCounterOrientation,
              n.galleryConfig.loading,
              n.galleryConfig.loop,
              n.galleryConfig.objectFit,
              n.galleryConfig.thumbs,
              n.galleryConfig.thumbsAutoScroll,
              n.galleryConfig.thumbsOrientation,
              n.galleryConfig.thumbsArrows,
              n.galleryConfig.thumbsArrowSlideByLength,
              n.galleryConfig.thumbsScrollBehavior
            ]);
          },
          function (e, t) {
            e(
              t,
              0,
              0,
              Jr(t, 1)._tabindex,
              Jr(t, 1).galleryCollumn,
              Jr(t, 1).ariaLabel
            );
          }
        );
      }
      function xw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'custom-loading']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, [' Custom Loading ... ']))
          ],
          null,
          null
        );
      }
      function kw(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 0, null, null, null, null, null, null, null))
          ],
          null,
          null
        );
      }
      function Ew(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'custom-loading']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, [' Custom item loading ... ']))
          ],
          null,
          null
        );
      }
      function Sw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              [['img', 1]],
              null,
              0,
              'img',
              [['class', 'custom-media']],
              [[8, 'src', 4]],
              [[null, 'load']],
              function (e, t, n) {
                var r = !0;
                return (
                  'load' === t && (r = !1 !== e.component.onImageLoad() && r), r
                );
              },
              null,
              null
            )),
            (e()(), eo(16777216, null, null, 1, null, Ew)),
            di(2, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(0, null, null, 0))
          ],
          function (e, t) {
            e(t, 2, 0, t.parent.context.seen && Jr(t, 0).naturalHeight <= 0);
          },
          function (e, t) {
            e(t, 0, 0, t.parent.context.seen ? t.parent.context.item.src : '');
          }
        );
      }
      function Tw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              [['video', 1]],
              null,
              0,
              'video',
              [
                ['class', 'custom-media'],
                ['controls', '']
              ],
              [[8, 'src', 4]],
              [[null, 'loadedmetadata']],
              function (e, t, n) {
                var r = !0;
                return (
                  'loadedmetadata' === t &&
                    (r = !1 !== e.component.onImageLoad() && r),
                  r
                );
              },
              null,
              null
            ))
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.parent.context.seen ? t.parent.context.item.src : '');
          }
        );
      }
      function Iw(e) {
        return yo(
          0,
          [
            (e()(), eo(16777216, null, null, 1, null, kw)),
            di(
              1,
              16384,
              null,
              0,
              zl,
              [Un, Ln],
              {
                ngIf: [0, 'ngIf'],
                ngIfThen: [1, 'ngIfThen'],
                ngIfElse: [2, 'ngIfElse']
              },
              null
            ),
            (e()(), eo(0, [['imgTemplate', 2]], null, 0, null, Sw)),
            (e()(), eo(0, [['videoTemplate', 2]], null, 0, null, Tw))
          ],
          function (e, t) {
            e(t, 1, 0, t.context.item.video, Jr(t, 3), Jr(t, 2));
          },
          null
        );
      }
      function Aw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              0,
              'img',
              [['class', 'custom-thumb']],
              [[8, 'src', 4]],
              null,
              null,
              null,
              null
            ))
          ],
          null,
          function (e, t) {
            e(t, 0, 0, t.context.item.thumbSrc || t.context.item.src);
          }
        );
      }
      function Ow(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'custom-error']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, [' Custom loading error ']))
          ],
          null,
          null
        );
      }
      function Pw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'custom-thumb-error']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, [' Custom thumb loading error ']))
          ],
          null,
          null
        );
      }
      function Mw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'custom-prev-thumbs']],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.gallery.slideThumbs(-1) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              2,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['role', 'img']
              ],
              [
                [2, 'mat-icon-inline', null],
                [2, 'mat-icon-no-color', null]
              ],
              null,
              null,
              ob,
              sb
            )),
            di(
              2,
              9158656,
              null,
              0,
              Kd,
              [mn, jd, [8, null], [2, qd], [2, nt]],
              null,
              null
            ),
            (e()(), go(-1, 0, ['arrow_back_ios']))
          ],
          function (e, t) {
            e(t, 2, 0);
          },
          function (e, t) {
            e(
              t,
              1,
              0,
              Jr(t, 2).inline,
              'primary' !== Jr(t, 2).color &&
                'accent' !== Jr(t, 2).color &&
                'warn' !== Jr(t, 2).color
            );
          }
        );
      }
      function Rw(e) {
        return yo(
          0,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'custom-next-thumbs']],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.gallery.slideThumbs(1) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              2,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['role', 'img']
              ],
              [
                [2, 'mat-icon-inline', null],
                [2, 'mat-icon-no-color', null]
              ],
              null,
              null,
              ob,
              sb
            )),
            di(
              2,
              9158656,
              null,
              0,
              Kd,
              [mn, jd, [8, null], [2, qd], [2, nt]],
              null,
              null
            ),
            (e()(), go(-1, 0, ['arrow_forward_ios']))
          ],
          function (e, t) {
            e(t, 2, 0);
          },
          function (e, t) {
            e(
              t,
              1,
              0,
              Jr(t, 2).inline,
              'primary' !== Jr(t, 2).color &&
                'accent' !== Jr(t, 2).color &&
                'warn' !== Jr(t, 2).color
            );
          }
        );
      }
      function Nw(e) {
        return yo(
          2,
          [
            oo(671088640, 1, { gallery: 0 }),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              218,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'submit'],
                [null, 'reset']
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'submit' === t && (r = !1 !== Jr(e, 3).onSubmit(n) && r),
                  'reset' === t && (r = !1 !== Jr(e, 3).onReset() && r),
                  r
                );
              },
              null,
              null
            )),
            di(2, 16384, null, 0, Mh, [], null, null),
            di(
              3,
              4210688,
              null,
              0,
              Eh,
              [
                [8, null],
                [8, null]
              ],
              null,
              null
            ),
            pi(2048, null, Uc, null, [Eh]),
            di(5, 16384, null, 0, Hc, [[4, Uc]], null, null),
            (e()(),
            to(
              6,
              0,
              null,
              null,
              7,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              7,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'arrows']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r = !1 !== (e.component.galleryConfig.arrows = n) && r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              8,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              10,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(12, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, ['Arrows'])),
            (e()(),
            to(
              14,
              0,
              null,
              null,
              7,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              15,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'descriptions']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (e.component.galleryConfig.descriptions = n) && r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              16,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              18,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(20, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, [' Descriptions '])),
            (e()(),
            to(
              22,
              0,
              null,
              null,
              10,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              23,
              0,
              null,
              null,
              9,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'mouseGestures']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (e.component.galleryConfig.mouseGestures = n) &&
                      r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              24,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              26,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(28, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, [' Mouse Gestures '])),
            (e()(),
            to(
              30,
              0,
              null,
              0,
              2,
              'button',
              [['mat-raised-button', '']],
              [
                [1, 'disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.reloadGallery() && r),
                  r
                );
              },
              iw,
              rw
            )),
            di(31, 180224, null, 0, Pc, [mn, oc, [2, Jv]], null, null),
            (e()(), go(-1, 0, [' Apply gestures '])),
            (e()(),
            to(
              33,
              0,
              null,
              null,
              10,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              34,
              0,
              null,
              null,
              9,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'touchGestures']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (e.component.galleryConfig.touchGestures = n) &&
                      r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              35,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              37,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(39, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, [' Touch Gestures '])),
            (e()(),
            to(
              41,
              0,
              null,
              0,
              2,
              'button',
              [['mat-raised-button', '']],
              [
                [1, 'disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.reloadGallery() && r),
                  r
                );
              },
              iw,
              rw
            )),
            di(42, 180224, null, 0, Pc, [mn, oc, [2, Jv]], null, null),
            (e()(), go(-1, 0, [' Apply gestures '])),
            (e()(),
            to(
              44,
              0,
              null,
              null,
              7,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              45,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'imageCounter']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (e.component.galleryConfig.imageCounter = n) && r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              46,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              48,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(50, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, ['Image counter'])),
            (e()(),
            to(
              52,
              0,
              null,
              null,
              15,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              53,
              0,
              null,
              null,
              1,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['Image counter orientation:'])),
            (e()(),
            to(
              55,
              0,
              null,
              null,
              12,
              'mat-radio-group',
              [
                ['class', 'mat-radio-group'],
                ['name', 'imageCounterOrientation'],
                ['role', 'radiogroup']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !==
                        (e.component.galleryConfig.imageCounterOrientation = n) &&
                      r),
                  r
                );
              },
              null,
              null
            )),
            di(56, 1064960, null, 1, mm, [Rt], { name: [0, 'name'] }, null),
            oo(603979776, 2, { _radios: 1 }),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [mm]
            ),
            di(
              59,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(61, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(),
            to(
              62,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'top']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 63)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              63,
              4440064,
              [[2, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['top'])),
            (e()(),
            to(
              65,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'bottom']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 66)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              66,
              4440064,
              [[2, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['bottom'])),
            (e()(),
            to(
              68,
              0,
              null,
              null,
              15,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              69,
              0,
              null,
              null,
              1,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['Image fit:'])),
            (e()(),
            to(
              71,
              0,
              null,
              null,
              12,
              'mat-radio-group',
              [
                ['class', 'mat-radio-group'],
                ['name', 'objectFit'],
                ['role', 'radiogroup']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r = !1 !== (e.component.galleryConfig.objectFit = n) && r),
                  r
                );
              },
              null,
              null
            )),
            di(72, 1064960, null, 1, mm, [Rt], { name: [0, 'name'] }, null),
            oo(603979776, 3, { _radios: 1 }),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [mm]
            ),
            di(
              75,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(77, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(),
            to(
              78,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'contain']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 79)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              79,
              4440064,
              [[3, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['contain'])),
            (e()(),
            to(
              81,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'cover']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 82)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              82,
              4440064,
              [[3, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['cover'])),
            (e()(),
            to(
              84,
              0,
              null,
              null,
              7,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              85,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'loop']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r = !1 !== (e.component.galleryConfig.loop = n) && r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              86,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              88,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(90, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, ['Loop'])),
            (e()(),
            to(
              92,
              0,
              null,
              null,
              7,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              93,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'thumbs']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r = !1 !== (e.component.galleryConfig.thumbs = n) && r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              94,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              96,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(98, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, ['Thumbnails'])),
            (e()(),
            to(
              100,
              0,
              null,
              null,
              7,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              101,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'thumbsAutoScroll']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (e.component.galleryConfig.thumbsAutoScroll = n) &&
                      r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              102,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              104,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(106, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, ['Thumbs autoscroll'])),
            (e()(),
            to(
              108,
              0,
              null,
              null,
              21,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              109,
              0,
              null,
              null,
              1,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['Thumbnails orientation:'])),
            (e()(),
            to(
              111,
              0,
              null,
              null,
              18,
              'mat-radio-group',
              [
                ['class', 'mat-radio-group'],
                ['name', 'thumbsOrientation'],
                ['role', 'radiogroup']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !==
                        (e.component.galleryConfig.thumbsOrientation = n) && r),
                  r
                );
              },
              null,
              null
            )),
            di(112, 1064960, null, 1, mm, [Rt], { name: [0, 'name'] }, null),
            oo(603979776, 4, { _radios: 1 }),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [mm]
            ),
            di(
              115,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(117, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(),
            to(
              118,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'top']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 119)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              119,
              4440064,
              [[4, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['top'])),
            (e()(),
            to(
              121,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'bottom']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 122)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              122,
              4440064,
              [[4, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['bottom'])),
            (e()(),
            to(
              124,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'left']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 125)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              125,
              4440064,
              [[4, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['left'])),
            (e()(),
            to(
              127,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'right']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 128)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              128,
              4440064,
              [[4, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['right'])),
            (e()(),
            to(
              130,
              0,
              null,
              null,
              28,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              131,
              0,
              null,
              null,
              6,
              'mat-checkbox',
              [
                ['class', 'mat-checkbox'],
                ['name', 'thumbsArrows']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (e.component.galleryConfig.thumbsArrows = n) && r),
                  r
                );
              },
              nw,
              tw
            )),
            di(
              132,
              8568832,
              null,
              0,
              zh,
              [mn, Rt, oc, ms, [8, null], [2, Fh], [2, Jv]],
              { name: [0, 'name'] },
              null
            ),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [zh]
            ),
            di(
              134,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(136, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(), go(-1, 0, ['Thumbnail arrows'])),
            (e()(),
            to(
              138,
              0,
              null,
              null,
              20,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              vw,
              aw
            )),
            di(
              139,
              7520256,
              null,
              9,
              dd,
              [mn, Rt, [2, Sc], [2, rb], [2, hd], Su, ms, [2, Jv]],
              null,
              null
            ),
            oo(603979776, 5, { _controlNonStatic: 0 }),
            oo(335544320, 6, { _controlStatic: 0 }),
            oo(603979776, 7, { _labelChildNonStatic: 0 }),
            oo(335544320, 8, { _labelChildStatic: 0 }),
            oo(603979776, 9, { _placeholderChild: 0 }),
            oo(603979776, 10, { _errorChildren: 1 }),
            oo(603979776, 11, { _hintChildren: 1 }),
            oo(603979776, 12, { _prefixChildren: 1 }),
            oo(603979776, 13, { _suffixChildren: 1 }),
            (e()(),
            to(149, 0, null, 1, 1, 'label', [], null, null, null, null, null)),
            (e()(), go(-1, null, ['Slide thumbnails by length'])),
            (e()(),
            to(
              151,
              0,
              null,
              1,
              7,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['matInput', ''],
                ['name', 'thumbsArrowsSlideByLength']
              ],
              [
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'input' === t &&
                    (r = !1 !== Jr(e, 152)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Jr(e, 152).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Jr(e, 152)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Jr(e, 152)._compositionEnd(n.target.value) && r),
                  'blur' === t &&
                    (r = !1 !== Jr(e, 156)._focusChanged(!1) && r),
                  'focus' === t &&
                    (r = !1 !== Jr(e, 156)._focusChanged(!0) && r),
                  'input' === t && (r = !1 !== Jr(e, 156)._onInput() && r),
                  'ngModelChange' === t &&
                    (r =
                      !1 !== (i.galleryConfig.thumbsArrowSlideByLength = n) &&
                      r),
                  r
                );
              },
              null,
              null
            )),
            di(152, 16384, null, 0, Lc, [bn, mn, [2, Fc]], null, null),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [Lc]
            ),
            di(
              154,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(
              156,
              999424,
              null,
              0,
              im,
              [mn, Su, [6, $c], [2, Eh], [2, Rh], gc, [8, null], Xd, ms],
              null,
              null
            ),
            di(157, 16384, null, 0, Bc, [[4, $c]], null, null),
            pi(
              2048,
              [
                [5, 4],
                [6, 4]
              ],
              id,
              null,
              [im]
            ),
            (e()(),
            to(
              159,
              0,
              null,
              null,
              15,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              160,
              0,
              null,
              null,
              1,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['Thumbnails scroll behavior:'])),
            (e()(),
            to(
              162,
              0,
              null,
              null,
              12,
              'mat-radio-group',
              [
                ['class', 'mat-radio-group'],
                ['name', 'thumbsScrollBehavior'],
                ['role', 'radiogroup']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r =
                      !1 !==
                        (e.component.galleryConfig.thumbsScrollBehavior = n) &&
                      r),
                  r
                );
              },
              null,
              null
            )),
            di(163, 1064960, null, 1, mm, [Rt], { name: [0, 'name'] }, null),
            oo(603979776, 14, { _radios: 1 }),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [mm]
            ),
            di(
              166,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(168, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(),
            to(
              169,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'smooth']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 170)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              170,
              4440064,
              [[14, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['smooth'])),
            (e()(),
            to(
              172,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'auto']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 173)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              173,
              4440064,
              [[14, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['auto'])),
            (e()(),
            to(
              175,
              0,
              null,
              null,
              18,
              'section',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              176,
              0,
              null,
              null,
              1,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['Image loading strategy:'])),
            (e()(),
            to(
              178,
              0,
              null,
              null,
              12,
              'mat-radio-group',
              [
                ['class', 'mat-radio-group'],
                ['name', 'loading'],
                ['role', 'radiogroup']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function (e, t, n) {
                var r = !0;
                return (
                  'ngModelChange' === t &&
                    (r = !1 !== (e.component.galleryConfig.loading = n) && r),
                  r
                );
              },
              null,
              null
            )),
            di(179, 1064960, null, 1, mm, [Rt], { name: [0, 'name'] }, null),
            oo(603979776, 15, { _radios: 1 }),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [mm]
            ),
            di(
              182,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(184, 16384, null, 0, Bc, [[4, $c]], null, null),
            (e()(),
            to(
              185,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'auto']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 186)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              186,
              4440064,
              [[15, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['auto'])),
            (e()(),
            to(
              188,
              0,
              null,
              null,
              2,
              'mat-radio-button',
              [
                ['class', 'mat-radio-button'],
                ['value', 'lazy']
              ],
              [
                [2, 'mat-radio-checked', null],
                [2, 'mat-radio-disabled', null],
                [2, '_mat-animation-noopable', null],
                [2, 'mat-primary', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [1, 'tabindex', 0],
                [1, 'id', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-describedby', 0]
              ],
              [[null, 'focus']],
              function (e, t, n) {
                var r = !0;
                return (
                  'focus' === t &&
                    (r =
                      !1 !== Jr(e, 189)._inputElement.nativeElement.focus() &&
                      r),
                  r
                );
              },
              lw,
              ow
            )),
            di(
              189,
              4440064,
              [[15, 4]],
              0,
              gm,
              [[2, mm], mn, Rt, oc, sw, [2, Jv], [2, cm]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), go(-1, 0, ['lazy'])),
            (e()(),
            to(
              191,
              0,
              null,
              null,
              2,
              'button',
              [['mat-raised-button', '']],
              [
                [1, 'disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.reloadGallery() && r),
                  r
                );
              },
              iw,
              rw
            )),
            di(192, 180224, null, 0, Pc, [mn, oc, [2, Jv]], null, null),
            (e()(), go(-1, 0, [' Apply loading strategy '])),
            (e()(),
            to(194, 0, null, null, 0, 'hr', [], null, null, null, null, null)),
            (e()(),
            to(
              195,
              0,
              null,
              null,
              24,
              'section',
              [['class', 'image-loading-latency']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              196,
              0,
              null,
              null,
              20,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              vw,
              aw
            )),
            di(
              197,
              7520256,
              null,
              9,
              dd,
              [mn, Rt, [2, Sc], [2, rb], [2, hd], Su, ms, [2, Jv]],
              null,
              null
            ),
            oo(603979776, 16, { _controlNonStatic: 0 }),
            oo(335544320, 17, { _controlStatic: 0 }),
            oo(603979776, 18, { _labelChildNonStatic: 0 }),
            oo(335544320, 19, { _labelChildStatic: 0 }),
            oo(603979776, 20, { _placeholderChild: 0 }),
            oo(603979776, 21, { _errorChildren: 1 }),
            oo(603979776, 22, { _hintChildren: 1 }),
            oo(603979776, 23, { _prefixChildren: 1 }),
            oo(603979776, 24, { _suffixChildren: 1 }),
            (e()(),
            to(207, 0, null, 1, 1, 'label', [], null, null, null, null, null)),
            (e()(), go(-1, null, ['Items (not images!) loading latency'])),
            (e()(),
            to(
              209,
              0,
              null,
              1,
              7,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['matInput', ''],
                ['name', 'imageLoadingLatency']
              ],
              [
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'input' === t &&
                    (r = !1 !== Jr(e, 210)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Jr(e, 210).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Jr(e, 210)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Jr(e, 210)._compositionEnd(n.target.value) && r),
                  'blur' === t &&
                    (r = !1 !== Jr(e, 214)._focusChanged(!1) && r),
                  'focus' === t &&
                    (r = !1 !== Jr(e, 214)._focusChanged(!0) && r),
                  'input' === t && (r = !1 !== Jr(e, 214)._onInput() && r),
                  'ngModelChange' === t &&
                    (r = !1 !== (i.imageLoadingLatency = n) && r),
                  r
                );
              },
              null,
              null
            )),
            di(210, 16384, null, 0, Lc, [bn, mn, [2, Fc]], null, null),
            pi(
              1024,
              null,
              Dc,
              function (e) {
                return [e];
              },
              [Lc]
            ),
            di(
              212,
              671744,
              null,
              0,
              Ph,
              [
                [2, Uc],
                [8, null],
                [8, null],
                [6, Dc]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            pi(2048, null, $c, null, [Ph]),
            di(
              214,
              999424,
              null,
              0,
              im,
              [mn, Su, [6, $c], [2, Eh], [2, Rh], gc, [8, null], Xd, ms],
              null,
              null
            ),
            di(215, 16384, null, 0, Bc, [[4, $c]], null, null),
            pi(
              2048,
              [
                [16, 4],
                [17, 4]
              ],
              id,
              null,
              [im]
            ),
            (e()(),
            to(
              217,
              0,
              null,
              null,
              2,
              'button',
              [['mat-raised-button', '']],
              [
                [1, 'disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.reloadGallery() && r),
                  r
                );
              },
              iw,
              rw
            )),
            di(218, 180224, null, 0, Pc, [mn, oc, [2, Jv]], null, null),
            (e()(), go(-1, 0, [' Confirm latency '])),
            (e()(), eo(16777216, null, null, 1, null, Cw)),
            di(221, 16384, null, 0, zl, [Un, Ln], { ngIf: [0, 'ngIf'] }, null),
            (e()(), eo(0, [['loadingTemplate', 2]], null, 0, null, xw)),
            (e()(), eo(0, [['itemTemplate', 2]], null, 0, null, Iw)),
            (e()(), eo(0, [['thumbTemplate', 2]], null, 0, null, Aw)),
            (e()(), eo(0, [['errorTemplate', 2]], null, 0, null, Ow)),
            (e()(), eo(0, [['thumbErrorTemplate', 2]], null, 0, null, Pw)),
            (e()(), eo(0, [['prevThumbsArrowTemplate', 2]], null, 0, null, Mw)),
            (e()(), eo(0, [['nextThumbsArrowTemplate', 2]], null, 0, null, Rw))
          ],
          function (e, t) {
            var n = t.component;
            e(t, 8, 0, 'arrows'),
              e(t, 10, 0, 'arrows', n.galleryConfig.arrows),
              e(t, 16, 0, 'descriptions'),
              e(t, 18, 0, 'descriptions', n.galleryConfig.descriptions),
              e(t, 24, 0, 'mouseGestures'),
              e(t, 26, 0, 'mouseGestures', n.galleryConfig.mouseGestures),
              e(t, 35, 0, 'touchGestures'),
              e(t, 37, 0, 'touchGestures', n.galleryConfig.touchGestures),
              e(t, 46, 0, 'imageCounter'),
              e(t, 48, 0, 'imageCounter', n.galleryConfig.imageCounter),
              e(t, 56, 0, 'imageCounterOrientation'),
              e(
                t,
                59,
                0,
                'imageCounterOrientation',
                n.galleryConfig.imageCounterOrientation
              ),
              e(t, 63, 0, 'top'),
              e(t, 66, 0, 'bottom'),
              e(t, 72, 0, 'objectFit'),
              e(t, 75, 0, 'objectFit', n.galleryConfig.objectFit),
              e(t, 79, 0, 'contain'),
              e(t, 82, 0, 'cover'),
              e(t, 86, 0, 'loop'),
              e(t, 88, 0, 'loop', n.galleryConfig.loop),
              e(t, 94, 0, 'thumbs'),
              e(t, 96, 0, 'thumbs', n.galleryConfig.thumbs),
              e(t, 102, 0, 'thumbsAutoScroll'),
              e(
                t,
                104,
                0,
                'thumbsAutoScroll',
                n.galleryConfig.thumbsAutoScroll
              ),
              e(t, 112, 0, 'thumbsOrientation'),
              e(
                t,
                115,
                0,
                'thumbsOrientation',
                n.galleryConfig.thumbsOrientation
              ),
              e(t, 119, 0, 'top'),
              e(t, 122, 0, 'bottom'),
              e(t, 125, 0, 'left'),
              e(t, 128, 0, 'right'),
              e(t, 132, 0, 'thumbsArrows'),
              e(t, 134, 0, 'thumbsArrows', n.galleryConfig.thumbsArrows),
              e(
                t,
                154,
                0,
                'thumbsArrowsSlideByLength',
                n.galleryConfig.thumbsArrowSlideByLength
              ),
              e(t, 156, 0),
              e(t, 163, 0, 'thumbsScrollBehavior'),
              e(
                t,
                166,
                0,
                'thumbsScrollBehavior',
                n.galleryConfig.thumbsScrollBehavior
              ),
              e(t, 170, 0, 'smooth'),
              e(t, 173, 0, 'auto'),
              e(t, 179, 0, 'loading'),
              e(t, 182, 0, 'loading', n.galleryConfig.loading),
              e(t, 186, 0, 'auto'),
              e(t, 189, 0, 'lazy'),
              e(t, 212, 0, 'imageLoadingLatency', n.imageLoadingLatency),
              e(t, 214, 0),
              e(t, 221, 0, n.displayGallery);
          },
          function (e, t) {
            e(
              t,
              1,
              0,
              Jr(t, 5).ngClassUntouched,
              Jr(t, 5).ngClassTouched,
              Jr(t, 5).ngClassPristine,
              Jr(t, 5).ngClassDirty,
              Jr(t, 5).ngClassValid,
              Jr(t, 5).ngClassInvalid,
              Jr(t, 5).ngClassPending
            ),
              e(t, 7, 1, [
                Jr(t, 8).id,
                null,
                Jr(t, 8).indeterminate,
                Jr(t, 8).checked,
                Jr(t, 8).disabled,
                'before' == Jr(t, 8).labelPosition,
                'NoopAnimations' === Jr(t, 8)._animationMode,
                Jr(t, 12).ngClassUntouched,
                Jr(t, 12).ngClassTouched,
                Jr(t, 12).ngClassPristine,
                Jr(t, 12).ngClassDirty,
                Jr(t, 12).ngClassValid,
                Jr(t, 12).ngClassInvalid,
                Jr(t, 12).ngClassPending
              ]),
              e(t, 15, 1, [
                Jr(t, 16).id,
                null,
                Jr(t, 16).indeterminate,
                Jr(t, 16).checked,
                Jr(t, 16).disabled,
                'before' == Jr(t, 16).labelPosition,
                'NoopAnimations' === Jr(t, 16)._animationMode,
                Jr(t, 20).ngClassUntouched,
                Jr(t, 20).ngClassTouched,
                Jr(t, 20).ngClassPristine,
                Jr(t, 20).ngClassDirty,
                Jr(t, 20).ngClassValid,
                Jr(t, 20).ngClassInvalid,
                Jr(t, 20).ngClassPending
              ]),
              e(t, 23, 1, [
                Jr(t, 24).id,
                null,
                Jr(t, 24).indeterminate,
                Jr(t, 24).checked,
                Jr(t, 24).disabled,
                'before' == Jr(t, 24).labelPosition,
                'NoopAnimations' === Jr(t, 24)._animationMode,
                Jr(t, 28).ngClassUntouched,
                Jr(t, 28).ngClassTouched,
                Jr(t, 28).ngClassPristine,
                Jr(t, 28).ngClassDirty,
                Jr(t, 28).ngClassValid,
                Jr(t, 28).ngClassInvalid,
                Jr(t, 28).ngClassPending
              ]),
              e(
                t,
                30,
                0,
                Jr(t, 31).disabled || null,
                'NoopAnimations' === Jr(t, 31)._animationMode
              ),
              e(t, 34, 1, [
                Jr(t, 35).id,
                null,
                Jr(t, 35).indeterminate,
                Jr(t, 35).checked,
                Jr(t, 35).disabled,
                'before' == Jr(t, 35).labelPosition,
                'NoopAnimations' === Jr(t, 35)._animationMode,
                Jr(t, 39).ngClassUntouched,
                Jr(t, 39).ngClassTouched,
                Jr(t, 39).ngClassPristine,
                Jr(t, 39).ngClassDirty,
                Jr(t, 39).ngClassValid,
                Jr(t, 39).ngClassInvalid,
                Jr(t, 39).ngClassPending
              ]),
              e(
                t,
                41,
                0,
                Jr(t, 42).disabled || null,
                'NoopAnimations' === Jr(t, 42)._animationMode
              ),
              e(t, 45, 1, [
                Jr(t, 46).id,
                null,
                Jr(t, 46).indeterminate,
                Jr(t, 46).checked,
                Jr(t, 46).disabled,
                'before' == Jr(t, 46).labelPosition,
                'NoopAnimations' === Jr(t, 46)._animationMode,
                Jr(t, 50).ngClassUntouched,
                Jr(t, 50).ngClassTouched,
                Jr(t, 50).ngClassPristine,
                Jr(t, 50).ngClassDirty,
                Jr(t, 50).ngClassValid,
                Jr(t, 50).ngClassInvalid,
                Jr(t, 50).ngClassPending
              ]),
              e(
                t,
                55,
                0,
                Jr(t, 61).ngClassUntouched,
                Jr(t, 61).ngClassTouched,
                Jr(t, 61).ngClassPristine,
                Jr(t, 61).ngClassDirty,
                Jr(t, 61).ngClassValid,
                Jr(t, 61).ngClassInvalid,
                Jr(t, 61).ngClassPending
              ),
              e(t, 62, 1, [
                Jr(t, 63).checked,
                Jr(t, 63).disabled,
                'NoopAnimations' === Jr(t, 63)._animationMode,
                'primary' === Jr(t, 63).color,
                'accent' === Jr(t, 63).color,
                'warn' === Jr(t, 63).color,
                -1,
                Jr(t, 63).id,
                null,
                null,
                null
              ]),
              e(t, 65, 1, [
                Jr(t, 66).checked,
                Jr(t, 66).disabled,
                'NoopAnimations' === Jr(t, 66)._animationMode,
                'primary' === Jr(t, 66).color,
                'accent' === Jr(t, 66).color,
                'warn' === Jr(t, 66).color,
                -1,
                Jr(t, 66).id,
                null,
                null,
                null
              ]),
              e(
                t,
                71,
                0,
                Jr(t, 77).ngClassUntouched,
                Jr(t, 77).ngClassTouched,
                Jr(t, 77).ngClassPristine,
                Jr(t, 77).ngClassDirty,
                Jr(t, 77).ngClassValid,
                Jr(t, 77).ngClassInvalid,
                Jr(t, 77).ngClassPending
              ),
              e(t, 78, 1, [
                Jr(t, 79).checked,
                Jr(t, 79).disabled,
                'NoopAnimations' === Jr(t, 79)._animationMode,
                'primary' === Jr(t, 79).color,
                'accent' === Jr(t, 79).color,
                'warn' === Jr(t, 79).color,
                -1,
                Jr(t, 79).id,
                null,
                null,
                null
              ]),
              e(t, 81, 1, [
                Jr(t, 82).checked,
                Jr(t, 82).disabled,
                'NoopAnimations' === Jr(t, 82)._animationMode,
                'primary' === Jr(t, 82).color,
                'accent' === Jr(t, 82).color,
                'warn' === Jr(t, 82).color,
                -1,
                Jr(t, 82).id,
                null,
                null,
                null
              ]),
              e(t, 85, 1, [
                Jr(t, 86).id,
                null,
                Jr(t, 86).indeterminate,
                Jr(t, 86).checked,
                Jr(t, 86).disabled,
                'before' == Jr(t, 86).labelPosition,
                'NoopAnimations' === Jr(t, 86)._animationMode,
                Jr(t, 90).ngClassUntouched,
                Jr(t, 90).ngClassTouched,
                Jr(t, 90).ngClassPristine,
                Jr(t, 90).ngClassDirty,
                Jr(t, 90).ngClassValid,
                Jr(t, 90).ngClassInvalid,
                Jr(t, 90).ngClassPending
              ]),
              e(t, 93, 1, [
                Jr(t, 94).id,
                null,
                Jr(t, 94).indeterminate,
                Jr(t, 94).checked,
                Jr(t, 94).disabled,
                'before' == Jr(t, 94).labelPosition,
                'NoopAnimations' === Jr(t, 94)._animationMode,
                Jr(t, 98).ngClassUntouched,
                Jr(t, 98).ngClassTouched,
                Jr(t, 98).ngClassPristine,
                Jr(t, 98).ngClassDirty,
                Jr(t, 98).ngClassValid,
                Jr(t, 98).ngClassInvalid,
                Jr(t, 98).ngClassPending
              ]),
              e(t, 101, 1, [
                Jr(t, 102).id,
                null,
                Jr(t, 102).indeterminate,
                Jr(t, 102).checked,
                Jr(t, 102).disabled,
                'before' == Jr(t, 102).labelPosition,
                'NoopAnimations' === Jr(t, 102)._animationMode,
                Jr(t, 106).ngClassUntouched,
                Jr(t, 106).ngClassTouched,
                Jr(t, 106).ngClassPristine,
                Jr(t, 106).ngClassDirty,
                Jr(t, 106).ngClassValid,
                Jr(t, 106).ngClassInvalid,
                Jr(t, 106).ngClassPending
              ]),
              e(
                t,
                111,
                0,
                Jr(t, 117).ngClassUntouched,
                Jr(t, 117).ngClassTouched,
                Jr(t, 117).ngClassPristine,
                Jr(t, 117).ngClassDirty,
                Jr(t, 117).ngClassValid,
                Jr(t, 117).ngClassInvalid,
                Jr(t, 117).ngClassPending
              ),
              e(t, 118, 1, [
                Jr(t, 119).checked,
                Jr(t, 119).disabled,
                'NoopAnimations' === Jr(t, 119)._animationMode,
                'primary' === Jr(t, 119).color,
                'accent' === Jr(t, 119).color,
                'warn' === Jr(t, 119).color,
                -1,
                Jr(t, 119).id,
                null,
                null,
                null
              ]),
              e(t, 121, 1, [
                Jr(t, 122).checked,
                Jr(t, 122).disabled,
                'NoopAnimations' === Jr(t, 122)._animationMode,
                'primary' === Jr(t, 122).color,
                'accent' === Jr(t, 122).color,
                'warn' === Jr(t, 122).color,
                -1,
                Jr(t, 122).id,
                null,
                null,
                null
              ]),
              e(t, 124, 1, [
                Jr(t, 125).checked,
                Jr(t, 125).disabled,
                'NoopAnimations' === Jr(t, 125)._animationMode,
                'primary' === Jr(t, 125).color,
                'accent' === Jr(t, 125).color,
                'warn' === Jr(t, 125).color,
                -1,
                Jr(t, 125).id,
                null,
                null,
                null
              ]),
              e(t, 127, 1, [
                Jr(t, 128).checked,
                Jr(t, 128).disabled,
                'NoopAnimations' === Jr(t, 128)._animationMode,
                'primary' === Jr(t, 128).color,
                'accent' === Jr(t, 128).color,
                'warn' === Jr(t, 128).color,
                -1,
                Jr(t, 128).id,
                null,
                null,
                null
              ]),
              e(t, 131, 1, [
                Jr(t, 132).id,
                null,
                Jr(t, 132).indeterminate,
                Jr(t, 132).checked,
                Jr(t, 132).disabled,
                'before' == Jr(t, 132).labelPosition,
                'NoopAnimations' === Jr(t, 132)._animationMode,
                Jr(t, 136).ngClassUntouched,
                Jr(t, 136).ngClassTouched,
                Jr(t, 136).ngClassPristine,
                Jr(t, 136).ngClassDirty,
                Jr(t, 136).ngClassValid,
                Jr(t, 136).ngClassInvalid,
                Jr(t, 136).ngClassPending
              ]),
              e(t, 138, 1, [
                'standard' == Jr(t, 139).appearance,
                'fill' == Jr(t, 139).appearance,
                'outline' == Jr(t, 139).appearance,
                'legacy' == Jr(t, 139).appearance,
                Jr(t, 139)._control.errorState,
                Jr(t, 139)._canLabelFloat,
                Jr(t, 139)._shouldLabelFloat(),
                Jr(t, 139)._hasFloatingLabel(),
                Jr(t, 139)._hideControlPlaceholder(),
                Jr(t, 139)._control.disabled,
                Jr(t, 139)._control.autofilled,
                Jr(t, 139)._control.focused,
                'accent' == Jr(t, 139).color,
                'warn' == Jr(t, 139).color,
                Jr(t, 139)._shouldForward('untouched'),
                Jr(t, 139)._shouldForward('touched'),
                Jr(t, 139)._shouldForward('pristine'),
                Jr(t, 139)._shouldForward('dirty'),
                Jr(t, 139)._shouldForward('valid'),
                Jr(t, 139)._shouldForward('invalid'),
                Jr(t, 139)._shouldForward('pending'),
                !Jr(t, 139)._animationsEnabled
              ]),
              e(t, 151, 1, [
                Jr(t, 156)._isServer,
                Jr(t, 156).id,
                Jr(t, 156).placeholder,
                Jr(t, 156).disabled,
                Jr(t, 156).required,
                (Jr(t, 156).readonly && !Jr(t, 156)._isNativeSelect) || null,
                Jr(t, 156)._ariaDescribedby || null,
                Jr(t, 156).errorState,
                Jr(t, 156).required.toString(),
                Jr(t, 157).ngClassUntouched,
                Jr(t, 157).ngClassTouched,
                Jr(t, 157).ngClassPristine,
                Jr(t, 157).ngClassDirty,
                Jr(t, 157).ngClassValid,
                Jr(t, 157).ngClassInvalid,
                Jr(t, 157).ngClassPending
              ]),
              e(
                t,
                162,
                0,
                Jr(t, 168).ngClassUntouched,
                Jr(t, 168).ngClassTouched,
                Jr(t, 168).ngClassPristine,
                Jr(t, 168).ngClassDirty,
                Jr(t, 168).ngClassValid,
                Jr(t, 168).ngClassInvalid,
                Jr(t, 168).ngClassPending
              ),
              e(t, 169, 1, [
                Jr(t, 170).checked,
                Jr(t, 170).disabled,
                'NoopAnimations' === Jr(t, 170)._animationMode,
                'primary' === Jr(t, 170).color,
                'accent' === Jr(t, 170).color,
                'warn' === Jr(t, 170).color,
                -1,
                Jr(t, 170).id,
                null,
                null,
                null
              ]),
              e(t, 172, 1, [
                Jr(t, 173).checked,
                Jr(t, 173).disabled,
                'NoopAnimations' === Jr(t, 173)._animationMode,
                'primary' === Jr(t, 173).color,
                'accent' === Jr(t, 173).color,
                'warn' === Jr(t, 173).color,
                -1,
                Jr(t, 173).id,
                null,
                null,
                null
              ]),
              e(
                t,
                178,
                0,
                Jr(t, 184).ngClassUntouched,
                Jr(t, 184).ngClassTouched,
                Jr(t, 184).ngClassPristine,
                Jr(t, 184).ngClassDirty,
                Jr(t, 184).ngClassValid,
                Jr(t, 184).ngClassInvalid,
                Jr(t, 184).ngClassPending
              ),
              e(t, 185, 1, [
                Jr(t, 186).checked,
                Jr(t, 186).disabled,
                'NoopAnimations' === Jr(t, 186)._animationMode,
                'primary' === Jr(t, 186).color,
                'accent' === Jr(t, 186).color,
                'warn' === Jr(t, 186).color,
                -1,
                Jr(t, 186).id,
                null,
                null,
                null
              ]),
              e(t, 188, 1, [
                Jr(t, 189).checked,
                Jr(t, 189).disabled,
                'NoopAnimations' === Jr(t, 189)._animationMode,
                'primary' === Jr(t, 189).color,
                'accent' === Jr(t, 189).color,
                'warn' === Jr(t, 189).color,
                -1,
                Jr(t, 189).id,
                null,
                null,
                null
              ]),
              e(
                t,
                191,
                0,
                Jr(t, 192).disabled || null,
                'NoopAnimations' === Jr(t, 192)._animationMode
              ),
              e(t, 196, 1, [
                'standard' == Jr(t, 197).appearance,
                'fill' == Jr(t, 197).appearance,
                'outline' == Jr(t, 197).appearance,
                'legacy' == Jr(t, 197).appearance,
                Jr(t, 197)._control.errorState,
                Jr(t, 197)._canLabelFloat,
                Jr(t, 197)._shouldLabelFloat(),
                Jr(t, 197)._hasFloatingLabel(),
                Jr(t, 197)._hideControlPlaceholder(),
                Jr(t, 197)._control.disabled,
                Jr(t, 197)._control.autofilled,
                Jr(t, 197)._control.focused,
                'accent' == Jr(t, 197).color,
                'warn' == Jr(t, 197).color,
                Jr(t, 197)._shouldForward('untouched'),
                Jr(t, 197)._shouldForward('touched'),
                Jr(t, 197)._shouldForward('pristine'),
                Jr(t, 197)._shouldForward('dirty'),
                Jr(t, 197)._shouldForward('valid'),
                Jr(t, 197)._shouldForward('invalid'),
                Jr(t, 197)._shouldForward('pending'),
                !Jr(t, 197)._animationsEnabled
              ]),
              e(t, 209, 1, [
                Jr(t, 214)._isServer,
                Jr(t, 214).id,
                Jr(t, 214).placeholder,
                Jr(t, 214).disabled,
                Jr(t, 214).required,
                (Jr(t, 214).readonly && !Jr(t, 214)._isNativeSelect) || null,
                Jr(t, 214)._ariaDescribedby || null,
                Jr(t, 214).errorState,
                Jr(t, 214).required.toString(),
                Jr(t, 215).ngClassUntouched,
                Jr(t, 215).ngClassTouched,
                Jr(t, 215).ngClassPristine,
                Jr(t, 215).ngClassDirty,
                Jr(t, 215).ngClassValid,
                Jr(t, 215).ngClassInvalid,
                Jr(t, 215).ngClassPending
              ]),
              e(
                t,
                217,
                0,
                Jr(t, 218).disabled || null,
                'NoopAnimations' === Jr(t, 218)._animationMode
              );
          }
        );
      }
      function Dw(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 1, 'app-home', [], null, null, null, Nw, ww)),
            di(1, 114688, null, 0, $m, [Rt], null, null)
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var Fw = zr('app-home', $m, Dw, {}, {}, []),
        Lw = ir({
          encapsulation: 2,
          styles: [
            '@media (-ms-high-contrast:active){.mat-toolbar{outline:solid 1px}}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media (max-width:599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}'
          ],
          data: {}
        });
      function Vw(e) {
        return yo(2, [ho(null, 0), ho(null, 1)], null, null);
      }
      class Uw {
        constructor() {}
        ngOnInit() {}
      }
      var jw = ir({
        encapsulation: 0,
        styles: [
          [
            'header[_ngcontent-%COMP%]{width:100%}mat-toolbar[_ngcontent-%COMP%]{background-color:#641fb7;color:#fff}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:visited{color:#fff}.app-title[_ngcontent-%COMP%]{text-decoration:none;outline:0;border:none}.links[_ngcontent-%COMP%]{display:flex;margin-left:auto}.links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:inline-block;margin-right:15px}.links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-last-of-type(1){margin-right:0}.links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:36px;height:36px}.links[_ngcontent-%COMP%]   .npm-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1) translateY(3px)}.menu[_ngcontent-%COMP%]{margin:2px auto 0;height:100%;list-style-type:none;font-size:18px;font-weight:400}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:100%;line-height:64px;padding:0 10px;cursor:pointer}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{font-weight:500}'
          ]
        ],
        data: {}
      });
      function $w(e) {
        return yo(
          2,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              14,
              'header',
              [['class', 'mat-elevation-z2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              1,
              0,
              null,
              null,
              13,
              'mat-toolbar',
              [['class', 'mat-toolbar']],
              [
                [2, 'mat-toolbar-multiple-rows', null],
                [2, 'mat-toolbar-single-row', null]
              ],
              null,
              null,
              Vw,
              Lw
            )),
            di(2, 4243456, null, 1, am, [mn, Su, ta], null, null),
            oo(603979776, 1, { _toolbarRows: 1 }),
            (e()(),
            to(
              4,
              0,
              null,
              0,
              3,
              'a',
              [
                ['class', 'app-title'],
                ['routerLink', '/']
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r =
                      !1 !==
                        Jr(e, 5).onClick(
                          n.button,
                          n.ctrlKey,
                          n.metaKey,
                          n.shiftKey
                        ) && r),
                  r
                );
              },
              null,
              null
            )),
            di(
              5,
              671744,
              null,
              0,
              Mg,
              [Pg, vf, Il],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            (e()(),
            to(6, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (e()(), go(-1, null, ['ngx-imagery'])),
            (e()(),
            to(
              8,
              0,
              null,
              0,
              6,
              'div',
              [['class', 'links']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              9,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'npm-link link'],
                ['href', 'https://www.npmjs.com/package/ngx-imagery']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              10,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'npm link'],
                ['src', './assets/icons/npm-logo.svg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              11,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'stackblitz-link link'],
                ['href', 'https://stackblitz.com/edit/ngx-imagery'],
                ['target', '_blank']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              12,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'stackblitz link'],
                ['src', './assets/icons/stackblitz-logo.svg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              13,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'github-link link'],
                ['href', 'https://github.com/daelmaak/ngx-imagery']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            to(
              14,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'github link'],
                ['src', './assets/icons/GitHub-Mark-Light-64px.png']
              ],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function (e, t) {
            e(t, 5, 0, '/');
          },
          function (e, t) {
            e(
              t,
              1,
              0,
              Jr(t, 2)._toolbarRows.length > 0,
              0 === Jr(t, 2)._toolbarRows.length
            ),
              e(t, 4, 0, Jr(t, 5).target, Jr(t, 5).href);
          }
        );
      }
      var zw = ir({
        encapsulation: 0,
        styles: [
          [
            'main[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px 10px 15px}@media (max-width:767px){main[_ngcontent-%COMP%]{max-width:100%}}footer[_ngcontent-%COMP%]{width:100%;height:64px;text-align:center;color:#666}'
          ]
        ],
        data: {}
      });
      function Bw(e) {
        return yo(
          2,
          [
            (e()(),
            to(
              0,
              0,
              null,
              null,
              1,
              'app-header',
              [],
              null,
              null,
              null,
              $w,
              jw
            )),
            di(1, 114688, null, 0, Uw, [], null, null),
            (e()(),
            to(2, 0, null, null, 2, 'main', [], null, null, null, null, null)),
            (e()(),
            to(
              3,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            di(4, 212992, null, 0, Fg, [Dg, Un, un, [8, null], Rt], null, null),
            (e()(),
            to(
              5,
              0,
              null,
              null,
              1,
              'footer',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), go(-1, null, ['With care from daelmaak']))
          ],
          function (e, t) {
            e(t, 1, 0), e(t, 4, 0);
          },
          null
        );
      }
      function Hw(e) {
        return yo(
          0,
          [
            (e()(),
            to(0, 0, null, null, 1, 'app-root', [], null, null, null, Bw, zw)),
            di(1, 49152, null, 0, Bm, [], null, null)
          ],
          null,
          null
        );
      }
      var qw = zr('app-root', Bm, Hw, {}, {}, []),
        Gw = kl(zm, [Bm], function (e) {
          return (function (e) {
            const t = {},
              n = [];
            let r = !1;
            for (let i = 0; i < e.length; i++) {
              const s = e[i];
              s.token === Dt && !0 === s.value && (r = !0),
                1073741824 & s.flags && n.push(s.token),
                (s.index = i),
                (t[er(s.token)] = s);
            }
            return {
              factory: null,
              providersByKey: t,
              providers: e,
              modules: n,
              isRoot: r
            };
          })([
            Dr(512, un, cn, [[8, [l_, Fw, qw]], [3, un], He]),
            Dr(5120, Ki, Ys, [[3, Ki]]),
            Dr(4608, Ll, Vl, [Ki, [2, Fl]]),
            Dr(4608, lb, lb, []),
            Dr(4608, gc, gc, []),
            Dr(5120, Ai, Xs, [ms]),
            Dr(5120, zi, Bi, []),
            Dr(5120, Mn, Ks, []),
            Dr(5120, Rn, Zs, []),
            Dr(4608, cu, hu, [ta]),
            Dr(6144, It, null, [cu]),
            Dr(4608, ru, su, []),
            Dr(
              5120,
              Ea,
              function (e, t, n, r, i, s, o, l) {
                return [new tu(e, t, n), new uu(r), new ou(i, s, o, l)];
              },
              [ta, ms, Gi, ta, ta, ru, Wi, [2, iu]]
            ),
            Dr(4608, Sa, Sa, [Ea, ms]),
            Dr(135680, Aa, Aa, [ta]),
            Dr(4608, Fa, Fa, [Sa, Aa, zi]),
            Dr(5120, Pb, Zv, []),
            Dr(5120, My, Yv, []),
            Dr(4608, pv, Kv, [ta, Pb, My]),
            Dr(5120, gn, Xv, [Fa, pv, ms]),
            Dr(6144, Ia, null, [Aa]),
            Dr(4608, vs, vs, [ms]),
            Dr(4608, qh, jv, [gn, ta]),
            Dr(4608, Jc, Jc, []),
            Dr(5120, vf, Jg, [Pg]),
            Dr(4608, jg, jg, []),
            Dr(6144, Vg, null, [jg]),
            Dr(135680, $g, $g, [Pg, Ds, ns, Lt, Vg]),
            Dr(4608, Ug, Ug, []),
            Dr(5120, zg, Wg, [Pg, ia, Bg]),
            Dr(5120, r_, n_, [e_]),
            Dr(
              5120,
              Qi,
              function (e) {
                return [e];
              },
              [r_]
            ),
            Dr(1073742336, ea, ea, []),
            Dr(1073742336, ib, ib, []),
            Dr(1073742336, uc, uc, [
              [2, ac],
              [2, iu]
            ]),
            Dr(1073742336, Tu, Tu, []),
            Dr(1073742336, Ec, Ec, []),
            Dr(1073742336, Mc, Mc, []),
            Dr(1073742336, cb, cb, []),
            Dr(1073742336, Bh, Bh, []),
            Dr(1073742336, Hh, Hh, []),
            Dr(1073742336, md, md, []),
            Dr(1073742336, Zd, Zd, []),
            Dr(1073742336, Jd, Jd, []),
            Dr(1073742336, sm, sm, []),
            Dr(1073742336, _m, _m, []),
            Dr(1073742336, um, um, []),
            Dr(1024, nt, yu, []),
            Dr(
              1024,
              Is,
              function () {
                return [Gg()];
              },
              []
            ),
            Dr(512, e_, e_, [Lt]),
            Dr(
              1024,
              ji,
              function (e, t) {
                return [
                  ((n = e),
                  Ca('probe', ka),
                  Ca(
                    'coreTokens',
                    Object.assign(
                      {},
                      xa,
                      (n || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                    )
                  ),
                  () => ka),
                  t_(t)
                ];
                var n;
              },
              [[2, Is], e_]
            ),
            Dr(512, $i, $i, [[2, ji]]),
            Dr(131584, Rs, Rs, [ms, Wi, Lt, nt, un, $i]),
            Dr(1073742336, Js, Js, [Rs]),
            Dr(1073742336, vu, vu, [[3, vu]]),
            Dr(1073742336, ew, ew, []),
            Dr(1073742336, Nh, Nh, []),
            Dr(1073742336, Dh, Dh, []),
            Dr(1073742336, jm, jm, []),
            Dr(1024, Hg, Zg, [[3, Pg]]),
            Dr(512, Yp, Xp, []),
            Dr(512, Dg, Dg, []),
            Dr(256, Bg, {}, []),
            Dr(1024, Il, Kg, [Sl, [2, Al], Bg]),
            Dr(512, Ol, Ol, [Il, Sl]),
            Dr(512, ns, ns, []),
            Dr(512, Ds, js, [ns, [2, Vs]]),
            Dr(
              1024,
              kg,
              function () {
                return [[{ path: '', component: $m }]];
              },
              []
            ),
            Dr(1024, Pg, Xg, [
              Rs,
              Yp,
              Dg,
              Ol,
              Lt,
              Ds,
              ns,
              kg,
              Bg,
              [2, Sg],
              [2, Cg]
            ]),
            Dr(1073742336, Qg, Qg, [
              [2, Hg],
              [2, Pg]
            ]),
            Dr(1073742336, zm, zm, []),
            Dr(256, Dt, !0, []),
            Dr(256, Jv, 'BrowserAnimations', [])
          ]);
        });
      (function () {
        if (it)
          throw new Error('Cannot enable prod mode after platform setup.');
        rt = !1;
      })(),
        bu()
          .bootstrapModuleFactory(Gw)
          .catch(e => console.error(e));
    },
    zn8P: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
