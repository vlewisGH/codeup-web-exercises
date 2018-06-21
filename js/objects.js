(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    function human(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.sayHello = function(){
            return ('Hello from '+this.firstName+' '+this.lastName );
        };
    }

    var person = new human("Vincent","Lewis");


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    function qualifier(amtSpent){
        return((amtSpent >=200)? true:false);
    }
    function discounter(amtSpent){
        return (amtSpent - amtSpent* 0.12);
    }

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(shoppers[1].name);


    shoppers.forEach(function(shopper){
        console.log(shopper.name +' '+shopper.amount);
        console.log(qualifier(shopper.amount)?(shopper.name+' your total is: $'+ discounter(shopper.amount)):('sorry, no discount today '+ shopper.name+', your total is:'+shopper.amount));
        });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books=[
        {
            title: "The count of Monte Cristo",
            author: {
                firstName: "Alexandre",
                lastName: "Dumas"
            }
        },
        {
            title: "The Three Musketeers",
            author: {
                firstName: "Alexander",
                lastName: "Dumas"
            }
        },
        {
            title: "The Chrysalids",
            author: {
                firstName: "John",
                lastName: "Wyndam"
            }
        },
        {
            title: "Orthello",
            author: {
                firstName: "William",
                lastName: "Shakespeare"
            }
        },
        {
            title: "On Liberty",
            author: {
                firstName: "John",
                lastName: "Mills"
            }
        }

    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
     function showbooks() {
        books.forEach(function (book, index) {
            return ('Book' + (index + 1) + '\n Title: ' + book.title + '\n Author: ' + book.author.firstName + ' ' + book.author.lastName);
        });
    }

    function createBook(title,firstName,lastName){
        var newBook={
            title: title,
            Author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        return newBook;
    }
    function addBook(){
         var confirmation = true;
         do{
             if (confirm("") )
         }while(confirmation === true)
    }
         books.push(createBook('Harry Potter','J.K','Rowland'));

    showbooks(books);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
