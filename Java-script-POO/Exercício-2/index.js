class Author {
    constructor(name) {
      this.name = name;
      this.posts = [];
    }
  
    createPost(title, content) {
      const post = new Post(title, content, this);
      this.posts.push(post);
      return post;
    }
}
  
class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

class Comment {
constructor(author, text) {
    this.author = author;
    this.text = text;
}
}

// Exemplo de uso
const author1 = new Author("Autor 1");
const post1 = author1.createPost("Título do Post 1", "Conteúdo do Post 1");

const author2 = new Author("Autor 2");
const comment1 = new Comment(author2, "Comentário 1 no Post 1");
post1.addComment(comment1);

const comment2 = new Comment(author1, "Comentário 2 no Post 1");
post1.addComment(comment2);

console.log(post1);
console.log(author1.posts);