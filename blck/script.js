document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("rickroll").remove()
        function loadBLCK() {
            console.log("W.I.P")
        }
        function justToStockTheKeyPadSystemInAFunction() {
            let pass = ""
            function resetPassMsg() {
                document.getElementById("passmsg").innerText = "Password: " + pass
            }
            const BUTTONS = {
                one: document.getElementsByClassName("one")[0],
                two: document.getElementsByClassName("two")[0],
                three: document.getElementsByClassName("three")[0],
                four: document.getElementsByClassName("four")[0],
                five: document.getElementsByClassName("five")[0],
                six: document.getElementsByClassName("six")[0],
                seven: document.getElementsByClassName("seven")[0],
                eight: document.getElementsByClassName("eight")[0],
                nine: document.getElementsByClassName("nine")[0],
                reset: document.getElementsByClassName("reset")[0],
                verify: document.getElementsByClassName("verify")[0]
            }
            BUTTONS.one.onclick = () => {
                pass = pass + "1"
                resetPassMsg()
            }
            BUTTONS.two.onclick = () => {
                pass = pass + "2"
                resetPassMsg()
            }
            BUTTONS.three.onclick = () => {
                pass = pass + "3"
                resetPassMsg()
            }
            BUTTONS.four.onclick = () => {
                pass = pass + "4"
                resetPassMsg()
            }
            BUTTONS.five.onclick = () => {
                pass = pass + "5"
                resetPassMsg()
            }
            BUTTONS.six.onclick = () => {
                pass = pass + "6"
                resetPassMsg()
            }
            BUTTONS.seven.onclick = () => {
                pass = pass + "7"
                resetPassMsg()
            }
            BUTTONS.eight.onclick = () => {
                pass = pass + "8"
                resetPassMsg()
            }
            BUTTONS.nine.onclick = () => {
                pass = pass + "9"
                resetPassMsg()
            }
            BUTTONS.reset.onclick = () => {
                pass = ""
                resetPassMsg()
            }
            BUTTONS.verify.onclick = () => {
                if (pass == atob(atob(atob(atob(atob("VmtaYVUxVnJNSGROV0VaWFZrWktUMXBYZUhKTlZsRjNWVzF3VGxKVVJsWlZNV2gzVkRKR2MxWlVhejA9")))))) {
                    console.log("Access Granted")
                    loadBLCK()
                } else {
                    console.log("Access Denied")
                }
            }
        }
        justToStockTheKeyPadSystemInAFunction()
    }, 1500)
})