// code editor functions
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = "";
    
    try {
        let consoleOutput = [];
        const originalConsoleLog = console.log;
        console.log = function(message) {
            consoleOutput.push(message);
            originalConsoleLog.apply(console, arguments);
        };
        
        let result = eval(code);
        console.log = originalConsoleLog;
        
        if (consoleOutput.length > 0) {
            outputDiv.innerText = consoleOutput.join("\n");
        } else {
            outputDiv.innerText = result !== undefined ? result : "Code executed successfully";
        }
    } catch (error) {
        outputDiv.innerText = "Error: " + error.message;
    }
}

function saveCode() {
    const code = document.getElementById('codeEditor').value;
    localStorage.setItem('savedCode', code);
    alert('Code saved!');
}

function loadCode() {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        document.getElementById('codeEditor').value = savedCode;
    } else {
        alert('No saved code found.');
    }
}

function clearOutput() {
    document.getElementById("output").innerText = "";
}

// code snippet
function copyCode() {
    const code = document.getElementById("codeSnippet").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}