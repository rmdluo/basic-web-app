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

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus") && query.split(" ").length >= 5) {
    let num1 : number = Number(query.split(" ")[2]);
    let str2 : string = query.split(" ")[4];
    let num2 : number = Number(str2.slice(0, -1));
    
    return (
      (num1 + num2).toString()
    );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by") && query.split(" ").length >= 6) {
    let num1 : number = Number(query.split(" ")[2]);
    let str2 : string = query.split(" ")[5];
    let num2 : number = Number(str2.slice(0, -1));
    
    return (
      (num1 * num2).toString()
    );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of") && query.split(" ").length >= 8) {
    let num1 : number = Number(query.split(" ")[2]);
    let str2 : string = query.split(" ")[7];
    let num2 : number = Number(str2.slice(0, -1));
    
    return (
      (Math.pow(num1, num2)).toString()
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:") && query.split(" ").length >= 11) {
    let num1 : number = Number(query.split(" ")[8].slice(0, -1));
    let num2 : number = Number(query.split(" ")[9].slice(0, -1));
    let num3 : number = Number(query.split(" ")[10].slice(0, -1));
    
    return (
      (Math.max(num1, num2, num3)).toString()
    );
  }

  return "";
}
