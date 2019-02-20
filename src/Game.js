var A9A = {
    'R': function (A, t) {
        return A - t;
    },
    'a7l': "vectorEstilos",
    'H4': function (A, t) {
        return A === t;
    },
    'G3l': "endFill",
    'G2l': (function (Y) {
        var w = function (A, t, F) {
                if (m[F] !== undefined) {
                    return m[F];
                }
                var N = 0xcc9e2d51,
                    i = 0x1b873593,
                    a = F,
                    q = t & ~0x3;
                for (var U = 0; U < q; U += 4) {
                    var S = (A["charCodeAt"](U) & 0xff) | ((A["charCodeAt"](U + 1) & 0xff) << 8) | ((A["charCodeAt"](U + 2) & 0xff) << 16) | ((A["charCodeAt"](U + 3) & 0xff) << 24);
                    S = r(S, N);
                    S = ((S & 0x1ffff) << 15) | (S >>> 17);
                    S = r(S, i);
                    a ^= S;
                    a = ((a & 0x7ffff) << 13) | (a >>> 19);
                    a = (a * 5 + 0xe6546b64) | 0;
                }
                S = 0;
                switch (t % 4) {
                    case 3:
                        S = (A["charCodeAt"](q + 2) & 0xff) << 16;
                    case 2:
                        S |= (A["charCodeAt"](q + 1) & 0xff) << 8;
                    case 1:
                        S |= (A["charCodeAt"](q) & 0xff);
                        S = r(S, N);
                        S = ((S & 0x1ffff) << 15) | (S >>> 17);
                        S = r(S, i);
                        a ^= S;
                }
                a ^= t;
                a ^= a >>> 16;
                a = r(a, 0x85ebca6b);
                a ^= a >>> 13;
                a = r(a, 0xc2b2ae35);
                a ^= a >>> 16;
                m[F] = a;
                return a;
            },
            r = function (A, t) {
                var F = t & 0xffff;
                var N = t - F;
                return ((N * A | 0) + (F * A | 0)) | 0;
            },
            g = function (A, t, F) {
                var N;
                var i;
                if (F > 0) {
                    N = o["substring"](A, F);
                    i = N.length;
                    return w(N, i, t);
                } else if (A === null || A <= 0) {
                    N = o["substring"](0, o.length);
                    i = N.length;
                    return w(N, i, t);
                }
                N = o["substring"](o.length - A, o.length);
                i = N.length;
                return w(N, i, t);
            },
            m = {},
            o = (function () {}).constructor(new Y("yl{|yu\'kvj|tlu{5kvthpuB")["C2l"](7))();
        return {
            b2l: r,
            f2l: w,
            j2l: g
        };
    })(function (N) {
        this["O2l"] = N;
        this["C2l"] = function (A) {
            var t = new String();
            for (var F = 0; F < N.length; F++) {
                t += String["fromCharCode"](N["charCodeAt"](F) - A);
            }
            return t;
        }
    }),
    'x2': function (A, t) {
        return A === t;
    },
    'M8l': "destroy",
    'S7': function (A, t) {
        return A / t;
    },
    'X1l': "Game",
    'd6': function (A, t) {
        return A - t;
    },
    'S9': function (A, t) {
        return A !== t;
    },
    'Z3': function (A, t) {
        return A < t;
    },
    'I6': function (A, t) {
        return A - t;
    },
    'f5': function (A, t) {
        return A === t;
    },
    'm6': function (A, t) {
        return A - t;
    },
    'u0': function (A, t) {
        return A / t;
    },
    'b6': function (A, t) {
        return A - t;
    },
    'K2': function (A, t) {
        return A <= t;
    },
    'U1': function (A, t) {
        return A !== t;
    },
    'v': function (A, t) {
        return A > t;
    },
    'U4': function (A, t) {
        return A !== t;
    },
    'm5': function (A, t) {
        return A === t;
    },
    's9': function (A, t) {
        return A === t;
    },
    'j': function (A, t) {
        return A / t;
    },
    'e2S': "x",
    'g8l': "charCodeAt",
    'd': function (A, t) {
        return A / t;
    },
    'M': function (A, t) {
        return A - t;
    },
    'R2S': "y",
    'v7': function (A, t) {
        return A - t;
    },
    'C6': function (A, t) {
        return A - t;
    },
    'F8l': "halfBrushW",
    'z7l': "clear",
    'G': function (A, t) {
        return A / t;
    },
    'D1': function (A, t) {
        return A <= t;
    },
    'Q0': function (A, t) {
        return A * t;
    },
    'y5': function (A, t) {
        return A === t;
    },
    'u5l': "frame",
    'N3l': "numeroHerramienta",
    'k1l': "toDataURL",
    'Y5': function (A, t) {
        return A === t;
    },
    'J8l': "lineStyle",
    'T7': function (A, t) {
        return A === t;
    },
    'f6': function (A, t) {
        return A - t;
    },
    'u1': function (A, t) {
        return A * t;
    },
    'T9': function (A, t) {
        return A === t;
    },
    'C8': function (A, t) {
        return A * t;
    },
    'i7': function (A, t) {
        return A - t;
    },
    'a5': function (A, t) {
        return A - t;
    },
    'b5': function (A, t) {
        return A - t;
    },
    'z4': function (A, t) {
        return A === t;
    },
    'b3': function (A, t) {
        return A / t;
    },
    'p': function (A, t) {
        return A < t;
    },
    'm5l': "tamanoUp",
    'k': function (A, t) {
        return A - t;
    },
    'x9': function (A, t) {
        return A !== t;
    },
    'D0l': 0,
    'q4': function (A, t) {
        return A < t;
    },
    'y3': function (A, t) {
        return A * t;
    },
    'D4': function (A, t) {
        return A / t;
    },
    'H1': function (A, t) {
        return A >= t;
    },
    'j9': function (A, t) {
        return A === t;
    },
    'F4l': "abs",
    'L1': function (A, t) {
        return A !== t;
    },
    'B7': function (A, t) {
        return A - t;
    },
    'I5': function (A, t) {
        return A === t;
    },
    'x2S': "ponerColor",
    'J6': function (A, t) {
        return A - t;
    },
    'w4': function (A, t) {
        return A !== t;
    },
    'X0': function (A, t) {
        return A === t;
    },
    'M8': function (A, t) {
        return A < t;
    },
    'o2l': function (A, t) {
        return A / t;
    },
    'e4': function (A, t) {
        return A < t;
    },
    'h8': function (A, t) {
        return A < t;
    },
    'b8': function (A, t) {
        return A > t;
    },
    'm8': function (A, t) {
        return A < t;
    },
    'U0': function (A, t) {
        return A === t;
    },
    'o9': function (A, t) {
        return A < t;
    },
    'G2': function (A, t) {
        return A / t;
    },
    'E1l': "add",
    'J5': function (A, t) {
        return A === t;
    },
    'l': function (A, t) {
        return A < t;
    },
    'z8l': "activePointer",
    'V7': function (A, t) {
        return A === t;
    },
    'E6': function (A, t) {
        return A - t;
    },
    'M5': function (A, t) {
        return A === t;
    },
    'y6': function (A, t) {
        return A - t;
    },
    'y8l': "elemento",
    'l6': function (A, t) {
        return A - t;
    },
    'f0l': 2,
    'O4': function (A, t) {
        return A === t;
    },
    'f3': function (A, t) {
        return A < t;
    },
    'O3l': "nopulsado",
    'X': function (A, t) {
        return A / t;
    },
    'w0': function (A, t) {
        return A === t;
    },
    'h5': function (A, t) {
        return A - t;
    },
    'X1': function (A, t) {
        return A / t;
    },
    'a8': function (A, t) {
        return A < t;
    },
    'm3': function (A, t) {
        return A === t;
    },
    'c': function (A, t) {
        return A / t;
    },
    't3': function (A, t) {
        return A < t;
    },
    'E5': function (A, t) {
        return A === t;
    },
    'o4l': "addToWorld",
    'l5': function (A, t) {
        return A - t;
    },
    'V2': function (A, t) {
        return A * t;
    },
    'N1': function (A, t) {
        return A - t;
    },
    'L4': function (A, t) {
        return A === t;
    },
    'c8': function (A, t) {
        return A > t;
    },
    'Q2S': "fondoRueda",
    'k7': function (A, t) {
        return A - t;
    },
    'Z6': function (A, t) {
        return A - t;
    },
    'B3l': "anchor",
    'w1': function (A, t) {
        return A / t;
    },
    'B2': function (A, t) {
        return A !== t;
    },
    'u': function (A, t) {
        return A !== t;
    },
    'r9': function (A, t) {
        return A === t;
    },
    'X4': function (A, t) {
        return A > t;
    },
    'f8': function (A, t) {
        return A < t;
    },
    'g2l': function (A, t) {
        return A / t;
    },
    'c6': function (A, t) {
        return A - t;
    },
    'o2': function (A, t) {
        return A > t;
    },
    'J3S': (function (v3S) {
        return (function (C3S, z3S) {
            return (function (O3S) {
                return {
                    p3S: O3S
                };
            })(function (E3S) {
                var T3S, u3S = 0;
                for (var s3S = C3S; u3S < E3S["length"]; u3S++) {
                    var h3S = z3S(E3S, u3S);
                    T3S = u3S === 0 ? h3S : T3S ^ h3S;
                }
                return T3S ? s3S : !s3S;
            });
        })((function (I3S, y3S, W3S, L3S) {
            var Q3S = 29;
            return I3S(v3S, Q3S) - L3S(y3S, W3S) > Q3S;
        })(parseInt, Date, (function (y3S) {
            return ('' + y3S)["substring"](1, (y3S + '')["length"] - 1);
        })('_getTime2'), function (y3S, W3S) {
            return new y3S()[W3S]();
        }), function (E3S, u3S) {
            var V3S = parseInt(E3S["charAt"](u3S), 16)["toString"](2);
            return V3S["charAt"](V3S["length"] - 1);
        });
    })('ecr3hcrjl'),
    'e3l': "pintar",
    'N4': function (A, t) {
        return A !== t;
    },
    'E8': function (A, t) {
        return A / t;
    },
    'S1l': "getPixel",
    'P0': function (A, t) {
        return A / t;
    },
    'M3': function (A, t) {
        return A < t;
    },
    'p2S': "input",
    'P4': function (A, t) {
        return A / t;
    },
    'h3': function (A, t) {
        return A / t;
    },
    'A4': function (A, t) {
        return A !== t;
    },
    'R2': function (A, t) {
        return A - t;
    },
    'j2': function (A, t) {
        return A / t;
    },
    'O0': function (A, t) {
        return A !== t;
    },
    'e9l': "inputEnabled",
    'g7': function (A, t) {
        return A === t;
    },
    'V3l': "angle",
    'y8': function (A, t) {
        return A * t;
    },
    'G9': function (A, t) {
        return A === t;
    },
    'x7': function (A, t) {
        return A - t;
    },
    'u4': function (A, t) {
        return A < t;
    },
    'O6l': "game",
    'V9l': "drawCircle",
    'S8l': "pintando",
    'D7l': "halfBrushH",
    'j7': function (A, t) {
        return A === t;
    },
    'p0': function (A, t) {
        return A === t;
    },
    'v2': function (A, t) {
        return A === t;
    },
    'H4l': "pintarGoteo",
    'J8': function (A, t) {
        return A / t;
    },
    'n7l': "setTo",
    'z0': function (A, t) {
        return A !== t;
    },
    't5': function (A, t) {
        return A === t;
    },
    't8': function (A, t) {
        return A >= t;
    },
    'q0': function (A, t) {
        return A * t;
    },
    'r7': function (A, t) {
        return A / t;
    },
    'Z': function (A, t) {
        return A - t;
    },
    'l3': function (A, t) {
        return A / t;
    },
    'A1': function (A, t) {
        return A === t;
    },
    'Z5': function (A, t) {
        return A === t;
    },
    'D0': function (A, t) {
        return A / t;
    },
    'Y3': function (A, t) {
        return A >= t;
    },
    'S2l': function (A, t) {
        return A / t;
    },
    'C5': function (A, t) {
        return A - t;
    },
    'Q1': function (A, t) {
        return A * t;
    },
    'k2': function (A, t) {
        return A > t;
    },
    'K3l': "set",
    'M1l': "elemento_paleta",
    'V9': function (A, t) {
        return A !== t;
    },
    'W2': function (A, t) {
        return A * t;
    },
    'o7': function (A, t) {
        return A - t;
    },
    'r2l': function (A, t) {
        return A / t;
    },
    'r2': function (A, t) {
        return A > t;
    },
    'k2l': function (A, t) {
        return A / t;
    },
    'c3': function (A, t) {
        return A < t;
    },
    'G7': function (A, t) {
        return A - t;
    },
    'k9': function (A, t) {
        return A - t;
    },
    'i2l': function (A, t) {
        return A / t;
    },
    'v8l': "substr",
    'd5': function (A, t) {
        return A === t;
    },
    'o8l': "sprite",
    'Y8': function (A, t) {
        return A > t;
    },
    'A1l': "quitarPaleta",
    'R9': function (A, t) {
        return A < t;
    },
    'g2': function (A, t) {
        return A < t;
    },
    'K7': function (A, t) {
        return A - t;
    },
    'e1': function (A, t) {
        return A - t;
    },
    'K9': function (A, t) {
        return A === t;
    },
    'Q4': function (A, t) {
        return A === t;
    },
    'p4': function (A, t) {
        return A / t;
    },
    'C3': function (A, t) {
        return A / t;
    },
    'L0': function (A, t) {
        return A * t;
    },
    'G4l': "bitmapData",
    'U6l': "kill",
    's7': function (A, t) {
        return A - t;
    },
    'F1': function (A, t) {
        return A === t;
    },
    'v9': function (A, t) {
        return A === t;
    },
    'k6l': "toString",
    'h6': function (A, t) {
        return A - t;
    },
    'V8l': "addChild",
    't6': function (A, t) {
        return A / t;
    },
    'W9': function (A, t) {
        return A === t;
    },
    'F4': function (A, t) {
        return A !== t;
    },
    'M6': function (A, t) {
        return A - t;
    },
    's3l': "push",
    'a6': function (A, t) {
        return A / t;
    },
    'Z8': function (A, t) {
        return A > t;
    },
    'l8': function (A, t, F) {
        return A - t + F;
    },
    'R2l': function (A, t) {
        return A - t;
    },
    'm1l': "herramientaActual",
    'c5': function (A, t) {
        return A === t;
    },
    'I8': function (A, t) {
        return A - t;
    },
    'V6l': "update",
    'I3': function (A, t) {
        return A / t;
    },
    'W7': function (A, t) {
        return A - t;
    },
    'E3': function (A, t) {
        return A / t;
    },
    'R7l': "colorp",
    'O1': function (A, t) {
        return A !== t;
    },
    'a3': function (A, t) {
        return A > t;
    },
    'T': function (A, t) {
        return A < t;
    },
    'd8': function (A, t) {
        return A < t;
    },
    't2S': "alpha",
    'p1': function (A, t) {
        return A <= t;
    },
    'd3': function (A, t) {
        return A / t;
    },
    'n4': function (A, t) {
        return A / t;
    },
    'B9': function (A, t) {
        return A !== t;
    },
    'P1': function (A, t) {
        return A >= t;
    },
    'i8l': "tint",
    'n0': function (A, t) {
        return A === t;
    },
    'W1l': "draw",
    'z1': function (A, t) {
        return A !== t;
    },
    'g9': function (A, t) {
        return A === t;
    },
    's2': function (A, t) {
        return A === t;
    },
    'e0': function (A, t) {
        return A === t;
    },
    'R0l': "ponerColorUsado",
    'D9l': "make",
    'n1': function (A, t) {
        return A >= t;
    },
    'A0': function (A, t) {
        return A !== t;
    },
    'Y6': function (A, t) {
        return A - t;
    },
    'H0': function (A, t) {
        return A !== t;
    },
    'a1l': "ctx",
    'a2S': "tamanoDown",
    'q1': function (A, t) {
        return A - t;
    },
    'J3': function (A, t) {
        return A - t;
    },
    'F0': function (A, t) {
        return A < t;
    },
    'i2': function (A, t) {
        return A - t;
    },
    'R7': function (A, t) {
        return A === t;
    },
    'O5l': "button",
    'N0': function (A, t) {
        return A * t;
    },
    'S2': function (A, t) {
        return A < t;
    },
    'C': function (A, t) {
        return A > t;
    },
    'T2': function (A, t) {
        return A === t;
    },
    'i9': function (A, t) {
        return A !== t;
    }
};
var Trig = A9A.J3S.p3S("8284") ? 'default' : {
    distanceBetween2Points: function (A, t) {
        var C0S = A9A.J3S.p3S("8a25") ? -1280049678 : 150,
            O0S = A9A.J3S.p3S("11d7") ? 0xffd900 : 1437195255;
        // if (A9A.G2l.j2l(0, 6886457) === C0S || A9A.G2l.j2l(11, 8956356) === O0S) {
            var F = A9A.J3S.p3S("e4d") ? "pow" : "ultimoColor",
                N = A9A.J3S.p3S("bfd") ? "sqrt" : "Lapiz",
                i = A9A.J3S.p3S("fa46") ? "R" : "volume",
                a = A9A.J3S.p3S("d2") ? "k" : "oleo",
                q = A9A.J3S.p3S("8ebe") ? A9A[a](t[A9A.e2S], A[A9A.e2S]) : 519,
                U = A9A[i](t[A9A.R2S], A[A9A.R2S]);
        // } else {
        //     pluma.scale.setTo(1.2);
        //     saveAs(blob, 'picture' + '.png');
        //     pincel.ctx.beginPath();
        //     boton.kill();
        // }
        return Math[N](Math[F](q, A9A.f0l) + Math[F](U, A9A.f0l));
    },
    angleBetween2Points: function (A, t) {
        var A6S = -751291110,
            k6S = A9A.J3S.p3S("fedf") ? 632940702 : 320;
        // if (A9A.G2l.j2l(0, 2440380) === A6S || A9A.G2l.j2l(11, 3012509) === k6S) {
            var F = "atan2",
                N = A9A.J3S.p3S("14") ? "M" : "set",
                i = A9A.J3S.p3S("2d") ? "Z" : "frame",
                a = A9A.J3S.p3S("8f") ? A9A[i](t[A9A.e2S], A[A9A.e2S]) : false,
                q = A9A[N](t[A9A.R2S], A[A9A.R2S]);
            return Math[F](a, q);
        // } else {
        //     this.game.input.onUp.add(this.pararDePintar, this);
        //     pincel.ctx.rect(0, 0, A9A.i2(this.game.width, 290), this.game.height);
        //     return z5 - s5;
        // }
    }
};
BasicGame[A9A.X1l] = function (A) {
    var a9S = A9A.J3S.p3S("72be") ? 0.1 : 1727463002,
        N9S = -1473015729;
    // if (A9A.G2l.j2l(0, 6065503) === a9S || A9A.G2l.j2l(11, 2888029) === N9S) {
        esto = A9A.J3S.p3S("5d8e") ? "toString" : this;
        shakeWorld = A9A.D0l;
    // } else {
    //     pluma.scale.setTo(1.2);
    //     this.Rotulador.onInputDown.add(this.ponerHerramienta, this, this.Rotulador);
    //     bmd.draw(pincel, 10, 200, 842, A9A.y8(595, factorAncho));
    //     this.rellenarColor(A9A.a5(x, 1), y, color);
    //     return r4 > Y4;
    // }
};
BasicGame.Game.prototype = A9A.J3S.p3S("4c7") ? {
    create: function () {
        var S4S = -976571209,
            M4S = A9A.J3S.p3S("e734") ? 10 : 493268993;
        // if (A9A.G2l.j2l(0, 9602389) === S4S || A9A.G2l.j2l(11, 4843190) === M4S) {
            var A = "vectorAudios",
                t = "audio",
                F = "group",
                N = "cancelarLimpiar",
                i = "d",
                a = "botonNo",
                q = "limpiarDibujo",
                U = "j",
                S = "botonYes",
                Y = "G",
                w = "fondoClear",
                r = "ponerEstilos",
                g = "graphics",
                m = "pararDePintar",
                o = "onUp",
                f = "onDown",
                e = "iniciarPaleta",
                n = "crearUtiles",
                b = "estilo",
                D = "X",
                P = "c";
            numeroTrazo = -1;
            vectorAuxiliares = [];
            levantado = true;
        // } else {
        //     this.vectorEstilos[i].scale.setTo(0.6);
        //     bmd.draw(pincel, 10, 200, 842, A9A.y8(595, factorAncho));
        //     this.vectorEstilos[i].scale.setTo(0.6);
        //     vectorAuxiliares.push(pincelAuxiliar2);
        //     return E9 !== u9;
        // }
        puntoY = 0;
        puntoX = 0;
        prevX = 0;
        prevY = 0;
        posX = A9A[P](this[A9A.O6l].width, 2);
        posY = A9A[D](this[A9A.O6l].height, 2);
        mundo = this[A9A.O6l];
        colorActual = '0x00000';
        colorActualHerramienta = '0X2E2E2E';
        tamanoPunta = 1;
        tamanoPuntaAux = 1;
        colorSeleccionado = false;
        panelActivo = false;
        paletaActiva = false;
        colorSelec = '0x000000';
        ultimoColor = 0;
        this[A9A.m1l] = 'rotulador';
        this[b] = 'rotulador';
        this[A9A.S8l] = false;
        this[A9A.N3l] = 1;
        this[n]();
        this[e]();
        this[A9A.O6l][A9A.p2S][f][A9A.E1l](this[A9A.e3l], this);
        this[A9A.O6l][A9A.p2S][o][A9A.E1l](this[m], this);
        graphics = this[A9A.O6l][A9A.E1l][g](100, 100);
        graphics[A9A.J8l](10, 0xffd900, 1);
        graphics[A9A.J8l](1);
        circulo = graphics[A9A.V9l](0, 0, tamanoPunta);
        graphics[A9A.G3l]();
        window[g] = graphics;
        pluma2 = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', 4);
        pluma2[A9A.B3l][A9A.K3l](0, 1);
        pluma = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', 3);
        pluma[A9A.B3l][A9A.K3l](0, 1);
        pluma[A9A.i8l] = 0XFFFFFF;
        pluma[A9A.V8l](pluma2);
        pluma4 = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', 3);
        pluma4[A9A.B3l][A9A.K3l](0, 1);
        pluma3 = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', 4);
        pluma3[A9A.B3l][A9A.K3l](0, 1);
        pluma3[A9A.V8l](pluma4);
        pluma3[A9A.t2S] = 0;
        this[r]();
        this[w] = this[A9A.E1l][A9A.o8l](0, A9A[Y](this[A9A.O6l].height, 2), 'clear_picture');
        this[w][A9A.B3l][A9A.K3l](0.5);
        this[S] = this[A9A.E1l][A9A.O5l](50, A9A[U](this[A9A.O6l].height, 2) + 14, 'yes', this[q], this, 0, 0, 1);
        this[S][A9A.B3l][A9A.K3l](0.5);
        this[a] = this[A9A.E1l][A9A.O5l](-50, A9A[i](this[A9A.O6l].height, 2) + 14, 'no', this[N], this, 0, 0, 1);
        this[a][A9A.B3l][A9A.K3l](0.5);
        this[A9A.Q2S] = this[A9A.E1l][A9A.o8l](-1000, 30 + 262, 'fondoRueda');
        this[A9A.Q2S][A9A.B3l][A9A.K3l](0.5);
        grupoClear = this[A9A.E1l][F]();
        grupoClear[A9A.E1l](this[w]);
        grupoClear[A9A.E1l](this[S]);
        grupoClear[A9A.E1l](this[a]);
        grupoClear[A9A.e2S] = -500;
        if (!isExplorer) {
            musica = this[A9A.O6l][A9A.E1l][t]('musica');
            spray_audio = this[A9A.O6l][A9A.E1l][t]('spray');
            spray_audio.volume = 0.1;
            lapiz_audio = this[A9A.O6l][A9A.E1l][t]('lapiz');
            lapiz_audio.volume = 0.1;
            boton_audio = this[A9A.O6l][A9A.E1l][t]('boton');
            this[A] = [lapiz_audio, lapiz_audio, spray_audio, spray_audio, spray_audio, spray_audio, spray_audio, spray_audio, spray_audio];
        }
        elementoColor[A9A.i8l] = 0x000000;
    },
    update: function () {
        var A = "posicionarPinceles",
            t = "R2",
            F = "k2",
            N = "dibujarLinea",
            i = "cursor",
            a = "style",
            q = "l",
            U = "C",
            S = "T",
            Y = "v",
            w = "u",
            r = "p";
        if (A9A[r](numeroTrazo, 0)) {
            elementos_undo[A9A.t2S] = 0.6;
            elementos_undo[A9A.e9l] = false;
        } else {
            elementos_undo[A9A.t2S] = 1;
            elementos_undo[A9A.e9l] = true;
        }
        if (A9A[w](tamanoPunta, this[A9A.a7l][this[A9A.N3l]].width)) {
            tamanoPunta = this[A9A.a7l][this[A9A.N3l]].width;
            circulo[A9A.z7l]();
            graphics[A9A.J8l](10, 0xffd900, 1);
            graphics[A9A.J8l](1);
            circulo = graphics[A9A.V9l](0, 0, this[A9A.a7l][this[A9A.N3l]].width);
            graphics[A9A.G3l]();
        }
        if (!panelActivo && !paletaActiva && A9A[Y](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], 133) && A9A[S](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], this[A9A.O6l].width - 156) && A9A[U](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S], 5) && A9A[q](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S], this[A9A.O6l].height - 5)) {
            if (!levantado && !this[A9A.S8l]) {
                this[A9A.e3l]();
            }
            posX = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S];
            posY = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S];
            this[A9A.O6l].canvas[a][i] = 'none';
            circulo[A9A.e2S] = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S];
            circulo[A9A.R2S] = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S];
            this[N]();
            circulo[A9A.t2S] = 1;
        } else {
            this[A9A.O6l].canvas[a][i] = 'default';
            if (paletaActiva) {
                this[A9A.O6l].canvas[a][i] = 'crosshair';
            }
            pincel[A9A.a1l].closePath();
            this[A9A.S8l] = false;
            if (A9A[F](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], this[A9A.O6l].width / 2)) posX = A9A[t](this[A9A.O6l].width, 210);
            else posX = 150;
        }
        if (!panelActivo && !paletaActiva) this[A]();
    },
    crearUtiles: function () {
        var A = "S2",
            t = "i2";
        pincel = this[A9A.O6l][A9A.E1l][A9A.G4l](this[A9A.O6l].width, this[A9A.O6l].height);
        pincel[A9A.o4l]();
        pincel[A9A.a1l].strokeStyle = colorActual;
        pincel[A9A.a1l].rect(0, 0, A9A[t](this[A9A.O6l].width, 290), this[A9A.O6l].height);
        pincel[A9A.a1l].fillStyle = '#2E2E2E';
        pincel.globalCompositeOperation = "lighter";
        bmd2 = this[A9A.O6l][A9A.D9l][A9A.G4l](this[A9A.O6l].width, 600);
        for (var F = 0; A9A[A](F, 10); F++) {
            var N = this[A9A.O6l][A9A.E1l][A9A.G4l](this[A9A.O6l].width, this[A9A.O6l].height);
            vectorAuxiliares[A9A.s3l](N);
        }
    },
    dibujarLinea: function () {
        var A = "u0",
            t = "p0",
            F = "n0",
            N = "D0",
            i = "P0",
            a = "between",
            q = "rnd",
            U = "e0",
            S = "X0",
            Y = "w0",
            w = "U0",
            r = "q0",
            g = "PI",
            m = "N0",
            o = "F0",
            f = "A0",
            e = "B2",
            n = "s2",
            b = "T2",
            D = "v2",
            P = "cos",
            J = "W2",
            L = "sin",
            h = "V2",
            z = "x2",
            O = "K2",
            s = "angleBetween2Points",
            V = "distanceBetween2Points",
            I = "j2",
            W = "G2",
            Z2 = "r2",
            N2 = "g2",
            q2 = "o2";
        if (this[A9A.S8l] && A9A[q2](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], 133) && A9A[N2](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], this[A9A.O6l].width - 156) && A9A[Z2](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S], 0)) {
            pincel[A9A.a1l].beginPath();
            prevX = puntoX;
            prevY = puntoY;
            puntoX = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S];
            puntoY = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S];
            this[A9A.F8l] = A9A[W](this[A9A.a7l][this[A9A.N3l]].width, 2);
            this[A9A.D7l] = A9A[I](this[A9A.a7l][this[A9A.N3l]].width, 2);
            var K = {
                    x: prevX,
                    y: prevY
                },
                a2 = {
                    x: puntoX,
                    y: puntoY
                },
                U2 = parseInt(Trig[V](K, a2)),
                B = Trig[s](K, a2),
                M2 = this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S],
                t2, A2;
            for (var H = 0;
                (A9A[O](H, U2) || A9A[z](H, 0)); H++) {
                t2 = K[A9A.e2S] + (A9A[h](Math[L](B), H)) - this[A9A.F8l];
                A2 = K[A9A.R2S] + (A9A[J](Math[P](B), H)) - this[A9A.D7l];
                if (A9A[D](this[A9A.m1l], 'oleo') || A9A[b](this[A9A.m1l], 'pincel') || A9A[n](this[A9A.m1l], 'brocha')) {
                    if (A9A[e](prevX, puntoX) && A9A[f](prevY, puntoY)) {
                        if (A9A[o](B, 0)) this[A9A.a7l][this[A9A.N3l]][A9A.V3l] = Math[A9A.F4l](A9A[m](B, (180 / Math[g])));
                        else this[A9A.a7l][this[A9A.N3l]][A9A.V3l] = -1 * (A9A[r](B, (180 / Math[g])));
                    }
                }
                if (A9A[w](this[A9A.m1l], 'cera') || A9A[Y](this[A9A.m1l], 'lapiz') || A9A[S](this[A9A.m1l], 'lapizColor') || A9A[U](this[A9A.m1l], 'spray')) this[A9A.a7l][this[A9A.N3l]][A9A.V3l] += this[q][a](0, 180);
                pincel[A9A.W1l](this[A9A.a7l][this[A9A.N3l]], t2 + A9A[i](this[A9A.a7l][this[A9A.N3l]].width, 2), A2 + A9A[N](this[A9A.a7l][this[A9A.N3l]].height, 2));
                if (A9A[F](this[A9A.m1l], 'brocha')) {
                    if (A9A[t](this[q][a](0, 70), 5)) {
                        var E = this[q][a](2, 5),
                            c2 = this[q][a](6, 20);
                        this[A9A.H4l](t2, A2 + A9A[A](this[A9A.a7l][this[A9A.N3l]].height, 2), 0, c2, E, colorActualHerramienta);
                    }
                }
            }
            pincel[A9A.a1l].moveTo(prevX, prevY);
            pincel[A9A.a1l].closePath();
        }
    },
    pintar: function () {
        var w5S = -1035787503,
            g5S = -1780162563;
        // if (A9A.G2l.j2l(0, 3215373) !== w5S && A9A.G2l.j2l(11, 1823920) !== g5S) {
        //     saveAs(blob, 'picture' + '.png');
        //     this.vectorEstilos[i].scale.setTo(0.6);
        //     colorPequeno.onInputDown.add(this.ponerColorPeq, this, colorPequeno);
        //     bmd2.update();
        //     pincel.draw(vectorAuxiliares[numeroTrazo]);
        // } else {
            var A = "d8",
                t = "b8",
                F = "f8",
                N = "Y8",
                i = "m8",
                a = "c8",
                q = "M8",
                U = "Z8",
                S = "a8",
                Y = "t8",
                w = "H0",
                r = "O0",
                g = "z0",
                m = "L0",
                o = "Q0";
            // if (paletaActiva) {
                if (!isMobile) {
                    colorSeleccionado = true;
                    this[A9A.A1l]();
                } else {
                    var f = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S],
                        e = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S],
                        n = bmd2[A9A.a1l].getImageData(f, e, 1, 1),
                        b = n.data,
                        D = b[2] + A9A[o](256, b[1]) + A9A[m](65536, b[0]),
                        P = '0x' + ('0000' + D[A9A.k6l](16))[A9A.v8l](-6);
                    if (!colorSeleccionado && A9A[g](P, '0x9e0000')) {
                        if (A9A[r](P, '0x00000') && A9A[w](P, '0xffffff') || (A9A[Y](e, 489) && A9A[S](e, 525) && A9A[U](f, this[A9A.O6l].width / 2 - 156) && A9A[q](f, this[A9A.O6l].width / 2 + 230))) {
                            elementoColor[A9A.i8l] = P;
                            colorSelec = P;
                            this[A9A.x2S](colorSelec);
                        } else {
                            this[A9A.x2S](colorSelec);
                        }
                    }
                }
            // } else if (!panelActivo && A9A[a](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], 133) && A9A[i](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S], this[A9A.O6l].width - 156) && A9A[N](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S], 5) && A9A[F](this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S], this[A9A.O6l].height - 5)) {
                this[A9A.S8l] = true;
                numeroTrazo += 1;
                if (A9A[t](numeroTrazo, 9)) {
                    numeroTrazo = 9;
                    for (var J = 0; A9A[A](J, vectorAuxiliares.length - 1); J++) {
                        vectorAuxiliares[J][A9A.z7l]();
                        vectorAuxiliares[J][A9A.W1l](vectorAuxiliares[J + 1]);
                    }
                }
                vectorAuxiliares[numeroTrazo][A9A.z7l]();
                vectorAuxiliares[numeroTrazo][A9A.W1l](pincel);
                puntoX = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.e2S];
                puntoY = this[A9A.O6l][A9A.p2S][A9A.z8l][A9A.R2S];
                levantado = false;
            // }
        // }
    },
    pararDePintar: function () {
        var Y7S = -1754766352,
            e7S = -4850746;
        if (A9A.G2l.j2l(0, 2624924) !== Y7S && A9A.G2l.j2l(11, 7488789) !== e7S) {
            pluma2.anchor.set(0, 1);
            return true;
        } else {
            this[A9A.S8l] = false;
            levantado = true;
            if (paletaActiva) {
                if (isMobile) {
                    colorSeleccionado = true;
                    this[A9A.A1l]();
                }
            }
        }
    },
    previaLimpiar: function () {
        var A = "J8";
        if (!paletaActiva) {
            panelActivo = true;
            grupoClear[A9A.e2S] = A9A[A](this[A9A.O6l].width, 2);
        }
    },
    cancelarLimpiar: function () {
        grupoClear[A9A.e2S] = -500;
        panelActivo = false;
    },
    guardarDibujo: function () {
        var t = "toBlob";
        if (!paletaActiva) {
            var F = this[A9A.O6l][A9A.D9l][A9A.G4l](this[A9A.O6l].width, this[A9A.O6l].height + 200);
            F.rect(0, 0, this[A9A.O6l].width, this[A9A.O6l].height + 200, '#FFFFFF');
            F[A9A.W1l](pincel);
            var N = F.canvas[A9A.k1l]('image/png');
            F.canvas[t](function (A) {
                saveAs(A, 'picture' + '.png');
            });
        }
    },
    imprimirDibujo: function (A) {
        var j1S = 905586312,
            b1S = -265012917;
        if (A9A.G2l.j2l(0, 2721521) === j1S || A9A.G2l.j2l(11, 7578931) === b1S) {
            var t = "print",
                F = "focus",
                N = "close",
                i = "write",
                a = "document",
                q = "open",
                U = "I8",
                S = "y8",
                Y = "E8";
            if (!paletaActiva) {
                var w = this[A9A.O6l].width,
                    r = A9A[Y](842, w),
                    g = this[A9A.O6l][A9A.E1l][A9A.G4l](842, 800);
                pincel[A9A.V6l]();
                g[A9A.W1l](pincel, 10, 200, 842, A9A[S](595, r));
                g[A9A.W1l]('logo_peq', A9A[U](421, 172), 0);
                g[A9A.V6l]();
                var m = '<!DOCTYPE html>';
                m += '<html>';
                m += '<head></head>';
                m += '<body>';
                m += '<img src="' + g.canvas[A9A.k1l]() + '"/>';
                m += '</body>';
                m += '</html>';
                var o = window[q]();
                o[a][i](m);
                o[a][N]();
                o[F]();
                o[t]();
                o[N]();
            }
        } else {
            panelShare.kill();
            spinner.animations.add("spin", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 14, true);
            console.log(obj.url);
            this.fondoClear.anchor.set(0.5);
            bmd.draw(pincel, A9A.b3((Math.abs(this.game.width - 1200)), 2), 15, this.game.width, this.game.height);
        }
    },
    iniciarPaleta: function () {
        var A = "R9",
            t = "k9",
            F = "spray",
            N = "l6",
            i = "oleo",
            a = "C6",
            q = "lapizColor",
            U = "h6",
            S = "Lapiz",
            Y = "I6",
            w = "Rotulador",
            r = "y6",
            g = "Cera",
            m = "E6",
            o = "Pincel",
            f = "J6",
            e = "Brocha",
            n = "compartirFacebook",
            b = "d6",
            D = "previaLimpiar",
            P = "b6",
            J = "imprimirDibujo",
            L = "f6",
            h = "guardarDibujo",
            z = "Y6",
            O = "deshacer",
            s = "m6",
            V = "ponerHerramienta",
            I = "c6",
            W = "elementosGoma",
            Z2 = "disminuirTamano",
            N2 = "M6",
            q2 = "aumentarTamano",
            K = "world",
            a2 = "Z6",
            U2 = "mostrarPaleta",
            B = "a6",
            M2 = "elementos_derecha",
            t2 = "t6",
            A2 = "elementos_izquierda",
            H = "ponerColorPeq",
            E = "onInputDown",
            c2 = "l8",
            w2 = "C8",
            m2 = "h8";
        elementoColor = this[A9A.E1l][A9A.o8l](5, 45, 'elementos_color');
        vectorColorUsado = new Array();
        for (var Q = 0; A9A[m2](Q, 6); Q++) {
            var F2 = this[A9A.E1l][A9A.O5l](7 + A9A[w2](60, parseInt(Q % 2)), A9A[c2](this[A9A.O6l].height / 2, 76, 50 * parseInt(Q / 2)), 'cuadropequeno');
            F2[A9A.R7l] = '0xFFFFFF';
            F2[E][A9A.E1l](this[H], this, F2);
            vectorColorUsado[A9A.s3l](F2);
        }
        this[A2] = this[A9A.E1l][A9A.o8l](0, A9A[t2](this[A9A.O6l].height, 2), 'elementos_izquierda');
        this[A2][A9A.B3l][A9A.K3l](0, 0.5);
        this[M2] = this[A9A.E1l][A9A.o8l](this[A9A.O6l].width, A9A[B](this[A9A.O6l].height, 2), 'elementos_derecha');
        this[M2][A9A.B3l][A9A.K3l](1, 0.5);
        this[A9A.M1l] = this[A9A.E1l][A9A.O5l](12, 140, 'elementos_paleta', this[U2], this, 0, 0, 1);
        this[A9A.m5l] = this[A9A.E1l][A9A.O5l](A9A[a2](this[A9A.O6l][K].width, 112), 519, 'elementos_tamano', this[q2], this, 0, 0, 1);
        this[A9A.m5l][A9A.B3l][A9A.K3l](0.5);
        this[A9A.a2S] = this[A9A.E1l][A9A.O5l](A9A[N2](this[A9A.O6l][K].width, 42), 519, 'elementos_tamano', this[Z2], this, 2, 2, 3);
        this[A9A.a2S][A9A.B3l][A9A.K3l](0.5);
        this[W] = this[A9A.E1l][A9A.O5l](A9A[I](this[A9A.O6l][K].width, 150), 414, 'elementos_goma');
        this[W][A9A.O3l] = 0;
        this[W][A9A.y8l] = 15;
        this[W][E][A9A.E1l](this[V], this, this[W]);
        elementos_undo = this[A9A.E1l][A9A.O5l](A9A[s](this[A9A.O6l][K].width, 76), 414, 'elementos_undo', this[O], this, 0, 0, 1);
        botonGuardar = this[A9A.E1l][A9A.O5l](5, A9A[z](this[A9A.O6l].height, 190), 'elementos_opciones', this[h], this, 4, 4, 5);
        botonGuardar[A9A.u5l] = 4;
        // botonImprimir = this[A9A.E1l][A9A.O5l](5, A9A[L](this[A9A.O6l].height, 120), 'elementos_opciones', this[J], this, 6, 6, 7);
        botonClear = this[A9A.E1l][A9A.O5l](68, A9A[P](this[A9A.O6l].height, 190), 'elementos_opciones', this[D], this, 2, 2, 3);
        botonClear[A9A.u5l] = 2;
        // botonFacebook = this[A9A.E1l][A9A.O5l](68, A9A[b](this[A9A.O6l].height, 190), 'elementos_opciones', this[n], this, 8, 8, 9);
        // botonFacebook[A9A.u5l] = 8;
        this[e] = this[A9A.E1l][A9A.O5l](A9A[f](this[A9A.O6l][K].width, 150), 35, 'elementos_pinceles');
        this[e][A9A.O3l] = 0;
        this[e][A9A.y8l] = 9;
        this[e][E][A9A.E1l](this[V], this, this[e]);
        this[o] = this[A9A.E1l][A9A.O5l](A9A[m](this[A9A.O6l][K].width, 76), 35, 'elementos_pinceles');
        this[o][A9A.O3l] = 2;
        this[o][A9A.y8l] = 7;
        this[o][E][A9A.E1l](this[V], this, this[o]);
        this[g] = this[A9A.E1l][A9A.O5l](A9A[r](this[A9A.O6l][K].width, 150), 130, 'elementos_pinceles');
        this[g][A9A.O3l] = 4;
        this[g][A9A.y8l] = 5;
        this[g][E][A9A.E1l](this[V], this, this[g]);
        this[w] = this[A9A.E1l][A9A.O5l](A9A[Y](this[A9A.O6l][K].width, 76), 130, 'elementos_pinceles');
        this[w][A9A.O3l] = 6;
        this[w][A9A.y8l] = 3;
        this[w][E][A9A.E1l](this[V], this, this[w]);
        this[S] = this[A9A.E1l][A9A.O5l](A9A[U](this[A9A.O6l][K].width, 150), 225, 'elementos_pinceles');
        this[S][A9A.O3l] = 8;
        this[S][A9A.y8l] = 2;
        this[S][E][A9A.E1l](this[V], this, this[S]);
        this[q] = this[A9A.E1l][A9A.O5l](A9A[a](this[A9A.O6l][K].width, 76), 225, 'elementos_pinceles');
        this[q][A9A.O3l] = 10;
        this[q][A9A.y8l] = 0;
        this[q][E][A9A.E1l](this[V], this, this[q]);
        this[i] = this[A9A.E1l][A9A.O5l](A9A[N](this[A9A.O6l][K].width, 150), 320, 'elementos_pinceles');
        this[i][A9A.O3l] = 12;
        this[i][A9A.y8l] = 11;
        this[i][E][A9A.E1l](this[V], this, this[i]);
        this[F] = this[A9A.E1l][A9A.O5l](A9A[t](this[A9A.O6l][K].width, 76), 320, 'elementos_pinceles');
        this[F][A9A.O3l] = 14;
        this[F][A9A.y8l] = 13;
        this[F][E][A9A.E1l](this[V], this, this[F]);
        vectorBotonesHerramientas = [this[e], this[o], this[g], this[w], this[S], this[q], this[i], this[F], this[W]];
        for (var Q = 0; A9A[A](Q, vectorBotonesHerramientas.length); Q++) {
            vectorBotonesHerramientas[Q][A9A.u5l] = vectorBotonesHerramientas[Q][A9A.O3l];
        }
        this[w][A9A.u5l] = 7;
    },
    ponerColor: function (A) {
        var n3S = 1689404949,
            x3S = -419106759;
        // if (A9A.G2l.j2l(0, 1021908) === n3S || A9A.G2l.j2l(11, 1188496) === x3S) {
            var t = "S9",
                F = "i9";
            elementoColor[A9A.i8l] = A;
            colorActual = A;
            colorActualHerramienta = A;
            if (A9A[F](this[A9A.m1l], 'lapiz') && A9A[t](this[A9A.m1l], 'goma')) {
                this[A9A.a7l][this[A9A.N3l]][A9A.i8l] = A;
                pluma[A9A.i8l] = 0xFFFFFF;
                pluma4[A9A.i8l] = 0xFFFFFF;
                pluma[A9A.i8l] = colorActualHerramienta;
                pluma4[A9A.i8l] = colorActualHerramienta;
            }
        // } else {
        //     pluma2.destroy();
        //     vectorAuxiliares.push(pincelAuxiliar2);
        //     this.game.input.onUp.add(this.pararDePintar, this);
        //     bmd2.clear();
        //     printWin.document.write(windowContent);
        // }
    },
    ponerHerramienta: function (A) {
        var t = "A4",
            F = "B9",
            N = "s9",
            i = "T9",
            a = "v9",
            q = "W9",
            U = "V9",
            S = "x9",
            Y = "K9",
            w = "j9",
            r = "G9",
            g = "r9",
            m = "g9",
            o = "o9";
        if (!paletaActiva) {
            if (!isExplorer) boton_audio.play();
            this[A9A.m5l][A9A.t2S] = 1;
            this[A9A.a2S][A9A.t2S] = 1;
            this[A9A.m5l][A9A.e9l] = true;
            this[A9A.a2S][A9A.e9l] = true;
            this[A9A.M1l][A9A.t2S] = 1;
            this[A9A.M1l][A9A.e9l] = true;
            for (var f = 0; A9A[o](f, vectorBotonesHerramientas.length); f++) {
                vectorBotonesHerramientas[f][A9A.u5l] = vectorBotonesHerramientas[f][A9A.O3l];
            }
            A[A9A.u5l] = A[A9A.u5l] + 1;
            if (A9A[m](A[A9A.y8l], 5) || A9A[g](A[A9A.y8l], 3) || A9A[r](A[A9A.y8l], 11) || A9A[w](A[A9A.y8l], 2) || A9A[Y](A[A9A.y8l], 15)) {
                pluma[A9A.i8l] = 0xFFFFFF;
                pluma4[A9A.i8l] = 0xFFFFFF;
                pluma2[A9A.u5l] = A[A9A.y8l] + 1;
                pluma2[A9A.M8l]();
                if (A9A[S](A[A9A.y8l], 2) && A9A[U](A[A9A.y8l], 15)) pluma2 = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', A[A9A.y8l] + 1);
                else pluma2 = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', A[A9A.y8l]);
                pluma2[A9A.B3l][A9A.K3l](0, 1);
                pluma[A9A.M8l]();
                pluma = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', A[A9A.y8l]);
                pluma[A9A.B3l][A9A.K3l](0, 1);
                pluma[A9A.V8l](pluma2);
                pluma[A9A.t2S] = 1;
                pluma2[A9A.t2S] = 1;
                pluma3[A9A.t2S] = 0;
                pluma4[A9A.t2S] = 0;
            } else if (A9A[q](A[A9A.y8l], 0) || A9A[a](A[A9A.y8l], 7) || A9A[i](A[A9A.y8l], 9) || A9A[N](A[A9A.y8l], 13)) {
                pluma[A9A.i8l] = 0xFFFFFF;
                pluma4[A9A.i8l] = 0xFFFFFF;
                pluma3[A9A.t2S] = 1;
                pluma4[A9A.t2S] = 1;
                pluma[A9A.t2S] = 0;
                pluma2[A9A.t2S] = 0;
                pluma4[A9A.M8l]();
                pluma4 = this[A9A.E1l][A9A.o8l](0, 0, 'elementos', A[A9A.y8l] + 1);
                pluma4[A9A.B3l][A9A.K3l](0, 1);
                pluma3[A9A.V8l](pluma4);
                pluma3[A9A.u5l] = A[A9A.y8l];
            }
            switch (A[A9A.y8l]) {
                case 0:
                    this[A9A.m1l] = 'lapizColor';
                    tamanoPunta = 1;
                    this[A9A.N3l] = 0;
                    this[A9A.m5l][A9A.t2S] = 0.6;
                    this[A9A.a2S][A9A.t2S] = 0.6;
                    this[A9A.m5l][A9A.e9l] = false;
                    this[A9A.a2S][A9A.e9l] = false;
                    break;
                case 2:
                    tamanoPunta = 1;
                    this[A9A.N3l] = 1;
                    this[A9A.m1l] = 'lapiz';
                    this[A9A.a7l][this[A9A.N3l]][A9A.i8l] = 0x2E2E2E;
                    this[A9A.m5l][A9A.t2S] = 0.6;
                    this[A9A.a2S][A9A.t2S] = 0.6;
                    this[A9A.M1l][A9A.t2S] = 0.6;
                    this[A9A.M1l][A9A.e9l] = false;
                    this[A9A.m5l][A9A.e9l] = false;
                    this[A9A.a2S][A9A.e9l] = false;
                    break;
                case 3:
                    this[A9A.m1l] = 'rotulador';
                    this[A9A.N3l] = 2;
                    break;
                case 5:
                    this[A9A.m1l] = 'cera';
                    this[A9A.N3l] = 3;
                    break;
                case 7:
                    this[A9A.m1l] = 'pincel';
                    this[A9A.N3l] = 4;
                    break;
                case 9:
                    this[A9A.m1l] = 'brocha';
                    this[A9A.N3l] = 5;
                    break;
                case 11:
                    this[A9A.m1l] = 'oleo';
                    this[A9A.N3l] = 6;
                    break;
                case 13:
                    this[A9A.m1l] = 'spray';
                    this[A9A.N3l] = 7;
                    break;
                case 15:
                    this[A9A.N3l] = 8;
                    this[A9A.m1l] = 'goma';
                    this[A9A.a7l][this[A9A.N3l]][A9A.i8l] = 0xFFFFFF;
                    this[A9A.M1l][A9A.t2S] = 0.6;
                    this[A9A.M1l][A9A.e9l] = false;
                    break;
            }
            if (A9A[F](A[A9A.y8l], 2) && A9A[t](A[A9A.y8l], 15)) {
                pluma[A9A.i8l] = colorActualHerramienta;
                pluma4[A9A.i8l] = colorActualHerramienta;
                this[A9A.a7l][this[A9A.N3l]][A9A.i8l] = colorActualHerramienta;
            }
            this[A9A.a7l][this[A9A.N3l]].scale[A9A.n7l](0.5);
        }
    },
    aumentarTamano: function () {
        var A = "q4",
            t = "N4",
            F = "F4";
        if (A9A[F](this[A9A.m1l], 'lapiz') && A9A[t](this[A9A.m1l], 'lapizColor') && !paletaActiva) {
            if (A9A[A](this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S], 1)) {
                this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S] += 0.1;
                this[A9A.a7l][this[A9A.N3l]].scale[A9A.R2S] += 0.1;
            }
        }
    },
    disminuirTamano: function () {
        var A = "X4",
            t = "w4",
            F = "U4";
        if (A9A[F](this[A9A.m1l], 'lapiz') && A9A[t](this[A9A.m1l], 'lapizColor') && !paletaActiva) {
            if (A9A[A](this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S], 0.5)) {
                this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S] -= 0.1;
                this[A9A.a7l][this[A9A.N3l]].scale[A9A.R2S] -= 0.1;
            }
        }
    },
    ponerEstilos: function () {
        var A = "e4",
            t = "pinceles_rotulador",
            F = "pinceles_pincel",
            N = "pinceles_oleo",
            i = "pinceles_lapiz_color",
            a = "pinceles_cera",
            q = "pinceles_lapiz",
            U = "pinceles_brocha",
            S = "pinceles_spray";
        this[S] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_spray');
        this[S][A9A.t2S] = 0.1;
        this[U] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_brocha');
        this[q] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_lapiz');
        this[q][A9A.i8l] = 0x2E2E2E;
        this[a] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_cera');
        this[i] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_lapiz');
        this[N] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_oleo');
        this[F] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_pincel');
        this[t] = this[A9A.E1l][A9A.o8l](-100, -100, 'pinceles_rotulador');
        this[t][A9A.t2S] = 0.5;
        this[A9A.F8l] = 0;
        this[A9A.D7l] = 0;
        this[A9A.a7l] = [this[i], this[q], this[t], this[a], this[F], this[U], this[N], this[S], this[U]];
        for (var Y = 0; A9A[A](Y, this[A9A.a7l].length); Y++) {
            this[A9A.a7l][Y][A9A.B3l][A9A.K3l](0.5);
            this[A9A.a7l][Y].scale[A9A.n7l](0.6);
        }
        this[A9A.x2S](colorActual);
        this[A9A.R0l]();
    },
    pintarGoteo: function (A, t, F, N, i, a) {
        var q = "events",
            U = "time",
            S = "u4",
            Y = "p4",
            w = "n4",
            r = "D4",
            g = "P4",
            m = this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S];
        this[A9A.a7l][this[A9A.N3l]].scale[A9A.e2S] = A9A[g](m, i);
        this[A9A.a7l][this[A9A.N3l]].scale[A9A.R2S] = A9A[r](m, i);
        this[A9A.a7l][this[A9A.N3l]][A9A.i8l] = a;
        x = A;
        y = t;
        this[A9A.a7l][this[A9A.N3l]][A9A.V3l] = 90;
        pincel[A9A.W1l](this[A9A.a7l][this[A9A.N3l]], x + A9A[w](this[A9A.a7l][this[A9A.N3l]].width, 2), y + A9A[Y](this[A9A.a7l][this[A9A.N3l]].height, 2));
        this[A9A.a7l][this[A9A.N3l]].scale[A9A.n7l](m);
        if (A9A[S](F, N)) this[U][q][A9A.E1l](4, this[A9A.H4l], this, A, t + 2, F + 1, N, i, a);
    },
    limpiarDibujo: function () {
        grupoClear[A9A.e2S] = -500;
        pincel[A9A.z7l]();
        panelActivo = false;
    },
    rellenarColor: function (A, t, F) {
        var N = "dirty",
            i = "b5",
            a = "f5",
            q = "Y5",
            U = "m5",
            S = "c5",
            Y = "M5",
            w = "Z5",
            r = "a5",
            g = "t5",
            m = "H4",
            o = "O4",
            f = "rellenarColor",
            e = "b",
            n = "z4",
            b = "g",
            D = "L4",
            P = "r",
            J = "Q4";
        if (A9A[J](pincel[A9A.S1l](A + 1, t)[P], F[P]) && A9A[D](pincel[A9A.S1l](A + 1, t)[b], F[b]) && A9A[n](pincel[A9A.S1l](A + 1, t)[e], F[e])) {
            this[f](A + 1, t, F);
        }
        if (A9A[o](pincel[A9A.S1l](A - 1, t)[P], F[P]) && A9A[m](pincel[A9A.S1l](A - 1, t)[b], F[b]) && A9A[g](pincel[A9A.S1l](A - 1, t)[e], F[e])) {
            this[f](A9A[r](A, 1), t, F);
        }
        if (A9A[w](pincel[A9A.S1l](A, t + 1)[P], F[P]) && A9A[Y](pincel[A9A.S1l](A, t + 1)[b], F[b]) && A9A[S](pincel[A9A.S1l](A, t + 1)[e], F[e])) {
            this[f](A, t + 1, F);
        }
        if (A9A[U](pincel[A9A.S1l](A, t - 1)[P], F[P]) && A9A[q](pincel[A9A.S1l](A, t - 1)[b], F[b]) && A9A[a](pincel[A9A.S1l](A, t - 1)[e], F[e])) {
            this[f](A, A9A[i](t, 1), F);
        }
        pincel[N] = true;
        pincel.rect(A, t, 1, 1, colorActual);
        pincel[A9A.V6l]();
    },
    updateTooltip: function (A, t, F) {
        var N = pincel[A9A.S1l](t, F);
    },
    posicionarPinceles: function () {
        var A = "q1",
            t = "N1",
            F = "F1",
            N = "A1",
            i = "B7",
            a = "s7",
            q = "T7",
            U = "v7",
            S = "W7",
            Y = "V7",
            w = "x7",
            r = "K7",
            g = "j7",
            m = "G7",
            o = "r7",
            f = "g7",
            e = "o7",
            n = "S7",
            b = "i7",
            D = "R7",
            P = "k7",
            J = "l5",
            L = "C5",
            h = "h5",
            z = "I5",
            O = "y5",
            s = "E5",
            V = "J5",
            I = "d5";
        circulo[A9A.e2S] = posX;
        circulo[A9A.R2S] = posY;
        if (A9A[I](this[A9A.m1l], 'cera') || A9A[V](this[A9A.m1l], 'rotulador') || A9A[s](this[A9A.m1l], 'oleo') || A9A[O](this[A9A.m1l], 'lapiz') || A9A[z](this[A9A.m1l], 'goma')) {
            pluma[A9A.t2S] = 1;
            pluma2[A9A.t2S] = 1;
            pluma3[A9A.t2S] = 0;
            pluma4[A9A.t2S] = 0;
        } else {
            pluma3[A9A.t2S] = 1;
            pluma4[A9A.t2S] = 1;
            pluma[A9A.t2S] = 0;
            pluma2[A9A.t2S] = 0;
        }
        if (!this[A9A.S8l]) {
            pluma[A9A.R2S] = A9A[h](posY, tamanoPunta / 2);
            pluma3[A9A.R2S] = A9A[L](posY, tamanoPunta / 2);
            pluma.scale[A9A.n7l](1.2);
            pluma3.scale[A9A.n7l](1.2);
        } else {
            pluma[A9A.R2S] = posY + 6;
            pluma3[A9A.R2S] = posY + 6;
            pluma.scale[A9A.n7l](1.);
            pluma3.scale[A9A.n7l](1);
        }
        pluma[A9A.e2S] = A9A[J](posX, 5);
        pluma3[A9A.e2S] = A9A[P](posX, 5);
        if (A9A[D](this[A9A.m1l], 'spray')) {
            if (!this[A9A.S8l]) {
                pluma3[A9A.e2S] = A9A[b](posX, 18);
                pluma3[A9A.R2S] = posY + 90 + A9A[n](tamanoPunta, 2);
            } else {
                pluma3[A9A.e2S] = A9A[e](posX, 22);
                pluma3[A9A.R2S] = posY + 90;
            }
        }
        if (A9A[f](this[A9A.m1l], 'brocha')) {
            if (!this[A9A.S8l]) {
                pluma3[A9A.R2S] = posY + 5 - A9A[o](tamanoPunta, 2);
                pluma3.scale[A9A.n7l](1.2);
            } else {
                pluma3[A9A.R2S] = posY + 13;
                pluma3.scale[A9A.n7l](1);
            }
            pluma3[A9A.e2S] = A9A[m](posX, 20);
        }
        if (A9A[g](this[A9A.m1l], 'pincel')) {
            if (!this[A9A.S8l]) {
                pluma3[A9A.R2S] = A9A[r](posY, tamanoPunta / 2);
                pluma3.scale[A9A.n7l](1.2);
            } else {
                pluma3[A9A.R2S] = posY + 8;
                pluma3.scale[A9A.n7l](1);
            }
            pluma3[A9A.e2S] = A9A[w](posX, 8);
        }
        if (A9A[Y](this[A9A.m1l], 'oleo')) {
            if (!this[A9A.S8l]) {
                pluma[A9A.R2S] = A9A[S](posY, tamanoPunta / 2);
                pluma.scale[A9A.n7l](1.2);
            } else {
                pluma[A9A.R2S] = posY + 6;
                pluma.scale[A9A.n7l](1);
            }
            pluma[A9A.e2S] = A9A[U](posX, 11);
        }
        if (A9A[q](this[A9A.m1l], 'goma')) {
            if (!this[A9A.S8l]) {
                pluma[A9A.R2S] = A9A[a](posY, tamanoPunta / 2);
                pluma.scale[A9A.n7l](1.2);
            } else {
                pluma[A9A.R2S] = posY + 6;
                pluma.scale[A9A.n7l](1);
            }
            pluma[A9A.e2S] = A9A[i](posX, 24);
        }
        if (A9A[N](this[A9A.m1l], 'lapiz') || A9A[F](this[A9A.m1l], 'lapizColor')) {
            pluma[A9A.e2S] = A9A[t](posX, 7);
            pluma3[A9A.e2S] = A9A[A](posX, 7);
        }
    },
    mostrarPaleta: function () {
        var A = "animarRueda",
            t = "X1",
            F = "updateColorPaleta",
            N = "addMoveCallback",
            i = "w1",
            a = "U1";
        if (A9A[a](this[A9A.m1l], 'lapiz')) {
            if (!isExplorer) boton_audio.play();
            paletaActiva = true;
            this[A9A.Q2S][A9A.e2S] = A9A[i](this[A9A.O6l].width, 2);
            this[A9A.Q2S].scale[A9A.n7l](0);
            this[A9A.O6l][A9A.p2S][N](this[F], this);
            var q = this[A9A.E1l][A9A.o8l](A9A[t](this[A9A.O6l].width, 2), 30 + 262, 'elementos_ruedaColor');
            q[A9A.B3l][A9A.K3l](0.5);
            q.scale[A9A.n7l](0);
            this[A](q);
        }
    },
    animarRueda: function (t) {
        var F = "onComplete",
            N = "InOut",
            i = "Quadratic",
            a = "Easing",
            q = "to",
            U = "tween";
        tweenMascara = this[A9A.O6l][A9A.E1l][U](t.scale)[q]({
            x: 1,
            y: 1
        }, 200, Phaser[a][i][N], true);
        tweenFondo = this[A9A.O6l][A9A.E1l][U](this[A9A.Q2S].scale)[q]({
            x: 1,
            y: 1
        }, 200, Phaser[a][i][N], true);
        tweenMascara[F][A9A.E1l](function () {
            var A = "e1";
            t[A9A.U6l]();
            t[A9A.M8l]();
            bmd2[A9A.W1l]('elementos_ruedaColor', A9A[A](this[A9A.O6l].width / 2, 268), 30);
            bmd2[A9A.V6l]();
            bmd2[A9A.o4l]();
        }, this);
    },
    quitarPaleta: function () {
        var A = "deleteMoveCallback";
        colorSeleccionado = false;
        paletaActiva = false;
        this[A9A.Q2S][A9A.e2S] = -1000;
        this[A9A.O6l][A9A.p2S][A]();
        bmd2[A9A.z7l]();
        bmd2[A9A.V6l]();
        this[A9A.R0l]();
    },
    updateColorPaleta: function (A, t, F) {
        var N = "Z3",
            i = "a3",
            a = "t3",
            q = "H1",
            U = "O1",
            S = "z1",
            Y = "L1",
            w = "Q1",
            r = "u1",
            g = "p1",
            m = "n1",
            o = "D1",
            f = "P1";
        if (A9A[f](t, 0) && A9A[o](t, bmd2.width) && A9A[m](F, 0) && A9A[g](F, bmd2.height)) {
            if (paletaActiva) {
                var e = bmd2[A9A.a1l].getImageData(t, F, 1, 1),
                    n = e.data,
                    b = n[2] + A9A[r](256, n[1]) + A9A[w](65536, n[0]),
                    D = '0x' + ('0000' + b[A9A.k6l](16))[A9A.v8l](-6);
                if (!colorSeleccionado && A9A[Y](D, '0x9e0000')) {
                    if (A9A[S](D, '0x00000') && A9A[U](D, '0xffffff') || (A9A[q](F, 489) && A9A[a](F, 525) && A9A[i](t, this[A9A.O6l].width / 2 - 192) && A9A[N](t, this[A9A.O6l].width / 2 + 230))) {
                        elementoColor[A9A.i8l] = D;
                        colorSelec = D;
                        this[A9A.x2S](colorSelec);
                    } else {
                        colorSelec = colorActual;
                        elementoColor[A9A.i8l] = colorActual;
                    }
                }
            }
        }
    },
    ponerColorUsado: function () {
        var A = "M3",
            t = "comprobarSiExiste";
        if (!this[t]()) {
            vectorColorUsado[ultimoColor][A9A.i8l] = colorActual;
            vectorColorUsado[ultimoColor][A9A.R7l] = colorActual;
            if (A9A[A](ultimoColor, 5)) ultimoColor += 1;
            else ultimoColor = 0;
        }
    },
    ponerColorPeq: function (A) {
        this[A9A.x2S](A[A9A.R7l]);
    },
    comprobarSiExiste: function () {
        var A = "m3",
            t = "c3";
        for (var F = 0; A9A[t](F, vectorColorUsado.length); F++) {
            if (A9A[A](vectorColorUsado[F][A9A.R7l], colorActualHerramienta)) {
                return true;
            }
        }
        return false;
    },
    deshacer: function () {
        var A = "Y3";
        if (A9A[A](numeroTrazo, 0)) {
            pincel[A9A.z7l]();
            pincel[A9A.W1l](vectorAuxiliares[numeroTrazo]);
            numeroTrazo -= 1;
        }
    },
    dataURItoBlob: function (A) {
        var t = "f3",
            F = "split",
            N = atob(A[F](',')[1]),
            i = new ArrayBuffer(N.length),
            a = new Uint8Array(i);
        for (var q = 0; A9A[t](q, N.length); q++) {
            a[q] = N[A9A.g8l](q);
        }
        return new Blob([i], {
            type: 'image/png'
        });
    },
    compartirFacebook: function () {
        var P = "ajax",
            J = "replace",
            L = "animations",
            h = "y3",
            z = "E3",
            O = "J3",
            s = "d3",
            V = "b3";
        panelActivo = true;
        var I = this[A9A.O6l][A9A.D9l][A9A.G4l](1200, 630);
        I.rect(0, 0, 1200, 630, '#FFFFFF');
        I[A9A.W1l](pincel, A9A[V]((Math[A9A.F4l](this[A9A.O6l].width - 1200)), 2), 15, this[A9A.O6l].width, this[A9A.O6l].height);
        var W = I.canvas[A9A.k1l]("image/png");
        nuevoNegro = this[A9A.E1l][A9A.o8l](0, 0, "negro");
        nuevoNegro.width = this[A9A.O6l].width;
        nuevoNegro.height = this[A9A.O6l].height;
        nuevoNegro[A9A.t2S] = 0.2;
        nuevoNegro[A9A.e9l] = true;
        spinner = this[A9A.E1l][A9A.o8l](A9A[s](this[A9A.O6l].width, 2), A9A[O](this[A9A.O6l].height / 2, (90)), "facebook_spinner");
        spinner[A9A.e2S] -= A9A[z](spinner.width, 2);
        spinner[A9A.R2S] -= (A9A[h](20, multiplicador));
        spinner[L][A9A.E1l]("spin", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 14, true);
        spinner[L].play("spin");
        url = null;
        escapedBase64Data = W[J]("data:image/png;base64,", "");
        $[P]({
            url: 'http://kidmons.com/upload/uploadImage',
            type: "POST",
            data: {
                img: escapedBase64Data
            },
            success: function (A) {
                var t = "r2l",
                    F = "cancelarPublish",
                    N = "g2l",
                    i = "o2l",
                    a = "S2l",
                    q = "i2l",
                    U = "publishFacebook2",
                    S = "R2l",
                    Y = "k2l",
                    w = "l3",
                    r = "C3",
                    g = "h3",
                    m = "I3",
                    o = "url",
                    f = "log",
                    e = "parse";
                obj = JSON[e](A);
                console[f](obj[o]);
                var n = "KIDMONS",
                    b = "Paint Online";
                url = obj[o];
                var D = obj[o];
                panelShare = esto[A9A.E1l][A9A.o8l](A9A[m](esto[A9A.O6l].width, 2), A9A[g](esto[A9A.O6l].height, 2), "panelShare");
                panelShare[A9A.R2S] -= A9A[r](panelShare.height, 2);
                panelShare[A9A.e2S] -= A9A[w](panelShare.width, 2);
                boton = esto[A9A.E1l][A9A.O5l](A9A[Y](esto[A9A.O6l].width, 2), A9A[S](esto[A9A.O6l].height / 2, 8), "fb", esto[U], esto, 1, 0, 1);
                boton[A9A.e2S] -= A9A[q](boton.width, 2);
                boton[A9A.R2S] -= A9A[a](boton.height, 2) + 33;
                cancelShare = esto[A9A.E1l][A9A.O5l](A9A[i](esto[A9A.O6l].width, 2), A9A[N](esto[A9A.O6l].height, 2) + 16, "cancels", esto[F], esto, 1, 0, 1);
                cancelShare[A9A.e2S] -= A9A[t](cancelShare.width, 2);
                spinner[A9A.U6l]();
            },
        });
    },
    publishFacebook2: function () {
        var t = "ui",
            F = "append";
        boton[A9A.e9l] = false;
        panelActivo = false;
        boton[A9A.U6l]();
        panelShare[A9A.U6l]();
        cancelShare[A9A.U6l]();
        nuevoNegro[A9A.U6l]();
        $('body')[F]('<meta property="og:image" content="' + url + '" />');
        FB[t]({
            method: 'feed',
            caption: 'Play Paint Online at kidmons.com',
            description: 'This is my master piece.',
            link: 'http://kidmons.com/game/paint-online',
            picture: url
        }, function (A) {});
    },
    cancelarPublish: function () {
        panelActivo = false;
        boton[A9A.U6l]();
        panelShare[A9A.U6l]();
        cancelShare[A9A.U6l]();
        nuevoNegro[A9A.U6l]();
    },
} : 210;