
// Error response
interface ErrorResponse {
  response?: ErrorData;
}

interface ErrorData {
  data: ErrorMessage;
}

interface ErrorMessage {
  code: number;
  message: string;
}
