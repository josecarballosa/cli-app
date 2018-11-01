# commander-test
cli app demo that uses [commander library](https://www.npmjs.com/package/commander)

## Get a local copy

1. Clone this repository

   ```bash
   git clone https://github.com/carballosa/commande-test.git
   cd commander-test
   ```
1. Install app dependencies

   ```bash
   npm install
   ```
1. Build the app to the `dist` folder

   ```bash
   npm run build
   ```
1. Deploy app's entry point to the `bin` folder

   ```bash
   npm run deploy
   ```
1. Install app as a global `cli` package

   | WARNING: You need to perform this step from a console or terminal that is running as the user for which you want to install this command. For example, if you run it from VSCode integrated console, which normally runs as admin, then this command will only be available in consoles running as admin. |
   | --- |

   ```bash
   npm install -g
   ```

## Run the app

1. See app usage

   ```bash
   > pizza -h
   ```
   ```bash
    Usage: pizza [options]

    Order a pizza with your preferred toppings

    Options:

      -v, --version        output the version number
      -p, --peppers        Add peppers
      -P, --pineapple      Add pineapple
      -b, --bbq-sauce      Add bbq sauce
      -c, --cheese [name]  Add the specified type of cheese
      -$, --card <name>    Indicate the payment card (default: visa)
      -h, --help           output usage information
   ```

1. Check installed version

   ```bash
   > pizza -v
   ```
   ```bash
   0.1.0
   ```
1. Run without arguments

   ```bash
   > pizza
   ```
   ```bash
   you ordered a standard pizza
   you will pay with visa
   ```

1. Run with a non-default argument (not visa)

   ```bash
   > pizza -$ mastercard
   ```
   ```bash
   you ordered a standard pizza
   you will pay with mastercard
   ```

1. Run combining serveral flag arguments (multiple toppings)

   ```bash
   > pizza -pbc
   ```
   ```bash
   you ordered a pizza with:
     - peppers
     - bbq
     - standard cheese
   you will pay with visa
   ```
1. Run with a non-flag argument (not standard cheese)

   ```bash
   > pizza -c mozzarella
   ```
   ```bash
    you ordered a pizza with:
      - mozzarella cheese
    you will pay with visa
   ```
