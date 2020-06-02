"use strict";

class StringBuilder {
    constructor (value, str){
        this._value = value;
        this.str = str;
    }

get value() {
    return this._value;
}

append(str) {
return this._value + this.str;
}

prepend(str) {
    return this.str + this.value;
}

pad(str) {
  return  this.str + this._value + this.str;
}

}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='