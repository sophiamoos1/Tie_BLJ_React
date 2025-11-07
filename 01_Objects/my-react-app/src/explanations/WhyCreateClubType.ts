type Text = {
    part1: string;
    part2: string;
}

function WhyCreateClubType() {
    const greetingsPart2 = "how are you doing?";
    const farewellsPart2 = "See you soon!";
    
    const greeting1: Text = {part1: "Hello World ", part2: greetingsPart2}
    const greeting2: Text = {part1: "Heyy Guys, ", part2: greetingsPart2}
    const greeting3: Text = {part1: "Long time no see, ", part2: greetingsPart2}

    const farewell1: Text = {part1: "It was nice to see you", part2: farewellsPart2}
    const farewell2: Text = {part1: "Thank you for your time ", part2: farewellsPart2}
}