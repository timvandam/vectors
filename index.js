// Vector constructor
function Vector(size, ...data) {
  this.size = size;
  this.data = data;

  // Check for errors
  if (!this.size || isNaN(this.size))
    throw new Error('No valid size was provided');

  if (!this.data || this.data.filter(value => isNaN(value)).length)
    throw new Error('No valid data was provided');

  if (this.size !== this.data.length)
    throw new Error('Too much or not enough data provided');
}

function isVector(vector) {
  return vector && vector instanceof Vector;
}

// Vector functions
Vector.prototype.add = function(vector) {
  if (!isVector(vector))
    throw new Error('No valid vector provided');

  if (vector.size !== this.size)
    throw new Error('Vectors not of equal size');

  if (vector.data.length !== this.data.length)
    throw new Error('Vectors not of equal length');

  return new Vector(this.size, ...this.data.map((value, index) => value + vector.data[index]));
};

Vector.prototype.plus = Vector.prototype.add;

Vector.prototype.subtract = function(vector) {
  if (!isVector(vector))
    throw new Error('No valid vector provided');

  if (vector.size !== this.size)
    throw new Error('Vectors not of equal size');

  if (vector.data.length !== this.data.length)
    throw new Error('Vectors not of equal length');

  return new Vector(this.size, ...this.data.map((value, index) => value - vector.data[index]));
};

Vector.prototype.sub = Vector.prototype.subtract;
Vector.prototype.minus = Vector.prototype.subtract;
Vector.prototype.min = Vector.prototype.subtract;

Vector.prototype.multiply = function(scalar) {
  if (isNaN(scalar))
    throw new Error('Invalid scalar');

  return new Vector(this.size, ...this.data.map(value => value * scalar));
};

Vector.prototype.mult = Vector.prototype.multiply;
Vector.prototype.times = Vector.prototype.multiply;

Vector.prototype.dot = function(vector) {
  if (!isVector(vector))
    throw new Error('No valid vector provided');

  if (vector.size !== this.size)
    throw new Error('Vectors not of equal size');

  if (vector.data.length !== this.data.length)
    throw new Error('Vectors not of equal length');

  return this.data.map((value, index) => value * vector.data[index]).reduce((x, y) => x + y);
};

Vector.prototype.magnitude = function() {
  return this.data.reduce((x, y) => Math.sqrt(x ** 2 + y ** 2));
};

const Vector2D = Vector.bind({}, 2);
const Vector3D = Vector.bind({}, 3);

if (typeof module !== 'undefined' && module.exports)
  module.exports = { Vector2D, Vector3D };
