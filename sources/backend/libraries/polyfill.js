if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth) {
    const flattened = [];
    (function flat(array, depth) {
      for (const el of array) {
        if (Array.isArray(el) && depth > 0) {
          flat(el, depth - 1);
        } else {
          flattened.push(el);
        }
      }
    }(this, Math.floor(depth) || 1));
    return flattened;
  };
}
