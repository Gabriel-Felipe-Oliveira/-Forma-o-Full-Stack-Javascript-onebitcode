function show() {
    // ...
  
    // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)
  }