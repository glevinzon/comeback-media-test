# Comeback Media: Web Developer Exercise

## Overview

Using NextJS and Tailwind, please implement the following blog post design coupled with infinite scroll capability:

[Design Link](https://www.figma.com/design/yq5Bt9wZuk4CZz4VsLHq7S/%E2%9D%96-PREVIEW-%E2%9D%96-UntitledUI-%E2%80%93-PRO-VARIABLES-(v5.0)?node-id=1639-292339&t=4hK8xT2rhXK8ynRU-4)

### Ignored Elements

The following elements are to be ignored in the implementation:

* The top navigation bar
* Everything under the divider after "Conclusion -> Share this post"

### Implementation Requirements

We’re just looking for the main body of the article to be implemented. The following criteria must be met:

* All elements within the article body are to be implemented
* As the user scrolls to the end of the article, the next article is loaded below
* A progress bar is shown and sticky at the top of the page which indicates the current scroll state of the current article in view. This should reset when the next article is being scrolled through.

### Technical Requirements

The implementation must include:

* NextJS with the App Router
* Tailwind
* Typescript

### Considerations

The following considerations should be taken into account:

* Is the implementation responsive?
* Is Tailwind being used effectively?
* How reusable are your components?
* How friendly is your implementation with the NextJS router?

### Resources

* JSON array to populate the articles: [https://github.com/kineticinvestments/snippets/blob/main/example-articles.json](https://github.com/kineticinvestments/snippets/blob/main/example-articles.json)