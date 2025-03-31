// regular loops
let chickenSandwiches = [
  {
    type: "grilled",
    store: "wendys",
  },
  // wait 3 seconds
  {
    type: "fried",
    store: "chickfila",
  },
  // wait 3 seconds
  {
    type: "grilled",
    store: "grill house",
  },
  {
    type: "fried",
    store: "mcdonalds",
  },
];

const firstTwoSandwiches = chickenSandwiches.slice(0, 2);
// [{type: 'grilled', store: 'wendys'}, {type: 'fried', store: 'chickfila'}]

const grilledSandwiches = chickenSandwiches.map((sandwich) => {
  if (sandwich.type === "grilled") {
    console.log(`${sandwich.type} chicken sandwich at ${sandwich.store}`);
  }
});
