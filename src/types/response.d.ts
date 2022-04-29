// Error response
interface ErrorResponse {
  response?: ErrorData;
  config?: any;
}

interface ErrorData {
  data: ErrorMessage;
  status: number;
}

interface ErrorMessage {
  code: number;
  message: string;
}
