# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - I build this project using React 
    )
  - [What I learned](i-learned filter function in react and how to use it to filter the data
  - )
- [Author](#OtabekToshtemirov)
- [Acknowledgments](
-  I want to thank my mentor for helping me to solve this challenge
  )


## Overview

### The challenge


### Screenshot
 
![image](./public/Снимок%20экрана%20(226).png)
![image](./public/Снимок%20экрана%20(227).png)




### Links

- Solution URL: [Add solution URL here](https://github.com/OtabekToshtemirov/jobListing)
- Live Site URL: [Add live site URL here](https://precious-twilight-054062.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned
   With building this project I learned how to use filter function in react and how to use it to filter the data
    I also learned how to use map function in react to map the data and display it on the screen ,how to use props in react to pass the data from one component to another
   ,how to use state in react to change the state of the component ,how to use useState hook in react to change the state of the component ,how to use useEffect hook in react to change the state of the component ,how to use ternary operator in react to change the state of the component



```js
const updateData = () => {
    if (skills.length < 1) {
        setData(originalData);
    } else {
        const newData = originalData.filter((item) => {
            const allSkills = [...item.languages, ...item.tools, item.level, item.role];
            return skills.every((skill) => allSkills.includes(skill));
        });

        setData(newData);
    }
}
```


## Author

- Website - [OtabekToshtemirov](https://otabek98.netlify.com)
- Frontend Mentor - [@OtabekToshtemirov](https://www.frontendmentor.io/profile/OtabekToshtemirov)
- Twitter - [@ToshtemirovOta](https://twitter.com/ToshtemirovOta)


