# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



```css
$colors: (
    'orange': hsl(25, 97%, 53%),
    'white': hsl(0, 0%, 100%),
    'light-grey': hsl(217, 12%, 63%),
    'medium-grey': hsl(216, 12%, 54%),
    'dark-blue': hsl(213, 19%, 18%),
    'very-dark-blue': hsl(216, 12%, 8%)
);


@function getColors($color){
    @return map-get($colors, $color);
}

@mixin flexDirection($direction) {
    justify-content: $direction;
    align-items: $direction;
}
```
```js
const rates = document.querySelectorAll('.rate')
const rateHolder = document.querySelector('.rate__holder')
const thankyouCard = document.querySelector('.thankyou-card')

const ln = rates.length
let selected;

rates.forEach(rate => rate.addEventListener('mousedown', handleRates))

function handleRates() {
    const btn = document.querySelector('button')
    this.classList.toggle('rate__active')
    const selected = parseInt(this.innerHTML)
    const textNode = `You selected ${selected} out of ${ln}`

    btn.addEventListener('click', function(){
        rateHolder.classList.add('d-none')
        document.querySelector('.text-selection').innerHTML=textNode
        thankyouCard.classList.remove('d-none')
    })    


}

```

## Author
- Twitter - [@yourusername](https://www.twitter.com/hakifred201)

