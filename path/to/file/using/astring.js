import astring from "astring"

// Example AST
const ast = {
  type: "Program",
  body: [
    {
      type: "ExpressionStatement",
      expression: {
        type: "Literal",
        value: "Hello, world!",
      },
    },
  ],
}

// Generate code from AST
const code = astring.generate(ast)

console.log(code)

