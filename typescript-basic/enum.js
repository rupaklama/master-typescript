/* Enum allow us to define a set of Named Constant to reuse in our code */
// NOTE - each Constant value is assigned with default number value
// we can change the default value
var OrderStatus;
(function (OrderStatus) {
  OrderStatus[(OrderStatus["PENDING"] = 0)] = "PENDING";
  OrderStatus[(OrderStatus["SHIPPED"] = 1)] = "SHIPPED";
  OrderStatus[(OrderStatus["DELIVERED"] = 2)] = "DELIVERED";
  OrderStatus[(OrderStatus["RETURNED"] = 3)] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
// Instead of saying value of 3, it says the type is OrderStatus.DELIVERED
// which is readable, make sense & reuse the code
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
  return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
// String Enums
var Responses;
(function (Responses) {
  Responses["NO"] = "No";
  Responses["YES"] = "Yes";
  Responses["MAYBE"] = "Maybe";
})(Responses || (Responses = {}));
// Heterogenous Enums - mix types
var ResponsesTwo;
(function (ResponsesTwo) {
  ResponsesTwo[(ResponsesTwo["NO"] = 0)] = "NO";
  ResponsesTwo[(ResponsesTwo["YES"] = 2)] = "YES";
  ResponsesTwo["MAYBE"] = "Maybe";
})(ResponsesTwo || (ResponsesTwo = {}));

// note - above will return a Enum's value only
console.log(0 /* Cool.TRY */);
