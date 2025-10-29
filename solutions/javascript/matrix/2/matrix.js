//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(strMatrix) {
    this._strMatrix = strMatrix.split('\n');
    
    this._rowMatrix = this._strMatrix.map(val => val.split(' ').map(Number));
    this._columnMatrix = this._rowMatrix[0].map((_, colIndex) => 
      this._rowMatrix.map(row => row[colIndex])
    );
  }

  get rows() {
    return this._rowMatrix;
  }

  get columns() {
    return this._columnMatrix;
  }
}
