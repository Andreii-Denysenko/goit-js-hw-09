const t={btStart:document.querySelector("[data-start]"),btStop:document.querySelector("[data-stop]")};t.btStart.addEventListener("click",(function(){e=setInterval(a,1e3),t.btStart.disabled=!0,t.btStop.disabled=!1})),t.btStop.addEventListener("click",(function(){clearInterval(e),t.btStart.disabled=!1})),t.btStop.disabled=!0;let e=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.771fe8cf.js.map