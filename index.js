// TODO: Research Vectors, chrome bookmark (cross product & angle between vectors)

function Vector(size) {
  // Construct
  this.size = size;
  this.data = Object.values(arguments).slice(1);

  // Check for errors
  if (!this.size || isNaN(this.size))
    throw new Error('No valid size was provided');

  if (!this.data || this.data.filter(value => isNaN(value)).length)
    throw new Error('No valid data was provided');

  if (this.size !== this.data.length)
    throw new Error('Too much or not enough data provided');

  // Functions
  this.add = vector => {
    if (!isVector(vector))
      throw new Error('No valid vector provided');

    if (vector.size !== this.size)
      throw new Error('Vectors not of equal size');

    if (vector.data.length !== this.data.length)
      throw new Error('Vectors not of equal length');

    return new Vector(this.size, ...this.data.map((value, index) => value + vector.data[index]));
  };

  this.substract = vector => {
    if (!isVector(vector))
      throw new Error('No valid vector provided');

    if (vector.size !== this.size)
      throw new Error('Vectors not of equal size');

    if (vector.data.length !== this.data.length)
      throw new Error('Vectors not of equal length');

    return new Vector(this.size, ...this.data.map((value, index) => value - vector.data[index]));
  };

  this.multiply = scalar => {
    if (isNaN(scalar))
      throw new Error('Invalid scalar');

    return new Vector(this.size, ...this.data.map(value => value * scalar));
  };

  this.dot = vector => {
    if (!isVector(vector))
      throw new Error('No valid vector provided');

    if (vector.size !== this.size)
      throw new Error('Vectors not of equal size');

    if (vector.data.length !== this.data.length)
      throw new Error('Vectors not of equal length');

    return this.data.map((value, index) => value * vector.data[index]).reduce((x, y) => x + y);
  };

  this.magnitude = () => {
    return this.data.reduce((x, y) => Math.sqrt( x ** 2 + y ** 2));
  };

  function isVector(vector) {
    return vector && vector instanceof Vector;
  }
};

const Vector2D = Vector.bind({}, 2);
const Vector3D = Vector.bind({}, 3);

module.exports = { Vector2D, Vector3D };