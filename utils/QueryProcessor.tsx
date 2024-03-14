export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "rluo2"
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "Big R"
    );
  }

  if (query.toLowerCase().includes("What is") &&  query.toLowerCase().includes("plus")) {
    let num1 : number = Number(query.split(" ")[2]);
    let num2 : number = Number(query.split(" ")[4]);
    
    return (
      (num1 + num2).toString();
    );
  }

  return "";
}
