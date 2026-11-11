
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your full name: ", Bhawana Bhusal {

    rl.question("Enter your Student ID: ", U3129236 {

        rl.question("Enter your Lab Group Number: ", Gr {

            console.log("\n----- Student Information -----");

            console.log("Student Name: " + name);
            console.log("Student ID: " + studentID);
            console.log("Lab Group: " + labGroup);

            // Display current date and time
            const currentDateTime = new Date();

            console.log("\nCurrent Date and Time:");
            console.log(currentDateTime.toLocaleString());

            // Arrow function for favourite programming language
            const favouriteLanguage = () => {
                console.log("\nFavourite Programming Language: JavaScript");
            };

            favouriteLanguage();
            // Calculate the last four digits of Student ID
            const lastFourDigits = studentID.slice(-4);

            let total = 0;

            for (let i = 0; i < lastFourDigits.length; i++) {
                total += Number(lastFourDigits[i]);
            }

            console.log("\nVerification Number: " + total);

            rl.close();
        });
    });
});

