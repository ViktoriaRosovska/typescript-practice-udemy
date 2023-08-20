interface IPayment {
  sum: number;
  from: number;
  to: Number;
}

enum PaymentStatus {
  Success1 = "success",
  Failed1 = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  erroroMessage: "string";
  errorCode: 4;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed1;
  data: IDataFailed;
}

function get(): IResponseFailed | IResponseSuccess {
  return {
    status: PaymentStatus.Success1,
    data: {
      databaseId: 567,
      sum: 10000,
      from: 2,
      to: 4,
    },
  };
}
