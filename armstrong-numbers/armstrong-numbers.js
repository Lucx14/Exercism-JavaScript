export const isArmstrongNumber = (num) => {
  let accumulator = 0;
  const numbers = num.toString().split('');
  
  for (const number of numbers) {
    accumulator += parseInt(number)**numbers.length;
  }
  return accumulator === num ? true : false;
};
