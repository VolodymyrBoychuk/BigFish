import BlogImage from '../assets/Blog/Placeholder-Image.png';
import space from '../assets/Blog/space.png';
import hands from '../assets/Blog/hands.png';

export const blogPosts = [
  {
    id: '1',
    title: 'Why I Still Use UIKit in 2024 (And When SwiftUI Isn’t Enough)',
    text: 'A practical breakdown of when UIKit still outperforms SwiftUI — from scroll performance to layout control — and how we blend both in real apps.',
    image: BlogImage,
    content: `
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
  },
  {
    id: '2',
    title: 'From Concept to App Store: How We Built CarpTracker with Combine + Realm',
    text: 'An inside look at how we built a real-world SwiftUI/Combine app with offline-first storage, session analytics, and a hybrid UIKit system.',
    image: space,
    content: `

     ### Unordered
  
  * Item 1
  * Item 2
  * Item 2a
  * Item 2b
      * Item 3a
      * Item 3b

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
  },
  {
    id: '3',
    title: 'Bridging UIKit + SwiftUI: Building a Reusable UICollectionView Component',
    text: 'Tutorial + architecture notes on creating a reusable, high-performance',
    image: hands,
    content: 'Full content for bridging UI...',
  },
  {
    id: '4',
    title: 'Fourth Blog Post',
    text: 'Something exciting...',
    image: BlogImage,
    content: 'Full content of fourth post...',
  },
  {
    id: '5',
    title: 'Why I Still Use UIKit in 2024',
    text: 'A practical breakdown...',
    image: BlogImage,
    content: 'Full blog post content for UIKit...',
  },
  {
    id: '6',
    title: 'From Concept to App Store',
    text: 'An inside look at how we built...',
    image: space,
    content: 'Full content for CarpTracker...',
  },
  {
    id: '7',
    title: 'Bridging UIKit + SwiftUI',
    text: 'Tutorial + architecture notes...',
    image: hands,
    content: 'Full content for bridging UI...',
  },
  {
    id: '8',
    title: 'Fourth Blog Post',
    text: 'Something exciting...',
    image: BlogImage,
    content: 'Full content of fourth post...',
  },
];
