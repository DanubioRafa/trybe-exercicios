
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const func = (object) => {
      const {spring, summer, autumn, winter} = object;
      return [...winter, ...spring, ...summer, ...autumn];
  }
  console.log(func(yearSeasons));