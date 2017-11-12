Object.prototype.isEmpty = function() {
    let length = Object.keys(this).length;
    return length === 0;
};

Array.prototype.isEmpty = function() {
    return this.length === 0;
};

String.prototype.isEmpty = function() {
    return this.toString().trim() === '';
};



