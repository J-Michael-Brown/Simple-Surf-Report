const exampleData = '#YY  MM DD hh mm WVHT  SwH  SwP  WWH  WWP SwD WWD  STEEPNESS  APD MWD 2019 03 23 04 00  3.3  3.3 14.8  0.5  4.0   W  SW      SWELL  8.8 272 2019 03 23 03 00  3.5  3.5 14.8  0.6  4.3   W SSW      SWELL  9.1 277 2019 03 23 02 00  3.3  3.3 16.0  0.6  4.0   W SSW      SWELL  8.6 275 2019 03 23 01 00  3.7  3.6 16.0  0.8  4.0   W SSW      SWELL  8.7 259 2019 03 23 00 00  3.7  3.5 16.0  1.0  5.0   W SSW      SWELL  8.2 272 2019 03 22 23 00  3.8  3.4 16.0  1.7  6.2   W SSW      SWELL  8.1 259 2019 03 22 22 00  3.4  3.0 16.0  1.7  6.2 WSW SSW      SWELL  7.5 256 2019 03 22 21 00  3.1  2.0 16.0  2.4  7.7 WSW  SW    AVERAGE  6.8 258 2019 03 22 20 00  2.5  1.9 16.0  1.6  7.1 WNW  SW      SWELL  6.7 290 2019 03 22 19 00  2.3  1.9 14.8  1.2  6.7   W  SW      SWELL  6.8 268 2019 03 22 18 00  2.0  1.8 16.0  0.9  3.6   W ESE      SWELL  7.0 266 2019 03 22 17 00  2.1  1.9 16.0  0.9  6.2 WNW  SW      SWELL  7.3 284 2019 03 22 16 00  2.2  2.0 16.0  0.9  5.6   W  SW      SWELL  7.5 281 2019 03 22 15 00  2.0  1.7 14.8  0.9  5.6   W  SW      SWELL  7.0 278 2019 03 22 14 00  1.9  1.8 16.0  0.8  6.2 WNW  SW      SWELL  7.7 284 2019 03 22 13 00  2.0  1.9 16.0  0.7  5.6 WNW  SW      SWELL  8.0 301 2019 03 22 12 00  2.1  2.0 14.8  0.6  5.0   W  SW      SWELL  8.4 273 2019 03 22 11 00  2.0  1.9 16.0  0.6  5.3 WNW  SW      SWELL  8.4 283 2019 03 22 10 00  2.2  2.1 16.0  0.5  4.5 WNW  SW      SWELL  8.7 286 2019 03 22 09 00  2.1  2.1 16.0  0.5  4.3   W  SW      SWELL  8.6 269 2019 03 22 08 00  1.9  1.9 17.4  0.4  3.7 WNW  SW      SWELL  8.0 296 2019 03 22 07 00  2.0  2.0 17.4  0.4  4.3 WNW SSW      SWELL  8.3 293 2019 03 22 06 00  2.2  2.2 17.4  0.4  3.8   W SSW      SWELL  9.0 273 2019 03 22 05 00  2.0  1.9 17.4  0.4  3.8 WNW SSW      SWELL  8.0 293 2019 03 22 04 00  2.3  2.3 17.4  0.4  4.0 WNW SSW      SWELL  8.7 299 2019 03 22 03 00  2.1  2.1 19.0  0.4  3.6 WNW  SW      SWELL  8.2 297 2019 03 22 02 00  1.8  1.8 19.0  0.4  3.8 WNW  SW      SWELL  7.7 289 2019 03 22 01 00  1.9  1.8 19.0  0.4  3.7 WNW  SW      SWELL  7.7 288 2019 03 22 00 00  1.8  1.8 19.0  0.4  3.8  NW SSW      SWELL  7.6 315 2019 03 21 23 00  1.8  1.7 10.8  0.5  4.0 WSW SSW      SWELL  7.4 252 2019 03 21 22 00  1.8  1.7 12.9  0.6  4.2 WSW SSW      SWELL  7.2 243 2019 03 21 21 00  1.7  1.6 12.1  0.6  4.8   W SSW      SWELL  7.2 280 2019 03 21 20 00  1.9  1.8 12.1  0.6  3.8 WSW   S      SWELL  7.4 245 2019 03 21 19 00  1.9  1.8 12.9  0.7  5.3   W  SW      SWELL  7.3 270 2019 03 21 18 00  1.9  1.8 10.8  0.6  3.7   W SSW      SWELL  7.1 261 2019 03 21 17 00  1.9  1.8 10.8  0.6  3.6   W   S      SWELL  7.3 261 2019 03 21 16 00  2.1  2.0 10.8  0.6  5.6 WSW  SW      SWELL  7.9 251 2019 03 21 15 00  2.0  1.9 12.9  0.5  5.0 WNW  SW      SWELL  8.1 285 2019 03 21 14 00  2.1  2.1 12.9  0.4  3.8   W  SW      SWELL  8.5 265 2019 03 21 13 00  2.0  1.9 10.8  0.5  3.7   W  SW      SWELL  7.9 263 2019 03 21 12 00  2.1  2.1 12.1  0.5  3.6   W SSW      SWELL  8.4 272 2019 03 21 11 00  2.2  2.1 12.1  0.5  5.0   W SSW      SWELL  8.6 261 2019 03 21 10 00  2.0  2.0 13.8  0.5  4.5   W SSW      SWELL  8.4 269 2019 03 21 09 00  2.0  1.9 13.8  0.5  4.3 WSW   S      SWELL  8.3 258 2019 03 21 08 00  2.0  1.9 13.8  0.5  4.0   W   S      SWELL  8.4 264 2019 03 21 07 00  2.0  1.9 13.8  0.5  4.3 WSW   S      SWELL  8.2 249 2019 03 21 06 00  2.0  1.9 12.9  0.5  3.3   W SSW      SWELL  7.9 263 2019 03 21 05 00  2.1  2.0 12.9  0.6  3.4   W   S      SWELL  7.5 271 2019 03 21 04 00  2.0  1.9 12.9  0.8  3.3   W SSW      SWELL  7.2 266 2019 03 21 03 00  2.1  1.9 13.8  0.7  3.3 WNW SSW      SWELL  7.2 287 2019 03 21 02 00  2.1  2.0 12.9  0.6  5.3 WNW  SW      SWELL  7.5 283 2019 03 21 01 00  2.1  2.0 13.8  0.7  6.2   W  SW      SWELL  9.9 274 2019 03 21 00 00  2.2  2.1 13.8  0.3  4.5   W SSW      SWELL  9.5 276 2019 03 20 23 00  2.3  2.3 13.8  0.2  3.8   W SSW      SWELL  9.8 275 2019 03 20 22 00  2.3  2.2 14.8  0.3  3.8   W  SW      SWELL  9.7 275 2019 03 20 21 00  2.1  2.1 14.8  0.2  3.7   W SSW      SWELL  9.8 276 2019 03 20 20 00  2.0  2.0 13.8  0.3  2.7 WNW ESE      SWELL  8.9 284 2019 03 20 19 00  2.2  2.2 13.8  0.3  3.4   W   S      SWELL  9.8 276 2019 03 20 18 00  2.1  2.0 14.8  0.3  4.5 WNW SSW      SWELL  9.6 292 2019 03 20 17 00  2.1  2.0 13.8  0.3  3.4 WNW SSE      SWELL  9.8 284 2019 03 20 16 00  1.9  1.9 13.8  0.3  4.0   W SSW      SWELL  9.6 279 2019 03 20 15 00  1.9  1.8 13.8  0.3  3.6 WNW   S      SWELL  9.2 283 2019 03 20 14 00  2.0  2.0 13.8  0.2  4.0   W SSE      SWELL 10.0 277 2019 03 20 13 00  2.1  2.0 14.8  0.3  4.0 WNW SSE      SWELL 10.2 291 2019 03 20 12 00  2.0  2.0 14.8  0.3  3.7   W  SE      SWELL 10.2 272 2019 03 20 11 00  2.2  2.2 14.8  0.3  3.3 WNW   E      SWELL 10.1 292 2019 03 20 10 00  2.1  2.1 14.8  0.4  3.2   W ESE      SWELL  9.6 271 2019 03 20 09 00  2.1  2.0 13.8  0.4  3.7   W ESE      SWELL  9.3 275 2019 03 20 08 00  2.3  2.2 14.8  0.4  3.3   W ESE      SWELL  9.3 263 2019 03 20 07 00  1.9  1.9 14.8  0.4  5.6 WNW WSW      SWELL  9.3 286 2019 03 20 06 00  2.3  2.3 14.8  0.4  5.0 WNW  SW      SWELL 10.3 283 2019 03 20 05 00  2.2  2.2 14.8  0.4  3.2 WNW   E      SWELL  9.8 290 2019 03 20 04 00  2.3  2.2 16.0  0.5  3.4   W   E      SWELL  9.6 278 2019 03 20 03 00  1.8  1.7 13.8  0.5  5.6 WNW  SW      SWELL  8.4 283 2019 03 20 02 00  2.0  2.0 13.8  0.5  4.2   W SSE      SWELL  9.2 268 2019 03 20 01 00  2.3  2.3 13.8  0.5  3.8   W SSE      SWELL  9.7 278 2019 03 20 00 00  2.1  2.1 14.8  0.6  4.2   W  SE      SWELL  8.9 278 2019 03 19 23 00  2.1  2.0 13.8  0.7  4.8   W  SE      SWELL  8.3 275 2019 03 19 22 00  2.1  2.0 12.1  0.8  4.5   W ESE      SWELL  8.1 264 2019 03 19 21 00  2.3  2.1 16.0  0.9  4.8   W ESE      SWELL  8.3 270 2019 03 19 20 00  2.5  2.3 13.8  1.0  4.2   W   E      SWELL  8.0 271 2019 03 19 19 00  2.0  1.8 12.9  0.8  4.5   W   E      SWELL  7.6 267 2019 03 19 18 00  2.1  1.9 14.8  0.9  4.8   W   E      SWELL  7.2 278 2019 03 19 17 00  2.2  2.0 12.9  0.9  4.0 WSW   E      SWELL  7.5 248 2019 03 19 16 00  2.0  1.7 12.1  1.0  4.3 WSW   E      SWELL  6.7 251 2019 03 19 15 00  2.2  1.9 14.8  0.9  4.5   W   E      SWELL  7.3 276 2019 03 19 14 00  2.0  1.8 14.8  1.0  4.8   W   E      SWELL  7.0 276 2019 03 19 13 00  2.1  1.9 16.0  0.9  4.3 WNW   E      SWELL  7.3 298 2019 03 19 12 00  2.2  1.8 16.0  1.2  4.3 WNW   E      SWELL  6.6 284 2019 03 19 11 00  1.9  1.5 13.8  1.1  4.5   W   E      SWELL  6.2 270 2019 03 19 10 00  1.8  1.5 13.8  1.0  4.5   W ESE      SWELL  6.1 275 2019 03 19 09 00  1.7  1.4 12.1  1.0  4.5   W ESE      SWELL  6.1 260 2019 03 19 08 00  1.7  1.4 13.8  1.0  4.2   W ESE      SWELL  6.0 276 2019 03 19 07 00  1.5  1.2 11.4  0.9  4.2   W ESE      SWELL  5.6 264 2019 03 19 06 00  1.6  1.4 11.4  0.8  3.8 WSW ESE      SWELL  6.6 258 2019 03 19 05 00  1.5  1.3 11.4  0.9  4.2   W ESE      SWELL  5.9 263 2019 03 19 04 00  1.4  1.2 11.4  0.7  4.0   W ESE      SWELL  6.5 274 2019 03 19 03 00  1.4  1.2 11.4  0.7  4.0   W ESE      SWELL  6.3 280 2019 03 19 02 00  1.5  1.3 12.1  0.7  4.3   W ESE      SWELL  6.5 273 2019 03 19 01 00  1.3  1.1 11.4  0.8  4.3   W ESE      SWELL  5.4 280 2019 03 19 00 00  1.6  1.3 11.4  0.9  4.3   W ESE      SWELL  6.0 268 2019 03 18 23 00  1.8  1.5 11.4  0.9  4.0   W   E      SWELL  6.4 275 2019 03 18 22 00  1.7  1.4 11.4  1.0  4.3   W ESE      SWELL  6.2 276 2019 03 18 21 00  1.7  1.3 12.1  1.1  4.8   W ESE      SWELL  6.0 276 2019 03 18 20 00  1.8  1.5 11.4  1.1  4.5   W ESE      SWELL  6.2 268 2019 03 18 19 00  1.8  1.4 12.9  1.1  4.8 WNW ESE      SWELL  6.1 293 2019 03 18 18 00  1.7  1.4 12.1  1.0  4.3   W ESE      SWELL  6.1 269 2019 03 18 17 00  1.7  1.3 11.4  1.0  4.3   W   E      SWELL  6.1 269 2019 03 18 16 00  1.7  1.3 12.9  1.0  4.8   W ENE      SWELL  5.9 281 2019 03 18 15 00  1.7  1.5 12.1  0.8  3.8   W   E      SWELL  6.3 281 2019 03 18 14 00  1.8  1.6 12.9  0.9  4.2   W   E      SWELL  6.4 273 2019 03 18 13 00  1.8  1.7 12.9  0.8  4.0   W   E      SWELL  6.9 267 2019 03 18 12 00  1.8  1.7 12.1  0.7  3.7   W   E      SWELL  7.1 277 2019 03 18 11 00  1.7  1.5 12.9  0.8  3.6   W   E      SWELL  6.3 274 2019 03 18 10 00  1.9  1.8 12.9  0.5  3.2   W   E      SWELL  8.0 270 2019 03 18 09 00  1.9  1.8 12.1  0.6  3.1   W   E      SWELL  7.5 273 2019 03 18 08 00  1.9  1.8 12.9  0.5  3.7   W   N      SWELL  8.5 267 2019 03 18 07 00  2.0  1.9 13.8  0.4  4.3   W   N      SWELL  9.4 266 2019 03 18 06 00  2.0  1.9 10.8  0.5  5.6   W   W      SWELL  9.1 274 2019 03 18 05 00  2.2  2.2 13.8  0.5  3.8   W   N      SWELL  9.4 271 2019 03 18 04 00  2.2  2.1 12.9  0.5  3.7   W   N      SWELL  8.6 278 2019 03 18 03 00  2.2  2.1 13.8  0.7  3.8 WNW   N      SWELL  8.0 291 2019 03 18 02 00  2.2  2.1 13.8  0.7  3.4   W   N      SWELL  8.1 272 2019 03 18 01 00  2.5  2.4 12.9  0.6  3.0   W   N      SWELL  8.8 271 2019 03 18 00 00  2.3  2.3 13.8  0.4  2.7 WNW NNE      SWELL  9.5 295 2019 03 17 23 00  2.4  2.4 13.8  0.4  5.3   W WSW      SWELL 10.3 271 2019 03 17 22 00  2.4  2.4 12.1  0.3  3.6   W   N      SWELL 10.5 274 2019 03 17 21 00  2.8  2.8 12.9  0.2  3.2   W NNE      SWELL 11.0 278 2019 03 17 20 00  2.7  2.7 12.9  0.3  2.9   W NNE      SWELL 10.5 276 2019 03 17 19 00  2.4  2.4 12.1  0.2  3.2   W NNE      SWELL 10.4 274 2019 03 17 18 00  2.6  2.6 14.8  0.3  2.9   W   N      SWELL 10.6 271 2019 03 17 17 00  2.5  2.5 12.9  0.3  3.0 WNW   N      SWELL 10.3 289 2019 03 17 16 00  3.0  3.0 16.0  0.3  2.9   W   N      SWELL 10.9 272 2019 03 17 15 00  2.8  2.8 16.0  0.3  2.9   W   N      SWELL 10.6 279 2019 03 17 14 00  3.1  3.1 16.0  0.3  3.0 WNW   N      SWELL 10.7 285 2019 03 17 13 00  2.5  2.5 14.8  0.3  2.7   W   N      SWELL 10.0 279 2019 03 17 12 00  2.8  2.8 14.8  0.4  4.3   W   W      SWELL 10.2 272 2019 03 17 11 00  2.7  2.7 16.0  0.2  3.6   W   W      SWELL 10.7 271 2019 03 17 10 00  2.6  2.6 16.0  0.2  4.2   W WSW      SWELL 11.5 280 2019 03 17 09 00  2.4  2.4 17.4  0.1  3.0   W WNW      SWELL 11.1 271 2019 03 17 08 00  2.3  2.3 17.4  0.1  2.9 WNW  NE      SWELL 11.3 285 2019 03 17 07 00  2.0  2.0 17.4  0.1  3.7   W WNW      SWELL 11.3 281 2019 03 17 06 00  1.7  1.7 17.4  0.1  3.6 WNW SSW      SWELL 10.6 300 2019 03 17 05 00  1.7  1.7 19.0  0.1  3.8   W  NW      SWELL 10.8 266 2019 03 17 04 00  1.5  1.5 19.0  0.1  3.7   W   W      SWELL 10.0 269 2019 03 17 03 00  1.5  1.5 12.9  0.2  3.4 WNW   W      SWELL  9.6 286 2019 03 17 02 00  1.4  1.4 12.9  0.2  3.7   W   W      SWELL  9.4 279 2019 03 17 01 00  1.5  1.5 12.9  0.2  3.7   W   W      SWELL  9.0 281 2019 03 17 00 00  1.3  1.3 11.4  0.2  3.6 WNW WSW      SWELL  8.5 285 2019 03 16 23 00  1.5  1.5 12.9  0.2  4.0 WNW WSW      SWELL  8.8 289 2019 03 16 22 00  1.5  1.4 12.9  0.2  3.8 WNW   W      SWELL  8.5 294 2019 03 16 21 00  1.6  1.6 12.1  0.2  3.3 WNW ENE      SWELL  8.8 283 2019 03 16 20 00  1.4  1.4 13.8  0.2  3.2 WNW   E      SWELL  8.6 298 2019 03 16 19 00  1.5  1.5 12.9  0.2  3.3 WNW ENE      SWELL  8.9 287 2019 03 16 18 00  1.6  1.5 12.1  0.2  3.3 WNW ENE      SWELL  9.3 286 2019 03 16 17 00  1.7  1.6 12.9  0.2  3.1 WNW ENE      SWELL  9.5 288 2019 03 16 16 00  1.5  1.5 12.9  0.2  2.9   W NNE      SWELL  9.3 278 2019 03 16 15 00  1.8  1.8 13.8  0.2  3.0 WNW   N      SWELL  9.7 285 2019 03 16 14 00  1.7  1.7 12.9  0.2  3.2 WNW NNW      SWELL  9.2 292 2019 03 16 13 00  1.7  1.7 13.8  0.3  4.3 WNW   W      SWELL  9.1 294 2019 03 16 12 00  1.7  1.7 12.9  0.3  3.2 WNW   N      SWELL  8.9 286 2019 03 16 11 00  1.9  1.9 11.4  0.3  2.9 WNW   N      SWELL  9.0 282 2019 03 16 10 00  2.0  2.0 13.8  0.3  3.6 WNW  NW      SWELL  9.4 292 2019 03 16 09 00  1.8  1.8 12.9  0.3  3.0 WNW   N      SWELL  8.9 287 2019 03 16 08 00  2.1  2.0 11.4  0.3  2.9 WNW NNE      SWELL  9.0 300 2019 03 16 07 00  2.0  2.0 11.4  0.3  4.0 WNW  NW      SWELL  9.2 291 2019 03 16 06 00  2.4  2.3 13.8  0.3  3.8 WNW WNW      SWELL 10.0 298 2019 03 16 05 00  2.3  2.2 11.4  0.3  4.0 WNW WNW      SWELL  9.9 300 2019 03 16 04 00  2.8  2.8 12.9  0.2  2.6 WNW   N      SWELL 10.6 291 2019 03 16 03 00  2.3  2.3 11.4  0.3  3.7 WNW WSW      SWELL  9.7 296 2019 03 16 02 00  2.2  2.2 11.4  0.3  3.6 WNW WSW      SWELL  9.9 289 2019 03 16 01 00  2.2  2.2 11.4  0.2  3.8 WNW WSW      SWELL  9.7 293 2019 03 16 00 00  2.1  2.1 12.1  0.2  3.6 WNW   W      SWELL  9.3 292 2019 03 15 23 00  2.0  2.0 12.1  0.3  4.3 WNW WSW      SWELL  9.1 291 2019 03 15 22 00  2.2  2.2 12.9  0.2  4.0 WNW   W      SWELL  9.7 292 2019 03 15 12 00  2.4  2.4 12.1  0.3  3.6 WNW   W      SWELL  9.2 296 2019 03 15 11 00  2.5  2.5 12.9  0.4  3.4 WNW   W      SWELL  8.7 295 2019 03 15 10 00  2.5  2.5 12.9  0.3  3.1 WNW   W      SWELL  8.9 296 2019 03 15 09 00  2.4  2.4 12.9  0.3  4.0 WNW   W      SWELL  8.7 293 2019 03 15 08 00  2.3  2.3 12.9  0.3  3.7 WNW   W      SWELL  8.6 284 2019 03 15 07 00  2.3  2.3 12.9  0.3  3.8   W WSW      SWELL  8.9 272 2019 03 15 06 00  2.3  2.3 12.9  0.3  3.8 WNW   W      SWELL  8.6 289 2019 03 15 05 00  2.5  2.5 10.0  0.3  3.3   W WSW    AVERAGE  8.9 274 2019 03 15 04 00  2.4  2.4 12.9  0.3  4.0 WNW WSW      SWELL  8.6 284 2019 03 15 03 00  2.3  2.3 10.8  0.3  4.0   W   W      SWELL  8.4 274 2019 03 15 01 00  2.8  2.8 10.8  0.4  3.8 WNW WSW    AVERAGE  8.8 285 2019 03 15 00 00  2.6  2.6 12.1  0.4  3.2 WNW WSW      SWELL  8.6 297 2019 03 14 23 00  2.7  2.6 12.9  0.3  3.8 WNW   W      SWELL  8.7 289 2019 03 14 22 00  2.6  2.6 13.8  0.4  3.4 WNW   W      SWELL  8.6 290 2019 03 14 21 00  2.6  2.6 11.4  0.3  3.8 WNW WSW      SWELL  8.9 290 2019 03 14 20 00  2.2  2.2 13.8  0.3  3.4 WNW WSW      SWELL  8.7 282 2019 03 14 18 00  2.1  2.0 13.8  0.3  3.4 WNW WSW      SWELL  8.8 283 2019 03 14 17 00  1.8  1.8 12.9  0.3  3.7  NW WSW      SWELL  8.3 305 2019 03 14 16 00  1.8  1.8 12.1  0.3  4.0 WNW WSW      SWELL  8.6 291 2019 03 14 15 00  2.1  2.0 11.4  0.3  3.8 WNW   W      SWELL  8.8 288 2019 03 14 14 00  2.1  2.1 11.4  0.3  3.3 WNW  SW      SWELL  8.6 303 2019 03 14 13 00  2.5  2.5 12.1  0.3  3.8 WNW WSW      SWELL  9.2 300 2019 03 14 12 00  2.5  2.5 13.8  0.4  3.8 WNW   W      SWELL  9.4 302 2019 03 14 11 00  2.8  2.7 12.9  0.4  3.6 WNW  NW      SWELL  9.4 298 2019 03 14 10 00  2.9  2.8 12.1  0.4  4.0 WNW  NW      SWELL  9.4 295 2019 03 14 09 00  3.1  3.1 13.8  0.4  4.0  NW  NW      SWELL  9.2 311 2019 03 14 08 00  3.2  3.2 12.1  0.4  3.8 WNW  NW      SWELL  9.3 293 2019 03 14 07 00  3.2  3.1 12.9  0.4  4.0 WNW  NW      SWELL  9.1 293 2019 03 14 06 00  3.1  3.1 10.8  0.4  4.0 WNW NNW    AVERAGE  8.8 292 2019 03 14 05 00  3.6  3.6 13.8  0.5  4.0 WNW NNW      SWELL  9.4 289 2019 03 14 04 00  3.6  3.6 13.8  0.4  3.8 WNW NNW      SWELL  9.3 295 2019 03 14 03 00  3.6  3.6 12.1  0.4  3.4 WNW  NW      SWELL  9.7 289 2019 03 14 02 00  3.8  3.7 10.8  0.4  3.6 WNW NNW    AVERAGE  9.4 296 2019 03 14 01 00  4.0  3.9 12.9  0.4  3.6 WNW  NW      SWELL  9.9 290 2019 03 14 00 00  3.9  3.9 14.8  0.4  4.0 WNW  NW      SWELL  9.7 292 2019 03 13 23 00  3.6  3.6 14.8  0.4  3.1 WNW WNW      SWELL  9.5 287 2019 03 13 22 00  3.9  3.8 13.8  0.5  3.8 WNW   W      SWELL  9.6 295 2019 03 13 21 00  3.8  3.8 14.8  0.5  4.0 WNW WNW      SWELL  9.6 295 2019 03 13 20 00  4.0  3.9 14.8  0.6  4.0 WNW WNW      SWELL  9.3 294 2019 03 13 19 00  4.3  4.2 14.8  0.6  4.0 WNW  NW      SWELL  9.5 290 2019 03 13 18 00  4.2  4.1 14.8  0.6  4.0 WNW  NW      SWELL  9.2 293 2019 03 13 17 00  4.0  4.0 13.8  0.6  4.0 WNW  NW      SWELL  8.9 294 2019 03 13 16 00  4.1  4.0 14.8  1.0  5.0 WNW  NW      SWELL  9.0 301 2019 03 13 15 00  4.2  4.1 13.8  0.6  3.8 WNW  NW      SWELL  8.9 297 2019 03 13 14 00  3.9  3.8 16.0  0.6  3.7  NW  NW      SWELL  8.7 305 2019 03 13 13 00  3.9  3.7 16.0  1.2  5.9 WNW  NW      SWELL  8.7 289 2019 03 13 12 00  4.3  4.2 14.8  0.8  4.5 WNW  NW      SWELL  9.1 290 2019 03 13 11 00  4.1  4.0 14.8  0.9  5.3 WNW WNW      SWELL  9.3 291 2019 03 13 10 00  4.3  4.2 16.0  0.8  4.3 WNW  NW      SWELL  9.2 295 2019 03 13 09 00  4.0  3.9 14.8  0.8  5.0 WNW WNW      SWELL  9.2 294 2019 03 13 08 00  4.1  4.0 16.0  1.1  4.8 WNW WNW      SWELL  9.4 296 2019 03 13 07 00  4.1  3.5 14.8  2.1  7.7 WNW WNW      SWELL  8.8 295 2019 03 13 06 00  4.4  3.9 14.8  1.9  7.1 WNW  NW      SWELL  9.0 300 2019 03 13 05 00  3.8  3.4 12.9  1.7  6.2 WNW  NW      SWELL  8.5 297 2019 03 13 04 00  4.1  3.6 16.0  2.1  8.3 WNW WNW      SWELL  9.0 296 2019 03 13 03 00  4.5  3.8 16.0  2.4  6.7 WNW WNW      SWELL  8.7 295 2019 03 13 02 00  4.5  3.8 16.0  2.3  8.3  NW WNW      SWELL  9.1 306 2019 03 13 01 00  3.9  3.2 16.0  2.2  7.1 WNW WNW      SWELL  8.2 292 2019 03 13 00 00  4.7  4.1 16.0  2.3  7.7 WNW WNW      SWELL  9.4 288 2019 03 12 23 00  4.5  4.1 16.0  1.9  7.1 WNW WNW      SWELL  9.2 292 2019 03 12 22 00  4.7  4.1 16.0  2.1  6.7 WNW WNW      SWELL  9.3 293 2019 03 12 21 00  4.8  4.1 16.0  2.5  9.1   W WNW      SWELL  9.5 280 2019 03 12 20 00  5.0  4.5 17.4  2.0  5.9 WNW WNW      SWELL  9.8 289 2019 03 12 19 00  5.2  4.4 16.0  2.8  7.7 WNW WNW      SWELL  9.4 293 2019 03 12 18 00  4.9  4.2 16.0  2.5  7.1 WNW WNW      SWELL  9.5 288 2019 03 12 17 00  4.5  3.9 17.4  2.2  6.7 WNW WNW      SWELL  9.2 300 2019 03 12 16 00  4.3  3.6 14.8  2.4  7.1 WNW WNW      SWELL  9.0 286 2019 03 12 15 00  4.8  4.3 17.4  2.0  7.1 WNW WNW      SWELL  9.9 299 2019 03 12 14 00  4.5  4.0 17.4  2.0  7.1 WNW   W      SWELL  9.9 302 2019 03 12 13 00  4.4  3.9 17.4  2.0  7.7 WNW WNW      SWELL  9.4 298 2019 03 12 12 00  4.0  3.5 17.4  2.1  8.3 WNW WNW      SWELL  8.8 301 2019 03 12 11 00  4.1  3.6 17.4  1.9  6.7 WNW WSW      SWELL  8.7 300 2019 03 12 10 00  3.7  3.3 19.0  1.8  6.7 WNW WSW      SWELL  8.0 285 2019 03 12 09 00  4.4  3.7 19.0  2.4  8.3 WNW   W      SWELL  9.1 289 2019 03 12 08 00  4.4  3.6 19.0  2.5  8.3 WNW WNW      SWELL  8.7 297 2019 03 12 07 00  5.0  3.9 19.0  3.0  8.3   W   W      SWELL  8.6 262 2019 03 12 06 00  4.4  3.4 19.0  2.8  9.1   W   W      SWELL  8.2 281 2019 03 12 05 00  4.1  3.4 21.1  2.4  5.6   W  SW      SWELL  8.0 266 2019 03 12 04 00  4.2  3.4 21.1  2.5  4.2   W SSW      SWELL  8.2 266 2019 03 12 03 00  3.6  2.9 21.1  2.1  7.7 WSW   W      SWELL  7.9 250 2019 03 12 02 00  2.8  2.3 14.8  1.6  7.7   W WNW      SWELL  7.2 275 2019 03 12 01 00  2.6  2.4 13.8  1.2  4.5 WNW  SW      SWELL  7.5 287 2019 03 12 00 00  2.6  2.4 14.8  0.9  3.8 WNW SSW      SWELL  8.2 295 2019 03 11 23 00  2.5  2.3 13.8  0.8  3.8   W   S      SWELL  8.3 269 2019 03 11 22 00  2.4  2.3 13.8  0.9  4.0   W   S      SWELL  8.0 279 2019 03 11 21 00  2.3  2.2 14.8  0.8  3.7 WNW   S      SWELL  7.9 301 2019 03 11 20 00  2.3  2.2 13.8  0.7  3.3   W   S      SWELL  8.3 269 2019 03 11 19 00  2.4  2.3 14.8  0.6  3.4 WNW SSE      SWELL  8.4 287 2019 03 11 18 00  2.2  2.1 12.1  0.6  3.2 WNW  SE      SWELL  8.2 288 2019 03 11 17 00  2.2  2.2 14.8  0.5  3.2   W  SE      SWELL  9.0 280 2019 03 11 16 00  2.3  2.2 14.8  0.5  3.0 WNW  SE      SWELL  9.5 282 2019 03 11 15 00  2.4  2.4 12.9  0.4  3.4 WNW   N      SWELL 10.0 291 2019 03 11 14 00  2.5  2.5 12.9  0.3  3.7 WNW   N      SWELL 10.0 293 2019 03 11 13 00  2.6  2.5 13.8  0.3  3.8 WNW NNW      SWELL 10.4 291 2019 03 11 12 00  2.6  2.6 14.8  0.3  4.0 WNW   N      SWELL 10.4 296 2019 03 11 11 00  2.8  2.8 13.8  0.3  3.4 WNW NNW      SWELL 10.7 296 2019 03 11 10 00  3.0  2.9 14.8  0.3  4.0 WNW NNW      SWELL 10.9 303 2019 03 11 09 00  3.0  3.0 13.8  0.3  4.0 WNW NNW      SWELL 10.8 302 2019 03 11 08 00  3.1  3.1 13.8  0.4  3.7 WNW NNW      SWELL 10.7 284 2019 03 11 07 00  2.9  2.8 16.0  0.7  4.8 WNW NNW      SWELL  9.7 286 2019 03 11 06 00  3.1  3.0 14.8  0.8  4.5 WNW NNW      SWELL  9.5 301 2019 03 11 05 00  3.3  3.2 16.0  0.8  4.0 WNW   N      SWELL  9.8 293 2019 03 11 04 00  3.5  3.4 16.0  0.9  4.2 WNW   N      SWELL 10.2 286 2019 03 11 03 00  3.7  3.6 16.0  0.8  3.8  NW   N      SWELL 10.7 305 2019 03 11 02 00  3.2  3.2 16.0  0.6  3.2 WNW   N      SWELL 11.1 296 2019 03 11 01 00  3.1  3.0 17.4  0.5  4.0 WNW NNW      SWELL 10.9 292 2019 03 11 00 00  3.4  3.3 16.0  0.6  4.0 WNW   N      SWELL 11.3 293 2019 03 10 23 00  2.7  2.7 17.4  0.5  3.6 WNW   N      SWELL 11.2 295 2019 03 10 22 00  3.2  3.2 17.4  0.4  4.2 WNW NNW      SWELL 13.1 301 2019 03 10 21 00  3.0  3.0 17.4  0.4  4.2 WNW NNW      SWELL 12.8 298 2019 03 10 20 00  2.7  2.6 17.4  0.4  3.8 WNW   N      SWELL 11.5 299 2019 03 10 19 00  2.7  2.7 17.4  0.4  3.1 WNW   E      SWELL 11.2 297 2019 03 10 18 00  2.6  2.6 17.4  0.6  5.0 WNW   N      SWELL 10.4 285 2019 03 10 17 00  3.1  3.1 17.4  0.6  5.0 WNW   N      SWELL 12.4 293 2019 03 10 16 00  2.5  2.5 19.0  0.4  4.2 WNW NNW      SWELL 11.8 299 2019 03 10 15 00  2.4  2.4 17.4  0.4  2.7 WNW ENE      SWELL 11.4 289 2019 03 10 14 00  2.5  2.5 19.0  0.3  3.6 WNW   N      SWELL 11.9 293 2019 03 10 13 00  2.1  2.0 17.4  0.4  3.6 WNW NNW      SWELL 10.7 299 2019 03 10 12 00  2.3  2.3 19.0  0.3  3.8 WNW   N      SWELL 11.7 299 2019 03 10 11 00  2.7  2.7 17.4  0.4  4.2  NW   N      SWELL 12.5 307 2019 03 10 10 00  2.3  2.2 17.4  0.6  4.8 WNW NNW      SWELL 10.2 297 2019 03 10 09 00  2.4  2.3 19.0  0.6  4.8 NNW NNW      SWELL 10.7 332 2019 03 10 08 00  2.4  2.3 19.0  0.7  4.8  NW NNW      SWELL 10.2 304 2019 03 10 07 00  1.8  1.5 19.0  0.9  4.3 NNW NNW      SWELL  6.8 332 2019 03 10 06 00  2.2  1.9 19.0  1.0  4.0  NW NNE      SWELL  7.0 317 2019 03 10 05 00  1.8  1.5 19.0  0.9  4.3 WNW NNE      SWELL  6.4 296 2019 03 10 04 00  1.7  1.4 19.0  0.9  3.7  NW   N      SWELL  6.1 308 2019 03 10 03 00  1.7  1.6 19.0  0.6  3.7  NW   N      SWELL  7.9 308 2019 03 10 02 00  1.1  1.1 19.0  0.4  3.8 SSE NNW      SWELL  6.8 158 2019 03 10 01 00  1.2  1.1 21.1  0.4  4.2  NW NNW      SWELL  7.7 308 2019 03 10 00 00  1.2  1.1 21.1  0.3  5.0 WNW WNW      SWELL  8.1 297 2019 03 09 23 00  1.1  1.0 11.4  0.4  3.3   W   E      SWELL  6.7 281 2019 03 09 22 00  1.1  1.1 21.1  0.4  3.4  NW   E      SWELL  7.0 314 2019 03 09 21 00  1.2  1.1 10.0  0.4  3.6   W ENE      SWELL  6.5 268 2019 03 09 20 00  1.2  1.1 10.0  0.6  3.8 WNW ENE      SWELL  5.8 288 2019 03 09 19 00  1.3  1.1 10.8  0.8  4.0 WNW   E      SWELL  5.6 295 2019 03 09 18 00  1.3  1.0 10.0  0.8  4.2 WNW   E      SWELL  5.4 286 2019 03 09 17 00  1.4  1.2 10.0  0.7  3.8 WNW   E      SWELL  5.9 289 2019 03 09 16 00  1.3  1.1 10.0  0.7  3.7   W   E      SWELL  5.7 281 2019 03 09 15 00  1.2  1.1 10.8  0.6  3.4 WNW   E      SWELL  5.8 286 2019 03 09 14 00  1.2  1.1 10.8  0.5  5.3 WNW WNW      SWELL  6.3 287 2019 03 09 13 00  1.2  1.1 10.8  0.4  4.5 WNW   W      SWELL  6.7 285 2019 03 09 12 00  1.2  1.2 10.8  0.4  4.3 WNW   W      SWELL  6.8 291 2019 03 09 11 00  1.2  1.2 11.4  0.3  4.2 WNW  SW      SWELL  6.8 287 2019 03 09 10 00  1.2  1.2 11.4  0.3  2.6 WNW   E      SWELL  6.5 287 2019 03 09 09 00  1.3  1.2 11.4  0.3  3.7 WNW WNW      SWELL  7.1 289 2019 03 09 08 00  1.2  1.1 10.8  0.4  3.8 WNW WSW      SWELL  6.6 288 2019 03 09 07 00  1.2  1.2 11.4  0.3  4.0 WNW   W      SWELL  6.7 295 2019 03 09 06 00  1.3  1.3 12.1  0.3  3.8 WNW WSW      SWELL  7.1 289 2019 03 09 05 00  1.3  1.3 11.4  0.3  3.7   W  SW      SWELL  6.9 262 2019 03 09 04 00  1.3  1.2 12.1  0.4  4.0  NW WSW      SWELL  6.6 308 2019 03 09 03 00  1.3  1.3 12.1  0.4  4.0 WNW WSW      SWELL  6.6 298 2019 03 09 02 00  1.3  1.2 12.1  0.4  4.0 WNW   W      SWELL  6.2 285 2019 03 09 01 00  1.4  1.4 12.1  0.4  4.0   W WNW      SWELL  7.0 278 2019 03 09 00 00  1.4  1.3 12.1  0.3  3.3 WNW  SW      SWELL  7.0 285 2019 03 08 23 00  1.4  1.4 12.1  0.3  3.8   W WSW      SWELL  7.1 269 2019 03 08 22 00  1.4  1.3 12.1  0.3  3.8 WNW   W      SWELL  6.8 287 2019 03 08 21 00  1.4  1.4 12.1  0.4  3.4 WNW  SE      SWELL  6.6 296 2019 03 08 20 00  1.4  1.3 12.1  0.4  3.4 WNW SSW      SWELL  6.2 290 2019 03 08 19 00  1.3  1.2 11.4  0.4  3.8 WNW   W      SWELL  6.0 284 2019 03 08 18 00  1.4  1.3 12.9  0.4  4.0 WNW WSW      SWELL  6.2 290 2019 03 08 17 00  1.5  1.4 12.9  0.4  3.6   W WSW      SWELL  6.5 279 2019 03 08 16 00  1.4  1.3 11.4  0.6  5.0   W   W      SWELL  6.2 275 2019 03 08 15 00  1.5  1.3 11.4  0.7  5.0 WNW WNW      SWELL  6.5 283 2019 03 08 14 00  1.6  1.6 12.1  0.5  3.8 WNW WSW      SWELL  6.6 298 2019 03 08 13 00  1.6  1.5 12.1  0.5  3.7   W WNW      SWELL  6.3 272 2019 03 08 12 00  1.6  1.6 12.1  0.5  3.8  NW WNW      SWELL  6.7 305 2019 03 08 11 00  1.5  1.4 12.1  0.5  3.8 WNW   W      SWELL  6.5 297 2019 03 08 10 00  1.5  1.4 11.4  0.7  4.3 WNW   W      SWELL  6.3 288 2019 03 08 09 00  1.7  1.7 12.1  0.4  3.4 WNW WSW      SWELL  7.1 290 2019 03 08 08 00  1.5  1.4 12.1  0.5  3.7   W   W      SWELL  6.7 278 2019 03 08 07 00  1.5  1.4 12.9  0.4  4.0   W   W      SWELL  6.6 262 2019 03 08 06 00  1.6  1.5 13.8  0.5  4.3 WNW   W      SWELL  6.6 288 2019 03 08 05 00  1.5  1.4 12.9  0.4  3.8   W   W      SWELL  6.4 276 2019 03 08 04 00  1.5  1.4 12.1  0.5  4.0 WNW   W      SWELL  6.2 288 2019 03 08 03 00  1.5  1.4 12.9  0.5  3.8 WNW   W      SWELL  6.3 286 2019 03 08 02 00  1.6  1.5 13.8  0.6  4.2 WNW   W      SWELL  6.3 297 2019 03 08 01 00  1.7  1.6 13.8  0.5  3.6 WNW   W      SWELL  6.0 301 2019 03 08 00 00  1.7  1.6 12.9  0.6  4.3 WNW   W      SWELL  6.1 283 2019 03 07 23 00  1.7  1.5 12.9  0.9  4.5 WNW WSW      SWELL  6.0 283 2019 03 07 22 00  1.6  1.4 14.8  0.6  4.5 WNW   W      SWELL  6.0 284 2019 03 07 21 00  1.5  1.5 12.1  0.5  3.6 WNW   W      SWELL  5.7 296 2019 03 07 20 00  1.6  1.2 13.8  1.1  5.6 WNW   W      SWELL  6.1 293 2019 03 07 19 00  1.6  1.1 12.9  1.1  5.3 WNW WSW      SWELL  5.7 283 2019 03 07 18 00  1.7  1.2 14.8  1.1  5.3 WNW WSW      SWELL  5.6 298 2019 03 07 17 00  1.6  1.1 12.9  1.2  4.5 WNW WSW    AVERAGE  5.4 288 2019 03 07 16 00  1.4  1.0 16.0  0.9  4.8 WNW WSW      SWELL  5.4 284 2019 03 07 15 00  1.3  1.2 12.9  0.5  3.2 WNW   W      SWELL  5.5 299 2019 03 07 14 00  1.4  1.2 10.0  0.7  3.8  SW WSW      SWELL  5.3 225 2019 03 07 13 00  1.4  1.0 13.8  1.0  4.2 WNW   W      SWELL  5.3 296 2019 03 07 12 00  1.3  1.0 10.8  0.8  4.5 WSW WSW      SWELL  5.6 238 2019 03 07 11 00  1.4  1.1 14.8  0.8  4.3  NW   W      SWELL  5.3 321 2019 03 07 10 00  1.3  1.0 10.0  0.8  3.7  SW WSW      SWELL  5.1 233 2019 03 07 09 00  1.3  1.1 10.8  0.7  4.8 WSW  NW      SWELL  6.0 240 2019 03 07 08 00  1.2  1.1 10.8  0.5  4.8  SW WNW      SWELL  7.3 219 2019 03 07 07 00  1.3  1.2 10.0  0.5  4.3  SW  NW      SWELL  6.7 214 2019 03 07 06 00  1.3  1.2 10.8  0.4  3.2   W  NW      SWELL  6.3 260 2019 03 07 05 00  1.2  1.1 10.8  0.4  3.7   W  NW      SWELL  6.0 265 2019 03 07 04 00  1.1  1.0 11.4  0.4  3.4   W  NW      SWELL  5.8 261 2019 03 07 03 00  1.1  1.0 10.8  0.5  3.6 WNW  NW      SWELL  5.5 283 2019 03 07 02 00  1.1  0.9 10.8  0.6  3.8 WNW  NW      SWELL  5.5 298 2019 03 07 01 00  1.0  0.8 11.4  0.6  3.3 WNW WNW      SWELL  5.5 293 2019 03 07 00 00  0.8  0.7 10.8  0.4  4.0 WNW NNW      SWELL  6.0 292 2019 03 06 23 00  0.9  0.9 11.4  0.3  3.7 WNW NNW      SWELL  6.3 290 2019 03 06 22 00  0.9  0.8 12.1  0.4  3.8 WNW NNW      SWELL  6.1 303 2019 03 06 21 00  0.8  0.7 11.4  0.5  4.3 WNW NNW      SWELL  5.4 291 2019 03 06 20 00  0.9  0.7 11.4  0.6  4.5 WNW   N      SWELL  5.1 294 2019 03 06 19 00  1.0  0.8 12.1  0.6  4.8   W NNW      SWELL  5.3 263 2019 03 06 18 00  0.9  0.8 11.4  0.4  3.7 WNW NNE      SWELL  4.9 284 2019 03 06 17 00  1.0  0.8 11.4  0.6  4.8 WNW NNW      SWELL  5.2 302 2019 03 06 16 00  1.1  0.9 11.4  0.6  4.5  NW   N      SWELL  5.2 309 2019 03 06 15 00  1.1  0.9 11.4  0.6  4.3  NW NNW      SWELL  5.5 311 2019 03 06 14 00  1.1  1.0 10.8  0.5  3.4  NW  NE      SWELL  5.8 304 2019 03 06 13 00  1.0  0.9 11.4  0.5  3.4   W NNE      SWELL  5.5 267 2019 03 06 12 00  1.2  1.0 12.1  0.6  4.8  NW NNW      SWELL  6.0 318 2019 03 06 11 00  1.1  1.0 11.4  0.5  4.8  NW   N      SWELL  6.2 305 2019 03 06 10 00  1.1  1.0 11.4  0.6  4.3 WNW   N      SWELL  6.0 299 2019 03 06 09 00  1.2  1.1 12.1  0.6  4.8  NW   N      SWELL  5.8 304 2019 03 06 08 00  1.3  0.8 11.4  1.1  5.6 WNW NNW    AVERAGE  5.2 287 2019 03 06 07 00  1.5  0.9 11.4  1.2  5.3 WNW   N    AVERAGE  5.2 283 2019 03 06 06 00  1.6  0.8 11.4  1.4  5.0 WNW NNE    AVERAGE  4.8 294 2019 03 06 05 00  1.7  0.8 11.4  1.4  5.3  NW NNE    AVERAGE  4.8 318 2019 03 06 04 00  1.6  0.9 11.4  1.3  5.0 WNW NNE    AVERAGE  4.8 289 2019 03 06 03 00  1.6  0.9 12.1  1.3  5.3 WNW   N    AVERAGE  4.9 297 2019 03 06 02 00  1.4  0.8 12.1  1.2  4.8  NW   N    AVERAGE  4.6 307 2019 03 06 01 00  1.2  0.9 12.1  0.9  4.0 WNW   N      SWELL  4.7 285 2019 03 06 00 00  1.0  0.8 12.1  0.7  3.7 WNW NNE      SWELL  4.8 302 2019 03 05 23 00  1.1  0.9 12.1  0.6  3.7  NW  NE      SWELL  4.9 306 2019 03 05 22 00  1.2  1.1 11.4  0.6  3.7   W   E      SWELL  6.0 280 2019 03 05 21 00  1.0  0.8 12.1  0.6  3.7   W ENE      SWELL  5.1 267 2019 03 05 20 00  1.2  1.0 12.1  0.7  4.0 WNW   E      SWELL  5.4 290 2019 03 05 19 00  1.4  1.1 12.1  0.8  4.3 WNW   E      SWELL  5.6 292 2019 03 05 18 00  1.4  1.0 12.1  0.9  4.2  NW ENE      SWELL  5.3 314 2019 03 05 17 00  1.3  1.0 12.1  0.8  4.3 WNW   E      SWELL  5.5 287 2019 03 05 16 00  1.2  0.9 12.1  0.8  4.2 WNW   E      SWELL  5.3 285 2019 03 05 15 00  1.2  1.0 12.9  0.7  4.2   W   E      SWELL  5.5 268 2019 03 05 14 00  1.4  1.2 12.9  0.8  4.3 WNW   E      SWELL  6.1 288 2019 03 05 13 00  1.3  1.1 12.9  0.7  4.0 WNW ENE      SWELL  5.7 298 2019 03 05 12 00  1.0  0.8 11.4  0.6  3.8 WNW   E      SWELL  5.1 289 2019 03 05 11 00  1.1  0.9 12.9  0.7  3.8  NW   E      SWELL  5.4 310';

export default exampleData;
