/* Enum allow us to define a set of Named Constant to reuse in our code */
/* Enum also does Auto Complete */

// NOTE - each Constant value is assigned with default number value
// we can change the default value which changes other default values accordingly
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

// Instead of saying value of 3, it says the type is OrderStatus.DELIVERED
// which is readable, make sense & reuse the code
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// String Enums
enum Responses {
  NO = "No",
  YES = "Yes",
  MAYBE = "Maybe",
}

// Heterogenous Enums - mix types
enum ResponsesTwo {
  NO,
  YES = 2,
  MAYBE = "Maybe",
}

// adding 'const' to avoid extra js codes
const enum Cool {
  TRY,
}

// note - above will return a Enum's value only
console.log(Cool.TRY); // 0 /* Cool.TRY */
