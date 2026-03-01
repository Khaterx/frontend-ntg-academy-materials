# TypeScript Fundamentals (Beginner Crash Notes)

## What is TypeScript?
TypeScript is a typed superset of JavaScript that adds static type-checking and then compiles to JavaScript.

## install
1. Download `NodeJs`
```cmd
node -v
npm -v
```

2. .  Create `Package.json` using :
```cmd
npm init
```

3. Install TypeScript
```cmd
npm install -g typescript --save-dev
npm i -g typescript --save-dev
npx tsc -v
```

4. Edit TypeScript compiler configuration
```cmd
npm tsc --init
npx tsc --init
```




## Quick start
- Online: Use the TypeScript Playground to experiment quickly.
- Local:
  - Install: `npm i -D typescript`
  - Init config: `npx tsc --init`
  - Compile: `npx tsc` (or `npx tsc file.ts`) 

## Types you’ll use every day
TypeScript supports JavaScript’s common value types and provides ways to describe them. 

```ts
let username: string = "Ali";
let age: number = 26;
let active: boolean = true;

let ids: number[] = [1, 2, 3];
let tags: Array<string> = ["backend", "java"];

// Prefer unknown over any when you truly don't know the type yet.
let payload: unknown;
```

## Functions
Functions can have parameter and return type annotations. 

```ts
function add(a: number, b: number): number {
  return a + b;
}

const toUpper = (s: string): string => s.toUpperCase();
```

### Optional params and defaults
```ts
function greet(name: string, title?: string) {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

function greet2(name: string, title = "Mr") {
  return `Hello, ${title} ${name}`;
}
```

## Objects: interface and type
Interfaces describe the shape of objects (properties and their types).
```ts
interface User {
  id: string;
  email: string;
  isActive: boolean;
}

const u: User = { id: "1", email: "a@b.com", isActive: true };
```

Type aliases can also describe object shapes and more (unions, intersections, etc.). [web:20]

```ts
type Point = { x: number; y: number };
```

## Union types (either/or)
A union type combines types; values may be any one of the union members. 

```ts
type Id = string | number;

function formatId(id: Id): string {
  // You must narrow before using member-specific operations.
  return typeof id === "number" ? id.toFixed(0) : id.toUpperCase();
}
```

## Narrowing (type guards)
TypeScript refines ("narrows") a value’s type using control-flow checks like `typeof`, `in`, and user-defined type predicates.

```ts
type Fish = { swim(): void };
type Bird = { fly(): void };

function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) pet.swim();
  else pet.fly();
}
```

## Arrays and tuples
```ts
const pair: [string, number] = ["age", 26];
```

## Enums (use sparingly)
TypeScript supports enums; many codebases prefer union-of-literals for simpler JS output and flexibility. 

```ts
type Role = "ADMIN" | "USER";
```

## Generics (reusable + type-safe)
Generics capture relationships between inputs and outputs.
```ts
function wrap<T>(value: T): { value: T } {
  return { value };
}

const a = wrap(123);      // { value: number }
const b = wrap("hello"); // { value: string }
```

## Common utility types (starter set)
```ts
type UserPreview = Pick<User, "id" | "email">;
type UserUpdate = Partial<User>;
type ReadonlyUser = Readonly<User>;
```

## tsconfig: strict mode (recommended)
Turning on `strict` enables a wide range of type-checking options for stronger correctness guarantees. 

Minimal example:
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## Practical beginner checklist
- Prefer `unknown` over `any` when possible.
- Model finite states with unions (e.g., `"idle" | "loading" | "error"`).
- Turn on `strict` early; fix types as you go. 
- Let inference work for you; annotate function boundaries and public APIs first. 

