import chacha from "./app.js"  // default import (can have any name ).
console.log(chacha);

import {b,c} from "../app.js"  // named import (in curly braces and name should be the same as the export name)
console.log(b+c);

import {s} from "../app.js";
console.log(s);
