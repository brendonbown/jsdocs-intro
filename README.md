# Introduction to JSDocs

Humans are forgetful creatures. We can only keep so many things in our head. It's why we have tools like calendars,
notebooks, alarms, and so many other tools that help us to remember things.

Though we'd like to think otherwise, programmers are no different. We have so many things to keep track of, it's hard
to keep them straight. We are trying to simulate a whole computer in our brains, after all! It's quite a difficult task
to perform, and it doesn't help that we are having to jump from file to file trying to figure out the next step in the
process.

That's why documentation was created. Documentation gives a high-level definition of the code it is describing and
allows the coder to get an idea of what the code does without having to decipher the code itself. And this is helpful
for the person who writes the code just as much as anyone else.

The most useful form of documentation that we can write as programmers are comments. Comments are inline notes that give
more details about the code it surrounds. And, thanks to tools that have been developed, these comments can be used not
just by the programmer, but by the IDE. It can give argument hints, link to definitions, and even do typechecking.

Well, enough abstract talk. Let's dive right in to the power of JSDocs, the system for documenting JavaScript.

## Describe a function

## Thoughts

Tags:
  * @type
  * @param
  * @returns

Types:
  * primitives (`string`, `number`, `null`, `undefined`, etc.)
  * objects (`{a: string, b: number}`)
  * optionals (`string?`)
  * functions (`function(string): number`)
  * disjoint unions (`string | boolean`)
  * arrays (`string[]`)
  * maps (`{[key: string]: number}`)

Examples
  * Describe a function
  * Add type prompts
  * Type checking
  * More complicated types