emcc -O3 \ # compile optimization level
    -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \ # leave the cwrap() function available
    -I jpeg-9d \
    -I /usr/include/x86_64-linux-gnu \
    libjpeg.c \ # our c file!
    jpeg-9d/*.c

# OUTPUT:
# *.js - contains the bridge (a API) between javascript to wasm code
# *.wasm - compiled binary of our c code

# cwrap(function_name : string, return_type : string, argument_types : string[])
# a function in JS that will create a JS function even a C function
# 
# Usage:
# <script src="a.out.js"></script>
# <script>
#   Module.onRuntimeInitialized = _ => {
#     const fib = Module.cwrap('fib', 'number', ['number']);
#     console.log(fib(12));
#   };
# </script>
