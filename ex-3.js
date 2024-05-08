class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  class Post {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.comments = [];
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
  }
  
  class Comment {
    constructor(id, content, createdBy) {
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.likes = 0;
    }
  
    addLike() {
      this.likes++;
    }
  }
  
  class Facebook {
    constructor() {
      this.groupList = [];
      this.pageList = [];
    }
  
    addGroup(group) {
      this.groupList.push(group);
    }
  
    addPage(page) {
      this.pageList.push(page);
    }
  }
  
  class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }
  
  class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Notification {
    constructor(id) {
      this.id = id;
    }
  
    send() {
      console.log(`Notification: ${this.comment.createdBy} has just commented on this post—"${this.post.title}"`);
    }
  }
  
  
  const user1 = new User("1", "Alice", "alice@example.com");
  const post1 = new Post("1", "Hello World", "This is my first post on Facebook!");
  const comment1 = new Comment("1", "Nice post!", "Bob");
  post1.addComment(comment1);
  const notification1 = new Notification("1");
  notification1.comment = comment1;
  notification1.post = post1;
  notification1.send();
  
