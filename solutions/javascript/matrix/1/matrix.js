//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(strMatrix) {
    this.strMatrix = strMatrix.split('\n');
    this.nbRows = this.strMatrix.length;
    
    this.rowMatrix = this.strMatrix.map(val => val.split(' ').map(x => Number(x)));
    this.columnMatrix = this.rowMatrix[0].map((_, colIndex) => 
      this.rowMatrix.map(row => row[colIndex])
    );
  }

  get rows() {
    return this.rowMatrix;
  }

  get columns() {
    return this.columnMatrix;
  }
}
