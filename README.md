# Vectors
This is a small module that allows you to easily use vectors in JavaScript.

## Usage
```javascript
/// Importing the module
const { Vector2D, Vector3D } = require('./index');

// Creating Vectors
const my2DVector = new Vector2D(64, 31);
const other2DVector = new Vector2D(461, 79);
const my3DVector = new Vector3D(14, 42, 61);
const myOther3DVector = new Vector3D(67, 14, 51);


// these functions return a new vector.
const addedVectors = my2DVector.add(other2DVector);
const substractedVectors = my3DVector.substract(myOther3DVector);
const multipliedVectors = my2DVector.multiply(2);

// these functions return a number
const dotProduct = my3DVector.dot(myOther3DVector); // this is the dot product
const magnitude = myVector.magnitude();
```