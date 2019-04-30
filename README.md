## Flatiron Stock Exchange

Welcome to the Flatiron Stock Exchange!
Today, you are a broker who is trying to better organize the stocks available on the Flatiron Stock Market.
The database of stocks can be found in a JSON-server, so before you start your React server, make sure to start your JSON-server on `http://localhost:3000/stocks`.

```
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json
```

After the stocks are fetched, your job is to:
* Render all the stocks onto the page. The styling of how a Stock should look like is already in the `Stock.js` component.
* allow a user to buy a stock by clicking on it and when it is bought, it should be added to `My Portfolio`.
* allow a user to sell a stock in their `Portfolio` by clicking on the stock and it should be removed from their `Portfolio`.
* allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
* allow a user to filter stocks based on the type of the stock.

Best of luck!

## My flow for this prompt:

1. READ THE PROMPT.
2. Read it again.
3. Are there any components mentioned in the prompt that have not already been provided for you in the file structure?
    - If not, add those components.
    - If you import those components into the main render file (App.js) WITHOUT having actually creating them OR if there are syntax errors, you will see an error, referring to a missing > (referring you to HTML element).
    - “SyntaxError: Unexpected token < in JSON at position 0”
4. Scan all the files. Check for how many components you have in your /src folder. 
    - Are they containers? Containers are more likely to hold state (but not entirely necessary
    - Are they “lower level” components? Lower level components are typically functional components, allowing iteration over props data to render that data. These components may also contain event listeners that trigger an action in an upper level component (most likely updating its state)
5. Fetch data state and implement filter / sort functions where every component has access to that data. In this case, the PortfolioContainer and StockContainer both need access  to fetched data; therefore, put all data-manipulation functions in the component that holds these (MainContainer). 

