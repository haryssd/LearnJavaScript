// 16. Create an object bankAccount with private variables using closure (create methods to deposit and withdraw).

function createBankAccount(initialBalance) {

    let balance = initialBalance ? initialBalance : 0;

    return {
        showBalance() {
            return balance;
        },

        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            balance -= amount;
            return balance;
        }
    };
}

const acc = createBankAccount(1000);

console.log(acc.showBalance());
console.log(acc.deposit(200));
console.log(acc.withdraw(300));


// Q17: Write code to clone an object original into a new object copy (shallow copy).

const original = {
    name: "Haris",
    age: 23,
    address: {
        state: "Kelantan",
        poscode: "17500"
    }
}

const copy = { ...original };

console.log(original);
console.log(copy)

copy.name = "Daniel";
console.log(original);

copy.address.state = "Terengganu";
console.log(original);

// Q18: Create an object with a getter and setter for a temperature property that converts between Celsius and Fahrenheit.

const temperature = {
    _celcius: 20,

    get celcius() {
        return this._celcius
    },

    set celcius(value) {
        this._celcius = value
    },

    get fahrenheit() {
        return (this._celcius * 9 / 5) + 32;
    },

    set fahrenheit(value) {
        this._celcius = (value - 32) * 5 / 9;
    }
}

temperature.celcius = 20;
console.log(temperature.celcius);
console.log(temperature.fahrenheit);


// Q19: Create an object library that contains an array of book objects, with a method to add new books and search for books by title.

const library = {
    book: [],

    addBook(title, pages) {
        const addBook = {
            title: title,
            pages: pages,
        }

        this.book.push(addBook)
    },

    searchBook(title) {
        return this.book.find(a => a.title === title)
    },
}

library.addBook("Hikayat", 20);
library.addBook("Aspalela", 330);
console.log(library.book)

console.log(library.searchBook("Hikayat"))

// Q20: Create an object playlist with methods to add songs, remove songs, and shuffle the playlist (stored as an array).

const playlist = {
    song: [],

    addSong(title, artist) {
        const newSong = {
            title: title,
            artist: artist
        }
        this.song.push(newSong);
    },

    removeSong(title) {
        const index = this.song.findIndex(song => song.title === title);
        if (index !== -1) {
            return this.song.splice(index, 1)[0];
        }
        return null;
    },

    shufflePlaylist() {
        for (let i = this.song.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.song[i], this.song[j]] = [this.song[j], this.song[i]];
        }
        return this.song;
    }
}


console.log(playlist.song)
playlist.addSong("Baby", "Justin")
playlist.addSong("Firework", "Adele")
playlist.addSong("Take to church", "Hozier")

console.log(playlist.song)
playlist.removeSong("Baby")
console.log(playlist.song)