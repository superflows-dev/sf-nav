function runScripts(element) {
    Array.from(element.querySelectorAll("script"))
        .forEach((oldScriptEl) => {
        const newScriptEl = document.createElement("script");
        Array.from(oldScriptEl.attributes).forEach((attr) => {
            newScriptEl.setAttribute(attr.name, attr.value);
        });
        const scriptText = document.createTextNode(oldScriptEl.innerHTML);
        newScriptEl.appendChild(scriptText);
        oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
    });
}
const exportFunctions = {
    runScripts
};
export default exportFunctions;
//# sourceMappingURL=runScripts.js.map