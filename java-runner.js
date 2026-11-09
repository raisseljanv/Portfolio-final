
(function () {
    'use strict';

    var triggers = document.querySelectorAll('[data-run="calculator"]');
    if (!triggers.length) return;

    function javaDouble(d) {
        if (d !== d) return 'NaN';
        if (d === Infinity) return 'Infinity';
        if (d === -Infinity) return '-Infinity';
        if (d === 0) return (1 / d < 0) ? '-0.0' : '0.0';
        var abs = Math.abs(d);
        if (abs >= 1e-3 && abs < 1e7) {
            var s = String(d);
            return s.indexOf('.') < 0 ? s + '.0' : s;
        }
        var parts = d.toExponential().split('e');
        var mant = parts[0].indexOf('.') < 0 ? parts[0] + '.0' : parts[0];
        return mant + 'E' + parseInt(parts[1], 10);
    }
    var overlay = document.createElement('div');
    overlay.className = 'jt-overlay';
    overlay.hidden = true;
    overlay.innerHTML =
        '<div class="jt-window" role="dialog" aria-modal="true" aria-label="Calculator.java console">' +
            '<div class="jt-titlebar">' +
                '<span class="jt-dots"><i></i><i></i><i></i></span>' +
                '<span class="jt-title">Calculator.java &mdash; Console</span>' +
                '<button type="button" class="jt-close" aria-label="Close">&times;</button>' +
            '</div>' +
            '<div class="jt-body" tabindex="-1"></div>' +
            '<div class="jt-footer">' +
                '<button type="button" class="jt-again" hidden>&#8635; Run Again</button>' +
                '<span class="jt-note">Browser version of the Java program</span>' +
            '</div>' +
        '</div>';
    document.body.appendChild(overlay);

    var body     = overlay.querySelector('.jt-body');
    var btnClose = overlay.querySelector('.jt-close');
    var btnAgain = overlay.querySelector('.jt-again');
    var lastTrigger = null;
    var session = 0;      

    function println(text, cls) {
        var line = document.createElement('div');
        line.className = 'jt-line' + (cls ? ' ' + cls : '');
        line.textContent = text === '' ? '\u00a0' : text;
        body.appendChild(line);
        body.scrollTop = body.scrollHeight;
    }

    function ask(prompt, onLine) {
        var mySession = session;
        var line = document.createElement('div');
        line.className = 'jt-line jt-inputline';
        var p = document.createElement('span');
        p.className = 'jt-prompt';
        p.textContent = prompt;
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'jt-input';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.setAttribute('aria-label', prompt.trim() || 'input');
        line.appendChild(p);
        line.appendChild(input);
        body.appendChild(line);
        body.scrollTop = body.scrollHeight;
        input.focus();

        input.addEventListener('keydown', function (e) {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            if (mySession !== session) return;
            var value = input.value;
            var echo = document.createElement('span');
            echo.className = 'jt-echo';
            echo.textContent = value;
            line.replaceChild(echo, input);

            var token = value.trim().split(/\s+/)[0];
            if (!token) { ask('', onLine); return; } 
            onLine(token);
        });
    }

    function finish(code) {
        println('');
        println('Process finished with exit code ' + code, 'jt-dim');
        btnAgain.hidden = false;
        btnAgain.focus();
    }

    function askNumber(prompt, cb) {
        ask(prompt, function (tok) {
            if (!/^[+-]?(\d+\.?\d*|\.\d+)$/.test(tok)) {
                println('Exception in thread "main" java.util.InputMismatchException', 'jt-err');
                println('\tat java.base/java.util.Scanner.throwFor(Scanner.java:939)', 'jt-err');
                finish(1);
                return;
            }
            cb(parseFloat(tok));
        });
    }
    function runProgram() {
        session++;
        body.innerHTML = '';
        btnAgain.hidden = true;

        println('===== SIMPLE CALCULATOR =====');
        askNumber('Enter first number: ', function (num1) {
            ask('Enter operator (+, -, *, /): ', function (tok) {
                var operator = tok.charAt(0);
                askNumber('Enter second number: ', function (num2) {
                    var result;
                    switch (operator) {
                        case '+': result = num1 + num2; println('Result: ' + javaDouble(result)); break;
                        case '-': result = num1 - num2; println('Result: ' + javaDouble(result)); break;
                        case '*': result = num1 * num2; println('Result: ' + javaDouble(result)); break;
                        case '/':
                            if (num2 !== 0) { result = num1 / num2; println('Result: ' + javaDouble(result)); }
                            else println('Error: Cannot divide by zero!');
                            break;
                        default: println('Invalid operator!');
                    }
                    finish(0);
                });
            });
        });
    }

    function open(trigger) {
        lastTrigger = trigger;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        runProgram();
    }
    function close() {
        session++;
        overlay.hidden = true;
        document.body.style.overflow = '';
        if (lastTrigger) lastTrigger.focus();
    }

    triggers.forEach(function (t) {
        t.addEventListener('click', function (e) { e.preventDefault(); open(t); });
    });
    btnClose.addEventListener('click', close);
    btnAgain.addEventListener('click', runProgram);
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
    body.addEventListener('click', function () {
        var inp = body.querySelector('.jt-input');
        if (inp) inp.focus();
    });
    document.addEventListener('keydown', function (e) {
        if (!overlay.hidden && e.key === 'Escape') close();
    });
})();
