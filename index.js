// Object literal pattern
const prompt=require("prompt-sync")({sigint:true});
  
  // Constructor class
  class Cart {
    constructor() {
      this.cartArray = [];
      this.addToCart = function(product) {
        this.cartArray.push(product);
        console.log(`${product} has been added from the cart.`);
      };
      this.removeFromCart = function(product) {
        this.cartArray.splice(this.cartArray.indexOf(product), 1);
        console.log(`${product} has been removed from the cart.`);
      };
      this.standby = function() {
        let command;
        do {
          console.log("Enter a command: add, remove, show-items, length, or exit");
          command = prompt();
          switch (command) {
            case "add":
              let product = prompt("Enter the product name:");
              this.addToCart(product);
              break;
            case "remove":
              let productw = prompt("Enter the product name:");
              this.removeFromCart(productw);
              break;
            case "show-items":
              console.log("The items in the cart are: " + this.cartArray.join(", "));
              break;
            case "length":
              console.log("The number of items in the cart is: " + this.cartArray.length);
              break;
            case "exit":
              console.log("Exiting...");
              break;
            default:
              console.log("Invalid command.");
          }
        } while (command !== "exit");
      };
    }
  }
  
  // Create a new cart object
  const myCart = new Cart();
  
  // Call the standby method
  myCart.standby();
  