// script.js

// Simulate fetching random stock data
function fetchRandomStock() {
    const stockSymbols = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'MSFT'];
    const randomSymbol = stockSymbols[Math.floor(Math.random() * stockSymbols.length)];
    const price = (Math.random() * 1000).toFixed(2);
    return {
        symbol: randomSymbol,
        price: price
    };
}

// Function to add stock to the watchlist
function addToWatchlist(stock) {
    const watchlistItems = document.getElementById('watchlistItems');

    // Check if stock is already in the watchlist
    const existingItems = watchlistItems.querySelectorAll('li');
    for (const item of existingItems) {
        if (item.textContent.includes(stock.symbol)) {
            alert(`${stock.symbol} is already in your watchlist!`);
            return;
        }
    }

    // Create a new list item for the watchlist
    const li = document.createElement('li');
    li.innerHTML = `${stock.symbol}: $${stock.price} <button onclick="removeFromWatchlist(this)">Remove</button>`;
    watchlistItems.appendChild(li);
}

// Function to remove stock from the watchlist
function removeFromWatchlist(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}

// Function to update the main stock list every 5 seconds
function updateStockList() {
    const stockList = document.getElementById('stockList');
    const newStock = fetchRandomStock();

    const div = document.createElement('div');
    div.classList.add('stock-item');
    div.innerHTML = `${newStock.symbol}: $${newStock.price} <button onclick="addToWatchlist(${JSON.stringify(newStock)})">Add to Watchlist</button>`;
    stockList.appendChild(div);
}

// Initial update and set interval for new stocks
setInterval(updateStockList, 5000); // Fetch a new stock every 5 seconds
updateStockList(); // Initial stock data
