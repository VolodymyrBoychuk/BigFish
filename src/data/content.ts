// content.js
export const markdownContent = [
  `
  # Markdown syntax guide
  
  ## Headers
  
  # This is a Heading h1
  ## This is a Heading h2
  ###### This is a Heading h6
  
  ## Emphasis
  
  *This text will be italic*  
  _This will also be italic_
  
  **This text will be bold**  
  __This will also be bold__
  _You **can** combine them_
  
  ## Lists
  
  ### Unordered
  
  * Item 1
  * Item 2
  * Item 2a
  * Item 2b
      * Item 3a
      * Item 3b
  
  ### Ordered
  
  // 1. Item 1
  // 2. Item 2
  // 3. Item 3
  //     1. Item 3a
  //     2. Item 3b
  
  ## Links
  [This is a link](https://www.google.com)
  
  ## Blockquotes
  > This is a blockquote
  > This is a blockquote
  
  ## Tables
  | Tables        | Are           | Cool  |
  | ------------- |:-------------:| -----:|
  | col 3 is      | right-aligned | \$1600 |
  | col 2 is      | centered      |   \$12 |
  | col 1 is      | left-aligned  |    \$1 |
  

    `,
  `
      ## Block of code
  \`\`\`swift
  class Person {
      var name: String
      var age: Int
  
      init(name: String, age: Int) {
          self.name = name
          self.age = age
      }
  
      func greet() {
          print("Привіт, мене звати \(name) і мені \(age) років.")
      }
  }
  
  let person = Person(name: "Оля", age: 25)
  person.greet()
  \`\`\`
  ## Inline code
  This is \`inline code\`
  
  ## Images
  ![This is an image](https://deutschvektor.com/images/blog/image_describe_b1.jpg "Image Title")
  ![This is an image](https://deutschvektor.com/images/blog/image_describe_b1.jpg "Image Title")
    `,
];
