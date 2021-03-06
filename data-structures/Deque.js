const __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    let _ = {
      label: 0,
      sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    };
    let f;
    let y;
    let t;
    let g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y.return
                  : op[0]
                  ? y.throw || ((t = y.return) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
const Deque = /** @class */ (function() {
  function Deque() {
    this.head = null;
    this.tail = null;
    this.numItems = 0;
  }
  Deque.prototype.isEmpty = function() {
    return this.head === null;
  };
  Deque.prototype.size = function() {
    return this.numItems;
  };
  Deque.prototype.front = function() {
    return this.head.value;
  };
  Deque.prototype.back = function() {
    return this.tail.value;
  };
  Deque.prototype.at = function(index) {
    if (index < 0 || index >= this.numItems) return null;
    let current = this.head;
    while (index > 0) {
      current = current.next;
      index -= 1;
    }
    return current.value;
  };
  Deque.prototype.unshift = function(item) {
    const newItem = new Item(item);
    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.head.prev = newItem;
      newItem.next = this.head;
      this.head = newItem;
    }
  };
  Deque.prototype.push = function(item) {
    const newItem = new Item(item);
    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
    this.numItems += 1;
  };
  Deque.prototype.shift = function() {
    if (!this.head) return null;
    const first = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.numItems -= 1;
    return first.value;
  };
  Deque.prototype.pop = function() {
    if (!this.tail) return null;
    const last = this.tail;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.numItems -= 1;
    return last.value;
  };
  Deque.prototype[Symbol.iterator] = function() {
    let current;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          current = this.head;
          _a.label = 1;
        case 1:
          if (!current) return [3 /* break */, 3];
          return [4 /* yield */, current.value];
        case 2:
          _a.sent();
          current = current.next;
          return [3 /* break */, 1];
        case 3:
          return [2 /* return */];
      }
    });
  };
  return Deque;
})();
var Item = /** @class */ (function() {
  function Item(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  return Item;
})();
// export default Deque;
module.exports = Deque;
