// Classe genérica para elementos do DOM
class Component {
    constructor() {
      this._element = null;
    }
  
    get element() {
      return this._element;
    }
  
    build() {
      // Implementação genérica para criar o elemento
      this._element = document.createElement('div');
    }
  
    render(target) {
      // Adiciona o elemento na página
      if (target instanceof HTMLElement) {
        target.appendChild(this._element);
      } else {
        document.body.appendChild(this._element);
      }
    }
  }
  
  // Classe específica para elementos input
  class InputComponent extends Component {
    build() {
      this._element = document.createElement('input');
    }
  }
  
  // Classe específica para elementos label
  class LabelComponent extends Component {
    constructor(textContent) {
      super();
      this._textContent = textContent;
    }
  
    build() {
      this._element = document.createElement('label');
      this._element.textContent = this._textContent;
    }
  }
  
  // Classe específica para elementos form
  class FormComponent extends Component {
    constructor() {
      super();
      this._children = [];
    }
  
    addElement(child) {
      if (child instanceof Component) {
        this._children.push(child);
      } else {
        console.error('Invalid child. Must be an instance of Component.');
      }
    }
  
    build() {
      this._element = document.createElement('form');
      this._children.forEach(child => {
        child.build();
        this._element.appendChild(child.element);
      });
    }
  }
  
  // Exemplo de uso
  const input = new InputComponent();
  input.build();
  
  const label = new LabelComponent('Input Label');
  label.build();
  
  const form = new FormComponent();
  form.addElement(input);
  form.addElement(label);
  form.build();
  
  // Renderizando na página
  input.render();
  label.render();
  form.render(document.body);