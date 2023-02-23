// файл script.js
window.onload = function () {

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let check_null

    // окно вывода результата
    outputElement = document.getElementById("result")

    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        check_null = 0
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                if (check_null == 0 & a != '0'){
                a += digit
                } else {
                    a = digit
                }
            }
            outputElement.innerHTML = a
        } else {
            check_null = 0
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                if (check_null == 0 & b != '0'){
                    b += digit
                    } else {
                        b = digit
                    }
                outputElement.innerHTML = b
            }
        }
    }

    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function () {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });

    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function () {
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function () {
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function () {
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function () {
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_backspace").onclick = function () {
        if (a !== '') {
            b = b.substring(0, b.length - 1);
            outputElement.innerHTML = b
        }

        if (b === '') {
            a = a.substring(0, a.length - 1);
            outputElement.innerHTML = a
        }
    }
    document.getElementById("btn_op_sign").onclick = function () {
        if (a !== '') {
            a = -a
            outputElement.innerHTML = a
        }
        if (b !== '') {
            b = -b
            outputElement.innerHTML = b
        }
    }

    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function () {
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function () {
        if (a === '' || b === '' || !selectedOperation)
            return

        switch (selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }

        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = a
    }
};

function change_theme() {
    body_theme_id = document.getElementById("body_theme_id")
    button_value = document.getElementById("change_theme_button")

    if (button_value.value == "Черный фон") {
        button_value.value = "Серый фон";
        body_theme_id.style.cssText = 'background-color: gray;';
    }
    else {
        button_value.value = "Черный фон";
        body_theme_id.style.cssText = 'background-color: black;';
    }
};