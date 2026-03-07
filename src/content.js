(() => {
    const documentClone = document.cloneNode(true);
    
    const reader = new Readability(documentClone);
    const article = reader.parse();
    
    if (article) {
        console.log("Extraction successful!", article);
    
        chrome.runtime.sendMessage({
            action: "extraction_complete",
            data: article
        });
    } else {
      console.error("Readability failed to parse this page.");
      
      chrome.runtime.sendMessage({
        action: "extraction_failed"
      });
    }
})();