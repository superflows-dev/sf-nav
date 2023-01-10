function runScripts(element: HTMLElement): any {
    Array.from(element.querySelectorAll("script"))
    .forEach( (oldScriptEl:any) => {
      const newScriptEl = document.createElement("script");
      Array.from(oldScriptEl.attributes).forEach( (attr: any) => {
        newScriptEl.setAttribute(attr.name, attr.value) 
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