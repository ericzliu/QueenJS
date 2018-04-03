/**
 * 
 */

function Queens(n) {
	this.number = n;
	this.rows = new Array(n);
	for (let i = 0; i < n; i++) {
		this.rows[i] = -1;
	}
}

Queens.prototype.getRow = function(col) {
	return this.rows[col];
}

Queens.prototype.setRow = function(col, row) {
	this.rows[col] = row;
}

Queens.prototype.isRowEmpty = function(col1, col2, row) {
	for (let col = col1; col <= col2; col++) {
		if (this.rows[col] === row) {
			return false;
		}
	}
	return true;
}

Queens.prototype.isDiagonalEmpty = function(col1, col2, row, col) {
	for (let colQ = col1; colQ <= col2; colQ++) {
		const rowQ = this.rows[colQ];
		if (Math.abs(colQ - col) === Math.abs(rowQ - row)) {
			return false;
		}
	}
	return true;
}

Queens.prototype.lookUpRec = function* (col) {
	for (let row = 0; row < this.number; row++) {
		if (this.isRowEmpty(0, col - 1, row) && this.isDiagonalEmpty(0, col - 1, row, col)) {
			this.setRow(col, row);
			if (col === this.number - 1) {
				yield this.rows;
			} else {
				yield* this.lookUpRec(col + 1);
			}
		}
	}
}

module.exports = Queens;