class User {

    constructor(fullname ,email ,password){
        this.fullname = fullname 
        this.email = email
        this.password = password
    }

    login(userEmail, userPassword) {
        if (userEmail === this.email && userPassword === this.password) {
          console.log(`Login bem-sucedido para o usuário ${this.fullname}`);
        } else {
          console.log('Login falhou. Verifique o email e senha.');
        }
    }

}

// Exemplo de uso
const usuario1 = new Usuario('John Doe', 'john@example.com', 'senha123');
usuario1.login('john@example.com', 'senha123'); // Login bem-sucedido para o usuário John Doe
usuario1.login('john@example.com', 'senha456'); // Login falhou. Verifique o email e senha.

class Product {
    constructor(name, description, price) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.inStock = 0;
    }
  
    addToStock(quantity) {
      this.inStock += quantity;
      console.log(`${quantity} unidades adicionadas ao estoque. Novo total em estoque: ${this.inStock}`);
    }
  
    calculateDiscount(discountPercentage) {
      const discountAmount = (discountPercentage / 100) * this.price;
      const discountedPrice = this.price - discountAmount;
      console.log(`Preço com desconto de ${discountPercentage}%: $${discountedPrice.toFixed(2)}`);
      return discountedPrice;
    }

}
  
  // Exemplo de uso
const product1 = new Product('Produto A', 'Descrição do Produto A', 50.00);
console.log(`Estoque inicial: ${product1.inStock}`);
product1.addToStock(10); // 10 unidades adicionadas ao estoque. Novo total em estoque: 10

const discountedPrice = product1.calculateDiscount(10); 