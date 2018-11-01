const program = require('commander');

program
  .version('0.1.0', '-v, --version')
  // .command('pizza')
  .description('Order a pizza with your preferred toppings')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [name]', 'Add the specified type of cheese', undefined)
  .option('-$, --card <name>', 'Indicate the payment card', 'visa')
  // .option('-l, --list <items>', 'Specify list items', list, [1,2,3])
  .parse(process.argv);

if (program.peppers || program.peppers || program.bbqSauce || program.cheese) {
  console.log('you ordered a pizza with:');
  if (program.peppers) console.log('  - peppers');
  if (program.pineapple) console.log('  - pineapple');
  if (program.bbqSauce) console.log('  - bbq');
  if (program.cheese) console.log('  - %s cheese',
    (typeof program.cheese === 'boolean') ? 'standard' : program.cheese);
}
else
  console.log('you ordered a standard pizza');
console.log(`you will pay with ${program.card}`);

// function list(val) {
//   return val.split(',').map(Number);
// }

// console.log(`program.list: ${JSON.stringify(program.list)}`);
