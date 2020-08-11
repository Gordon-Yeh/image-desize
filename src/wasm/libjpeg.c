#include "emscripten.h"
#include "jpeg-9d/jversion.h"

EMSCRIPTEN_KEEPALIVE int verison() {
  return JVERSION;
}