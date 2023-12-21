export default function getErrorByStatus(status: number) {
    const errorType: any = {
      500: "Серверная ошибка, попробуйте позже",
      409: "Пользователь с такими данными уже существует",
    };
  
    return errorType[status];
  }
  