document.getElementById('up').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: "run_readability"
  })
})